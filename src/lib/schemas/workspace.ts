import * as v from 'valibot';

export const workspaceSchema = v.object({
	name: v.pipe(v.string(), v.nonEmpty('Please enter Workspace´s name.')),
	members: v.pipe(v.array(v.any()), v.minLength(0))
});
