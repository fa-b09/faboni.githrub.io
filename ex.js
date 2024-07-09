const data = new Date()
 var hoje = data.getDate().toString().padStart(2,'0')
 var mes = String(data.getMonth()+ 1).padStart(2,'0')
 var ano = data.getFullYear()
const  resultado = document.getElementById('dia').innerHTML= `<h1> Resultado da concretagem do dia :${hoje}/${mes}/${ano}`
 


function calcular(){
    alert('digite numero sem ponto e sem virgula')
    
    btncalc = document.getElementById('calcular')
    let valor1 = document.getElementById('valor1').value
    
    let prensa = 9.8066
    let areacp = 7854
    let fck = (valor1 * prensa)/areacp
    let resposta = document.getElementById( 'res')
    resposta.innerHTML=`o resultado é ${fck.toFixed(2)} Mpa`
    if(fck >= 30){
        document.getElementById( 'res').style.color = 'green'
        
    }else{
        document.getElementById('res').style.color = 'red'
    }
}   
   

