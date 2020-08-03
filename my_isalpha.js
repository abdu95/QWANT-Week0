function my_isalpha(param_1) {
	var character = param_1.toLowerCase();
  	if(character.match(/[a-z]/i))
      return 1;
  	else 
      return 0;
};
