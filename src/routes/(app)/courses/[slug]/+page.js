import PocketBase from 'pocketbase';

const client = new PocketBase('https://lag-pq.fly.dev');

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const course = await client.records.getList('courses', 1, 1, {
		filter: `slug = "${params.slug}"`
	});
    if (course.items[0] !== undefined ) {
        const resultList = await client.records.getList('questions', 1, 50, {
            filter: `course = "${course.items[0].id}"`
        });

        // loop throught the result list and then get the options
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
