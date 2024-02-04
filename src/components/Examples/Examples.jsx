
import TabButtons from "./TabButtons"
import { useState } from 'react';
import { EXAMPLES } from "../../data";
import Section from "../Common/Section";
import Tabs from "../Common/Tabs";
export default function ExamplesAbstract(){


    const[initialBanner, setInitialbanner ]  = useState('')

    let tabContent = <p>please select a component</p>
    if(initialBanner){
      tabContent = <div id="tab-content">
      <h3>{EXAMPLES[initialBanner].title}</h3>
      <p>{EXAMPLES[initialBanner].description}</p>
      <pre>
        <code>{EXAMPLES[initialBanner].code}</code >
      </pre>
    </div>
    }


    function enchantOnClick(name){
        console.log('Clicked on:', name);
        setInitialbanner(name)
        console.log('this is '+ initialBanner)
      }
    return(
        <Section title='examples' id='examples'>
    
          <Tabs buttonsContaineer = "menu" buttons={<><TabButtons isActive={initialBanner === 'components' } onClick={() => enchantOnClick("components")}> Component </TabButtons>
          <TabButtons isActive={initialBanner === 'jsx' } onClick={() => enchantOnClick("jsx")}> JSX </TabButtons>
          <TabButtons isActive={initialBanner === 'props' } onClick={() => enchantOnClick("props")}> Props </TabButtons>
          <TabButtons isActive={initialBanner === 'state' } onClick={() => enchantOnClick("state")}> States </TabButtons>
</>}>
          {tabContent} 
          </Tabs>
          <menu>
          
          </menu>
           
        </Section>
    )
}