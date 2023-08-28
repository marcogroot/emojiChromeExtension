const textBoxes = document.querySelector('input');

const url = chrome.runtime.getURL('emojis.json');
let emojis = null
fetch(url)
.then((response) => response.json())
.then((json) => {
  emojis = json
  }
); 

if (textBoxes){ 
  textBoxes.addEventListener("input", handleInput);
  textBoxes.addEventListener("focus", handleFocus);
}

function handleFocus(event) {
  currentSelectedTextBox = event
}

function handleInput(event) {
  let inputbox = currentSelectedTextBox.target
  let previous = document.getElementById("emojiPopup");
  if (previous) previous.remove();
  const textValue =  event.target.value;
  let emojiSearch = createEmojiSearch(textValue)
  inputbox.insertAdjacentElement("afterend", emojiSearch);
}

function createEmojiSearch(text) {
  const popup = document.createElement("dialog");
  popup.id = "emojiPopup"
  popup.setAttribute("open", "");
  popup.textContent = text
  search(text)
  return popup
}

function search(input) {
  for (const key in emojis) {
    if (key.includes(input) && emojis.hasOwnProperty(key)) {
        console.log(key, emojis[key]);
    }
   }
 }
 
