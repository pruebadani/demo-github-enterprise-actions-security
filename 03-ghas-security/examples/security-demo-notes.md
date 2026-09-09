# GHAS demo notes

## Secret scanning

Mostrar la configuracion de secret scanning desde GitHub:

```text
Settings > Security > Code security and analysis > Secret scanning
```

No usar secretos reales en la demo. Para una demostracion segura, explicar el flujo con una captura o con alertas previamente generadas en un repositorio controlado.

## Code scanning

1. Copiar `codeql.yml` a `.github/workflows/codeql.yml`.
2. Ejecutar el workflow.
3. Mostrar la pestana `Security > Code scanning`.

## Dependabot

1. Copiar `dependabot.yml` a `.github/dependabot.yml`.
2. Mostrar alertas o Pull Requests automaticos.
3. Conectar el mensaje a reduccion de riesgo operacional.

