const fs = require("fs").promises;

createFiles();

async function createFiles() {
  let data = await fs.readFile("./files/Cidades.json");
  const cities = JSON.parse(data);

  data = await fs.readFile("./files/Estados.json");
  const states = JSON.parse(data);
  
  for (state of states){
     const stateCities = cities.filter(city => city.Estado === state.ID);
     //Criando arquivos Json de acordo com cada Sigla dos estados
     await fs.writeFile(`./states/${state.Sigla}.json`, JSON.stringify(stateCities));

  }
  console.log(states);
}