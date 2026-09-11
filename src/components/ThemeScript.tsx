export default function ThemeScript() {
    const script = `
    (function () {
      try {
        var savedTheme = localStorage.getItem("theme");

        var theme =
          savedTheme === "dark" || savedTheme === "light"
            ? savedTheme
            : "light";

        document.documentElement.setAttribute(
          "data-theme",
          theme
        );
      } catch (error) {
        document.documentElement.setAttribute(
          "data-theme",
          "light"
        );
      }
    })();
  `;

    return (
        <script
            dangerouslySetInnerHTML={{
                __html: script,
            }}
        />
    );
}