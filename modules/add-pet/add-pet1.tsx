import { FormikContextType } from "formik";
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CheckmarkIcon } from "../../assets/images/svg";
import useFormatDate from "../../hooks/use-format-date";
import Form from "../../src/components/form";
import Input from "../../src/components/input";
import typography from "../../constants/typography";
import color from "../../constants/color";
import Button from "../../src/components/button";
import { STEP_STATUS } from "../../src/components/widget/step-indicator";
import size from "../../constants/size";

export default function AddVaccine(props: {
  setCurrentPage: any;
  setStepIndicators: any;
  formik: FormikContextType<any>;
}) {
  const { setCurrentPage, setStepIndicators, formik } = props;
  const defaultDate = new Date();
  const [touched1, setTouched1] = React.useState(false);
  const [touched2, setTouched2] = React.useState(false);
  const [dateGiven, setDateGiven] = React.useState(defaultDate);
  const [show1, setShow1] = React.useState(false);
  const [repeated, setRepeated] = React.useState(false);
  const [nextDate, setNextDate] = React.useState(defaultDate);
  const [show2, setShow2] = React.useState(false);

  React.useEffect(() => {
    formik.setFieldValue(
      "vaccine.dateGiven",
      useFormatDate({ selectedDate: dateGiven })
    );
    formik.setFieldValue("vaccine.repeat", repeated);
    formik.setFieldValue(
      "vaccine.nextSchedule",
      useFormatDate({ selectedDate: nextDate })
    );
  }, [dateGiven, repeated, nextDate]);

  return (
    <Form formik={formik} defaultEditable>
      <ScrollView>
        <View style={{ marginHorizontal: 16, marginTop: 32, marginBottom: 12 }}>
          <Input
            type="text"
            name="vaccine.name"
            label="Nama Vaksin"
            placeholder="Nama vaksin yang diberikan"
          />
          <Text style={{ ...typography.h4 }}>Tanggal Diberikan</Text>
          <TouchableOpacity
            style={[
              styles.dateTime,
              touched1 && { backgroundColor: color.neutral7 },
            ]}
            onPress={() => setShow1(true)}
          >
            {!touched1 ? (
              <Text style={styles.placeholder}>Tanggal vaksin diberikan</Text>
            ) : (
              <Text style={styles.filledStyle}>
                {formik.values.vaccine.dateGiven}
              </Text>
            )}
          </TouchableOpacity>
          {show1 && (
            <DateTimePicker
              value={dateGiven}
              mode="date"
              display="calendar"
              maximumDate={defaultDate}
              onChange={(event, date) => {
                if (date !== undefined) {
                  setDateGiven(date);
                }
                setShow1(false);
                setTouched1(true);
              }}
            />
          )}
          <TouchableOpacity
            style={styles.row}
            onPress={() => setRepeated(!repeated)}
          >
            <View style={styles.box}>
              {repeated && <CheckmarkIcon size={12} />}
            </View>
            <Text style={styles.greenText}>Vaksin berulang</Text>
          </TouchableOpacity>
          {repeated && (
            <>
              <Text style={{ ...typography.h4 }}>Jadwal Berikutnya</Text>
              <TouchableOpacity
                style={[
                  styles.dateTime,
                  touched2 && { backgroundColor: color.neutral7 },
                ]}
                onPress={() => setShow2(true)}
                disabled={!touched1}
              >
                {!touched2 ? (
                  <Text style={styles.placeholder}>
                    Jadwal vaksin berikutnya
                  </Text>
                ) : (
                  <Text style={styles.filledStyle}>
                    {formik.values.vaccine.nextSchedule}
                  </Text>
                )}
              </TouchableOpacity>
              {show2 && (
                <DateTimePicker
                  value={nextDate}
                  mode="date"
                  display="calendar"
                  minimumDate={dateGiven}
                  onChange={(event, date) => {
                    if (date !== undefined) {
                      setNextDate(date);
                    }
                    setShow2(false);
                    setTouched2(true);
                  }}
                />
              )}
            </>
          )}
          <Input
            type="text"
            name="vaccine.notes"
            label="Catatan Dokter"
            placeholder="Informasi tambahan"
          />
        </View>
      </ScrollView>
      <Button
        variant="text"
        children={"Lewati langkah ini"}
        onPress={() => {
          setCurrentPage(2);
          setStepIndicators([
            {
              key: "add pet1",
              label: "Informasi Hewan",
              status: STEP_STATUS.FINISHED,
            },
            {
              key: "add pet2",
              label: "Data Vaksin",
              status: STEP_STATUS.FINISHED,
            },
            {
              key: "add pet3",
              label: "Jadwal Hewan",
              status: STEP_STATUS.CURRENT,
            },
          ]);
        }}
      />
      <Button
        children={"Lanjutkan"}
        onPress={() => {
          setCurrentPage(2);
          setStepIndicators([
            {
              key: "add pet1",
              label: "Informasi Hewan",
              status: STEP_STATUS.FINISHED,
            },
            {
              key: "add pet2",
              label: "Data Vaksin",
              status: STEP_STATUS.FINISHED,
            },
            {
              key: "add pet3",
              label: "Jadwal Hewan",
              status: STEP_STATUS.CURRENT,
            },
          ]);
        }}
        style={{ margin: 16 }}
        disabled={
          formik.values.vaccine.name === "" ||
          !touched1 ||
          ((repeated || touched2) && !(repeated && touched2))
        }
      />
    </Form>
  );
}

const styles = StyleSheet.create({
  greenText: {
    color: color.primary3,
    fontWeight: "400",
    fontSize: 13,
  },
  box: {
    borderRadius: 4,
    borderColor: color.neutral1,
    borderWidth: 1,
    marginRight: 8,
    height: 18,
    width: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 12,
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
