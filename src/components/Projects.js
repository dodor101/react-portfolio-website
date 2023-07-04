import React from 'react';

export const Projects = ({ projects }) => {
  return (
    <>

      <h2 className="portfolio-head">Portfolio Websites</h2>
      <div className="portfolio-div">
        {projects.map(({ id, title, liveApp, image, gitHubRpo, alt, description }) => {
          return (
            <>
              <div key={id}>
                <div className="my-images">
                  <div className="one-image">
                    <h3>{title}</h3>
                    <a href={liveApp} target="_blank " rel="noreferrer">
                      <img src={image} alt={alt} />
                    </a>
                    <p className="image-card-p">{description}</p>
                    <small>
                      <a href={gitHubRpo} target="_blank" rel="noreferrer">
                        View Repository
                      </a>
                    </small>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
