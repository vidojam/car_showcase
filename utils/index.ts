export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '914811835fmsh0eb0368c8392ea8p12e6a1jsnc18491dee0da',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
  headers: headers,
 });

 const result = await response.json();

 return result;
}