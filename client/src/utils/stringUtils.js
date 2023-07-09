const convertToInitials = (str) => {

  const words = str.split(" ");


  const initials = words.map((word) => word.charAt(0).toUpperCase());
  // Join the initials together
  return initials.join("");
};

export {convertToInitials};