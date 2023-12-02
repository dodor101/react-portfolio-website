import noteTaker from '../../images/note-taker.png';
import homeCooked from '../../images/homecooked.png';
import activityFinder from '../../images/activity-finder.png';
import diaryImage from '../../images/diary-app.png';
import crowdFunding from '../../images/crowd-funding.png';
import techBlog from '../../images/tech-blog.png';
import { Projects } from '../Projects';

const projects = [
  {
    id: 1,
    title: 'Note Taker',
    image: noteTaker,
    liveApp: 'https://diary-express.herokuapp.com/',
    gitHubRpo: 'https://github.com/dodor101/note-taker',
    alt: 'Note taker app screenshot',
    description: 'This is a Note Taker App',
  },
  {
    id: 2,
    title: 'Homecooked',
    image: homeCooked,
    liveApp: 'https://homecooked.herokuapp.com/',
    gitHubRpo: 'https://github.com/Solomon-Coding/Homecooked.git/',
    alt: 'homecooked screenshot',
    description: 'Homecooked is a Recipe Saver App',
  },
  //
  {
    id: 3,
    title: 'Activity Finder',
    image: activityFinder,
    liveApp: 'https://dhoneck.github.io/activity-finder/',
    gitHubRpo: 'https://github.com/dhoneck/activity-finder',
    alt: 'Activity finder screenshot',
    description: 'Activity Finder App',
  },
  {
    id: 4,
    title: 'Diary App',
    image: diaryImage,
    liveApp: 'https://best-note-taker.herokuapp.com/',
    gitHubRpo: 'https://github.com/dodor101/diary-express-app',
    alt: 'Diary app screenshot',
    description: 'Diary App',
  },
  {
    id: 5,
    title: 'Crowd Funding',
    image: crowdFunding,
    liveApp: 'https://crowd-funds-f151b23ec542.herokuapp.com',
    gitHubRpo: 'https://github.com/dodor101/crown-funding',
    alt: 'Get Funding',
    description: 'Get your amazing idea funded',
  },
  {
    id: 6,
    title: 'Tech Blog',
    image: techBlog,
    liveApp: 'https://tech-blog-best-e811fbc52e48.herokuapp.com/',
    gitHubRpo: 'https://github.com/dodor101/tech-blog',
    alt: 'tech blog',
    description: 'Your tech opinions matter',
  },
];

export default function Portfolio() {
  return <Projects projects={projects} />;
}
