export async function cargarData(file){
  let newProducto = [];
  let productos = await fetch(file)
  if (productos) {
    productos = await productos.json()
    newProducto.push(productos)
  }
  return newProducto;
}
