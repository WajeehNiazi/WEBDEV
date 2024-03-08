function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateForm(){
    var returnVal = true;

    var fname = document.forms['myForm']['fname'].value;
    
    if(fname.length === 0){
        alert("Fisrt Name cannot be empty");
        returnVal = false;
        return returnVal;
    }

    var lname = document.forms['myForm']['lname'].value;
    
    if(lname.length === 0){
        alert("Last Name cannot be empty");
        returnVal = false;
        return returnVal;
    }

    var pno = document.forms['myForm']['pno'].value;

    if(pno.length != 11){
        alert("Invalid Phonenumber. Please Enter 11 digits");
        returnVal = false;
        return returnVal;
    }

    else if(isNaN(pno)){
        alert("Invalid Phonenumber. Please enter only numeric characters.");
        returnVal = false;
        return returnVal;
    }

    var email = document.forms['myForm']['eid'].value;

    if(!validateEmail(email)){
        alert("Invalid email address.");
        returnVal = false;
        return returnVal;
    }

    var street = document.forms['myForm']['street'].value;

    if(street.length === 0){
        alert("Street Address cannot be Empty")
        returnVal = false;
        return returnVal;
    }

    var city = document.forms['myForm']['city'].value;

    if(city.length === 0){
        alert("City cannot be Empty")
        returnVal = false;
        return returnVal;
    }

    var state = document.forms['myForm']['state'].value;

    if(state.length === 0){
        alert("State cannot be Empty")
        returnVal = false;
        return returnVal;
    }

    var resume = document.getElementById('myfile').files;

    if(resume.length === 0){
        alert("You must upload a resume");
        returnVal = false;
        return returnVal;
    }

    var coverletter = document.forms['myForm']['cletter'].value;

    if(coverletter.length < 5){
        alert("Cover letter must be of atleast 50 words.");
        returnVal = false;
        return returnVal;
    }

    var edu = document.forms['myForm']['level'].value;

    if(edu === ""){
        alert("Please select your highest level of education.");
        returnVal = false;
        return returnVal;
    }

    var uni = document.forms['myForm']['sname'].value;

    if(uni.length === 0){
        alert("Name of School/University cannot be empty");
        returnVal = false;
        return returnVal;
    }

    var major = document.forms['myForm']['major'].value;

    if(major.length === 0){
        alert("Major/Area of study cannot be empty");
        returnVal = false;
        return returnVal;
    }

    var gyear = document.forms['myForm']['yearofgrad'].value;

    if(gyear.length != 4 ){
        alert("Please enter a valid graduation year")
        returnVal = false;
        return returnVal;
    }

    var date = document.forms['myForm']['start1'].value;
    
    if(date.length === 0){
        alert("previos company1 start date cannot be empty")
        returnVal = false;
        return returnVal;
    }

    var date2 = document.forms['myForm']['end1'].value;
    
    if(date2.length === 0){
        alert("previos company1 end date cannot be empty")
        returnVal = false;
        return returnVal;
    }

    var skills = document.forms['myForm']['skills'].value;

    if(skills.length === 0){
        alert("Please enter skills");
        returnVal = false;
        return returnVal;
    }

    var worktime = document.forms['myForm']['startTime'].value;

    if(worktime.length < 10){
        alert("Please valid prefered work schedule");
        returnVal = false;
        return returnVal
    }

    var locate = document.forms['myForm']['reloc'].value;

    if(locate.length === 0){
        alert("Please specify your willingness to relocate");
        returnVal = false;
        return returnVal
    }
    else if(locate != 'yes' && locate !='no'){
        alert("Please answer in yes or a no");
        returnVal = false;
        return returnVal
    }

    var formData = new FormData(document.getElementById('myForm'));

    // Create table rows dynamically
    var tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear existing table rows

    formData.forEach(function(value, key) {
        var row = document.createElement('tr');
        var fieldCell = document.createElement('td');
        fieldCell.textContent = key;
        var valueCell = document.createElement('td');
        valueCell.textContent = value;
        row.appendChild(fieldCell);
        row.appendChild(valueCell);
        tableBody.appendChild(row);
    });

    return returnVal;
}