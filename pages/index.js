import Link from "next/link";
import FAQ from "../components/FAQ";
import HeadMeta from "../components/HeadMeta";

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

export default function Home() {
	return (
		<div className="bg-white w-full min-h-screen">
			<HeadMeta
				title="Preisvergleich von +1000 Original Felgen. Jetzt sparen!"
				description="Preisvergleich Original Felgen +1000 Angeboten | Finde die besten Angebote und spare bares Geld bei deinem nächsten Kauf | Jetzt vergleichen"
			/>

			<div className="relative aspect-portrait md:aspect-square lg:aspect-header">
				<img src="/images/header.jpg" className="w-full h-full object-cover aspect-portrait md:aspect-auto" />
				<div className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-transparent to-black/50"></div>
				<div className="absolute h-full w-full top-0 left-0 flex flex-col justify-end p-8">
					<h1 className="text-white text-biggest text-center max-w-[900px] mx-auto mb-16">
						Die perfekte Alternative zur herkömmlichen Energieversorgung
					</h1>
					<div className="max-w-[1024px] mx-auto bg-zinc-200/50 grid grid-cols-1 lg:grid-cols-3 p-4 gap-8 rounded-2xl backdrop-blur-lg">
						<div className="flex gap-4 items-center">
							<span className="flex items-center justify-center bg-pinkish text-pink-800 p-4 rounded-md">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</span>

							<p>Schnell und einfach aufgebaut</p>
						</div>

						<div className="flex gap-4 items-center">
							<span className="flex items-center justify-center bg-lila text-violet-800 p-4 rounded-md">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
									/>
								</svg>
							</span>

							<p>Dein eigener Solarstrom direkt in die Steckdose</p>
						</div>

						<div className="flex gap-4 items-center">
							<span className="flex items-center justify-center bg-greenish text-lime-800 p-4 rounded-md">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
									/>
								</svg>
							</span>

							<p>Emissionen und Kosten einsparen</p>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full bg-petrolish py-16">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 py-16">
					<div className="col-span-1 px-8">
						<h2 className="text-big mb-8">
							Solaranlage für den Balkon – Preise vergleichen und profitieren{" "}
						</h2>
						<p>
							Wenn Sie sich für eine Solaranlage für Ihren Balkon entscheiden, sollten Sie zunächst
							verschiedene Modelle und Preise vergleichen. Denn nur so können Sie die beste Anlage zu
							einem günstigen Preis erwerben. Auf dieser Seite finden Sie einen Preisvergleich
							verschiedener Solaranlagen für den Balkon. So können Sie schnell und einfach die beste
							Anlage zum günstigsten Preis erwerben.
						</p>
					</div>
					<div className="col-span-1 flex items-center justify-center">
						<img
							src="/images/header.jpg"
							alt=""
							className="aspect-square w-full object-cover max-w-[400px] rounded-lg"
						/>
					</div>
				</div>

				<div className="container mx-auto">
					<svg
						viewBox="0 0 817 121"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="mx-auto hidden md:block w-1/2"
					>
						<path
							d="M4 117V94.1653C4 74.283 20.1177 58.1653 40 58.1653H777C796.882 58.1653 813 42.0475 813 22.1653V4"
							stroke="#A6F8E9"
							strokeWidth="8"
							strokeLinecap="round"
							strokeDasharray="16 16"
						/>
					</svg>
				</div>

				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 py-16">
					<div className="col-span-1 px-8 order-1 md:order-2">
						<h2 className="text-big mb-8">
							Solaranlage für den Balkon – Preise vergleichen und profitieren{" "}
						</h2>
						<p>
							Wenn Sie sich für eine Solaranlage für Ihren Balkon entscheiden, sollten Sie zunächst
							verschiedene Modelle und Preise vergleichen. Denn nur so können Sie die beste Anlage zu
							einem günstigen Preis erwerben. Auf dieser Seite finden Sie einen Preisvergleich
							verschiedener Solaranlagen für den Balkon. So können Sie schnell und einfach die beste
							Anlage zum günstigsten Preis erwerben.
						</p>
					</div>
					<div className="col-span-1 flex items-center justify-center order-2 md:order-1">
						<img
							src="/images/header.jpg"
							alt=""
							className="aspect-square w-full object-cover max-w-[400px] rounded-lg"
						/>
					</div>
				</div>

				<div className="container mx-auto">
					<svg
						viewBox="0 0 817 121"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="mx-auto hidden md:block w-1/2"
					>
						<path
							d="M813 117V94.1653C813 74.283 796.882 58.1653 777 58.1653H40C20.1178 58.1653 4.00003 42.0475 4.00003 22.1653V4"
							stroke="#A6F8E9"
							strokeWidth="8"
							strokeLinecap="round"
							strokeDasharray="16 16"
						/>
					</svg>
				</div>

				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 py-16">
					<div className="col-span-1 px-8">
						<h2 className="text-big mb-8">
							Solaranlage für den Balkon – Preise vergleichen und profitieren{" "}
						</h2>
						<p>
							Wenn Sie sich für eine Solaranlage für Ihren Balkon entscheiden, sollten Sie zunächst
							verschiedene Modelle und Preise vergleichen. Denn nur so können Sie die beste Anlage zu
							einem günstigen Preis erwerben. Auf dieser Seite finden Sie einen Preisvergleich
							verschiedener Solaranlagen für den Balkon. So können Sie schnell und einfach die beste
							Anlage zum günstigsten Preis erwerben.
						</p>
					</div>
					<div className="col-span-1 flex items-center justify-center">
						<img
							src="/images/header.jpg"
							alt=""
							className="aspect-square w-full object-cover max-w-[400px] rounded-lg"
						/>
					</div>
				</div>
			</div>

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
