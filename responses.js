function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there, Your shift is about to start, say goodbye!";
    } else if (input == "goodbye") {
        return "Talk to you later, Have a great day. Talk to the accounts section to get paid for working overtime, and for being awesome!";
    } else {
        return "Try asking something else!";
    }
}