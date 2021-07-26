import { Redirect, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { LoginContainer } from "./style";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import api from "../../services/api";

export const Login = ({ authenticated, setAuthenticated, setIdUser }) => {
  const history = useHistory();
  const sendRegister = () => {
    history.push("/register");
  };

  const schema = yup.object().shape({
    email: yup.string().required("Required email"),
    password: yup.string().required("Required password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitFormLogin = (data) => {
    const { email, password } = data;
    const user = {
      email: email,
      password: password,
    };

    api
      .post("/sessions", user)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("@Kenziehub:token", JSON.stringify(token));

        toast.success("You are logged in!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        const { id } = response.data.user;

        setIdUser(id);

        setAuthenticated(true);
        history.push("/perfil");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email or password invalid!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  if (authenticated) {
    return <Redirect to="/perfil" />;
  }

  return (
    <>
      <Header noMenu />
      <LoginContainer>
        <div className="login-box">
          <div className="flex">
            <div className="container-form">
              <p className="title"> Sign In</p>
              <div className="duck-container">
                <div className="duck"></div>
              </div>
              <form onSubmit={handleSubmit(submitFormLogin)}>
                <Input
                  icon={FiMail}
                  register={register}
                  name="email"
                  error={errors.email?.message}
                  placeholder="Email"
                />
                <Input
                  icon={FiLock}
                  register={register}
                  name="password"
                  error={errors.password?.message}
                  placeholder="Password strong"
                  type="password"
                />
                <p className="subtext">
                  Don’t have an Account?
                  <span className="register" onClick={sendRegister}>
                    Sing up
                  </span>
                </p>
                <Button type="submmit">Login</Button>
              </form>
            </div>
          </div>
          <div className="image-container"></div>
        </div>
      </LoginContainer>
    </>
  );
};
