//Problem resolved
document.addEventListener("DOMContentLoaded",function (){
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit",function (event){
        event.preventDefault();

        const userName = document.getElementById("userName").value;
        const password = document.getElementById("password").value;
        const regNum = document.getElementById("regNum").value;

        if(validateInput(userName, password, regNum)){
            alert("Login Successful!");
        } else{
            alert("Invalid userName, password or registration number. Please try again.");
        }
    });

    function validateInput(userName, password, regNum){
        if (userName.trim() == "" || password.trim() == "" || regNum.trim() == ""){
            return false;
        } else{
            return true;
        }
    }
});
