/* 
Name: Tiffany Hoang
File: script.js
Dated Created: 2025-03-08
Date Modified: 2025-04-30
Purpose: Validate data on form
*/ 
let error_flag = 0;
function setup() {
  var error_flag = 0;
  console.log(error_flag);
}
/* 
This subroutine takes the data names and entered data from the form.
*/
//dynamic date
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//slider
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

function removedata1() {
  document.getElementById("outputformdata").innerHTML = "(you started over)";
}
 
function () {
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
/* Form review */
var data = document.getElementById("storage").value;
formoutput = formoutput+"<tr><td>Storage? "+
  data+"</td></tr>";

   if (formoutput.length>0) { 
      formoutput = formoutput + "</table>";
      document.getElementById("outputformdata").innerHTML = formoutput;
   }
}
 function getrangedata() {
  var slider = document.getElementById("budget");
  document.getElementById("rangedisplay").value = slider;
}

/* This version gets the data from the form explicitely by field name. 
function getdata2()
*/


/* Checks first name to have 1 to 30 characters. Letters, apostrophes and dashes only. */
function checkfirstname()
    {
        x = document.getElementById("fname").value;
        if( x.length < 2) { 
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
/* Checks middle initial. It is optional so it being blank is okay. Only allows 1 character and no numbers. */
function checkmiddle()
    {
        x = document.getElementById("midinit").value;
        if( x.length > 0) { 
              if (x.match(/[a-zA-Z]/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in name. Only A-Z permitted.";
              error_flag = 1;
              }
        }
    }
/* Checks last name to have 1 to 30 characters. Letters, apostrophes and dashes only. */
function checklastname()
    {
        x = document.getElementById("lname").value;
        if( x.length < 2) { 
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

/* Checks date of birth in the format (MM/DD/YYYY), validates the date range,
 and nothing in the future or more than 120 years ago.) */
function checkdob() {
    var input = document.getElementById(dob).value;
    var errorMessage = document.getElementById("dobErrorMessage");

    if (!input) {
        errorMessage.innerHTML = "Please enter your date of birth.";
        error_flag = 1;
        return;
    }
// DOB validation in the format (MM/DD/YYYY), validates the date range, and nothing in the future or more than 120 years ago.) 
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);
  
    if (date > new Date()) {
        document.getElementById("dob_message").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob_message").innerHTML = 
        "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-message").innerHTML = "";
        return true;
      }
  }
// Checks SSN to be in xxx-xx-xxxx format. In numbers only and automatically adds dashes once 3 digits are typed in.
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn_message").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn_message").innerHTML = "";
        return true;
  }

}
function validateZcode() {
  const zipInput = document.getElementById("zcode");
  let zip = zipInput.value.replace(/[^\d-]/g, "");

  if (!zip) {
      document.getElementById("zcode-error").innerHTML = 
      "Zip code can't be blank";
      return false;
  }

  if (zip.length > 5) {
      zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
  } else {
      zip = zip.slice(0, 5);
  }

  zipInput.value = zip;
  document.getElementById("zcode-error").innerHTML = "";
  return true;
}
  
function showAlert() {
  var alertBox = document.getElementById("alert-box");
  var closeAlert = document.getElementById("close-alert");

  alertBox.style.display = "block";
  closeAlert.onclick = function() {
      alertBox.style.display = "none";
  };
}
<div id="alert-box">
    <div id="alert-content">
        <h4>Please fill out all required fields or any other message you want</h4>
        <button id="close-alert">OK</button>
    </div>
</div>
    /* End of document: script.js */