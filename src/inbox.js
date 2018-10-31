console.log('hello');

/* needed functions:
 *  + only visible on messages
 *  new message - waiting for search functionality
 *  indicate unread message
 * dynamically change #convoContainer to bring up conversations between users
*/

/* GENERAL NAVIGATION */
//sets all containers to inactive except for notification
$(document).ready(() => {
    activateNotifTab();
});

const activateNotifTab = () => {
    $("#notificationContainer").removeClass("inactive");
    $("#notificationContainer").addClass("block-display");
    $("#notificationsButton").addClass("tabButtonStyle");
    $("#messagePreviewContainer").removeClass("grid-display");
    $("#messagesButton").removeClass("tabButtonStyle");
    $("#messagePreviewContainer").addClass("inactive")
    $("#convoContainer").removeClass("grid-display");
    $("#convoContainer").addClass("inactive");
    // $("#notificationContainer").show();
    // $("#messagePreviewContainer").hide();
    // $("#convoConatiner").hide();
}

const activateMsgTab = () => {
    $("#notificationContainer").removeClass("block-display");
    $("#notificationsButton").removeClass("tabButtonStyle");
    $("#notificationContainer").addClass("inactive");
    $("#messagePreviewContainer").removeClass("inactive")
    $("#messagePreviewContainer").addClass("block-display");
    $("#messagesButton").addClass("tabButtonStyle");
    $("#convoContainer").removeClass("grid-display");
    $("#convoContainer").addClass("inactive");
    // $("#notificationContainer").hide();
    // $("#messagePreviewContainer").show();
    // $("#convoConatiner").hide();
}

const activateConvo = () => {
    $("#notificationContainer").removeClass("block-display");
    $("#notificationContainer").addClass("inactive");
    $("#messagePreviewContainer").removeClass("block-display")
    $("#messagePreviewContainer").addClass("inactive");
    $("#convoContainer").removeClass("inactive");
    $("#convoContainer").addClass("grid-display");
    scrollToBottom();
}

$("#notificationsButton").click(activateNotifTab);
$("#messagesButton").click(function () {
    activateMsgTab();
});



//working with #notificationContainer, #notificationsButton,
//  #messagePreviewContainer, #messagesButton
//if $().css('property) == 'value' => do something

/* NOTIFICATION functionality */
//navigates user to Messages tab after clicking "received message" notification
$(document).ready(() => {
    $(".gotoMsg").click(() => {
        activateMsgTab();
    }); 
});


/* MESSAGING functionality */
//open conversation


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

// $(document).ready(() => {
//     $(document).on("DOMSubTreeModified", ".user-id-4-convo-user-id-2", reMsgPreview());
// })