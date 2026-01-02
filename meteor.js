// 流星背景动画
function initMeteorBackground() {
    const canvas = document.getElementById('meteorCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const meteors = [];
    const meteorCount = 8;

    class Meteor {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width + 300;
            this.y = -50;
            this.length = Math.random() * 80 + 50;
            this.speed = Math.random() * 8 + 6;
            this.angle = Math.PI / 4;
            this.opacity = Math.random() * 0.5 + 0.5;
        }

        update() {
            this.x -= this.speed * Math.cos(this.angle);
            this.y += this.speed * Math.sin(this.angle);
        }

        draw() {
            ctx.save();
            const gradient = ctx.createLinearGradient(
                this.x, this.y,
                this.x + this.length * Math.cos(this.angle),
                this.y - this.length * Math.sin(this.angle)
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(
                this.x + this.length * Math.cos(this.angle),
                this.y - this.length * Math.sin(this.angle)
            );
            ctx.stroke();
            ctx.restore();
        }

        isOffScreen() {
            return this.x < -100 || this.y > canvas.height + 100;
        }
    }

    for (let i = 0; i < meteorCount; i++) {
        meteors.push(new Meteor());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        meteors.forEach(meteor => {
            meteor.update();
            meteor.draw();

            if (meteor.isOffScreen()) {
                if (Math.random() < 0.03) {
                    meteor.reset();
                }
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
}
