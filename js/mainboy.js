var logData = [];
console.log('what?');
function submitMe() {
    var messageIn = document.getElementById("emailInput");
    var passAnswer = document.getElementById("passwdInput");
    var submitButton = document.getElementById("myButton"); 
    // var display = document.getElementById('dataDisplay');
    var submitInformation = function(){
        var code = (XORCipher.encode("test", messageIn.value));
        // console.log(messageIn.value);
        // console.log(passAnswer.value);
        
            document.getElementById('dataDisplay').innerHTML= code;
            logData.push(messageIn.value);
            console.log((XORCipher.encode("test", messageIn.value)));
        };
    
    submitButton.onclick = submitInformation();
}
function decodeMe(){
    var decodeData = document.getElementById("emailInput");
    var decodeButton = document.getElementById("decoder");

    var decoInfo = function(){
        var crypt = (XORCipher.decode("test", decodeData.value));
        document.getElementById('dataDisplay').innerHTML = crypt;
        logData.push(decodeData.value);
    };
    decodeButton.onclick = decoInfo();
    // decodeButton.onkeydown('13') = decoInfo;
}
      
//nonsense from my brain     
// console.log(document.getElementById('name').getAttribute('value'));      
//     document.getElementById('name').addEventListener('change', function() {
//     console.log(this.getAttribute('value'));
// });
//=====================================================================
