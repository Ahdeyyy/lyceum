import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({locals}) {
    if(!locals.user.profile.is_staff) {
        throw redirect(303, '/courses');
    }
};