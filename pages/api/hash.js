const { createHash } = require("node:crypto");

export default async function handler(req, res) {
	try {
		const challengeCode = req.query.challenge_code;
		const token =
			"b4ecf7e345ce4e06f95db21ca97ce35632d974aa97e8609cba5d1bc785465ba9220b85ecda7e3fa414081706e8e2dd3ffdc3643ba119122936830abc897b22fc";
		const endpoint = "https://sheapr.vercel.app/api/hash";
		const hash = createHash("sha256");
		hash.update(challengeCode);
		hash.update(token);
		hash.update(endpoint);
		const responseHash = hash.digest("hex");

		res.status(200).json({
			challengeResponse: new Buffer.from(responseHash).toString(),
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: false, res: error });
	}
}
