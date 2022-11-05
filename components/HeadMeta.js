import Head from "next/head";

import { useRouter } from "next/router";

export default function HeadMeta({ title, description, image }) {
	const { asPath } = useRouter();
	const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : "";

	const URL = `${origin}${asPath}`;

	return (
		<Head>
			<meta charSet="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="icon" href="/favicon.png" />
			<meta property="og:title" content={title} />
			<meta property="og:type" content="article" />
			{image ? <meta property="og:image" content={image} /> : null}

			<meta property="og:url" content={URL} />
			<meta name="twitter:card" content="summary_large_image" />

			<meta property="og:description" content={description} />
			<meta property="og:site_name" content="your-rims.com" />

			<link rel="stylesheet" src="/fonts.css" />

			<meta name="google-site-verification" content="9LR7Qb7AnPu-LoitlxhfQ7nyCsYJ8SqUnGhuCpJndYo" />
		</Head>
	);
}
