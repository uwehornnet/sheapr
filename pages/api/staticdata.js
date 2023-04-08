import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
	try {
	
		const filePath =
			process.env.NODE_ENV === "development"
				? path.join(process.cwd(), "public") + "/data.json"
				: path.join(process.cwd(), "public") + "/data.json";
		const fileContent = await fs.readFile(filePath);
		const parsed = JSON.parse(fileContent);

		res.status(200).json({ status: "ok", res: parsed });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: false, res: error });
	}
}
