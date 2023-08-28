// background.js

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener(function(text, sender, sendResponse) {
  // Check the message and sender if needed
  console.log("Message received:", text);

  // Perform actions based on the received message
  // If you want to send a response back to the content script
  sendResponse({ response: text });
});