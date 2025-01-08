import * as v from 'valibot';

export const portfolioSchema = v.object({
	name: v.pipe(v.string(), v.nonEmpty('Please enter Portfolio´s name.'))
});
