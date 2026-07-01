import { useState } from "react";
import "./LensesSection.css";

type Filter = "all" | "ai" | "security" | "performance" | "engineering";
type Props = {
  language: "pt" | "en";
};
type Lens = {
  title: string;
  description: string;
  tags: Filter[];
  link: string;
};

export default function LensesSection({ language }: Props) {
  const [filter, setFilter] = useState<Filter>("all");

  const openPresentation = (url: string) => {
    const opened = window.open(url, "_blank");

    if (opened) {
      opened.opener = null;
    }
  };

  const text = {
    pt: {
      title: "Como eu vejo a tecnologia",
      description:
        "Um conjunto de perspectivas que guiam como eu aprendo, construo e penso sistemas.",
      filters: {
        all: "Todos",
        ai: "IA",
        security: "Segurança",
        performance: "Performance",
        engineering: "Engenharia",
      },
      tokenTitle: "Token Economy Workflow",
      tokenDescription:
        "Como eu estruturo plano no modelo premium e executo no modelo economico para reduzir custo sem perder qualidade.",
      performanceTitle: "Performance Mindset",
      performanceDescription:
        "Minha forma de pensar performance com foco em experiencia real, fluidez e estabilidade.",
    },
    en: {
      title: "How I see technology",
      description:
        "A set of perspectives that guide how I learn, build, and think about systems.",
      filters: {
        all: "All",
        ai: "AI",
        security: "Security",
        performance: "Performance",
        engineering: "Engineering",
      },
      tokenTitle: "Token Economy Workflow",
      tokenDescription:
        "How I create a plan with a premium model and execute with a cheaper model to reduce cost without losing quality.",
      performanceTitle: "Performance Mindset",
      performanceDescription:
        "How I approach performance focused on real user experience, fluidity, and stability.",
    },
  } as const;

  const tagColors: Record<string, string> = {
    ai: "#7C3AED",
    security: "#EF4444",
    performance: "#F59E0B",
    engineering: "#3B82F6",
  };

  const lenses: Lens[] = [
    {
      title: text[language].tokenTitle,
      description: text[language].tokenDescription,
      tags: ["ai", "performance"],
      link: `${import.meta.env.BASE_URL}apresentacao/token-economy`,
    },
    {
      title: text[language].performanceTitle,
      description: text[language].performanceDescription,
      tags: ["performance", "engineering"],
      link: `${import.meta.env.BASE_URL}apresentacao/performance`,
    },
  ];

  const filters: { label: string; value: Filter }[] = [
    { label: text[language].filters.all, value: "all" },
    { label: text[language].filters.ai, value: "ai" },
    { label: text[language].filters.security, value: "security" },
    { label: text[language].filters.performance, value: "performance" },
    { label: text[language].filters.engineering, value: "engineering" },
  ];

  const filteredLenses =
    filter === "all"
      ? lenses
      : lenses.filter((lens) => lens.tags.includes(filter));

  return (
    <section className="lenses">
      <div className="lenses-header">
        <h2 aria-label={text[language].title}>{text[language].title}</h2>
        <p>
          {text[language].description}
        </p>

        <div className="filters">
          {filters.map((f) => (
            <button
              key={f.value}
              className={filter === f.value ? "active" : ""}
              onClick={() => setFilter(f.value)}
              aria-label={f.label}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="lenses-grid">
        {filteredLenses.map((item, index) => {
          const colors = item.tags.map((t) => tagColors[t]);

          const gradient =
            colors.length > 1
              ? `linear-gradient(90deg, ${colors
                  .map((c, i) => `${c} ${(i / colors.length) * 100}%`)
                  .join(", ")})`
              : colors[0];

          return (
            <div
              key={index}
              className="lens-card"
              onClick={() => openPresentation(item.link)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openPresentation(item.link);
                }
              }}
              aria-label={`Open presentation ${item.title}`}
            >
              <h3 aria-label={item.title}>{item.title}</h3>
              <p>{item.description}</p>

              <div className="tags">
                {item.tags.map((tag) => (
                  <span key={tag} style={{ color: tagColors[tag] }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="card-border"
                style={{ background: gradient }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}