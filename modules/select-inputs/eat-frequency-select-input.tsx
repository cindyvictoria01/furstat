import { useField } from "formik";
import React from "react";
import SelectInput from "../../src/components/elements/select-input";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  uniqueKey?: string;
}

export default function EatFreqSelectInput(props: Props) {
  const { name, label, placeholder, uniqueKey } = props;
  const [field, , helper] = useField(name);

  const options = React.useMemo<
    {
      label: string;
      value: number;
    }[]
  >(
    () => [
      { label: "1 kali per hari", value: 1 },
      { label: "2 kali per hari", value: 2 },
      { label: "3 kali per hari", value: 3 },
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
      snapPoints={[180]}
    />
  );
}
