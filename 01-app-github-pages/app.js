const steps = [
  "Copilot propone una mejora en la landing.",
  "El cambio entra por Pull Request.",
  "GitHub Actions ejecuta validaciones automaticas.",
  "GHAS revisa codigo, secretos y dependencias.",
  "El merge a main despliega el sitio en GitHub Pages."
];

const list = document.querySelector("#pipelineSteps");

steps.forEach((step) => {
  const item = document.createElement("li");
  item.textContent = step;
  list.appendChild(item);
});

