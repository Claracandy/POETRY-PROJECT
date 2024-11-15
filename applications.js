 
 alert()
 
        
let Applications = document.getElementById("Applications");

Applications.addEventListener("submit", (e) => {
    e.preventDefault();

    let Firstname = document.getElementById("Firstname");
    let Secondname = document.getElementById("Secondname");
    let Phone = document.getElementById("Phone");
    let Email = document.getElementById("Email");
    let Age = document.getElementById("Age");
    let Nationality = document.getElementById("Nationality");

    if (Firstname.value == "" || Secondname.value == "" || phone.value == "" || email.value == ""
        || Age.value == "" || Nationality.value == "") {
        alert("Ensure you input a value in both fields!");
    } else {

        alert("This form has been successfully submitted!");
        console.log(
            `This form has a Firstname of ${Firstname.value} and Secondname of ${Secondname.value} and Phone of ${Phone.value}  and Age of ${Age.value} and Email of ${Email.value} and Nationality of ${Nationality.value}`
        );

        
    }
    object.onsubmit = function(){myScript};
    function validateForm() {
        var x = document.forms["myForm"]["fname"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
      } 

 console.log("Applications")

});



