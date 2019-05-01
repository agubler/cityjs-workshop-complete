import { createWidget, tsx } from '@dojo-labs/framework/widget-core/tsx';

import * as css from './ArticlePlaceholder.m.css';

export const ArticleSummary = createWidget(() => (
	<li classes={[css.article]}>
		<span styles={{ width: `${Math.floor(Math.random() * 20 + 80)}%`}} classes={[css.titleShell, css.animated, css.animatedTitle]}></span>
		<span classes={[css.points, css.animatedSubTitle, css.animated]}/>
		<div classes={[css.container]}>
			<div classes={[css.info, css.animatedSubTitle, css.animated]}/>
			<div classes={[css.info, css.animatedSubTitle, css.animated]}/>
			<div classes={[css.info, css.animatedSubTitle, css.animated]}/>
		</div>
	</li>
));

export default ArticleSummary;

