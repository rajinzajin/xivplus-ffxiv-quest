const fs = require("fs")
const axios = require("axios")
const getQuests = async () => {
	const res = await axios(
		"https://raw.githubusercontent.com/rajinzajin/ffxiv-data-csv/master/csv/Quest.csv"
	);
	return csvToJson(res.data)
};
function csvToJson(csvString, selectedHeaders = ["#", "Name"]) {
	const lines = csvString.split("\r\n");
	const headers = lines[1].split(",");
	const result = [];
	const selectedIndexes = headers
		.map((header, index) => (selectedHeaders.includes(header) ? index : -1))
		.filter((index) => index !== -1);
	for (let i = 4; i < lines.length; i++) {
		const obj = {};
		const currentLine = lines[i].split(",");
		for (let j = 0; j < selectedIndexes.length; j++) {
			const index = selectedIndexes[j];
			obj[headers[index]] = currentLine[index];
		}
		result.push(obj);
	}
	return result;
}
getQuests().then(quests=>{
    fs.writeFileSync("./data/quests.json", JSON.stringify(quests));
})