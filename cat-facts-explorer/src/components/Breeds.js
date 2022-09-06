import { useEffect, useState } from "react";
import { getAllBreeds } from "../apiHelper";

function Breeds() {
     const [breeds, setBreeds] = useState([]);

     useEffect(() => {
          Promise.all([getAllBreeds]).then(async () => {
               setBreeds(await getAllBreeds());
          });
     }, []);

     return (
          <div>
               <h2>Check out some information on these breeds!</h2>
               {
                    breeds.map((item) =>
                         <section key={item.breed}>
                              <h3>{item.breed}</h3>
                              <div><b>Country:</b> {item.country}</div>                              
                              <div><b>Origin:</b> {item.origin}</div>                              
                              <div><b>Coat:</b> {item.coat}</div>                              
                              <div><b>Pattern:</b> {item.pattern}</div>                              
                         </section>
                    )
               }
          </div>
     );
}

export default Breeds;