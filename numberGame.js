/**
* Create a number guessing game to generate a number between the range of 1 and 2.
* The game should prompt users for their username.
* Set range as function parameter and prompt the player to predict the generated 
* number between the given range. At a correct guess, the game should award the 
* player a point and move them to stage 2 by increasing the range limit value by 1,
* e.g. range is from 1 and 3 for stage 2 and so on.
*/

function NumberGuessingGame(range)
{
	var username = prompt("Enter your name");
	var secretNumber = Math.floor(Math.random() * (range + 1));
	var range = range;
	var score = 0;
	var stage = 1;

	while (true)
	{
		secretNumber = Math.floor(Math.random() * (range + 1));
		var playerGuess = Number(prompt(`Hello ${username}. Guess a number between 1 and ${range}`));

		if (playerGuess === secretNumber)
		{
			score = score + 1;
			stage = stage + 1;
			range = range + 1;
			console.log("You guessed right! Congratulations!");
			if (score == 1)
				console.log(`You now have ${score} point. Advance to stage ${stage}`);
			else
				console.log(`You now have ${score} points. Advance to stage ${stage}`);
		}
		else
		{
			console.log("Try again");
		}
	}
};

NumberGuessingGame(2)
