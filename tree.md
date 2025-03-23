```
/
├── app/                              # Rutas principales (Next.js App Router)
│   ├── layout.tsx                    # Layout principal
│   ├── page.tsx                      # Página de inicio
│   ├── globals.css                   # Estilos globales
│   ├── about/                        # Sección Sobre Mí
│   │   └── page.tsx
│   ├── projects/                     # Sección de Proyectos
│   │   ├── page.tsx                  # Lista de proyectos
│   │   └── [slug]/                   # Páginas dinámicas de proyectos
│   │       └── page.tsx
│   ├── services/                     # Sección de Servicios
│   │   └── page.tsx
│   ├── blog/                         # Sección de Blog
│   │   ├── page.tsx                  # Lista de artículos
│   │   └── [slug]/                   # Artículos individuales
│   │       └── page.tsx
│   ├── contact/                      # Página de Contacto
│   │   └── page.tsx
│   ├── testimonials/                 # Testimonios
│   │   └── page.tsx
│   ├── resume/                       # CV/Currículum
│   │   └── page.tsx
│   └── api/                          # API Routes
│       ├── contact/
│       │   └── route.ts
│       └── newsletter/
│           └── route.ts
│
├── components/                       # Componentes reutilizables
│   ├── layout/                       # Componentes de layout
│   │   ├── header/                   # Cabecera
│   │   │   ├── header.tsx
│   │   │   └── mobile-header.tsx
│   │   ├── footer/                   # Pie de página
│   │   │   ├── footer.tsx
│   │   │   ├── footer-newsletter.tsx
│   │   │   └── footer-social.tsx
│   │   ├── navigation/               # Navegación
│   │   │   ├── main-nav.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   └── sidebar-nav.tsx
│   │   └── containers/               # Contenedores
│   │       ├── section-container.tsx
│   │       └── page-container.tsx
│   │
│   ├── ui/                           # Componentes de UI básicos
│   │   ├── button/
│   │   │   ├── button.tsx
│   │   │   └── icon-button.tsx
│   │   ├── card/
│   │   │   ├── card.tsx
│   │   │   └── card-hover.tsx
│   │   ├── form/
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── checkbox.tsx
│   │   │   └── select.tsx
│   │   ├── modal/
│   │   │   └── modal.tsx
│   │   └── typography/
│   │       ├── heading.tsx
│   │       └── paragraph.tsx
│   │
│   ├── sections/                     # Secciones de página
│   │   ├── home/
│   │   │   ├── hero.tsx
│   │   │   ├── featured-projects.tsx
│   │   │   └── cta-section.tsx
│   │   ├── about/
│   │   │   ├── bio-section.tsx
│   │   │   └── skills-section.tsx
│   │   ├── projects/
│   │   │   ├── project-grid.tsx
│   │   │   └── project-filters.tsx
│   │   └── contact/
│   │       └── contact-form.tsx
│   │
│   ├── features/                     # Componentes de características
│   │   ├── theme-switcher/
│   │   │   └── theme-switcher.tsx
│   │   ├── language-selector/
│   │   │   └── language-selector.tsx
│   │   └── search/
│   │       └── search-bar.tsx
│   │
│   ├── common/                       # Componentes comunes
│   │   ├── logo/
│   │   │   ├── logo.tsx
│   │   │   └── logo-small.tsx
│   │   ├── icons/
│   │   │   └── icon-set.tsx
│   │   ├── loaders/
│   │   │   └── spinner.tsx
│   │   └── animations/
│   │       └── fade-in.tsx
│   │
│   └── blocks/                       # Bloques de contenido
│       ├── testimonial-block.tsx
│       ├── portfolio-item.tsx
│       ├── blog-post-card.tsx
│       └── service-card.tsx
│
├── hooks/                            # Custom React hooks
│   ├── use-theme.ts
│   ├── use-scroll.ts
│   ├── use-media-query.ts
│   └── use-form.ts
│
├── lib/                              # Utilidades y funciones
│   ├── utils/
│   │   ├── format.ts
│   │   ├── validation.ts
│   │   └── animations.ts
│   ├── api/
│   │   ├── contact.ts
│   │   └── projects.ts
│   ├── config/
│   │   ├── site-config.ts
│   │   └── navigation.ts
│   └── constants/
│       └── routes.ts
│
├── public/                           # Archivos estáticos
│   ├── images/
│   │   ├── logo/
│   │   │   ├── logo.svg
│   │   │   └── favicon.ico
│   │   ├── projects/
│   │   ├── blog/
│   │   ├── about/
│   │   ├── icons/
│   │   └── backgrounds/
│   ├── fonts/
│   ├── videos/
│   └── documents/
│       └── resume.pdf
│
├── styles/                           # Estilos adicionales
│   ├── themes/
│   │   ├── dark.css
│   │   └── light.css
│   ├── animations.css
│   └── variables.css
│
├── types/                            # Definiciones de TypeScript
│   ├── project.ts
│   ├── blog.ts
│   └── common.ts
│
├── data/                             # Datos estáticos
│   ├── projects.ts
│   ├── testimonials.ts
│   ├── services.ts
│   └── blog-posts.ts
│
├── context/                          # Contextos de React
│   ├── theme-context.tsx
│   └── language-context.tsx
│
├── services/                         # Servicios externos
│   ├── analytics.ts
│   ├── email.ts
│   └── storage.ts
│
└── config/                           # Configuración del proyecto
    ├── tailwind.config.ts
    ├── next.config.js
    └── i18n.config.js
```
