const eBay = require("ebay-node-api");

let ebay = new eBay({
	clientID: "UweHorn-TikiShop-PRD-01c6fefd9-8c8c4fb7",
	clientSecret: "PRD-1c6fefd90bec-3b08-44b7-a3dd-f70e",
	env: "PRODUCTION",
	countryCode: "EBAY-DE",
	headers: {
		"X-EBAY-C-MARKETPLACE-ID": "EBAY_DE",
	},
});

export default async function handler(req, res) {
	try {
		let response;
		if (!req.body.id) {
			response = await ebay.getMostWatchedItems({
				Condition: 1000,
			});
			res.status(200).json({ status: "ok", res: response });
		}

		response = await ebay.getMostWatchedItems({
			categoryId: `${req.body.id}`,
			Condition: 1000,
		});
		res.status(200).json({ status: "ok", res: response });
	} catch (error) {
		res.status(500).json({ status: false, res: error });
	}
}
