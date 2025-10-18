Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('React error #418')) {
    return false;
  }
  return false;
});