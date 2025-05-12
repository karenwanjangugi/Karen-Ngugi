function findItems(inventory) {

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i] == 0) {
            return "Item not available"

        } else {
            return "item available"
        }
    }


}
console.log(findItems([0, 34, 56, 12, 33, 90]));


function grade(scores) {

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 85) {
            console.log(`You have a score of ${scores[i]} and your grade is A`);
        }
        else if
            ((85 > scores[i]) && (scores[i] >= 70)) {
            console.log(`You have a score of ${scores[i]} and your grade is B`);

        }
        else if
            ((70 > scores[i]) && (scores[i] >= 60)) {
            console.log(`You have a score of ${scores[i]} and your grade is C`);

        }
        else if
            ((60 > scores[i]) && (scores[i] >= 50)) {
            console.log(`You have a score of ${scores[i]} and your grade is D`)

        }
        else {

            console.log(`You have a score of ${scores[i]} and your grade is E`)



        }
    }
}
let scores = [55, 30, 70, 85, 40, 20, 90, 64];

grade(scores)

// function loginAttempts(){
//     let loginAttempt = 1;

//     while(loginAttempt <= 3){
//         console.log(`Login attempt ${loginAttempt}`);
//         loginAttempt += 1;


//     }

// };
// loginAttempts();

function loginAttemptsUsingDoWhile() {
    let loginAttempt = 1;

    do {
        console.log(`login attempts using do...while ${loginAttempt}`);
        loginAttempt += 1;

    }

    while (loginAttempt <= 3) {


    }

};
loginAttemptsUsingDoWhile();

function notifications(notificationTypes) {
    notificationTypes.forEach(notification => {
        switch (notification) {
            case "email":
                console.log("Send Email");
                break;
            case "sms":
            case "text":    //two can have the same response
                console.log("Send SMS");
                break;
            case "push":
                console.log("Send push notification");
                break;
            default:
                console.log("notification type not supported");
                break

        }

    });
}
let notificationTypes = ["email", "sms", "push", "text", "chat"];
notifications(notificationTypes);




//Given an array of user roles, use a switch case to log different access roles

function accessRoles(roles) {
    roles.forEach(role => {
        switch (role) {
            case "admin":
                console.log("Admin access");
                break;
            case "viewer":
                console.log("Viewer access");
                break;
            case "editor":
                console.log("Editor access");
                break;
            case "commentor":
                console.log("Commentor access");
                break;
            default:
                console.log("No Access");
                break;


        }

    });
}
let roles = ["admin", "viewer", "commentor", "editor", "writer"]
accessRoles(roles)