import withPage from '../shared/withPage.js';
import Circle from '../modules/circle/index.js';

export default function Circles({query}) { return withPage(<Circle />, "circle", query.id ? query.id : "");}

Circles.getInitialProps = async ({query}) => {
  return {query}
}
