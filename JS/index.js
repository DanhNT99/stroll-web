
var liItem = new Vue({
    el: "#contain_menu-drop",
    data: {
        id: "#contain_menu-drop",
        isOpen : false
    },
    methods: {
        openMenu(){
            this.isOpen = this.isOpen ? false : true;
        }
    }
})

function changeBgAndColor(){
    let listLink = document.querySelectorAll(".utilities_item-link"),
         listLogo = document.querySelectorAll(".utilities_item-logo");
    listLink.forEach((link, index)=> {
        link.onmouseover = ()=> { listLogo[index].classList.add("changeColor");}
        link.onmouseout = () => { listLogo[index].classList.remove("changeColor");}
    })
}
changeBgAndColor();