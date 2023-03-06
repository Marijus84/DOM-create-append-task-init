/* ------------------------------ TASK -----------------------------------
Vartotojui atėjus į puslapį, iš cars.json failo yra paimamas automobilių sąrašas. 
Kiekvienam automobilių gamintojui (brand), yra kviečiama 'generateCarCard' funkcija. 

Parašykite JS funkcijos 'generateCarCard kodą, 
kuris sukurs kiekvienam automobilių gamintojui (brand) naują kortelę, kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.
Koretelės stilizavimui galit naudoti 'car-card' klasę. 
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const outputDiv = document.querySelector("#output");

async function getCarData() {
  try {
    const res = await fetch(ENDPOINT);
    const carsData = await res.json();
    return carsData;
  } catch (error) {
    console.log(error);
  }
}

const carData = await getCarData();

carData.forEach((carUnit) => generateCarCard(carUnit));

function generateCarCard(car) {
  //! your JS code  goes here
}
