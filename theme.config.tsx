import Image from "next/image";
import Link from "next/link";
import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";
import Footer from "./components/footer";

const config: DocsThemeConfig = {
  logo: (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Countify Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <p className="text-3xl font-bold tracking-tighter nx-text-primary-600">
        docs
      </p>
    </div>
  ),
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  navbar: {
    extraContent: (
      <a href="/invite" className="p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="#fff"
        >
          <path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"></path>
        </svg>
      </a>
    ),
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: <Footer />,
  },
  primaryHue: 53,
};

export default config;
