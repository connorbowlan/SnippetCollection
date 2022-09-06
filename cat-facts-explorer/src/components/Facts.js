import { useEffect, useState } from "react";
import { getAllFacts } from "../apiHelper";

function Facts() {
     const [facts, setFacts] = useState([]);


     useEffect(() => {
          Promise.all([getAllFacts]).then(async () => {
               setFacts(await getAllFacts());
          });
     }, []);

     console.log(facts);

     return (
          <div>
               <h2>Here are some cool cat facts from the API!</h2>
               {
                    facts.map((item) =>
                         <section key={item.fact}>
                              {item.fact}
                         </section>
                    )
               }
          </div>
     );
}

export default Facts;