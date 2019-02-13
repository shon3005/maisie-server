import Circle from '../modules/circle/index.js';
import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import DATA from '../modules/circle/dummy_data.js';

export default function CirclePage({query}) {
  return(
    <div className="circle">
      <Header />
      <Circle d={DATA} />
      <Footer />
    </div>
  )
}

CirclePage.getInitialProps = async ({query}) => {
  return {query}
}
