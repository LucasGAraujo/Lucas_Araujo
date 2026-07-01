import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PresentationPage() {
  const { id } = useParams();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector(".header") as HTMLElement | null;
      setHeaderHeight(header?.offsetHeight ?? 0);
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  const presentationSrc = `${import.meta.env.BASE_URL}presentations/${id}.html`;

  return (
    <main
      className="presentation-page"
      style={{
        width: "100%",
        height: `calc(100dvh - ${headerHeight}px)`,
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src={presentationSrc}
        title={`Apresentacao ${id}`}
        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
      />
    </main>
  );
}