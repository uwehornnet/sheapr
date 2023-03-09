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
		const response = await ebay.getAccessToken().then((data) => {
			return ebay.searchItems({
				keyword: "iphone",
				limit: 100,
				filter: "conditionIds:{1000}", // new string based filter method. Format here: https://developer.ebay.com/api-docs/buy/static/ref-buy-browse-filters.html#conditionIds
			});
		});

		res.status(200).json({ status: "ok", res: JSON.parse(response) });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: false, res: error });
	}
}
