export const isInvited = (invited, id) => {
	if (invited.find(item => item.id === id)) return true;
};
