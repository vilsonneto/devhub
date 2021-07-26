import { useState } from "react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Header } from "../../components/Header";
import api from "../../services/api";
import { FiLinkedin, FiTrash2 } from "react-icons/fi";
import { PerfilContainer } from "./style";

export const Perfil = ({ authenticated, setAuthenticated, idUser }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    api.get(`/users/${idUser}`).then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, [idUser]);

  // eslint-disable-next-line no-unused-vars
  const Logout = () => {
    localStorage.removeItem("@Kenziehub:token");
    setUser({});
    setAuthenticated(false);
  };

  if (authenticated === false) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header />
      <PerfilContainer>
        <button onClick={Logout}>Logout</button>
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

                  <button>
                    <FiTrash2 />
                  </button>
                </div>
              );
            })}
        </div>
      </PerfilContainer>
    </>
  );
};
