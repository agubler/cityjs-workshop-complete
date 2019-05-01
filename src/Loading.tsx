import { createWidget, tsx } from '@dojo-labs/framework/widget-core/tsx';

import * as css from './Loading.m.css';

export const Loading = createWidget(() => {
	return <div classes={[css.spinner]}></div>;
});

export default Loading;
