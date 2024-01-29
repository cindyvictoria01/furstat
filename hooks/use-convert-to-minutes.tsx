const convertToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":");
  let totalMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10);

  // For PM times, add 12 hours (720 minutes)
  if (time.includes("PM")) {
    totalMinutes += 720;
  }

  return totalMinutes;
};

export default convertToMinutes;
