document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });
function validateForm(){
    // FNAME
    let fname=document.forms["ExcelRForms"]["fname"].value;
    let arr1=[];
    if(/^$/.test(fname)){
        arr1.push("Firstname can't be left blank");
    }else if(!/^[a-zA-Z0-9$_]{4,12}$/.test(fname)){
        arr1.push("first name should follow rules and regulations");
    }
    document.getElementById("fname_errors").innerHTML=arr1.join(",");

    // LNAME
    let lname=document.forms["ExcelRForms"]["lname"].value;
    let arr2=[];
    if(/^$/.test(lname)){
        arr2.push("Lastname can't be left blank");
    }else if(!/^[a-zA-Z0-9$_]{4,12}$/.test(lname)){
        arr2.push("last name should follow rules and regulations");
    }
    document.getElementById("lname_errors").innerHTML=arr2.join(",");

    // EMAIL
    let email=document.forms["ExcelRForms"]["emailid"].value;
    let arr4=[];
    if(/^$/.test(email)){
        arr4.push("Email should not be left blank");
    }else if(!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)){
        arr4.push("Email should follow rules and regulations")
    }
    document.getElementById("email_errors").innerHTML=arr4.join(",");

    // MOBILE NUMBER
    let mnumber=document.forms["ExcelRForms"]["mobile"].value;
    let arr5=[];
    if(/^$/.test(mnumber)){
        arr5.push("mobile number should not be left blank");
    }else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(mnumber)){
        arr5.push("Mobile number should be 10 numericals")
    }
    document.getElementById("mobile_errors").innerHTML=arr5.join(",");


    // RADIO BUTTON
    //let btns=document.forms["ExcelRForms"]["gender"].checked;
    let malebox = document.getElementsByName("gender")[0];
    let femalebox = document.getElementsByName("gender")[1];
    let otherbox = document.getElementsByName("gender")[2]; 
    let arr6=[];
    if(malebox.checked || femalebox.checked || otherbox.checked){
        Text.innerHTML="";
    } else{
        arr6.push("Please select gender");
    } 
    document.getElementById("gender_errors").innerHTML=arr6.join(",");
    displayPopup();
    
   return false;
}


function displayPopup() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Build popup content
    const popupContent = `
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Gender:</strong> ${gender.length > 0 ? gender[0].value : 'Not specified'}</p>
      <p><strong>Profession:</strong> ${profession}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${mobile}</p>`;

    // Display popup
    const popup = document.getElementById('popup');
    popup.innerHTML = popupContent;
    popup.style.display = 'block';

    // Reset the form after closing the popup
    popup.addEventListener('click', function() {
      popup.style.display = 'none';
      resetForm();
    });
  }

  function resetForm() {
    document.getElementById('surveyForm').reset();
  }