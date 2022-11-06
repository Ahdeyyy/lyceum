import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    if (!locals.user) {
        throw redirect(303,'/login');
    }
    if(!locals.user.profile.is_staff) {
        throw redirect(303,'/courses');
    }
};

export const actions = {

    add: async ({ request, locals }) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);

        try {
            await locals.pb.records.create('courses', {
                name: data.name,
                code: data.code,
                slug: data.slug,
            });
        } catch (err) {
            return {
                error: true,
                title: data.title,
                description: data.description
            };
        }
        throw redirect(303, '/dashboard/courses');
    }

};