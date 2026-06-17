function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="section-header">
        <span className="section-tag">Contact</span>
        <h2>Contactez-nous</h2>
        <p>
          Une question, un projet ou une demande d’information ? Envoyez-nous un message.
        </p>
      </div>

      <div className="contact-container">

        {/* FORMULAIRE */}
        <form className="contact-form">
          <input type="text" placeholder="Nom complet" required />
          <input type="email" placeholder="Adresse email" required />
          <input type="tel" placeholder="Téléphone" />
          <textarea placeholder="Votre message" rows="6" required></textarea>

          <button type="submit">Envoyer</button>
        </form>

        {/* INFOS */}
        <div className="contact-info">
          <h3>Informations</h3>

          <p><strong>Adresse :</strong> Yaoundé, Cameroun</p>
          <p><strong>Téléphone :</strong> +237 697733236</p>
          <p><strong>Email :</strong> contact@habitat100k.cm</p>
          <p><strong>Horaires :</strong> Lun - Ven (08h - 17h)</p>

        </div>

      </div>

    </section>
  );
}

export default Contact;