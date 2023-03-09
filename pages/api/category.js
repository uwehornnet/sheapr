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
		if (!req.body.id) {
			res.status(500).json({ status: false });
		}
		const response = await ebay.findItemsByCategory(req.body.id);
		// const response = await ebay.getAccessToken().then((data) => {
		// 	return ebay.searchItems({
		// 		keyword: req.body.query,
		// 		categoryId: `${req.body.id}`,
		// 		limit: 100,
		// 		filter: `deliveryCountry:DE,conditionIds:{1000},categoryIds:${req.body.id}`, // new string based filter method. Format here: https://developer.ebay.com/api-docs/buy/static/ref-buy-browse-filters.html#conditionIds
		// 	});
		// });

		res.status(200).json({ status: "ok", res: response });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: false, res: error });
	}
}
