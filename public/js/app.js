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

function switchToForum() {
    $(feedContainer).css("display", "none");
    $(forumContainer).css("display", "block");
    $(feedButton).css("border-bottom", "none");
    $(feedButton).css("color", "#808080");
    $(forumButton).css("border-bottom", "3px solid var(--main-purple)");
    $(forumButton).css("color", "var(--main-purple)");
    inBrowser = 0;
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

function browser(action) {
    $("#backArrow").css("display", "block");
    $("#appName > h1").text("Forum");
    $("#rfBarGrid").addClass("rfBarForum");
    $("#rfBarGrid").children().hide();

    var forumNameContainer = document.createElement("div");
    forumNameContainer.id = "forumNameContainer";
    forumNameContainer.className = "forumName"
    var forumName = document.createElement("h1");

    forumNameContainer.appendChild(forumName);
    $("#rfBarGrid").append(forumNameContainer);

    if (action === "gdForumClick") {
        inBrowser = 1;
        inSubForum = 1;
        $("#forumGrid").hide();
        $("#userIconCircle").hide();
        $(forumName).text("General Discussion");
        $("#forumNameContainer").css("border-bottom", `3px solid ${mainPurple}`)
    } else if (action === "mathForumClick") {
        inBrowser = 1;
        inSubForum = 1;
        $("#forumGrid").hide();
        $("#userIconCircle").hide();
        $(forumName).text("Math");
        $("#forumNameContainer").css("border-bottom", `3px solid ${mathRed}`)
    } else if (action === "scienceForumClick") {
        inBrowser = 1;
        inSubForum = 1;
        $("#forumGrid").hide();
        $("#userIconCircle").hide();
        $(forumName).text("Science");
        $("#forumNameContainer").css("border-bottom", `3px solid ${scienceGreen}`)
    } else if (action === "englishForumClick") {
        inBrowser = 1;
        inSubForum = 1;
        $("#forumGrid").hide();
        $("#userIconCircle").hide();
        $(forumName).text("English Language Arts");
        $("#forumNameContainer").css("border-bottom", `3px solid ${englishBlue}`)
    } else if (action === "ssForumClick") {
        inBrowser = 1;
        inSubForum = 1;
        $("#forumGrid").hide();
        $("#userIconCircle").hide();
        $(forumName).text("Social Studies");
        $("#forumNameContainer").css("border-bottom", `3px solid ${historyYellow}`)
    } else if (action === "foreignForumClick") {
        inBrowser = 1;
        inSubForum = 1;
        $("#forumGrid").hide();
        $("#userIconCircle").hide();
        $(forumName).text("Foreign Languages");
        $("#forumNameContainer").css("border-bottom", `3px solid ${foreignOrange}`)
    } else if (action === "otForumClick") {
        inBrowser = 1;
        inSubForum = 1;
        $("#forumGrid").hide();
        $("#userIconCircle").hide();
        $(forumName).text("Off-topic");
        $("#forumNameContainer").css("border-bottom", `3px solid ${mainPurple}`)
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
            $("#gdSubForums").remove();
            $("#mathSubForums").remove();
            $("#scienceSubForums").remove();
            $("#englishSubForums").remove();
            $("#ssSubForums").remove();
            $("#foreignSubForums").remove();
            $("#otSubForums").remove();
        }
    });
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

        var gdSubForums = document.createElement("div");
        gdSubForums.id = "gdSubForums";
        forumContainer.appendChild(gdSubForums);

        var subForumsGrid = document.createElement("div");
        subForumsGrid.id = "subForumsGrid";

    } else if (this.id === "mathButton") {
        browser("mathForumClick");
        var mathSubForums = document.createElement("div");
        mathSubForums.id = "mathSubForums";
        forumContainer.appendChild(mathSubForums);

        var titleArray = [];
        // for (var prop in mathSubForumPosts) {
        //     if (mathSubForumPosts.hasOwnProperty(prop)) {
        //         var innerObj = {};
        //         innerObj[prop] = mathSubForumPosts[prop];
        //         titleArray.push(innerObj)
        //     }
        // }



        for (var i = 1; i <= Object.keys(mathSubForumPosts).length; i++) {

            var subPost = document.createElement("div");
            subPost.id = "mathPost" + i;
            subPost.className = "subPost";

            var subPostTitle = document.createElement("h1");
            $(subPost).append(subPostTitle);

            for (var key in mathSubForumPosts) {
                console.log(key, mathSubForumPosts[key].title);
                if (key == ("post"+(i-1))) {
                    $(subPost).text(mathSubForumPosts[key].title)
                }
              }




            $(mathSubForums).append(subPost);
        }

        //   Object.keys(mathSubForumPosts).forEach(function(key) {
        //     console.log(mathSubForumPosts[key]);
        //     var titleArray = [];
        //     titleArray.push(mathSubForumPosts[key]);
        //     console.log(titleArray)
        // });
        // for(var i =1; i<= Object.keys(mathSubForumPosts).length; i++){
        //   $(mathSubForums).append($('<div/>', { id: 'mathPost' + i,
        //                                         'class' : 'forumGridItem',
        //                                       }
        //                             )
        //                           )
        // }




    } else if (this.id === "scienceButton") {
        browser("scienceForumClick");
        var scienceSubForums = document.createElement("div");
        scienceSubForums.id = "scienceSubForums";
        forumContainer.appendChild(scienceSubForums);
    } else if (this.id === "englishButton") {
        browser("englishForumClick");
        var englishSubForums = document.createElement("div");
        englishSubForums.id = "englishSubForums";
        forumContainer.appendChild(englishSubForums);
    } else if (this.id === "ssButton") {
        browser("ssForumClick");
        var ssSubForums = document.createElement("div");
        ssSubForums.id = "ssSubForums";
        forumContainer.appendChild(ssSubForums);
    } else if (this.id === "foreignButton") {
        browser("foreignForumClick");
        var foreignSubForums = document.createElement("div");
        foreignSubForums.id = "foreignSubForums";
        forumContainer.appendChild(foreignSubForums);
    } else if (this.id === "offTopicButton") {
        browser("otForumClick");
        var otSubForums = document.createElement("div");
        otSubForums.id = "otSubForums";
        forumContainer.appendChild(otSubForums);
    }
}
