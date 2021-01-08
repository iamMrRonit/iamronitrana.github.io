function valform(){
    var name = document.getElementById("iname").value;
    var email= document.getElementById("iemail").value;
    var phone= document.getElementById("iphone").value;
    var message= document.getElementById("imessage").value;
    
    if(name.trim() == "" || email.trim == "" || phone.trim == "" || message.trim == ""){
        alert("Fill all the fields to submit your message")
    }else{
        alert("Thanks for messaging ");
    }
}