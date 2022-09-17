export function validateIsEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export function parseDate(date) {
  return new Date(date).toLocaleDateString();
}

export function parseDateToEqual(date) {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();

  return new Date(year, month, day).toLocaleDateString();
}
