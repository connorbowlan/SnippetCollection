const apiUrl = 'https://catfact.ninja/';

export async function getSingleFact()
{
     try {
          const response = await fetch(`${apiUrl}/fact/`);
          const result = await response.json();

          return result.fact;
     } catch (error) {
          console.error(error);
     }
}