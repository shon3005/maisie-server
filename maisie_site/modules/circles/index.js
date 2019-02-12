import Blank from './components/blank.js';
import Circles from './components/circles/index.js';

export default (props) => props.blank ? <Blank /> : <Circles requests={2} />
