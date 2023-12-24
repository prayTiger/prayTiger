

var animation = bodymovin.loadAnimation({
    container: document.getElementById('index_bg'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://raw.githubusercontent.com/prayTiger/Json/main/index.json'

});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('test'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://raw.githubusercontent.com/prayTiger/Json/main/tudi5-1.json'

});

/*土地公*/



var animation = lottie.loadAnimation({
    container: document.getElementById('tudi_bg'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    name: 'tudi4',
    path: 'https://raw.githubusercontent.com/prayTiger/Json/main/tudi4.json'
});

let click = 0;
function Previous() {
    // lottie.destroy();
    click--;
    console.log("click=%d", click);
    switchPage();
}
    
function Next() {
    // lottie.destroy();
    click++;
    console.log("click=%d", click);
    switchPage();
}

function switchPage(){
    switch(click){
        case 0 :{
            lottie.destroy('tudi4-2');
            break;
        }
        case 1 :{
            // lottie.destroy('tudi4-3');
            lottie.loadAnimation({
            container: document.getElementById('tudi_main'),
            rederer: 'svg',
            loop: false,
            autoplay: false,
            name: 'tudi4-1',
            path: 'https://raw.githubusercontent.com/prayTiger/Json/main/tudi4-1.json'
            });
            lottie.play(); 

            break;
        }
        case 2 :{
            lottie.destroy('tudi4-1');
            lottie.loadAnimation({
            container: document.getElementById('tudi_main'),
            rederer: 'svg',
            loop: false,
            autoplay: false,
            name: 'tudi4-2',
            path: 'https://raw.githubusercontent.com/prayTiger/Json/main/tudi4-2.json'
            });
            lottie.play(); 
            break;
        }
        case 3 :{
            lottie.destroy('tudi4-2');
            lottie.destroy('tudi4');
            lottie.loadAnimation({
            container: document.getElementById('tudi_bg'),
            rederer: 'svg',
            loop: false,
            autoplay: false,
            name: 'tudi5',
            path: 'https://raw.githubusercontent.com/prayTiger/Json/main/tudi5.json'
            });
            lottie.play(); 
            lottie.loadAnimation({
                container: document.getElementById('tudi_main'),
                rederer: 'svg',
                loop: false,
                autoplay: false,
                name: 'tudi5-1',
                path: 'https://raw.githubusercontent.com/prayTiger/Json/main/tudi5-1.json'
                });
                lottie.play(); 
                break;
            break;
        }
        case 4 :{
            
            
            // lottie.loadAnimation({
            // container: document.getElementById('tudi_main'),
            // rederer: 'svg',
            // loop: false,
            // autoplay: false,
            // name: 'tudi5-1',
            // path: 'https://raw.githubusercontent.com/prayTiger/Json/main/tudi5-1.json'
            // });
            // lottie.play(); 
            // break;
        }
        // case 5 :{
        //     lottie.destroy('tudi5-2');
            
            
        //     break;
        // }
     }
 }





/*淡出效果*/
    window.addEventListener('scroll', reveal);
  
    function reveal(){
        var reveals = document.querySelectorAll('.reveal');
  
        for(var i = 0; i < reveals.length; i++){
  
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;
  
          if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
          }
          else{
            reveals[i].classList.remove('active');
          }
        }
      }