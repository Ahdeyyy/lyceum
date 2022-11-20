export const createUser = async (pb, data) => {
	await pb.users.create(data);

	const { user } = await pb.users.authViaEmail(data.email, data.password);

	await pb.records.update('profiles', user.profile.id, {
		name: data.name,
		is_staff: false
	});

	pb.authStore.clear();
	return user;
};
