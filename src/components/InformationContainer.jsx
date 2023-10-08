import "../styles/components/informationcontainer.sass";

//import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <div>
          <h3>Telefone</h3>
          <p>(18)99737-6920</p>
        </div>
      </div>
      <div className="info-card">
        <div>
          <h3>Localização</h3>
          <p>Assis - SP</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
