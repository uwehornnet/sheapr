import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
	try {
		const dir = path.join(process.cwd(), "db");
		const fileContent = await fs.readFile(dir + "/data.json");
		const parsed = JSON.parse(fileContent);

		res.status(200).json({ status: "ok", res: parsed });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: false, res: error });
	}
}
