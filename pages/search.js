import Head from "next/head";
import { useRouter } from "next/router";

import BannerGrid from "../components/BannerGrid";
import ProductGrid from "../components/ProductGrid";
import MostSearchedCollections from "../components/MostSearchedCollections";
import { categories } from "../utils/data/categories";
import { useSearch } from "../hooks/useSearch";
import ActivityIndicator from "../components/ActivityIndicator";

export default function Home({ cat }) {
	const { query } = useRouter();
	const { loading, products } = useSearch({ param: query.s });
	return (
		<div>
			<Head>
				<title>Sheapr Suche - Die besten Preise auf einen Blick</title>
				<meta
					name="description"
					content="Entdecke unglaubliche Schnäppchen und spare großartig, indem du auf sheapr.com Preise vergleichst! Finde die günstigsten Preise hier – jetzt shoppen & sparen!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="max-w-[1980px] mx-auto">
				<div className="py-2 px-4 md:px-6">
					<div className="relative">
						<h2 className="text-big"></h2>
						<p></p>
					</div>

					{!loading && products.items.length ? (
						<>
							<div className="relative mt-4">
								<p>{`${products?.items.length} von ${products?.total} Produkte`}</p>
							</div>
							<ProductGrid products={products.items} />
						</>
					) : (
						<ActivityIndicator />
					)}
				</div>

				<div className=" px-4 md:px-6">
					<BannerGrid direction="left" items={cat} />
				</div>

				<MostSearchedCollections />
			</main>
		</div>
	);
}

export async function getStaticProps(context) {
	return {
		props: {
			cat: categories.sort((a, b) => 0.5 - Math.random()).slice(-3),
		},
	};
}