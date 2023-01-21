function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function sendForm() {
    document.getElementById("myForm").submit = alert("Your message has been sent..!!!");
}


function toggle(){
    var button = document.getElementById("btn");
        if(button.classList.contains("far")){
            button.classList.remove("far");
            button.classList.add("fas");
        }else{
            button.classList.remove("fas");
            button.classList.add("far");
        }
}


    