const useFormatDate = (date) => {
  if(!date)
    return null;

  // const engMonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const frMonthNames = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  const d = new Date(date);

  // if(d.getFullYear() === new Date().getFullYear())
  //   return frMonthNames[d.getMonth()];

  return `${frMonthNames[d.getMonth()]} ${d.getFullYear()}`;
}

export default useFormatDate;
