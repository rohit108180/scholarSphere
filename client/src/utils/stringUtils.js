const convertToInitials = (str) => {

  const words = str.split(" ")?.slice(0,2);


  const initials = words.map((word) => word.charAt(0).toUpperCase());
  // Join the initials together
  return initials.join("");
};


const formateDate= (date)=>{
  const dateObj = new Date(date);
  const dateString = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return dateString;
}


export {convertToInitials, formateDate};