# galeria


## phpframe.work -> coming soon !

### Funciones (herramientas.php) Optional
```
d() coloca ~ o acento 

b() crea elementos html
```
elimina las funciones anteriores del index<br>
para que el proyecto funcione

## configuracion y compilacion
<p>
Conocimiento basico de rollup es<br>
necesario para poder instalar <br>
este proyecto
</p>
```
chmod +x setup_rollup.sh
./setup_rollup.sh
```
### rollup

## rollup.config.js :

```
export default {
	input: 'src/index.js',
	output: {
		file: 'public/bundle.js',
		format: 'cjs'
	}
};
```

el archivo anterior es donde <br>
se define la entrada y la salida<br>
de todo el codigo javascript.

## SCRIPT CODE :

```
#!/bin/bash

# Función para verificar si un comando existe
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

echo "--- Verificador de Estado del Proyecto ---"

# 1. Verificar si NPM está instalado
if ! command_exists npm; then
    echo "NPM no encontrado. Intentando instalar Node.js y NPM..."
    # Asumiendo entorno basado en Debian/Ubuntu (ajustar si es macOS/Arch)
    sudo apt update && sudo apt install -y nodejs npm
else
    echo "✓ NPM ya está instalado."
fi

# 2. Inicializar package.json si no existe
if [ ! -f "package.json" ]; then
    echo "Inicializando proyecto (npm init)..."
    npm init -y
else
    echo "✓ package.json detectado."
fi

# 3. Elección de instalación de Rollup
echo "------------------------------------------"
echo "¿Cómo prefieres instalar/usar Rollup?"
echo "1) Global (npm install -g rollup)"
echo "2) Local (Recomendado: npm install --save-dev rollup)"
read -p "Selecciona una opción [1 o 2]: " OPTION

if [ "$OPTION" == "1" ]; then
    echo "Instalando Rollup globalmente..."
    sudo npm install --global rollup
    ROLLUP_CMD="rollup"
else
    echo "Instalando Rollup localmente..."
    npm install rollup --save-dev
    ROLLUP_CMD="npx rollup"
fi

# 4. Verificar archivo de configuración
if [ ! -f "rollup.config.js" ]; then
    echo "¡Advertencia! No se encontró rollup.config.js en este directorio."
    echo "El comando podría fallar si Rollup no encuentra la configuración."
fi

# 5. Ejecución
echo "------------------------------------------"
echo "Iniciando Rollup en modo watch..."
# Ejecutamos el comando solicitado: rollup --watch --config
$ROLLUP_CMD --watch --config
```