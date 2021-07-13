# Creating Separate Packages for Cross Browser Support

## Using Babel CLI to Compile JavaScript Code

Pasos: (Estos pasos son complementarios al fichero **20480C_MOD15_DEMO.md**)

1. Crear el fichero **package.json**, añadiendo un **npm configuration File**.

2. Clave que desde la linea de comandos (*PowerShell* o *Command Prompt*) use el comando para instalar **babel-cli**:

    ```bash
    npm install --save-dev babel-cli babel-preset-es2015
    ```

3. También clave que el fichero **package.json** se inserten estas lineas:

    ```json
    "scripts": {
             "build": "babel --presets es2015 src -d dist"
         },
    ```

    Notad la coma al final, significa debe ir algo después en el contenido dle fichero, pero yo lo he puesto al final asi:

    ```json
    {
      "version": "1.0.0",
      "name": "asp.net",
      "private": true,
      "devDependencies": {
        "babel-cli": "^6.26.0",
        "babel-preset-es2015": "^6.24.1"
      },
      "scripts": {
        "build": "babel --presets es2015 src -d dist"
      }
    }
    ```

4. También he ajustado el nombre de las carpetas  de **scr** a **src**, 

5. Si hay errores al instalar el **babel-cli**, usar el siguiente comando antes de la construcción:

    ```bash
    npm uninstall babel
    ```

6. Si ha usado el anterior comando deberá volver a instalar el **babel-cli** deberá usar el comando del paso 2 y a continuación el siguiente comando:

    ```bash
    npm run build
    ```



nmp audit fix

