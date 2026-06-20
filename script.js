// 页面加载动画
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".loading-box").classList.add("hide");
    }, 1200);
})

// 移动端汉堡菜单切换
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    })
})

// 滚动渐入动画检测
const scrollItems = document.querySelectorAll(".scroll-animate");
function checkScroll() {
    scrollItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (itemTop < windowHeight - 100) {
            item.classList.add("active");
        }
    })
}
window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);

// 数据数字滚动动画
function countAnimate(el) {
    const target = parseInt(el.dataset.num);
    let current = 0;
    const speed = target > 1000 ? 20 : 1;
    const timer = setInterval(() => {
        current += speed;
        if (current >= target) {
            clearInterval(timer);
            current = target;
        }
        el.innerText = current;
    }, 25);
}
let countFlag = false;
window.addEventListener("scroll", function countTrigger() {
    const dataWrap = document.querySelector(".data-wrap");
    if (!dataWrap || countFlag) return;
    const top = dataWrap.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
        countFlag = true;
        document.querySelectorAll(".data-num").forEach(el => countAnimate(el));
    }
})

// 返回顶部按钮逻辑
const backTopBtn = document.querySelector(".back-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backTopBtn.classList.add("show");
    } else {
        backTopBtn.classList.remove("show");
    }
})
backTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
})

// 养生贴士弹窗逻辑
const tipBtn = document.querySelector(".tip-btn");
const modal = document.querySelector(".tip-modal");
const closeModal = document.querySelector(".close-modal");
tipBtn.addEventListener("click", () => {
    modal.classList.add("open");
})
closeModal.addEventListener("click", () => {
    modal.classList.remove("open");
})
// 点击弹窗遮罩空白处关闭弹窗
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("open");
    }
})