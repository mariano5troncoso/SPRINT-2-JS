const cardContainer = document.getElementById("card-template");

function crearCard(event) {
  return `
  <div class="card" style="width: 18rem;">
  <img src="${event.image}" class="card-img-top" alt="...">
  <div class="card-body text-white">
    <h5 class="card-title">${event.name}</h5>
    <p class="card-text">${event.description}</p>
    <a href="./assets/details.html" class="btn btn-primary">Details</a>
    </div>
  </div>`;
}
function mostrarCard(data) {
  let template = "";
  for (const event of data) {
    template += crearCard(event);
  }
  cardContainer.innerHTML += template;
}
mostrarCard(data.events);



function filtrarEventosFuturos(events) {
  const eventosFuturos = "";
      
     for (const event of events) {
        
       if (events.date > '2023-01-01') {
          eventosFuturos.push(events);
        }
         return eventosFuturos}
}
const eventosFuturos = filtrarEventosFuturos(data.events);

filtrarEventosFuturos(eventosFuturos);

for (const evento of eventosFuturos) {
  

  
 
console.log(eventosFuturos);
}