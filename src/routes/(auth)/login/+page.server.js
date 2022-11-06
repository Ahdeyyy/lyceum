import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) {
		throw redirect(303, '/');
	}
}

export const actions = {
	login: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			await locals.pb.users.authViaEmail(data.email, data.password);
		} catch (err) {
			return {
				error: true,
				email: data.email
			};
		}
		throw redirect(303, '/');
	}
};
