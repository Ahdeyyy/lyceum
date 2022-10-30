import PocketBase from 'pocketbase';

const client = new PocketBase('https://lag-pq.fly.dev');

/** @type {import('./$types').RequestHandler} */
export async function load () {
    
    const courses = await client.records.getList('courses', 1, 50, {
        filter: 'created >= "2022-01-01 00:00:00"',
    });

    // console.log(courses);
    return {
        courses: courses,
    };
}