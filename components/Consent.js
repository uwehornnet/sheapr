import React, { useEffect, useState } from "react";

import { setCookie, hasCookie } from "cookies-next";
import Image from "next/image";

function Consent() {
	const [consent, setConsent] = useState(true);
	useEffect(() => {
		setConsent(hasCookie("localConsent"));
	}, []);

	const acceptCookie = () => {
		setConsent(true);
		setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });

		gtag("consent", "update", {
			ad_storage: "granted",
			analytics_storage: "granted",
		});

		console.log("accepring cookies");
	};
	const denyCookie = () => {
		setConsent(true);
		setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
		console.log("denying cookie");
	};
	if (consent === true) {
		return null;
	}
	return (
		<div className={`fixed bottom-3 left-3 p-3 rounded-md bg-slate-200 z-50 ${consent ? "hidden" : ""}`}>
			<div className="flex items-center gap-16">
				<Image src="/cookies.png" alt="" width="40" height="40" />
				<div>
					<p>This Site use cookie, please accept them if you want</p>
					<div className="flex items-center justify-end gap-4">
						<button
							onClick={(e) => denyCookie()}
							className="border-2 border-black rounded-md text-black text-sm font-medium tracking-wider leading-0 p-2 m-0"
						>
							Deny All
						</button>
						<button
							onClick={() => {
								acceptCookie();
							}}
							className="border-2 bg-black border-black rounded-md text-white text-sm font-medium tracking-wider leading-0 p-2 m-0"
						>
							Accept All
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Consent;
