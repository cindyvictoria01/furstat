import { FormikContextType } from "formik";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import Form from "../../src/components/form";
import Input from "../../src/components/input";
import typography from "../../constants/typography";
import useFormatDate from "../../hooks/use-format-date";
import RadioButton from "../../src/components/radio-button";
import color from "../../constants/color";
import DateTimePicker from "@react-native-community/datetimepicker";
import Button from "../../src/components/button";
import { STEP_STATUS } from "../../src/components/widget/step-indicator";
import size from "../../constants/size";
import DogBreedSelectInput from "../select-inputs/dog-breed-select-input";
import CatBreedSelectInput from "../select-inputs/cat-breed-select-input";
import PetTypeSelectInput from "../select-inputs/pet-type-select-input";

export default function AddPet(props: {
  setCurrentPage: any;
  setStepIndicators: any;
  formik: FormikContextType<any>;
}) {
  const { setCurrentPage, setStepIndicators, formik } = props;
  const defaultDate = new Date();
  const [sex, setSex] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    formik.setFieldValue("sex", sex);
    formik.setFieldValue("birthday", useFormatDate({ selectedDate: date }));
  }, [sex, date]);

  return (
    <Form formik={formik} defaultEditable>
      <ScrollView>
        <View style={{ marginHorizontal: 16, marginVertical: 12 }}>
          <Input
            type="text"
            name="petName"
            label="Nama"
            placeholder="Nama hewan peliharaan"
          />
          <Text style={typography.h4}>Jenis Kelamin</Text>
          <View style={styles.row}>
            <RadioButton
              value={"sex"}
              label={"Jantan"}
              status={sex === "Jantan"}
              onPress={() => setSex("Jantan")}
            />
            <RadioButton
              value={"sex"}
              label={"Betina"}
              status={sex === "Betina"}
              onPress={() => {
                setSex("Betina");
              }}
            />
          </View>
          <Text style={typography.h4}>Tanggal Lahir</Text>
          <TouchableOpacity
            style={[
              styles.dateTime,
              touched && { backgroundColor: color.neutral7 },
            ]}
            onPress={() => {
              setShow(true);
            }}
          >
            {!touched ? (
              <Text style={styles.placeholder}>Pilih tanggal lahir</Text>
            ) : (
              <Text style={styles.filledStyle}>{formik.values.birthday}</Text>
            )}
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              display="calendar"
              maximumDate={defaultDate}
              onChange={(event, date) => {
                if (date !== undefined) {
                  setDate(date);
                  setTouched(true);
                }
                setShow(false);
              }}
            />
          )}
          <Text style={typography.h4}>Jenis Peliharaan</Text>
          <PetTypeSelectInput
            name={"type"}
            placeholder="Jenis hewan peliharaan"
            uniqueKey="pet-type"
            text={"breed"}
          />
          <Text style={typography.h4}>Breed</Text>
          {formik.values.type === "" && (
            <View
              style={[
                styles.dateTime,
                { borderWidth: 0, backgroundColor: color.neutral6 },
              ]}
            >
              <Text style={styles.placeholder}>Ras hewan peliharaan</Text>
            </View>
          )}
          {formik.values.type === "anjing" && (
            <DogBreedSelectInput
              name={"breed"}
              placeholder="Ras hewan peliharaan"
              uniqueKey="dog-breed"
              disabled={formik.values.type != "anjing"}
            />
          )}
          {formik.values.type === "kucing" && (
            <CatBreedSelectInput
              name={"breed"}
              placeholder="Ras hewan peliharaan"
              uniqueKey="cat-breed"
              disabled={formik.values.type != "kucing"}
            />
          )}
          {(formik.values.type === "kuda" ||
            formik.values.type === "kelinci" ||
            formik.values.type === "burung") && (
            <View style={{ marginTop: 8 }}>
              <Input
                type="text"
                name="breed"
                placeholder="Ras hewan peliharaan"
              />
            </View>
          )}
          <Input
            type="text"
            name="furColor"
            label="Warna Bulu"
            placeholder="Warna bulu hewan peliharaan"
          />
          <Input
            type="number"
            name="weight"
            label="Berat Badan (Kg)"
            placeholder="0.00"
            keyboardType="decimal-pad"
          />
        </View>
      </ScrollView>
      <Button
        children={"Lanjutkan"}
        onPress={() => {
          setCurrentPage(1);
          setStepIndicators([
            {
              key: "add pet1",
              label: "Informasi Hewan",
              status: STEP_STATUS.FINISHED,
            },
            {
              key: "add pet2",
              label: "Data Vaksin",
              status: STEP_STATUS.CURRENT,
            },
            {
              key: "add pet3",
              label: "Jadwal Hewan",
              status: STEP_STATUS.UNFINISHED,
            },
          ]);
        }}
        style={{ margin: 16 }}
        disabled={
          formik.values.petName === "" ||
          formik.values.sex === "" ||
          formik.values.type === "" ||
          formik.values.breed === "" ||
          formik.values.furColor === "" ||
          formik.values.breed === "" ||
          formik.values.weight <= 0 ||
          !touched
        }
      />
    </Form>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  dateTime: {
    minHeight: 42,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: color.neutral1,
    marginTop: 8,
    marginBottom: 16,
    height: 42,
    justifyContent: "center",
  },
  placeholder: {
    paddingHorizontal: 16,
    color: color.defaultText,
    fontSize: size.defaultText,
  },
  filledStyle: {
    paddingHorizontal: 16,
    color: color.fullblack,
    fontSize: size.defaultText,
  },
});
