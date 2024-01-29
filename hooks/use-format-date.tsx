interface Props {
  selectedDate: Date;
}

function useFormatDate(props: Props) {
  const { selectedDate } = props;

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formattedDate = selectedDate.toLocaleDateString("id-ID", options);

  return formattedDate;
}

export default useFormatDate;
