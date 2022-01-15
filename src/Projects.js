import './Projects.css';

function Projects() {

  return (
    
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
  );
}

export default Projects;
