const canvasRectangulo = document.getElementById("canvasRectangulo");
const canvasTriangulo = document.getElementById("canvasTriangulo");
const canvasPluma = document.getElementById("canvasPluma");
const canvasLineas = document.getElementById("canvasLineas");
const canvasCurvas = document.getElementById("canvasCurvas");
const canvasBezier = document.getElementById("canvasBezier");
const canvasCubicas = document.getElementById("canvasCubicas");
const canvasCombinados = document.getElementById("canvasCombinados");
const canvas2D = document.getElementById("canvas2D");

function drawRectangulo() {
    const ctx = canvasRectangulo.getContext("2d");
    if (canvasRectangulo.getContext) {
      ctx.fillStyle = "pink";
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50); 
    }
  }
  
  function drawTriangulo() {
    const ctx = canvasTriangulo.getContext("2d");
    if (canvasTriangulo.getContext) {
      ctx.fillStyle = "red";
      ctx.strokestyle="black";
      ctx.beginPath();
      ctx.moveTo(25, 100); 
      ctx.lineTo(125, 100); 
      ctx.lineTo(75, 25); 
      ctx.closePath(); 
      ctx.fill(); 
}
  }

  function drawPluma() {
    const ctx = canvasPluma.getContext("2d");
    if (canvasPluma.getContext) {
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
      ctx.stroke();
    }
  }
  
  function drawLineas() {
    const ctx = canvasLineas.getContext("2d");
    if (canvasLineas.getContext) {

      // Triángulo relleno
      ctx.fillStyle = "orange";
      ctx.beginPath();
      ctx.moveTo(25, 25);
      ctx.lineTo(105, 25);
      ctx.lineTo(25, 105);
      ctx.fill();
  
      // Triángulo contorneado
      ctx.beginPath();
      ctx.moveTo(125, 125);
      ctx.lineTo(125, 45);
      ctx.lineTo(45, 125);
      ctx.closePath();
      ctx.stroke();
    }
  }
  
  function drawCurvas() {
    const ctx = canvasCurvas.getContext("2d");
    if (canvasCurvas.getContext) {
  
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          ctx.fillStyle = "yellow";
          ctx.beginPath();
          const x = 25 + j * 50; // Coordenada x
          const y = 25 + i * 50; // Coordenada y
          const radius = 20; // Radio del Arco
          const startAngle = 0; // Punto inicial del Círculo
          const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
          const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario
  
          ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  
          if (i > 1) {
            ctx.fill();
          } else {
            ctx.stroke();
          }
        }
      }
    }
  }

  function drawBezier() {
    if (canvasBezier.getContext) {
      const ctx = canvasBezier.getContext("2d");
  
      // Ejemplo de curvas cuadráticas
      ctx.beginPath();
      ctx.moveTo(75, 25);
      ctx.quadraticCurveTo(25, 25, 25, 62.5);
      ctx.quadraticCurveTo(25, 100, 50, 100);
      ctx.quadraticCurveTo(50, 120, 30, 125);
      ctx.quadraticCurveTo(60, 120, 65, 100);
      ctx.quadraticCurveTo(125, 100, 125, 62.5);
      ctx.quadraticCurveTo(125, 25, 75, 25);
      ctx.stroke();
    }
  }

  function drawCubicas() {
    if (canvasCubicas.getContext) {
      const ctx = canvasCubicas.getContext("2d");
  
      // Ejemplo de curvas cúbicas
      ctx.fillStyle = "rgb(171, 104, 234)";
      ctx.beginPath();
      ctx.moveTo(75, 40);
      ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
      ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
      ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
      ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
      ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
      ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
      ctx.fill();
    }
  }

  function drawCombinados() {
    if (canvasCombinados.getContext) {
      const ctx = canvasCombinados.getContext("2d");
  
      roundedRect(ctx, 12, 12, 150, 150, 15);
      roundedRect(ctx, 19, 19, 150, 150, 9);
      roundedRect(ctx, 53, 53, 49, 33, 10);
      roundedRect(ctx, 53, 119, 49, 16, 6);
      roundedRect(ctx, 135, 53, 49, 33, 10);
      roundedRect(ctx, 135, 119, 25, 49, 10);
  
      ctx.beginPath();
      ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
      ctx.lineTo(31, 37);
      ctx.fill();
  
      for (let i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 35, 4, 4);
      }
  
      for (i = 0; i < 6; i++) {
        ctx.fillRect(115, 51 + i * 16, 4, 4);
      }
  
      for (i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 99, 4, 4);
      }
      ctx.fillStyle = "rgb(134, 229, 101)";
      ctx.beginPath();
      ctx.moveTo(83, 116);
      ctx.lineTo(83, 102);
      ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
      ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
      ctx.lineTo(111, 116);
      ctx.lineTo(106.333, 111.333);
      ctx.lineTo(101.666, 116);
      ctx.lineTo(97, 111.333);
      ctx.lineTo(92.333, 116);
      ctx.lineTo(87.666, 111.333);
      ctx.lineTo(83, 116);
      ctx.fill();
  
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(91, 96);
      ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
      ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
      ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
      ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
      ctx.moveTo(103, 96);
      ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
      ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
      ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
      ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
      ctx.fill();
  
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
      ctx.fill();
  
      ctx.beginPath();
      ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
      ctx.fill();
    }
  }
  
  // Una función auxiliar para dibujar un rectángulo con esquinas redondeadas.
  
  function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
  }
  
  function draw2D() {
    if (canvas2D.getContext) {
      const ctx = canvas2D.getContext("2d");
      
      
      const rectangle = new Path2D();
      rectangle.rect(10, 10, 50, 50);
      
      ctx.fillStyle = "rgb(230, 200, 100)";
      const circle = new Path2D();
      circle.arc(100, 35, 25, 0, 2 * Math.PI);
  
      ctx.stroke(rectangle);
      ctx.fill(circle);
    }
  }
  
  
  
  
  drawRectangulo();
  drawTriangulo();
  drawPluma();
  drawLineas();
  drawCurvas();
  drawBezier();
  drawCubicas();
  drawCombinados();
  draw2D();