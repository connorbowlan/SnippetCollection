import { useState } from "react";
import { getSingleFact } from "../apiHelper";

function Fact() {
     // Required so we can use the useEffect() hook.
     const [fact, setFact] = useState(() => {
          Promise.all([getSingleFact]).then(async () => {
               setFact(await getSingleFact());
          });
     });

     // No need to await this although getSingleFact()
     // is defined as asynchronous?
     // Returns a promise.

     // useEffect() is causing the API to hit repeatedly.
     function getNewFact() {
          Promise.all([getSingleFact]).then(async () => {
               setFact(await getSingleFact());
          });
     }

     // Adding [] as a second argument to useEffect() stopped it from hitting repeatedly.

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