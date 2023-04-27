const fs = require("fs");
const axios = require("axios");

const getQuests = async () => {
	const res = await axios(
		"https://raw.githubusercontent.com/rajinzajin/ffxiv-data-csv/master/csv/Quest.csv"
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
				// const id = data["#"];
				// const name = data["Name"]
				result.push(data)
			})
			.on("end", () => {
				fs.writeFileSync("./data/quest_keys.json", JSON.stringify(result[0]));
				console.log("CSV parsing complete!");
			});
	});
}

function parseQuestNames(){
	getQuests().then((quest_csv) => {
		let newCSV = removeCsvLine(quest_csv, 0); //remove unused row
		newCSV = removeCsvLine(newCSV, 1); //remove unused row
		const csvStream = Readable.from(newCSV);
		const result = []
		csvStream
			.pipe(csv())
			.on("data", (data) => {
				const id = data["#"];
				const name = data["Name"]
				console.log(name);
			})
			.on("end", () => {
				fs.writeFileSync("./data/quest_names.json", JSON.stringify(result));
				console.log("CSV parsing complete!");
			});
	});
}

function parseQuestDetail(){
	getQuests().then((quest_csv) => {
		let newCSV = removeCsvLine(quest_csv, 0); //remove unused row
		newCSV = removeCsvLine(newCSV, 1); //remove unused row
		const csvStream = Readable.from(newCSV);
		const result = []
		csvStream
			.pipe(csv())
			.on("data", (data) => {
				const id = data["#"];
				const name = data["Name"]
				const expansion = data["Expansion"]
				const JournalGenre = data["JournalGenre"]
				const ExpFactor = data["ExpFactor"]
				const ClassJob_Required = data["ClassJob{Required}"]
				result.push({id, name, expansion, GilReward: data["GilReward"], JournalGenre, ExpFactor, ClassJob_Required})
			})
			.on("end", () => {
				fs.writeFileSync("./data/quest_details.json", JSON.stringify(result));
				console.log("CSV parsing complete!");
			});
	});
}

// parseKeys()
parseQuestDetail()