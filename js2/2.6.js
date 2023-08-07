function findCenturyFromYear(year) {
    const century = Math.ceil(year / 100);
    return century;
  }
  
  console.log(findCenturyFromYear(2000));
  
  