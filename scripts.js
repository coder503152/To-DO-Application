let ct = 1;

function addtodo() {
    const input = document.querySelector("#text");
    const value = input.value.trim();
    if (!value) return; // Prevent empty todos

    const spanel = document.createElement("span");
    spanel.innerHTML = value;
    const buttonel = document.createElement("button");
    buttonel.innerHTML = "delete todo";
    const divel = document.createElement("div");
    divel.className = "todo-item";
    divel.appendChild(spanel);
    divel.appendChild(buttonel);
    document.body.appendChild(divel);
    divel.setAttribute("id", "to-do" + ct);

    buttonel.onclick = function() {
        divel.remove();
    };

    ct++;
    input.value = ""; // Clear input after adding
}

// Listen for Enter key on the input field
document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector("#text");
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addtodo();
        }
    });
});