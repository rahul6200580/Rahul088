function validateForm() {
    var name = document.forms['myForm']['Name'];
    var email = document.forms['myForm']['Email'];
    var phone = document.forms['myForm']['Phone'];



    if(name.value=="") {
        window.alert("Please enter your name");
        name.focus();
        return false
    }

    if(email.value=="") {
        window.alert("Please enter your email address");
        name.focus();
        return false
    }

    if(phone.value=="") {
        window.alert("Please enter your phone no.");
        name.focus();
        return false
    }
    return true;
}