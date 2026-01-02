// 平滑更新数字
function updateNumber(id, newValue, padLength = 2) {
    const element = document.getElementById(id);
    const oldValue = element.textContent;
    const formattedValue = pad(newValue, padLength);

    if (oldValue !== formattedValue) {
        element.style.animation = 'none';
        setTimeout(() => {
            element.textContent = formattedValue;
            element.style.animation = 'pulse 0.3s ease-out';
        }, 10);
    } else {
        element.textContent = formattedValue;
    }
}

// 更新倒计时
function updateCountdown() {
    const now = new Date();
    const gaokao = new Date(2027, 5, 7, 0, 0, 0);

    let diff = gaokao - now;

    if (diff < 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('milliseconds').textContent = '000';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff %= (1000 * 60);

    const seconds = Math.floor(diff / 1000);
    diff %= 1000;

    const milliseconds = diff;

    updateNumber('days', days);
    updateNumber('hours', hours);
    updateNumber('minutes', minutes);
    updateNumber('seconds', seconds);
    updateNumber('milliseconds', milliseconds, 3);
}

// 更新时间
function updateTime() {
    const now = new Date();

    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    document.getElementById('currentTime').textContent = `${hours}:${minutes}:${seconds}`;

    const year = now.getFullYear();
    const month = pad(now.getMonth() + 1);
    const date = pad(now.getDate());
    document.getElementById('dateInfo').textContent = `${year}年${month}月${date}日`;

    document.getElementById('weekInfo').textContent = weekDays[now.getDay()];
}
