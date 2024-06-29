import { useState } from "react";
import CodeEditor from "./Component/CodeEditor";
import Navbar from "./Component/Navbar";

function App() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Type your code here\n");

  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <CodeEditor code={code} setCode={setCode} language={language} />
      </main>
    </div>
  );
}

export default App;
