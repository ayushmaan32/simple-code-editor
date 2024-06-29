import React from "react";

const Navbar = ({ language, setLanguage }) => {
  const languages = [
    "javascript",
    "swift",
    "kotlin",
    "typeScript",
    "rust",
    "go",
    "cpp",
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">CodeEditor</div>
      <div className="navbar-controls">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="language-selector"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
