import * as v from 'valibot';

export const projectSchema = v.object({
	name: v.pipe(v.string(), v.nonEmpty('Please enter Project´s name.')),
	description: v.pipe(v.string(), v.nonEmpty('Please enter Description.')),
	objectives: v.pipe(v.string(), v.nonEmpty('Please enter Objectives.')),
	risks: v.pipe(v.string(), v.nonEmpty('Please enter Risks.')),
	scope: v.pipe(v.string(), v.nonEmpty('Please enter Scope.')),
	requirements: v.pipe(v.string(), v.nonEmpty('Please enter Requirements.')),
	vision: v.pipe(v.string(), v.nonEmpty('Please enter Vision.')),
	resources: v.pipe(v.number('Please enter Resources.'), v.toMinValue(10))
	// members: v.pipe(v.array(v.any()), v.minLength(0))
});
