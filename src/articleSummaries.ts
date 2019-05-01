import { createDataMiddleware } from '@dojo-labs/framework/widget-core/middleware/data';
import fetch from '@dojo/framework/shim/fetch';

export const articleSummaries = createDataMiddleware({
	template: (item: any) => {
		return {
			id: item.id,
			key: item.id,
			commentCount: item.comments_count,
			points: item.points,
			time: item.time_ago,
			title: item.title,
			url: item.url,
			author: item.user
		};
	},
	read: async (options: any, pagination: any) => {
		const response = await fetch(
			`https://node-hnapi.herokuapp.com/news?page=${pagination.offset / pagination.size + 1}`
		);
		const items = await response.json();
		return { data: items, total: 100000, success: true };
	}
});

export default articleSummaries;
