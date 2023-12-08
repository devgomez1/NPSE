import "../App.css";

function BigCards({ title, article }) {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row">
            <div className="col-4 d-flex justify-content-center align-items-center">
              <h2 className="reset-margin">{title}</h2>
            </div>
            <div className="col-8 d-flex justify-content-center align-items-center">
              <p>{article}</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-5" />
    </div>
  );
}

export default BigCards;
