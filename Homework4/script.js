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

slider.oninput = function () {output.innerHTML = this.value;};

/* Checks first name to have 1 to 30 characters. Letters, apostrophes and dashes only. */
function validateFname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (fname == "") {
        document.getElementById("fname_message").innerHTML = "First name field cannot be left empty";
        return false;
    } else if (fname !="") {
        if (!fname.match(namePattern)) {
            document.getElementById("fname_message").innerHTML = "Letters, apostrophes, and dashes only";
            return false;
    } else if (fname.length < 2) {
        document.getElementById("fname_message").innerHTML = "First name cannot be less than 2 characters";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("fname_message").innerHTML = "First name cannot be more than 30 characters";
        return false;
    } else {
        document.getElementById("fname_message").innerHTML = "";
        return true;
    }
    }
}
/* Checks middle initial. It is optional so it being blank is okay. Only allows 1 character and no numbers. */
function validateMidinit() {
    let mini = document.getElementById("midinit").value;
    const namePattern = /^[A-Z]+$/;
    
        midinit = midinit.toUpperCase();
        document.getElementById("midinit").value = midinit;
    
        if (!midinit.match(namePattern)) {
            document.getElementById("midinit_message").innerHTML = 
            "Middle initial must be a single uppercase letter";
            return false;
        } else {
            document.getElementById("midinit_message").innerHTML = "";
            return true;
        }
}
/* Checks last name to have 1 to 30 characters. Letters, apostrophes and dashes only. */
function validateLname() {
    fname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (fname == "") {
        document.getElementById("lname_message").innerHTML = "Last name field cannot be left empty";
        return false;
    } else if (fname !="") {
        if (!fname.match(namePattern)) {
            document.getElementById("lname_message").innerHTML = "Letters, apostrophes, and dashes only";
            return false;
    } else if (fname.length < 2) {
        document.getElementById("lname_message").innerHTML = "Last name cannot be less than 2 characters";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("lname_message").innerHTML = "Last name cannot be more than 30 characters";
        return false;
    } else {
        document.getElementById("lname_message").innerHTML = "";
        return true;
    }
    }
}

/* DOB validation in the format (MM/DD/YYYY),validates the date range, and 
nothing in the future or more than 120 years ago.) */
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
        document.getElementById("dob_message").innerHTML = "";
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
// Address 1 validation. Address 1 cannot be less than 2 characters.
function validateAdd1() {
    var ad1 = document.getElementById("add1").value;
    console.log(ad1);
    console.log(ad1.length);

    if(ad1.length < 2) {
      document.getElementById("add1_message").innerHTML = "Please enter your address with at least two characters";
      return false;
    } else {
        document.getElementById("add1_message").innerHTML = "";
        return true;
    }

}
// City validation and ensures city cannot be left empty.
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city_message").innerHTML = "City cannot be left blank";
        return false;
    } else {
        document.getElementById("city_message").innerHTML = "";
        return true;
    }
}
function validateZip() {
  const zipInput = document.getElementById("zip");
  let zip = zipInput.value.replace(/[^\d-]/g, "");

  if (!zip) {
      document.getElementById("zip_message").innerHTML = 
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
//Email validation and must in format, "domain@tld.com"
function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email =="") {
        document.getElementById("email_message").innerHTML = "Email cannot be left blank";
        return false;
    } else if(!email.match(emailR)) {
        document.getElementById("email_message").innerHTML = "Please enter a valid email address";
        return false;
    } else {
        document.getElementById("email_message").innerHTML = "";
        return true;
    }
}
//Phone validation. Only numbers and in "012-345-6789" format
function validatePhone(){
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g, "");

    if (phone.length == 0) {
        document.getElementById("phone_message").innerHTML = "Phone number cannot be left blank";
        return false;
    }

    const formattedPhone =
    phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10);
    phoneInput.value = formattedPhone;
    document.getElementById("phone_message").innerHTML = "";
    return true;
}
/*User ID validation. User ID does not start with number. Only letters, number and underscores. 
Not less than 5 and not more than 30 characters. */
function validateUserid() {
    userid = document.getElementById("userid").value;

    userid = userid.toLowerCase();

    document.getElementById("userid").value = userid;
    
    if (userid.length == 0) {
        document.getElementById("userid_message").innerHTML = "User ID cannot be left blank";
        return false;
    }

    if (!isNaN(userid.charAt(0))) {
        document.getElementById("userid_message").innerHTML = "User ID cannot start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(userid)) {
        document.getElementById("userid_message").innerHTML = "User ID can only have letters, numbers, underscores and dashes. No spaces.";
        return false;
    } else if (userid.length < 5) {
        document.getElementById("userid_message").innerHTML = "User ID must have at least 5 characters";
        return false;
    } else if (userid.length > 30) {
        document.getElementById("userid_message").innerHTML = "User ID cannot exceed 30 characters.";
        return true;
    }
}
function showAlert() {
    alert("Please fill on the form correctly.");
}
// Password validation
function validatePwd() {
    const pwd = document.getElementById("pwd").value;
    const userid = document.getElementById("userid").value;

    const errorMessage = [];

    if (!pwd.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }
    if (!pwd.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }
    if (!pwd.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number");
    }
    if (!pwd.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }
    if (pwd.includes(userid)) {
        errorMessage.push("Password can't contain user ID");
    }

    const errorContainer = document.querySelector(".pwd_message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");
}
// Confirm password validation
function confirmPwd() {
    pwd1 = document.getElementById("pwd").value;
    pwd2 = document.getElementById("pwd2").value;
    
    if (pword1 !== pword2) {
        document.getElementById("pwd2_message").innerHTML = "Passwords do not match";
        return false;
     } else {
        document.getElementById("pwd2_message").innerHTML = "Passwords match";
        return true;
     }
    }
// Displays form data
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}
// Removes user input
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}
function showAlert() {
  var alertBox = document.getElementById("alert-box");
  var closeAlert = document.getElementById("close-alert");

  alertBox.style.display = "block";
  closeAlert.onclick = function() {
      alertBox.style.display = "none";
  }
}
// Validates all info
function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMidinit()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAdd1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZip()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUserid()) {
        valid = false;
    }
    if (!validatePwd()) {
        valid = false;
    }
    if (!confirmPwd()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
 }
//Cookie that remembers info input
 function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}
//Retrieves cookie value by its name
function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

var inputs = [
    {id:"fname", cookieName: "firstName"},
    {id:"midinit", cookieName: "middleInitial"},
    {id: "lname", cookieName: "lastName"},
    {id: "dob", cookieName: "dob"},
    {id: "ssn", cookieName: "ssn" },
    {id: "add1", cookieName: "address1"},
    {id: "city", cookieName: "city"},
    {id: "zip", cookieName: "zipCode"},
    {id: "email", cookieName: "email"},
    {id: "phone", cookieName: "phone"},
    {id: "userid", cookieName: "userId"}
]

inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    // Prefill input fields
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    // Set a cookie when the input field changes
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

//greets user with nam if cookie has been set
var firstName = getCookie("firstName");
if (firstName !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!<br>";
    document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}
// Deletes all cookies
function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}
// function for remember me
document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        // If "Remember Me" is unchecked, delete cookies
        deleteAllCookies();
        console.log("All cookies deleted because 'Remember Me' is unchecked.");
    } else {
        // If "Remember Me" is checked or rechecked, save cookies
        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
        });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});
// Makes sure remember me state reflects cookie behavior on page load
document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) {
        deleteAllCookies();
    }
});
}
/* End of document: script.js */