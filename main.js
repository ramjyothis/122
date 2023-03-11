y = 0;
x= 0 ;

draw_apple= "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
document.getElementById("status").innerHTML = "system is listenling please speak";
recognition.start();
}
recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;


document.getElementById("status").innerHTML = "the speech has been recognized as" + content;
to_number = Number(content);
if (Number.isInteger(to_number));
console.log(to_number);
if(Numb);
}


    function setup (){
        canvas = createCanvas(900, 600);
    }

    function draw(){
      if(draw_apple =="set");
      {
        document.getElementById("status").innerHTML = to_number + "Apples drawn";
        draw_apple = "";
        speak_data = to_number + "Apples Drawn";
        speak()
        for(var i = 1; i <= to_number; i++){
          x = math.floor(math.ramdom()*700);
        }
      }
    }

    function speak(){
      var synth = window.speechSynthesis;

      var utterThis = new SpeechSynthesisUtterance(speak_data);
       synth.speak(utterThis);

       speak_data = ";"
    }
  


