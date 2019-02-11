import withPageNoSide from '../shared/withPageNoSide.js';
import Circle from '../modules/circle/index.js';

export default function Circles({query}) { return withPageNoSide(<Circle />, "circle", query.id ? query.id : "", false);}

Circles.getInitialProps = async ({query}) => {
  return {query}
}
