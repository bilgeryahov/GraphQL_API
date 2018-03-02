import posts from './queries/posts';
import post from './queries/post';
import author from './queries/author';

import addPost from './mutations/addPost';
import addComment from './mutations/addComment';

import {
	GraphQLSchema,
	GraphQLObjectType
}
from 'graphql';

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQuery',
		fields: () => ({
			...author,
			...post,
			...posts
		})

	}),
	mutation: new GraphQLObjectType({
		name: 'RootMutation',
		fields: () => ({
			...addComment,
			...addPost
		})
	})
});

export default schema;