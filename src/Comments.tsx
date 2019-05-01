import { createWidgetFactory, tsx } from '@dojo-labs/framework/widget-core/tsx';

import Comment from './Comment';
import Loading from './Loading';
import articles from './articles';
import * as css from './Comments.m.css'

const createWidget = createWidgetFactory({ articles });

export interface CommentProperties {
	id: string;
}

export const Comments = createWidget<CommentProperties>(({ middleware, properties }) => {
	const result = middleware.articles.getOrRead({ options: { id: properties.id }});
	if (!result) {
		return <Loading />;
	}
	const comment = result[0];

	return (
		<div classes={css.body}>
			<article>
				<h1>{comment.title}</h1>
			</article>
			<div>
				<h2>{`${comment.comments_count} comments`}</h2>
				<div>
					{comment.comments.map((comment: any, index: any) => <Comment key={index} comment={comment} />)}
				</div>
			</div>
		</div>
	);
});

export default Comments;
