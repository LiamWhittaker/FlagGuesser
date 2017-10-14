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
    { "name": "Algeria", "filename": "dz", "region": "Africa" },
    { "name": "Ecuador", "filename": "ec", "region": "South America" },
    { "name": "Estonia", "filename": "ee", "region": "Europe" },
    { "name": "Egypt", "filename": "eg", "region": "Africa" },
    { "name": "Western Sahara", "filename": "eh", "region": "Africa" },
    { "name": "Eritrea", "filename": "er", "region": "Africa" },
    { "name": "Spain", "filename": "es", "region": "Europe" },
    { "name": "Ethiopia", "filename": "et", "region": "Africa" },
    { "name": "Finland", "filename": "fi", "region": "Europe" },
    { "name": "Fiji", "filename": "fj", "region": "Oceana" },
    { "name": "Falkland Islands", "filename": "fk", "region": "South America" },
    { "name": "Micronesia", "filename": "fm", "region": "Oceana" },
    { "name": "Faroe Islands", "filename": "fo", "region": "Europe" },
    { "name": "France", "filename": "fr", "region": "Europe" },
    { "name": "Gabon", "filename": "ga", "region": "Africa" },
    { "name": "United Kingdom", "filename": "gb", "region": "Europe" },
    { "name": "Grenada", "filename": "gd", "region": "Caribbean" },
    { "name": "Georgia", "filename": "ge", "region": "Europe" },
    { "name": "French Guiana", "filename": "gf", "region": "South America" },
    { "name": "Guernsey", "filename": "gg", "region": "Europe" },
    { "name": "Ghana", "filename": "gh", "region": "Africa" },
    { "name": "Gibraltar", "filename": "gi", "region": "Europe" },
    { "name": "Greenland", "filename": "gl", "region": "Europe" },
    { "name": "Gambia", "filename": "gm", "region": "Africa" },
    { "name": "Guinea", "filename": "gn", "region": "Africa" },
    { "name": "Guadeloupe", "filename": "gp", "region": "Caribbean" },
    { "name": "Equatorial Guinea", "filename": "gq", "region": "Africa" },
    { "name": "Greece", "filename": "gr", "region": "Europe" },
    { "name": "South Georgia and the South Sandwich Islands", "filename": "gs", "region": "South America" },
    { "name": "Guatemala", "filename": "gt", "region": "North America" },
    { "name": "Guam", "filename": "gu", "region": "Asia" },
    { "name": "Guinea-Bissau", "filename": "gw", "region": "Africa" },
    { "name": "Guyana", "filename": "gy", "region": "South America" },
    { "name": "Hong Kong", "filename": "hk", "region": "Asia" },
    { "name": "Heard Island and McDonald Islands", "filename": "hm", "region": "Other" },
    { "name": "Honduras", "filename": "hn", "region": "North America" },
    { "name": "Croatia", "filename": "hr", "region": "Europe" },
    { "name": "Haiti", "filename": "ht", "region": "Caribbean" },
    { "name": "Hungary", "filename": "hu", "region": "Europe" },
    { "name": "Indonesia", "filename": "id", "region": "Asia" },
    { "name": "Ireland", "filename": "ie", "region": "Europe" },
    { "name": "Israel", "filename": "il", "region": "Asia" },
    { "name": "Isle of Man", "filename": "im", "region": "Europe" },
    { "name": "India", "filename": "in", "region": "Asia" },
    { "name": "British Indian Ocean Territory", "filename": "io", "region": "Asia" },
    { "name": "Iraq", "filename": "iq", "region": "Asia" },
    { "name": "Iran", "filename": "ir", "region": "Asia" },
    { "name": "Iceland", "filename": "is", "region": "Europe" },
    { "name": "Italy", "filename": "it", "region": "Europe" },
    { "name": "Jersey", "filename": "je", "region": "Europe" },
    { "name": "Jamaica", "filename": "jm", "region": "Caribbean" },
    { "name": "Jordan", "filename": "jo", "region": "Asia" },
    { "name": "Japan", "filename": "jp", "region": "Asia" },
    { "name": "Kenya", "filename": "ke", "region": "Africa" },
    { "name": "Kyrgyzstan", "filename": "kg", "region": "Asia" },
    { "name": "Cambodia", "filename": "kh", "region": "Asia" },
    { "name": "Kiribati", "filename": "ki", "region": "Oceana" },
    { "name": "Comoros", "filename": "km", "region": "Africa" },
    { "name": "St. Kitts and Nevis", "filename": "kn", "region": "Caribbean" },
    { "name": "Democratic People's Republic of Korea", "filename": "kp", "region": "Asia" },
    { "name": "Republic of Korea", "filename": "kr", "region": "Asia" },
    { "name": "Kuwait", "filename": "kw", "region": "Asia" },
    { "name": "Cayman Islands", "filename": "ky", "region": "Caribbean" },
    { "name": "Kazakhstan", "filename": "kz", "region": "Asia" },
    { "name": "Lao People's Democratic Republic", "filename": "la", "region": "Asia" },
    { "name": "Lebanon", "filename": "lb", "region": "Asia" },
    { "name": "Saint Lucia", "filename": "lc", "region": "Caribbean" },
    { "name": "Liechtenstein", "filename": "li", "region": "Europe" },
    { "name": "Sri Lanka", "filename": "lk", "region": "Asia" },
    { "name": "Liberia", "filename": "lr", "region": "Africa" },
    { "name": "Lesotho", "filename": "ls", "region": "Africa" },
    { "name": "Lithuania", "filename": "lt", "region": "Europe" },
    { "name": "Luxembourg", "filename": "lu", "region": "Europe" },
    { "name": "Latvia", "filename": "lv", "region": "Europe" },
    { "name": "Libya", "filename": "ly", "region": "Africa" },
    { "name": "Morocco", "filename": "ma", "region": "Africa" },
    { "name": "Monaco", "filename": "mc", "region": "Europe" },
    { "name": "Republic of Moldova", "filename": "md", "region": "Europe" },
    { "name": "Montenegro", "filename": "me", "region": "Europe" },
    { "name": "Collectivity of Saint Martin", "filename": "mf", "region": "Caribbean" },
    { "name": "Madagascar", "filename": "mg", "region": "Africa" },
    { "name": "Marshall Islands", "filename": "mh", "region": "Oceana" },
    { "name": "FYR Macedonia", "filename": "mk", "region": "Europe" },
    { "name": "Mali", "filename": "ml", "region": "Africa" },
    { "name": "Myanmar", "filename": "mm", "region": "Asia" },
    { "name": "Mongolia", "filename": "mn", "region": "Asia" },
    { "name": "Macao", "filename": "mo", "region": "Asia" },
    { "name": "Northern Mariana Islands", "filename": "mp", "region": "Oceana" },
    { "name": "Martinique", "filename": "mq", "region": "Caribbean" },
    { "name": "Mauritiana", "filename": "mr", "region": "Africa" },
    { "name": "Montserrat", "filename": "ms", "region": "Oceana" },
    { "name": "Malta", "filename": "mt", "region": "Europe" },
    { "name": "Mauritius", "filename": "mu", "region": "Africa" },
    { "name": "Maldives", "filename": "mv", "region": "Asia" },
    { "name": "Malawi", "filename": "mw", "region": "Africa" },
    { "name": "Mexico", "filename": "mx", "region": "North America" },
    { "name": "Malaysia", "filename": "my", "region": "Asia" },
    { "name": "Mozambique", "filename": "mz", "region": "Africa" },
    { "name": "Namibia", "filename": "na", "region": "Africa" },
    { "name": "New Caledonia", "filename": "nc", "region": "Oceana" },
    { "name": "Niger", "filename": "ne", "region": "Africa" },
    { "name": "Norfolk Island", "filename": "nf", "region": "Oceana" },
    { "name": "Nigeria", "filename": "ng", "region": "Africa" },
    { "name": "Nicaragua", "filename": "ni", "region": "North America" },
    { "name": "Netherlands", "filename": "nl", "region": "Europe" },
    { "name": "Norway", "filename": "no", "region": "Europe" },
    { "name": "Nepal", "filename": "np", "region": "Asia" },
    { "name": "Nauru", "filename": "nr", "region": "Oceana" },
    { "name": "Niue", "filename": "nu", "region": "Oceana" },
    { "name": "New Zealand", "filename": "nz", "region": "Oceana" },
    { "name": "Oman", "filename": "om", "region": "Africa" },
    { "name": "Panama", "filename": "pa", "region": "North America" },
    { "name": "Peru", "filename": "pe", "region": "South America" },
    { "name": "French Polynesia", "filename": "pf", "region": "Oceana" },
    { "name": "Papua New Guinea", "filename": "pg", "region": "Oceana" },
    { "name": "Phillipines", "filename": "ph", "region": "Asia" },
    { "name": "Pakistan", "filename": "pk", "region": "Asia" },
    { "name": "Poland", "filename": "pl", "region": "Europe" },
    { "name": "Saint Pierre and Miquelon", "filename": "pm", "region": "Oceana" },
    { "name": "Pitcairn", "filename": "pn", "region": "Oceana" },
    { "name": "Puerto Rico", "filename": "pr", "region": "North America" },
    { "name": "Palestine", "filename": "ps", "region": "Asia" },
    { "name": "Portugal", "filename": "pt", "region": "Europe" },
    { "name": "Palau", "filename": "pw", "region": "Asia" },
    { "name": "Paraguay", "filename": "py", "region": "South America" },
    { "name": "Qatar", "filename": "qa", "region": "Asia" },
    { "name": "Réunion", "filename": "re", "region": "Africa" },
    { "name": "Romania", "filename": "ro", "region": "Europe" },
    { "name": "Serbia", "filename": "rs", "region": "Europe" },
    { "name": "Russian Federation", "filename": "ru", "region": "Europe" },
    { "name": "Rwanda", "filename": "rw", "region": "Africa" },
    { "name": "Saudi Arabia", "filename": "sa", "region": "Asia" },
    { "name": "Solomon Islands", "filename": "sb", "region": "Oceana" },
    { "name": "Seychelles", "filename": "sc", "region": "Africa" },
    { "name": "Sudan", "filename": "sd", "region": "Africa" },
    { "name": "Sweden", "filename": "se", "region": "Europe" },
    { "name": "Singapore", "filename": "sg", "region": "Asia" },
    { "name": "Saint Helena, Ascension and Tristan da Cunha", "filename": "sh", "region": "Africa" },
    { "name": "Slovenia", "filename": "si", "region": "Europe" },
    { "name": "Svalbard and Jan Mayen", "filename": "sj", "region": "Europe" },
    { "name": "Slovakia", "filename": "sk", "region": "Europe" },
    { "name": "Sierra Leone", "filename": "sl", "region": "Africa" },
    { "name": "San Marino", "filename": "sm", "region": "Europe" },
    { "name": "Senegal", "filename": "sn", "region": "Africa" },
    { "name": "Somalia", "filename": "so", "region": "Africa" },
    { "name": "Suriname", "filename": "sr", "region": "South America" },
    { "name": "South Sudan", "filename": "ss", "region": "Africa" },
    { "name": "Sao Tome and Principe", "filename": "st", "region": "Africa" },
    { "name": "El Salvador", "filename": "sv", "region": "North America" },
    { "name": "Sint Maarten", "filename": "sx", "region": "Caribbean" },
    { "name": "Syrian Arab Republic", "filename": "sy", "region": "Asia" },
    { "name": "Swaziland", "filename": "sz", "region": "Africa" },
    { "name": "Turks and Caicos Islands", "filename": "tc", "region": "Oceana" },
    { "name": "Chad", "filename": "td", "region": "Africa" },
    { "name": "French Southern Territories", "filename": "tf", "region": "Africa" },
    { "name": "Togo", "filename": "tg", "region": "Africa" },
    { "name": "Thailand", "filename": "th", "region": "Asia" },
    { "name": "Tajikistan", "filename": "tj", "region": "Asia" },
    { "name": "Tokelau", "filename": "tk", "region": "Oceana" },
    { "name": "Timor-Leste", "filename": "tl", "region": "Asia" },
    { "name": "Turkmenistan", "filename": "tm", "region": "Asia" },
    { "name": "Tunisia", "filename": "tn", "region": "Africa" },
    { "name": "Tonga", "filename": "to", "region": "Oceana" },
    { "name": "Turkey", "filename": "tr", "region": "Europe" },
    { "name": "Trinidad and Tobago", "filename": "tt", "region": "Caribbean" },
    { "name": "Tuvalu", "filename": "tv", "region": "Oceana" },
    { "name": "Taiwan", "filename": "tw", "region": "Asia" },
    { "name": "Tanzania", "filename": "tz", "region": "Africa" },
    { "name": "Ukraine", "filename": "ua", "region": "Europe" },
    { "name": "Uganda", "filename": "ug", "region": "Africa" },
    { "name": "United States Minor Outlying Islands", "filename": "um", "region": "Oceana" },
    { "name": "United States of America", "filename": "us", "region": "North America" },
    { "name": "Uruguay", "filename": "uy", "region": "South America" },
    { "name": "Uzbekistan", "filename": "uz", "region": "Asia" },
    { "name": "Holy See", "filename": "va", "region": "Europe" },
    { "name": "Saint Vincent and the Grenadines", "filename": "vc", "region": "Caribbean" },
    { "name": "Venezuela", "filename": "ve", "region": "South America" },
    { "name": "British Virgin Islands", "filename": "vs", "region": "North America" },
    { "name": "US Virgin Islands", "filename": "vi", "region": "North America" },
    { "name": "Viet Nam", "filename": "vn", "region": "Asia" },
    { "name": "Vanauatu", "filename": "vu", "region": "Oceana" },
    { "name": "Wallis and Futuna", "filename": "wf", "region": "Oceana" },
    { "name": "Samoa", "filename": "ws", "region": "Oceana" },
    { "name": "Yemen", "filename": "ye", "region": "Asia" },
    { "name": "Mayotte", "filename": "yt", "region": "Africa" },
    { "name": "South Africa", "filename": "za", "region": "Africa" },
    { "name": "Zambia", "filename": "zm", "region": "Africa" },
    { "name": "Zimbabwe", "filename": "zw", "region": "Africa" }    
];

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