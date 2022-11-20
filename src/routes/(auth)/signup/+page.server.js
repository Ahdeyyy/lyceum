import { redirect } from '@sveltejs/kit';
import { createUser } from '$lib/services';

export async function load({ locals }) {
	if (locals.user) {
		throw redirect(303, '/');
	}
}

export const actions = {
	register: async ({ locals, request }) => {
		const pb = locals.pb;
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			await createUser(pb, data);
		} catch (err) {
			console.error('Error:', err);
			return {
				error: true,
				message: 'User with this email already exists!'
			};
		}

		throw redirect(303, '/login');
	}
};
