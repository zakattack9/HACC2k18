// #similarUsersContainer
// #allUsersContainer
const similarUsers = $("#similarUsersContainer");
const allUsers = $("#allUsersContainer");
const searchUsersInput = $("#searchUsersInput");

const showAllUsers = () => {
    allUsers.show();
    similarUsers.hide();
}

const showSimilarUsers = () => {
    allUsers.hide();
    similarUsers.show();
}

const searchUsers = () => {
    var input, filter, userInstance, searchName;
    input = searchUsersInput;
    filter = input.val().toUpperCase();
    userInstance = $(".userItem");
    for (var i = 0; i < userInstance.length; i++) {
        searchName = userInstance[i].getElementsByClassName("infoContainer")[0].getElementsByClassName("username")[0];
      if (searchName.innerHTML.toUpperCase().indexOf(filter) > -1) {
        userInstance[i].style.display = "";
      } else {
        userInstance[i].style.display = "none";
      }
    }
}

window.onload = showSimilarUsers;

$(document).ready(() => {
    searchUsersInput.keyup(function() {
        showAllUsers();
        searchUsers();
        if (searchUsersInput.val() == "") {
            showSimilarUsers();
        }
    })
})