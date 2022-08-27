export function validateIsEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export function parseDate(date) {
  return new Date(date).toLocaleDateString();
}