import useFormatDate from "./use-format-date";

interface Props {
  formattedDate: string;
}

const monthMap: { [key: string]: string } = {
  Januari: "01",
  Februari: "02",
  Maret: "03",
  April: "04",
  Mei: "05",
  Juni: "06",
  Juli: "07",
  Agustus: "08",
  September: "09",
  Oktober: "10",
  November: "11",
  Desember: "12",
};

function useRevertFormatDate(props: Props) {
  const { formattedDate } = props;

  const [day, month, year] = formattedDate.split(" ");
  if (day && month && year) {
    const monthNumber = monthMap[month];
    if (monthNumber) {
      return `${year}/${monthNumber}/${day}`;
    }
  }
  return `2000/01/01`;
}

export default useRevertFormatDate;
