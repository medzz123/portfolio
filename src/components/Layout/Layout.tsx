import React from "react";

interface LayoutProps {
  toggleDarkMode: () => void;
  dark: boolean;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, toggleDarkMode, dark } = props;

  return (
    <div>
      <header>
        {dark.toString()}
        <button type="button" onClick={toggleDarkMode}>
          Toggle
        </button>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://nextjs.org/">Next.js</a> &#128293;
      </footer>
    </div>
  );
};

export default Layout;
