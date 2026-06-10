const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  Header, Footer, PageNumber, LevelFormat
} = require('docx');
const fs = require('fs');

const ACCENT = "1A56DB";
const ACCENT_LIGHT = "EBF0FF";
const GRAY = "F4F5F7";
const TEXT = "111827";
const MUTED = "6B7280";
const WHITE = "FFFFFF";

const cellBorder = { style: BorderStyle.SINGLE, size: 1, color: "E5E7EB" };
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const borders = { top: cellBorder, bottom: cellBorder, left: cellBorder, right: cellBorder };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

function heading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 320, after: 160 },
    children: [new TextRun({ text, bold: true, size: 32, color: TEXT, font: "Inter" })]
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 120 },
    children: [new TextRun({ text, bold: true, size: 24, color: ACCENT, font: "Inter" })]
  });
}

function body(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 100 },
    children: [new TextRun({ text, size: 20, color: TEXT, font: "Inter", ...opts })]
  });
}

function spacer(size = 120) {
  return new Paragraph({ spacing: { after: size }, children: [] });
}

function pill(text, color = ACCENT_LIGHT, textColor = ACCENT) {
  return new TableCell({
    borders: noBorders,
    shading: { fill: color, type: ShadingType.CLEAR },
    margins: { top: 60, bottom: 60, left: 120, right: 120 },
    width: { size: 2200, type: WidthType.DXA },
    children: [new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text, size: 18, bold: true, color: textColor, font: "Inter" })]
    })]
  });
}

function agentRow(skill, comando, cuando, ejemplos, output, bg = WHITE) {
  const cellStyle = {
    borders,
    shading: { fill: bg, type: ShadingType.CLEAR },
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
  };

  return new TableRow({
    children: [
      new TableCell({
        ...cellStyle,
        width: { size: 1700, type: WidthType.DXA },
        children: [
          new Paragraph({ children: [new TextRun({ text: skill, bold: true, size: 19, color: TEXT, font: "Inter" })] })
        ]
      }),
      new TableCell({
        ...cellStyle,
        width: { size: 1800, type: WidthType.DXA },
        children: [
          new Paragraph({ children: [new TextRun({ text: comando, size: 18, color: ACCENT, font: "Courier New" })] })
        ]
      }),
      new TableCell({
        ...cellStyle,
        width: { size: 2400, type: WidthType.DXA },
        children: [new Paragraph({ children: [new TextRun({ text: cuando, size: 18, color: TEXT, font: "Inter" })] })]
      }),
      new TableCell({
        ...cellStyle,
        width: { size: 2200, type: WidthType.DXA },
        children: [new Paragraph({ children: [new TextRun({ text: ejemplos, size: 18, color: TEXT, font: "Inter" })] })]
      }),
      new TableCell({
        ...cellStyle,
        width: { size: 1260, type: WidthType.DXA },
        children: [new Paragraph({ children: [new TextRun({ text: output, size: 18, color: MUTED, font: "Inter" })] })]
      }),
    ]
  });
}

function tableHeader() {
  const hCell = (text, w) => new TableCell({
    borders,
    shading: { fill: ACCENT, type: ShadingType.CLEAR },
    margins: { top: 100, bottom: 100, left: 120, right: 120 },
    width: { size: w, type: WidthType.DXA },
    children: [new Paragraph({
      children: [new TextRun({ text, bold: true, size: 19, color: WHITE, font: "Inter" })]
    })]
  });
  return new TableRow({
    tableHeader: true,
    children: [
      hCell("Skill / Agente", 1700),
      hCell("Comando slash", 1800),
      hCell("Cuándo activarlo", 2400),
      hCell("Ejemplos de petición", 2200),
      hCell("Output → carpeta", 1260),
    ]
  });
}

function routingRow(peticion, orden, bg = WHITE) {
  const cellStyle = {
    borders,
    shading: { fill: bg, type: ShadingType.CLEAR },
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
  };
  return new TableRow({
    children: [
      new TableCell({
        ...cellStyle,
        width: { size: 4200, type: WidthType.DXA },
        children: [new Paragraph({ children: [new TextRun({ text: peticion, size: 18, color: TEXT, font: "Inter" })] })]
      }),
      new TableCell({
        ...cellStyle,
        width: { size: 5160, type: WidthType.DXA },
        children: [new Paragraph({ children: [new TextRun({ text: orden, size: 18, color: ACCENT, font: "Inter", bold: true })] })]
      }),
    ]
  });
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Inter", size: 20, color: TEXT } } },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Inter", color: TEXT },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0 }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Inter", color: ACCENT },
        paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 }
      },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 15840, height: 12240 },
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: ACCENT } },
          children: [
            new TextRun({ text: "ProDev Company OS  ", bold: true, size: 18, color: ACCENT, font: "Inter" }),
            new TextRun({ text: "— Guía de agentes y comandos", size: 18, color: MUTED, font: "Inter" }),
          ]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [
            new TextRun({ text: "Página ", size: 16, color: MUTED, font: "Inter" }),
            new TextRun({ children: [PageNumber.CURRENT], size: 16, color: MUTED, font: "Inter" }),
          ]
        })]
      })
    },
    children: [

      // ── TÍTULO ──────────────────────────────────────────
      new Paragraph({
        spacing: { before: 0, after: 80 },
        children: [new TextRun({ text: "Guía de Agentes", bold: true, size: 52, color: TEXT, font: "Inter" })]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "ProDev Company OS — Referencia rápida para activar cada especialista", size: 22, color: MUTED, font: "Inter" })]
      }),
      new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT } },
        spacing: { after: 280 },
        children: []
      }),

      // ── CÓMO FUNCIONA ───────────────────────────────────
      heading2("Cómo funciona el OS"),
      body("Antes de activar cualquier agente, Claude lee context/prodev-context.md para operar con datos reales de ProDev."),
      body("Cada agente tiene un SKILL.md con frameworks, plantillas y flujos de trabajo específicos para el rol."),
      body("Los outputs se guardan en la carpeta outputs/ que corresponde al tipo de trabajo."),
      spacer(200),

      // ── TABLA PRINCIPAL ─────────────────────────────────
      heading2("Directorio de agentes"),
      spacer(80),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [1700, 1800, 2400, 2200, 1260],
        rows: [
          tableHeader(),
          agentRow(
            "CEO Estratégico",
            "/ceo:valida-idea\n/ceo:pivot\n/ceo:fundraise",
            "Decisiones de alto nivel, visión, modelo de negocio, inversores, OKRs trimestrales",
            "«Valida este modelo de negocio», «Prepara el pitch deck», «¿Pivotamos o persistimos?»",
            "01-fundacion/",
            WHITE
          ),
          agentRow(
            "Brand Strategist",
            "/brand:crea-identidad\n/brand:revisa",
            "Identidad de marca, tono de voz, posicionamiento, guía de estilo, naming",
            "«Crea el brand guide», «¿Este copy es on-brand?», «Define los valores de ProDev»",
            "01-fundacion/",
            GRAY
          ),
          agentRow(
            "Market Analyst",
            "/market:sizing\n/market:segmentación",
            "TAM/SAM/SOM, tendencias de industria, segmentación, informes de mercado",
            "«¿Cuál es el tamaño del mercado?», «Segmenta nuestros usuarios potenciales»",
            "02-mercado/",
            WHITE
          ),
          agentRow(
            "Competitive Intel",
            "/intel:landscape\n/intel:deep-dive\n/intel:gaps",
            "Mapeo de competidores, matriz de features, análisis de pricing, gaps explotables",
            "«Mapea los 5 competidores principales», «¿Qué gaps tienen los líderes del mercado?»",
            "02-mercado/",
            GRAY
          ),
          agentRow(
            "Buyer Persona",
            "/persona:crea\n/persona:entrevista",
            "Perfiles de cliente ideal, JTBD, pain points, guías de entrevistas a usuarios",
            "«Crea el ICP de ProDev», «Diseña una guía de entrevistas para validar el dolor»",
            "02-mercado/",
            WHITE
          ),
          agentRow(
            "Product Manager",
            "/pm:prd\n/pm:prioriza\n/pm:pmf-check",
            "PRDs, roadmap, priorización RICE, user stories, experimentos, PMF check",
            "«Escribe el PRD de la feature X», «Prioriza el backlog con RICE», «¿Tenemos PMF?»",
            "03-producto/",
            GRAY
          ),
          agentRow(
            "Tech Architect",
            "/arch:stack-decision\n/arch:adr",
            "Decisiones de stack, arquitectura de sistemas, build vs buy, ADRs, deuda técnica",
            "«¿Qué stack usar para el MVP?», «Diseña la arquitectura de la API», «ADR para DB»",
            "03-producto/",
            WHITE
          ),
          agentRow(
            "UX/UI Designer",
            "/ux:flujo\n/ux:onboarding\n/ux:auditoria",
            "Flujos de usuario, wireframes descriptivos, onboarding, sistema de diseño, auditorías",
            "«Diseña el flujo de onboarding», «Audita la pantalla de signup», «Define el design system»",
            "03-producto/",
            GRAY
          ),
          agentRow(
            "Revenue Strategist",
            "/revenue:pricing\n/revenue:unit-economics",
            "Pricing, métricas SaaS (MRR/LTV/CAC/Churn), unit economics, proyecciones de revenue",
            "«Define la estrategia de precios», «Calcula el LTV:CAC», «Modela el MRR a 12 meses»",
            "04-crecimiento/",
            WHITE
          ),
          agentRow(
            "Marketing Strategist",
            "/marketing:gtm\n/marketing:campaña",
            "GTM, estrategia de canales, SEO, email marketing, funnels, campañas de adquisición",
            "«Diseña el GTM para el lanzamiento», «Crea el funnel de adquisición», «Estrategia SEO»",
            "04-crecimiento/",
            GRAY
          ),
          agentRow(
            "Content & Social",
            "/social:post-linkedin\n/social:calendario",
            "Posts LinkedIn/Twitter/Instagram, guiones de video, calendarios de contenido",
            "«Escribe 3 posts de LinkedIn sobre el problema que resolvemos», «Crea el calendario de mayo»",
            "04-crecimiento/",
            WHITE
          ),
          agentRow(
            "Operations Designer",
            "/ops:sop\n/ops:runbook",
            "SOPs, runbooks, playbooks, checklists, onboarding de equipo, estructura de procesos",
            "«Documenta el proceso de onboarding de clientes», «Crea el runbook de deploy»",
            "05-operaciones/",
            GRAY
          ),
          agentRow(
            "AI Automation Architect",
            "/ai:diseña-agente\n/ai:rag-setup\n/ai:automatiza",
            "Agentes IA, flujos con LLMs, RAG, pipelines n8n/Make/Zapier, sistemas multi-agente",
            "«Diseña un agente que califique leads», «Implementa RAG sobre la base de conocimiento»",
            "05-operaciones/",
            WHITE
          ),
        ]
      }),

      spacer(300),

      // ── ROUTING ─────────────────────────────────────────
      heading2("Routing inteligente — tareas que necesitan varios agentes"),
      body("Algunas peticiones requieren encadenar agentes. Este es el orden correcto:"),
      spacer(80),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [4200, 5160],
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({
                borders,
                shading: { fill: ACCENT, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 120, right: 120 },
                width: { size: 4200, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun({ text: "Si el usuario pide...", bold: true, size: 19, color: WHITE, font: "Inter" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: ACCENT, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 120, right: 120 },
                width: { size: 5160, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun({ text: "Activa en este orden", bold: true, size: 19, color: WHITE, font: "Inter" })] })]
              }),
            ]
          }),
          routingRow("Post on-brand sobre el mercado", "competitive-intelligence → content-social", WHITE),
          routingRow("Post de LinkedIn on-brand", "brand-strategist → content-social", GRAY),
          routingRow("Pricing para nuestro ICP", "buyer-persona → revenue-strategist", WHITE),
          routingRow("Estrategia GTM completa", "market-analyst → buyer-persona → marketing-strategist", GRAY),
          routingRow("PRD con contexto competitivo", "competitive-intelligence → product-manager", WHITE),
          routingRow("Automatizar un proceso interno", "operations-designer → ai-automation-architect", GRAY),
          routingRow("Arquitectura con estimación de costos", "tech-architect → revenue-strategist", WHITE),
          routingRow("Campaña de lanzamiento completa", "buyer-persona → brand-strategist → marketing-strategist → content-social", GRAY),
        ]
      }),

      spacer(300),

      // ── PROTOCOLO ────────────────────────────────────────
      heading2("Protocolo de activación (4 pasos)"),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [600, 8760],
        rows: [
          ...[
            ["1", "Lee context/prodev-context.md — es la fuente de verdad del proyecto."],
            ["2", "Identifica el agente. Usa la tabla de arriba o el routing inteligente."],
            ["3", "Lee skills/[nombre]/SKILL.md para activar los frameworks del rol."],
            ["4", "Ejecuta y guarda el output en la carpeta outputs/ que corresponda."],
          ].map(([n, t], i) => new TableRow({
            children: [
              new TableCell({
                borders: noBorders,
                shading: { fill: ACCENT, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 120, right: 120 },
                width: { size: 600, type: WidthType.DXA },
                verticalAlign: "center",
                children: [new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: n, bold: true, size: 22, color: WHITE, font: "Inter" })]
                })]
              }),
              new TableCell({
                borders: noBorders,
                shading: { fill: i % 2 === 0 ? GRAY : WHITE, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 160, right: 120 },
                width: { size: 8760, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun({ text: t, size: 20, color: TEXT, font: "Inter" })] })]
              }),
            ]
          }))
        ]
      }),

      spacer(300),

      // ── REGLAS ───────────────────────────────────────────
      heading2("Reglas del OS"),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [4680, 4680],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: "ECFDF5", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 160, right: 120 },
                width: { size: 4680, type: WidthType.DXA },
                children: [
                  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Siempre hacer", bold: true, size: 20, color: "065F46", font: "Inter" })] }),
                  ...[
                    "Leer prodev-context.md antes de cada skill",
                    "Usar el nombre ProDev en todos los outputs",
                    "Guardar outputs en la carpeta correcta",
                    "Indicar qué datos faltan para completar el análisis",
                    "Versionar documentos importantes con fecha en el nombre",
                  ].map(t => new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "✓  " + t, size: 18, color: "065F46", font: "Inter" })] }))
                ]
              }),
              new TableCell({
                borders,
                shading: { fill: "FEF2F2", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 160, right: 120 },
                width: { size: 4680, type: WidthType.DXA },
                children: [
                  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Nunca hacer", bold: true, size: 20, color: "991B1B", font: "Inter" })] }),
                  ...[
                    "Inventar datos sin indicar que son estimaciones",
                    "Usar frameworks genéricos sin adaptarlos a ProDev",
                    "Crear contenido de marca sin leer el brand guide primero",
                    "Crear SOPs sin entender primero el proceso manual",
                    "Activar un skill sin contexto del proyecto cargado",
                  ].map(t => new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "✗  " + t, size: 18, color: "991B1B", font: "Inter" })] }))
                ]
              }),
            ]
          })
        ]
      }),

      spacer(200),
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "ProDev Company OS v1.0.0", size: 16, color: MUTED, font: "Inter" })]
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync("E:/Trabajo/Prodev/Prodev Os/outputs/01-fundacion/guia-agentes-prodev.docx", buf);
  console.log("OK");
});
