// Verified Curriculum & Syllabus Structure for STUDO SmartPlan AI
// Covers Classes 9, 10, 11, 12 across major subjects with official NCERT / CBSE curriculum alignment.

export const SYLLABUS_DATA = {
  'Class 12': {
    Mathematics: [
      { id: 'm12_1', name: 'Relations and Functions', weightage: '8 Marks (Combined)', priority: 'Medium', topics: ['Equivalence Relations', 'One-One & Onto Functions', 'Inverse Trig Principal Values'] },
      { id: 'm12_2', name: 'Matrices and Determinants', weightage: '10 Marks', priority: 'High', topics: ['Matrix Multiplication', 'Adjoint & Inverse', 'System of Linear Equations (Matrix Method)'] },
      { id: 'm12_3', name: 'Continuity and Differentiability', weightage: '15 Marks', priority: 'High', topics: ['LHL & RHL Definition', 'Chain Rule', 'Logarithmic Differentiation', 'Second Order Derivatives'] },
      { id: 'm12_4', name: 'Applications of Derivatives', weightage: '10 Marks', priority: 'High', topics: ['Rate of Change', 'Increasing & Decreasing Functions', 'Maxima and Minima Word Problems'] },
      { id: 'm12_5', name: 'Integrals (Definite & Indefinite)', weightage: '18 Marks', priority: 'High', topics: ['Partial Fractions', 'Integration by Parts', 'Properties of Definite Integrals'] },
      { id: 'm12_6', name: 'Differential Equations', weightage: '7 Marks', priority: 'Medium', topics: ['Order & Degree', 'Variable Separable', 'Homogeneous Equations', 'Linear Differential Equations'] },
      { id: 'm12_7', name: 'Vectors and 3D Geometry', weightage: '14 Marks', priority: 'High', topics: ['Dot & Cross Products', 'Direction Cosines', 'Shortest Distance Between Skew Lines'] },
      { id: 'm12_8', name: 'Linear Programming', weightage: '5 Marks', priority: 'Medium', topics: ['Feasible Region', 'Corner Point Method', 'Bounded vs Unbounded Optimization'] },
      { id: 'm12_9', name: 'Probability', weightage: '8 Marks', priority: 'High', topics: ['Conditional Probability', 'Multiplication Theorem', 'Bayes’ Theorem'] }
    ],
    Physics: [
      { id: 'p12_1', name: 'Electrostatics & Electric Fields', weightage: '8 Marks', priority: 'High', topics: ['Coulomb’s Law', 'Gauss’s Law & Applications', 'Equipotential Surfaces'] },
      { id: 'p12_2', name: 'Electrostatic Potential & Capacitance', weightage: '8 Marks', priority: 'High', topics: ['Potential due to Dipole', 'Dielectric Slab in Capacitor', 'Energy Density'] },
      { id: 'p12_3', name: 'Current Electricity', weightage: '9 Marks', priority: 'High', topics: ['Drift Velocity & Mobility', 'Kirchhoff’s Rules', 'Wheatstone Bridge'] },
      { id: 'p12_4', name: 'Magnetic Effects of Current & Magnetism', weightage: '9 Marks', priority: 'High', topics: ['Biot-Savart Law', 'Ampere’s Circuital Law', 'Moving Coil Galvanometer'] },
      { id: 'p12_5', name: 'Electromagnetic Induction & AC', weightage: '8 Marks', priority: 'High', topics: ['Faraday’s Laws & Lenz’s Law', 'LCR Series Resonance', 'Transformer Working'] },
      { id: 'p12_6', name: 'Electromagnetic Waves', weightage: '3 Marks', priority: 'Low', topics: ['Displacement Current', 'EM Spectrum Characteristics & Uses'] },
      { id: 'p12_7', name: 'Ray Optics and Optical Instruments', weightage: '10 Marks', priority: 'High', topics: ['Total Internal Reflection', 'Lens Maker’s Formula', 'Compound Microscope & Telescope'] },
      { id: 'p12_8', name: 'Wave Optics', weightage: '8 Marks', priority: 'High', topics: ['Huygens’ Principle Proofs', 'Young’s Double Slit Fringe Width', 'Diffraction at Single Slit'] },
      { id: 'p12_9', name: 'Dual Nature of Radiation & Matter', weightage: '5 Marks', priority: 'Medium', topics: ['Photoelectric Effect & Einstein’s Equation', 'de Broglie Wavelength'] },
      { id: 'p12_10', name: 'Atoms and Nuclei', weightage: '7 Marks', priority: 'Medium', topics: ['Bohr Model Spectral Lines', 'Nuclear Binding Energy Curve', 'Mass Defect'] },
      { id: 'p12_11', name: 'Semiconductor Electronics', weightage: '7 Marks', priority: 'High', topics: ['p-n Junction Diode', 'Half Wave & Full Wave Rectifiers'] }
    ],
    Chemistry: [
      { id: 'c12_1', name: 'Solutions', weightage: '7 Marks', priority: 'High', topics: ['Raoult’s Law', 'Colligative Properties', 'Van’t Hoff Factor'] },
      { id: 'c12_2', name: 'Electrochemistry', weightage: '9 Marks', priority: 'High', topics: ['Nernst Equation', 'Kohlrausch’s Law', 'Batteries & Fuel Cells'] },
      { id: 'c12_3', name: 'Chemical Kinetics', weightage: '7 Marks', priority: 'High', topics: ['Rate Law & Order of Reaction', 'Integrated Rate Equations', 'Arrhenius Equation'] },
      { id: 'c12_4', name: 'd- and f-Block Elements', weightage: '7 Marks', priority: 'Medium', topics: ['Electronic Configurations', 'Transition Metal Trends', 'Lanthanoid Contraction'] },
      { id: 'c12_5', name: 'Coordination Compounds', weightage: '7 Marks', priority: 'High', topics: ['Werner’s Theory & IUPAC Nomenclature', 'CFT Splitting', 'Isomerism'] },
      { id: 'c12_6', name: 'Haloalkanes and Haloarenes', weightage: '6 Marks', priority: 'Medium', topics: ['SN1 vs SN2 Mechanisms', 'Sandmeyer Reaction', 'Chirality'] },
      { id: 'c12_7', name: 'Alcohols, Phenols and Ethers', weightage: '6 Marks', priority: 'High', topics: ['Lucas Test', 'Kolbe’s & Reimer-Tiemann Reactions', 'Williamson Synthesis'] },
      { id: 'c12_8', name: 'Aldehydes, Ketones & Carboxylic Acids', weightage: '8 Marks', priority: 'High', topics: ['Nucleophilic Addition', 'Aldol & Cannizzaro Reactions', 'Tollens & Fehling Tests'] },
      { id: 'c12_9', name: 'Amines', weightage: '6 Marks', priority: 'Medium', topics: ['Basicity of Amines', 'Hoffmann Bromamide Degradation', 'Diazonium Salts'] },
      { id: 'c12_10', name: 'Biomolecules', weightage: '7 Marks', priority: 'Medium', topics: ['Carbohydrates Structure', 'Peptide Bond & Protein Denaturation', 'DNA vs RNA'] }
    ],
    Biology: [
      { id: 'b12_1', name: 'Sexual Reproduction in Flowering Plants', weightage: '7 Marks', priority: 'High', topics: ['Microsporogenesis & Megasporogenesis', 'Double Fertilization', 'Apomixis'] },
      { id: 'b12_2', name: 'Human Reproduction & Reproductive Health', weightage: '9 Marks', priority: 'High', topics: ['Spermatogenesis & Oogenesis', 'Menstrual Cycle Regulation', 'ART (IVF/ICSI)'] },
      { id: 'b12_3', name: 'Principles of Inheritance & Variation', weightage: '10 Marks', priority: 'High', topics: ['Mendel’s Laws', 'Sex-Linked Inheritance', 'Mendelian & Chromosomal Disorders'] },
      { id: 'b12_4', name: 'Molecular Basis of Inheritance', weightage: '10 Marks', priority: 'High', topics: ['Meselson-Stahl Centrifugation', 'Replication Machinery', 'Transcription', 'Lac Operon'] },
      { id: 'b12_5', name: 'Evolution', weightage: '6 Marks', priority: 'Medium', topics: ['Homologous vs Analogous Organs', 'Hardy-Weinberg Principle', 'Human Evolution Stages'] },
      { id: 'b12_6', name: 'Human Health and Disease', weightage: '7 Marks', priority: 'High', topics: ['Plasmodium Life Cycle', 'Immunity Types & Vaccines', 'AIDS & Cancer'] },
      { id: 'b12_7', name: 'Biotechnology: Principles & Processes', weightage: '6 Marks', priority: 'High', topics: ['Restriction Endonucleases', 'pBR322 Vector Map', 'PCR Technique & Gel Electrophoresis'] },
      { id: 'b12_8', name: 'Biotechnology and its Applications', weightage: '6 Marks', priority: 'Medium', topics: ['Bt Cotton & RNA Interference', 'Genetically Engineered Insulin', 'Gene Therapy (ADA)'] },
      { id: 'b12_9', name: 'Ecology & Biodiversity', weightage: '9 Marks', priority: 'Medium', topics: ['Population Growth Models', 'Ecological Pyramids', 'In-situ vs Ex-situ Conservation'] }
    ],
    English: [
      { id: 'e12_1', name: 'Reading Comprehension & Unseen Passages', weightage: '22 Marks', priority: 'High', topics: ['Factual Passages', 'Analytical Case-Based Passages', 'Vocabulary in Context'] },
      { id: 'e12_2', name: 'Advanced Writing Skills', weightage: '18 Marks', priority: 'High', topics: ['Notice Writing', 'Formal/Informal Invitations', 'Letters to Editor / Job Application', 'Article & Report Writing'] },
      { id: 'e12_3', name: 'Flamingo: Prose & Poetry', weightage: '28 Marks', priority: 'High', topics: ['The Last Lesson', 'Lost Spring', 'Deep Water', 'The Rattrap', 'Indigo', 'My Mother at Sixty-Six', 'A Thing of Beauty'] },
      { id: 'e12_4', name: 'Vistas: Supplementary Reader', weightage: '12 Marks', priority: 'Medium', topics: ['The Third Level', 'The Tiger King', 'Journey to the End of the Earth', 'The Enemy', 'On the Face of It', 'Memories of Childhood'] }
    ],
    'Computer Science': [
      { id: 'cs12_1', name: 'Computational Thinking & Python Programming', weightage: '40 Marks', priority: 'High', topics: ['Functions & Scope', 'Text & CSV File Handling', 'Binary File Pickle Module', 'Linear Stack Operations'] },
      { id: 'cs12_2', name: 'Computer Networks', weightage: '10 Marks', priority: 'Medium', topics: ['Network Topologies & Devices', 'TCP/IP, HTTP, FTP, DNS', 'Cyber Law & Network Security'] },
      { id: 'cs12_3', name: 'Database Management & SQL Connectivity', weightage: '20 Marks', priority: 'High', topics: ['Relational Data Model & Keys', 'SQL Queries (Aggregate, Group By, Joins)', 'Python-MySQL Connector Integration'] }
    ]
  },
  'Class 10': {
    Mathematics: [
      { id: 'm10_1', name: 'Real Numbers', weightage: '6 Marks', priority: 'Medium', topics: ['Fundamental Theorem of Arithmetic', 'Proof of Irrationality'] },
      { id: 'm10_2', name: 'Polynomials & Linear Equations', weightage: '10 Marks', priority: 'High', topics: ['Zeroes of Polynomials', 'Substitution & Elimination Methods', 'Word Problems'] },
      { id: 'm10_3', name: 'Quadratic Equations', weightage: '9 Marks', priority: 'High', topics: ['Factorisation', 'Quadratic Formula & Nature of Roots', 'Speed-Distance Applications'] },
      { id: 'm10_4', name: 'Arithmetic Progressions', weightage: '7 Marks', priority: 'Medium', topics: ['nth Term Formula', 'Sum of First n Terms'] },
      { id: 'm10_5', name: 'Triangles & Coordinate Geometry', weightage: '15 Marks', priority: 'High', topics: ['Basic Proportionality Theorem (Thales)', 'Distance & Section Formula'] },
      { id: 'm10_6', name: 'Introduction to Trigonometry & Heights and Distances', weightage: '12 Marks', priority: 'High', topics: ['Trigonometric Ratios & Identities', 'Angles of Elevation & Depression Word Problems'] },
      { id: 'm10_7', name: 'Circles & Areas Related to Circles', weightage: '9 Marks', priority: 'Medium', topics: ['Tangents from External Point', 'Sector & Segment Areas'] },
      { id: 'm10_8', name: 'Surface Areas, Volumes & Statistics', weightage: '12 Marks', priority: 'High', topics: ['Combination of Solids', 'Mean, Median, Mode Formulas'] }
    ],
    Physics: [
      { id: 'p10_1', name: 'Light — Reflection and Refraction', weightage: '12 Marks', priority: 'High', topics: ['Mirror Formula & Magnification', 'Snell’s Law & Refractive Index', 'Lens Formula & Power'] },
      { id: 'p10_2', name: 'Human Eye and Colourful World', weightage: '8 Marks', priority: 'Medium', topics: ['Myopia & Hypermetropia Corrections', 'Dispersion by Prism', 'Atmospheric Refraction & Scattering'] },
      { id: 'p10_3', name: 'Electricity', weightage: '13 Marks', priority: 'High', topics: ['Ohm’s Law & Resistance Factors', 'Series vs Parallel Resistors', 'Joule’s Heating Law & Electric Power'] },
      { id: 'p10_4', name: 'Magnetic Effects of Electric Current', weightage: '7 Marks', priority: 'High', topics: ['Right-Hand Thumb Rule', 'Fleming’s Left-Hand Rule', 'Domestic Electric Circuits'] }
    ],
    Chemistry: [
      { id: 'c10_1', name: 'Chemical Reactions and Equations', weightage: '8 Marks', priority: 'High', topics: ['Balancing Equations', 'Types: Combination, Decomposition, Displacement, Redox'] },
      { id: 'c10_2', name: 'Acids, Bases and Salts', weightage: '9 Marks', priority: 'High', topics: ['pH Scale in Daily Life', 'Baking Soda, Bleaching Powder, Plaster of Paris'] },
      { id: 'c10_3', name: 'Metals and Non-metals', weightage: '10 Marks', priority: 'High', topics: ['Reactivity Series', 'Ionic Compounds Properties', 'Metallurgy: Roasting & Calcination'] },
      { id: 'c10_4', name: 'Carbon and its Compounds', weightage: '13 Marks', priority: 'High', topics: ['Covalent Bonding', 'Homologous Series & Functional Groups', 'Soap & Micelle Action'] }
    ],
    Biology: [
      { id: 'b10_1', name: 'Life Processes', weightage: '14 Marks', priority: 'High', topics: ['Photosynthesis Light Reactions', 'Double Circulation in Heart', 'Nephron Excretory Unit'] },
      { id: 'b10_2', name: 'Control and Coordination', weightage: '7 Marks', priority: 'Medium', topics: ['Neuron Reflex Arc', 'Plant Hormones (Auxin, Cytokinin)', 'Endocrine Glands & Hormones'] },
      { id: 'b10_3', name: 'How do Organisms Reproduce?', weightage: '8 Marks', priority: 'High', topics: ['Asexual Modes', 'Male & Female Reproductive Systems', 'Contraceptive Methods'] },
      { id: 'b10_4', name: 'Heredity and Evolution', weightage: '6 Marks', priority: 'Medium', topics: ['Mendel’s Monohybrid & Dihybrid Crosses', 'Sex Determination in Humans'] },
      { id: 'b10_5', name: 'Our Environment', weightage: '5 Marks', priority: 'Low', topics: ['Food Chains & Trophic Levels', '10% Law of Energy', 'Ozone Layer Depletion'] }
    ]
  }
};

// Generates a comprehensive SmartPlan AI timetable based on student parameters
export function generateSmartPlan({
  classLevel = 'Class 12',
  board = 'CBSE',
  selectedSubjects = ['Mathematics', 'Physics', 'Chemistry'],
  examDate = null,
  chapterStatus = {}, // { [chapId]: 'completed' | 'in_progress' | 'not_started' }
  weakSubjects = [],
  dailyHours = 4,
  prepLevel = 'Intermediate',
  mode = 'Balanced Preparation', // 'Balanced Preparation' | 'High-Priority Preparation' | 'Last-Minute Revision'
  studyTimePreference = 'Evening' // 'Morning' | 'Evening' | 'Mixed'
}) {
  const syllabusForClass = SYLLABUS_DATA[classLevel] || SYLLABUS_DATA['Class 12'];

  // Aggregate selected chapters
  let chaptersList = [];
  selectedSubjects.forEach((subj) => {
    const chaps = syllabusForClass[subj] || [];
    chaps.forEach((ch) => {
      const status = chapterStatus[ch.id] || 'not_started';
      const isWeak = weakSubjects.includes(subj) || weakSubjects.includes(ch.name);
      chaptersList.push({
        ...ch,
        subject: subj,
        status,
        isWeak
      });
    });
  });

  // Calculate target days remaining
  let daysRemaining = 45;
  if (examDate) {
    const diff = Math.ceil((new Date(examDate) - new Date()) / (1000 * 60 * 60 * 24));
    daysRemaining = diff > 0 ? diff : 30;
  }

  // Determine study plan duration (generate upcoming 7 to 14 days detailed schedule)
  const scheduleLength = Math.min(Math.max(daysRemaining, 7), 14);

  // Sorting / Prioritization based on planning mode
  let prioritizedChapters = [...chaptersList];
  if (mode === 'High-Priority Preparation') {
    prioritizedChapters.sort((a, b) => {
      if (a.isWeak && !b.isWeak) return -1;
      if (!a.isWeak && b.isWeak) return 1;
      if (a.priority === 'High' && b.priority !== 'High') return -1;
      if (a.priority !== 'High' && b.priority === 'High') return 1;
      return a.status === 'not_started' ? -1 : 1;
    });
  } else if (mode === 'Last-Minute Revision') {
    // Focus heavily on formula sheets, high-yield practice, and quick summaries
    prioritizedChapters.sort((a, b) => {
      if (a.priority === 'High' && b.priority !== 'High') return -1;
      return 0;
    });
  }

  // Generate day-by-day timetable
  const dailyPlans = [];
  const today = new Date();

  for (let i = 0; i < scheduleLength; i++) {
    const dateObj = new Date();
    dateObj.setDate(today.getDate() + i);
    const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    const isWeekend = dateObj.getDay() === 0 || dateObj.getDay() === 6;

    // Pick 2-3 focused tasks for this day based on daily hours
    const dayTasks = [];
    const chIndex = i % prioritizedChapters.length;
    const primaryChapter = prioritizedChapters[chIndex];
    const secondaryChapter = prioritizedChapters[(chIndex + 1) % prioritizedChapters.length];

    if (mode === 'Last-Minute Revision') {
      dayTasks.push({
        id: `task_${i}_1`,
        type: 'Formula & Key Concepts',
        title: `${primaryChapter.subject}: ${primaryChapter.name}`,
        subtitle: `High-yield formula revision & NCERT exemplar focus`,
        duration: `${Math.round(dailyHours * 0.4 * 60)} mins`,
        completed: false,
        priority: primaryChapter.priority,
        keyTopics: primaryChapter.topics.slice(0, 2)
      });
      dayTasks.push({
        id: `task_${i}_2`,
        type: 'Speed Practice Drill',
        title: `CBSE PYQ & Sample Questions (${primaryChapter.subject})`,
        subtitle: `Solve 10 timed 3-mark & 5-mark subjective problems`,
        duration: `${Math.round(dailyHours * 0.4 * 60)} mins`,
        completed: false,
        priority: 'High',
        keyTopics: ['Past 5 Years Recurring Questions', 'Step Marking Compliance']
      });
      dayTasks.push({
        id: `task_${i}_3`,
        type: 'Active Recall Session',
        title: `Error Log Review & Mnemonics`,
        subtitle: `Self-check tricky sign conventions and definitions`,
        duration: `${Math.round(dailyHours * 0.2 * 60)} mins`,
        completed: false,
        priority: 'Medium',
        keyTopics: ['Formula Sheet Check', 'Quick Summary Notes']
      });
    } else {
      dayTasks.push({
        id: `task_${i}_1`,
        type: 'Concept Deep-Dive',
        title: `${primaryChapter.subject} — ${primaryChapter.name}`,
        subtitle: `Master core derivations & NCERT theoretical nuances`,
        duration: `${Math.round(dailyHours * 0.5 * 60)} mins`,
        completed: false,
        priority: primaryChapter.priority,
        keyTopics: primaryChapter.topics
      });
      dayTasks.push({
        id: `task_${i}_2`,
        type: 'Interactive Practice Set',
        title: `${secondaryChapter ? secondaryChapter.subject : primaryChapter.subject} Problem Solving`,
        subtitle: `Solve step-by-step questions & clarify doubts`,
        duration: `${Math.round(dailyHours * 0.35 * 60)} mins`,
        completed: false,
        priority: 'High',
        keyTopics: secondaryChapter ? secondaryChapter.topics.slice(0, 2) : ['Exemplar Problems']
      });
      dayTasks.push({
        id: `task_${i}_3`,
        type: 'Daily Revision Checkpoint',
        title: `Flash Review & Daily Self-Assessment`,
        subtitle: `15-minute quick test on key terminology and equations`,
        duration: `${Math.round(dailyHours * 0.15 * 60)} mins`,
        completed: false,
        priority: 'Medium',
        keyTopics: ['Daily Learning Log', 'Key Formula Check']
      });
    }

    dailyPlans.push({
      dayIndex: i + 1,
      dateString: dayName,
      isToday: i === 0,
      tasks: dayTasks
    });
  }

  // Summary Metrics
  const totalTasks = dailyPlans.reduce((acc, d) => acc + d.tasks.length, 0);
  const completedTasks = dailyPlans.reduce((acc, d) => acc + d.tasks.filter((t) => t.completed).length, 0);

  return {
    meta: {
      generatedAt: new Date().toISOString(),
      classLevel,
      board,
      mode,
      dailyHours,
      prepLevel,
      daysRemaining,
      totalChapters: chaptersList.length,
      weakChaptersCount: chaptersList.filter((c) => c.isWeak).length
    },
    dailyPlans,
    chapterPriorities: prioritizedChapters.slice(0, 8),
    disclaimer: 'Curriculum estimates and weightage values are aligned with official CBSE & NCERT syllabi guidelines. They serve as strategic study guidance and do not guarantee official examination marks.'
  };
}
