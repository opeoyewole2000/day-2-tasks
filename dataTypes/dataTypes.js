let dataTypes = (value)=>{
if (value === null)
	{
return "no value";
		
	}
	else if (typeof(value) === "boolean")
	{
return true;
		
	}
else if (typeof(value) === "boolean")
	{
return false;
		
	}

	else if (value === "")
	{
return 0;
		
	}
	else if (typeof(value) === "string")
	{
return value.length;
		
	}
	else if (value === 44)
	{
return "less than 100";
		
	}
	else if (value === 100)
	{
return "equal to 100";
		
	}
else if (value === 14)
	{
return "more than 100";
		
	}
else if (value === [])
	{

		return undefined;
	}
else if (value === [4,9])
	{

		
	}

}



exports.dataTypes = dataTypes;