import { useEffect, useState } from "react";
import Head from "next/head";

import BannerGrid from "../components/BannerGrid";
import ProductSlider from "../components/ProductSlider";
import MostSearchedCollections from "../components/MostSearchedCollections";
import { useStaticData } from "../hooks/useStaticData";
import { categories } from "../utils/data/categories";

export default function Home() {
	const { loading, error, products } = useStaticData();
	const catList = categories.sort((a, b) => 0.5 - Math.random()).slice(-6);
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="max-w-[1980px] mx-auto">
				<div className=" px-4 md:px-6">
					<BannerGrid direction="right" items={catList.slice(0, 3)} />
				</div>

				<div className="py-2 px-4 md:px-6">
					<div className="relative">
						<h2 className="text-big">Most viewed</h2>
						<p>Top 10 most sold this week, next day delivery.</p>
					</div>

					{!loading && <ProductSlider products={products.slice(0, 8)} />}
				</div>

				<div className=" px-4 md:px-6">
					<BannerGrid direction="left" items={catList.slice(-3)} />
				</div>

				<MostSearchedCollections />
			</main>

			<footer></footer>
		</div>
	);
}
