import { useEffect, useState } from "react";

import ActivityIndicator from "../../../components/ActivityIndicator";
import Link from "next/link";
import Product from "../../../components/Product";
import FAQ from "../../../components/FAQ";

import HeadMeta from "../../../components/HeadMeta";

const FAQ_DATA = [
	{
		title: "Solarstrom – was ist das? ",
		content:
			"Solarstrom ist elektrische Energie, die aus der Kraft der Sonne gewonnen wird. Durch die Nutzung von Solarstrom können Haushalte und Unternehmen ihren Strombedarf zu einem großen Teil selbst decken und so von den teuren Netzentgelten befreien. Auch für die Umwelt ist die Stromerzeugung aus Solarenergie sinnvoll, da sie keine schädlichen Emissionen verursacht.",
	},
	{
		title: "Wie funktioniert eine Solaranlage?",
		content:
			"Die meisten Solaranlagen bestehen aus einer Vielzahl von solarbetriebenen Modulen, die an einem Rahmen befestigt sind. Die Module wandeln die Sonnenenergie in elektrische Energie um, die dann in einem Wechselrichter in eine nutzbare Form gebracht wird. Der Wechselrichter ist mit dem Stromnetz des Hauses oder der Firma verbunden und sorgt so dafür, dass der erzeugte Strom ins Netz eingespeist werden kann.",
	},
	{
		title: "Was sind Vorteile von Solarstrom?",
		content:
			"Solarstrom bietet viele Vorteile gegenüber herkömmlicher Stromerzeugung aus fossiler Brennstoffe: Solaranlagen sind emissionsfrei, geräuscharm und wartungsarm. Außerdem können sie überall dort installiert werden, wo Sonne scheint – selbst auf dem Balkon oder der Terrasse. Und dank der steigenden Effizienz von Solarstromanlagen lohnt sich die Investition in eine Anlage heute mehr denn je.",
	},
	{
		title: "Was sind Nachteile von Solarstrom?",
		content:
			"Solarstrom ist zwar eine großartige Alternative zur herkömmlichen Energieversorgung, aber es gibt auch einige Nachteile, die berücksichtigt werden sollten, bevor man sich für eine Solaranlage entscheidet. Zum einen ist Solarstrom nicht unbegrenzt verfügbar – er ist abhängig von der Sonneneinstrahlung, und an bewölkten oder regnerischen Tagen wird weniger Strom erzeugt. Zum anderen sind Solaranlagen relativ teuer in der Anschaffung und müssen regelmäßig gewartet werden. Auch die Batterien, die den Strom speichern, müssen irgendwann ausgetauscht werden.",
	},
];

const QUERY_VARS =
	process.env.NODE_ENV === "production"
		? "?mkcid=1&mkrid=707-53477-19255-0&siteid=77&campid=5338914947&customid=&toolid=10001&mkevt=1"
		: "";

export default function Stecker() {
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
				body: JSON.stringify({ params: `Stecker Steckdose PV Anlage balkonkraftwerk` }),
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
			<HeadMeta
				title="Solaranlage: Stecker und Steckdosen für Ihr Eigenheim"
				description="Solaranlage Stecker und Steckdosen – die perfekte Lösung für saubere und unterbrechungsfreie Energie!"
			/>

			<div className="container mx-auto py-32">
				<h1 className="text-biggest text-center font-semibold">
					Günstige <span className="text-neon">Zubehör</span> für deine
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
					<div className="px-4 md:px-0 container mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
						{products.length
							? products.map((product, index) => (
									<Product product={product} highlights={highlights} key={index} />
							  ))
							: null}
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
					<div className="rounded-2xl p-8 md:p-16 max-w-[640px] bg-white relative">
						<small className="block text-camo font-semibold mb-2">Für Unterwegs</small>
						<h2 className="text-medium mb-8 font-semibold">
							Solaranlage für Unterwegs oder zum Campen <br /> – Preise vergleichen und profitieren{" "}
						</h2>
						<p>
							Flexible Solarpanele sind eine großartige Möglichkeit, um unterwegs Strom zu erzeugen. Sie
							sind leicht und können an vielen verschiedenen Oberflächen befestigt werden. Dadurch eignen
							sie sich perfekt für die Nutzung auf RVs, Booten und Wohnwagen.
						</p>

						<Link
							href="/solaranlage/unterwegs"
							className="inline-block px-6 py-3 rounded-full bg-neon uppercase mt-8 text-camo text-sm tracking-wider font-semibold hover:bg-camo hover:text-neon"
						>
							<span>Solaranlagen für unterwegs</span>
						</Link>
					</div>
				</div>
			</div>

			<FAQ data={FAQ_DATA} title="Häufig gestellte Fragen" />
		</div>
	);
}
