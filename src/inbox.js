console.log('hello');

/* needed functions:
 *  active notifications/messages
 *  + only on messages
 *  new message
 *   
 *  indicate unread message
 *  onload, scroll to bottom of chatbox
*/

/* NOTIFICATION functionality */
//navigates user to Messages tab after clicking "received message" notification
function goToMsg() {

}


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