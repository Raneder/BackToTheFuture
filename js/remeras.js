function calPrecioFinalRem(){

    // en cantRem almacenamos  la cantidad de remeras que ingresó el fanático
   let cantRem = document.getElementById("cantRemeras").value;

   // en porDes almacenamos el porcentaje de descuento que ingresó el fanático
   let porDes = document.getElementById("porDescuento").value;

   // en descuento almacenamos los pesos totales a descontar
   let descuento = (cantRem*5000) * porDes/100;

   // en precioTotal esta el valor de las remeras por cantidad menos el descuento en pesos
   let precioTotal = (cantRem*5000) - descuento;

   //modificando dinamicamente el html para colocar el precio total en la pantalla
   let valorTotal= document.getElementById("valorTotal").value=precioTotal;

} 