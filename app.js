var selectedIcon, iconHappy, iconSmile, iconSerious, iconSad, iconCry, day;

iconHappy=document.querySelector('.icon__happy');
iconSmile=document.querySelector('.icon__smile');
iconSerious=document.querySelector('.icon__serious');
iconSad=document.querySelector('.icon__sad');
iconCry=document.querySelector('.icon__cry');
day=document.querySelectorAll('.month__col p');

icons=document.querySelectorAll('.icon');

icons.forEach(function(icon){
    icon.addEventListener('click',function(){
        checkSelected();
        icon.classList.add('icon-active');
        selectedIcon=icon;
    });
})

function checkSelected(){
    icons.forEach(function(icon){
        if(icon.classList.contains('icon-active')){
            icon.classList.remove('icon-active');
        }
    })
}


day.forEach(function(d){
    d.addEventListener('click',function(){
        if(selectedIcon.classList.contains('icon__happy')){
            d.classList.add('icon__happy-active');
            console.log(d.classList);
        }
        else if(selectedIcon.classList.contains('icon__smile')){
            d.classList.add('icon__smile-active');
        }
        else if(selectedIcon.classList.contains('icon__serious')){
            d.classList.add('icon__serious-active');
        }
        else if(selectedIcon.classList.contains('icon__sad')){
            d.classList.add('icon__sad-active');
        }
        else if(selectedIcon.classList.contains('icon__cry')){
            d.classList.add('icon__cry-active');
        }
    });
});

