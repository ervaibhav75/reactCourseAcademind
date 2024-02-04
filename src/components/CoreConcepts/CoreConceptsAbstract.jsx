import CoreConcepts from "./CoreConcepts"
import { CORE_CONCEPTS_DATA } from "../../data"

export default function CoreConceptsAbstract(){ 
    return(
        <section id="core-concepts">
            <h2> Core Concepts </h2>
            <ul>
                {CORE_CONCEPTS_DATA.map((item) => (<CoreConcepts key={item.title} {...item }/>))}
            </ul>
        </section>)
}