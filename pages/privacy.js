import HeadMeta from "../components/HeadMeta";

export default function Privacy() {
	return (
		<div className="bg-white w-full min-h-screen">
			<HeadMeta
				title="Privacy"
				description="The following gives a simple overview of what happens to your personal information when you visit our website."
			/>

			<div className="container mx-auto pt-32">
				<h1 className="text-biggest text-center font-semibold">Privacy</h1>
			</div>

			<main className="container mx-auto my-16 px-4">
				<img alt="Privacy" src="/images/privacy.jpg" className="w-full h-auto object-contain md:aspect-auto" />
			</main>
		</div>
	);
}
