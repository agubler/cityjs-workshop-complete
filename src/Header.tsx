import { createWidget, tsx } from '@dojo-labs/framework/widget-core/tsx';

import * as css from './Header.m.css';

export const Header = createWidget(() => (
	<div classes={[css.header]}>
		<div classes={[css.logo]}>HN</div>
	</div>
));

export default Header;
