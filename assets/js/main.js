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

var gameOn = false;

$("#begin").click(function(){
    initializeGame();
});



// Generate 4 random countries from the array
function generateCountries(){
    const shuffled = JSON.sort(() => .5 - Math.random());  
    let selected = shuffled.slice(0, 4);
    return selected;
}

function initializeGame(){
    gameOn = true; // Start game
    $(".messagebox").css("visibility", "hidden"); // Hide the message box
    let countries = generateCountries();
    let index = Math.floor(Math.random() * 4);
    var goalCountry = countries[index];

    // Populate and show buttons
    for (var i = 0; i < 4; i++){
        $(`#button${i+1}`).text(countries[i].name);
        $(`#button${i+1}`).on("click", function(){
            if($(this).text() === goalCountry.name){
                $(".button").addClass("correct").attr("disabled", "true");
                $(this).addClass("correctguess");
                updateMessagebox("Victory");                
            } else {
                $(".button").addClass("incorrect").attr("disabled", "true");
                $(this).addClass("incorrectguess");
                $(`#button${index+1}`).addClass("correctguess");
                updateMessagebox("Incorrect");
            }
        });
    };
    $(".button").css("visibility", "visible");

    // Show the goal flag
    $("#flag").attr("src", `assets/img/${goalCountry.filename}.svg`); 

}

function checkVictory(guess, answer){
    console.log(guess);
    console.log(answer);
    return guess === answer;
}

function updateMessagebox(message){
    switch(message){
        case "Victory":
            $(".messagebox").css("visibility", "visible"); 
            $(".message").text("You Won!");
            break;  
        case "Incorrect":
            $(".messagebox").css("visibility", "visible"); 
            $(".message").text("Wrong! Better luck next time");
            break;
    }
}