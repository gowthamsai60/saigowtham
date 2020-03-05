function valid(){
	var uname = document.getElementById('uname');  
	var pword = document.getElementById('pword');
	var runame = "gowtham";
	var rpword = "chintu";
	if(uname_validate(uname)){
		if(pword_validate(pword)){
			if(uname_match(uname,runame)){
				if(pword_match(pword,rpword)){
					window.alert('Successfully Logged In!!');
					window.open("home.html",'_self');
				}
			}
		}
	}
	return false;
}
function uname_validate(uname)
{
	var uname_len = uname.value.length;  
	if(uname_len == 0)
	{  
		alert("Username should not be empty");  
		uname.focus(); 
		return false;  
	} 
	else
	{ 
		return true;  
	}
}
function pword_validate(pword)
{
	var pword_len = pword.value.length;  
	if(pword_len == 0)
	{  
		alert("Password is Empty!!!");  
		pword.focus(); 
		return false;  
	} 
	else
	{ 
		return true;  
	}
}
function uname_match(uname,runame)
{
	if(uname.value == runame)
	{
		return true;
	}
	else
	{
		alert("Invalid Username!!!");
        uname.focus();
		return false;
	}

}
function pword_match(pword,rpword)
{
	var rpword="chintu";
	if(pword.value == rpword)
	{
		return true;
	}
	else
	{
		alert("Invalid Password!!!");
        pword.focus();
		return false;
	}

}
