import "./GithubProjectsSection.css";

type GithubProjectsSectionProps = {
  language: "pt" | "en";
};

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  url: string;
};

export default function GithubProjectsSection({ language }: GithubProjectsSectionProps) {
  const content = {
    pt: {
      projectsTitle: "Projetos",
      viewProject: "Ver projeto",
      projects: [
        {
          title: "Rede Globo 60 Anos",
          description:
            "Projeto especial comemorativo com foco em acessibilidade e experiencia do usuario para milhoes de visitantes.",
          tags: ["React", "Acessibilidade", "Performance", "SEO"],
          url: "https://redeglobo.globo.com/60-anos/",
        },
        {
          title: "Rede Globo Rio - Programacao",
          description:
            "Portal de programacao com interface responsiva, acessivel e otimizada para usabilidade.",
          tags: ["React", "TypeScript", "Acessibilidade", "Responsive"],
          url: "https://redeglobo.globo.com/rio/programacao/",
        },
        {
          title: "Memoria Globo",
          description:
            "Plataforma historica com melhorias em navegacao, acessibilidade e performance.",
          tags: ["React", "JavaScript", "Web Accessibility"],
          url: "https://memoriaglobo.globo.com/",
        },
        {
          title: "Historia da Globo",
          description:
            "Portal de linha do tempo com foco em acessibilidade e preservacao de conteudo historico.",
          tags: ["React", "Acessibilidade", "Content Management"],
          url: "https://redeglobo.globo.com/historia/",
        },
        {
          title: "Somos Globo",
          description:
            "Plataforma institucional com recursos acessiveis e design responsivo.",
          tags: ["React", "TypeScript", "Accessibility", "Corporate"],
          url: "https://redeglobo.globo.com/somos-globo/",
        },
        {
          title: "Projetos Pessoais",
          description:
            "Colecao de projetos pessoais com estudos em React Native, web apps e ciberseguranca.",
          tags: ["React Native", "Expo", "JavaScript", "Python", "Java", "Spring Boot", "C#"],
          url: "https://github.com/LucasGAraujo?tab=repositories",
        },
        {
          title: "Expo Snacks",
          description:
            "Experimentos e prototipos mobile no ecossistema Expo.",
          tags: ["React Native", "Expo", "Mobile Dev"],
          url: "https://expo.dev/@lucasgomes445?tab=snacks",
        },
      ] as ProjectItem[],
    },
    en: {
      projectsTitle: "Projects",
      viewProject: "View project",
      projects: [
        {
          title: "Rede Globo 60 Years",
          description:
            "Anniversary project with strong focus on accessibility and user experience for millions of visitors.",
          tags: ["React", "Accessibility", "Performance", "SEO"],
          url: "https://redeglobo.globo.com/60-anos/",
        },
        {
          title: "Rede Globo Rio - Programming",
          description:
            "Programming portal built with responsive, accessible and user-centered interface.",
          tags: ["React", "TypeScript", "Accessibility", "Responsive"],
          url: "https://redeglobo.globo.com/rio/programacao/",
        },
        {
          title: "Memoria Globo",
          description:
            "Historical platform with improvements in navigation, accessibility and performance.",
          tags: ["React", "JavaScript", "Web Accessibility"],
          url: "https://memoriaglobo.globo.com/",
        },
        {
          title: "Historia da Globo",
          description:
            "Timeline portal built with focus on accessibility and historical content preservation.",
          tags: ["React", "Accessibility", "Content Management"],
          url: "https://redeglobo.globo.com/historia/",
        },
        {
          title: "Somos Globo",
          description:
            "Institutional platform with accessible features and responsive design.",
          tags: ["React", "TypeScript", "Accessibility", "Corporate"],
          url: "https://redeglobo.globo.com/somos-globo/",
        },
        {
          title: "Personal Projects",
          description:
            "Collection of personal projects exploring React Native, web apps and cybersecurity.",
          tags: ["React Native", "Expo", "JavaScript", "Python"],
          url: "https://github.com/LucasGAraujo?tab=repositories",
        },
        {
          title: "Expo Snacks",
          description:
            "Mobile experiments and rapid prototyping in the Expo ecosystem.",
          tags: ["React Native", "Expo", "Mobile Dev"],
          url: "https://expo.dev/@lucasgomes445?tab=snacks",
        },
      ] as ProjectItem[],
    },
  } as const;

  const text = content[language];

  return (
    <section className="github-projects" id="projects">
      <div className="projects-grid">
        <h3 aria-label={text.projectsTitle}>{text.projectsTitle}</h3>
        <div className="project-cards">
          {text.projects.map((project) => (
            <article key={project.title} className="project-card">
              <h4 aria-label={project.title}>{project.title}</h4>
              <p>{project.description}</p>

              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${text.viewProject}: ${project.title}`}
                title={`${text.viewProject}: ${project.title}`}
              >
                {text.viewProject}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
