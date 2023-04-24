import imageFour from '../../images/image4.png';
export default function Home() {
  return (
    <>
      <div className="homepage-styling">
        <div>
          <h1>Duckenson Dodor</h1>
          <p>
            Welcome to my wonderful <strong>Portfolio</strong> Website. I hope you like what you see. There is a lot
            that goes into building a <strong>website</strong> like this. I have enjoyed every second spent on this
            website. After browsing please do not hesitate to send me a message using this contact section for any
            question that you may have. Thank you!
          </p>
        </div>

        <img src={imageFour} alt="Duckenson Dodor" className="hero-image" />
      </div>
    </>
  );
}
