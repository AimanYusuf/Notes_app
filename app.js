const notes = document.querySelector(".NoteList");
const input = document.querySelector("#input");
const button = document.querySelector("#button");

let notesItems = [];

const addNote = () => {
  const inputValue = input.value;
  if (inputValue !== "") {
    notesItems.push(inputValue);
    input.value = "";
    showNotes();
  }
};

const showNotes = () => {
  notes.innerHTML = "";
  notesItems.forEach((note, index) => {
    const li = document.createElement("li");
    li.classList.add("Note");
    li.textContent = note;
    li.addEventListener("click", () => {
      notesItems.splice(index, 1);
      showNotes();
    });
    notes.appendChild(li);
  });
};

button.addEventListener("click", addNote);
