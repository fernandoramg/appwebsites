# APP REACT NATIVE OF WEBSITES
***Aplicación hecha con React Native utilizando Javascript, en donde se muestra el uso de la navegación permitiendo el paso de parametros y generando enlaces profundos con WebView***

###### By: Fernando Ramirez
###### fernandoram901@gmail.com

### Tecnologías
- **React Native**
- **Expo**

Se realizo la distribución de los archivos para mejor ordenamientos y escabilidad si así lo desea, teniendo carpetas como: ***nagivation,components,screen***

### API

Por favor revisar la función `getDataBack` en `screen/HomeScreen` donde se esta consumiendo la API del backend. 

Puede reemplazar la ip *http://10.0.2.2:5127* por su ip de localhost propia cuando este ejecutando el backend .NET Core.

O si lo desea seguir ocupando la API deployada en producción *https://api-websites.onrender.com/api/websites* esto puede tardar 1 minuto en obtener la data.

### Ejecución

Por favor utilizar `npm run android` para ejecutar el proyecto.

### Dependencias Principales

| Dependencia | Versión |
|--------|----------|
| **react native**|`v0.76.9`|
| **expo**|`v~52.0.43`|
| **axios**|`v~^1.8.4`|
| **react-native-webview**|`v^13.12.5`|


### Procedimiento

##### Requerimientos Previos
- Node.js
- Expo. `npm install -g explo-clo`
- Emulador Android Studio

**1.- Clonar repositorio**
```
git clone https://github.com/fernandoramg/appwebsites.git
cd appwebsites
```
**2.- Dependeencias**

Se tendrá que agregar la carpeta node_modules en donde contiene los paquetes.
```
npm install
```
**3.- Emulador**

Antes de ejecutar la aplicación, se tiene que abrir un emulador en Android Studio o en su defecto crear uno nuevo e inicializarlo.

**4.- Ejecución de la aplicación**

Una vez el emulador abierto se procede a ejecutar con:
```
npm run android
```
O también
```
npx expo start --android
```
