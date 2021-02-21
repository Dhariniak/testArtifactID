Feature: CucumberJava


Scenario Outline: Verification of reset button with numbers of credential


Given Open the chrome and launch the application


When Enter the Username and Password


Then Login the credential

Examples:                      

|username  |password         |

|User1     |password1        |


Scenario: Logout
Then Logout

#Scenario: close browser
#Then close browser