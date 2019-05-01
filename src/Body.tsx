import { createWidgetFactory, tsx } from '@dojo-labs/framework/widget-core/tsx';
import intersection from '@dojo-labs/framework/widget-core/middleware/intersection';

import ArticleSummary from './ArticleSummary';
import ArticlePlaceholder from './ArticlePlaceholder';
import * as css from './Body.m.css';
import articles from './articleSummaries';

const createWidget = createWidgetFactory({ articles, intersection });

export const Body = createWidget(({ middleware }) => {
	const items = [];
	const { isIntersecting } = middleware.intersection.get('sentinel');
	if (isIntersecting) {
		middleware.articles.page.next();
	}
	const currentPage = middleware.articles.page.current() || 1;
	let widgetKey = 0;

	for (let i = 1; i <= currentPage; i++) {
		const articleSummaries = middleware.articles.getOrRead({ pagination: { start: i, size: 30 } }) || new Array(30).fill({});
		const rows = articleSummaries.map(({ id, key, url, commentCount, points, title, author, time }) => {
			if (!key) {
				return <ArticlePlaceholder key={widgetKey++}/>;
			}
			return (
				<ArticleSummary
					id={id}
					key={widgetKey++}
					url={url}
					author={author}
					commentCount={commentCount}
					points={points}
					time={time}
					title={title}
				/>
			);
		});
		items.push(...rows);
	}

	const isLoading = middleware.articles.isLoading();

	return (
		<div classes={[css.body]}>
			<ul classes={[css.articles]}>{items}</ul>
			{!isLoading && <div key="sentinel" classes={[css.sentinel]} />}
		</div>
	);
});

export default Body;
