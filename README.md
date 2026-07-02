# 💼 Dashboard de Empleabilidad Personal

Una aplicación web (Single Page Application) ligera, intuitiva y completamente responsiva diseñada para organizar, gestionar y hacer un seguimiento estricto de postulaciones laborales y procesos de selección. 

Este proyecto está optimizado para su uso exclusivo y privado, aprovechando las capacidades del navegador para el almacenamiento de datos.

---

## 🚀 Características Principales

- **Diseño Basado en Tarjetas (Cards UX):** Interfaz moderna y adaptada tanto para computadoras de escritorio como para pantallas móviles, facilitando la lectura y actualización con un solo toque.
- **Categorización por Modalidad:** Clasificación instantánea de ofertas de trabajo en **Remoto 🏠**, **Híbrido 🏢** o **Presencial 🚗**.
- **Panel de Estadísticas en Tiempo Real:** Indicadores visuales automáticos que muestran el total de postulaciones hechas, procesos en fase de entrevista y ofertas recibidas.
- **Filtros Avanzados:** Opcionalidad para limpiar la vista y concentrarse únicamente en estados específicos (ej. ver solo las entrevistas activas), ocultando el historial de procesos cerrados.
- **Control de Estados Dinámico:** Cambio de estado directamente desde la tarjeta mediante un menú desplegable interactivo, actualizando los colores de forma inmediata.
- **Privacidad 100% Garantizada:** No utiliza servidores externos ni bases de datos en la nube. Toda la información ingresada se encripta de forma local en el almacenamiento del navegador.

---

## 🔒 Privacidad y Almacenamiento Local (`localStorage`)

Este proyecto utiliza el objeto de la API web **`localStorage`**. Esto significa que:
1. Tus postulaciones se guardan **físicamente en el almacenamiento de tu navegador** (Chrome, Safari, Firefox, Edge).
2. Si compartes el enlace de producción (GitHub Pages) con un tercero, este verá la aplicación completamente vacía y lista para su propio uso; **nadie más puede acceder a tus registros**.
3. *Nota importante:* Si borras el historial completo de navegación, las cookies y los datos de sitios de tu navegador, se podrían eliminar los datos registrados. Respáldalos de ser necesario.

---

## 🛠️ Instalación y Despliegue en GitHub Pages

Para poner tu dashboard en línea en menos de 3 minutos, sigue estos pasos:

1. **Crea un Repositorio en GitHub:**
   - Inicia sesión en tu cuenta de GitHub.
   - Crea un nuevo repositorio público (ej. `mi-dashboard-empleo`).

2. **Sube el Archivo Principal:**
   - Sube tu archivo `index.html` directamente a la raíz del repositorio.
   - Sube este archivo `README.md` para mantener documentado tu proyecto.
   - Realiza el *Commit* para guardar los cambios.

3. **Activa GitHub Pages:**
   - Ve a la pestaña **Settings** (Configuración) de tu repositorio.
   - En el menú lateral izquierdo, busca la sección **Pages**.
   - Bajo el apartado *Build and deployment*, localiza **Branch**, cambia la opción de `None` a `main` (o `root`) y presiona **Save**.

¡Listo! En unos instantes GitHub te proporcionará un enlace permanente del tipo `https://tu-usuario.github.io/mi-dashboard-empleo/` para que accedas desde cualquier lugar.

---

## 📋 Estructura de Datos de un Registro

Cada postulación almacena internamente las siguientes propiedades:
- `id`: Identificador único numérico basado en marca de tiempo.
- `date`: Fecha de registro formateada localmente (`DD/MM/AAAA`).
- `company`: Nombre de la organización contratante.
- `role`: Título del puesto o cargo vacante.
- `link`: Enlace web directo a la oferta de trabajo (opcional).
- `modality`: Categoría de asistencia (Remoto, Híbrido, Presencial).
- `status`: Estado actual del proceso (Postulado, Contacto, Entrevista, Oferta, Rechazado).

---
*Desarrollado de forma personalizada como herramienta de organización y productividad profesional.*
