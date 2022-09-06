import { useState } from "react";
import { getSingleFact } from "../apiHelper";

function Fact() {
     const [fact, setFact] = useState(() => {
          Promise.all([getSingleFact]).then(async () => {
               setFact(await getSingleFact());
          });
     });

     function getNewFact() {
          Promise.all([getSingleFact]).then(async () => {
               setFact(await getSingleFact());
          });
     }

     return (
          <div>
               <section>
                    <p>{fact}</p>
               </section>
               <button className="btn btn-primary" onClick={getNewFact}>Show me a new fact</button>
          </div>
     );
}

export default Fact;