import styles from "./FormInput.module.scss";
import { FieldProps, useField } from "formik";

type FormInputType = {
  label: string;
} & FieldProps;

const FormInput = ({ label, field, form, ...props }: FormInputType) => {
  const [_, meta] = useField(field);
  return (
    <div className={styles["input-wrapper"]}>
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} />
      {meta.error && meta.touched && (
        <p className={styles["error"]}>{meta.error}</p>
      )}
    </div>
  );
};

export default FormInput;
