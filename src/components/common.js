export function validateSignUp(name, email, password) {
  console.log(name, email, password);

  // Name validation: Only alphabets and spaces allowed
  const isValidName = /^[a-zA-Z\s]+$/.test(name);
  console.log("Is valid name:", isValidName);

  // Email validation: Standard email format
  const isValidEmail = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  console.log("Is valid email:", isValidEmail);

  // Password validation: At least 6 characters
  const isValidPassword = password.length >= 6;
  console.log("Is valid password:", isValidPassword);

  // Return appropriate error messages
  if (!isValidName) return "Name is not valid";
  if (!isValidEmail)
    return "Invalid email address! Please enter a valid email.";
  if (!isValidPassword) return "Password must be at least 6 characters long.";

  // If all validations pass, return null
  // console.log("Validation successful:", name, email, password);
  return null;
}
