var introKeywords = ["website", "branding", "agency", "app", "graphic"];
var currentKeywordId = 0;
var timerDuration = .9;

var keywordLocation = document.getElementById("h1_KeyActivity");

var intervalTitle = setInterval(changeTitle, timerDuration * 1000);

function changeTitle() {
    keywordLocation.innerHTML = introKeywords[currentKeywordId];
    
    currentKeywordId++;
    if(currentKeywordId > introKeywords.length - 1) {
        currentKeywordId = 0;
    }
}