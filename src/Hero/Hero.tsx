import "./Hero.css";

type HeroProps = {
  language: "pt" | "en";
};

export default function Hero({ language }: HeroProps) {
  const content = {
   pt: {
  eyebrow: "Sobre",
  title: "Tecnologia, curiosidade e aprendizado contínuo.",
  description:
    "Sou estudante de Engenharia de Software no Instituto Infnet, com uma forte curiosidade por tecnologia e interesse em cibersegurança, especialmente em como sistemas funcionam e podem ser protegidos.\n\nMinha jornada no desenvolvimento começou com a vontade de entender como a tecnologia pode transformar vidas e criar soluções reais. Atualmente, atuo como estagiário na Globo, onde trabalho com tecnologias modernas em ambientes de grande escala e aprendo diariamente com profissionais experientes.\n\nTambém participei do projeto Ecosocial como desenvolvedor de aplicativo, contribuindo em soluções voltadas ao impacto social. Essa experiência reforçou meu interesse em construir produtos que geram valor real.\n\nFora do ambiente profissional, gosto de explorar vulnerabilidades e estudar segurança da informação de forma curiosa e investigativa, como forma de aprendizado contínuo.",
  metrics: [
    { value: "2026", label: "Ano de referência" },
    { value: "5+", label: "Linguagens" },
    { value: "Infnet", label: "Formação" },
    { value: "Web & App", label: "Plataformas" },
  ]
},
    en: {
  eyebrow: "About",
  title: "Technology, curiosity, and continuous learning.",
  description:
    "I am a Software Engineering student at Instituto Infnet with a strong curiosity for technology and an interest in cybersecurity, especially in how systems work and how they can be protected.\n\nMy journey in development started with the desire to understand how technology can transform lives and create real-world solutions. Currently, I work as an intern at Globo, where I deal with modern technologies in large-scale environments and learn daily from experienced engineers.\n\nI also contributed to the Ecosocial project as a mobile application developer, working on solutions focused on social impact. This experience strengthened my interest in building products that deliver real value.\n\nOutside of my professional environment, I enjoy exploring vulnerabilities and studying information security in a curious and investigative way as part of my continuous learning process.",
  metrics: [
    { value: "2026", label: "Reference year" },
    { value: "5+", label: "Programming languages" },
    { value: "Infnet", label: "Education" },
    { value: "Web & App", label: "Platforms" },
  ]
},
  };

  const text = content[language];

  return (
    <main className="hero">
      <div className="hero-content">
        <span className="hero-eyebrow">{text.eyebrow}</span>

        <h2 className="hero-title">{text.title}</h2>

        <p className="hero-description">{text.description}</p>
      </div>

      <div className="hero-metrics">
        {text.metrics.map((metric, index) => (
          <div key={index} className="metric-box">
            <span className="metric-value">{metric.value}</span>
            <span className="metric-label">{metric.label}</span>
          </div>
        ))}
      </div>
    </main>
  );
}