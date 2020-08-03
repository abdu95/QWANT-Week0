function my_strcmp(param_1, param_2) {
  	var returnValue = 0;
	for(let i=0; i < param_1.length; i++){
    	if(param_1[i] === param_2[i])
           returnValue = 0;
        else if(param_1[i] < param_2[i])
           returnValue = -1;
        else if(param_1[i] > param_2[i])
           returnValue = 1;
    };
    return returnValue;
		
};
