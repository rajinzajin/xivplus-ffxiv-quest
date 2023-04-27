const fs = require("fs");
const axios = require("axios");

const getQuests = async () => {
	const res = await axios(
		"https://raw.githubusercontent.com/rajinzajin/ffxiv-data-csv/master/csv/JournalGenre.csv"
	);
	return res.data;
};

const csv = require("csv-parser");
const { Readable } = require("stream");

function removeCsvLine(csvString, n) {
	// Split the CSV string into an array of lines
	let lines = csvString.split("\n");
	// Remove the nth line from the array of lines
	lines.splice(n, 1);
	// Join the array of lines back into a CSV string
	let newCsvString = lines.join("\n");
	return newCsvString;
}

function parseKeys(){
	getQuests().then((quest_csv) => {
		let newCSV = removeCsvLine(quest_csv, 0); //remove unused row
		newCSV = removeCsvLine(newCSV, 1); //remove unused row
		const csvStream = Readable.from(newCSV);
		const result = []
		csvStream
			.pipe(csv())
			.on("data", (data) => {
				result.push(data)
			})
			.on("end", () => {
				console.log("CSV parsing complete!");
			});
	});
}

function parseJournalGenre(){
	getQuests().then((quest_csv) => {
		let newCSV = removeCsvLine(quest_csv, 0); //remove unused row
		newCSV = removeCsvLine(newCSV, 1); //remove unused row
		const csvStream = Readable.from(newCSV);
		const result = []
		csvStream
			.pipe(csv())
			.on("data", (data) => {
				const id = data["#"];
				const Icon = data["Icon"]
				const Name = data["Name"]
				result.push({id, Icon, Name});
			})
			.on("end", () => {
				fs.writeFileSync("./data/journal_genre.json", JSON.stringify(result));
				console.log("CSV parsing complete!");
			});
	});
}

parseJournalGenre()