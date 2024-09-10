import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [isResult, setResult] = useState(false);

  const onSearch = () => (isResult ? setResult(false) : setLoading(true));

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setResult(true)
        setLoading(false)
      }, 5000);
    }
  }, [isLoading]);

  const result = (
    <>
      <div className="section">
        <h2>
          <div className="badges-section">
            <span className="badge trust">Wiarygodny</span>
            <span className="badge politics">
              Polityka <i className="fas fa-arrow-right"></i> Konserwatyzm
            </span>
          </div>
        </h2>
        <p>
          Artykuł analizuje obecne zmiany klimatyczne i ich wpływ na gospodarki
          rozwijających się krajów. Autor porusza kwestię rosnących temperatur
          oraz ich wpływ na produkcję rolną i dostęp do wody.
        </p>
      </div>

      <div className="section">
        <h2>Problemy</h2>
        <ul className="problems-list">
          <li>
            <span>
              Fałszywe stwierdzenie: globalne ocieplenie <b>nie</b> istnieje
            </span>
            <a className="problem-link" href="#">
              Wiarygodne źródło
            </a>
          </li>
        </ul>
      </div>

      <div className="section timeline">
        <h2>Timeline</h2>
        <div className="timeline-item">
          <a className="timeline-link" href="#">
            www.onet.pl/...
          </a>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
          <span className="timeline-date">Dzień wcześniej</span>
          <i className="timeline-arrow fas fa-arrow-up"></i>
        </div>
        <div className="timeline-item">
          <a className="timeline-link" href="#">
            www.onet.pl/...
          </a>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
          <span className="timeline-date">8h wcześniej</span>
          <i className="timeline-arrow fas fa-arrow-up"></i>
        </div>
        <div className="timeline-item">
          <a className="timeline-link" href="#">
            www.onet.pl/...
          </a>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
          <span className="timeline-date">4h wcześniej</span>
        </div>
      </div>
    </>
  );

  const loading = (
    <>
      <div className={"loading " + (isLoading ? "loading-visible" : "loading-hidden")}>
        <div className="loading-wrapper">
          <DotLottieReact
            src="https://lottie.host/cb31e369-a159-411d-9ab7-391041c3bb8a/RSOgpOBx2E.json"
            loop
            autoplay
          />
        </div>
      </div>
    </>
  );
  return (
    <div>
      {loading}
      <main className={"main " + (isResult ? "main-result" : "main-search")}>
        <div class={"logo " + (isResult ? "logo-result" : "logo-search")}>
          <h1>Czupakabra RealFaktVerify</h1>
          <img src="/capybara.svg" alt="Capybara SVG" />
        </div>
        <div className="section search">
          <div className="input-section">
            <input type="text" placeholder="Wprowadź URL" />
            <button onClick={onSearch}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        {isResult ? result : null}
      </main>
    </div>
  );
};

export default App;
