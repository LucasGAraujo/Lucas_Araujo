import "./Footer.css";

type FooterProps = {
  language: "pt" | "en";
};

export default function Footer({ language }: FooterProps) {
  const text = {
    pt: {
      title: "Contato",
      subtitle: "Fale comigo por email, telefone ou redes.",
      email: "Email",
      whatsapp: "WhatsApp",
      github: "GitHub",
      linkedin: "LinkedIn",
      rights: "Todos os direitos reservados.",
    },
    en: {
      title: "Contact",
      subtitle: "Reach me by email, phone, or social links.",
      email: "Email",
      whatsapp: "WhatsApp",
      github: "GitHub",
      linkedin: "LinkedIn",
      rights: "All rights reserved.",
    },
  };

  const currentYear = new Date().getFullYear();
  const content = text[language];

  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-header">
          <h2 aria-label={content.title}>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>

        <div className="footer-links">
          <a href="mailto:lucasdag445@gmail.com">
            <div className="contact-head">
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.8"/>
                </svg>
              </span>
              <span>{content.email}</span>
            </div>
            lucasdag445@gmail.com
          </a>

          <a href="https://wa.me/5521999461157" target="_blank" rel="noopener noreferrer">
            <div className="contact-head">
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4C7.6 4 4 7.4 4 11.7C4 13.2 4.4 14.7 5.2 16L4.4 20L8.5 19.2C9.6 19.9 10.8 20.3 12 20.3C16.4 20.3 20 16.9 20 12.6C20 8.3 16.4 4 12 4Z" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M9.5 9.8C9.8 11.1 10.9 12.2 12.3 12.8L13.2 11.9C13.4 11.7 13.7 11.6 14 11.7L15.9 12.3C16.3 12.4 16.5 12.8 16.4 13.2L16.1 14.7C16.1 15 15.8 15.2 15.5 15.2C11.8 15.1 8.9 12.2 8.8 8.5C8.8 8.2 9 7.9 9.3 7.9L10.8 7.6C11.2 7.5 11.6 7.7 11.7 8.1L12.3 10C12.4 10.3 12.3 10.6 12.1 10.8L11.2 11.7" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              </span>
              <span>{content.whatsapp}</span>
            </div>
            +55 21 99946-1157
          </a>

          <a href="https://github.com/LucasGAraujo?tab=repositories" target="_blank" rel="noopener noreferrer">
            <div className="contact-head">
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19C5.5 20 5.5 17.2 4 16.8M14 21V18.4C14 17.6 14.1 17.2 13.7 16.8C15.6 16.6 17.5 15.8 17.5 12.2C17.5 11.3 17.2 10.5 16.6 9.9C16.9 9.1 16.9 8.3 16.6 7.5C16.6 7.5 15.9 7.3 14 8.6C12.6 8.2 11.1 8.2 9.7 8.6C7.8 7.3 7.1 7.5 7.1 7.5C6.8 8.3 6.8 9.1 7.1 9.9C6.5 10.5 6.2 11.3 6.2 12.2C6.2 15.8 8.1 16.6 10 16.8C9.6 17.2 9.5 17.9 9.5 18.8V21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>{content.github}</span>
            </div>
            github.com/LucasGAraujo
          </a>

          <a href="https://linkedin.com/in/lucas-araujo-b78109240" target="_blank" rel="noopener noreferrer">
            <div className="contact-head">
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 9H4V20H7V9Z" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M5.5 7C6.32843 7 7 6.32843 7 5.5C7 4.67157 6.32843 4 5.5 4C4.67157 4 4 4.67157 4 5.5C4 6.32843 4.67157 7 5.5 7Z" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M12 20V13.8C12 11.9 13.1 10.9 14.7 10.9C16.2 10.9 17 11.9 17 13.8V20H20V13C20 9.9 18.2 8.8 16.3 8.8C14.8 8.8 13.8 9.5 13.3 10.2V9H10.5V20H12Z" stroke="currentColor" strokeWidth="1.8"/>
                </svg>
              </span>
              <span>{content.linkedin}</span>
            </div>
            linkedin.com/in/lucas-araujo-b78109240
          </a>
        </div>

        <div className="footer-bottom">
          <p>Lucas Araujo - Desenvolvedor Fullstack</p>
          <small>{currentYear} - {content.rights}</small>
        </div>
      </div>
    </footer>
  );
}
