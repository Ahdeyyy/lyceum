import PocketBase from 'pocketbase';

const client = new PocketBase('https://lag-pq.fly.dev');

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	// course based on slug
	const course = await client.records.getList('courses', 1, 1, {
		filter: `slug = "${params.slug}"`
	});
	if (course.items[0] !== undefined) {
		// filter questions by course
		let resultList = await client.records.getList('questions', 1, 200, {
			filter: `course = "${course.items[0].id}"`
		});

		// randomize questions and limit to 50
		resultList.items = resultList.items.sort(() => Math.random() - 0.5).slice(0, 50);

		// loop throught the result list and then get the options for each question
		for (let i = 0; i < resultList.items.length; i++) {
			const options = await client.records.getList('options', 1, 5, {
				filter: `question = "${resultList.items[i].id}"`
			});

			resultList.items[i].options = options.items;
		}

		return {
			questions: resultList,
			course: course.items[0]
		};
	}
}
