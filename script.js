function forLoopExample(numberEntered){
    var sumTotal = 0
    for (i = 0 ; i <= numberEntered; i++){
        sumTotal = sumTotal + i
    }
    console.log(sumTotal);
}

function doWhileExample(){
    var userEntries = "";
do{
    var continueGame = false;
    var response = promptUser("Do you want to play?");
    if(response.toString().toUpperCase() === "YES")
        {
            continueGame = true;
        }
    if(continueGame)
        {
            var response = promptUser("Enter a word");
            userEntries = userEntries + " " + response
        }
    else{
        console.log(userEntries);
    }
} while(continueGame);
}

function whileExample()
{
    var responseName = promptUser("What is your name?");
    if (responseName)
        {
            var i = 0;
              while (promptUser("Would you like to print your name?").toString().toUpperCase() === "YES")
            {
                if (i === 0)
                    {
                        console.log(responseName);                        
                    }
                else{
                  responseName = responseName + "!";
                  console.log(responseName);
                }
                i++;
            }
        }
}

function foodSuggestion()
{
    var userInputTimeOfDay = promptUser("Time of day?");
    var food = resolveBreakfast(userInputTimeOfDay);
    console.log(food);
}
function resolveBreakfast(timeOfDay)
{
    var foodSuggestion = "";
    switch(timeOfDay.toUpperCase()){
        case "MORNING":
            foodSuggestion = "eggs and toast";
            break;
        case "NOON":
            foodSuggestion = "a salad";
            break;
        case "EVENING":
            foodSuggestion = "chicken and rice"
            break; 
        default:
            foodSuggestion = "";
    }
    return foodSuggestion;
}

function promptUser(questionText)
{
    var userResponse = prompt(questionText);
    if (userResponse)
        {
            return userResponse;
        }
    else
        {
            return "";
        }
}

function printName(userName){
    console.log(userName);
}























