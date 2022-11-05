import { useEffect, useState } from "react";

import ActivityIndicator from "../../../components/ActivityIndicator";
import Modal from "../../../components/Modal";
import Product from "../../../components/Product";
import FAQ from "../../../components/FAQ";

import HeadMeta from "../../../components/HeadMeta";

const FAQ_DATA = [
	{
		title: "Wie funktioniert die Solaranlage",
		content:
			"Die meisten Solaranlagen bestehen aus einer Vielzahl von solarbetriebenen Modulen, die an einem Rahmen befestigt sind. Die Module wandeln die Sonnenenergie in elektrische Energie um, die dann in einem Wechselrichter in eine nutzbare Form gebracht wird. Der Wechselrichter ist mit dem Stromnetz des Hauses oder der Firma verbunden und sorgt so dafür, dass der erzeugte Strom ins Netz eingespeist werden kann.",
	},
	{
		title: "Wie funktioniert die Solaranlage",
		content:
			"Die meisten Solaranlagen bestehen aus einer Vielzahl von solarbetriebenen Modulen, die an einem Rahmen befestigt sind. Die Module wandeln die Sonnenenergie in elektrische Energie um, die dann in einem Wechselrichter in eine nutzbare Form gebracht wird. Der Wechselrichter ist mit dem Stromnetz des Hauses oder der Firma verbunden und sorgt so dafür, dass der erzeugte Strom ins Netz eingespeist werden kann.",
	},
	{
		title: "Wie funktioniert die Solaranlage",
		content:
			"Die meisten Solaranlagen bestehen aus einer Vielzahl von solarbetriebenen Modulen, die an einem Rahmen befestigt sind. Die Module wandeln die Sonnenenergie in elektrische Energie um, die dann in einem Wechselrichter in eine nutzbare Form gebracht wird. Der Wechselrichter ist mit dem Stromnetz des Hauses oder der Firma verbunden und sorgt so dafür, dass der erzeugte Strom ins Netz eingespeist werden kann.",
	},
];

const QUERY_VARS =
	process.env.NODE_ENV === "production"
		? "?mkcid=1&mkrid=707-53477-19255-0&siteid=77&campid=5338914947&customid=&toolid=10001&mkevt=1"
		: "";

export default function Befestigung() {
	const [loading, setLoading] = useState(false);
	const [modal, showModal] = useState(false);
	const [company, setCompany] = useState(" ");
	const [size, setSize] = useState("19");
	const [products, setProducts] = useState([]);
	const [highlights, setHighlights] = useState([]);

	async function submitForm(e) {
		e.preventDefault();
		await fetchProducts();
	}

	async function fetchProducts(e) {
		try {
			if (loading) return;
			setLoading(true);
			const req = await fetch("/api/hello", {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({ params: `Befestigung Solar PV Anlage` }),
			});
			const res = await req.json();

			const mappedResponse = res.res.itemSummaries.map((product) => {
				let link = product.itemWebUrl.split("?")[0];
				return {
					...product,
					link: link + QUERY_VARS,
				};
			});

			let price = 0;
			mappedResponse.forEach((product) => {
				price += parseFloat(product.price.value);
			});

			const durchschnitt = {
				min: price / mappedResponse.length - 100,
				max: price / mappedResponse.length + 100,
			};

			const filteredProducts = mappedResponse.filter((product) => {
				return (
					parseFloat(product.price.value) <= durchschnitt.max &&
					parseFloat(product.price.value) >= durchschnitt.min
				);
			});

			setProducts(mappedResponse);
			setHighlights(filteredProducts);
			setLoading(false);

			if (filteredProducts.length) {
				showModal(true);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className=" w-full min-h-screen">
			<HeadMeta title="Imprint - Terms of usage" description="Imprint - Terms of usage" />

			<div className="container mx-auto py-32">
				<h1 className="text-biggest text-center font-semibold">
					Günstige <span className="text-neon">Befestigungszubehör</span> für deine
					<br />
					Solaranlage finden!
				</h1>
			</div>

			<main className="bg-petrolish py-16">
				{loading ? (
					<div className="flex items-center justify-center">
						<ActivityIndicator />
					</div>
				) : (
					<div>
						<div className="px-4 md:px-0 container mx-auto mb-2 mt-4">
							<p className="text-zinc-500 text-sm my-4">
								wir haben <strong className="font-medium">{products.length}</strong> top Angebote zu{" "}
								{company} Sommerräder gefunden
							</p>
						</div>
						<div className="px-4 md:px-0 container mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
							{products.length
								? products.map((product, index) => (
										<Product product={product} highlights={highlights} key={index} />
								  ))
								: null}
						</div>
					</div>
				)}
			</main>

			<div className="w-full relative aspect-auto md:aspect-video">
				<img
					src="/images/banner.jpg"
					alt=""
					className="w-full md:h-full relative md:absolute top-0 left-0 object-cover aspect-video md:aspect-auto"
				/>
				<div className="container mx-auto relative h-full flex items-center justify-end">
					<div className="rounded-xl p-8 md:p-16 max-w-[640px] bg-white relative">
						<small className="block text-neon">Für Unterwegs</small>
						<h2 className="text-big mb-8">
							Solaranlage für Unterwegs oder zum Campen – Preise vergleichen und profitieren{" "}
						</h2>
						<p>
							Wenn Sie sich für eine Solaranlage für Ihren Balkon entscheiden, sollten Sie zunächst
							verschiedene Modelle und Preise vergleichen. Denn nur so können Sie die beste Anlage zu
							einem günstigen Preis erwerben. Auf dieser Seite finden Sie einen Preisvergleich
							verschiedener Solaranlagen für den Balkon. So können Sie schnell und einfach die beste
							Anlage zum günstigsten Preis erwerben.
						</p>
					</div>
				</div>
			</div>

			<FAQ data={FAQ_DATA} />
		</div>
	);
}
