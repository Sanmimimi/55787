window.addEventListener('DOMContentLoaded', function() {
    // 设置随机名言
    document.getElementById('slogan').textContent = getSlogan();

    // 初始化星空背景
    initStarBackground();

    // 初始化流星背景
    initMeteorBackground();

    // 初始化倒计时和时间
    updateCountdown();
    updateTime();
    
    // 每100毫秒更新一次倒计时
    setInterval(updateCountdown, 100);
    
    // 每秒更新一次当前时间
    setInterval(updateTime, 1000);
});

// 处理滚动事件
window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var background = document.querySelector('.background');
    if (scrollTop > window.innerHeight * 0.6) {
        background.classList.add('fixed');
    } else {
        background.classList.remove('fixed');
    }
});

console.log("Nekotora's Flag.Moe Homepage");
