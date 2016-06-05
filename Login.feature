Feature: Login feature

  Scenario Outline: As an invalid user I log into my page
		When I navigate to the login page
		And  I enter the user "<username>" and the password "<password>"
		And  I click the login button
		Then I want to get the error message "Falscher Login!"
	
		Examples:
		| username	| password	|
		| jan		| blabla	|
		| Alexander	| blabla	|
	
	
	Scenario: As a valid user I can log into the page
		When I navigate to the login page
		And  I enter the user "testaccount" and the password "testtest"
		And  I click the login button
		Then I want to get forwarded to the mainpage
		
	