function validateForm(){

	var num= document.forms["form"]["cnum"].value;
	if(num == "" || num.length <4)
	{
		alert("Number must be filled out & it must be in proper manner like C0023 .!!");
		return false;
	}

	var name = document.forms["form"]["cname"].value;
	if(name == "")
	{
		alert("Name must be filled out!!");
		return false;
	}
	var pass = document.forms["form"]["ps"].value;
	if(pass == "" || pass.length < 8  )
	{
		alert("Password must be filled out & it should contain upto 8 to 12 characers.!!");
		//window.location.href = "Profile.html";
		return false;

	}

}
