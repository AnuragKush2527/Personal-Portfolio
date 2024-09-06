import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const CanvasComponent = () => {
  const canvasRef = useRef(null);
 
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    if(canvas.width > 1200) {
      canvas.height = 5000;
    }
    else if (canvas.width > 1000) {
      canvas.height = 5200;
    } else if (canvas.width > 900) {
      canvas.height = 5200;
    } else if (canvas.width > 800) {
      canvas.height = 6500;
    } else if (canvas.width > 700) {
      canvas.height = 6500;
    } else if (canvas.width > 500) {
      canvas.height = 6800;
    } else if (canvas.width > 400) {
      canvas.height = 7200;
    } else {
      canvas.height = 5500;
    }
    
    const particlesArray = [];
    let count = 0;

    const mouse = {
      x: undefined,
      y: undefined,
    };

    const innerDiv = document.querySelector(".innerDiv");

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;

      if(canvas.width > 1200) {
        canvas.height = 5000;
      }
      else if (canvas.width > 1000) {
        canvas.height = 5200;
      } else if (canvas.width > 900) {
        canvas.height = 5200;
      } else if (canvas.width > 800) {
        canvas.height = 6500;
      } else if (canvas.width > 700) {
        canvas.height = 6500;
      } else if (canvas.width > 500) {
        canvas.height = 6800;
      } else if (canvas.width > 400) {
        canvas.height = 7200;
      } else {
        canvas.height = 5500;
      }
    });

    const handleMouseMove = (event) => {
      const rectCanvas = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rectCanvas.left;
      mouse.y = event.clientY - rectCanvas.top;

      if (canvas.height > 6500) {
        if (mouse.y > 5000) mouse.y += 200;
        else if (mouse.y > 4000) mouse.y += 150;
        else if (mouse.y > 3000) mouse.y += 100;
      }
    };

    const outerDiv = document.querySelector(".outerDiv");
    outerDiv.addEventListener("mousemove", handleMouseMove);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        if (count < 400) {
          this.size = Math.random() * 2 + 1;
        } else if (count < 800) {
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

    let numberOfParticles;
    if (canvas.width > 800) {
      numberOfParticles = 2200;
    } else {
      numberOfParticles = 1500;
    }
    for (let i = 0; i < numberOfParticles; i++) {
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
            // break;
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
      <div className="innerDiv">
        <Navbar />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default CanvasComponent;
