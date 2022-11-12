const mapOpt = (e) => {
	return e[0];
};
export const parseStringToQuestion = (str) => {
	const optionChars = ['A.', 'B.', 'C.', 'D.', 'E.'];
	let arr = str.split('##');
	let question = arr[0];
	let options = arr[1].split(' ');

	let opts = new Array();

	let b = '';
	let c = '';

	options.forEach((e) => {
		if (optionChars.includes(e)) {
			if (c !== '') {
				opts.push({
					body: b.trim(),
					char: c
				});
				b = '';
			}
			c = mapOpt(e);
		} else {
			b += e + ' ';
		}
	});
	opts.push({
		body: b.trim(),
		char: c
	});
	b = '';
	c = '';

	return {
		question: question.trim(),
		opts: opts
	};
};
