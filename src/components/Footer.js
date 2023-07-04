import { FaGithub, FaLinkedin,  } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <h1>
        <a href="https://github.com/dodor101" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/duckenson-dodor-394621254/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </h1>
    </div>
  );

}
