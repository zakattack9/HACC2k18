console.log('hello');

/* needed functions:
 *  + only visible on messages
 *  new message - waiting for search functionality
 *  indicate unread message
 *  dynamically change #convoContainer to bring up conversations between users
 *  (not a func) move functions from html to js
*/

/* GENERAL NAVIGATION */
//sets all containers to inactive except for notification
$(document).ready(() => {
    activateNotifTab();
});

const activateNotifTab = () => {
    $("#notificationsButton").addClass("tabButtonStyle");
    $("#messagesButton").removeClass("tabButtonStyle");
    $("#notificationContainer").addClass("block-display");
    $("#notificationContainer").removeClass("inactive");
    $("#messagePreviewContainer").removeClass("block-display");
    $("#messagePreviewContainer").addClass("inactive");
    $("#newMsgButton").removeClass("block-display");
    $("#newMsgButton").addClass("inactive");
    $("#convoContainer").removeClass("grid-display");
    $("#convoContainer").addClass("inactive");
    $("#newMsgContainer").removeClass("grid-display");
    $("#newMsgContainer").addClass("inactive");
    // $("#notificationContainer").show();
    // $("#messagePreviewContainer").hide();
    // $("#convoConatiner").hide();
}

const activateMsgTab = () => {
    $("#notificationsButton").removeClass("tabButtonStyle");
    $("#messagesButton").addClass("tabButtonStyle");
    $("#notificationContainer").removeClass("block-display");
    $("#notificationContainer").addClass("inactive");
    $("#messagePreviewContainer").removeClass("inactive");
    $("#messagePreviewContainer").addClass("block-display");
    $("#newMsgButton").addClass("block-display");
    $("#newMsgButton").removeClass("inactive");
    $("#convoContainer").removeClass("grid-display");
    $("#convoContainer").addClass("inactive");
    $("#newMsgContainer").removeClass("grid-display");
    $("#newMsgContainer").addClass("inactive");
    // $("#notificationContainer").hide();
    // $("#messagePreviewContainer").show();
    // $("#convoConatiner").hide();
}

const activateConvo = () => {
    //need function to check identifier and push up relevant conversation
    $("#notificationContainer").removeClass("block-display");
    $("#notificationContainer").addClass("inactive");
    $("#messagePreviewContainer").removeClass("block-display");
    $("#messagePreviewContainer").addClass("inactive");
    $("#convoContainer").removeClass("inactive");
    $("#convoContainer").addClass("grid-display");
    $("#newMsgContainer").removeClass("grid-display");
    $("#newMsgContainer").addClass("inactive");
    scrollToBottom();
}

const activateNewMsg = () => {
    $("#notificationsButton").removeClass("tabButtonStyle");
    $("#messagesButton").addClass("tabButtonStyle");
    $("#notificationContainer").removeClass("block-display");
    $("#notificationContainer").addClass("inactive");
    $("#messagePreviewContainer").removeClass("inactive");
    $("#messagePreviewContainer").addClass("block-display");
    $("#newMsgButton").removeClass("block-display");
    $("#newMsgButton").addClass("inactive");
    $("#convoContainer").removeClass("grid-display");
    $("#convoContainer").addClass("inactive");
    $("#newMsgContainer").addClass("grid-display");
    $("#newMsgContainer").removeClass("inactive");
}

//button clicking
$(document).ready(() => {
    $("#notificationsButton").on('click', () => {activateNotifTab();});
    $("#messagesButton").on('click', () => {activateMsgTab();});
    $(".msgBackButton").on('click', () => {activateMsgTab();});
    //navigates user to Messages tab after clicking "received message" notification
    $(".gotoMsg").on('click', () => {activateMsgTab();}); 
    //open conversation
    $(".messagePreviewItem").on('click', () => {activateConvo();});
    $("#sendButton").on('click', () => {sendTypedMsg();});
    $("#newMsgButton").on('click', () => {activateNewMsg()});
})

//working with #notificationContainer, #notificationsButton,
//  #messagePreviewContainer, #messagesButton
//if $().css('property) == 'value' => do something

/* NOTIFICATION functionality */

/* MESSAGING functionality */

//scrolls user to bottom of conversation when opened
const scrollToBottom = () => {
    var objDiv = $('#messageContainer');
    if (objDiv.length > 0) {
        objDiv.scrollTop(objDiv[0].scrollHeight);
    }
}

// window.onload = scrollToBottom;

//get date and time
const currDateTime = () => {
    var today = new Date();
    var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    if (today.getHours() > 12) {
        var time = (today.getHours()-12) + ":" + today.getMinutes() + "pm";
    } else {
        var time = today.getHours() + ":" + today.getMinutes() + "am";
    }
    // var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+' '+time;
    return dateTime;
}

//general send a message function
const sendTypedMsg = () => {
    let text = $("#msgInput").val();
    if ($("#msgInput").val().length > 1) {
        //creates new msg on FE
        $("#messageContainer").append(`
            <div class="messageItem native-user">
                <p>${text}</p>
                <span class="date-and-time">${currDateTime()}</span>
            </div>
        `);

        //creates new msg in storage
        // loop through storage and find matching user, then push to messages
        for (var i = 0; i < storage.length; i++) {
            if (Object.values(storage[i]).indexOf($("#userBar").attr('class')) > -1) {
                var newMsg = {
                    sender: `${nativeUserId}`,
                    timeSent: `${currDateTime()}`,
                    msgContent: `${text}`
                }
                console.log(newMsg);
                storage[i].messages.push(newMsg);
                
                //creates msg preview item
                if ($(".messagePreviewItem").hasClass(`${storage[i].convoWith}`) == false) {
                    console.log('creating new preview');
                    addMsgPreview(storage[i], storage[i].messages[storage[i].messages.length - 1]);
                } else {
                    $(`.${storage[i].convoWith} .msgContent .time-ago`).empty();
                    $(`.${storage[i].convoWith} .msgContent .time-ago`).html(`
                        <span class="time-ago">1s ago</span>
                    `);
                    console.log('try again');
                }
            }
        }
        update();
    }
    scrollToBottom();
    $("#msgInput").val('');
}

//send a message using "enter" key
$(document).keypress((key) => {
    if ($("#msgInput").is(":focus") && key.which == 13) {
        sendTypedMsg();
    }
})

/* NEW MESSAGE FUNCTIONALITY */
const searchFriends = () => {
    var input, filter, friendInstance, searchName;
    input = $("#friendSearchInput");
    filter = input.val().toUpperCase();
    friendInstance = $(".friendItem");
    for (var i = 0; i < friendInstance.length; i++) {
        searchName = friendInstance[i].getElementsByClassName("friendName")[0];
      if (searchName.innerHTML.toUpperCase().indexOf(filter) > -1) {
        friendInstance[i].style.display = "";
      } else {
        friendInstance[i].style.display = "none";
      }
    }
}

$(document).ready(() => {
    $("#friendSearchInput").keyup(searchFriends());
})


/* MESSAGE GENERATION */
$(document).ready(() => {
    $(".messagePreviewItem").on('click', function() {
        generateConvo(this);
    });
    $(".friendItem").on('click', function() {
        generateConvo(this);
        activateConvo();
    });
})

function generateConvo(el) {
    var userId = $(el).attr('class').split(" ")[1];
    console.log("User queried: " + userId);

    //finds index of object in storage and returns true if found
    var idIndex;
    function checkObj(id) {
        for (var i = 0; i < storage.length; i++) {
            console.log("data found: ", storage[i]);
            if (Object.values(storage[i]).indexOf(id) > -1) {
                idIndex = i;
                return true;
            } else if (Object == undefined) {
                return false;
            }
        }
    }

    //goes to build function
    var username = $(el).find(".user-name").html();
    var iconSrc = $(`.${userId} .user-icon img`).attr('src');
    if (checkObj(userId) == true) {
        buildConvo(storage[idIndex]);
    } else {
        var obj = {
            convoWith: `${userId}`,
            username: `${username}`,
            userIcon: `${iconSrc}`,
            messages: []
        }
        storage.push(obj);
        console.log(storage);
        buildConvo(obj);
    }
}

function buildMsgs(obj) {
    if (obj.messages.length > 0) {
        for (var i = 0; i < obj.messages.length; i++) {
            console.log("inserting message " + i);
            //reusable object var
            var msgObj = obj.messages[i];
            
            //determine user type
            var userType;
            function determineUser() {
                if (msgObj.sender == nativeUserId) {
                    userType = "native-user";
                } else {
                    userType = "non-native-user";
                }
            }
            determineUser();

            //build convo
            console.log(msgObj);
            $("#messageContainer").append(`
                <div class="messageItem ${userType}">
                    <p>${msgObj.msgContent}</p>
                    <span class="date-and-time">${msgObj.timeSent}</span>
                </div>
            `);
        }
        scrollToBottom();
    }
}

function buildConvo(build) {
    $("#convoContainer").empty();
    $("#convoContainer").append(`
        <div id="userBar" class="${build.convoWith}">
            <div class="msgBackButton" onclick="activateMsgTab()">
                <i class="fas fa-angle-left"></i> 
            </div>
            <div class="user-name ${build.convoWith}">${build.username}</div>
            <div class="user-icon">
                <img src="${build.userIcon}">
            </div>
        </div>
        <div id="conversation" class="${nativeUserId}-msg-${build.convoWith}">
            <div id="messageContainer">
            </div>
        </div>
        <div id="sendContainer">
            <input type="text" id="msgInput" placeholder="Send a message">
            <div id="sendButton" onclick="sendTypedMsg()">
            <i class="fas fa-paper-plane"></i>
            </div>
        </div>
    `);
    buildMsgs(build);
}

$(document).ready(() => {
    update();
})

function update() {
    $(".messagePreviewItem").each(function () {
        updateMsgPreview(this);
    });
}

function updateMsgPreview(el) {
    console.log(el);
    var userId = $(el).attr('class').split(" ")[1];
    console.log("id: ", userId);
    for (var i = 0; i < storage.length; i++) {
        if (Object.values(storage[i]).indexOf(userId) > -1) {
            var obj = storage[i];
            var lastMsg = obj.messages[obj.messages.length - 1].msgContent;
            console.log(lastMsg);
            $(`.${userId} .msgContent p`).empty();
            $(`.${userId} .msgContent p`).html(`
                <b class="user-name">${obj.username}</b>: ${lastMsg}
            `);
        }
    }
}

function addMsgPreview(obj, lastMsg) {
    $("#messagePreviewContainer").prepend(`
    <div class="messagePreviewItem ${obj.convoWith}" onclick="generateConvo(this) activateConvo()">
        <div class="user-icon">
            <img src="${obj.userIcon}">
        </div>
        <div class="msgContent">
            <p><b class="user-name">${obj.username}</b>: ${lastMsg}</p>
            <span class="time-ago">1s ago</span>
        </div>
    </div>
    `);
}

