var player1_name= localStorage.getItem ("player1_name");
var player2_name= localStorage.getItem ("player2_name");
var player1_score=0;
var player2_score=0;
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
question_turn="player1";
ans_turn="player2";
function check(){
    get_ans=document.getElementById("input_box").value;
    ans=get_ans.toLowerCase();
    if(ans==word){
        if(ans_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;

        }
        else{
            player2_score=player2_score+1
            document.getElementById("player2_score").innerHTML=player2_score;
        }    }
        if(question_turn=="player1"){
            question_turn="player2"
            document.getElementById("player_question").innerHTML="question turn - "+player2_name;

        } 
        else{
            question_turn=="player1";
            document.getElementById("player_question").innerHTML="question turn - "+player1_name;
        }
        if(ans_turn=="player1"){
            ans_turn="player2"
            document.getElementById("player_ans").innerHTML="answer turn - "+player2_name;

        }
else{
    ans_turn="player1";
    document.getElementById("player_ans").innerHTML="answer turn - "+player1_name;
}
document.getElementById("output").innerHTML="";    
}