import React from "react";

const FooterBranding = () => {
  return (
    <div className="w-full text-center">
      <h1 className="w-full text-3xl sm:text-5xl md:text-7xl lg:text-9xl xl:text-[12rem] pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/80 bg-clip-text text-center font-semibold backdrop-blur-sm">
        SOCIALSHIFU
      </h1>
      <footer className="py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {['About', 'Careers', 'History', 'Services', 'Projects', 'Blog'].map((item) => (
              <li key={item}>
                <a
                  className="text-sm sm:text-base text-gray-400 transition hover:text-gray-400/75"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <ul className="mt-8 sm:mt-12 flex justify-center gap-4 sm:gap-6 md:gap-8">
            {['Facebook', 'Instagram', 'Twitter', 'GitHub', 'Dribbble'].map((social) => (
              <li key={social}>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:text-gray-400/75"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <br />
        <br />
      </footer>
    </div>
  );
};

export default FooterBranding;
