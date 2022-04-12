import Cave3 from '../assets/img/cave1.JPG';
import Media from '../assets/img/report.jpg';
import Team from '../assets/img/team.jpg';
import Kontakt from '../assets/img/kontakt.JPG';
import Polecane from '../assets/img/polecane.JPG';

const columns = [
  {
    label: 'Wyprawy',
    id: 'wyprawy',
    link: '/wyprawy',
    img: Cave3,
  },
  {
    label: 'Kim jesteśmy',
    id: 'kim-jestesmy',
    link: '/kim-jestesmy',
    img: Team,
  },
  {
    label: 'Polecane',
    id: 'przyjaciele',
    link: '/przyjaciele',
    img: Polecane,
  },
  {
    label: 'Kontakt',
    id: 'kontakt',
    link: '/kontakt',
    img: Kontakt,
  },
  {
    label: 'Dla mediów',
    id: 'forMedia',
    link: '/dla-mediow',
    img: Media,
  },
];

export default columns;
