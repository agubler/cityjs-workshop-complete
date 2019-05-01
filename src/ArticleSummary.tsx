import { createWidget, tsx } from '@dojo-labs/framework/widget-core/tsx';
import Link from '@dojo/framework/routing/Link';

import * as css from './ArticleSummary.m.css';

interface ArticleSummaryProperties {
	id: string;
	url: string;
	title: string;
	points: number;
	author: string;
	time: string;
	commentCount: number;
}

export const ArticleSummary = createWidget<ArticleSummaryProperties>(({ properties }) => (
	<li classes={[css.article]}>
		<a classes={[css.link]} href={properties.url} target="_blank">
			{properties.title}
		</a>
		<span classes={[css.points]}>{`${properties.points}`}</span>
		<div>
			<div classes={[css.info]}>{properties.author}</div>
			<div classes={[css.info]}>{properties.time}</div>
			<div classes={[css.info]}>
				<Link classes={[css.sublink]} to="comments" params={{ id: `${properties.id}` }}>{`${
					properties.commentCount
				} Comments`}</Link>
			</div>
		</div>
	</li>
));

export default ArticleSummary;
