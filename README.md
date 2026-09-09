# GitHub Enterprise Actions + GHAS Demo

Demo kit para mostrar un flujo empresarial simple:

1. GitHub Copilot ayuda a crear o mejorar una feature.
2. GitHub Actions valida el cambio en Pull Request.
3. GitHub Actions despliega el sitio en GitHub Pages.
4. GitHub Advanced Security agrega controles DevSecOps.

## Carpetas principales

| Carpeta | Uso en la demo |
| --- | --- |
| `01-app-github-pages` | Sitio estático que se puede publicar con GitHub Pages. |
| `02-github-actions` | Workflows de CI, validación de PR y deploy. |
| `03-ghas-security` | Configuraciones y ejemplos para CodeQL, Dependabot, dependency review y secret scanning. |
| `04-demo-script` | Guion, checklist y prompts para ejecutar la demo. |

## Demo flow corto

1. Mostrar el sitio en `01-app-github-pages`.
2. Pedir a Copilot una mejora visual o funcional.
3. Crear un Pull Request.
4. Mostrar checks de Actions.
5. Mostrar controles de GHAS.
6. Mergear y desplegar a GitHub Pages.

