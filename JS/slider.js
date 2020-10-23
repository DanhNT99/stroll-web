let containSlider = document.querySelector(".banner-slider");
let listSlider = document.querySelectorAll(".banner_slider-item");
let listContainBtn = document.querySelectorAll(".btn_cricle-item");
let listBtn = document.querySelectorAll(".btn_cricle");
moveSlider({
    containSlider: ".banner-slider",
    listSlider: ".banner_slider-item",
    listContainBtn: ".btn_cricle-item",
    listBtn: ".btn_cricle",
    classActivity: "activity-item",
    classBtn: "color_btn-cricle"
});
moveSlider({
    containSlider: ".layout-menber",
    listSlider: ".list-menber",
    listContainBtn: ".btn_menber-cricle-item",
    listBtn: ".btn_menber-cricle",
    classActivity: "activity-item",
    classBtn: "color_btn-cricle-red"
});
moveSlider({
    containSlider: ".layout-menber-mobile",
    listSlider: ".list-menber-mobile",
    listContainBtn: ".btn_menber-cricle-item-mobile",
    listBtn: ".btn_menber-cricle-mobile",
    classActivity: "activity-item",
    classBtn: "color_btn-cricle-red"
});
function moveSlider(obj) {
    let containSlider = document.querySelector(obj.containSlider);
    let listSlider = containSlider.querySelectorAll(obj.listSlider);
    let listContainBtn = document.querySelectorAll(obj.listContainBtn);
    let listBtn = document.querySelectorAll(obj.listBtn);
    listBtn[0].classList.add(obj.classBtn);
    listBtn.forEach((btn,index)=>{
        btn.addEventListener('click', ()=>{
            for(let i = 0 ; i < listBtn.length; i++) {
                listBtn[i].classList.remove(obj.classBtn);
            }
            for(let i = 0 ; i < listBtn.length; i++) {
                listContainBtn[i].classList.remove(obj.classActivity);
            }
            listContainBtn[index].classList.add(obj.classActivity);
            btn.classList.add(obj.classBtn);
            let width = listSlider[0].clientWidth;
            containSlider.style.transition = `transform 0.5s ease`;
            containSlider.style.transform = `translateX(${-width * index}px)`;
        })
    })
}