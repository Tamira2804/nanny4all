export function calculateAge(birthdateUTS) {
  const currentDate = new Date(); // поточна дата
  const birthdate = new Date(birthdateUTS);

  let age = currentDate.getFullYear() - birthdate.getFullYear();

  // перевірка народження вже відбулося у поточному році чи ще ні
  if (
    currentDate.getMonth() < birthdate.getMonth() ||
    (currentDate.getMonth() === birthdate.getMonth() &&
      currentDate.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  return age;
}
