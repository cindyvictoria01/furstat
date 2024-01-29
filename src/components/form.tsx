import { FormikProvider, FormikContextType } from "formik";
import invariant from "invariant";
import * as React from "react";

export interface FormStateProps {
  editable: boolean;
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
}

// enum RequestMethod {
//   GET = 'GET',
//   HEAD = 'HEAD',
//   POST = 'POST',
//   PUT = 'PUT',
//   PATCH = 'PATCH',
//   DELETE = 'DELETE',
//   OPTIONS = 'OPTIONS',
// }

interface FormProps {
  formik: FormikContextType<any>;
  children: React.ReactNode;
  defaultEditable?: boolean;
}

export const FormContext = React.createContext<FormStateProps>({
  editable: false,
  setIsEditable: () => {},
});

export default function Form(props: FormProps) {
  const [isEditable, setIsEditable] = React.useState(
    props.defaultEditable !== undefined ? props.defaultEditable : true
  );
  const { formik, children } = props;

  const value = React.useMemo<FormStateProps>(
    () => ({
      editable: isEditable && !formik.isSubmitting,
      setIsEditable,
    }),
    [isEditable, formik.isSubmitting]
  );

  return (
    <FormContext.Provider value={value}>
      <FormikProvider value={formik}>{children}</FormikProvider>
    </FormContext.Provider>
  );
}

interface Props {
  children: (context: FormStateProps) => any;
}

export function FormState(props: Props) {
  const context = React.useContext(FormContext);
  return props.children(context);
}

export function useFormState(): FormStateProps {
  const context = React.useContext(FormContext);
  invariant(
    context !== undefined,
    "useFormState must be used inside Form Container"
  );
  return context;
}
