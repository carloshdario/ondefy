import Imagem from "../img/java.png";
import Js from "../img/javascript.png";
import nod from "../img/node.png";
import msql from "../img/mysql.png";
import mong from "../img/mongodb.png";
import rea from "../img/react.png";



const AboutContainer = () => {
  const estiloImagem = {
    marginRight: '10px', // Adiciona margem à direita de cada imagem para separá-las
  };

  const containerStyle = {
    display: 'flex', // Exibe os elementos lado a lado
    alignItems: 'center', // Alinha verticalmente ao centro
  };

  return (
    <section className="about-container">
      <h2>Sobre</h2>
      <p>
      Comecei minha vida profissional na área de farmácia, e me apaixonei pela área da tecnologia, realizei alguns cursos da Digital Innovation One, Curso em Vídeo, e o Bootcamp da RocketSeat, onde aprendi sobre HTML5, CSS3, Javascript, Algoritmos, Git ,Github, SQL. E em 2022 ingressei no ensino técnico em desenvolvimento de sistemas e no curso superior de Tecnologia da Informação, hoje busco uma oportunidade de estágio ou de nível júnior, para me aprimorar ainda mais.
      </p>
      <br></br>
      <h2>Formaçāo</h2>
      <p>Técnico em Desenvolvimento de Sistemas - ETEC - Pedro D'Arcadia Neto</p>
      <p>Cursando Bacharelo em Tecnologia da Informaçāo</p>
      <br></br>
      <h2>Experiência Profissional</h2>
      <p><strong>Assistente de Service Desk - Leveros</strong></p>
      <p>Atribuições: Suporte ao cliente interno via glpi, consulta e envio de requisições via API, uso de banco de dados mySQL e Pl/SQL, monitoramento de integrações via jitterbit, monitoramento de pedidos VTEX, conhecimento em SAP.</p>
      <br/>
      <h2>Idiomas</h2>
      <p>Inglês - Intermediário</p>
      <p>Espanhol - Básico</p>
      <br/>
      <h2>Tecnologias</h2>
      <div style={containerStyle}>
      <img src={Imagem} alt="java" style={estiloImagem} />
      <img src={Js} alt="javascript"  style={estiloImagem} />
      <img src={nod} alt="node" style={estiloImagem}/>
      <img src={msql} alt="mysql"  style={estiloImagem}/>
      <img src={mong} alt="mongodb"  style={estiloImagem}/>
      <img src={rea} alt="react"  style={estiloImagem}/>

      </div>


    </section>

    
  );
};

export default AboutContainer;
