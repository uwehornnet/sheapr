const crypto = require("crypto");

export default async function handler(req, res) {
	try {
		const challengeCode = req.query.challenge_code;
		const token =
			"b4ecf7e345ce4e06f95db21ca97ce35632d974aa97e8609cba5d1bc785465ba9220b85ecda7e3fa414081706e8e2dd3ffdc3643ba119122936830abc897b22fc";
		const endpoint = "https://sheapr.vercel.app/api/hash";

		const sha256Hasher = crypto.createHmac("sha256", challengeCode);
		const updatedHash = sha256Hasher.update(token);
		const responseHash = updatedHash.update(endpoint);

		const hash = responseHash.digest("hex");

		res.status(200).json({
			challengeResponse: new Buffer.from(hash).toString(),
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: false, res: error });
	}
}
