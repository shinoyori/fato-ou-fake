import { EDU } from "../data/education";
import { MC } from "../data/methods";

const paragraphStyle = {
    textAlign: "justify",
    marginBottom: "1.5rem", // Adds vertical spacing between paragraphs
    lineHeight: "1.6"       // Improves readability
  };

export default function EduSection({ method }) {
  const e  = EDU[method];
  const mc = MC[method];
  if (!e) return null;

  return (
    <div className="edu-section">
      <hr className="divider bold" />
      <div className="edu-header">
        <div>
          <div className="section-label">
            <span style={{ background: mc.tag }}>APRENDA</span>
          </div>
          <h3>{e.title}</h3>
        </div>

        
      </div>

      <div>
        <p style={paragraphStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas diam a diam 
          tristique tristique. Pellentesque vehicula eleifend quam. In eget dolor varius, 
          facilisis odio fermentum, facilisis urna. Aliquam erat volutpat. Proin euismod 
          elit sit amet odio ultricies, vel mollis lectus commodo. Integer ut auctor leo. 
          Quisque porttitor nulla sit amet enim tempus, euismod maximus tellus pellentesque. 
          Nam ultrices elementum sollicitudin. Ut pharetra magna vitae aliquet commodo. 
          Sed semper mauris mi.
        </p>

        <p style={paragraphStyle}>
          Pellentesque eu massa eu est fringilla efficitur. Maecenas nisi nulla, fringilla 
          non sagittis ac, posuere et diam. Praesent elementum quam et sollicitudin 
          tristique. Nulla facilisi. Integer hendrerit tortor eget tincidunt efficitur. 
          Morbi finibus malesuada elit, vitae vehicula neque scelerisque et. Morbi nisi 
          odio, placerat ac mauris vel, egestas eleifend urna. Maecenas pretium tortor non 
          enim convallis finibus. Ut a mollis dui. Morbi semper turpis vitae turpis 
          sollicitudin, eu sodales lacus tincidunt. Morbi rutrum sodales sem eu vulputate. 
          Vivamus rhoncus, orci quis malesuada aliquet, lectus justo ornare magna, eget 
          commodo urna ante ac arcu. Pellentesque leo orci, placerat sit amet quam sit 
          amet, sodales accumsan est.
        </p>



      </div>
      <div className="edu-grid">

      
        {/*{e.cards.map((c, i) => (
          <div className="edu-card" key={i}>
            <span className="ec-tag" style={{ background: mc.tag }}>{c.tag}</span>
            <div className="ec-title">{c.title}</div>
            <div className="ec-text">{c.text}</div>
          </div>
        ))}*/}
      </div>
    </div>
  );
}
