<!DOCTYPE html>
<html>
<head>
<title>Spider in a Web</title>
<style>
body {
  background-color: #f0f0f0;
  overflow: hidden; /* Prevent scrollbars */
}

.web {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the web */
}

.web line {
  stroke: #ccc;
  stroke-width: 2;
}

.spider {
  fill: #000;
}
</style>
</head>
<body>

<svg class="web" width="400" height="400" viewBox="0 0 400 400">
  <!-- Web lines -->
  <line x1="200" y1="0" x2="200" y2="400" />
  <line x1="0" y1="200" x2="400" y2="200" />
  <!-- Add more lines for a more intricate web -->

  <!-- Spider -->
  <circle class="spider" cx="200" cy="200" r="10" />
</svg>

<script>
// Function to create a web line with random angle and length
function createWebLine() {
  const angle = Math.random() * 360; // Random angle
  const length = Math.random() * 150 + 50; // Random length

  const x1 = 200 + Math.cos(angle * Math.PI / 180) * length;
  const y1 = 200 + Math.sin(angle * Math.PI / 180) * length;

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", 200);
  line.setAttribute("y1", 200);
  line.setAttribute("x2", x1);
  line.setAttribute("y2", y1);
  line.setAttribute("class", "web");

  document.querySelector(".web").appendChild(line);
}

// Create multiple web lines
for (let i = 0; i < 20; i++) {
  createWebLine();
}
</script>

</body>
</html>