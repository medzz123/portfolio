import { useRouter } from "next/router";
import React from "react";

export default function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <div>
      <header>{pathname}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://nextjs.org/">Next.js</a> &#128293;
      </footer>
    </div>
  );
}
