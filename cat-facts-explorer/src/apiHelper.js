const apiUrl = 'https://catfact.ninja';

export async function getSingleFact() {
     try {
          const response = await fetch(`${apiUrl}/fact/`);
          const result = await response.json();

          return result.fact;
     } catch (error) {
          console.error('There was an error getting a single fact from the API.', error);
     }
}

export async function getAllFacts() {
     try {
          const response = await fetch(`${apiUrl}/facts/`);
          const result = await response.json();
          
          return result.data;
     } catch (error) {
          console.error('There was an error getting all facts from the API.', error);
     }
}