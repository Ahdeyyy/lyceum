import { redirect } from '@sveltejs/kit';

export async function load() {
    return {};
};

export const actions = {
        register: async ({ locals, request }) => {
            const formData = await request.formData();
            const data = Object.fromEntries([...formData]);
    
            try {
                const newUser = await locals.pb.users.create(data);
    
                const { token, user } = await locals.pb.users.authViaEmail(data.email, data.password);
    
                const updatedProfile = await locals.pb.records.update('profiles', user.profile.id, {
                    name: data.name
                });
    
                locals.pb.authStore.clear();
            } catch (err) {
                console.log('Error:', err);
                return {
                    error: true,
                    message: err
                };
            }
    
            throw redirect(303, '/login');
        }
}