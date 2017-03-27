function validation()
{
  var answer1, answer2, answer3;
  answer1 = "01101110111100";
  answer2 = "46,115,184,253,322,391,460";
  answer3 = "-6,-6,-12,-18,-30,-48";

  var page = document.title;
  var chk;
  var guestAnswer;

  if (page == "Question 1")
  {
    guestAnswer = document.getElementById("question1").value;

    chk = guestAnswer.localeCompare(answer1);
    if (chk == 0)
    {
      sessionStorage.correctAnswer = 1;
    }
  }
  else if (page == "Question 2")
  {
    guestAnswer = document.getElementById("question2").value;

    chk = guestAnswer.localeCompare(answer2);
    if (chk == 0)
    {
      sessionStorage.correctAnswer = 2;
    }
  }
  else if (page == "Question 3")
  {
    guestAnswer = document.getElementById("question3").value;

    chk = guestAnswer.localeCompare(answer3);
    if (chk == 0)
    {
      sessionStorage.correctAnswer = 3;
    }
  }
  else if (page == "Results")
  {

  }


}
