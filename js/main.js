//header scroll
// let nav = document.querySelector(".header");
// window.onscroll = function (){
//     if(document.documentElement.scrollTop > 50){
//         nav.classList.add("header-scrolled");
//     }
//     else{
//         nav.classList.add("header-scrolled");
//     }
// }
function validate() {    
    var fname = document.reg_form.fname;    
    var message = document.reg_form.lname;    
    var subject = document.reg_form.address;    
    
    var email = document.reg_form.email;    
   // var mobile = document.reg_form.mobile;  
var rooms = document.reg_form.rooms;  

if (fname.value.length <= 0) {    
        alert("Name is required");    
        fname.focus();    
        return false;    
    }    
    if (message.value.length <= 0) {    
        alert("Last Name is required");    
        lname.focus();    
        return false;    
    }    
    if (subject.value.length <= 0) {    
        alert("Address is required");    
        address.focus();    
        return false;    
    }    
   
    if (email.value.length <= 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    }    
    // if (mobile.value.length <= 0) {    
    //     alert("Mobile number is required");    
    //     mobile.focus();    
    //     return false;    
    // }    
if (rooms.value == "select room") {    
        alert("SELECT TYPE OF ROOM");    
        rooms.focus();    
        return false;    
    }    
    return true;  
}
