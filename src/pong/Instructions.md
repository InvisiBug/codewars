# Lets play some Pong!
For those who don't know what Pong is, it is a simple arcade game where two players can move their paddles to hit a ball towards the opponent's side of the screen, gaining a point for each opponent's miss.

# Task
You must finish the Pong class.
It has a constructor which accepts the maximum score a player can get throughout the game, and a method called play.
This method determines whether the current player hit the ball or not, i.e. if the paddle is at the sufficient height to hit it back.

## There're 4 possible outcomes:
* Player successfully hits the ball back, player misses the ball, player misses
* The ball and his opponent reaches the maximum score winning the game, either
* Player tries to hit a ball despite the game being over.
* You can see the input and output description in detail below.

### "Play" method input:
ball position - The Y coordinate of the ball
player position - The Y coordinate of the centre(!) of the current player's paddle
"Play" method output:

## One of the following strings:
* "Player X has hit the ball!" - If the ball "hits" the paddle
* "Player X has missed the ball!" - If the ball is above/below the paddle
* "Player X has won the game!" - If one of the players has reached the maximum score
* "Game Over!" - If the game has ended when the play method is called

### Important notes:
Players take turns hitting the ball, always starting the game with the Player 1.
The paddles are 7 pixels in height.
The ball is 1 pixel in height.