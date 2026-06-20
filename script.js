// 移动端汉堡菜单切换
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// 点击导航链接自动关闭移动端菜单
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// 滚动时导航栏轻微变色
window.addEventListener("scroll", function(){
    const nav = document.querySelector(".navbar");
    if(window.scrollY > 100){
        nav.style.background = "rgba(255,255,255,0.98)";
    }else{
        nav.style.background = "rgba(255,255,255,0.95)";
    }
})

// 按钮点击简单交互提示
const cartBtn = document.querySelector(".cart-btn");
const buyBtn = document.querySelector(".buy-now-btn");
cartBtn.addEventListener("click",()=>{
    alert("已加入购物车！");
})
buyBtn.addEventListener("click",()=>{
    alert("跳转下单页面");
})