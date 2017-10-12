// Store all the flag data in an object
const JSON = [
    { "name": "Andorra", "filename": "ad", "region": "Europe" },
    { "name": "United Arab Emirates", "filename": "ae", "region": "Asia" },
    { "name": "Afghanistan", "filename": "af", "region": "Asia" },
    { "name": "Antigua and Barbuda", "filename": "ag", "region": "Caribbean" },
    { "name": "Anguilla", "filename": "ai", "region": "Caribbean" },
    { "name": "Albania", "filename": "al", "region": "Europe" },
    { "name": "Armenia", "filename": "am", "region": "Europe" },
    { "name": "Angola", "filename": "ao", "region": "Africa" },
    { "name": "Antartica", "filename": "aq", "region": "Other" },
    { "name": "Argentina", "filename": "ar", "region": "South America" },
    { "name": "American Samoa", "filename": "as", "region": "Oceana" },
    { "name": "Austria", "filename": "at", "region": "Europe" },
    { "name": "Australia", "filename": "au", "region": "Oceana" },
    { "name": "Aruba", "filename": "aw", "region": "Caribbean" },
    { "name": "Åland Islands", "filename": "ax", "region": "Europe" },
    { "name": "Azerbaijan", "filename": "az", "region": "Asia" },
    { "name": "Bosnia and Herzegovina", "filename": "ba", "region": "Europe" },
    { "name": "Barbados", "filename": "bb", "region": "Caribbean" },
    { "name": "Bangladesh", "filename": "bd", "region": "Asia" },
    { "name": "Belgium", "filename": "be", "region": "Europe" },
    { "name": "Burkina Faso", "filename": "bf", "region": "Africa" },
    { "name": "Bulgaria", "filename": "bg", "region": "Europe" }, 
    { "name": "Bahrain", "filename": "bh", "region": "Asia" }, 
    { "name": "Burundi", "filename": "bi", "region": "Africa" }, 
    { "name": "Benin", "filename": "bj", "region": "Africa" }, 
    { "name": "Saint Barthélemy", "filename": "bl", "region": "Caribbean" }, 
    { "name": "Bermuda", "filename": "bm", "region": "Caribbean" }, 
    { "name": "Brunei Darussalam", "filename": "bn", "region": "Asia" }, 
    { "name": "Bolivia", "filename": "bo", "region": "South America" }, 
    { "name": "Bonaire, Sint Eustatius and Saba", "filename": "bq", "region": "Caribbean" }, 
    { "name": "Brazil", "filename": "br", "region": "South America" }, 
    { "name": "Bahamas", "filename": "bs", "region": "Caribbean" }, 
    { "name": "Bhutan", "filename": "bt", "region": "Asia" }, 
    { "name": "Bouvet Island", "filename": "bv", "region": "Other" }, 
    { "name": "Botswana", "filename": "bw", "region": "Africa" }, 
    { "name": "Belarus", "filename": "by", "region": "Europe" }, 
    { "name": "Belize", "filename": "bz", "region": "North America" }, 
    { "name": "Canada", "filename": "ca", "region": "North America" }, 
    { "name": "Cocos Islands", "filename": "cc", "region": "Asia" }, 
    { "name": "Democratic Republic of the Congo", "filename": "cd", "region": "Africa" }, 
    { "name": "Central African Republic", "filename": "cf", "region": "Africa" }, 
    { "name": "Congo", "filename": "cg", "region": "Africa" }, 
    { "name": "Switzerland", "filename": "ch", "region": "Europe" }, 
    { "name": "Ivory Coast", "filename": "ci", "region": "Africa" }, 
    { "name": "Cook Islands", "filename": "ck", "region": "Oceana" }, 
    { "name": "Chile", "filename": "cl", "region": "South America" }, 
    { "name": "Cameroon", "filename": "cm", "region": "Africa" }, 
    { "name": "China", "filename": "cn", "region": "Asia" }, 
    { "name": "Colombia", "filename": "co", "region": "South America" }, 
    { "name": "Cuba", "filename": "cu", "region": "Caribbean" }, 
    { "name": "Cape Verde", "filename": "cv", "region": "Europe" }, 
    { "name": "Curaçao", "filename": "cw", "region": "Caribbean" }, 
    { "name": "Christmas Island", "filename": "cx", "region": "South America" }, 
    { "name": "Cyprus", "filename": "cy", "region": "Europe" }, 
    { "name": "Czechia", "filename": "cz", "region": "Europe" }, 
    { "name": "Germany", "filename": "de", "region": "Europe" }, 
    { "name": "Djibouti", "filename": "dj", "region": "Africa" }, 
    { "name": "Denmark", "filename": "dk", "region": "Europe" },
    { "name": "Dominica", "filename": "dm", "region": "Caribbean" },
    { "name": "Dominican Republic", "filename": "do", "region": "Caribbean" }, 
    
];
//     { "name": "", "filename": "", "region": "" }, 

var gameOn = false,
    hearts = 3,
    score = 0,
    countries = "",
    index = 0,
    goalCountry = "";


initializeStartButton();

function initializeStartButton() {
    $("#begin").click(function() {
        initializeGame();
    });
}

// Generate 4 random countries from the array
function generateCountries(){
    const shuffled = JSON.sort(() => .5 - Math.random());  
    let selected = shuffled.slice(0, 4);
    return selected;
}

function initializeGame(){
    gameOn = true; // Start game
    hearts = 3;
    score = 0;
    $("#score").text(score);    
    updateMessagebox();
    reset();
}

function reset(){
    if(gameOn){
        countries = generateCountries();
        index = Math.floor(Math.random() * 4);
        goalCountry = countries[index];
        resetButtons();
        updateMessagebox();

        // Populate and show buttons
        for (var i = 0; i < 4; i++){
            $(`#button${i+1}`).text(countries[i].name);
            $(`#button${i+1}`).on("click", function(){
                $(".button").addClass("correct").attr("disabled", "true");
                
                if($(this).text() === goalCountry.name){
                    $(this).addClass("correctguess");
                    addScore();
                    updateMessagebox("Correct");                    
                    setTimeout(reset, 3000);                
                } else {
                    $(this).addClass("incorrectguess");
                    $(`#button${index+1}`).addClass("correctguess");
                    loseLife();
                    setTimeout(reset, 3000);
                }
            });
        };
        drawHearts(hearts);

        // Show the goal flag
        $("#flag").attr("src", `assets/img/${goalCountry.filename}.svg`);
    } else {
        $("#flag").attr("src", `assets/img/default.png`);        
        $(".button").css("visibility", "hidden");
        $("#score").text(score);        
        updateMessagebox("New");       
    }
}

function resetButtons(){
    $(".button").off();
    $(".button").css("visibility", "visible").prop("disabled", false).removeClass("correctguess incorrectguess correct");
    $(".button").text("");
}

function addScore(){
    score++;
    $("#score").text(score);
}

function updateMessagebox(message){
    switch(message){
        case "Correct":
            $(".message").text("Congratulations, you guessed right!");
            break;  
        case "Incorrect":
            $(".message").text(`Wrong! You have ${hearts} lives remaining.`);
            break;
        case "Dead":
            $(".message").text("You ran out of lives :( Your final score was: " + score);
            setTimeout(reset, 3000);
            break;
        case "New":
            $(".message").html(`<button id="begin">Start!</button>`);
            initializeStartButton();
            break;
        default:
            $(".message").text("");
            break;
    }
}

function drawHearts(num){
    for(var i = 1; i <= num; i++){
        $(`#health${i}`).css("visibility", "visible");
    }
}

function loseLife(){
    if(hearts === 1){
        $("#health1").fadeOut( "slow", function() {
            hearts--;
            endGame();
          });
    } else {
        $(`#health${hearts}`).fadeOut( "slow", function() {
            hearts--;
            updateMessagebox("Incorrect");
        });
    }
}

function endGame(){
    gameOn = false;
    updateMessagebox("Dead");
    setTimeout(resetButtons, 2999); 
    score = 0; 
}