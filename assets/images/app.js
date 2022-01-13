new ClipboardJS('.emailbutton');
new ClipboardJS('.phonebutton');



$(window).bind('resize', function(e)
    {
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function()
    {
    this.location.reload(false);
     }, 200);
    });

    new fullpage('#fullpage',{
        licenseKey: '25AFB936-ACDD483B-B0032900-06099DCE',
        autoScrolling: true,
        navigation: true,
        onLeave: (origin, destination, direction) => {
            const section = destination.item;
            const title = section.querySelector('h1');
            const tl = new TimelineMax({delay: 0.5});
            tl.fromTo(title,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.5);

            if(destination.index === 0){const section = destination.item;
                const fleches = section.querySelector('#fleches');
                const velo = section.querySelector('.svg-velo');
                const titleh2 = section.querySelector('h2');
            
                tl.fromTo(velo,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0);
                tl.fromTo(fleches,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.25);
                tl.fromTo(titleh2,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.5);
            }     
            
            if(destination.index === 1){const section = destination.item;
                const head = section.querySelector('.headillustration');
                const pngvelo = section.querySelector('.pngvelo');
                const para1 = section.querySelector('p');
                const flechecopy = section.querySelector('.clicfleche');
                const textcopy = section.querySelector('.emailfleche');
                const flechetop = section.querySelector('.flechetop');
                const texttop = section.querySelector('.backtop');
                const cv = section.querySelector('.cvbutton');
                const emailbutton = section.querySelector('.emailbutton');
                const phonebutton = section.querySelector('.phonebutton');
                const circlep2 = section.querySelector('.circlep2');

                tl.fromTo(head,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0);
                tl.fromTo(pngvelo,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0);
                tl.fromTo(para1,2, {opacity: 0}, {opacity:1}, 1);
                tl.fromTo(flechecopy,2, {opacity: 0}, {opacity:1}, 1);
                tl.fromTo(textcopy,2, {opacity: 0}, {opacity:1}, 1);
                tl.fromTo(flechetop,2, {opacity: 0}, {opacity:1}, 1);
                tl.fromTo(texttop,2, {opacity: 0}, {opacity:1}, 1);
                tl.fromTo(cv,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.5);
                tl.fromTo(emailbutton,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.75);
                tl.fromTo(phonebutton,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.75);
                tl.fromTo(circlep2,2.5, {scale:0, transformOrigin: "center center"}, {scale:1, transformOrigin: "center center"}, 0.25);
                tl.fromTo('.circlep2', 25, {rotation: '0'}, {rotation: '360', ease:Linear.easeNone, repeat: -1, transformOrigin: "56% 48%"}, 0.5);
            }

            

            if(destination.index === 2){const section = destination.item;
                const pngvelo = section.querySelector('.pngvelo');
                const flechetop = section.querySelector('.flechetop');
                const texttop = section.querySelector('.backtop');
                const ligne = section.querySelector('.ligne');
                const dot = section.querySelector('.dot');
                const dot1 = section.querySelector('.dot1');
                const dot2 = section.querySelector('.dot2');
                const dot3 = section.querySelector('.dot3');
                const dot4 = section.querySelector('.dot4');
                const flechep4 = section.querySelector('.flechep4');
                const flechep3 = section.querySelector('.flechep3');
                const flechep2 = section.querySelector('.flechep2');
                const flechep1 = section.querySelector('.flechep1');
                const flechep = section.querySelector('.flechep');
                const bulleMJM = section.querySelector('.bulleMJM');
                const bulleND = section.querySelector('.bulleND');
                const bullealternance = section.querySelector('.bullealternance');
                const bullecore = section.querySelector('.bullecore');
                const bullealevels = section.querySelector('.bullealevels');

                tl.fromTo(pngvelo,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0);
                tl.fromTo(flechetop,2, {opacity: 0}, {opacity:1}, 1);
                tl.fromTo(texttop,2, {opacity: 0}, {opacity:1}, 1);
                tl.fromTo(ligne,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0);
                tl.fromTo(dot,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 1.25);
                tl.fromTo(dot1,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 1);
                tl.fromTo(dot2,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.75);
                tl.fromTo(dot3,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.5);
                tl.fromTo(dot4,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.25);
                tl.fromTo(flechep4,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.5);
                tl.fromTo(flechep3,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.75);
                tl.fromTo(flechep2,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 1);
                tl.fromTo(flechep1,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 1.25);
                tl.fromTo(flechep,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 1.5);
                tl.fromTo(bulleMJM,2, {opacity: 0}, {opacity:1}, 1.5);
                tl.fromTo(bulleND,2, {opacity: 0}, {opacity:1}, 1.5);
                tl.fromTo(bullealternance,2, {opacity: 0}, {opacity:1}, 1.5);
                tl.fromTo(bullecore,2, {opacity: 0}, {opacity:1}, 1.5);
                tl.fromTo(bullealevels,2, {opacity: 0}, {opacity:1}, 1.5);
                
            }

            if(destination.index === 3){const section = destination.item;
                const pngvelo = section.querySelector('.pngvelo');
                const flechetop = section.querySelector('.flechetop');
                const texttop = section.querySelector('.backtop');
                const Mcontainers = section.querySelector('.mcontainers');
                
                
                tl.fromTo(pngvelo,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0);
                tl.fromTo(flechetop,2, {opacity: 0}, {opacity:1}, 1);
                tl.fromTo(texttop,2, {opacity: 0}, {opacity:1}, 1);
                tl.fromTo(Mcontainers,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0);
                
            }
            
            if(destination.index === 4){const section = destination.item;
                const pngvelo2 = section.querySelector('.pngvelo2');
                const flechetop = section.querySelector('.flechetop');
                const texttop = section.querySelector('.backtopw');
                const card1 = section.querySelector('.card1');
                const card2 = section.querySelector('.card2');
                const card3 = section.querySelector('.card3');
                const card4 = section.querySelector('.card4');
                const card5 = section.querySelector('.card5');
                const card6 = section.querySelector('.card6');

                tl.fromTo(pngvelo2,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0);
                tl.fromTo(flechetop,2, {opacity: 0}, {opacity:1}, 1);
                tl.fromTo(texttop,2, {opacity: 0}, {opacity:1}, 1);
                tl.fromTo(card1,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0);
                tl.fromTo(card2,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0);
                tl.fromTo(card3,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0);
                tl.fromTo(card4,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0);
                tl.fromTo(card5,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0);
                tl.fromTo(card6,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0);
            }

        }
    });

    const fleches = document.querySelector('#fleches');
    const velo = document.querySelector('.svg-velo');
    const title = document.querySelector('h1');
    const titleh2 = document.querySelector('h2');
    const tl = new TimelineMax();


        tl.fromTo(velo,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.25);
        tl.fromTo(fleches,1, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.50);
        tl.fromTo(title,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.75);
        tl.fromTo(titleh2,0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.75);



    const card1 = document.querySelector(".card1");
    const buttonclose = document.querySelector(".buttonclose");

    const tl2 = new TimelineMax({paused : true});

    tl2.fromTo('.transition',1.5, {scale:0, transformOrigin: "center center"}, {scale:25, transformOrigin: "center center"});
    tl2.fromTo('.buttonclose',0.1, {scale: 0}, {scale: 1}, 0);
    tl2.fromTo('.buttonclose',0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.75);
    tl2.fromTo('.foodtruck',0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 1);
    tl2.fromTo('.para2',0.5, {x: '100', opacity: 0}, {x: '0', opacity:1}, 1);
    tl2.fromTo('.para2',0.1, {scale: 0}, {scale: 1}, 0);
    tl2.fromTo('.sliderfoodtruck',0.1, {scale: 0}, {scale: 1}, 0);
    tl2.fromTo('.sliderfoodtruck',0.5, {x: '-100', opacity: 0}, {x: '0', opacity:1}, 1);

    card1.addEventListener("click", () => {
        tl2.play();
    });

    buttonclose.addEventListener("click", () => {
        tl2.reverse();
    });


    const card2 = document.querySelector(".card2");
    const buttonclose2 = document.querySelector(".buttonclose2");

    const tl3 = new TimelineMax({paused : true});

    tl3.fromTo('.transition2',1.5, {scale:0, transformOrigin: "center center"}, {scale:25, transformOrigin: "center center"});
    tl3.fromTo('.buttonclose2',0.1, {scale: 0}, {scale: 1}, 0);
    tl3.fromTo('.buttonclose2',0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.75);
    tl3.fromTo('.slowgoodtitle',0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 1);
    tl3.fromTo('.para3',0.5, {x: '100', opacity: 0}, {x: '0', opacity:1}, 1);
    tl3.fromTo('.para3',0.1, {scale: 0}, {scale: 1}, 0);
    tl3.fromTo('.sliderslowgood',0.1, {scale: 0}, {scale: 1}, 0);
    tl3.fromTo('.sliderslowgood',0.5, {x: '-100', opacity: 0}, {x: '0', opacity:1}, 1);

    

    card2.addEventListener("click", () => {
        tl3.play();
    });

    buttonclose2.addEventListener("click", () => {
        tl3.reverse();
    });
    
   
    const card3 = document.querySelector(".card3");
    const buttonclose3 = document.querySelector(".buttonclose3");

    const tl4 = new TimelineMax({paused : true});

    tl4.fromTo('.transition3',1.5, {scale:0, transformOrigin: "center center"}, {scale:25, transformOrigin: "center center"});
    tl4.fromTo('.buttonclose3',0.1, {scale: 0}, {scale: 1}, 0);
    tl4.fromTo('.buttonclose3',0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.75);
    tl4.fromTo('.titrerdr',0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 1);
    tl4.fromTo('.para4',0.5, {x: '100', opacity: 0}, {x: '0', opacity:1}, 1);
    tl4.fromTo('.para4',0.1, {scale: 0}, {scale: 1}, 0);
    tl4.fromTo('.sliderrdr',0.1, {scale: 0}, {scale: 1}, 0);
    tl4.fromTo('.sliderrdr',0.5, {x: '-100', opacity: 0}, {x: '0', opacity:1}, 1);

    

    card3.addEventListener("click", () => {
        tl4.play();
    });

    buttonclose3.addEventListener("click", () => {
        tl4.reverse();
    });


    const card4 = document.querySelector(".card4");
    const buttonclose4 = document.querySelector(".buttonclose4");

    const tl5 = new TimelineMax({paused : true});

    tl5.fromTo('.transition4',1.5, {scale:0, transformOrigin: "center center"}, {scale:25, transformOrigin: "center center"});
    tl5.fromTo('.buttonclose4',0.1, {scale: 0}, {scale: 1}, 0);
    tl5.fromTo('.buttonclose4',0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.75);
    tl5.fromTo('.titreiso',0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 1);
    tl5.fromTo('.para5',0.5, {x: '100', opacity: 0}, {x: '0', opacity:1}, 1);
    tl5.fromTo('.para5',0.1, {scale: 0}, {scale: 1}, 0);
    tl5.fromTo('.slideriso',0.1, {scale: 0}, {scale: 1}, 0);
    tl5.fromTo('.slideriso',0.5, {x: '-100', opacity: 0}, {x: '0', opacity:1}, 1);

    

    card4.addEventListener("click", () => {
        tl5.play();
    });

    buttonclose4.addEventListener("click", () => {
        tl5.reverse();
    });

    const card5 = document.querySelector(".card5");
    const buttonclose5 = document.querySelector(".buttonclose5");

    const tl6 = new TimelineMax({paused : true});

    tl6.fromTo('.transition5',1.5, {scale:0, transformOrigin: "center center"}, {scale:25, transformOrigin: "center center"});
    tl6.fromTo('.buttonclose5',0.1, {scale: 0}, {scale: 1}, 0);
    tl6.fromTo('.buttonclose5',0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.75);
    tl6.fromTo('.titreworkshop',0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 1);
    tl6.fromTo('.para6',0.5, {x: '100', opacity: 0}, {x: '0', opacity:1}, 1);
    tl6.fromTo('.para6',0.1, {scale: 0}, {scale: 1}, 0);
    tl6.fromTo('.sliderworkshop',0.1, {scale: 0}, {scale: 1}, 0);
    tl6.fromTo('.sliderworkshop',0.5, {x: '-100', opacity: 0}, {x: '0', opacity:1}, 1);

    

    card5.addEventListener("click", () => {
        tl6.play();
    });

    buttonclose5.addEventListener("click", () => {
        tl6.reverse();
    });

    const card6 = document.querySelector(".card6");
    const buttonclose6 = document.querySelector(".buttonclose6");

    const tl7 = new TimelineMax({paused : true});

    tl7.fromTo('.transition6',1.5, {scale:0, transformOrigin: "center center"}, {scale:25, transformOrigin: "center center"});
    tl7.fromTo('.buttonclose6',0.1, {scale: 0}, {scale: 1}, 0);
    tl7.fromTo('.buttonclose6',0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 0.75);
    tl7.fromTo('.titrehomechef',0.5, {y: '50', opacity: 0}, {y: '0', opacity:1}, 1);
    tl7.fromTo('.para7',0.5, {x: '100', opacity: 0}, {x: '0', opacity:1}, 1);
    tl7.fromTo('.para7',0.1, {scale: 0}, {scale: 1}, 0);
    tl7.fromTo('.sliderhomechef',0.1, {scale: 0}, {scale: 1}, 0);
    tl7.fromTo('.sliderhomechef',0.5, {x: '-100', opacity: 0}, {x: '0', opacity:1}, 1);


    


    

    card6.addEventListener("click", () => {
        tl7.play();
    });

    buttonclose6.addEventListener("click", () => {
        tl7.reverse();
    });


    $(document).on('click', '#head', function () {
    fullpage_api.moveTo(2, 0);
    });

    $(document).on('click', '#nom', function () {
    fullpage_api.moveTo(2, 0);
    });


    $(document).on('click', '#carte', function () {
    fullpage_api.moveTo(3, 0);
    });


    $(document).on('click', '#roue_avant', function () {
    fullpage_api.moveTo(4, 0);
    });


    $(document).on('click', '#sacoche', function () {
    fullpage_api.moveTo(5, 0);
    });

    $(document).on('click', '.pngvelo', function () {
        fullpage_api.moveTo(1, 0);
        });

        $(document).on('click', '.pngvelo2', function () {
            fullpage_api.moveTo(1, 0);
            });

              
$(".buttonclose, .buttonclose2, .buttonclose3, .buttonclose4, .buttonclose5, .buttonclose6, .pngvelo, .phonebutton, .emailbutton, .cvbutton, .pngvelo2, .card1, .card2, .card3, .card4, .card5, .card6").mouseenter(function () {
    TweenLite.to(this, 0.25, { scale: 1.08 })
})

$(".buttonclose, .buttonclose2, .buttonclose3, .buttonclose4, .buttonclose5, .buttonclose6, .pngvelo, .phonebutton, .emailbutton, .cvbutton, .pngvelo2, .card1, .card2, .card3, .card4, .card5, .card6").mouseleave(function () {
    TweenLite.to(this, 0.25, { scale: 1 })
})

                                                        


const swiper = new Swiper('.swiper-container', {
                    // Optional parameters
                    loop: true,
                    allowTouchMove: false,
                    
                  
                    // If we need pagination
                    pagination: {
                      el: '.swiper-pagination',
                    },
                  
                    // Navigation arrows
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    
                    },
                    
                   


                  });
                  


                //   $(window).on("load",function(){
                //     $(".loader-wrapper").fadeOut("slow");
                //   });



                  !function(){for(var t=document.getElementsByClassName("onq-youtube-player"),e=0;e<t.length;e++)t[e].onclick=function(){var t=document.createElement("iframe"),e="true"==this.dataset.ssv?"1":"0",s="true"==this.dataset.spc?"1":"0",i="true"==this.dataset.sta?"1":"0",a="true"==this.dataset.dkc?"1":"0",r="true"==this.dataset.ecc?"1":"0",o="true"==this.dataset.eap?"1":"0";for(t.setAttribute("src","//www.youtube.com/embed/"+this.dataset.id+"?rel="+e+"&controls="+s+"&showinfo="+i+"&disablekb="+a+"&cc_load_policy="+r+"&autoplay="+o),t.setAttribute("frameborder","0"),t.setAttribute("id","youtube-iframe"),t.setAttribute("style","width: 100%; height: 100%; position: absolute; top: 0; left: 0;"),"true"==this.dataset.afs&&t.setAttribute("allowfullscreen","");this.firstChild;)this.removeChild(this.firstChild);this.appendChild(t)}}();


                  !function(){for(var t=document.getElementsByClassName("onq-youtube-player"),e=0;e<t.length;e++)t[e].onclick=function(){var t=document.createElement("iframe"),e="true"==this.dataset.ssv?"1":"0",s="true"==this.dataset.spc?"1":"0",i="true"==this.dataset.sta?"1":"0",a="true"==this.dataset.dkc?"1":"0",r="true"==this.dataset.ecc?"1":"0",o="true"==this.dataset.eap?"1":"0";for(t.setAttribute("src","//www.youtube.com/embed/"+this.dataset.id+"?rel="+e+"&controls="+s+"&showinfo="+i+"&disablekb="+a+"&cc_load_policy="+r+"&autoplay="+o),t.setAttribute("frameborder","0"),t.setAttribute("id","youtube-iframe"),t.setAttribute("style","width: 100%; height: 100%; position: absolute; top: 0; left: 0;"),"true"==this.dataset.afs&&t.setAttribute("allowfullscreen","");this.firstChild;)this.removeChild(this.firstChild);this.appendChild(t)}}();



                  


                  