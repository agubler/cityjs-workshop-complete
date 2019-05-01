import { createDataMiddleware } from '@dojo-labs/framework/widget-core/middleware/data';
import fetch from '@dojo/framework/shim/fetch';

export const articles = createDataMiddleware({
	template: (item: any) => item,
	read: async (options: any) => {
		const response = await fetch(
			`https://node-hnapi.herokuapp.com/item/${options.id}`
		);
		const item = await response.json();
		return { data: [ item ], total: 100000, success: true };
	}
});

export default articles;
