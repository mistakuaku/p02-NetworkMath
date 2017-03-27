
//learn how to use cookies
function timer() {
  var time = 0;
  time ++;
  console.log(time);
}


function validation()
{
  var answer1, answer2, answer3;
  answer1 = "01101110111100";
  answer2 = "46,115,184,253,322,391,460";
  answer3 = "-6,-6,-12,-18,-30,-48";

  var page = document.title;

  if (page == "Question 1")
  {
    sessionStorage.q1 = document.getElementById("question1").value;
    console.log("I got to if statement 1!");
    console.log(sessionStorage.q1);
  }
  else if (page == "Question 2")
  {
    sessionStorage.q2 = document.getElementById("question2").value;
  }
  else if (page == "Question 3")
  {
    sessionStorage.q3 = document.getElementById("question3").value;
  }
  else if (page == "Results")
  {

  }


}
