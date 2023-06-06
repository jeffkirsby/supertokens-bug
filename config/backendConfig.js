import SessionNode from "supertokens-node/recipe/session";
import Dashboard from "supertokens-node/recipe/dashboard";
import { appInfo } from "./appInfo";
import { AuthConfig } from "../interfaces";
import PasswordlessNode from "supertokens-node/recipe/passwordless";

export let backendConfig = () => {
	return {
		framework: "express",
		supertokens: {
			// this is the location of the SuperTokens core.
			connectionURI: "https://try.supertokens.com/",
		},
		appInfo,
		// recipeList contains all the modules that you want to
		// use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
		recipeList: [
			PasswordlessNode.init({
				flowType: "USER_INPUT_CODE",
				contactMethod: "PHONE",
			}),
			SessionNode.init(),
			Dashboard.init(),
		],
		isInServerlessEnv: true,
	};
};
