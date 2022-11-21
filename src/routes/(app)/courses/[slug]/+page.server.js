/** @type {import('./$types').PageLoad} */
export async function load({ locals, params }) {
	// course based on slug
	const client = locals.pb;
	const course = await client.records.getList('courses', 1, 1, {
		filter: `slug = "${params.slug}"`
	});
	if (course.items[0] !== undefined) {
		// filter questions by course
		let resultList = await client.records.getFullList('questions', 500, {
			filter: `course = "${course.items[0].id}"`
		});
		// randomize questions and limit to 50
		resultList.items = resultList.sort(() => Math.random() - 0.5).slice(0, 20);
		// loop throught the result list and then get the options for each question
		for (let i = 0; i < resultList.items.length; i++) {
			const options = await client.records.getList('options', 1, 5, {
				filter: `question = "${resultList.items[i].id}"`
			});
			resultList.items[i].options = options.items;
		}
		return {
			questions: structuredClone(resultList),
			course: structuredClone(course.items[0])
		};
	}
}
