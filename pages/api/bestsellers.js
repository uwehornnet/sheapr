const eBayApi = require("ebay-api");

const eBay = new eBayApi({
	appId: "UweHorn-TikiShop-PRD-01c6fefd9-8c8c4fb7",
	certId: "PRD-1c6fefd90bec-3b08-44b7-a3dd-f70e",
	sandbox: false,
	siteId: eBayApi.SiteId.EBAY_DE, // required for traditional APIs, see https://developer.ebay.com/DevZone/merchandising/docs/Concepts/SiteIDToGlobalID.html
	marketplaceId: eBayApi.MarketplaceId.EBAY_DE, // defautl. required for RESTful APIs
	acceptLanguage: eBayApi.Locale.de_DE, // defautl
	contentLanguage: eBayApi.ContentLanguage.de_DE,
});

export default async function handler(req, res) {
	try {
		const response = await eBay.buy.browse.search({
			category_ids: `${req.body.id}`,
			limit: 5,
			filter: `conditions:{NEW},priorityListing:true`,
		});

		res.status(200).json({ status: "ok", res: response });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: false, res: error });
	}
}
