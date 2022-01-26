import { Client } from "./structures/Client";

const client = new Client();

(async () => {
	await client.main();
})();