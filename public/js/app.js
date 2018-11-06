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

function generateHTML(action) {
    if (action == "switchToForum") {
        $(feedContainer).css("display", "none");
        $(forumContainer).css("display", "block");
        $(feedButton).css("border-bottom", "none");
        $(feedButton).css("color", "#808080");
        $(forumButton).css("border-bottom", "3px solid var(--main-purple)");
        $(forumButton).css("color", "var(--main-purple)");
        $("#filterButton").hide();
    } else if (action == "switchToFeed") {
        $(forumContainer).css("display", "none");
        $(feedContainer).css("display", "block");
        $(forumButton).css("border-bottom", "none");
        $(forumButton).css("color", "#808080");
        $(feedButton).css("border-bottom", "3px solid var(--main-purple)");
        $(feedButton).css("color", "var(--main-purple)");
        $("#filterButton").show();
    }
}


$(feedButton).click(function() {
    generateHTML("switchToFeed")
    inBrowser = 0;
    inForum = 0;
    inFeed = 1;
    if (inBrowser === 0) {
        $("#backArrow").css("display", "none");
        $("#userIconCircle").show();
    } else if (inBrowser === 1) {
        $("#backArrow").css("display", "block");
    }
});

$(forumButton).click(function() {
    generateHTML("switchToForum")
    inBrowser = 0;
    inForum = 1;
    inFeed = 0;
    if (inBrowser === 0) {
        $("#backArrow").css("display", "none");
        $("#userIconCircle").show();
    } else if (inBrowser === 1) {
        $("#backArrow").css("display", "block");

    }
});



function generateFeed() {
    for (var i = 0; i <= Object.keys(feedItems).length; i++) {

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

        var itemMessage = document.createElement("div");
        itemMessage.className = "itemMessage";
        var chevronDown = document.createElement("i");
        $(itemMessage).append(chevronDown);
        $(feedItem).append(itemMessage);

        var feedDescription = document.createElement("div");
        feedDescription.className = "feedDescription shortDesc";
        var feedDescriptionText = document.createElement("h4");
        $(feedDescription).append(feedDescriptionText);
        $(feedItem).append(feedDescription);

        var feedItemRepliesContainer = document.createElement("div");
        feedItemRepliesContainer.className = "feedItemRepliesContainer shortReplies";
        $(feedItem).append(feedItemRepliesContainer);

        $("#feedContainer").append(feedItem);
        for (var key in feedItems) {
            if (key == ("feedItem" + i)) {


                if (feedItems[key].type === "requesting") {
                    $(feedTypeText).text("Requesting");
                } else if (feedItems[key].type === "providing") {
                    $(feedTypeText).text("Providing");
                }

                $(feedIcon).css("background-image", `${feedItems[key].icon}`)

                $(feedTitleText).text(feedItems[key].item)
                feedItem.id = "feedItem" + i;
                feedItem.className = "feedItem " + feedItems[key].type;

                $(feedUserText).html(`<i class="fas fa-user"></i> ${feedItems[key].user} • ${feedItems[key].date}`);
                $(feedDescriptionText).text(feedItems[key].description);
                // console.log(feedItems[key].comments)
                // console.log(Object.keys(feedItems[key].comments).length);

                for(var x in feedItems[key].comments){
                    var feedItemReplies = document.createElement("div");
                    feedItemReplies.id = `feedItemReplies${x}`;
                    var feedItemReplyText = document.createElement("h4");
                    $(feedItemReplies).append(feedItemReplyText)
                    $(feedItemReplyText).text(feedItems[key].comments[x].text)
                    $(feedItemRepliesContainer).append(feedItemReplies);
                }

                // for (var i = 0; i <= test; i++) {
                //   var feedItemReplies = document.createElement("div");
                //   feedItemReplies.id = `feedItemReplies${i}`;
                //   var feedItemReplyText = document.createElement("h4");
                //   $(feedItemReplies).append(feedItemReplyText)
                //   $(feedItemReplyText)
                //   $(feedItemRepliesContainer).append(feedItemReplies);
                // }

            }
        }
    }
}

generateFeed();


function generateForumPosts(subForum, subForumObject) {
    var openSubForum = document.createElement("div");
    openSubForum.id = `openSubForum`;
    openSubForum.className = "subForumGrid";
    forumContainer.appendChild(openSubForum);
    for (var i = 1; i <= Object.keys(subForumObject).length; i++) {
        var subPost = document.createElement("div");
        subPost.id = `${subForum}Posts` + i;
        subPost.className = "subPost";

        var subPostTopBar = document.createElement("div");
        subPostTopBar.className = "subPostTopBar"
        var subPostInfo = document.createElement("div");
        subPostInfo.className = "subPostInfo";
        var supPostUser = document.createElement("div");
        supPostUser.className = "supPostUser";
        var supPostUserText = document.createElement("h4");
        $(supPostUser).append(supPostUserText);
        $(subPostInfo).append(supPostUser);
        $(subPostTopBar).append(subPostInfo);
        $(subPost).append(subPostTopBar);

        var subPostTitleContainer = document.createElement("div");
        subPostTitleContainer.id = "subPostTitleContainer";
        var subPostTitle = document.createElement("h1");
        $(subPostTitleContainer).append(subPostTitle);
        $(subPost).append(subPostTitleContainer);

        var subPostBottomBar = document.createElement("div");
        subPostBottomBar.className = "subPostBottomBar";
        var subPostCommentCount = document.createElement("div");
        subPostCommentCount.className = "subPostCommentCount";
        var subPostCommentCountText = document.createElement("h4");
        $(subPostCommentCount).append(subPostCommentCountText);
        $(subPostBottomBar).append(subPostCommentCount);
        $(subPost).append(subPostBottomBar)



        for (var key in subForumObject) {
            if (key == ("post" + (i - 1))) {
                $(subPostTitle).text(subForumObject[key].title);
                // $(supPostDateText).text(subForumObject[key].date)
                $(supPostUserText).html(`<i class="fas fa-user"></i> ${subForumObject[key].user} • ${subForumObject[key].date}`);
                $(subPostCommentCountText).html(`<i class="fas fa-comment-alt"></i> ${subForumObject[key].commentCount} comments`);
            }
        }
        $(openSubForum).append(subPost);
    }
}


gdButton.addEventListener('click', subForumClick);
mathButton.addEventListener('click', subForumClick);
scienceButton.addEventListener('click', subForumClick);
englishButton.addEventListener('click', subForumClick);
ssButton.addEventListener('click', subForumClick);
foreignButton.addEventListener('click', subForumClick);
offTopicButton.addEventListener('click', subForumClick);

function subForumClick() {
    console.log(this)
    if (this.id === "gdButton") {
        browser("gdForumClick");
    } else if (this.id === "mathButton") {
        browser("mathForumClick");
    } else if (this.id === "scienceButton") {
        browser("scienceForumClick");
    } else if (this.id === "englishButton") {
        browser("englishForumClick");
    } else if (this.id === "ssButton") {
        browser("ssForumClick");
    } else if (this.id === "foreignButton") {
        browser("foreignForumClick");
    } else if (this.id === "offTopicButton") {
        browser("otForumClick");
    }
}

$('.requesting').click(function() {
    browser("requestItemClick");
    $("#individualFeedItem").show();
    $(this).find(".feedDescription").removeClass("shortDesc");
    $(this).find(".feedDescription").addClass("longDesc");
    $(this).clone().prependTo("#individualFeedItem");
    $("#feedContainer").hide();
    generateFeedReplies(this);

//     for (var i = 0; i <= Object.keys(feedItems).length; i++) {
//         for (var key in feedItems) {
//             if (key == "feedItem" + i) {
//               var feedItemNum = `feedItem${i}`;
//               console.log(feedItemNum);
//               for (var i = 0; i < 5; i++) {
//                 var commentNum = `comment${i}`;
//                 console.log(commentNum);
//               }
//               console.log(feedItems[key].comments.commentNum);
//             }
//           }
// }
});

function generateFeedReplies(feedItem){
  console.log(feedItem)
}

$('.providing').click(function() {
    browser("provideItemClick");
    $("#individualFeedItem").show();
    $(this).find(".feedDescription").removeClass("shortDesc")
    $(this).find(".feedDescription").addClass("longDesc");
    $(this).clone().prependTo("#individualFeedItem");
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
        inFeedItem = 1;
        $("#rfBarGrid").hide();
        $("#mainContent").animate({
            scrollTop: 0
        }, "fast");
    } else if (action === "provideItemClick") {
        inFeedItem = 1;
        $("#rfBarGrid").hide();
        $("#mainContent").animate({
            scrollTop: 0
        }, "fast");
    }



    if (action === "gdForumClick") {
        $(forumName).text("General Discussion");
        $("#forumNameContainer").css("border-bottom", `3px solid ${mainPurple}`);
        generateForumPosts("gdForum", gdSubForumPosts);
    } else if (action === "mathForumClick") {
        $(forumName).text("Math");
        $("#forumNameContainer").css("border-bottom", `3px solid ${mathRed}`)
        generateForumPosts("mathForum", mathSubForumPosts)
    } else if (action === "scienceForumClick") {
        $(forumName).text("Science");
        $("#forumNameContainer").css("border-bottom", `3px solid ${scienceGreen}`)
        generateForumPosts("scienceForum", scienceSubForumPosts)
    } else if (action === "englishForumClick") {
        $(forumName).text("English Language Arts");
        $("#forumNameContainer").css("border-bottom", `3px solid ${englishBlue}`)
        generateForumPosts("englishForum", englishSubForumPosts)
    } else if (action === "ssForumClick") {
        $(forumName).text("Social Studies");
        $("#forumNameContainer").css("border-bottom", `3px solid ${historyYellow}`)
        generateForumPosts("ssForum", ssSubForumPosts)
    } else if (action === "foreignForumClick") {
        $(forumName).text("Foreign Languages");
        $("#forumNameContainer").css("border-bottom", `3px solid ${foreignOrange}`)
        generateForumPosts("foreignForum", foreignSubForumPosts)
    } else if (action === "otForumClick") {
        $(forumName).text("Off-topic");
        $("#forumNameContainer").css("border-bottom", `3px solid ${mainPurple}`);
        generateForumPosts("otForum", otSubForumPosts)
    }
}

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
        $(".feedDescription").addClass("shortDesc")
        $(".feedDescription").removeClass("longDesc")
        $("#individualFeedItem").find('.feedItem').remove();
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

function postItem() {
    if (inFeed == 1) {
        console.log('post feed item');
        $("#appContainer").hide();
        $("#postFeedContainer").css("display", "grid");
    } else if (inForum == 1) {
        console.log("post forum item");
        $("#appContainer").hide();
        $("#postForumContainer").css("display", "grid");
    }
}
