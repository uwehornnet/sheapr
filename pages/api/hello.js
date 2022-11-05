// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const playwright = require("playwright");
const eBayApi = require("ebay-api");

const CLIENT_ID = process.env.NODE_ENV !== "development" ? process.env.DEV_CLIENT_ID : process.env.PROD_CLIENT_ID;
const CLIENT_SECRET =
	process.env.NODE_ENV === "development" ? process.env.DEV_CLIENT_SECRET : process.env.PROD_CLIENT_SECRET;
const SANDBOX = process.env.NODE_ENV === "development";

const eBay = new eBayApi({
	appId: "UweHorn-TikiShop-PRD-01c6fefd9-8c8c4fb7",
	certId: "PRD-1c6fefd90bec-3b08-44b7-a3dd-f70e",
	sandbox: false,
	siteId: eBayApi.SiteId.EBAY_DE, // required for traditional APIs, see https://developer.ebay.com/DevZone/merchandising/docs/Concepts/SiteIDToGlobalID.html
	marketplaceId: eBayApi.MarketplaceId.EBAY_DE, // defautl. required for RESTful APIs
	acceptLanguage: eBayApi.Locale.de_DE, // defautl
	contentLanguage: eBayApi.ContentLanguage.de_DE,
});

const URL = "https://www.ebay.de";

async function getPageResults(page) {
	const pageResults = await page.evaluate(function () {
		return Array.from(document.querySelectorAll("ul .s-item__wrapper")).map((el) => ({
			link: el.querySelector(".s-item__link").getAttribute("href"),
			title: el.querySelector(".s-item__title").textContent.trim(),
			condition: el.querySelector(".SECONDARY_INFO")?.textContent.trim() || "No condition data",
			price: el.querySelector(".s-item__price")?.textContent.trim() || "No price data",
			shipping: el.querySelector(".s-item__shipping")?.textContent.trim() || "No shipping data",
			thumbnail: el.querySelector(".s-item__image-img")?.getAttribute("src") || "No image",
		}));
	});
	return pageResults;
}

async function getOrganicResultsPlaywright({ search }) {
	const browser = await playwright.chromium.launch({
		headless: true, // Show the browser.
	});

	console.log({ browser });

	const page = await browser.newPage();
	await page.goto(URL);
	await page.focus("#gh-ac");
	await page.keyboard.type(search);
	await page.click("#gh-btn");

	await page.waitForSelector(".srp-results");
	const organicResults = await getPageResults(page);
	await browser.close();
	return organicResults;
}

export default async function handler(req, res) {
	try {
		if (!req.body.params) {
			res.status(500).json({ status: false });
		}

		//const response = await getOrganicResultsPlaywright({
		//	search: req.body.params,
		//});

		const response = await eBay.buy.browse.search({
			q: req.body.params,
		});

		res.status(200).json({ status: "ok", res: response });
	} catch (error) {
		res.status(500).json({ status: false, res: error });
	}
}
