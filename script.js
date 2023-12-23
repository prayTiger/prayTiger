var animation = bodymovin.loadAnimation({
    container: document.getElementById('lantern'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://raw.githubusercontent.com/prayTiger/Json/main/lanterns.json'

});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('index_bg'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://raw.githubusercontent.com/prayTiger/Json/main/index.json'

});

/*土地公*/





let page = 0;
function Previous() {
    // lottie.destroy();
    page--;
    console.log("page=%d", page);
    switchPage();
}
    
function Next() {
    // lottie.destroy();
    page++;
    console.log("page=%d", page);
    
    switchPage();
}

function switchPage(){
    switch(page){
        case 0 :{
            lottie.destroy('tudi4-2');
            
            
            break;
        }
        case 1 :{
            lottie.destroy('tudi4-3');
            lottie.loadAnimation({
            container: document.getElementById('tudi4-2'),
            rederer: 'svg',
            loop: false,
            autoplay: false,
            name: 'tudi4-2',
            path: 'https://raw.githubusercontent.com/prayTiger/Json/main/tudi4-2.json'
            });
            lottie.play(); 

            break;
        }
        case 2 :{
            lottie.destroy('tudi4-2');
            lottie.destroy('tudi5-1');
            lottie.loadAnimation({
            container: document.getElementById('tudi4-3'),
            rederer: 'svg',
            loop: false,
            autoplay: false,
            name: 'tudi4-3',
            path: 'https://raw.githubusercontent.com/prayTiger/Json/main/tudi4-3.json'
            });
            lottie.play(); 
            break;
        }
        case 3 :{
            lottie.destroy('tudi4-3');
            lottie.destroy('tudi5-2');
            lottie.loadAnimation({
            container: document.getElementById('tudi5-1'),
            rederer: 'svg',
            loop: false,
            autoplay: false,
            name: 'tudi5-1',
            path: 'https://raw.githubusercontent.com/prayTiger/Json/main/tudi5-1.json'
            });
            lottie.play(); 
            break;
        }
        case 4 :{
            lottie.destroy('tudi5-1');
            lottie.destroy('tudi5-2');
            lottie.loadAnimation({
            container: document.getElementById('tudi5-2'),
            rederer: 'svg',
            loop: false,
            autoplay: false,
            name: 'tudi5-2',
            path: 'https://raw.githubusercontent.com/prayTiger/Json/main/tudi5-1.json'
            });
            lottie.play(); 
            break;
        }
        case 5 :{
            lottie.destroy('tudi5-2');
            
            
            break;
        }
     }
 }

let container = document.getElementById('tudi4-1')
let animationCompleted = true;
    var animation = lottie.loadAnimation({
        container: container,
        rederer: 'svg',
        loop: true,
        autoplay: true,
        name: 'tudi4-1',
        path: 'https://raw.githubusercontent.com/prayTiger/Json/main/tudi4-1.json'
    });

    // var play = true
    // function SwichAndStart(){
    //     if(play){
    //         lottie.play();
    //         play = false;
    //         console.log("paly=flase");
    //     }else{
    //         lottie.destroy('tudi4-2');
    //         play = true;
    //         console.log("play=true");
    //         lottie.loadAnimation({
    //             container: document.getElementById('tudi4-2'),
    //             rederer:'svg',
    //             loop: false,
    //             autoplay: false,
    //             name: 'tudi4-3',
    //             path: 'https://raw.githubusercontent.com/prayTiger/Json/main/tudi4-3.json'
    //         });
    //     }
    //   };




    // var animation = bodymovin.loadAnimation({
    //     container: document.getElementById('tudi4-2'),
    //     rederer: 'svg',
    //     loop: false,
    //     autoplay: false,
    //     name: 'tudi4-2',
    //     path: 'https://raw.githubusercontent.com/prayTiger/Json/main/tudi4-2.json'
    // });

    // var animation = bodymovin.loadAnimation({
    //     container: document.getElementById('tudi4-3'),
    //     rederer: 'svg',
    //     loop: false,
    //     autoplay: false,
    //     path: 'https://raw.githubusercontent.com/prayTiger/Json/main/tudi4-3.json'
    // });
