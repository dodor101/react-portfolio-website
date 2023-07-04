export default function Resume() {
  const styleCard = {
    width: ' 18rem',
  };
  return (
    <>
      <div>
        <h1 className="mt-5 mb-2 ">Resume</h1>
        <div className="card w-75 mx-auto bg-secondary " styles={styleCard.width}>
          <div className="card-body">
            <h5 className="card-title text-light">Front-End Proficiencies</h5>
            <ul className="list-group">
              <li className="list-group-item">Html</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">jQuery</li>
              <li className="list-group-item">Responsive Design</li>
              <li className="list-group-item">React</li>
              <li className="list-group-item">Bootstrap</li>
            </ul>
          </div>
        </div>
        <div className="card w-75 mx-auto mt-2 bg-secondary" styles={styleCard.width}>
          <div className="card-body">
            <h5 className="card-title text-light"> Back-End Proficiencies</h5>
            <ul className="list-group">
              <li className="list-group-item">NodeJs</li>
              <li className="list-group-item">ExpressJs</li>
              <li className="list-group-item">Graphql</li>
              <li className="list-group-item">jQuery</li>
              <li className="list-group-item">MySql</li>
              <li className="list-group-item">MongoDB</li>
              <li className="list-group-item">Postman</li>
            </ul>
          </div>
          <a href="https://docs.google.com/document/d/1fDb0PinjDHuc_--02G5cTlBzt33B_pxHV4lk_HGcWQE/edit#">
            <div className="resume-link">View Resume</div>
          </a>
        </div>
      </div>
    </>
  );
}
