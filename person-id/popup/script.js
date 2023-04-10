const form = document.querySelector('#my-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const personId = document.querySelector('#personId').value;
  await browser.runtime.sendMessage({ personId });
});
