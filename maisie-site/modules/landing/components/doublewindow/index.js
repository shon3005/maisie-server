import Partners from './components/partners.js';
import Questions from './components/questions.js';

export default () =>
  <div className="doublewindow">
    <div className="doublewindow__main row-c-c">
      <Questions />
      <div className="doublewindow__main-spacer" />
      <Partners />
    </div>
  </div>
