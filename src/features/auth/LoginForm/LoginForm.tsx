import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.scss";
import { useAuth } from "hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { logIn } from "../api";
import storage from "utils/storage";
import { useNavigate } from "react-router-dom";
import { PATH_CONSTANTS } from "routes/pathConstants";

const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required field"),
  password: Yup.string().required("Password is required field"),
});

export const LoginForm = () => {
  const { handleSuccessfullLogin } = useAuth();
  const navigate = useNavigate();

  const { mutateAsync: logInMutation, error } = useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => logIn({ username, password }),
    onSuccess: (token: string) => {
      handleSuccessfullLogin();
      storage.setToken("access_token", token);
      navigate(PATH_CONSTANTS.PRODUCTS);
    },
  });

  const login = async (
    values: { username: string; password: string },
    { setSubmitting }: any
  ) => {
    setSubmitting(true);
    const respose = await logInMutation(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={loginValidationSchema}
      onSubmit={login}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form className={styles["form"]}>
          <h3 className={styles["form-title"]}>Login</h3>
          <div className={styles["field-wrapper"]}>
            <Field
              name="username"
              type="text"
              className={styles["form-field"]}
              placeholder="Username"
            />
            <ErrorMessage
              name="username"
              component="span"
              className={styles["field-error"]}
            />
          </div>
          <div className={styles["field-wrapper"]}>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className={styles["form-field"]}
            />
            <ErrorMessage
              name="password"
              component="span"
              className={styles["field-error"]}
            />
          </div>

          {error && (
            <span className={styles["field-error"]}>{error.message}</span>
          )}

          <button
            disabled={!(dirty && isValid) || isSubmitting}
            type="submit"
            className={styles["form-btn"]}
          >
            Login
            {isSubmitting && <span>LOADING</span>}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
