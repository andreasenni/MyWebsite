const draggables = document.querySelectorAll(".draggable");

draggables.forEach((draggable) => {
  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  draggable.addEventListener("mousedown", (e) => {
    isDragging = true;
    draggable.style.cursor = "grabbing";
    offsetX = e.clientX - draggable.offsetLeft;
    offsetY = e.clientY - draggable.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    // Calcola le nuove posizioni
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    // Calcola il limite massimo (in base alle dimensioni dell'elemento)
    const maxX = window.innerWidth - draggable.offsetWidth;
    const maxY = window.innerHeight - draggable.offsetHeight;

    // Limita (clampa) le posizioni tra 0 e il massimo consentito
    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    // Aggiorna la posizione dell'elemento
    draggable.style.left = `${newX}px`;
    draggable.style.top = `${newY}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    draggable.style.cursor = "grab";
  });

  // Supporto per dispositivi touch
  draggable.addEventListener("touchstart", (e) => {
    isDragging = true;
    const touch = e.touches[0];
    offsetX = touch.clientX - draggable.offsetLeft;
    offsetY = touch.clientY - draggable.offsetTop;
  });

  document.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Impedisce lo scroll della pagina durante il drag
  
    const touch = e.touches[0];
    let newX = touch.clientX - offsetX;
    let newY = touch.clientY - offsetY;
  
    const maxX = window.innerWidth - draggable.offsetWidth;
    const maxY = window.innerHeight - draggable.offsetHeight;
  
    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));
  
    draggable.style.left = `${newX}px`;
    draggable.style.top = `${newY}px`;
  }, { passive: false });
  

  document.addEventListener("touchend", () => {
    isDragging = false;
  });
});

window.addEventListener("load", () => {
  const draggables = document.querySelectorAll(".draggable");
  // Margine del 10% su ciascun lato
  const marginLeft = window.innerWidth * 0.1;
  const marginTop = window.innerHeight * 0.1;

  draggables.forEach((el) => {
    // Calcola l'area disponibile per posizionare l'elemento
    const availableWidth = window.innerWidth - 2 * marginLeft - el.offsetWidth;
    const availableHeight =
      window.innerHeight - 2 * marginTop - el.offsetHeight;

    // Genera posizioni casuali all'interno dell'area disponibile
    const randomLeft = marginLeft + Math.floor(Math.random() * availableWidth);
    const randomTop = marginTop + Math.floor(Math.random() * availableHeight);

    el.style.left = `${randomLeft}px`;
    el.style.top = `${randomTop}px`;
  });
});
