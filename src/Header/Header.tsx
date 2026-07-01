import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

type HeaderProps = {
  language: "pt" | "en";
  setLanguage: (lang: "pt" | "en") => void;
};
export default function Header({ language, setLanguage }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isPresentationPage = location.pathname.startsWith("/apresentacao/");

  const scrollToSection = (id: "thinking-tech" | "projects") => {
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: "thinking-tech" | "projects",
  ) => {
    event.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => scrollToSection(id), 220);
      return;
    }

    scrollToSection(id);
  };

  const text = {
    pt: {
      thinking: "O que penso sobre tecnologia",
      projects: "Projetos",
    },
    en: {
      thinking: "How I think about technology",
      projects: "Projects",
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
        <a href="#thinking-tech" onClick={(event) => handleNavClick(event, "thinking-tech")}>{text[language].thinking}</a>
        <a href="#projects" onClick={(event) => handleNavClick(event, "projects")}>{text[language].projects}</a>
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