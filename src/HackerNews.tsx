import { createWidget, tsx } from '@dojo-labs/framework/widget-core/tsx';
import Outlet from '@dojo/framework/routing/Outlet';

import Header from './Header';
import Body from './Body';
import Comments from './Comments';

const HackerNews = createWidget(() => (
	<div>
		<Header />
		<Outlet key="home" id="home" renderer={() => <Body />} />
		<Outlet
			key="comment"
			id="comments"
			renderer={(matchDetails) => {
				return <Comments id={matchDetails.params.id} />;
			}}
		/>
	</div>
));

export default HackerNews;
