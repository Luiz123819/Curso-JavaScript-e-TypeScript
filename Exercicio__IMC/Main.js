function Calcular(){
let Peso = parseFloat(document.getElementById('Peso').value) ;
let Altura= parseFloat(document.getElementById('Altura').value);
let Result = Peso / (Altura * Altura);
//Verifica se campos são vazios e envia uma menssagem
// if( document.getElementById('Peso').value === ""){
//     document.getElementById('Resultado').innerHTML=` <h1 style="Background:#32CD32;"> Peso Inválido</h1> `;
// } else if(document.getElementById('Altura').value === ""){
//     document.getElementById('Resultado').innerHTML=` <h1 style="Background:#32CD32;">Altura Inválida</h1> `;
// }
//Verifica se é Falso ou Verdadeiro|| Se a conversão deu certo ou não || Se deu passa || se não deu executa || só da true se o caracter for convertido para number 
if(!Peso){
    document.getElementById('Resultado').innerHTML=` <h1 style="Background:#C0C0C0;">PESO inválido</h1>`;
} else if(!Altura){
    document.getElementById('Resultado').innerHTML=` <h1 style="Background:#C0C0C0;">ALTURA inválida</h1>`;
}
//Verifica IMC e da a menssagem de acordo com seu peso minímo e máximo
if (Result < 18.5){
  document.getElementById('Resultado').innerHTML=` <h1 style="Background:#32CD32;"> Imc: ${Result.toFixed(2)} - Abaixo do peso </h1> `;
   
} else if(Result >= 18.5 && Result <= 24.9){
    document.getElementById('Resultado').innerHTML=` <h1 style="Background:	#0000CD;"> Imc: ${Result.toFixed(2)} - Peso Normal </h1> `;
    
}
else if(Result >= 25 && Result <= 29.9){
    document.getElementById('Resultado').innerHTML=` <h1 style="Background:#FF00FF;"> Imc: ${Result.toFixed(2)} - Sobrepeso </h1> `;
}
else if(Result >= 30 && Result <= 34.9){
    document.getElementById('Resultado').innerHTML=` <h1 style="Background:#FF1493;"> Imc: ${Result.toFixed(2)} - Obesidade Grau 1 </h1> `;
   
}
else if(Result >= 35 && Result <= 39.9){
    document.getElementById('Resultado').innerHTML=` <h1 style="Background:#FF8C00;"> Imc: ${Result.toFixed(2)} - Obesidade Grau 2 </h1> `;
   
}
else if(Result > 40){
    document.getElementById('Resultado').innerHTML=` <h1 style="Background:	#FF0000;"> Imc: ${Result.toFixed(2)} - Obesidade Grau 3 </h1> `;
}
}
function Clear(){
    document.getElementById('Resultado').innerHTML = '';
    document.getElementById('Altura').value='';
    document.getElementById('Peso').value='';
}