export const load = ({ locals }) => {
	if (locals?.user && locals?.user.profile) {
		return {
			profile: JSON.parse(JSON.stringify(locals.user.profile))
		};
	}
};
