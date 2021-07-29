import { useState } from "react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Header } from "../../components/Header";
import api from "../../services/api";
import { FiLinkedin, FiTrash2, FiArrowUp, FiArrowDown } from "react-icons/fi";
import { PerfilContainer } from "./style";
import { ModalTech } from "../../components/ModalTech";
import { toast } from "react-toastify";

export const Perfil = ({ authenticated, setAuthenticated, idUser }) => {
  const [user, setUser] = useState({});
  const [modalNewTech, setModalNewTech] = useState(false);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("@Kenziehub:id"));
    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));
    api
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      });
  }, [user]);

  const deleteTech = (id) => {
    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Technology successfully deleted!", {
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
        toast.error("Something went wrong!", {
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

  const levelUpTech = (id, level) => {
    let newlevel;

    switch (level) {
      case "Iniciante":
        newlevel = { status: "Intermediário" };
        break;
      case "Intermediário":
        newlevel = { status: "Avançado" };
        break;
      case "Avançado":
        newlevel = { status: null };
        break;
      default:
        toast.error("Something went wrong!!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }

    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

    api
      .put(`/users/techs/${id}`, newlevel, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Technology successfully update!", {
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
        toast.error(
          "⭐ You've reached the maximum level, you're not a big programming star!",
          {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      });
  };

  const levelDownTech = (id, level) => {
    let newlevel;

    switch (level) {
      case "Iniciante":
        newlevel = { status: null };
        break;
      case "Intermediário":
        newlevel = { status: "Iniciante" };
        break;
      case "Avançado":
        newlevel = { status: "Intermediário" };
        break;
      default:
        toast.error("Something went wrong!!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }

    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

    api
      .put(`/users/techs/${id}`, newlevel, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("I can't say if this is a success or not...", {
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
        toast.error(
          "❤️ You're better than that, don't put yourself down so much!",
          {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      });
  };

  if (authenticated === false) {
    return <Redirect to="/login" />;
  }

  const OpenModalNewTech = () => setModalNewTech(true);

  return (
    <>
      <Header
        logged={authenticated}
        setAuthenticated={setAuthenticated}
        setUser={setUser}
      />
      <PerfilContainer>
        <div className="header-perfil">
          <div className="image-box">
            <div className="image-perfil"></div>
          </div>
          <div className="info">
            <h2 className="info-name">{user.name}</h2>
            <p className="info-module">{user.course_module}</p>
            <a className="info-contact" href={user.contact}>
              <FiLinkedin />
            </a>
            <p className="info-email">
              <span>Email:</span>
              {user.email}
            </p>
            <p className="info-bio">
              <span>Bio:</span> {user.bio}
            </p>
          </div>
        </div>
        <div className="tech-list">
          <h3>Technologies</h3>
          {!!user.techs &&
            user.techs.map((item) => {
              return (
                <div className="tech" key={item.id}>
                  <div>
                    <span className="tech-title">{item.title}:</span>
                    <span className="tech-status">{item.status}</span>
                  </div>

                  <div className="buttons-list">
                    <button
                      className="level-up"
                      onClick={() => levelUpTech(item.id, item.status)}
                    >
                      <FiArrowUp />
                    </button>

                    <button
                      className="level-down"
                      onClick={() => levelDownTech(item.id, item.status)}
                    >
                      <FiArrowDown />
                    </button>
                    <button
                      className="delete"
                      onClick={() => deleteTech(item.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              );
            })}
          <button className="add-tech" onClick={OpenModalNewTech}>
            +
          </button>
        </div>

        {modalNewTech && <ModalTech setModalNewTech={setModalNewTech} />}
      </PerfilContainer>
    </>
  );
};
