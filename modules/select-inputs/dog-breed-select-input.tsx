import { useField } from "formik";
import React from "react";
import axios from "axios";
import SelectInput, {
  SelectOption,
} from "../../src/components/elements/select-input";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  uniqueKey?: string;
  disabled: boolean;
}

function transformer(data: string): SelectOption<any> {
  return { label: data, value: data };
}

export default function DogBreedSelectInput(props: Props) {
  const { name, label, placeholder, uniqueKey, disabled } = props;
  const [field, , helper] = useField(name);
  const [breeds, setBreeds] = React.useState<string[]>([]);

  React.useEffect(() => {
    axios
      .get("https://api.thedogapi.com/v1/breeds")
      .then((response) => {
        const dogBreeds = response.data.map((breed: any) => breed.name);
        setBreeds(dogBreeds);
      })
      .catch((error) => {
        console.error("Error fetching dog breeds:", error);
      });
  }, []);

  const options = React.useMemo(
    () => (breeds && (breeds || []).map((breed) => transformer(breed))) || [],
    [breeds]
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
      snapPoints={["50%", "70%"]}
      isSearchable
      disabled={disabled}
    />
  );
}
