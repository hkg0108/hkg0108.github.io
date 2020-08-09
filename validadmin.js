function validateForm(){

	var auth= document.forms["form"]["admin"].value;
	if(auth == "")
	{
		alert("Authentication name  must be filled out !!");
		return false;
	}

	var dept = document.forms["form"]["dept"].value;
	if(dept == "")
	{
		alert("Select your department!!");
		return false;
	}
	var pass1 = document.forms["form"]["pass"].value;
	if(pass1 == "" || pass1.length < 8  )
	{
		alert("Password must be filled out & it should contain upto 8 to 12 characers.!!");
		return false;

	}

}
