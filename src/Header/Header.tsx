import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

type HeaderProps = {
  language: "pt" | "en";
  setLanguage: (lang: "pt" | "en") => void;
};
export default function Header({ language, setLanguage }: HeaderProps) {
  const location = useLocation();
  const isPresentationPage = location.pathname.startsWith("/apresentacao/");

  const text = {
    pt: {
      stack: "Stack",
      projects: "Projetos",
      tools: "Ferramentas",
      about: "Sobre",
      contact: "Contato",
    },
    en: {
      stack: "Stack",
      projects: "Projects",
      tools: "Tools",
      about: "About",
      contact: "Contact",
    },
  };

  return (
    <header className="header">
      <Link to="/" className="logo logo-home" aria-label="Ir para a pagina inicial">
        <img src={logo} alt="Logo Lucas Araujo" />

        <div>
          <h1>Lucas Araujo</h1>
          <span>DESENVOLVEDOR FULLSTACK</span>
        </div>
      </Link>

      <nav>
        <a href="#">{text[language].stack}</a>
        <a href="#">{text[language].projects}</a>
        <a href="#">{text[language].tools}</a>
        <a href="#">{text[language].about}</a>
        <a href="#">{text[language].contact}</a>
      </nav>

      <div className="actions">
        {!isPresentationPage && (
          <>
            <button
              className={language === "pt" ? "active" : ""}
              onClick={() => setLanguage("pt")}
            >
              PT
            </button>

            <button
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </>
        )}

        <a
          href="https://linkedin.com/in/lucas-araujo-b78109240"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}