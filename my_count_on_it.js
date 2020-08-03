function my_count_on_it(param_1) {
	let result = [];
    param_1.forEach(element => result.push(element.length));
	return result;
};
