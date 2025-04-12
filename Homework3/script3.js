/* 
Name: Tiffany Hoang
File: homework3.js
Dated Created: 2025-03-08
Date Modified: 2025-04-13
Purpose: Validate data on form
*/ 
function setup()   
{
  var error_flag = 0;
  console.log(error_flag);
}
/* 
This subroutine takes the data names and entered data from the form.
*/
function removedata1() {
  document.getElementById("outputformdata").innerHTML = "(you started over)";
}
 
function getdata1() {
  var formcontents = document.getElementById("signup");
  var formoutput;
  var datatype;
  var i;
  formoutput = "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
  for (i = 0; i < formcontents.length; i++) {
            console.log("item: "+i+" "+formcontents.elements[i].name+" = "+formcontents.elements[i].value);
            /* if (formcontents.elements[i].value !="") { */
              datatype = formcontents.elements[i].type;
              switch (datatype) {
                case "checkbox":
                  if (formcontents.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                    formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                    formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
                  }
                  break;
               case "radio":
                    if (formcontents.elements[i].checked) {
                      formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                      formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                      formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                    }
                  break;
                case "button": case "submit": case "reset":
                  break;
                default:
                  formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                }
            /* } */

  }
/* Experimentation...
var data = document.getElementById("storage").value;
formoutput = formoutput+"<tr><td>Storage? "+
  data+"</td></tr>";
/* End of Experiment */
   if (formoutput.length>0) { 
      formoutput = formoutput + "</table>";
      document.getElementById("outputformdata").innerHTML = formoutput;
   }
}
/* function getrangedata() {
  var slider = document.getElementById("budget");
  document.getElementById("rangedisplay").value = slider;
}
*/

/* This version gets the data from the form explicitely by field name. 
function getdata2()
*/


/* These are the subroutines to check inidivudial fields  */
function checkfirstname()
    {
        x = document.getElementById("fname").value;
        if( x.length<2) { 
              document.getElementById("name_message").innerHTML = "Name is too short. Two characters minimum.";  
              error_flag = 1;
        }
        else {
            if (x.match(/[a-zA-Z'-]+$/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in name. Only A-Z, ', or - permitted.";
              error_flag = 1;
              }
        }
    }
function checkmiddle()
    {
        x = document.getElementById("midinit").value;
        if( x.length>0) { 
              if (x.match(/[a-zA-Z]/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in name. Only A-Z permitted.";
              error_flag = 1;
              }
        }
    }
function checklastname()
    {
        x = document.getElementById("lname").value;
        if( x.length<2) { 
              document.getElementById("name_message").innerHTML = "Name is too short. Two characters minimum.";
              error_flag = 1;  
        }
        else {
            if (x.match(/[a-zA-Z'-]+$/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in name. Only A-Z, ', or - permitted.";
              error_flag = 1;
              }
        }
    }

// Deal with password    
function passwordentry() {
    var passwordoutput;
    var passwordinput = document.getElementById("pwd1").value;
    console.log(passwordinput);
    
    // Validate lowercase letters
    if(passwordinput.search(/[a-z]/) < 0 ) {
      passwordoutput = "Enter at least 1 lower case letter.";
      error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("pass_message1").innerHTML = passwordoutput;
    // Validate capital letters
    if(passwordinput.search(/[A-Z]/)< 0)  {  
      passwordoutput = "Enter at least 1 upper case letter.";
      error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("pass_message2").innerHTML = passwordoutput;
  // Validate numbers
   if(passwordinput.search(/[0-9]/)<0 ) {   
    passwordoutput = "Enter at least 1 number";
    error_flag = 1;
    } else {
    passwordoutput = "Got at least 1 number";
    }
    document.getElementById("pass_message3").innerHTML = passwordoutput;
    // Validate special characters
   if(passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) {   
    passwordoutput = "Enter at least 1 special character";
    error_flag = 1;
    } else {
    passwordoutput = "Got at least 1 special character";
    }
    document.getElementById("pass_message4").innerHTML = passwordoutput;
  // Validate length
  if(passwordinput.length < 8) {
      passwordoutput = "Enter a minimum of 8 characters.";
      error_flag = 1;
  } else {
      passwordoutput = "Password now has 8 or more characters.";
  }
  document.getElementById("pass_message5").innerHTML = passwordoutput;
}
// This checks if both passwords match
function checkpwd2() {
    x=document.getElementById("pwd1").value;
    y=document.getElementById("pwd2").value;
    if ( x==y ) {
        document.getElementById("pwd2_text").innerHTML = "Passwords match.";
    } else {
         document.getElementById("pwd2_text").innerHTML = "Passwords DO NOT match.";
         error_flag = 1;
      }
    }
// Check other fields
function checkssn() {
    var x = document.getElementById("ssn").value;
    var phonemessage = document.getElementById("ssn_message");
    if (x.match(/^\d{3}-\d{2}-\d{4}$/)) {
        document.getElementById("ssn_message").innerHTML = "";
    } else {
        document.getElementById("ssn_message").innerHTML = "Invalid format. Use: 123-45-678";
        error_flag = 1;
    }
} 


function checkemail() {
    var x = document.getElementById("email").value;
    var emailmessage = document.getElementById("email_message");

    if (x.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        document.getElementById("email_message").innerHTML = "";
    } else {
        document.getElementById("email_message").innerHTML = "Invalid email format. Use name@domain.tld";
        error_flag = 1;
    }
}

function checkphone() {
    var x = document.getElementById("phone").value;
    var phonemessage = document.getElementById("phone_message");
    if (x.match(/^\d{3}-\d{3}-\d{4}$/)) {
        document.getElementById("phone_message").innerHTML = "";
    } else {
        document.getElementById("phone_message").innerHTML = "Invalid format. Use: 012-345-6789";
        error_flag = 1;
    }
}

function checkaddr1() {
    x = document.getElementById("add1").value;
    console.log(x.value);
    console.log(x.length);
    if (x.length < 2 ) {  
      document.getElementById("add1_message").innerHTML = "Enter valid address.";  
      error_flag = 1; 
      console.log(error_flag);
      }
      else { 
          document.getElementById("add1_message").innerHTML = "";  
      }
      console.log(add1_message);
}
function checkadd2() {}

function checkcity() {
         if (document.getElementById("city").value.match(/^[ a-zA-Z'-]+$/)) {
              document.getElementById("city_message").innerHTML = "";  
            }
            else  {
              document.getElementById("city_message").innerHTML = "Invalid characters in city name. Only A-Z, ', or - is permitted.";
              error_flag = 1;
              }
}
function checkstate() {
        z=document.getElementById("state").value;
        if(z=="") { 
              document.getElementById("state_message").innerHTML = "Please select a state.";  
              error_flag = 1;
        }
        else {
          document.getElementById("state_message").innerHTML = ""; 
        }
}
//    if (document.getElementById("state").length = 0 ) {  error_flag = 1; }

// Check everything
    function checkform() 
      {
        error_flag = 0;
        checkfname();
        checkmidinit();
        checklname();
        checkemail();
        checkphone();
        checkadd1();
        checkadd2();
        // others
        passwordentry();
        checkpwd2();
        console.log("Error flag: "+ error_flag);
        if (error_flag == "1")
        {
          alert("Please fix the indicated errors.");
        }
        else {
          document.getElementById("submit").disabled = false;
        }
      }
    /* End of document: script3.js */