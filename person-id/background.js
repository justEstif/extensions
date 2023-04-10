browser.runtime.onMessage.addListener(async (message) => {
  const { personId } = message;
  const randomInputField = document.querySelector("#randomInputField");
  randomInputField.value = personId;
  const searchButton = document.querySelector("#searchButton");
  searchButton.click();
});
