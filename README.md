# Lab 8 - Starter

Name: Eustacia Sukarto

1) 1. Within a Github action that runs whenever code is pushed: I want to to test my code everytime I push changes to my repo to ensure that that new code does not break the existing code. Github Actions will help me automate my testing process so I do not have to run the tests manually everytime I push changes to my repo.

2) No.

3) No. Unit testing is used to test smaller parts of code. The "message" feature described would contain multiple components interacting with one another, but unit tests does not allow me to test these interactions. Instead, I would use multiple unit tests to test each individual function of the feature.

4) Yes. The "max message length" feature is small enough to be tested with unit testing. Its individual functionality can be tested using unit tests because it does not require interaction with other components since it only checks if the input is more than 80 characters.