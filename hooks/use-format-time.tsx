interface Props {
  selectedTime: Date;
}

function useFormatTime(props: Props) {
  const { selectedTime } = props;

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedTime = selectedTime.toLocaleTimeString("en-US", options);

  return formattedTime;
}

export default useFormatTime;
