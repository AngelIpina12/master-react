export const SaveInStorage = (key, element) => {
    // Conseguir los elementos que ya tenemos en localStorage
    let elements = JSON.parse(localStorage.getItem(key));
    // Comprobar si es un array
    if(Array.isArray(elements)){
      // Añadir dentro del array un nuevo elemento
      elements.push(element);
    }else{
      // Crear un array con una nueva peli
      elements = [element];
    }
    // Guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(elements))
    // Devolver objeto guardado
    return element;
  }