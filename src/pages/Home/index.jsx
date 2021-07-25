import { Header } from "../../components/Header";
import { Main } from "./style";
import { Button } from "../../components/Button";
import { useHistory } from "react-router";

export const Home = () => {
  const history = useHistory();
  const sendRegister = () => {
    history.push("/Register");
  };

  return (
    <div>
      <Header />
      <Main>
        <div className="presentation">
          <div>
            <h2 className="hero">Show the Market Your Skills Now!</h2>
            <p className="description">
              Create your resume conveniently and quickly and be quickly found
              by developer hunters.
            </p>
          </div>

          <Button whiteStyle onClick={sendRegister}>
            Get started
          </Button>
        </div>

        <div className="image-frame">
          <div className="image-container"></div>
        </div>
      </Main>
    </div>
  );
};
