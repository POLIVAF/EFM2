aca va todo lo que haremos en este trabajo, de a poco

//"pagina de github alojada"
git clone https://polivaf.github.io/EFM2/


Secciones Requeridas:

1-. Encabezado y Navbar: Una barra de navegación fija en la parte superior (sticky-top) con el nombre de la conferencia y enlaces a las diferentes secciones.

2-. Sección Principal (Hero): Una sección a todo lo ancho con un titular llamativo, una breve descripción del evento y un botón de llamada a la acción (CTA) prominente que diga "Regístrate Ahora".

4-. Sobre el Evento: Una sección que explique el propósito de la conferencia y lo que los asistentes pueden esperar.

5-. Oradores (Speakers): Una grilla con perfiles de los oradores. Cada orador debe estar en una Card de Bootstrap con su foto, nombre y una breve biografía.
Agenda (Schedule): Un diseño simple para la agenda. Puedes usar un List Group o Cards de Bootstrap para mostrar el programa.

6-. Formulario de Registro: Un formulario con campos para Nombre, Email y Cargo/Puesto de trabajo.

7-.Componentes de Bootstrap Sugeridos: Navbar, Botones, Cards, Formularios, Modal (para la confirmación de registro), List Group.


>>>>>>>>>>>>>>>>>

Estructura HTML: Tu archivo index.html debe usar etiquetas semánticas de HTML5 para una estructura clara y profesional (por ejemplo, <header>, <nav>, <main>, <section>, <footer>).

Framework Bootstrap: Este es un proyecto centrado en Bootstrap. Debes usar:

El Sistema de Grillas de Bootstrap (<div class="container">, <div class="row">, <div class="col-md-4">, etc.) para crear tu diseño.

Al menos cinco Componentes de Bootstrap diferentes (ej. Navbar, Botones, Cards, Formularios, Modal, Carrusel, Acordeón).

Clases de Utilidad de Bootstrap para espaciado (m-3, py-4), colores (bg-primary, text-white), alineación de texto (text-center) y flexbox (d-flex).

Interactividad con JavaScript: ¡Tu página no debe ser estática!

Incluye un formulario de contacto o registro.

Usando JavaScript, escucha el evento submit del formulario.

Dentro del manejador del evento, previene el envío por defecto (event.preventDefault()) y realiza una validación simple (ej. verificar que los campos no estén vacíos).

Si el formulario es válido, muestra un mensaje de éxito al usuario usando un Modal o Alert de Bootstrap.

Diseño Adaptable (Responsive): El sitio web final debe ser completamente adaptable y verse limpio y profesional en teléfonos móviles, tabletas y computadoras de escritorio.

Control de Versiones:

Inicializa un repositorio local de Git para tu proyecto.

Realiza commits frecuentes y significativos mientras construyes (ej. "feat: Agrega componente Navbar", "fix: Corrige layout responsive para móvil").

Crea un repositorio público en GitHub y sube tu código final.
