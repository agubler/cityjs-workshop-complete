import { createWidget, tsx } from '@dojo-labs/framework/widget-core/tsx';

export const Comment = createWidget<any>(({ properties }) => {
	const {
		comment: { user, content, time_ago, comments = [] }
	} = properties;

	return (
		<div>
			<header>
				{user}
				<span>{time_ago}</span>
			</header>
			<div key="content" innerHTML={content} />
			<div key="comments">
				{comments.map((comment: any, index: any) => (
					<Comment key={index} comment={comment} />
				))}
			</div>
		</div>
	);
});

export default Comment;
