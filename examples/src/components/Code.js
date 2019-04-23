import React, { useEffect } from "react";
import prism from "prismjs";
import "../prism.css";

export function Code({ code, language }) {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <div className="code-container">
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
    </div>
  );
}

export default Code;
