import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLNonNull,
	GraphQLInputObjectType
} from 'graphql';

export const Comment = new GraphQLObjectType({
	name: 'Comment',
	description: 'All details of a comment on the website',
	fields: () => ({
		id: { type: GraphQLInt },
		name: { type: GraphQLString },
		content: { type: GraphQLString },
	})
});

export const CommentInputType = new GraphQLInputObjectType({
	name: 'CommentInput',
	fields: {
		name: {
			type: new GraphQLNonNull(GraphQLString)
		},
		content: {
			type: new GraphQLNonNull(GraphQLString)
		},
		postId: {
			type: new GraphQLNonNull(GraphQLInt)
		}
	}
});