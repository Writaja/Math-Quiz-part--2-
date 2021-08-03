function adduser(){
    var player1_name=document.getElementById("player1_name"). value;
    var player2_name=document.getElementById("player2_name"). value;
localStorage.setItem("player1_name",player1_name );
localStorage.setItem("player2_name",player2_name );
window.location.replace("game_page.html");
}
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    question_number="<h4>"+number1+"X"+number2+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check_box'>";
}
var number1_name= localStorage.getItem ("number1_name");
var number2_name= localStorage.getItem ("number2_name");
var number1_score=0;
varnumber2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
document.getElementById("player_ans").innerHTML="Answer turn - "+player2_name;
function send() {
    var getword=document.getElementById("word").value;
 word=getword.toLowerCase();
console.log(word);
var charat1=word.charAt(1);
console.log(charat1);
var length_2=Math.floor(word.length/2);
var charat2=word.charAt(length_2);
console.log(charat2);
var lengthminus_1=word.length-1;
var charat3=word.charAt(lengthminus_1);
console.log(charat3);
var remove_charat1=word.replace(charat1,"_");
var remove_charat2=remove_charat1.replace(charat2,"_");
var remove_charat3=remove_charat2.replace(charat3,"_");
console.log(remove_charat3);
var Question_word="<h4 id='word_display'>Q. "+remove_charat3+"</h4>";
var input_box="<br> Answer : <input type='text' id='input_box'>";
var check_button="<br><br> <button class='btn btn-info' onclick='check()'>Check</button> ";
var row=Question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";

}
question_number="number1";
ans_number="number2";
function check(){
    get_ans=document.getElementById("input_box").value;
    ans=get_ans.toLowerCase();
    if(ans==word){
        if(ans_turn=="number1"){
            number1_score=number1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;

        }
        else{
            number2_score=number2_score+1
            document.getElementById("number2_score").innerHTML=number2_score;
        }    }
        if(question_number=="number1"){
            question_number="number2"
            document.getElementById("question_number").innerHTML="question number - "+number2_name;

        } 
        else{
            question_number=="number1";
            document.getElementById("question_number").innerHTML="question number - "+number1_name;
        }
        if(ans_number=="number1"){
            ans_turn="number"
            document.getElementById("ans_numbers").innerHTML="answer numbers - "+number2_name;

        }
else{
    ans_number="number1";
    document.getElementById("ans_number").innerHTML="answer number - "+number1_name;
}
document.getElementById("output").innerHTML="";    
}
