import InformationContainer from "./InformationContainer";
import Contact from "./Contact"

import Avatar from "../img/eu.jpeg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Carlos" />

      <p className="title">Desenvolvedor FullStack</p>
      <InformationContainer/>
      <Contact/>
    </aside>
  );
};

export default Sidebar;
