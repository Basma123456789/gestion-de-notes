function addNote() {
    let noteText = document.getElementById("noteText").value;
    if (noteText.trim() === "") return;
    
    let notesContainer = document.getElementById("notesContainer");
    let noteCard = document.createElement("div");
    noteCard.className = "noteCard";
    noteCard.innerHTML = `
        <p>${noteText}</p>
        <button class="deleteBtn" onclick="this.parentElement.remove()">Supprimer</button>
    `;
    notesContainer.appendChild(noteCard);
    document.getElementById("noteText").value = "";
}