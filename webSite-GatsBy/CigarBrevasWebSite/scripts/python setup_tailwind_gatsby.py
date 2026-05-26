import os
import subprocess
import json
from pathlib import Path

def run(cmd, cwd=None):
    print(f"\n[CMD] {cmd}")
    subprocess.check_call(cmd, shell=True, cwd=cwd)

def ensure_line_in_file(path, line):
    path = Path(path)
    if not path.exists():
        path.write_text(line + "\n", encoding="utf-8")
        return
    content = path.read_text(encoding="utf-8").splitlines()
    if line not in content:
        content.append(line)
        path.write_text("\n".join(content) + "\n", encoding="utf-8")

def main():
    project_name = input("Nombre del proyecto Gatsby (ej: my-gatsby-site): ").strip()
    use_existing = input(
        "¿Ya existe el proyecto con ese nombre? [s/n]: "
    ).strip().lower().startswith("s")

    # 1) Crear proyecto Gatsby si no existe
    if not use_existing:
        print("\n=== Creando proyecto Gatsby ===")
        run(f"npx gatsby new {project_name}")
    else:
        print("\n=== Usando proyecto existente ===")

    project_dir = Path(project_name).resolve()
    if not project_dir.exists():
        print(f"ERROR: No existe la carpeta {project_dir}")
        return

    # 2) Instalar Tailwind y dependencias
    print("\n=== Instalando Tailwind CSS y dependencias ===")
    run("npm install -D tailwindcss postcss autoprefixer", cwd=project_dir)

    # 3) Inicializar Tailwind (genera tailwind.config.js y postcss.config.js)
    print("\n=== Inicializando Tailwind ===")
    run("npx tailwindcss init -p", cwd=project_dir)

    tailwind_config = project_dir / "tailwind.config.js"
    postcss_config = project_dir / "postcss.config.js"
    gatsby_config = project_dir / "gatsby-config.js"
    src_dir = project_dir / "src"
    styles_dir = src_dir / "styles"
    global_css = styles_dir / "global.css"

    # 4) Configurar tailwind.config.js (content)
    print("\n=== Configurando tailwind.config.js ===")
    tailwind_content = """\
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
"""
    tailwind_config.write_text(tailwind_content, encoding="utf-8")

    # 5) Configurar postcss.config.js
    print("\n=== Configurando postcss.config.js ===")
    postcss_content = """\
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
"""
    postcss_config.write_text(postcss_content, encoding="utf-8")

    # 6) Crear CSS global con directivas de Tailwind
    print("\n=== Creando CSS global con Tailwind ===")
    styles_dir.mkdir(parents=True, exist_ok=True)
    global_css.write_text(
        "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n",
        encoding="utf-8",
    )

    # 7) Asegurar gatsby-plugin-postcss en gatsby-config.js y usar el CSS global
    print("\n=== Configurando gatsby-config.js ===")
    if not gatsby_config.exists():
        # Config mínima si no existe
        gatsby_config.write_text(
            """\
module.exports = {
  siteMetadata: {
    title: `Gatsby Site`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
  ],
};
""",
            encoding="utf-8",
        )
    else:
        text = gatsby_config.read_text(encoding="utf-8")
        # Añadir plugin postcss si no está
        if "gatsby-plugin-postcss" not in text:
            if "plugins:" in text:
                text = text.replace(
                    "plugins: [",
                    "plugins: [\n    `gatsby-plugin-postcss`,"
                )
            else:
                # Caso raro: añadimos bloque plugins
                text = text.rstrip(";\n") + """
,
  plugins: [
    `gatsby-plugin-postcss`,
  ],
};
"""
        gatsby_config.write_text(text, encoding="utf-8")

    # 8) Importar el CSS global en gatsby-browser.js
    print("\n=== Importando CSS global en gatsby-browser.js ===")
    gatsby_browser = project_dir / "gatsby-browser.js"
    import_line = "import './src/styles/global.css';"
    ensure_line_in_file(gatsby_browser, import_line)

    print("\n=== Listo ===")
    print(f"Proyecto configurado en: {project_dir}")
    print("Para arrancar el servidor de desarrollo, ejecuta:")
    print(f"cd {project_dir}")
    print("npm run develop")

if __name__ == "__main__":
    main()

