const faqs = {
  "what is codealpha":
    "CodeAlpha is an internship and learning platform.",

  "is the internship free":
    "Yes, the internship is free.",

  "how many tasks should i complete":
    "You should complete at least 2 tasks.",

  "will i get a certificate":
    "Yes, after successful completion and submission.",

  "is linkedin posting mandatory":
    "No, LinkedIn posting is optional.",

  "what technologies are used":
    "This project uses HTML, CSS and JavaScript.",

  "who developed this chatbot":
    "This chatbot was developed by Anil Kumar."
};

function sendMessage() {

    let input =
        document.getElementById("user-input");

    let question =
        input.value.toLowerCase().trim();

    let chatBox =
        document.getElementById("chat-box");

    chatBox.innerHTML +=
        "<p><b>You:</b> " + input.value + "</p>";

    let answer =
        faqs[question] ||
        "Sorry, I don't know the answer.";

    chatBox.innerHTML +=
        "<p><b>Bot:</b> " + answer + "</p>";

    input.value = "";
}
