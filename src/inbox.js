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
    $("#messagePreviewContainer").removeClass("grid-display");
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
    objDiv.scrollTop(objDiv[0].scrollHeight);
}

window.onload = scrollToBottom;

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
        $("#messageContainer").append(`
            <div class="messageItem native-user">
                <p>${text}</p>
                <span class="date-and-time">${currDateTime()}</span>
            </div>
        `);
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

//return to Messages tab from Convo

//show most recent message in message preview WIP
const reMsgPreview = () => {
    let lastMsg = $(".messageItem p").last().text();
    console.log("last msg: " + lastMsg);
}


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