const msgTemplate = {
    convoWith: "user-id-X",
    username: "user name",
    userIcon: "link to icon",
    messages: [
        {
            sender: "native user || non native user",
            timeSent: "XX/XX/XXXXX X:XXam/pm",
            msgContent: "hello"
        },
        {
            sender: "native user || non native user",
            timeSent: "XX/XX/XXXXX X:XXam/pm",
            msgContent: "hello"
        },
        {
            sender: "native user || non native user",
            timeSent: "XX/XX/XXXXX X:XXam/pm",
            msgContent: "hello"
        },
        {
            sender: "native user || non native user",
            timeSent: "XX/XX/XXXXX X:XXam/pm",
            msgContent: "hello"
        }
    ]
}

console.log('linked up');

const nativeUserId = "user-id-4";

var userId4_msg_userId2 = {
    convoWith: "user-id-2",
    username: "Lorem I.",
    userIcon: "../images/avatars/002-woman-14.png",
    messages: [
        {
            sender: "user-id-2",
            timeSent: "10/30/18 9:05pm",
            msgContent: "Hi! Would you mind emailing me a copy of your science lesson plan?"
        },
        {
            sender: "user-id-4",
            timeSent: "10/30/18 9:07pm",
            msgContent: "Not at all. I'll email it to you as soon as possible."
        },
        {
            sender: "user-id-2",
            timeSent: "10/30/18 9:07pm",
            msgContent: "That would be great, thank you."
        },
        {
            sender: "user-id-4",
            timeSent: "10/30/18 9:07pm",
            msgContent: "I also have some prepped materials if you're interested? I can probably meet up during the weekend if you'd like."
        },
        {
            sender: "user-id-2",
            timeSent: "10/30/18 9:07pm",
            msgContent: "Sure. Is Pearl City Starbucks at 11pm Saturday ok?"
        },
        {
            sender: "user-id-4",
            timeSent: "10/30/18 9:07pm",
            msgContent: "I can make it. See you on Saturday"
        },
        {
            sender: "user-id-2",
            timeSent: "10/30/18 9:07pm",
            msgContent: "Thank you so much! See you then."
        }
    ]
}

var userId4_msg_userId1 = {
    convoWith: "user-id-1",
    username: "Rebecca Rain",
    userIcon: "../images/avatars/013-woman-3.png",
    messages: [
        {
            sender: "user-id-1",
            timeSent: "10/29/18 8:26am",
            msgContent: "Hi! I have some crayons that you might be interested in. A few colors might be missing though."
        }
    ]
}

// array of conversation objects
var storage = [userId4_msg_userId2, userId4_msg_userId1];