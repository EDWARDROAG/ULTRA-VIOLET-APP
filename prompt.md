Eres un desarrollador frontend experto en React, TailwindCSS y animaciones. Debes modificar y completar un proyecto existente que ya levanta pero está sin estilos y con funcionalidades incompletas.

## 🛠 Tecnologías fijas del proyecto
- React 18.2.0
- React Router 6.16.0
- TailwindCSS 3.3.2
- shadcn/ui (menú móvil, formularios, notificaciones)
- Framer Motion (animaciones)
- react-hook-form (validación formulario contacto)
- Sonner (toasts)

## 📁 Estructura actual del proyecto
El proyecto está alojado en GitHub y se desplegará con GitHub Pages. El código actual levanta pero:
- No tiene estilos aplicados
- El formulario de contacto no funciona completamente
- Las imágenes no están organizadas
- El diseño no es responsivo

## 🎨 Identidad del cliente: Aura Violet SAS
- **Nombre comercial:** Aura Violet  
- **Dueña/Contacto:** Alexandra Lopez - auraviolet@gmail.com  
- **Colores obligatorios:** MORADO (#6B21A8 o similar), NEGRO (#111111), DORADO (#D4AF37), BLANCO (#FFFFFF)
- **Logotipo:** El cliente entregó un logo. Debes buscarlo en la carpeta `assets/logo/` o si no está, descargar uno temporal estilo minimalista con iniciales "AV" o un monograma violeta y dorado.
- **Tono visual:** Creativo, elegante, moderno, artesanal pero profesional.

## 🖼 Imágenes
El cliente tiene una carpeta `imagenes-de-muestra-cliente` con fotos de referencia. Debes:
1. Revisar esa carpeta para entender el estilo visual que quiere.
2. Para las imágenes que falten (ej. fondo hero, iconos, productos, etc.), descargarlas de internet (Unsplash, Pexels, Freepik) y guardarlas en carpetas organizadas:
   - `public/images/hero/`
   - `public/images/servicios/`
   - `public/images/galeria/`
   - `public/images/logo/`
   - `public/images/icons/`

## 🧩 Páginas requeridas (React Router)
Crear o modificar estas 5 páginas con navegación funcional:

1. **Home**
   - Hero con fondo oscuro, texto morado/dorado, CTA a Servicios y Contacto
   - Breve resumen de servicios (4 tarjetas)
   - Testimonios o logos de clientes (placeholders iniciales)
   - Footer con contacto y redes (aunque sean #)

2. **Servicios**
   - Mostrar las 4 categorías principales con íconos e imágenes:
     1. Detalles y regalos personalizados
     2. Diseño gráfico e impresión
     3. Trabajos escolares y académicos
     4. Papelería creativa y manualidades
   - Cada servicio debe tener descripción y botón "Consultar" que abre el formulario de contacto.

3. **Galería**
   - Grid responsivo (2 columnas en móvil, 3 en tablet, 4 en desktop)
   - Imágenes de muestra reales (de la carpeta del cliente + placeholder hasta 12 imágenes)
   - Al hacer clic en imagen → modal o lightbox (puede ser simple con Tailwind y estado local)

4. **Acerca de**
   - Misión, Visión, Valores (con tarjetas o grid)
   - Público objetivo (lista o badges)
   - Valor diferencial destacado
   - Foto o avatar de Alexandra Lopez (placeholder si no hay)

5. **Contacto**
   - Formulario con `react-hook-form` validando:
     - Nombre (requerido)
     - Email (formato válido)
     - Teléfono (opcional)
     - Tipo de servicio (select con las 4 categorías)
     - Mensaje (mínimo 10 caracteres)
   - Al enviar → mostrar toast con `sonner` (éxito simulado, no hay backend real)
   - Mostrar email de contacto: auraviolet@gmail.com
   - Placeholder de WhatsApp y horarios

## 🧭 Navegación y menú
- Header fijo (transparente a blanco/negro al hacer scroll)
- Menú desktop: links horizontales
- Menú móvil: sidebar o drawer con `shadcn/ui`
- Activar animaciones de entrada con `Framer Motion` en cada página (fade-up)

## 📱 Responsive (Tailwind)
- Mobile first
- Padding adecuado
- Tipografía legible
- Botones táctiles grandes
- Grids flexibles

## 🎬 Animaciones Framer Motion
- Animación suave al cargar cada página (opacity + y)
- Hover en tarjetas de servicios (scale, shadow)
- Transición entre rutas

## ⚠️ Entregables finales
- Código funcionando sin errores de consola
- Despliegue funcional en GitHub Pages
- El repositorio debe tener un README con instrucciones para correrlo localmente
- El formulario NO debe recargar la página, solo mostrar toast de éxito

## 📦 Notas adicionales
- Si faltan imágenes, descargar y nombrarlas como: `servicio-detalles.jpg`, `galeria-1.jpg`, etc.
- Usar componentes `shadcn/ui` para: botones, input, textarea, select, drawer móvil.
- No necesitas backend ni API real.
- El cliente es muy visual, prioriza la estética morado/negro/dorado.

👉 Tu tarea es modificar el proyecto actual respetando las tecnologías y lograr que se vea como un sitio moderno, funcional y alineado con la identidad de Aura Violet.

especificaciones cliente "
Aura Violet

aura-violet • Enviado: 13/6/2026

¿A qué se dedica?

Aura Violet SAS es un emprendimiento creativo dedicado al diseño, elaboración y personalización de detalles especiales para toda ocasión. Combinamos creatividad, diseño gráfico y trabajos manuales para ofrecer productos únicos y soluciones personalizadas para nuestros clientes.

¿Qué ofrecemos?

1. Detalles y regalos personalizados

Ramos y arreglos florales
Cajas sorpresa para cumpleaños
Detalles románticos
Regalos personalizados para fechas especiales
Decoraciones temáticas

2. Diseño gráfico e impresión

Tarjetas personalizadas
Volantes y flyers publicitarios
Menús para restaurantes y negocios
Invitaciones digitales e impresas
Diseño de logos e identidad visual

3. Trabajos escolares y académicos

Carteleras educativas
Carteles informativos
Dibujos artísticos
Maquetas escolares
Material didáctico

4. Papelería creativa y manualidades

Tarjetería artesanal
Decoraciones personalizadas
Etiquetas y stickers
Productos hechos a mano
Misión

Crear experiencias memorables mediante detalles personalizados, diseños creativos y trabajos de calidad que transmitan emociones, ayuden a comunicar ideas y satisfagan las necesidades de nuestros clientes.

Visión

Ser una marca reconocida por la creatividad, calidad y originalidad de nuestros productos y servicios, convirtiéndonos en una opción confiable para detalles personalizados, diseño gráfico y trabajos escolares.

Público objetivo
Estudiantes
Padres de familia
Emprendedores
Negocios locales
Parejas y personas que buscan regalos personalizados
Instituciones educativas
Valor diferencial

En Violet Studio encuentras en un solo lugar:

Detalles personalizados
Diseño gráfico profesional
Trabajos escolares creativos
Papelería y manualidades
Atención personalizada y diseños únicos

En resumen, tu negocio trata de:
"La creación de detalles personalizados, diseño gráfico y soluciones creativas para celebraciones, regalos, publicidad y proyectos escolares."

Contacto: Alexandra Lopez (auraviolet@gmail.com)

Web: 

WhatsApp: 

Logo enviado: 

¿Cómo quiere la página?

MORADO,NEGRO,DORADO Y BLANCO
"