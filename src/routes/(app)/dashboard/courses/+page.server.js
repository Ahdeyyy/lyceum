/** @type {import('./$types').RequestHandler} */
export async function load({ locals }) {
	let courses;
	try {
		courses = await locals.pb.records.getList('courses', 1, 50, {
			filter: 'created >= "2022-01-01 00:00:00"'
		});
	} catch (err) {
		console.log(err);
	}

	// console.log(courses);
	return {
		courses: structuredClone(courses)
	};
}
