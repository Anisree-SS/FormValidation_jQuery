function validation(event) {
	event.preventDefault()
	var count=0;
  	var fname = $("#fName").val().trim();
   	if ((fname == "") || (!isNaN(fname))){
      		 $("#fNameValid").text("Enter a valid first name!!");
		count++;
   	}
   	else
      		 $("#fNameValid").text('');


	var lname = $("#lName").val().trim();
   	if ((lname == "") || (!isNaN(lname))){
      		$("#lNameValid").text("Enter a valid last name!!");
      		count++;
   	}
   	else 
      		$("#lNameValid").text('');

	
	var add = $("#add").val().trim();
   	if (add == ""){
      		$("#addValid").text("Enter Address!!");
      		count++;
   	}
   	else 
      		$("#addValid").text('');

	var phone = $("#phone").val().trim();
   	if ((phone =='') || (isNaN(phone))||(phone.length!=10)){
      		$("#phoneValid").text("Enter valid phone number!!");
      		count++;
   	}
   	else 
     		$("#phoneValid").text('');


	var email = $("#email").val().trim();
	if (email == ''){
		$("#emailValid").text("Enter valid email address!!");
		count++;
	}
	else {

		if(!(email.includes('.com')||email.includes('.in'))){
			$("#emailValid").text("Enter valid email address!!");
			count++;
		}
		else
			$("#emailValid").text('');
		var emailFor=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!email.match(emailFor)){
			$("#emailValid").text("Enter valid email address!!");
			count++;
		}
		else 
			$("#emailValid").text('');
	}


	if (demoPass == ""){
      		$("#demoPassValid").text("Enter password");
      		count++;
   	}
	else
		$("#demoPassValid").text("");



	demoPass = $("#demoPass").val();
   	var sp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
   	var ap = /[A-z]/g;
   	var no = /[0-9]/g;
   	if(demoPass.match(" "))
	{
       		$("#demoPassValid").html("Space is not allowed");
		count++;
	}
		
   	else{
       		var spCh = sp.test(demoPass);
       		var  al= ap.test(demoPass);
       		var Digit = no.test(demoPass);
       		if ((demoPass.length >= 8) && (spCh) && (al) && (Digit))
           		$("#demoPassValid").html('');
       		else{
           		$("#demoPassValid").html("Password should contain<br>alphabets digits and special<br>symbolatleast 8 characters");
			count++;
		}
	}

   	

	var conPass=$("#conPass").val();

	if (conPass == ""){
     		$("#conPassValid").text("Enter password");
      		count++;
   	}
	else
		$("#conPassValid").text('');
	
	
    	if (conPass === demoPass)
        	$("#conPassValid").html("");
    	else {
        	$("#conPassValid").html("Password is not matching");
		count++;
    	}

   	if(count==0){
      		alert("Registration Successfull");
      		$("form")[0].reset();
	}
	
	
}



function password() {
    	var demoPass = $("#demoPass").val();
    	var conPass = $("#conPass").val();
    	if (conPass === demoPass)
        $("#conPassValid").html("");
    	else {
        	$("#conPassValid").html("Password is not matching");
    	}
}


function confirmPassword() {
	demoPass = $("#demoPass").val();
   	var sp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
   	var ap = /[A-z]/g;
   	var no = /[0-9]/g;
   	if(demoPass.match(" "))
       		$("#demoPassValid").html("Space is not allowed");
   	else{
       		var spCh = sp.test(demoPass);
       		var  al= ap.test(demoPass);
       		var Digit = no.test(demoPass);
       		if (((demoPass.length >= 8) && (spCh) && (al) && (Digit)))
           		$("#demoPassValid").html('');
       		else
           		$("#demoPassValid").html("Password should contain<br>alphabets digits and special<br>symbolatleast 8 characters");
  	}

}

function phoneNo(input) {
   input.value = input.value.replace(/\D/g, '');
}



function names(input){
   input.value = input.value.replace(/[^A-Za-z]/g, '');
}


