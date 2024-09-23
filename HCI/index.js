function validateform(event){
    event.preventDefault();
    regis = document.getElementById("regis");
    username = document.getElementById("name");
    country = document.getElementById("country");
    email = document.getElementById("email");
    agree = document.getElementById("agree");
    message = document.getElementById("message");
    error = document.getElementById("error");

    if(username.value.length<5){
        error.innerHTML = "Username Minimum 5 Characters";
        alert("Username Minimum 5 Characters");
    }else if(!country.value){
        error.innerHTML = "Input Country!";
        alert("Input Country!");
    }else if(!email.value.endsWith("@gmail.com")){
        error.innerHTML = "Email Must Ends With @gmail.com";
        alert("Email Must Ends With @gmail.com");
    }else if(!agree.checked){
        error.innerHTML = "Please Receive a Copy of Your Response";
        alert("Please Receive a Copy of Your Response");
    }else if(!message.value){
        error.innerHTML = "Please Insert The Message";
        alert("Please Insert The Message");
    }else{
        error.innerHTML = "";
        alert("Success");
        regis.submit();
    }
}