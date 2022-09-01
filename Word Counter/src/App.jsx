import { useState } from "react";

function App() {
  const [count, setCount] = useState("");

  const clickhere = (event) => {
    setCount(event.target.value);


  }
  const Uppercase = () => {
    let word = count.toUpperCase();
    setCount(word);

  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
            Bootstrap
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <form>
        <div className="form-group container mx-auto ">
          <h3 className="mb-3 mt-3 text-center font-weight-bold">
            Uppercase And Word Counter
          </h3>
          <textarea className="form-control mx-auto" rows="5" id="word"
            style={
              { width: "80%" }
            } value={count} onChange={clickhere}></textarea>
          <div className="col-md-12 text-center m-3">
            <button type="button" className="btn btn-primary" onClick={Uppercase}>Uppercase</button>

          </div>
          <div className="text-center mx-auto">
            <div className="row ">
              <div className="col-sm-6">
                <div className="card " style={{ border: "none" }}>
                  <div className="card-body ">
                    <h1 class="card-title">Total Character</h1>
                    <h3 className="card-title">{count.length}</h3>

                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card " style={{ border: "none" }}>
                  <div className="card-body " >
                    <h1 class="card-title">Total Word</h1>
                    <h3 className="card-title">{count.split(" ").length}</h3>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </form>
    </div>
  );
}

export default App;
