import { Redirect, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { RegisterContainer } from "./style";
import { Input } from "../../components/Input";
import { FiUser, FiMail, FiLock, FiLinkedin, FiCompass } from "react-icons/fi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import api from "../../services/api";

export const Register = ({ authenticated }) => {
  const history = useHistory();
  const sendLogin = () => {
    history.push("/login");
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Required name")
      .matches(/^[a-zA-Z ]+$/, "Only letters"),
    email: yup
      .string()
      .required("Required email")
      .email("Invalid email")
      .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Email invalid"),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref("email"), null], "Email must match"),
    password: yup
      .string()
      .required("Required password")
      .min(8, "Must have at least 8 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Minimum one letter, number and special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    contact: yup
      .string()
      .required("Required linkedin")
      .matches(/([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?/, "Invalid Link"),
    module: yup.string().required("Required module"),
    bio: yup.string().required("Required bio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitFormRegister = (data) => {
    const { name, email, password, contact, module, bio } = data;
    const user = {
      name: name,
      email: email,
      password: password,
      contact: contact,
      course_module: module,
      bio: bio,
    };

    api
      .post("/users", user)
      .then((response) => {
        toast.success(" You have successfully registered!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        history.push("/login");
      })
      .catch((err) => {
        toast.error("E-mail already registered!", {
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
      <RegisterContainer>
        <div className="register-box">
          <div className="image-container">
            <p>Your moment has arrived!</p>
          </div>
          <div className="flex">
            <div className="container-form">
              <p className="title"> Sign Up</p>
              <form onSubmit={handleSubmit(submitFormRegister)}>
                <Input
                  icon={FiUser}
                  register={register}
                  name="name"
                  error={errors.name?.message}
                  placeholder="Your name"
                />
                <Input
                  icon={FiMail}
                  register={register}
                  name="email"
                  error={errors.email?.message}
                  placeholder="Your best email"
                />
                <Input
                  icon={FiMail}
                  register={register}
                  name="confirmEmail"
                  error={errors.confirmEmail?.message}
                  placeholder="Confirm your email"
                />
                <Input
                  icon={FiLock}
                  register={register}
                  name="password"
                  error={errors.password?.message}
                  placeholder="Password strong"
                  type="password"
                />
                <Input
                  icon={FiLock}
                  register={register}
                  name="confirmPassword"
                  error={errors.confirmPassword?.message}
                  placeholder="Confirm password"
                  type="password"
                />
                <Input
                  icon={FiLinkedin}
                  register={register}
                  name="contact"
                  error={errors.contact?.message}
                  placeholder="LinkedIn"
                />
                <Input
                  icon={FiCompass}
                  register={register}
                  name="module"
                  error={errors.module?.message}
                  placeholder="Course module"
                />
                <Input
                  icon={FiCompass}
                  register={register}
                  name="bio"
                  error={errors.module?.message}
                  placeholder="Your bio"
                />
                <p className="subtext">
                  Already have an Account?
                  <span className="login" onClick={sendLogin}>
                    Sing in
                  </span>
                </p>
                <Button type="submmit">Register</Button>
              </form>
            </div>
          </div>
        </div>
      </RegisterContainer>
    </>
  );
};
