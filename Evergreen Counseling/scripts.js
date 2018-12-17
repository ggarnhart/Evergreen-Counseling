$(document).ready(function(){
    $(".button-collapse").sideNav(); 
    $(".parallax").parallax();
    $('#emailModal').modal();
    $('#close').modal('close');
    $("#composeEmailButton").click(timer());
});

function highlightCurrentNav(){
    var currentFile = window.location.pathname;
    if(currentFile == "index.php"){
        //highlight
    }
    else if(currentFile == "forms.php"){
        //highlight
    }
    else if(currentFile == "services.php"){
        //highlight
    }
    else if(currentFile == "logistics.php"){
        //highlight
    }
    else if(currentFile == "directions.php"){
        //highlight
    }
    else if(currentFile == "aboutMe.php"){
        
    }
}

function activateEmailButton(){
    var name = false;
    var email = false;
    var message = false;
    if($("#name").val() != ""){
        name = true;
    }
    
    if($("#email").val() != ""){
        email = true;
    }
    
    if($("#message").val != undefined){
        message = true;
    }
    
    if(name && email){
  document.getElementById("sendEmailButton").className = "btn modal-action modal-close";
    }
    else{  document.getElementById("sendEmailButton").className = "btn disabled";
    }
}

function timer(){
    var counter = setInterval(function(){
        activateEmailButton();
    }, 500);
}

///psychPHP/index.php