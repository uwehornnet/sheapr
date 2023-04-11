import Head from "next/head";

import BannerGrid from "../components/BannerGrid";
import ProductSlider from "../components/ProductSlider";
import MostSearchedCollections from "../components/MostSearchedCollections";
import { useStaticData } from "../hooks/useStaticData";
import { categories } from "../utils/data/categories";

export default function Imprint({ cat }) {
	const { loading, products } = useStaticData();
	return (
		<div>
			<Head>
				<title>Dein Geheimtipp für die günstigsten Preise - sheapr.com</title>
				<meta
					name="description"
					content="Finde die besten Schnäppchen bei sheapr.com - dem führenden Preisvergleichsportal! Vergleiche Preise und spare bares Geld. Jetzt loslegen und profitieren!"
				/>
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className="max-w-[1980px] mx-auto">
				<div className=" px-4 md:px-6">
					<BannerGrid direction="right" items={cat.slice(0, 3)} />
				</div>

				<div className="py-2 px-4 md:px-6">
					<div className="relative">
						<h2 className="text-big">Most viewed</h2>
						<p>Top 10 most sold this week, next day delivery.</p>
					</div>

					{!loading && <ProductSlider products={products.slice(0, 8)} />}
				</div>

				<div className=" px-4 md:px-6">
					<BannerGrid direction="left" items={cat.slice(-3)} />
				</div>

				<MostSearchedCollections />
			</main>
		</div>
	);
}

export async function getStaticProps(context) {
	return {
		props: {
			cat: categories.sort((a, b) => 0.5 - Math.random()).slice(-6),
		},
	};
}
