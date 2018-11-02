console.log('test')

let feedButton = document.getElementById('resourcesButton');
let feedContainer = document.getElementById("feedContainer");
let forumButton = document.getElementById("forumButton");
let forumContainer = document.getElementById('forumContainer');
let gdButton = document.getElementById('gdButton');
let mathButton = document.getElementById('mathButton');
let scienceButton = document.getElementById('scienceButton');
let englishButton = document.getElementById('englishButton');
let ssButton = document.getElementById('ssButton');
let offTopicButton = document.getElementById('offTopicButton');
let mainPurple = window.getComputedStyle(document.documentElement).getPropertyValue('--main-purple');
let mathRed = window.getComputedStyle(document.documentElement).getPropertyValue('--math-red');
let scienceGreen = window.getComputedStyle(document.documentElement).getPropertyValue('--science-green');
let englishBlue = window.getComputedStyle(document.documentElement).getPropertyValue('--english-blue');
let historyYellow = window.getComputedStyle(document.documentElement).getPropertyValue('--history-yellow');
let foreignOrange = window.getComputedStyle(document.documentElement).getPropertyValue('--foreign-orange');
var inBrowser = 0;
var inSubForum = 0;
var inFeedItem = 0;
var inFeed = 1;
var inForum = 0;

function switchToForum() {
    $(feedContainer).css("display", "none");
    $(forumContainer).css("display", "block");
    $(feedButton).css("border-bottom", "none");
    $(feedButton).css("color", "#808080");
    $(forumButton).css("border-bottom", "3px solid var(--main-purple)");
    $(forumButton).css("color", "var(--main-purple)");
    inBrowser = 0;
    inForum = 1;
    inFeed = 0;
    $("#filterButton").hide();
    if (inBrowser === 0) {
        $("#backArrow").css("display", "none");
        $("#userIconCircle").show();
    } else if (inBrowser === 1) {
        $("#backArrow").css("display", "block");

    }
}

function switchToFeed() {
    $(forumContainer).css("display", "none");
    $(feedContainer).css("display", "block");
    $(forumButton).css("border-bottom", "none");
    $(forumButton).css("color", "#808080");
    $(feedButton).css("border-bottom", "3px solid var(--main-purple)");
    $(feedButton).css("color", "var(--main-purple)");
    inBrowser = 0;
    inForum = 0;
    inFeed = 1;
    $("#filterButton").show();
    if (inBrowser === 0) {
        $("#backArrow").css("display", "none");
        $("#userIconCircle").show();
    } else if (inBrowser === 1) {
        $("#backArrow").css("display", "block");
    }
}

$(feedButton).click(function() {
    switchToFeed()
});

$(forumButton).click(function() {
    switchToForum()
});

// forumButton.addEventListener('click', switchTab("forumClick"));
//
//
// function switchTab(action){
//
//   if(action === "feedClick"){
//     switchToFeed()
//     console.log('s')
//   } else if (action === "forumClick"){
//     switchToForum()
//     console.log('t')
//   }
//   if($(feedContainer).is(":visible") && onFeed === 1){//switch to forum
//     switchToForum();
//   } else if ($(forumContainer).is(":visible") && onForum === 1){//switch to feed
//     switchToFeed()
//   }
//
// }

function generateFeed() {
    for (var i = 1; i <= Object.keys(feedItems).length; i++) {

        var feedItem = document.createElement("div");

        var feedIcon = document.createElement("div");
        feedIcon.className = "itemIcon";
        $(feedItem).append(feedIcon);

        var feedType = document.createElement("div");
        feedType.className = "itemType";
        var feedTypeText = document.createElement("h2");
        $(feedType).append(feedTypeText);
        $(feedItem).append(feedType);

        var feedInfo = document.createElement("div");
        feedInfo.className = "itemPostInfo";
        var feedDate = document.createElement("div");
        feedDate.className = "itemDate";
        var feedDateText = document.createElement("h4");
        $(feedDate).append(feedDateText)
        var feedUser = document.createElement("div");
        feedUser.className = "itemUser";
        var feedUserText = document.createElement("h4");
        $(feedUser).append(feedUserText);
        $(feedInfo).append(feedDate);
        $(feedInfo).append(feedUser);
        $(feedItem).append(feedInfo);

        var feedTitle = document.createElement("div");
        feedTitle.className = "itemTitle";
        var feedTitleText = document.createElement("h2");
        $(feedTitle).append(feedTitleText);
        $(feedItem).append(feedTitle);

        var arrowDown = document.createElement("div");
        arrowDown.className = "itemDropArrow";
        var chevronDown = document.createElement("i");
        chevronDown.className = "fas fa-chevron-down";
        $(arrowDown).append(chevronDown);
        $(feedItem).append(arrowDown)

        $("#feedContainer").append(feedItem);
        for (var key in feedItems) {
            if (key == ("feedItem" + (i - 1))) {

                if(feedItems[key].type === "requesting"){
                  $(feedTypeText).text("Requesting");
                } else if (feedItems[key].type === "providing"){
                  $(feedTypeText).text("Providing");
                }

                $(feedIcon).css("background-image", `${feedItems[key].icon}`)

                $(feedTitleText).text(feedItems[key].item)
                feedItem.id = "feedItem" + i;
                feedItem.className = "feedItem " + feedItems[key].type;

                $(feedDateText).text(feedItems[key].date)
                $(feedUserText).html(`<i class="fas fa-user"></i> ${feedItems[key].user}`);
            }
    }
}
}

generateFeed();

gdButton.addEventListener('click', subForumClick);
mathButton.addEventListener('click', subForumClick);
scienceButton.addEventListener('click', subForumClick);
englishButton.addEventListener('click', subForumClick);
ssButton.addEventListener('click', subForumClick);
foreignButton.addEventListener('click', subForumClick);
offTopicButton.addEventListener('click', subForumClick);

function generateForumPosts(subForum, subForumObject){
  var openSubForum = document.createElement("div");
  openSubForum.id = `openSubForum`;
  openSubForum.className = "subForumGrid";
  forumContainer.appendChild(openSubForum);
  for (var i = 1; i <= Object.keys(subForumObject).length; i++) {
      var subPost = document.createElement("div");
      subPost.id = `${subForum}Posts` + i;
      subPost.className = "subPost";

      var subPostTitleContainer = document.createElement("div");
      subPostTitleContainer.id = "subPostTitleContainer";
      var subPostTitle = document.createElement("h1");
      $(subPostTitleContainer).append(subPostTitle);
      $(subPost).append(subPostTitleContainer);

      for (var key in subForumObject) {
          if (key == ("post" + (i - 1))) {
              $(subPostTitle).text(subForumObject[key].title)
          }
      }
      $(openSubForum).append(subPost);
  }
}


function subForumClick() {
    console.log(this)
    if (this.id === "gdButton") {
        browser("gdForumClick");
        generateForumPosts("gdForum", gdSubForumPosts);
    } else if (this.id === "mathButton") {
        browser("mathForumClick");
        generateForumPosts("mathForum", mathSubForumPosts)
    } else if (this.id === "scienceButton") {
        browser("scienceForumClick");
        var scienceSubForums = document.createElement("div");
        generateForumPosts("scienceForum", scienceSubForumPosts);
    } else if (this.id === "englishButton") {
        browser("englishForumClick");
        var englishSubForums = document.createElement("div");
        generateForumPosts("englishForum", englishSubForumPosts);
    } else if (this.id === "ssButton") {
        browser("ssForumClick");
        var ssSubForums = document.createElement("div");
        generateForumPosts("ssForum", ssSubForumPosts);
    } else if (this.id === "foreignButton") {
        browser("foreignForumClick");
        var foreignSubForums = document.createElement("div");
        generateForumPosts("foreignForum", foreignSubForumPosts);
    } else if (this.id === "offTopicButton") {
        browser("otForumClick");
        var otSubForums = document.createElement("div");
        generateForumPosts("otForum", otSubForumPosts);
    }
}

$('.requesting').click(function() {
    console.log(1);
    browser("requestItemClick");
    $("#individualFeedItem").show();
    $(this).clone().appendTo("#individualFeedItem");
    $("#feedContainer").hide();
});

$('.providing').click(function() {
    console.log(1);
    browser("provideItemClick");
    $("#individualFeedItem").show();
    $(this).clone().appendTo("#individualFeedItem");
    $("#feedContainer").hide();
});

function browser(action) {
    inBrowser = 1;
    $("#userIconCircle").hide();
    $("#backArrow").css("display", "block");

    if (action === "gdForumClick" ||
        action === "mathForumClick" ||
        action === "scienceForumClick" ||
        action === "englishForumClick" ||
        action === "ssForumClick" ||
        action === "foreignForumClick" ||
        action === "otForumClick") {
        $("#appName > h1").text("Forum");
        $("#rfBarGrid").addClass("rfBarForum");
        $("#rfBarGrid").children().hide();
        var forumNameContainer = document.createElement("div");
        forumNameContainer.id = "forumNameContainer";
        forumNameContainer.className = "forumName"
        var forumName = document.createElement("h1");
        forumNameContainer.appendChild(forumName);
        $("#rfBarGrid").append(forumNameContainer);
        $("#forumGrid").hide();
        inSubForum = 1;
    }


    if (action === "requestItemClick") {
        $("#rfBarGrid").hide();
        var forumNameContainer = document.createElement("div");
        forumNameContainer.id = "forumNameContainer";
        forumNameContainer.className = "forumName"
        var forumName = document.createElement("h1");
        forumNameContainer.appendChild(forumName);
        $("#rfBarGrid").append(forumNameContainer);
        inFeedItem = 1;
        $("#mainContent").animate({ scrollTop: 0 }, "fast");
        $("#forumNameContainer").css("border-bottom", `3px solid ${mainPurple}`)
        $(forumName).text("Requesting");
    } else if (action === "provideItemClick"){
        $("#rfBarGrid").hide();
        var forumNameContainer = document.createElement("div");
        forumNameContainer.id = "forumNameContainer";
        forumNameContainer.className = "forumName"
        var forumName = document.createElement("h1");
        forumNameContainer.appendChild(forumName);
        $("#rfBarGrid").append(forumNameContainer);
        inFeedItem = 1;
        $("#mainContent").animate({ scrollTop: 0 }, "fast");
        $("#forumNameContainer").css("border-bottom", `3px solid ${mainPurple}`)
        $(forumName).text("Providing");
    }



    if (action === "gdForumClick") {
        $(forumName).text("General Discussion");
        $("#forumNameContainer").css("border-bottom", `3px solid ${mainPurple}`)
    } else if (action === "mathForumClick") {
        $(forumName).text("Math");
        $("#forumNameContainer").css("border-bottom", `3px solid ${mathRed}`)
    } else if (action === "scienceForumClick") {
        $(forumName).text("Science");
        $("#forumNameContainer").css("border-bottom", `3px solid ${scienceGreen}`)
    } else if (action === "englishForumClick") {
        $(forumName).text("English Language Arts");
        $("#forumNameContainer").css("border-bottom", `3px solid ${englishBlue}`)
    } else if (action === "ssForumClick") {
        $(forumName).text("Social Studies");
        $("#forumNameContainer").css("border-bottom", `3px solid ${historyYellow}`)
    } else if (action === "foreignForumClick") {
        $(forumName).text("Foreign Languages");
        $("#forumNameContainer").css("border-bottom", `3px solid ${foreignOrange}`)
    } else if (action === "otForumClick") {
        $(forumName).text("Off-topic");
        $("#forumNameContainer").css("border-bottom", `3px solid ${mainPurple}`)
    } }

    $("#backArrow").click(function() {
        if (inSubForum === 1) {
            $("#forumGrid").show();
            $("#userIconCircle").show();
            $("#backArrow").hide();
            $(".forumName").remove();
            $("#rfBarGrid").children().show();
            $("#rfBarGrid").removeClass("rfBarForum");
            $("#appName > h1").text("App Name");
            $("#openSubForum").remove();
            inSubForum = 0;
        } else if (inFeedItem === 1) {
            $("#feedContainer").show();
            $("#userIconCircle").show();
            $("#backArrow").hide();
            $("#individualFeedItem").children().remove();
            $("#individualFeedItem").hide();
            $("#rfBarGrid").show();
            $("#forumNameContainer").remove()
            $(".feedItem").not($(this)).show();
            inFeedItem = 0;
        }
    });

    $('#postButton').click(function() {
      postItem()
    });

    $('.closeButton').click(function() {
      $("#postFeedContainer").hide();
      $("#postForumContainer").hide();
      $("#appContainer").show();
    })

function postItem(){
  if(inFeed == 1){
    console.log('post feed item');
    $("#appContainer").hide();
    $("#postFeedContainer").css("display","grid");
  } else if(inForum == 1){
    console.log("post forum item");
    $("#appContainer").hide();
    $("#postForumContainer").css("display","grid");
  }
}
