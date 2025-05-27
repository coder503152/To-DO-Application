let ctr = 1

function deletetodo(ctr) {
    const eltodel = document.getElementById("to-do" + ctr);
    eltodel.parentNode.removeChild(eltodel);
}

function addtodo() {
    const content = document.querySelector("#text");
    const newEl = document.createElement("div");
    newEl.setAttribute("id" , "to-do" + ctr);

    newEl.innerHTML = '<div>' + ctr + '>' + content.value+ '</div>' + '<button onclick="deletetodo(' +ctr+ ')">Delete</button> ' ;
    // ct++;
    const parEl = document.querySelector("body").appendChild(newEl);
    ctr++;
}

