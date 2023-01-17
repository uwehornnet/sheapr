// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const playwright = require("playwright");
const eBayApi = require("ebay-api");

const CLIENT_ID = process.env.NODE_ENV !== "development" ? process.env.DEV_CLIENT_ID : process.env.PROD_CLIENT_ID;
const CLIENT_SECRET =
	process.env.NODE_ENV === "development" ? process.env.DEV_CLIENT_SECRET : process.env.PROD_CLIENT_SECRET;
const SANDBOX = process.env.NODE_ENV === "development";

const AWSProductInterface = {
	additionalImages: [
		{ imageUrl: "https://origin-galleryplus.ebayimg.com/ws/web/314192995821_2_0_1/225x225.jpg" },
		{ imageUrl: "https://origin-galleryplus.ebayimg.com/ws/web/314192995821_3_0_1/225x225.jpg" },
		{ imageUrl: "https://origin-galleryplus.ebayimg.com/ws/web/314192995821_4_0_1/225x225.jpg" },
		{ imageUrl: "https://origin-galleryplus.ebayimg.com/ws/web/314192995821_5_0_1/225x225.jpg" },
		{ imageUrl: "https://origin-galleryplus.ebayimg.com/ws/web/314192995821_6_0_1/225x225.jpg" },
		{ imageUrl: "https://origin-galleryplus.ebayimg.com/ws/web/314192995821_7_0_1/225x225.jpg" },
		{ imageUrl: "https://origin-galleryplus.ebayimg.com/ws/web/314192995821_8_0_1/225x225.jpg" },
		{ imageUrl: "https://origin-galleryplus.ebayimg.com/ws/web/314192995821_9_0_1/225x225.jpg" },
		{ imageUrl: "https://origin-galleryplus.ebayimg.com/ws/web/314192995821_10_0_1/225x225.jpg" },
		{ imageUrl: "https://origin-galleryplus.ebayimg.com/ws/web/314192995821_11_0_1/225x225.jpg" },
	],
	adultOnly: false,
	availableCoupons: true,
	buyingOptions: ["FIXED_PRICE", "BEST_OFFER"],
	categories: [
		{ categoryId: "41981", categoryName: "Solarmodule" },
		{ categoryId: "3187", categoryName: "Heimwerker" },
		{ categoryId: "41979", categoryName: "Erneuerbare Energie" },
		{ categoryId: "259283", categoryName: "Solarenergie" },
	],
	condition: "Neu",
	conditionId: "1000",
	image: { imageUrl: "https://i.ebayimg.com/thumbs/images/g/2tkAAOSwlBRjTiqn/s-l225.jpg" },
	itemCreationDate: "2022-10-18T04:25:23.000Z",
	itemHref: "https://api.ebay.com/buy/browse/v1/item/v1%7C314192995821%7C0",
	itemId: "v1|314192995821|0",
	itemLocation: { postalCode: "55***", country: "DE" },
	itemWebUrl:
		"https://www.ebay.de/itm/314192995821?hash=item49275ca5ed:g:2tkAAOSwlBRjTiqn&amdata=enc%3AAQAHAAAA4M%2BSABBASH4SK0v6MbM0NdlKL08YSYqhp%2B9X%2B…",
	leafCategoryIds: ["41981"],
	legacyItemId: "314192995821",
	listingMarketplaceId: "EBAY_DE",
	marketingPrice: { discountPercentage: "0" },
	price: { value: "599.99", currency: "EUR" },
	priorityListing: true,
	seller: { username: "jxpower", feedbackPercentage: "97.8", feedbackScore: 88, sellerAccountType: "BUSINESS" },
	shippingOptions: [{ shippingCostType: "FIXED", shippingCost: { value: "40.00", currency: "EUR" } }],
	thumbnailImages: [{ imageUrl: "https://i.ebayimg.com/images/g/2tkAAOSwlBRjTiqn/s-l1200.jpg" }],
	title: "Photovoltaik Solarmodul 600W Glass Solarpanel Balkonkraftwerk Mono für 220V/230V",
	topRatedBuyingExperience: false,
};

const randomAWSProducts = [{}];

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
		if (!req.body.params) {
			res.status(500).json({ status: false });
		}

		const response = await eBay.buy.browse.search({
			q: req.body.params,
		});

		res.status(200).json({ status: "ok", res: response });
	} catch (error) {
		res.status(500).json({ status: false, res: error });
	}
}
