$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava\cucumberJava.feature');
formatter.feature({
  "line": 1,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 19,
  "name": "Verification of reset button with numbers of credential",
  "description": "",
  "id": "cucumberjava;verification-of-reset-button-with-numbers-of-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Open the chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Enter the Username and Password",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Login the credential",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.open_the_chrome_and_launch_the_application()"
});
formatter.result({
  "duration": 15885826200,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.enter_the_Username_and_Password()"
});
formatter.result({
  "duration": 3984056500,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.Reset_the_credential()"
});
formatter.result({
  "duration": 6387595000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Logout",
  "description": "",
  "id": "cucumberjava;logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Logout",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.Logout()"
});
formatter.result({
  "duration": 22531180100,
  "status": "passed"
});
});