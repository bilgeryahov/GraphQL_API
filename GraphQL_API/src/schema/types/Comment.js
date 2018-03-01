import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
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