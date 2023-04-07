import path from "path";
import { promises as fs } from "fs";
import { google } from "googleapis";

export default async function handler(req, res) {
	try {
		const auth = new google.auth.GoogleAuth({
			keyFile: path.join(process.cwd(), "sheapr.json"), //the key file
			scopes: "https://www.googleapis.com/auth/spreadsheets",
		});
		const authClientObject = await auth.getClient();
		const googleSheetsInstance = google.sheets({ version: "v4", auth: authClientObject });

		const response = await googleSheetsInstance.spreadsheets.values.get({
			auth, //auth object
			spreadsheetId: "1-Yoeg-teOikmsTT9HfWBsyxIicoUkW7tp7L5xgHVTSY",
			range: "Tabellenblatt1",
		});

		const rows = response.data.values;

		const keys = rows[0];
		const sheetData = [];
		rows.forEach((arr, index) => {
			if (index > 0 && arr.length) {
				const row = {};
				arr.forEach((value, i) => {
					row[keys[i]] = value;
				});
				sheetData.push(row);
			}
		});

		const dir = path.join(process.cwd(), "db");
		const data = JSON.stringify(sheetData);

		await fs.writeFile(dir + "/data.json", data, (err) => {
			if (err) throw err;
			console.log("Data written to file");
		});

		if (sheetData.length) {
			res.status(200).json({ status: "ok", res: sheetData });
		} else {
			res.status(400).json({ status: false, res: [] });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: false, res: error });
	}
}
