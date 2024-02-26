/*
window.addEventListener("load", function (event) {
    let imss = localStorage.getItem('imss');
        let sat = localStorage.getItem('sat');
      
        let imssArray = JSON.parse(imss);
        let satArray = JSON.parse(sat);

        console.log(imssArray)
        console.log(satArray)
      
        const imssDivs = ['imss-1','imss-2','imss-3','imss-4']
        const satDivs = ['sat-1','sat-2','sat-3','sat-4']
      
        //Pintar imss
        for(let i=0; i<imssArray.length; i++){
            console.log(imssDivs[i], imssArray[i])
          document.getElementById(imssDivs[i]).innerHTML = imssArray[i]
        }
      
        //Pintar sat
        for(let i=0; i<satArray.length; i++){
          document.getElementById(satDivs[i]).innerHTML = satArray[i]
        }
  });
    
      */  

function pintarPantalla(){
    let imss = localStorage.getItem('imss');
    let sat = localStorage.getItem('sat');
    let mesa = localStorage.getItem('mesaSat');

    let imssArray = JSON.parse(imss);
    let satArray = JSON.parse(sat);

    console.log(imssArray)
    console.log(satArray)
  
    const imssDivs = ['imss-1','imss-2','imss-3','imss-4']
    const satDivs = ['sat-1','sat-2','sat-3','sat-4']
  
    //Pintar imss
    for(let i=0; i<imssArray.length; i++){
        console.log(imssDivs[i], imssArray[i])
      document.getElementById(imssDivs[i]).innerHTML = 'IMSS0' + imssArray[i]
    }
  
    //Pintar sat
    for(let i=0; i<satArray.length; i++){
      document.getElementById(satDivs[i]).innerHTML = 'SAT0'+satArray[i]
    }

    //Pintar mesa actual sat
    document.getElementById('numMesa').innerHTML = 'Mesa ' +mesa; 
}



  
 setInterval(pintarPantalla, 3000); // 2000 milisegundos = 2 segundos