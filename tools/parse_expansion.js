const fs = require("fs");
const axios = require("axios");

const getExpansion = async () => {
	const res = await axios(
		"https://raw.githubusercontent.com/rajinzajin/ffxiv-data-csv/master/csv/ExVersion.csv"
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
	getExpansion().then((quest_csv) => {
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
				// fs.writeFileSync("./data/quest_keys.json", JSON.stringify(result[0]));
				console.log("CSV parsing complete!");
			});
	});
}

function parseExpansions(){
	getExpansion().then((quest_csv) => {
		let newCSV = removeCsvLine(quest_csv, 0); //remove unused row
		newCSV = removeCsvLine(newCSV, 1); //remove unused row
		const csvStream = Readable.from(newCSV);
		const result = []
		csvStream
			.pipe(csv())
			.on("data", (data) => {
				const id = data["#"];
				const name = data["Name"]
				result.push({id, name})
				console.log(name);
			})
			.on("end", () => {
				fs.writeFileSync("./data/expansions.json", JSON.stringify(result));
				console.log("CSV parsing complete!");
			});
	});
}

parseExpansions()