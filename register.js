function valid(){
	var fname = document.register.fname;  
	var lname = document.register.lname;
	var male= document.register.male;
	var female = document.register.female;
	var uname = document.register.uname;
	var pword = document.register.pword;
	var rpword = document.register.rpword;
	var email = document.register.email;
	var phone = document.register.phone;
	var address = document.register.address;
	var date = document.register.date;
	var month = document.register.month;
	var year = document.register.year;
	var ardunio = document.register.ardunio;
	var rasberry = document.register.rasberry;
	var coading = document.register.coading;
	var electronics = document.register.electronics;
	var others1 = document.register.others1;
	if(fname_validate(fname)){
		if(lname_validate(lname)){
			if(gender(male,female)){
				if(uname_validate(uname)){
					if(pword_validate(pword)){
						if(rpword_validate(rpword)){
							if(match(pword,rpword)){
								if(email_validate(email)){
									if(phone_validate(phone)){
										if(address_validate(address)){
											if(dateselect1(date)){
												if(monthselect2(month)){
													if(yearselect3(year)){
														if(goodat(ardunio,rasberry,coading,electronics,others1)){
															alert('Form Successfully Submitted');
                                                            window.open('login.html','_self');
														}

													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return false;
}
function fname_validate(fname)
{
	var letters = /^[A-Za-z]+$/;
	if(fname.value.match(letters))
	{
	  return true;
	} 
	else
	{  
		alert('First name must have alphabet characters only');  
		fname.focus();  
		return false;  
	}  
}
function lname_validate(lname)
{
	var letters = /^[A-Za-z]+$/;
	if(lname.value.match(letters))
	{
	  return true;
	} 
	else
	{  
		alert('Last name must have alphabet characters only');  
		lname.focus();  
		return false;  
	}
}
function gender(male,female)
{  
	x=0;   
	if(male.checked)
	{  
		x++;  
	} 
	if(female.checked)
	{  
		x++;   
	}  
	if(x==0)
	{  
		alert('Select Male/Female');  
		male.focus();  
		return false;  
	}
	else
	{
		return true;
	}
}
function uname_validate(uname)
{
	var letters = /^[A-Za-z]+$/;
	if(uname.value.match(letters))
	{
	  return true;
	} 
	else
	{  
		alert('Username must have alphabet characters only');  
		uname.focus();  
		return false;  
	}
}
function pword_validate(pword)
{
	var pword_len = pword.value.length;  
	if(pword_len == 0)
	{  
		alert("Password should not be empty");  
		pword.focus(); 
		return false;  
	} 
	else
	{ 
		return true;  
	}
}
function rpword_validate(rpword)
{
	var rpword_len = rpword.value.length;  
	if(rpword_len == 0)
	{  
		alert("Retype Password should not be empty");  
		rpword.focus(); 
		return false;  
	} 
	else
	{ 
		return true;  
	}
} 
function match(pword,rpword)
{
	if(pword.value.match(rpword))
	{
		return true;
	}
	else
	{
		alert("Retype Password does not match with the Password");
        rpword.focus();
		return false;
	}

}
function email_validate(email)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(email.value.match(mailformat))
	{  
		return true;  
	}  
	else
	{  
		alert("You have entered an invalid email address!");  
		email.focus();  
		return false;  
	}  
}
function phone_validate(phone)
{
	var numbers = /^\d{10}$/;  
	if(phone.value.match(numbers))
	{  
		return true;  
	} 
	else
	{  
		alert('Enter valid phone number');  
		phone.focus();  
		return false;    
	}
}
function address_validate(address)
{
	var address_len = address.value.length;  
	if(address_len == 0)
	{  
		alert("Address should not be empty");  
		address.focus(); 
		return false;  
	} 
	else
	{ 
		return true;  
	}	
}
function dateselect1(date)
{
	if(date.value == "Default1")
	{
	  alert('Select your birth date from the list');  
	  date.focus();  
	  return false;  
	}   
	else
	{
		return true;    
	}
}
function monthselect2(month)
{
	if(month.value == "Default2")
	{  
		alert('Select your birth month from the list');  
		month.focus();  
		return false;  
	}  
	else
	{
		return true;  
	} 
}
function yearselect3(year)
{
	if(year.value == "Default3")
	{  
		alert('Select your birth year from the list');  
		year.focus();  
		return false;  
	}  
	else
	{
		return true;  
	} 
}
function goodat(ardunio,rasberry,coading,electronics,others1)
{
	if(ardunio.checked==false && rasberry.checked==false && coading.checked==false && electronics.checked==false && others1.checked==false){
		alert("Please select what you are good at");
		others1.focus();
		return false;
	}
	else
	{
		return true;
	}

}