function useStringToDate(dateString: string): Date {
  const parts = dateString.split("/");

  if (parts.length === 3) {
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // Months are zero-based (0-11)
    const day = parseInt(parts[2]);

    if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
      const dateObject = new Date(year, month, day);
      if (!isNaN(dateObject.getTime())) {
        return dateObject;
      }
    }
  }

  // Return a default or safe date
  return new Date(); // You can return a default date or an appropriate value here
}

export default useStringToDate;
