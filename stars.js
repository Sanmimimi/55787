// 初始化星空背景
window.requestAnimFrame = window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame || 
    window.oRequestAnimationFrame || 
    window.msRequestAnimationFrame || 
    function(t) {
        window.setTimeout(t, 1e3 / 60);
    };

function initStarBackground() {
    var t, e,
        o = document.createElement("canvas"),
        i = document.getElementById("startrack");
    i.width = o.width = t = i.offsetWidth;
    i.height = o.height = e = i.offsetHeight;

    var n = Math.max(t, e);
    o.width = 2.6 * n;
    o.height = 2.6 * n;

    var a = i.getContext("2d"),
        r = o.getContext("2d"),
        l = t,
        d = [],
        c = 0;

    function u() {
        a.drawImage(o, -o.width / 2, -o.height / 2);
    }

    function w() {
        u();
        ++c > 150 && c % 8 == 0 && (
            a.fillStyle = "rgba(10,10,30,.03)",
            a.fillRect(-3 * n, -3 * n, 6 * n, 6 * n)
        );
        f(.025);
    }

    function f(t) {
        a.rotate(t * Math.PI / 180);
    }

    a.fillStyle = "rgba(10,10,30,0)";
    a.fillRect(0, 0, t, e);
    a.lineCap = "round";

    for (var m, s, g, b, v = 2e4; v--;) {
        m = void 0;
        s = void 0;
        g = void 0;
        b = void 0;
        d.push({
            x: h(-o.width, o.width),
            y: h(-o.height, o.height),
            size: Math.random() * 1.5 + 0.5,
            color: (
                m = h(150, 255),
                s = h(150, 255),
                g = h(180, 255),
                b = h(20, 60) / 100,
                "rgba(" + m + "," + s + "," + g + "," + b + ")"
            )
        });
    }

    for (var p = d.length; p--;) {
        var y = d[p];
        r.beginPath();
        r.arc(y.x, y.y, y.size, 0, 2 * Math.PI, !0);
        r.fillStyle = y.color;
        r.closePath();
        r.fill();
    }

    var x = l;
    a.translate(x, 0);

    (function t() {
        window.requestAnimFrame(t);
        w();
    })();

    window.onresize = function() {
        i.width = t = i.offsetWidth;
        i.height = e = i.offsetHeight;
        a.fillStyle = "rgba(10,10,30,0)";
        a.fillRect(0, 0, t, e);
    };
}
