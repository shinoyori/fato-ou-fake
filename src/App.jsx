import { useAnalyzer } from "./hooks/useAnalyzer";
import { MC } from "./data/methods";

import Header         from "./components/Header";
import Hero           from "./components/Hero";
import ExamplePills   from "./components/ExamplePills";
import MethodSelector from "./components/MethodSelector";
import ResultPanel    from "./components/ResultPanel";
import EduSection     from "./components/EduSection";

export default function App() {
  const { text, method, result, loading, changeText, changeMethod, analyze } = useAnalyzer();
  const mc = MC[method];

  return (
    <>
      <Header />

      <div className="page">
        <Hero />

        <hr className="divider" style={{ margin: "36px 0 32px" }} />

        <ExamplePills onSelect={changeText} />

        <div className="textarea-wrap">
          <textarea
            value={text}
            onChange={e => changeText(e.target.value)}
            placeholder="Cole ou digite uma notícia, manchete ou trecho aqui…"
          />
          <span className="char-count">{text.length} chars</span>
        </div>

        {/* seletor */}
        <MethodSelector selected={method} onChange={changeMethod} />

        <button
          className="analyze-btn"
          onClick={analyze}
          disabled={text.trim().length < 10 || loading}
          style={loading || text.trim().length < 10 ? {} : { "--coral": mc.accent }}
        >
          {loading
            ? <><span className="dots"><span /><span /><span /></span> Analisando</>
            : <>▶ Analisar Texto</>
          }
        </button>

        <ResultPanel result={result} />

        <EduSection method={method} />

      
      </div>
    </>
  );
}
