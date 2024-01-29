import { FormikContextType } from "formik";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import EatFreqSelectInput from "../select-inputs/eat-frequency-select-input";
import BathFreqSelectInput from "../select-inputs/bath-frequency-select-input";
import { BathIcon, FoodIcon } from "../../assets/images/svg";
import useFormatTime from "../../hooks/use-format-time";
import useFormatDate from "../../hooks/use-format-date";
import Form from "../../src/components/form";
import typography from "../../constants/typography";
import color from "../../constants/color";
import Button from "../../src/components/button";
import size from "../../constants/size";

export default function AddSchedule(props: {
  formik: FormikContextType<any>;
  onSubmit: () => void;
}) {
  const { onSubmit, formik } = props;
  const defaultDate = new Date();
  const [touched1, setTouched1] = React.useState(false);
  const [touched2, setTouched2] = React.useState(false);
  const [touched3, setTouched3] = React.useState(false);
  const [touched4, setTouched4] = React.useState(false);
  const [touched5, setTouched5] = React.useState(false);

  const [eatHour, setEatHour] = React.useState(new Date());
  const [show, setShow] = React.useState(false);
  const [eatHour1, setEatHour1] = React.useState(new Date());
  const [show1, setShow1] = React.useState(false);
  const [eatHour2, setEatHour2] = React.useState(new Date());
  const [show2, setShow2] = React.useState(false);

  const [bathTime, setBathTime] = React.useState(new Date());
  const [show3, setShow3] = React.useState(false);
  const [bathHour, setBathHour] = React.useState(new Date());
  const [show4, setShow4] = React.useState(false);

  React.useEffect(() => {
    formik.setFieldValue(
      "schedule.eatHour",
      useFormatTime({ selectedTime: eatHour })
    );
    formik.setFieldValue(
      "schedule.eatHour1",
      useFormatTime({ selectedTime: eatHour1 })
    );
    formik.setFieldValue(
      "schedule.eatHour2",
      useFormatTime({ selectedTime: eatHour2 })
    );
    formik.setFieldValue(
      "schedule.bathTime",
      useFormatDate({ selectedDate: bathTime })
    );
    formik.setFieldValue(
      "schedule.bathHour",
      useFormatTime({ selectedTime: bathHour })
    );
  }, [eatHour, eatHour1, eatHour2, bathTime, bathHour]);

  return (
    <Form formik={formik} defaultEditable>
      <ScrollView>
        <View style={{ marginHorizontal: 16, marginVertical: 12 }}>
          <View style={styles.header}>
            <FoodIcon size={24} />
            <Text style={styles.title}>Jadwal Makan</Text>
          </View>
          <Text style={typography.h4}>Frekuensi Makan</Text>
          <EatFreqSelectInput
            name={"schedule.eatFreq"}
            placeholder="Pilih frekuensi makan"
            uniqueKey="eatFreq"
          />
          <Text style={typography.h4}>Jam Makan 1</Text>
          <TouchableOpacity
            style={[
              styles.dateTime,
              touched1 && { backgroundColor: color.neutral7 },
            ]}
            onPress={() => setShow(true)}
            disabled={formik.values.schedule.eatFreq < 1}
          >
            {!touched1 ? (
              <Text style={styles.placeholder}>HH:MM</Text>
            ) : (
              <Text style={styles.filledStyle}>
                {formik.values.schedule.eatHour}
              </Text>
            )}
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              value={eatHour}
              mode="time"
              display="spinner"
              onChange={(event, date) => {
                if (date !== undefined) {
                  setEatHour(date);
                }
                setShow(false);
                setTouched1(true);
              }}
            />
          )}
          {formik.values.schedule.eatFreq > 1 && (
            <>
              <Text style={typography.h4}>Jam Makan 2</Text>
              <TouchableOpacity
                style={[
                  styles.dateTime,
                  touched2 && { backgroundColor: color.neutral7 },
                ]}
                onPress={() => setShow1(true)}
                disabled={!touched1}
              >
                {!touched2 ? (
                  <Text style={styles.placeholder}>HH:MM</Text>
                ) : (
                  <Text style={styles.filledStyle}>
                    {formik.values.schedule.eatHour1}
                  </Text>
                )}
              </TouchableOpacity>
              {show1 && (
                <DateTimePicker
                  value={eatHour1}
                  mode="time"
                  display="spinner"
                  onChange={(event, date) => {
                    if (date !== undefined) {
                      setEatHour1(date);
                    }
                    setShow1(false);
                    setTouched2(true);
                  }}
                />
              )}
            </>
          )}
          {formik.values.schedule.eatFreq > 2 && (
            <>
              <Text style={typography.h4}>Jam Makan 3</Text>
              <TouchableOpacity
                style={[
                  styles.dateTime,
                  touched3 && { backgroundColor: color.neutral7 },
                ]}
                onPress={() => setShow2(true)}
                disabled={!touched2}
              >
                {!touched3 ? (
                  <Text style={styles.placeholder}>HH:MM</Text>
                ) : (
                  <Text style={styles.filledStyle}>
                    {formik.values.schedule.eatHour2}
                  </Text>
                )}
              </TouchableOpacity>
              {show2 && (
                <DateTimePicker
                  value={eatHour2}
                  mode="time"
                  display="spinner"
                  onChange={(event, date) => {
                    if (date !== undefined) {
                      setEatHour2(date);
                    }
                    setShow2(false);
                    setTouched3(true);
                  }}
                />
              )}
            </>
          )}
          <View style={styles.header}>
            <BathIcon size={24} />
            <Text style={styles.title}>Jadwal Mandi</Text>
          </View>
          <Text style={typography.h4}>Frekuensi Mandi</Text>
          <BathFreqSelectInput
            name={"schedule.bathFreq"}
            placeholder="Pilih frekuensi mandi"
            uniqueKey="bathFreq"
          />
          <Text style={typography.h4}>Ulangi Pada</Text>
          <TouchableOpacity
            style={[
              styles.dateTime,
              touched4 && { backgroundColor: color.neutral7 },
            ]}
            onPress={() => setShow3(true)}
          >
            {!touched4 ? (
              <Text style={styles.placeholder}>
                Pilih jadwal mandi berikutnya
              </Text>
            ) : (
              <Text style={styles.filledStyle}>
                {formik.values.schedule.bathTime}
              </Text>
            )}
          </TouchableOpacity>
          {show3 && (
            <DateTimePicker
              value={bathTime}
              mode="date"
              display="calendar"
              minimumDate={defaultDate}
              onChange={(event, date) => {
                if (date !== undefined) {
                  setBathTime(date);
                }
                setShow3(false);
                setTouched4(true);
              }}
            />
          )}
          <Text style={typography.h4}>Jam Mandi</Text>
          <TouchableOpacity
            style={[
              styles.dateTime,
              touched5 && { backgroundColor: color.neutral7 },
            ]}
            onPress={() => setShow4(true)}
          >
            {!touched5 ? (
              <Text style={styles.placeholder}>HH:MM</Text>
            ) : (
              <Text style={styles.filledStyle}>
                {formik.values.schedule.bathHour}
              </Text>
            )}
          </TouchableOpacity>
          {show4 && (
            <DateTimePicker
              value={bathHour}
              mode="time"
              display="spinner"
              onChange={(event, date) => {
                if (date !== undefined) {
                  setBathHour(date);
                }
                setShow4(false);
                setTouched5(true);
              }}
            />
          )}
        </View>
      </ScrollView>
      <Button
        children={"Tambah Hewan Peliharaan"}
        onPress={onSubmit}
        style={{ margin: 16 }}
        disabled={
          formik.values.schedule.eatFreq === 0 ||
          !touched1 ||
          (formik.values.schedule.eatFreq >= 2 && !touched2) ||
          (formik.values.schedule.eatFreq >= 3 && !touched3) ||
          formik.values.schedule.bathFreq === "" ||
          !touched4 ||
          !touched5
        }
      />
    </Form>
  );
}

const styles = StyleSheet.create({
  greenText: {
    color: color.primary,
    fontWeight: "500",
  },
  middle: {
    alignItems: "center",
    margin: 16,
  },
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
  title: {
    ...typography.h3,
    marginLeft: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 8,
  },
});
