import DUMMY_DATA from './components/DUMMY_DATA.js';
import Card from './components/card.js';

export default () => DUMMY_DATA.map((c, index) => <Card status={"member"} data={c} key={index} /> )
