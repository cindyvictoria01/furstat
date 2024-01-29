import { useField } from "formik";
import React from "react";
import SelectInput from "../../src/components/elements/select-input";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  uniqueKey?: string;
  text: string;
  disabled?: boolean;
}

export default function PetTypeSelectInput(props: Props) {
  const { name, label, placeholder, uniqueKey, text, disabled } = props;
  const [field, , helper] = useField(name);
  const [, , textHelper] = useField(text);

  const options = React.useMemo<
    {
      label: string;
      value: string;
    }[]
  >(
    () => [
      { label: "Anjing", value: "anjing" },
      { label: "Burung", value: "burung" },
      { label: "Kelinci", value: "kelinci" },
      { label: "Kucing", value: "kucing" },
      { label: "Kuda", value: "kuda" },
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
        textHelper.setValue("");
      }}
      value={field.value}
      snapPoints={[270]}
      disabled={disabled}
    />
  );
}
