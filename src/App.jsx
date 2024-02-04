import HeaderNew from './components/Header/HeaderNew.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import { CORE_CONCEPTS_DATA } from './data.js';
import TabButtons from './components/TabButtons/TabButtons.jsx';
import { useState } from 'react';
import {EXAMPLES} from './data.js'

function App() {

  const[initialBanner, setInitialbanner ]  = useState('')

  function enchantOnClick(name){
    console.log('Clicked on:', name);
    setInitialbanner(name)
    console.log('this is '+ initialBanner)
  }

  let tabContent = <p>please select a component</p>
  if(initialBanner){
    tabContent = <div id="tab-content">
    <h3>{EXAMPLES[initialBanner].title}</h3>
    <p>{EXAMPLES[initialBanner].description}</p>
    <pre>
      <code>{EXAMPLES[initialBanner].code}</code>
    </pre>
  </div>
  }
  return (
    <div>
      <HeaderNew/>
      <main>
        <section id="core-concepts">
          <h2> Core Concepts </h2>
            <ul>
            {CORE_CONCEPTS_DATA.map((item) => (<CoreConcepts key={item.title} {...item }/>))}
            </ul>
        </section>
        <section id='examples'>
          <h2> Examples </h2>
          <menu>
          <TabButtons isActive={initialBanner === 'components' } onSelect={() => enchantOnClick("components")}> Component </TabButtons>
          <TabButtons isActive={initialBanner === 'jsx' } onSelect={() => enchantOnClick("jsx")}> JSX </TabButtons>
          <TabButtons isActive={initialBanner === 'props' } onSelect={() => enchantOnClick("props")}> Props </TabButtons>
          <TabButtons isActive={initialBanner === 'state' } onSelect={() => enchantOnClick("state")}> States </TabButtons>

          </menu>
          {tabContent}  
        </section>
      </main>
    </div>
  );
}

export default App;
