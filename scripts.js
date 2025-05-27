let ct = 1


function addtodo() {
    const content = document.querySelector("#text");
    const newEl = document.createElement("div");
    newEl.innerHTML = ct +"> " +  content.value ;
    ct++;
    const parEl = document.querySelector("body").appendChild(newEl);
}


function deletetodo() {
    const listdiv = document.querySelectorAll("div");
    let size = listdiv.length;
    const eltodel = listdiv[size-1];
    document.querySelector("body").removeChild(eltodel);
}