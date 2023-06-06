import Head from "next/head";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import SuperTokens from "supertokens-auth-react";
import { canHandleRoute, getRoutingComponent } from "supertokens-auth-react/ui";
import { PreBuiltUIList } from "../../config/frontendConfig";

const SuperTokensComponentNoSSR =
	dynamic <
	{} >
	(new Promise((res) => res(() => getRoutingComponent(PreBuiltUIList))),
	{ ssr: false });

export default function Auth() {
	useEffect(() => {
		if (canHandleRoute(PreBuiltUIList) === false) {
			SuperTokens.redirectToAuth({
				redirectBack: false,
			});
		}
	}, []);

	return (
		<main>
			<SuperTokensComponentNoSSR />
		</main>
	);
}
