import * as v from 'valibot';

export const postSchema = v.object({
	title: v.pipe(v.string(), v.nonEmpty('title is required.')),
	description: v.pipe(v.string(), v.minLength(1, 'description is required')),
	template: v.pipe(v.string(), v.minLength(1, 'template is required')),
	status: v.pipe(v.string(), v.minLength(1, 'status is required')),
	visibility: v.pipe(v.string(), v.minLength(1, 'visibility is required')),
	categories: v.pipe(v.array(v.any()), v.minLength(0)),
	tags: v.pipe(v.array(v.any()), v.minLength(0))
	// published_at: v.pipe(v.string(), v.minLength(1, 'published at is required')),
	// categories: v.pipe(v.string(), v.minLength(1, 'Language is required')),
	// categories: v.array(v.string(), 'categories is required'),
	// tags: v.array(v.string('tags is required'))
});
