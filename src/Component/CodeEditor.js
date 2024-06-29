import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Prism } from "prismjs";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-go";

const CodeEditor = ({ code, setCode, language }) => {
  //   const [code, setCode] = useState("// Type your code here\n");

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <textarea
        value={code}
        Prism={Prism}
        onChange={handleChange}
        spellCheck="false"
        className="editor-textarea"
      />
      <Highlight theme={themes.palenight} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeEditor;
