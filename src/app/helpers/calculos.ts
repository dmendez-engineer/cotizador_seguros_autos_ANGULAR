export function diferenciaYear(year:number){

    return new Date().getFullYear()-year;
}
export function calculoMarca(marca:string){

  let incremento=0;

  switch(marca){
      case "1":
        incremento=1.3;
        break;
      case "2":
        incremento=1.15;
        break;
      case "2":
        incremento=1.05;
        break;
      default:
        break;
  }
  return incremento;
}
export function calculoPlan(plan:string){
  return (plan=="1")?1.28:1.50;
}

export function formatearDinero(cantidad:number){
  return cantidad.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
  });
}
