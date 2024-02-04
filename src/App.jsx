import HeaderNew from './components/Header/HeaderNew.jsx';
import ExamplesAbstract from './components/Examples/Examples.jsx';

import CoreConceptsAbstract from './components/CoreConcepts/CoreConceptsAbstract.jsx';


function App() {    
  return (
    <>
      <HeaderNew/>
      <main>
        <CoreConceptsAbstract/>
        <ExamplesAbstract/>
        </main>
    </>
  );
}

export default App;
