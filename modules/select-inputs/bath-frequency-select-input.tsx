import { useField } from "formik";
import React from "react";
import SelectInput from "../../src/components/elements/select-input";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  uniqueKey?: string;
}

export default function BathFreqSelectInput(props: Props) {
  const { name, label, placeholder, uniqueKey } = props;
  const [field, , helper] = useField(name);

  const options = React.useMemo<
    {
      label: string;
      value: string;
    }[]
  >(
    () => [
      { label: "1 kali per 1 minggu", value: "1-minggu" },
      { label: "1 kali per 2 minggu", value: "2-minggu" },
      { label: "1 kali per 3 minggu", value: "3-minggu" },
      { label: "1 kali per 4 minggu", value: "4-minggu" },
      { label: "1 kali per 5 minggu", value: "5-minggu" },
      { label: "1 kali per 6 minggu", value: "6-minggu" },
      { label: "1 kali per 7 minggu", value: "7-minggu" },
      { label: "1 kali per 8 minggu", value: "8-minggu" },
      { label: "1 kali per 1 bulan", value: "1-bulan" },
      { label: "1 kali per 2 bulan", value: "2-bulan" },
      { label: "1 kali per 3 bulan", value: "3-bulan" },
      { label: "1 kali per 4 bulan", value: "4-bulan" },
    ],
    []
  );

  return (
    <SelectInput
      options={options}
      placeholder={placeholder}
      uniqueKey={uniqueKey}
      label={label}
      onChange={(value) => {
        helper.setValue(value);
      }}
      value={field.value}
      snapPoints={["30%", "50%"]}
    />
  );
}
