function validation()
{
  var answer1, answer2, answer3;
  answer1 = "01101110111100";
  answer2 = "46115184253322391460";
  answer3 = "6612183048";

  var page = document.title;
  var chk;
  var guestAnswer;
  var percentage = 0;
  var result = 0;

  if (page == "Question 1")
  {
    guestAnswer = document.getElementById("question1").value;

    chk = guestAnswer.localeCompare(answer1); //returns 0 if they are the same string
    if (chk == 0) //checks if it is equal to 0
    {
      sessionStorage.correctAnswer = 1; //create a sessionStorage to hold number
    }                                   //of correct answers
    else
    {
        sessionStorage.correctAnswer = 0; //if it is not right well
                                          //create a storage and assign it zero
    }

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
    else //assume that they have a session storage open so just add 0 to the
    {   //storage if they got it wrong

      sessionStorage.correctAnswer = Number(sessionStorage.correctAnswer)+0;

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
    else
    {
      sessionStorage.correctAnswer = Number(sessionStorage.correctAnswer)+0;
    }
  }
  else if (page == "Results")
  {
    result = Number(sessionStorage.correctAnswer); //Covert answer to a number
    percentage = (result / 3) * 100; //Calculate the percentage
    document.getElementById("quest").innerHTML = result + "/3";
    document.getElementById("asnwr").innerHTML = percentage + "%";
    console.log(result);
    console.log(percentage);
  }


}

function autoCheck() {
  var qChk1, qChk2, qChk3;

  var page = document.title;

  if (page == "Question 1")
  {
    qChk1 = document.getElementById("question1").value;
    if(isNaN(qChk1))
    {
      document.getElementById("verify").style.visibility = "visible";
      document.getElementById("verify").innerHTML="Please enter numbers only";
      document.getElementById("question1").style.border = "2px solid red";
    }
    else {
      document.getElementById("verify").style.visibility = "hidden";
      document.getElementById("question1").style.border = "2px solid white"
      checkAnswer();
    }
  }
  else if(page == "Question 2")
  {
    qChk2 = document.getElementById("question2").value;
    if(isNaN(qChk2))
    {
      document.getElementById("verify").style.visibility = "visible";
      document.getElementById("verify").innerHTML="Please enter numbers only";
      document.getElementById("question2").style.border = "2px solid red";
    }
    else {
      document.getElementById("verify").style.visibility = "hidden";
      document.getElementById("question2").style.border = "2px solid white"
      checkAnswer();
    }
  }
  else if(page == "Question 3")
  {
    qChk3 = document.getElementById("question3").value;
    if(isNaN(qChk3))
    {
      document.getElementById("verify").style.visibility = "visible";
      document.getElementById("verify").innerHTML="Please enter numbers only";
      document.getElementById("question3").style.border = "2px solid red";
    }
    else {
      document.getElementById("verify").style.visibility = "hidden";
      document.getElementById("question3").style.border = "2px solid white"
      checkAnswer();
    }
  }
}

function checkAnswer() {
  var answer1, answer2, answer3;
  answer1 = "01101110111100";
  answer2 = "46115184253322391460";
  answer3 = "6612183048";

  var page = document.title;
  var chk;
  var guestAnswer;

  if (page == "Question 1")
  {
    guestAnswer = document.getElementById("question1").value;

    chk = guestAnswer.localeCompare(answer1);

    if (chk == 0) //checks if it is equal to 0
    {
      document.getElementById("verify").style.visibility = "visible";
      document.getElementById("verify").innerHTML="Correct";
      document.getElementById("verify").style.color="green";
      document.getElementById("question1").style.border = "2px solid green";
    }
    else if(guestAnswer == "") //if nothing is in the input
    {
      document.getElementById("verify").style.visibility="hidden";
    }
    else
    {
      document.getElementById("verify").style.visibility = "visible";
      document.getElementById("verify").innerHTML="Try again.";
      document.getElementById("verify").style.color="red";
      document.getElementById("question1").style.border = "2px solid red";

    }
  }
  if (page == "Question 2")
  {
    guestAnswer = document.getElementById("question2").value;

    chk = guestAnswer.localeCompare(answer2);

    if (chk == 0) //checks if it is equal to 0
    {
      document.getElementById("verify").style.visibility = "visible";
      document.getElementById("verify").innerHTML="Correct";
      document.getElementById("verify").style.color="green";
      document.getElementById("question2").style.border = "2px solid green";
    }
    else if(guestAnswer == "") //if nothing is in the input
    {
      document.getElementById("verify").style.visibility="hidden";
    }
    else
    {
      document.getElementById("verify").style.visibility = "visible";
      document.getElementById("verify").innerHTML="Try again.";
      document.getElementById("verify").style.color="red";
      document.getElementById("question2").style.border = "2px solid red";

    }
  }
  if (page == "Question 3")
  {
    guestAnswer = document.getElementById("question3").value;

    chk = guestAnswer.localeCompare(answer3);

    if (chk == 0) //checks if it is equal to 0
    {
      document.getElementById("verify").style.visibility = "visible";
      document.getElementById("verify").innerHTML="Correct";
      document.getElementById("verify").style.color="green";
      document.getElementById("question3").style.border = "2px solid green";
    }
    else if(guestAnswer == "") //if nothing is in the input
    {
      document.getElementById("verify").style.visibility="hidden";
    }
    else
    {
      document.getElementById("verify").style.visibility = "visible";
      document.getElementById("verify").innerHTML="Try again.";
      document.getElementById("verify").style.color="red";
      document.getElementById("question3").style.border = "2px solid red";
    }
  }

}
