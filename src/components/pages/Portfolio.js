import noteTaker from '../../images/note-taker.png';
import homeCooked from '../../images/homecooked.png';
import activityFinder from '../../images/activity-finder.png';
import diaryImage from '../../images/diary-app.png';

export default function Portfolio() {
  return (
    <div>
      <div>
        <h2 className="portfolio-head">Portfolio Websites</h2>
      </div>
      <div className="my-images">
        <div className="one-image">
          <h3>Note Taker</h3>
          <a href="https://best-note-taker.herokuapp.com/" target="_blank " rel="noreferrer">
            <img src={noteTaker} alt="Note taker app screenshot" />
          </a>
          <p className="image-card-p">This is a Note Taker App</p>
          <small>
            <a href="https://github.com/dodor101/note-taker" target="_blank" rel="noreferrer">
              View Repository
            </a>
          </small>
        </div>
        <div className="one-image">
          <h3>Homecooked</h3>
          <a href="https://homecooked.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={homeCooked} alt="homecooked screenshot" />
          </a>
          <p className="image-card-p">Homecooked is a Recipe Saver App </p>
          <small>
            <a
              href="https://github.com/Solomon-Coding/Homecooked.git/"
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>
          </small>
        </div>
        <div className="one-image">
          <h3>Activity Finder</h3>
          <a href="https://dhoneck.github.io/activity-finder/" target="_blank " rel="noreferrer">
            <img src={activityFinder} alt="Activity finder screenshot" />
          </a>
          <p className="image-card-p">Activity Finder App</p>
          <small>
            <a href="https://github.com/dhoneck/activity-finder" target="_blank" rel="noreferrer">
              View Repository
            </a>
          </small>
        </div>
        <div className="one-image">
          <h3>Activity Finder</h3>
          <a href="https://diary-express.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={diaryImage} alt="Diary app screenshot" />
          </a>
          <p className="image-card-p">Diary App</p>
          <small>
            <a href="https://github.com/dodor101/diary-express-app" target="_blank" rel="noreferrer">
              View Repository
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}
