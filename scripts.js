let defaultText = ["myTextarea"]
let messages = localStorage.getItem("myTextarea") ? JSON.parse(localStorage.getItem("myTextarea")) : defaultText;

const createMessage = () => {
    const myTextarea = document.getElementById("myTextarea").value;
    console.log({ myTextarea });
    const message = { myTextarea };
    messages.unshift(message);
    console.log({ messages });
    document.getElementById("myTextarea").value = "";
    localStorage.setItem("myTextarea", JSON.stringify(messages));
    renderMessages()
}

const removeMessage = (messageIndex, messageId) => {
    document.getElementById(messageId).remove();
    messages.splice(messageIndex, 1);
    localStorage.setItem("myTextarea", JSON.stringify(messages));
}

const renderMessages = () => {
    document.getElementById("rendered-text").innerHTML = "";
    let count = 0;
    for (let message of messages) {
        document.getElementById("rendered-text").innerHTML += `
            <div id="message-container-${count}" class="message-container">
                <button type="button" onclick="removeMessage('${count}', 'message-container-${count}')">Remove</button>
                ${message.myTextarea}
            </div>
        `
        count++;
        console.log({ message });
    }
}

renderMessages()