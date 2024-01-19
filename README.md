# Challenge Técnico - Puntospoint

Este proyecto se desarrolló en NextJS, utilizando Typescript y la librería de CSS "Material UI". A continuación, se encuentran detalladas las instrucciones para configurar el proyecto, revisar los requerimientos y realizar pruebas en GTM.

Link al proyecto final: [puntospoint-challenge.vercel.app](https://puntospoint-challenge.vercel.app/)

## Requerimientos

- Requerimientos detallados en el [documento de Google](https://docs.google.com/document/d/13RfSKro2Doi8By_Xm1IWt7Bp8_a5jjl8sMa4qhW4SEc/edit?pli=1) compartido.
- Diseño en Figma proporcionado: [Diseño en Figma](https://www.figma.com/file/DYVhRceKMd5TiSSXveLhxw/Desaf%C3%ADo-Front-end?type=design&node-id=0%3A1&mode=design&t=k5zi6Eub663yqRJC-1)

## Iniciar el proyecto

1. Clonar el repositorio
```
git clone https://github.com/lxcste1/puntospoint-challenge.git
cd puntospoint-challenge
```
2. Instalar las dependencias
```
npm install
```
3. Iniciar el proyecto
```
npm run dev
```
El proyecto estará disponible en http://localhost:3000.

## Realizar Pruebas en GTM
1. Acceder a GTM:
- Visita [Google Tag Manager](https://tagmanager.google.com/#/home).
- Inicia sesión con tu cuenta de Google.
  
2. Selecciona el Contenedor:
- Nombre del contenedor: puntospoint-challenge.vercel.app
  
3. Vista Previa y Depuración:
- Navegar a la pestaña "Vista Previa" en GTM.
- Hacer click en "Vista Previa" para obtener el enlace de vista previa.
- Este enlace permitirá realizar pruebas en el entorno de desarrollo.

### En caso de no contar con los permisos al contenedor

Es posible comprobar y "escuchar" los eventos desde el entorno de prueba.
Solo es necesario:
1. levantar el servidor
2. Realizar los eventos registrados
3. Desde el inspector de Google, escribir el comando "dataLayer":

![image](https://github.com/lxcste1/puntospoint-challenge/assets/118229315/8fc54d90-24ea-4715-aadd-52f3f3435e35)

Todos los eventos registrados se mostrarán en la consola.
