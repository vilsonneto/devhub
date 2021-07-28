import { Input } from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { FiHeart } from "react-icons/fi";
import api from "../../services/api";
import { Container } from "./style.js";

export const ModalTech = ({ setModalNewTech }) => {
  const schema = yup.object().shape({
    tech: yup.string().required("Required technology"),
    level: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const CloseModal = () => setModalNewTech(false);

  const submitFormTech = (data) => {
    const { tech, level } = data;
    const newTech = {
      title: tech,
      status: level,
    };

    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

    api
      .post("/users/techs", newTech, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        toast.success("You add new Tech!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Could not add new technology!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

    setModalNewTech(false);
  };

  return (
    <Container>
      <div className="modal">
        <button className="close" onClick={CloseModal}>
          close
        </button>
        <form onSubmit={handleSubmit(submitFormTech)}>
          <p>Add new Tecnologie</p>
          <Input
            icon={FiHeart}
            register={register}
            name="tech"
            error={errors.tech?.message}
            placeholder="Technology"
          />
          <select {...register("level")} form="carform">
            <option value="Iniciante">Beginner</option>
            <option value="Intermediário">Intermediary</option>
            <option value="Avançado">Advanced</option>
          </select>
          <button type="submit">Add Tech</button>
        </form>
      </div>
    </Container>
  );
};
