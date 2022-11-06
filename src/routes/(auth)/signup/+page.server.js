import { redirect } from '@sveltejs/kit';

export async function load({locals}) {
    if (locals.user) {
      throw redirect(303,'/');
    }
};

export const actions = {
        register: async ({ locals, request }) => {
            const formData = await request.formData();
            const data = Object.fromEntries([...formData]);
    
            try {
                await locals.pb.users.create(data);
    
                const { user } = await locals.pb.users.authViaEmail(data.email, data.password);
    
                await locals.pb.records.update('profiles', user.profile.id, {
                    name: data.name,
                    is_staff: false,
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