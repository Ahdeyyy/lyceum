/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	add: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);
		const options = JSON.parse(data.options);
		let question = undefined;

		try {
			question = await locals.pb.records.create('questions', {
				course: data.course,
				answer: data.answer,
				body: data.body
			});
		} catch (error) {
			console.error(error);
			return {
				error: true,
				title: data.title,
				description: data.description
			};
		}

		// loop over options and create a record for each one
		for (const option of options) {
			try {
				await locals.pb.records.create('options', {
					question: question.id,
					body: option.body,
					char: option.char
				});
			} catch (error) {
				console.error(error);
				return {
					error: true,
					title: data.title,
					description: data.description
				};
			}
		}
	}
};
