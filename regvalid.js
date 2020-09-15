$(function(){

	$("#cName_err_msg").hide();
	$("#pass_err_msg").hide();
	$("#reenterpass_err_msg").hide();
	$("#email_err_msg").hide();

	var err_msg_name = false;
	var err_pass = false;
	var err_reenter_paa = false;
	var err_email = false;

	$("#uname").focusout(function(){

		check_username();

	});

	$("#ps1").focusout(function(){

		check_pass();

	});

	$("#ps2").focusout(function(){

		check_pass1();

	});

$("#email").focusout(function(){

		check_email();

	});


	function check_username()
	{

		var uname_length = $("#uname").val().length;

		if(uname_length<5 || uname_length>20){
			$("#cName_err_msg").html("Should be between 5-20 characters.");
			$("#cName_err_msg").show();
			$("#cName_err_msg").fadeout("slow");
			err_msg_name = true;
		}
		else{
			$("#cName_err_msg").hide();

		}

	}

	function check_pass()
	{
		var password = $("#ps1").val();

		if(password.length < 8 || password.length > 12) {
			$("#pass_err_msg").html("At least 8 characters needed");
			$("#pass_err_msg").show();
			$("#pass_err_msg").fadeout("slow");
			err_pass = true;
		}
		else
		{
			$("#pass_err_msg").hide();
		}

	}


	function check_pass1(){

		var password = $("#ps1").val();
		var password2 = $("#ps2").val();

		if(password != password2){
			$("#reenterpass_err_msg").html("Password not match");
			$("#reenterpass_err_msg").show();
			$("#reenterpass_err_msg").fadeout("slow");
			err_reenter_paa = true;

		}
		else{
			$("#err_reenter_paa").hide();
		}

	}

	function check_email(){
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		if(pattern.test($("#email").val())){
			$("#email_err_msg").hide();
		}
		else{
			$("#email_err_msg").html("Invalid Email Address.");
			$("#email_err_msg").show();
			$("#email_err_msg").fadeout(100);
				err_email = true;

		}

	}

	$("#reg-form").submit(function(){

		err_msg_name = false;
	 	err_pass = false;
	 	err_reenter_paa = false;
	 	err_email = false;

		check_username();
		check_pass();
		check_pass1();
		check_email();

		if(err_msg_name == false && err_reenter_paa == false && err_pass == false && err_email == false
			){
			return true;
	}else{
		return false;

	}



	});



});
