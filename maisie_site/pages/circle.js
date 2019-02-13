import Circle from '../modules/circle/index.js';
import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import Question from '../modules/circle/components/question.js';

import DATA from '../modules/circle/dummy_data.js';

export default function CirclePage({query}) {
  return(
    <div className="circle">
      <Question />
      <Header />
      <Circle d={DATA} />
      <Footer />
    </div>
  )
}

CirclePage.getInitialProps = async ({query}) => {
  return {query}
}
