// Store all the flag data in an object
const JSON = [
    { "name": "Andorra", "filename": "ad.svg", "region": "Europe" },
    { "name": "United Arab Emirates", "filename": "ae.svg", "region": "Asia" },
    { "name": "Afghanistan", "filename": "af.svg", "region": "Asia" },
    { "name": "Antigua and Barbuda", "filename": "ag.svg", "region": "Caribbean" },
    { "name": "Anguilla", "filename": "ai.svg", "region": "Caribbean" },
    { "name": "Albania", "filename": "al.svg", "region": "Europe" },
    { "name": "Armenia", "filename": "am.svg", "region": "Europe" },
    { "name": "Angola", "filename": "ao.svg", "region": "Africa" },
    { "name": "Antartica", "filename": "aq.svg", "region": "Other" },
    { "name": "Argentina", "filename": "ar.svg", "region": "South America" },
    { "name": "American Samoa", "filename": "as.svg", "region": "Oceana" },
    { "name": "Austria", "filename": "at.svg", "region": "Europe" },
    { "name": "Australia", "filename": "au.svg", "region": "Oceana" },
    { "name": "Aruba", "filename": "aw.svg", "region": "Caribbean" },
    { "name": "Åland Islands", "filename": "ax.svg", "region": "Europe" },
    { "name": "Azerbaijan", "filename": "az.svg", "region": "Asia" },
    { "name": "Bosnia and Herzegovina", "filename": "ba.svg", "region": "Europe" },
    { "name": "Barbados", "filename": "bb.svg", "region": "Caribbean" },
    { "name": "Bangladesh", "filename": "bd.svg", "region": "Asia" },
    { "name": "Belgium", "filename": "be.svg", "region": "Europe" },
    { "name": "Burkina Faso", "filename": "bf.svg", "region": "Africa" },
    { "name": "Bulgaria", "filename": "bg.svg", "region": "Europe" }, 
    { "name": "Bahrain", "filename": "bh.svg", "region": "Asia" }, 
    { "name": "Burundi", "filename": "bi.svg", "region": "Africa" }, 
    { "name": "Benin", "filename": "bj.svg", "region": "Africa" }, 
    { "name": "Saint Barthélemy", "filename": "bl.svg", "region": "Caribbean" }, 
    { "name": "Bermuda", "filename": "bm.svg", "region": "Caribbean" }, 
    { "name": "Brunei Darussalam", "filename": "bn.svg", "region": "Asia" }, 
    { "name": "Bolivia", "filename": "bo.svg", "region": "South America" }, 
    { "name": "Bonaire, Sint Eustatius and Saba", "filename": "bq.svg", "region": "Caribbean" }, 
    { "name": "Brazil", "filename": "br.svg", "region": "South America" }, 
    { "name": "Bahamas", "filename": "bs.svg", "region": "Caribbean" }, 
    { "name": "Bhutan", "filename": "bt.svg", "region": "Asia" }, 
    { "name": "Bouvet Island", "filename": "bv.svg", "region": "Other" }, 
    { "name": "Botswana", "filename": "bw.svg", "region": "Africa" }, 
    { "name": "Belarus", "filename": "by.svg", "region": "Europe" }, 
    { "name": "Belize", "filename": "bz.svg", "region": "North America" }, 
    { "name": "Canada", "filename": "ca.svg", "region": "North America" }, 
    { "name": "Cocos Islands", "filename": "cc.svg", "region": "Asia" }, 
    { "name": "Democratic Republic of the Congo", "filename": "cd.svg", "region": "Africa" }, 
    { "name": "Central African Republic", "filename": "cf.svg", "region": "Africa" }, 
    { "name": "Congo", "filename": "cg.svg", "region": "Africa" }, 
    { "name": "Switzerland", "filename": "ch.svg", "region": "Europe" }, 
    { "name": "Ivory Coast", "filename": "ci.svg", "region": "Africa" }, 
    { "name": "Cook Islands", "filename": "ck.svg", "region": "Oceana" }, 
    { "name": "Chile", "filename": "cl.svg", "region": "South America" }, 
    { "name": "Cameroon", "filename": "cm.svg", "region": "Africa" }, 
    { "name": "China", "filename": "cn.svg", "region": "Asia" }, 
    { "name": "Colombia", "filename": "co.svg", "region": "South America" }, 
    { "name": "Cuba", "filename": "cu.svg", "region": "Caribbean" }, 
    { "name": "Cape Verde", "filename": "cv.svg", "region": "Europe" }, 
    { "name": "Curaçao", "filename": "cw.svg", "region": "Caribbean" }, 
    { "name": "Christmas Island", "filename": "cx.svg", "region": "South America" }, 
    { "name": "Cyprus", "filename": "cy.svg", "region": "Europe" }, 
    { "name": "Czechia", "filename": "cz.svg", "region": "Europe" }, 
    { "name": "Germany", "filename": "de.svg", "region": "Europe" }, 
    { "name": "Djibouti", "filename": "dj.svg", "region": "Africa" }, 
    { "name": "Denmark", "filename": "dk.svg", "region": "Europe" },
    { "name": "Dominica", "filename": "dm.svg", "region": "Caribbean" },
    { "name": "Dominican Republic", "filename": "do.svg", "region": "Caribbean" }, 
    
];
//     { "name": "", "filename": ".svg", "region": "" }, 

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
    $("#flag").attr("src", `assets/img/${goalCountry.filename}`); 

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
    }
}