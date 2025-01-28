prompt("enter your name")
function lisa() {
    const notes = document.getElementById("note").value;
    if (notes.trim() === "") {
        alert("Kirjuta midagi");
        return;
    }

    const uusnote = document.createElement("button");
    uusnote.textContent = notes;
    uusnote.classList.add("notes_container");

    uusnote.addEventListener("click", function () {
        uusnote.remove();
    });

    document.getElementById("notes_container").appendChild(uusnote);

    document.getElementById("note").value = '';
}
