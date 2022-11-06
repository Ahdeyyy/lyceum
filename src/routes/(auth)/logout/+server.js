/** @type {import('./$types').RequestHandler} */
import { redirect } from '@sveltejs/kit';

export const POST = ({ locals }) => {
	locals.pb.authStore.clear();
	locals.user = undefined;

	throw redirect(303, '/');
};
export const GET = ({ locals }) => {
	locals.pb.authStore.clear();
	locals.user = undefined;

	throw redirect(303, '/');
};
