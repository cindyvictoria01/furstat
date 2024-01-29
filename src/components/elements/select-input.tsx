import React, { useMemo, useCallback } from "react";
import { useNavigation } from "@react-navigation/core";
import { useTranslation } from "react-i18next";
import {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModal as RawBottomSheetModal,
} from "@gorhom/bottom-sheet";
import {
  StyleProp,
  TouchableOpacity,
  ViewStyle,
  Image,
  Keyboard,
  StyleSheet,
  Platform,
  View,
  Text,
} from "react-native";
import color from "../../../constants/color";
import { ChevronDownIcon } from "../../../assets/images/svg";
import typography from "../../../constants/typography";
import SearchBar from "../widget/search-bar";
import size from "../../../constants/size";

export interface SelectOption<T = undefined> {
  value: string | number;
  label: string;
  icon?: string;
  extra?: T;
}

export type ItemProps = {
  option: SelectOption;
  value: string | number;
  onSelect: (option: SelectOption) => void;
};

interface Props<T> {
  options: SelectOption<any>[];
  value?: string | number;
  contentStyle?: StyleProp<ViewStyle>;
  selectedStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
  placeholderColor?: string;
  onRetry?: () => void;
  onChange?: (value: string | number) => void;
  onAfterChange?: () => void;
  separateLine?: boolean;
  isSearchable?: boolean;
  uniqueKey?: string;
  label?: string;
  snapPoints?: (string | number)[];
}

const OptionItem: React.FC<ItemProps> = React.memo((props) => {
  const { onSelect, option, value } = props;
  const { label, icon } = option;
  const onPress = useCallback(() => onSelect(option), [option, onSelect]);
  const selected = useMemo(
    () => String(value) === String(option.value),
    [value, option]
  );
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemContainer}>
        {!!icon && (
          <Image
            style={styles.itemIcon}
            source={{ uri: icon }}
            resizeMode="cover"
          />
        )}
        <Text style={selected && styles.active}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default function SelectInput<T extends string>(props: Props<T>) {
  const {
    value,
    options,
    onChange,
    placeholder,
    placeholderColor,
    contentStyle,
    selectedStyle,
    disabled = false,
    error = false,
    onRetry,
    separateLine = true,
    isSearchable,
    uniqueKey,
    label,
    snapPoints,
    onAfterChange,
  } = props;
  const { t } = useTranslation();
  const [query, setQuery] = React.useState("");
  const navigation: any = useNavigation();
  const selected = useMemo<SelectOption | undefined>(
    () => options.find((option) => String(option.value) === String(value)),
    [value, options]
  );
  const bottomSheetModalRef = React.useRef<RawBottomSheetModal>(null);

  const filteredOptions = React.useMemo(
    () =>
      options.filter(
        (option) =>
          `${option.value}`.toLowerCase().includes(query.toLowerCase()) ||
          `${option.label}`.toLowerCase().includes(query.toLowerCase())
      ),
    [options, query]
  );

  const pick = useCallback(() => {
    Keyboard.dismiss();
    if (error) {
      onRetry && onRetry();
    } else {
      bottomSheetModalRef.current && bottomSheetModalRef.current.present();
    }
  }, [
    navigation,
    options,
    selected,
    onChange,
    onRetry,
    error,
    value,
    bottomSheetModalRef,
  ]);

  const containerStyle: any = {
    borderColor: separateLine ? color.border : "",
    borderWidth: separateLine ? 1 : 0,
    borderRadius: separateLine ? 4 : 0,
  };

  const onItemSelect = useCallback(
    (option: SelectOption) => {
      if (onChange && option.value !== value) {
        onAfterChange && onAfterChange();
        onChange(option.value);
        bottomSheetModalRef.current && bottomSheetModalRef.current.close();
      }
    },
    [onChange, navigation, bottomSheetModalRef]
  );

  const keyExtractor = React.useCallback(
    (item: SelectOption) => `${item.value}`,
    []
  );

  const renderItem = useCallback(
    ({ item }: { item: SelectOption }) => (
      <OptionItem option={item} value={value || ""} onSelect={onItemSelect} />
    ),
    [value, onItemSelect]
  );

  return (
    <>
      <TouchableOpacity
        style={[styles.container, error && styles.errorContainer]}
        disabled={disabled}
        onPress={pick}
      >
        <View
          style={StyleSheet.flatten([
            styles.content,
            contentStyle,
            containerStyle,
            !disabled && selected && styles.selectedContainer,
            disabled && styles.disabledStyle,
          ])}
        >
          {selected ? (
            <Text
              style={[
                styles.text,
                selectedStyle,
                disabled && styles.disabledText,
              ]}
            >
              {selected.label}
            </Text>
          ) : (
            <Text
              style={[
                styles.placeholderText,
                placeholderColor ? { color: placeholderColor } : {},
              ]}
            >
              {placeholder}
            </Text>
          )}
          <ChevronDownIcon
            color={
              disabled
                ? color.neutral3
                : selected
                ? color.fullblack
                : color.neutral3
            }
          />
        </View>
      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints ? snapPoints : ["30%", "70%"]}
        key={uniqueKey}
      >
        <View style={{ marginHorizontal: 16 }}>
          {label && (
            <View style={styles.titleContainer}>
              <Text style={typography.h5}>{label}</Text>
            </View>
          )}
          {isSearchable && (
            <SearchBar
              value={query}
              onChangeText={setQuery}
              placeholder={"Cari"}
            />
          )}
        </View>
        <BottomSheetFlatList
          keyExtractor={keyExtractor}
          data={filteredOptions}
          renderItem={renderItem}
          style={{ paddingHorizontal: 8 }}
        />
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  errorContainer: {
    borderWidth: 2,
    borderColor: color.error,
    borderRadius: 4,
  },
  requiredText: {
    color: color.error,
    letterSpacing: -2,
  },
  errorText: {
    color: color.error,
  },
  disabledStyle: {
    borderWidth: 0,
    backgroundColor: color.neutral6,
  },
  content: {
    flexGrow: 1,
    height: size.inputHeight,
    borderRadius: 4,
    paddingVertical: size.inputVerticalPadding,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
    paddingLeft: 16,
    backgroundColor: color.white,
    borderColor: color.border,
    borderWidth: 1,
    justifyContent: "space-between",
    minHeight: 43,
  },
  text: {
    color: color.fullblack,
    fontSize: size.inputSize,
    paddingRight: 6,
  },
  placeholder: {
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  icon: {
    width: size.inputSize + 5,
    height: size.inputSize + 5,
    marginRight: 8,
  },
  dropdown: {
    width: size.inputSize,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  errorBg: {
    backgroundColor: color.error,
    borderRadius: (size.inputSize - 2) / 2,
  },
  errorLabel: {
    color: "white",
    width: size.inputSize - 2,
    height: size.inputSize - 2,
    fontSize: size.inputSize - 1,
    lineHeight: size.inputSize,
    textAlign: "center",
    fontWeight: "bold",
  },
  placeholderText: {
    color: color.defaultText,
    fontSize: size.defaultText,
  },
  disabledText: {
    color: color.neutral3,
    fontSize: size.defaultText,
  },
  selectedContainer: {
    borderColor: color.neutral1,
    backgroundColor: color.neutral7,
  },
  searchContainer: {
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    backgroundColor: color.white,
    flexGrow: 1,
    flexShrink: 1,
    paddingHorizontal: 16,
    fontSize: 13.28,
    fontWeight: "400",
    ...Platform.select({
      ios: {
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 6,
      },
      android: {
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 8,
      },
    }),
  },
  itemContainer: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  itemIcon: {
    width: 30,
    height: 30,
    marginRight: 16,
  },
  active: {
    color: color.primary,
    fontWeight: "500",
  },
  titleContainer: {
    height: 32,
    marginBottom: 8,
    justifyContent: "center",
  },
});
