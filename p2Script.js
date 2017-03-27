function validation()
{
  var answer1, answer2, answer3;
  answer1 = "01101110111100";
  answer2 = "46,115,184,253,322,391,460";
  answer3 = "-6,-6,-12,-18,-30,-48";

  var page = document.title;
  var chk;
  var guestAnswer;
  var percentage, result;

  if (page == "Question 1")
  {
    guestAnswer = document.getElementById("question1").value;

    chk = guestAnswer.localeCompare(answer1); //returns 0 if they are the same string
    if (chk == 0) //checks if it is equal to 0
    {
      sessionStorage.correctAnswer = 1; //create a sessionStorage to hold number
    }                                   //of correct answers
  }
  else if (page == "Question 2")
  {
    guestAnswer = document.getElementById("question2").value;

    chk = guestAnswer.localeCompare(answer2);
    if (chk == 0)
    {
      if (sessionStorage.correctAnswer) //Checks if there is a correctAnswer currently
      {
        sessionStorage.correctAnswer = Number(sessionStorage.correctAnswer)+1;
        //If there is it adds one to the answer
      }
      else
      {
          sessionStorage.correctAnswer = 1; //if not starts a session storage
      }
    }
  }
  else if (page == "Question 3")
  {
    guestAnswer = document.getElementById("question3").value;

    chk = guestAnswer.localeCompare(answer3);
    if (chk == 0)
    {
      if (sessionStorage.correctAnswer)
      {
        sessionStorage.correctAnswer = Number(sessionStorage.correctAnswer)+1;
      }
      else
      {
          sessionStorage.correctAnswer = 1;
      }
    }
  }
  else if (page == "Results")
  {
    result = Number(sessionStorage.correctAnswer); //Covert answer to a number
    percentage = (result / 3) * 100; //Calculate the percentage
    console.log(result);
    console.log(percentage);
  }


}
