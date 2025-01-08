import * as v from 'valibot';

export const personalInfoSchema = v.object({
	displayName: v.pipe(v.string(), v.nonEmpty('Please enter your Full Name.')),
	// username: v.pipe(v.string(), v.nonEmpty('Please enter your Username.')),
	location: v.pipe(v.string(), v.minLength(1, 'Location name is required')),
	timeZone: v.pipe(v.string(), v.minLength(1, 'Timezone name is required')),
	language: v.pipe(v.string(), v.minLength(1, 'Language name is required'))
});
