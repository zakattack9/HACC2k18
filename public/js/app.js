console.log('test')

let feedButton = document.getElementById('resourcesButton');
let feedContainer = document.getElementById("feedContainer");
let forumButton = document.getElementById("forumButton");
let forumContainer = document.getElementById('forumContainer');
let gdButton = document.getElementById('gdButton');
let mathButton = document.getElementById('mathButton');
let scienceButton = document.getElementById('scienceButton');
let englishButton = document.getElementById('englishButton');
let ssButton = document.getElementById('englishButton');
let offTopicButton = document.getElementById('offTopicButton');

feedButton.addEventListener('click', switchTab);
forumButton.addEventListener('click', switchTab);
mathButton.addEventListener('click', subForumClick);

function switchToForum(){
  $(feedContainer).css("display", "none");
  $(forumContainer).css("display", "block");
  $(feedButton).css("border-bottom", "none");
  $(feedButton).css("color", "#808080");
  $(forumButton).css("border-bottom", "3px solid var(--main-purple)");
  $(forumButton).css("color", "var(--main-purple)");
}
function switchToFeed(){
  $(forumContainer).css("display", "none");
  $(feedContainer).css("display", "block");
  $(forumButton).css("border-bottom", "none");
  $(forumButton).css("color", "#808080");
  $(feedButton).css("border-bottom", "3px solid var(--main-purple)");
  $(feedButton).css("color", "var(--main-purple)");
}

function switchTab(){
  if($(feedContainer).css("display") === "block"){//switch to forum
    switchToForum()
  } else if ($(forumContainer).css("display") === "block"){//switch to feed
    switchToFeed()
  }
}

function subForumClick(){
  console.log(this)
  if(this.id === "mathButton"){
    console.log('ta');
    var mathSubForums = document.createElement("div");
    mathSubForums.id = "mathSubForums";
    forumContainer.appendChild(mathSubForums);
  }
}
