// function message(messageType = "success", message = "") {
//   return `<div class="alert ${messageType}">${message}</div>`;
// }

const newError = (message, error) => {
  return `
          <div class="alert">
          <p>${message}</p>
          <p class="warning">${error}</p>
          </div>
        `;
};
