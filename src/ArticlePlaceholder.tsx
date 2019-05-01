import { createWidget, tsx } from '@dojo-labs/framework/widget-core/tsx';

import * as css from './ArticlePlaceholder.m.css';

export const ArticleSummary = createWidget(() => (
	<li classes={[css.article]}>
		<span
			styles={{ width: `${Math.floor(Math.random() * 20 + 80)}%` }}
			classes={[css.primaryShell, css.animated, css.animatedPrimary]}
		/>
		<span classes={[css.points, css.animatedSecondary, css.animated]} />
		<div classes={[css.container]}>
			<div classes={[css.info, css.animatedSecondary, css.animated]} />
			<div classes={[css.info, css.animatedSecondary, css.animated]} />
			<div classes={[css.info, css.animatedSecondary, css.animated]} />
		</div>
	</li>
));

export default ArticleSummary;
