import HeadMeta from "../components/HeadMeta";

export default function Imprint() {
	return (
		<div className="bg-white w-full min-h-screen">
			<HeadMeta title="Imprint - Terms of usage" description="Imprint - Terms of usage" />

			<div className="container mx-auto py-32">
				<h1 className="text-biggest text-center font-semibold">Imprint</h1>
			</div>

			<main className="container mx-auto py-16">
				<img
					alt="Imprint"
					src="/images/imprint.jpg"
					className="w-full h-auto object-contain md:aspect-auto min-h-screen md:min-h-0"
				/>
			</main>
		</div>
	);
}
