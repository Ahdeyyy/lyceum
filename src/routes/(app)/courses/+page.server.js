/** @type {import('./$types').RequestHandler} */
export async function load({ locals }) {
	// list of all courses
	const courses = await locals.pb.records.getList('courses', 1, 100, {
		filter: 'created >= "2022-01-01 00:00:00"'
	});

	return {
		courses: structuredClone(courses)
	};
}
