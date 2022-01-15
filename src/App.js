import './App.css';

function App() {

  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );
  return (
    <div className="App">
      <nav id="navbar">
        <a href="#welcome-section">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="welcome-section">
        <h1>Francois Harewood</h1>
        <h6><em>Web Developer</em></h6>
      </section>

      <section id="projects">
        <h5><em>Projects</em></h5>
        <div id="project-items">
          <div className="project-tile">

            <a href="https://codepen.io/fharewood/full/abBxeMw" target="_blank" rel="noopener noreferrer" ><img src="https://github.com/hexachordal/codePenLib/blob/main/drum-machine.png?raw=true"></img><h6>Drum Machine</h6></a>
          </div>
          <div className="project-tile">
            <a href="https://codepen.io/fharewood/full/ZELyjqz" target="_blank" rel="noopener noreferrer" ><img src="https://github.com/hexachordal/codePenLib/blob/main/interval-timer.png?raw=true"></img><h6>Interval Timer</h6></a>
          </div>
          <div className="project-tile">
            <a href="https://codepen.io/fharewood/full/BapoeOQ" target="_blank" rel="noopener noreferrer" ><img src="https://github.com/hexachordal/codePenLib/blob/main/javascript-calculator.png?raw=true"></img><h6>JavaScript Calculator</h6></a>
          </div>
          <div className="project-tile">
            <a href="https://codepen.io/fharewood/full/rNWremj" target="_blank" rel="noopener noreferrer" ><img src="https://github.com/hexachordal/codePenLib/blob/main/markdown-preview.png?raw=true"></img><h6>Markdown Previewer</h6></a>
          </div>
          <div className="project-tile">
            <a href="https://codepen.io/fharewood/full/OJbvOzQ" target="_blank" rel="noopener noreferrer" ><img src="https://github.com/hexachordal/codePenLib/blob/main/quote-maker.png?raw=true"></img><h6>Quote Maker</h6></a>
          </div>
        </div>
      </section>
      <section id="contact">
        <h1>Contact me</h1>
        <div id="contact-links">
          <a href="https://github.com/hexachordal" target="_blank" rel="noopener noreferrer">Github</a>
          <a id="profile-link" href="https://codepen.io/fharewood/pens/public" target="_blank" rel="noopener noreferrer">Codepen</a>
          <a href="https://www.linkedin.com/in/francois-harewood-8b2b4b3a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
      <div id="stars">
        <h1 id="sOne" className="star"></h1>
        <h1 id="sTwo" className="star"></h1>
        <h1 id="sThree" className="star"></h1>
        <h1 id="sFour" className="star"></h1>
        <h1 id="sFive" className="star"></h1>
        <h1 id="sSix" className="star"></h1>
        <h1 id="sSeven" className="star"></h1>
      </div>
      <div id="clouds">
        <h1 id="cOne" className="cloud"></h1>
        <h1 id="cTwo" className="cloud"></h1>
        <h1 id="cThree" className="cloud"></h1>
        <h1 id="cFour" className="cloud"></h1>
        <h1 id="cFive" className="cloud"></h1>
        <h1 id="cSix" className="cloud"></h1>
        <h1 id="cSeven" className="cloud"></h1>
        <h1 id="cEight" className="cloud"></h1>
        <h1 id="cNine" className="cloud"></h1>
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
