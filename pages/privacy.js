import HeadMeta from "../components/HeadMeta";

export default function Privacy() {
	return (
		<div className="bg-white w-full min-h-screen">
			<HeadMeta
				title="Privacy"
				description="The following gives a simple overview of what happens to your personal information when you visit our website."
			/>

			<div className="container mx-auto py-32">
				<h1 className="text-biggest text-center font-semibold">Privacy</h1>
			</div>

			<main className="container mx-auto my-16">
				<img
					alt="Privacy"
					src="/images/privacy.jpg"
					className="w-full h-auto object-contain md:aspect-auto min-h-screen md:min-h-0"
				/>
			</main>
		</div>
	);
}
