import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const cards = [
    { title: "React", text: "A JavaScript library for building UIs." },
    { title: "Bootstrap", text: "CSS framework for responsive design." },
    { title: "Vite", text: "Fast build tool for modern web apps." }
  ];

  return (
    <div className="container mt-5">

      {}
      <div className="card shadow p-4">

        <h2 className="text-center mb-4">
          Card-Based Layout Using Bootstrap
        </h2>

        <div className="row justify-content-center">
          {cards.map((card, index) => (
            <div
              className="col-md-4 mb-4 d-flex justify-content-center"
              key={index}
            >
              <div className="card shadow" style={{ width: "18rem" }}>
                <div className="card-body text-center">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
