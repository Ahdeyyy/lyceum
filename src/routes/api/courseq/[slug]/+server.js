import pocketbase from 'pocketbase';

const client = new pocketbase('https://lag-pq.fly.dev/');

export const GET = async ({ params }) => {
	let resultList;
	try {
		const course = await client.records.getList('courses', 1, 1, {
			filter: `slug = "${params.slug}"`
		});
		if (course.items[0] !== undefined) {
			// filter questions by course
			resultList = await client.records.getFullList('questions', 500, {
				filter: `course = "${course.items[0].id}"`
			});

			// randomize questions and limit to 50
			resultList.items = resultList.sort(() => Math.random() - 0.5).slice(0, 15);

			// loop throught the result list and then get the options for each question
			for (let i = 0; i < resultList.items.length; i++) {
				const options = await client.records.getList('options', 1, 5, {
					filter: `question = "${resultList.items[i].id}"`
				});

				resultList.items[i].options = options.items;
			}
		}
	} catch (err) {
		console.error(err);
	}

	const body = JSON.stringify(structuredClone(resultList));
	const bodyShouldBeCacheable = !isNaN(body);

	return new Response(body, {
		status: 200,
		headers: {
			'cache-control': bodyShouldBeCacheable ? `max-age=${60 * 60 * 24}` : 'no-cache'
		}
	});
};
