
var header = new Vue({
    el : ".header",
    data: {
        isOpen : false,
        classActivite : false,
        height: '',
        activiteLi : false

    },
    methods : {
        openMenu(){
            this.isOpen = this.isOpen ? false : true;
            if(this.height == 'auto'){
                this.height = '40px';
            }
            else this.height = 'auto';
            this.activiteLi = this.activiteLi ? false : true;
        },
        handlClickMenuMobile() {
           this.classActivite = this.classActivite ? false : true;
           this.activiteLi = false;
           this.isOpen = false;
        }
    }
})
console.log(header);

function changeBgAndColor(){
    let listLink = document.querySelectorAll(".utilities_item-link"),
         listLogo = document.querySelectorAll(".utilities_item-logo");
    listLink.forEach((link, index)=> {
        link.onmouseover = ()=> { listLogo[index].classList.add("changeColor");}
        link.onmouseout = () => { listLogo[index].classList.remove("changeColor");}
    })
}
changeBgAndColor();
window.onscroll  = () => {
    var heightScroll = window.scrollY;
    var btnScroll = document.querySelector(".layout-btn-scroll");
    if(heightScroll > 22) {
       btnScroll.style.display = "block";
    }
    else {
        btnScroll.style.display = "none";
    }
    btnScroll.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"

        })
    })
}
//click display menu-mobie
function handleClickMenuMoible () {
   
}
handleClickMenuMoible();