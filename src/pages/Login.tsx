import { LoginForm } from "features/auth/LoginForm/LoginForm";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "30px 20px",
      }}
    >
      <LoginForm />
    </div>
  );
};

export default Login;
