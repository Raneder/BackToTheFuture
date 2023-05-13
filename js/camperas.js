function calPrecioFinalCam(){

    // en cantCam almacenamos  la cantidad de camperas que ingresó el fanático
   let cantCam = document.getElementById("cantCamperas").value;

   // en porDes almacenamos el porcentaje de descuento que ingresó el fanático
   let porDes = document.getElementById("porDescuento").value;

   // en descuento almacenamos los pesos totales a descontar
   let descuento = (cantCam*10000) * porDes/100;

   // en precioTotal esta el valor de las remeras por cantidad menos el descuento en pesos
   let precioTotal = (cantCam*10000) - descuento;

   //modificando dinamicamente el html para colocar el precio total en la pantalla
   let valorTotal= document.getElementById("valorTotal").value=precioTotal;

} 