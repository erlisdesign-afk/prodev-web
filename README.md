# 🧠 ProDev Company OS

> Tu equipo completo de especialistas, siempre disponible en Claude Code.

**13 Skills** · **32+ Comandos slash** · **5 áreas de outputs** · **Routing inteligente**

---

## ¿Qué es esto?

El ProDev Company OS convierte a Claude Code en un equipo de 13 especialistas
que trabajan con el contexto específico de ProDev. Desde estrategia de CEO
hasta automatización con IA, pasando por diseño UX, análisis competitivo y
creación de contenido.

Inspirado en [imperium-brain](https://github.com/ceoimperiumprojects/imperium-brain)
y adaptado completamente al stack y modelo de ProDev.

---

## Inicio rápido

```bash
# Abre Claude Code en la carpeta del proyecto
cd "E:\Trabajo\Prodev\Prodev Os"

# Claude cargará automáticamente .claude/CLAUDE.md
# Luego simplemente habla con Claude:
```

```
"Valida nuestra idea de negocio"
→ Activa: CEO Estratégico

"Analiza los competidores del espacio"
→ Activa: Competitive Intelligence

"Crea un post de LinkedIn sobre nuestro lanzamiento"
→ Activa: Brand Strategist → Content & Social

"Escribe el PRD para el feature de onboarding"
→ Activa: Product Manager
```

---

## Equipo de 13 especialistas

### 🏢 Fundación y Estrategia
| Skill | Qué hace |
|-------|----------|
| **CEO Estratégico** | Visión, modelo de negocio, OKRs, fundraising, decisiones estratégicas |
| **Brand Strategist** | Identidad de marca, tono de voz, posicionamiento, guía de estilo |

### 📊 Mercado e Inteligencia
| Skill | Qué hace |
|-------|----------|
| **Market Analyst** | TAM/SAM/SOM, tendencias, segmentación, análisis de industria |
| **Competitive Intelligence** | Mapa del ecosistema, feature matrix, pricing, gaps de mercado |
| **Buyer Persona** | Perfiles ICP, Jobs to be Done, guías de entrevistas a clientes |

### 🛠 Producto y Tecnología
| Skill | Qué hace |
|-------|----------|
| **Product Manager** | PRDs, roadmap RICE, experimentos, product-market fit |
| **Tech Architect** | Stack, arquitectura de sistemas, ADRs, seguridad, escalabilidad |
| **UX/UI Designer** | Flujos de usuario, sistemas de diseño, auditorías UX |

### 🚀 Crecimiento y Revenue
| Skill | Qué hace |
|-------|----------|
| **Revenue Strategist** | Pricing, métricas SaaS, unit economics, proyecciones financieras |
| **Marketing Strategist** | GTM, SEO, email marketing, campañas, funnels de conversión |
| **Content & Social** | Posts LinkedIn/Twitter/Instagram, calendarios de contenido |

### ⚙️ Operaciones e Inteligencia Artificial
| Skill | Qué hace |
|-------|----------|
| **Operations Designer** | SOPs, runbooks, playbooks, onboarding, RACI matrices |
| **AI Automation Architect** | Agentes IA, RAG, automatizaciones, prompt engineering |

---

## Estructura

```
Prodev Os/
├── .claude/
│   └── CLAUDE.md              ← Router principal + instrucciones
├── skills/
│   ├── ceo-estrategico/       ← 13 skills especializados
│   ├── brand-strategist/
│   ├── market-analyst/
│   ├── competitive-intelligence/
│   ├── buyer-persona/
│   ├── product-manager/
│   ├── tech-architect/
│   ├── ux-ui-designer/
│   ├── revenue-strategist/
│   ├── marketing-strategist/
│   ├── content-social/
│   ├── operations-designer/
│   └── ai-automation-architect/
├── outputs/
│   ├── 01-fundacion/          ← Visión, marca, modelo de negocio
│   ├── 02-mercado/            ← Personas, competidores, mercado
│   ├── 03-producto/           ← PRDs, roadmap, arquitectura
│   ├── 04-crecimiento/        ← GTM, marketing, pricing
│   └── 05-operaciones/        ← SOPs, automatizaciones
├── context/
│   └── prodev-context.md      ← ⚠️ Actualizar con datos reales de ProDev
├── .gitignore
└── README.md
```

---

## Primeros pasos recomendados

1. **Llena el contexto** → Edita `context/prodev-context.md` con los datos reales de ProDev
2. **Define la marca** → `/brand:crea-identidad`
3. **Mapea el mercado** → `/market:sizing` + `/intel:landscape`
4. **Crea las personas** → `/persona:crea`
5. **Planifica el producto** → `/pm:prd [feature principal]`

---

## Routing inteligente

El OS detecta cuando una tarea necesita múltiples skills y los encadena:

```
"Post on-brand sobre nuestro mercado"
  → brand-strategist (lee brand guide)
  → market-analyst (datos del mercado)
  → content-social (escribe el post)

"GTM completo para el lanzamiento"
  → market-analyst → buyer-persona → marketing-strategist
```

---

## Créditos

Construido sobre la arquitectura de [imperium-brain](https://github.com/ceoimperiumprojects/imperium-brain)
por ceoimperiumprojects — adaptado y extendido para ProDev.

---

*ProDev Company OS v1.0.0*
