import React, { useRef, useEffect } from "react";

const CanvasComponent = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particlesArray = [];
    let count = 0;

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    const mouse = {
      x: undefined,
      y: undefined,
    };

    canvas.addEventListener("mousemove", function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        if (count < 200) {
          this.size = Math.random() * 2 + 1;
        } else if (count < 250) {
          this.size = Math.random() * 1 + 1;
        } else {
          this.size = Math.random() * 0 + 0.5;
        }
        this.color = "white";
        this.speedX = 0;
        this.speedY = 0;
      }
      update() {
        if (this.size > 4) {
          this.speedX = Math.random() * 4 - 4.0;
          // this.speedY = Math.random() * 2 - 2.0;
        } else if (this.size > 2) {
          this.speedX = Math.random() * 2 - 2.0;
          // this.speedY = Math.random() * 2 - 2.0;
        } else {
          this.speedX = Math.random() * 1 - 1;
          //   this.speedY = Math.random() * 1 - 1;
        }
        if (this.x < 0) this.x = canvas.width - 1;
        if (this.y < 0) this.y = canvas.height - 1;
        this.x += this.speedX;
        this.y += this.speedY;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 800; i++) {
      particlesArray.push(new Particle());
      count++;
    }

    function handleParticles() {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
    }

    function drawLines() {
      let temp = [];
      for (let i = 0; i < particlesArray.length; i++) {
        let dx = particlesArray[i].x - mouse.x;
        let dy = particlesArray[i].y - mouse.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 50) {
          temp.push(i);
        }
      }
      for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < particlesArray.length; j++) {
          let dx = particlesArray[j].x - particlesArray[temp[i]].x;
          let dy = particlesArray[j].y - particlesArray[temp[i]].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 50) {
            ctx.beginPath();
            ctx.strokeStyle = particlesArray[temp[i]].color;
            ctx.lineWidth = particlesArray[temp[i]].size / 3;
            ctx.moveTo(particlesArray[temp[i]].x, particlesArray[temp[i]].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
            ctx.closePath();
            break;
          }
        }
      }
      temp = [];
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      drawLines();
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <div className="outerDiv">
      <canvas id="canvas1" ref={canvasRef}></canvas>
      <div className="innerDiv">This is a div overlaying the canvas</div>
    </div>
  );
};

export default CanvasComponent;
