function myFunction()
{
  var randomNumber1 = Math.floor(Math.random() * (6 - 1)+1);
  var image1 = document.getElementsByClassName("img1");
  image1[0].src = "images/dice" + randomNumber1 + ".png";

  var randomNumber2 = Math.floor(Math.random()*(6-1)+1);
  var image2 = document.getElementsByClassName("img2");
  image2[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");

  var refresh = document.querySelector("h1");
  if(randomNumber1 === randomNumber2)
  {
    refresh.innerHTML = "Draw!";
  }
  else if(randomNumber1<randomNumber2)
  {
    refresh.innerHTML = "Player 2 Wins";
  }
  else if(randomNumber1>randomNumber2)
  {
    refresh.innerHTML = "Player 1 Wins";
  }

}
