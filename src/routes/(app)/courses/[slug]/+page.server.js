/** @type {import('./$types').PageLoad} */
export async function load({ locals, params }) {
	// course based on slug
	const client = locals.pb;
	const course = await client.records.getList('courses', 1, 1, {
		filter: `slug = "${params.slug}"`
	});
	if (course.items[0] !== undefined) {
		// filter questions by course
		let resultList = await client.records.getList('questions', 1, 500, {
			filter: `course = "${course.items[0].id}"`
		});
		// randomize questions and limit to 50
		resultList.items = resultList.items.sort(() => Math.random() - 0.5).slice(0, 60);
		// loop throught the result list and then get the options for each question
		for (let i = 0; i < resultList.items.length; i++) {
			const options = await client.records.getList('options', 1, 6, {
				filter: `question = "${resultList.items[i].id}"`
			});
			resultList.items[i].options = options.items;
		}

		//randomize the options
		for (let i = 0; i < resultList.items.length; i++) {
			resultList.items[i].options = resultList.items[i].options.sort(() => Math.random() - 0.5);
		}

		return {
			questions: structuredClone(resultList),
			course: structuredClone(course.items[0])
		};
	}
}
