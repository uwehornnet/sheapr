import { useEffect } from "react";

const AdBanner = (props) => {
	useEffect(() => {
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<div className="px-4 md:px-0 my-6 mx-auto container">
			<ins
				className="adsbygoogle adbanner-customize"
				style={{
					display: "block",
					overflow: "hidden",
				}}
				data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
				{...props}
			/>
		</div>
	);
};
export default AdBanner;
