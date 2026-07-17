export const projectCategories = [
  'Todos',
  'Data Engineering',
  'Dashboards',
  'Machine Learning',
  'NLP',
  'Analítica de Riesgo',
  'GenAI',
  'Automatización',
];

export const projects = [
  {
    title: 'Dashboard 360 de Segmentación Operativa',
    category: 'Dashboards',
    status: 'Producto analítico',
    problem:
      'Existían múltiples puntos con comportamientos diferentes, pero no había una forma clara de priorizar acciones operativas.',
    initiative:
      'Propuse una matriz 2x2 para convertir datos dispersos en segmentos accionables: VIP, Fidelizar, Estables e Intervención.',
    solution:
      'Dashboard con KPIs, filtros, ranking, reglas de negocio y visualizaciones ejecutivas para leer comportamiento y riesgo.',
    stack: ['Python', 'Pandas', 'Streamlit', 'SQL', 'Reglas de negocio'],
    impact: 'Priorización de puntos críticos y mejor lectura ejecutiva para toma de decisiones.',
    improvement: 'Convierte análisis dispersos en una matriz ejecutiva para priorizar acciones por segmento, riesgo y potencial.',
    visual: 'Matriz 2x2 + ranking + indicadores',
    featured: true,
  },
  {
    title: 'Optimización de dashboards Streamlit con datos pesados',
    category: 'Data Engineering',
    status: 'Arquitectura de rendimiento',
    problem:
      'El dashboard se volvía lento o inestable al cargar archivos pesados, históricos completos y varias pestañas al mismo tiempo.',
    initiative:
      'Rediseñé el flujo para que el dashboard no hiciera todo el procesamiento en tiempo real.',
    solution:
      'Uso de Parquet, carga por demanda, precálculo de indicadores, lectura selectiva de columnas y cache estratégico.',
    stack: ['Streamlit', 'Python', 'Pandas', 'Parquet', 'PyArrow'],
    impact: 'Aplicación más liviana, escalable y estable para análisis con mayor volumen de datos.',
    improvement: 'Transforma una app pesada en una arquitectura más liviana mediante capas optimizadas, carga por demanda y datos preparados.',
    visual: 'Antes vs después de arquitectura',
  },
  {
    title: 'Modelo predictivo de transacciones por hora',
    category: 'Machine Learning',
    status: 'Forecasting operacional',
    problem:
      'Se necesitaba anticipar el comportamiento transaccional por hora para entender demanda esperada y posibles desviaciones.',
    initiative:
      'Diseñé variables temporales, rezagos, medias móviles y validación temporal para evitar fuga de información.',
    solution:
      'Modelo LightGBM con features de calendario, festivos, histórico y comportamiento reciente.',
    stack: ['Python', 'LightGBM', 'Scikit-learn', 'Pandas', 'Métricas'],
    impact: 'Base para alertas tempranas, comparación real vs esperado y monitoreo operativo.',
    improvement: 'Permite comparar comportamiento real vs esperado y construir una base para alertas tempranas por franja horaria.',
    visual: 'Real vs predicho + error por hora',
    featured: true,
  },
  {
    title: 'Sistema de alertas y anomalías transaccionales',
    category: 'Machine Learning',
    status: 'Monitoring inteligente',
    problem:
      'Las caídas o comportamientos atípicos podían detectarse tarde o generar demasiado ruido operativo.',
    initiative:
      'Propuse separar señales críticas de alertas de bajo impacto mediante reglas, umbrales e históricos.',
    solution:
      'Clasificación de severidad, comparación contra comportamiento esperado y visualización por prioridad.',
    stack: ['SQL', 'Python', 'Power BI', 'Streamlit', 'Anomaly Detection'],
    impact: 'Alertas más accionables y mejor priorización de intervención.',
    improvement: 'Ordena las señales por severidad para reducir ruido operativo y enfocar la gestión en casos realmente accionables.',
    visual: 'Semáforo + ranking de riesgo',
  },
  {
    title: 'Agente SQL para preguntas de negocio',
    category: 'GenAI',
    status: 'IA aplicada a datos',
    problem:
      'Los usuarios de negocio dependen de analistas para convertir preguntas en consultas SQL.',
    initiative:
      'Diseñé una propuesta de agente con diccionario de datos, reglas semánticas y validación de consultas.',
    solution:
      'Agente que interpreta preguntas, genera SQL seguro, valida campos permitidos y explica resultados.',
    stack: ['LLMs', 'LangChain', 'FastAPI', 'SQL', 'Data Dictionary'],
    impact: 'Autoservicio analítico con control, trazabilidad y menor dependencia operativa.',
    improvement: 'Reduce la fricción entre negocio y datos al convertir preguntas en consultas controladas, explicables y seguras.',
    visual: 'Pregunta → Reglas → SQL seguro → Respuesta',
    featured: true,
  },
  {
    title: 'RAG empresarial con documentos internos',
    category: 'GenAI',
    status: 'Knowledge assistant',
    problem:
      'La información interna vive en documentos, manuales, PDFs y archivos difíciles de consultar.',
    initiative:
      'Propuse una arquitectura RAG para responder con fuentes y reducir respuestas inventadas.',
    solution:
      'Extracción de documentos, chunking, embeddings, base vectorial y respuesta fundamentada.',
    stack: ['OpenAI', 'Hugging Face', 'LlamaIndex', 'Chroma', 'FastAPI'],
    impact: 'Búsqueda inteligente y acceso más rápido al conocimiento interno.',
    improvement: 'Hace que el conocimiento interno sea consultable con respuestas fundamentadas en documentos y fuentes trazables.',
    visual: 'Documentos → Embeddings → Vector DB → Respuesta',
  },
  {
    title: 'Automatización de cruces y validaciones con Python',
    category: 'Automatización',
    status: 'Operación eficiente',
    problem:
      'Procesos repetitivos de limpieza, cruce y validación consumían tiempo y eran propensos a errores manuales.',
    initiative:
      'Convertí tareas manuales en flujos reutilizables con trazabilidad y control de calidad.',
    solution:
      'Scripts y aplicaciones para cargar archivos, validar datos, cruzar fuentes y generar salidas limpias.',
    stack: ['Python', 'Pandas', 'OpenPyXL', 'Tkinter', 'SQL'],
    impact: 'Reducción de esfuerzo manual, mayor consistencia y procesos más repetibles.',
    improvement: 'Reemplaza procesos manuales repetitivos por flujos reutilizables con reglas, validaciones y salidas consistentes.',
    visual: 'Carga → Validación → Cruce → Reporte',
  },
  {
    title: 'Dashboard de malas prácticas y gestión operativa',
    category: 'Dashboards',
    status: 'Seguimiento accionable',
    problem:
      'La información de malas prácticas necesitaba seguimiento, clasificación y trazabilidad de gestión.',
    initiative:
      'Propuse que el dashboard no solo mostrara datos, sino que permitiera gestionar estados y medir acciones.',
    solution:
      'Tablero con estados de gestión, cierre, reincidencia, métricas por categoría y matriz de seguimiento.',
    stack: ['Streamlit', 'Supabase', 'Python', 'SQL', 'Pandas'],
    impact: 'Control operativo de acciones y visibilidad de puntos que requieren seguimiento.',
    improvement: 'Pasa de mirar registros aislados a gestionar estados, reincidencias y acciones operativas con trazabilidad.',
    visual: 'Matriz de categorías + estados',
  },
  {
    title: 'Procesamiento de Lenguaje Natural para revisión de CV',
    category: 'NLP',
    status: 'NLP aplicado a talento',
    problem:
      'La revisión manual de hojas de vida puede ser lenta, subjetiva y difícil de escalar cuando hay muchos perfiles por evaluar.',
    initiative:
      'Propuse automatizar la extracción de datos clave del CV y entregar una salida estructurada para apoyar la preselección.',
    solution:
      'Pipeline NLP para leer documentos, extraer nombre, contacto, años de experiencia, formación en IA y generar un JSON con score de confianza.',
    stack: ['Python', 'pdfplumber', 'spaCy', 'Transformers', 'Pandas', 'JSON'],
    impact: 'Acelera la revisión de perfiles y convierte documentos no estructurados en información comparable.',
    improvement: 'Convierte documentos no estructurados en datos comparables para apoyar revisión, clasificación y preselección de perfiles.',
    visual: 'CV → NLP → JSON + score',
    github: 'https://github.com/jhonsegura75Dorado/Procesamiento_de_lenguaje_Natural',
  },
  {
    title: 'Modelo de clasificación de vinos',
    category: 'Machine Learning',
    status: 'Clasificación supervisada',
    problem:
      'Clasificar tipos de vino a partir de variables químicas requiere seleccionar algoritmos, evaluar métricas y controlar el preprocesamiento.',
    initiative:
      'Desarrollé el proyecto con enfoque CRISP-DM, comparando modelos y registrando experimentos para tomar una decisión basada en desempeño.',
    solution:
      'Modelo de clasificación con Gradient Boosting, comparación contra Random Forest y SVM, evaluación con Accuracy/F1 y registro en MLflow.',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'SMOTE', 'MLflow', 'Databricks'],
    impact: 'Demuestra dominio del ciclo completo de modelación: preparación, entrenamiento, evaluación y trazabilidad del experimento.',
    improvement: 'Demuestra trazabilidad del ciclo ML: preparación, comparación de modelos, métricas y registro de experimentos.',
    visual: 'Modelo → Métricas → MLflow',
    github: 'https://github.com/jhonsegura75Dorado/Modelo_Vino',
  },
  {
    title: 'Modelo de predicción de precio de vivienda',
    category: 'Machine Learning',
    status: 'Regresión predictiva',
    problem:
      'Estimar el valor de una vivienda requiere procesar variables heterogéneas, tratar nulos, normalizar datos y evaluar regresores.',
    initiative:
      'Construí un flujo de entrenamiento con selección de variables, imputación, normalización y ensamble de modelos.',
    solution:
      'Modelo de regresión usando Random Forest, Gradient Boosting y VotingRegressor para estimar el valor total de avalúo.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'Gradient Boosting', 'GridSearchCV'],
    impact: 'Aplicación de machine learning para valoración predictiva, comparación de modelos y medición con MSE/R².',
    improvement: 'Estructura un flujo de regresión para estimar valores, comparar modelos y explicar desempeño predictivo.',
    visual: 'Features → Ensamble → Predicción',
    github: 'https://github.com/jhonsegura75Dorado/Modelo_Precio_Vivienda',
  },
  {
    title: 'Modelo de estimación de costos',
    category: 'Machine Learning',
    status: 'Estimación y regresión',
    problem:
      'La estimación manual de costos puede ser lenta, inconsistente y sensible a supuestos no documentados.',
    initiative:
      'Planteé el uso de datos históricos y variables explicativas para construir una estimación más objetiva y repetible.',
    solution:
      'Flujo de modelación para preparar datos, evaluar variables, entrenar un modelo predictivo y comparar el error de estimación.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Regresión', 'Validación'],
    impact: 'Estandariza la estimación y permite comparar escenarios con una lógica basada en datos.',
    improvement: 'Lleva la estimación de costos desde criterios manuales hacia un proceso reproducible basado en variables históricas.',
    visual: 'Histórico → Modelo → Costo estimado',
  },
  {
    title: 'Modelo de estimación de costos de construcción',
    category: 'Machine Learning',
    status: 'Analítica predictiva',
    problem:
      'Los costos de construcción dependen de múltiples variables y requieren análisis para reducir incertidumbre en presupuestos.',
    initiative:
      'Propuse estructurar un modelo que conecte variables del proyecto con una estimación predictiva de costos.',
    solution:
      'Preparación de datos, análisis de variables relevantes, entrenamiento de modelo y evaluación del error de predicción.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'EDA', 'Regresión'],
    impact: 'Apoya decisiones de presupuesto, planeación y control de costos con un enfoque cuantitativo.',
    improvement: 'Apoya planeación y presupuesto con una estimación cuantitativa basada en variables del proyecto.',
    visual: 'Variables del proyecto → Predicción de costo',
  },
  {
    title: 'Detección de productos falsos en marketplace',
    category: 'Analítica de Riesgo',
    status: 'Fraude y marketplace',
    problem:
      'Los productos falsificados afectan la confianza del cliente, la reputación de la plataforma y la competencia justa entre vendedores.',
    initiative:
      'Exploré patrones, reglas de moderación, scores y comportamiento de vendedores para proponer estrategias de detección.',
    solution:
      'EDA profundo, ingeniería de características, análisis de variables como marca, dominio, score, moderación, rollback y fake.',
    stack: ['Python', 'Pandas', 'EDA', 'Visualización', 'Feature Engineering'],
    impact: 'Genera insights para mejorar detección, priorizar alertas y anticipar tácticas de evasión de reglas.',
    improvement: 'Ayuda a priorizar señales de riesgo para moderación y detección temprana de posibles falsificaciones.',
    visual: 'Marketplace → Patrones → Alertas',
    github: 'https://github.com/jhonsegura75Dorado/Productos_Falsos',
  },
  {
    title: 'Detección de mala práctica transaccional',
    category: 'Analítica de Riesgo',
    status: 'Detección de fraccionamiento',
    problem:
      'El fraccionamiento de una transacción de alto valor en varias transacciones pequeñas puede usarse para evadir controles o límites.',
    initiative:
      'Diseñé una lógica de detección basada en agrupación, heurísticas y scoring para identificar patrones sospechosos.',
    solution:
      'Pipeline con procesamiento de datos, lógica de detección, agrupación de transacciones y priorización de casos por riesgo.',
    stack: ['Python', 'Pandas', 'Heurísticas', 'Scoring', 'Data Pipeline'],
    impact: 'Permite detectar patrones operativos de riesgo y entregar casos priorizados para revisión o gestión.',
    improvement: 'Agrupa transacciones, aplica heurísticas y prioriza casos para revisión según riesgo operativo.',
    visual: 'Transacciones → Heurísticas → Riesgo',
    github: 'https://github.com/jhonsegura75Dorado/Detecci-n-de-Mala-Pr-ctica',
  },
];
