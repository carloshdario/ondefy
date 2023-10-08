import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "react-modal";


function Contact() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [fromEmail, setFromEmail] = useState(""); // Estado para o e-mail do remetente
  const [message, setMessage] = useState(""); // Estado para a mensagem

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!fromEmail || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Configura os parâmetros para enviar o e-mail
    const params = {
      email: fromEmail,
      message: message,
    };

    emailjs
      .send(
        "service_65vte4j", 
        "template_dca1nvh",
        params.target,
        "O6gFMk1HaEsjRxtuv"
      )
      .then(
        (result) => {
          alert("email enviado");
          closeModal()
            
        },
        (error) => {
          console.error("Erro ao enviar o e-mail:", error.text);
        }
        
      );
  };

  return (
    <div>
      <button onClick={openModal}>Entre em contato</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Enviar E-mail</h2>
        <form>
          <div>
            <label htmlFor="from_email">Seu E-mail:</label>
            <input
              type="email"
              id="from_email"
              name="email"
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Entre em Contato:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button  onClick={sendEmail}>Enviar</button>
        </form>
      </Modal>
    </div>
  );
}

export default Contact;
