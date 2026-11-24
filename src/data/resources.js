export const SUBJECT_CONFIG = {
  Mathematics: {
    bg: '#E9E1FF',
    text: '#4919A4',
    border: '#D0BFFF',
    badge: 'bg-[#E9E1FF] text-[#4919A4] border-[#D0BFFF]',
    icon: 'Calculator',
    description: 'Calculus, algebra, geometry & problem sets'
  },
  Physics: {
    bg: '#DCEEFF',
    text: '#025482',
    border: '#B9E0FF',
    badge: 'bg-[#DCEEFF] text-[#025482] border-[#B9E0FF]',
    icon: 'Atom',
    description: 'Mechanics, electromagnetism, optics & modern physics'
  },
  Chemistry: {
    bg: '#FFE6DC',
    text: '#93370D',
    border: '#FFCDBC',
    badge: 'bg-[#FFE6DC] text-[#93370D] border-[#FFCDBC]',
    icon: 'FlaskConical',
    description: 'Organic reactions, physical chemistry & periodic trends'
  },
  Biology: {
    bg: '#DDF3E7',
    text: '#05603A',
    border: '#B2E5C9',
    badge: 'bg-[#DDF3E7] text-[#05603A] border-[#B2E5C9]',
    icon: 'Dna',
    description: 'Genetics, human physiology, ecology & cell biology'
  },
  English: {
    bg: '#F8DFED',
    text: '#9E165F',
    border: '#F3BEDC',
    badge: 'bg-[#F8DFED] text-[#9E165F] border-[#F3BEDC]',
    icon: 'BookOpen',
    description: 'Literature analysis, reading comprehension & writing skills'
  },
  'Computer Science': {
    bg: '#FFF0C9',
    text: '#8F4B00',
    border: '#FFE194',
    badge: 'bg-[#FFF0C9] text-[#8F4B00] border-[#FFE194]',
    icon: 'Code2',
    description: 'Python, SQL, data structures & computer networks'
  }
};

export const RESOURCE_CATEGORIES = [
  {
    id: 'Notes and PDFs',
    title: 'Notes & PDFs',
    description: 'Comprehensive chapter summaries & formula sheets',
    icon: 'FileText',
    color: '#E9E1FF',
    textColor: '#4919A4'
  },
  {
    id: 'Video Lectures',
    title: 'Video Lectures',
    description: 'Curated deep-dive concept explanations',
    icon: 'Video',
    color: '#DCEEFF',
    textColor: '#025482'
  },
  {
    id: 'Previous-Year Questions',
    title: 'Previous-Year Papers',
    description: 'Real board examination papers with solutions',
    icon: 'Clock',
    color: '#FFE6DC',
    textColor: '#93370D'
  },
  {
    id: 'Sample Papers',
    title: 'Sample Papers',
    description: 'Official mock tests based on latest blueprint',
    icon: 'Layers',
    color: '#DDF3E7',
    textColor: '#05603A'
  },
  {
    id: 'Practice Questions',
    title: 'Practice Questions',
    description: 'Interactive topic-wise questions with instant feedback',
    icon: 'HelpCircle',
    color: '#FFF0C9',
    textColor: '#8F4B00'
  },
  {
    id: 'Short Notes',
    title: 'Short Notes',
    description: 'Quick revision cards & high-yield mnemonics',
    icon: 'Zap',
    color: '#F8DFED',
    textColor: '#9E165F'
  }
];

export const INITIAL_RESOURCES = [
  {
    id: 'res-math-12-cont-diff',
    title: 'Continuity and Differentiability Master Revision Notes',
    subject: 'Mathematics',
    chapter: 'Continuity & Differentiability',
    classLevel: 'Class 12',
    board: 'CBSE',
    resourceType: 'Notes and PDFs',
    difficulty: 'Intermediate',
    estimatedTime: '45 mins read',
    dateAdded: '2026-11-14',
    pagesCount: '16 pages',
    downloadsCount: 1420,
    rating: 4.9,
    author: 'Studo Math Editorial Team',
    shortDescription: 'Complete chapter breakdown covering limit existence, continuity at a point, algebra of continuous functions, chain rule, and mean value theorems.',
    fullDescription: 'This comprehensive study guide is structured strictly according to the latest CBSE Class 12 Mathematics curriculum. It synthesizes all core concepts from NCERT Chapter 5 with solved examples, common pitfalls in algebraic and trigonometric limits, and logarithmic differentiation techniques.',
    whatItCovers: [
      'Definition of continuity via Left Hand Limit (LHL) and Right Hand Limit (RHL)',
      'Algebra of continuous functions and intermediate value theorem intuition',
      'Derivatives of composite, inverse trigonometric, implicit and parametric functions',
      'Logarithmic differentiation and second-order derivatives',
      'Rolle’s and Lagrange’s Mean Value Theorems with graphical interpretation'
    ],
    learningOutcomes: [
      'Evaluate continuity at endpoints and removable discontinuities with precision',
      'Solve CBSE 3-mark and 5-mark differentiation questions under 6 minutes',
      'Avoid sign errors in trigonometric derivative chain expansions'
    ],
    previewType: 'pdf',
    pdfPages: [
      {
        pageNumber: 1,
        title: 'Section 1: Core Definitions of Continuity',
        content: `A function f(x) is continuous at x = c if:
1. f(c) is defined.
2. lim (x->c) f(x) exists, which means:
   lim (x->c-) f(x) = lim (x->c+) f(x)
3. lim (x->c) f(x) = f(c).

If any of these three conditions fails, f is discontinuous at c.

Standard Continuous Functions in Their Respective Domains:
• Polynomial functions: P(x) = a_n*x^n + ... + a_0 (Continuous everywhere in R)
• Rational functions: P(x)/Q(x) where Q(x) ≠ 0
• Trigonometric functions: sin(x), cos(x) for all x in R; tan(x) where x ≠ (2n+1)π/2
• Exponential & Logarithmic functions: e^x, a^x (x in R), ln(x) for x > 0`
      },
      {
        pageNumber: 2,
        title: 'Section 2: Differentiability & The Chain Rule',
        content: `A function f is differentiable at x = c in its open domain if the derivative f'(c) exists:
f'(c) = lim (h->0) [ f(c + h) - f(c) ] / h

Theorem: If a function f is differentiable at a point c, then it is also continuous at c.
CAUTION: The converse is NOT true!
Classic Example: f(x) = |x| is continuous at x = 0, but NOT differentiable at x = 0.
Left Hand Derivative at 0 = -1, Right Hand Derivative at 0 = +1.

The Chain Rule for Composite Functions:
If y = f(u) and u = g(x), both being differentiable, then:
dy/dx = (dy/du) * (du/dx)`
      },
      {
        pageNumber: 3,
        title: 'Section 3: Key Formula Sheet & Board Exam Tips',
        content: `Important Derivative Formulas:
1. d/dx [sin^(-1) x] = 1 / √(1 - x^2), for -1 < x < 1
2. d/dx [cos^(-1) x] = -1 / √(1 - x^2), for -1 < x < 1
3. d/dx [tan^(-1) x] = 1 / (1 + x^2), for x in R
4. d/dx [sec^(-1) x] = 1 / (|x| √(x^2 - 1)), for |x| > 1
5. d/dx [a^x] = a^x * ln(a)

CBSE High-Frequency Question Strategy:
• When given y = (sin x)^(cos x) + (cos x)^(sin x), ALWAYS set y = u + v and compute du/dx and dv/dx separately using logarithms! Never apply log directly to a sum of terms.`
      }
    ]
  },
  {
    id: 'res-phys-12-electrostatics',
    title: 'Class 12 Physics: Electrostatics High-Yield Practice Questions',
    subject: 'Physics',
    chapter: 'Electrostatics & Electric Potential',
    classLevel: 'Class 12',
    board: 'CBSE',
    resourceType: 'Practice Questions',
    difficulty: 'Advanced',
    estimatedTime: '30 mins session',
    dateAdded: '2026-11-12',
    pagesCount: '10 problems',
    downloadsCount: 980,
    rating: 4.8,
    author: 'Dr. V. Ramanathan, Physics Dept',
    shortDescription: 'Interactive conceptual and numerical problem set focusing on Coulomb’s law, Gauss’s theorem, electric dipole moments, and capacitance.',
    fullDescription: 'Master electrostatics through curated, exam-style practice questions with detailed explanations and step-by-step mathematical reasoning. Perfect for self-assessment before unit tests and pre-boards.',
    whatItCovers: [
      'Superposition principle for discrete charge distributions',
      'Gauss’s Law applications: infinite wire, planar sheet, spherical shells',
      'Equipotential surfaces and electrostatic potential energy',
      'Dielectrics in parallel plate capacitors and energy density'
    ],
    learningOutcomes: [
      'Solve vector components for multi-charge systems',
      'Differentiate electric field behavior inside vs outside conductors',
      'Calculate equivalent capacitance with dielectric slabs'
    ],
    previewType: 'practice',
    questions: [
      {
        id: 'q1',
        prompt: 'Two identical small conducting spheres having charges +4 μC and -8 μC are brought into contact and then separated to their original distance. What is the ratio of the final force to the initial force between them?',
        options: [
          '1 : 8 (Attractive to repulsive)',
          '1 : 8 (Repulsive to attractive)',
          '1 : 32 (Repulsive)',
          '1 : 32 (Attractive to repulsive)'
        ],
        correctIndex: 0,
        explanation: 'Initial force F1 = k * |(+4) * (-8)| / r^2 = 32 k/r^2 (attractive).\nUpon contact, charge redistributes equally: q_final = (+4 + (-8))/2 = -2 μC per sphere.\nFinal force F2 = k * |(-2) * (-2)| / r^2 = 4 k/r^2 (repulsive).\nRatio F2 / F1 = 4 / 32 = 1 / 8.'
      },
      {
        id: 'q2',
        prompt: 'A hollow metallic spherical shell of radius R has a positive charge Q on its surface. What is the electric field intensity and electric potential at a point r < R (inside the shell)?',
        options: [
          'E = 0, V = kQ / R',
          'E = kQ / r^2, V = 0',
          'E = 0, V = 0',
          'E = kQ / R^2, V = kQ / r'
        ],
        correctIndex: 0,
        explanation: 'By Gauss’s Law, there is no enclosed charge inside a conducting spherical shell, hence E = 0 everywhere inside. Since E = -dV/dr = 0, the electric potential V is constant and equals the potential at the surface: V = kQ / R.'
      },
      {
        id: 'q3',
        prompt: 'An electric dipole of moment p is placed in a uniform electric field E at an angle θ = 90° with the field. What is the torque and potential energy of the dipole in this orientation?',
        options: [
          'Torque = pE, Potential Energy = 0',
          'Torque = 0, Potential Energy = -pE',
          'Torque = pE, Potential Energy = -pE',
          'Torque = 0, Potential Energy = 0'
        ],
        correctIndex: 0,
        explanation: 'Torque τ = p × E = pE sin(90°) = pE (maximum torque).\nPotential energy U = -p · E = -pE cos(90°) = 0.'
      }
    ]
  },
  {
    id: 'res-chem-12-alcohols',
    title: 'Alcohols, Phenols and Ethers: Reaction Mechanisms & Quick Notes',
    subject: 'Chemistry',
    chapter: 'Alcohols, Phenols and Ethers',
    classLevel: 'Class 12',
    board: 'CBSE',
    resourceType: 'Short Notes',
    difficulty: 'Intermediate',
    estimatedTime: '35 mins read',
    dateAdded: '2026-11-10',
    pagesCount: '12 pages',
    downloadsCount: 1650,
    rating: 4.9,
    author: 'Prof. Ananya Sen, Studo Chemistry Lead',
    shortDescription: 'Crisp revision notes highlighting preparation methods, Kolbe’s reaction, Reimer-Tiemann reaction, Lucas test, and acidic strength comparison.',
    fullDescription: 'Organized summary of organic named reactions, distinguishing chemical tests (Lucas reagent, FeCl3 test, iodoform), and mechanisms for acid-catalyzed hydration of alkenes and dehydration of ethanol.',
    whatItCovers: [
      'Acid-catalyzed dehydration mechanism (carbocation intermediates)',
      'Acidity order: Phenol vs Alcohol vs Carboxylic Acids',
      'Electrophilic aromatic substitution in Phenols: Kolbe and Reimer-Tiemann',
      'Williamson Ether Synthesis mechanism and limitations'
    ],
    learningOutcomes: [
      'Predict primary vs secondary vs tertiary alcohol behavior under Lucas test',
      'Write multi-step synthesis conversions with correct reagents and temperature',
      'Understand ortho-nitrophenol vs para-nitrophenol steam volatility (H-bonding)'
    ],
    previewType: 'pdf',
    pdfPages: [
      {
        pageNumber: 1,
        title: 'Summary Sheet: Distinguishing Tests',
        content: `1. Lucas Test (Conc. HCl + Anhydrous ZnCl2):
• 3° Alcohols: Instant turbidity at room temperature.
• 2° Alcohols: Turbidity appears in 5 minutes.
• 1° Alcohols: Remains clear at room temperature; turbidity only on heating.

2. Neutral FeCl3 Test:
• Phenol gives a distinct violet/purple complex [Fe(OC6H5)6]3-.
• Aliphatic alcohols do NOT give this coloration.

3. Iodoform Test (I2 + NaOH):
• Given by alcohols containing CH3-CH(OH)- group (e.g., Ethanol, Propan-2-ol).
• Yields yellow crystalline precipitate of CHI3.`
      },
      {
        pageNumber: 2,
        title: 'Key Named Reactions in Phenols',
        content: `1. Kolbe’s Reaction:
Sodium phenoxide + CO2 (400 K, 4-7 atm) followed by acidification yields Salicylic acid (2-hydroxybenzoic acid).
Application: Precursor to Aspirin (acetylsalicylic acid).

2. Reimer-Tiemann Reaction:
Phenol + CHCl3 + aqueous NaOH at 340 K introduces -CHO group at ortho position.
Intermediate: Dichlorocarbene (:CCl2).
Product: Salicylaldehyde.

3. Nitration of Phenol:
• With Dilute HNO3 at 298 K: Mixture of ortho & para-nitrophenol (separable by steam distillation due to intramolecular H-bonding in ortho).
• With Concentrated HNO3: Picric acid (2,4,6-trinitrophenol).`
      }
    ]
  },
  {
    id: 'res-bio-12-molecular-basis',
    title: 'Molecular Basis of Inheritance: Structure, Replication & Translation',
    subject: 'Biology',
    chapter: 'Molecular Basis of Inheritance',
    classLevel: 'Class 12',
    board: 'CBSE',
    resourceType: 'Video Lectures',
    difficulty: 'Intermediate',
    estimatedTime: '40 mins video',
    dateAdded: '2026-11-08',
    pagesCount: '1 Full Lecture',
    downloadsCount: 2100,
    rating: 5.0,
    author: 'Studo Bio Labs',
    shortDescription: 'In-depth visual video lecture explaining DNA double helix dimensions, Hershey-Chase experiment, semi-conservative replication, and lac operon regulation.',
    fullDescription: 'Visual 3D molecular walkthroughs of DNA packaging in nucleosomes, replication fork machinery (DNA polymerase, helicase, primase, ligase), central dogma, and negative/positive regulation of the lac operon.',
    whatItCovers: [
      'Watson-Crick B-DNA geometry (3.4 nm pitch, 10 bp per turn)',
      'Experimental proofs of DNA as genetic material (Griffith, Avery-MacLeod-McCarty, Hershey-Chase)',
      'Meselson and Stahl’s heavy isotope 15N centrifugation experiment',
      'Transcription in prokaryotes vs eukaryotes (splicing, capping, polyadenylation)',
      'The Lac Operon: repressor protein, allolactose inducer, structural genes z, y, a'
    ],
    learningOutcomes: [
      'Explain semi-conservative replication banding patterns generation by generation',
      'Draw and label transcription bubble components accurately',
      'Analyze the switch mechanism of the operon in presence and absence of lactose'
    ],
    previewType: 'video',
    videoUrl: 'https://www.youtube.com/embed/o_6f_0C0pPQ',
    videoNotes: [
      { timestamp: '00:00 - 08:30', title: 'DNA Structure & Nucleosome Packaging', summary: 'Histone octamer, H1 linker, 200 bp per nucleosome, euchromatin vs heterochromatin.' },
      { timestamp: '08:30 - 18:45', title: 'Meselson-Stahl Experiment Proof', summary: 'Centrifugation in CsCl density gradient; F1 generation hybrid density (14N/15N), F2 equal 14N and hybrid.' },
      { timestamp: '18:45 - 28:10', title: 'Replication Machinery & Okazaki Fragments', summary: 'Leading vs lagging strand synthesis by DNA polymerase III; 5\' to 3\' polarity requirement.' },
      { timestamp: '28:10 - 40:00', title: 'The Lac Operon Model', summary: 'Jacob & Monod model; lacI gene expression, repressor binding to operator, beta-galactosidase function.' }
    ]
  },
  {
    id: 'res-eng-12-rattrap',
    title: 'The Rattrap — Chapter Analysis, Themes & Board Question Bank',
    subject: 'English',
    chapter: 'Flamingo: The Rattrap',
    classLevel: 'Class 12',
    board: 'CBSE',
    resourceType: 'Notes and PDFs',
    difficulty: 'Beginner',
    estimatedTime: '25 mins read',
    dateAdded: '2026-11-05',
    pagesCount: '8 pages',
    downloadsCount: 1150,
    rating: 4.8,
    author: 'Ms. Meenakshi Sundaram',
    shortDescription: 'Detailed thematic summary of Selma Lagerlöf’s masterpiece, character contrasts, philosophical metaphor of the rattrap, and sample RTC answers.',
    fullDescription: 'A thorough revision guide for CBSE Class 12 English Core (Flamingo). Features line-by-line critical appreciation, symbolic significance of the thirty kronor bait, Edla Willmansson’s transformative empathy, and expected 2-mark and 5-mark subjective questions.',
    whatItCovers: [
      'The universal human metaphor of the world as a giant rattrap',
      'The peddler’s cynical worldview vs the old crofter’s lonely hospitality',
      'The ironmaster’s impulsive arrogance vs Edla Willmansson’s genuine compassion',
      'Redemption and moral resurrection: signing as "Captain von Stahle"'
    ],
    learningOutcomes: [
      'Write persuasive answers demonstrating character evolution',
      'Quote key lines in extract-based reference-to-context questions',
      'Structure high-scoring 120-150 word character sketches'
    ],
    previewType: 'pdf',
    pdfPages: [
      {
        pageNumber: 1,
        title: 'Core Themes & Metaphor Analysis',
        content: `1. The Metaphor of the Rattrap:
The peddler views the entire world as nothing but a huge rattrap. All the riches, joys, shelter, food, and clothes are merely baits, exactly like cheese and pork in a wire trap. The moment anyone touches the bait, the trap snaps shut, plunging them into misery.

2. The Power of Unconditional Empathy:
Edla Willmansson’s kind and noble conduct elevates the degraded vagabond. While society, the ironmaster, and law treated him with suspicion, Edla’s trust and dignified treatment enabled him to rise above his baser instincts and return the stolen thirty kronor.`
      },
      {
        pageNumber: 2,
        title: 'CBSE Long Answer Model: Character of Edla',
        content: `Question: "How did Edla Willmansson bring about a transformation in the peddler?"

Model Answer Points:
• Observant and Perceptive: Unlike her father who mistook the peddler for Captain von Stahle in the dark forge, Edla immediately sensed his terror and suspected he had either stolen something or escaped from jail.
• Unwavering Kindness: Even after the ironmaster wanted to throw him out when the truth emerged in daylight, Edla pleaded for him to stay for Christmas Eve so he could enjoy one day of peace.
• Dignity and Respect: She addressed him as 'Captain', gifted him the suit, and welcomed him back next year.
• The Result: The peddler left a Christmas present containing a miniature rattrap, the thirty kronor to be returned to the crofter, and a letter signed as Captain von Stahle.`
      }
    ]
  },
  {
    id: 'res-math-10-quadratics',
    title: 'Class 10 CBSE: Quadratic Equations Complete Problem Blueprint',
    subject: 'Mathematics',
    chapter: 'Quadratic Equations',
    classLevel: 'Class 10',
    board: 'CBSE',
    resourceType: 'Practice Questions',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins session',
    dateAdded: '2026-11-03',
    pagesCount: '12 questions',
    downloadsCount: 1890,
    rating: 4.9,
    author: 'Studo High School Division',
    shortDescription: 'Master discriminant analysis, nature of roots, factorisation methods, and real-life speed-distance word problems.',
    fullDescription: 'Targeted preparation for CBSE Class 10 Board Examinations. Contains standard textbook problems, exemplar problems, and tricky application questions regarding boats upstream/downstream and tap filling times.',
    whatItCovers: [
      'Standard form ax^2 + bx + c = 0 (a ≠ 0)',
      'Discriminant D = b^2 - 4ac and roots taxonomy (Real & distinct, real & equal, no real roots)',
      'Solving by splitting middle term and Quadratic Formula',
      'Word problems on speeds of trains, geometric dimensions, and consecutive integers'
    ],
    learningOutcomes: [
      'Determine unknown parameter k when roots are given as equal',
      'Translate word scenarios into quadratic equations with valid physical bounds',
      'Verify solutions against physical constraints (discard negative time or speed)'
    ],
    previewType: 'practice',
    questions: [
      {
        id: 'q_quad_1',
        prompt: 'For what value of k does the quadratic equation 2x^2 + kx + 3 = 0 have two equal real roots?',
        options: [
          'k = ± 2√6',
          'k = ± 4√3',
          'k = ± 6',
          'k = 24'
        ],
        correctIndex: 0,
        explanation: 'For equal real roots, the discriminant D must equal 0.\nD = b^2 - 4ac = k^2 - 4(2)(3) = k^2 - 24 = 0.\nk^2 = 24 => k = ± √24 = ± 2√6.'
      },
      {
        id: 'q_quad_2',
        prompt: 'If one root of the equation (k - 1)x^2 - 10x + 3 = 0 is the reciprocal of the other, what is the value of k?',
        options: [
          'k = 4',
          'k = 3',
          'k = 2',
          'k = 5'
        ],
        correctIndex: 0,
        explanation: 'Let the roots be α and 1/α.\nProduct of roots = α * (1/α) = 1.\nFrom standard equation, product of roots = c / a = 3 / (k - 1).\nTherefore 3 / (k - 1) = 1 => k - 1 = 3 => k = 4.'
      }
    ]
  },
  {
    id: 'res-phys-11-laws-motion',
    title: 'Newton’s Laws of Motion & Friction: Comprehensive Lecture & Mechanics Notes',
    subject: 'Physics',
    chapter: 'Laws of Motion',
    classLevel: 'Class 11',
    board: 'CBSE',
    resourceType: 'Notes and PDFs',
    difficulty: 'Intermediate',
    estimatedTime: '45 mins read',
    dateAdded: '2026-10-28',
    pagesCount: '14 pages',
    downloadsCount: 1340,
    rating: 4.8,
    author: 'Er. Rajesh Bansal',
    shortDescription: 'Free body diagram mastery, impulse-momentum theorem, banked road circular dynamics, and angle of repose.',
    fullDescription: 'Essential foundational physics for Class 11 students preparing for school exams and competitive foundations. Detailed diagrams illustrating tension in strings, multi-mass pulley systems, and static vs limiting vs kinetic friction.',
    whatItCovers: [
      'Newton’s three laws of motion and definition of force and inertia',
      'Linear momentum conservation in collisions and rocket propulsion',
      'Step-by-step Free Body Diagrams (FBDs) for connected bodies and inclined planes',
      'Friction laws: coefficient of friction, angle of friction and angle of repose',
      'Circular motion dynamics: banking of curved roads with and without friction'
    ],
    learningOutcomes: [
      'Draw flawless Free Body Diagrams isolating all normal, gravitational, and frictional vectors',
      'Derive maximum safe velocity formula v_max = √[Rg(μ + tan θ) / (1 - μ tan θ)]',
      'Solve Atwood machine acceleration and rope tension questions without error'
    ],
    previewType: 'pdf',
    pdfPages: [
      {
        pageNumber: 1,
        title: 'Core Mechanics: Free Body Diagram Rules',
        content: `Three Fundamental Rules for Free Body Diagrams (FBD):
1. Isolate the body of interest from its surroundings.
2. Replace all external contacts with corresponding contact forces:
   • Solid surface contact -> Normal reaction (N) acting perpendicular to the contact surface.
   • Ideal string -> Tension (T) pulling away from the body along the string.
   • Rough surface -> Friction force parallel to surface opposing relative motion tendency.
3. Include non-contact field forces:
   • Gravitational force mg acting vertically downward through center of mass.
4. Establish coordinate axes along the direction of anticipated acceleration and perpendicular to it.`
      },
      {
        pageNumber: 2,
        title: 'Friction Taxonomy & Formulas',
        content: `Static Friction (f_s):
• Self-adjusting force: 0 ≤ f_s ≤ f_s(max)
• Limiting static friction: f_s(max) = μ_s * N

Kinetic Friction (f_k):
• Acts when there is relative motion: f_k = μ_k * N
• Note: μ_k is generally slightly less than μ_s.

Angle of Repose (α):
• The minimum angle of inclination of a rough plane with horizontal such that a body placed on it just begins to slide down:
tan(α) = μ_s => Angle of repose equals angle of friction.`
      }
    ]
  },
  {
    id: 'res-sci-09-atoms-molecules',
    title: 'Class 9 Science: Atoms and Molecules Concepts & Chemical Formulae',
    subject: 'Chemistry',
    chapter: 'Atoms and Molecules',
    classLevel: 'Class 9',
    board: 'CBSE',
    resourceType: 'Notes and PDFs',
    difficulty: 'Beginner',
    estimatedTime: '30 mins read',
    dateAdded: '2026-10-22',
    pagesCount: '10 pages',
    downloadsCount: 1720,
    rating: 4.9,
    author: 'Studo Foundation Team',
    shortDescription: 'Laws of chemical combination, Dalton’s atomic postulates, valency rules, and criss-cross formula writing practice.',
    fullDescription: 'Clear, engaging guide designed to build rock-solid foundation for Class 9 students. Covers Law of Conservation of Mass, Law of Constant Proportions, atomic mass unit (amu/u), molecular mass calculations, and polyatomic ions.',
    whatItCovers: [
      'Antoine Lavoisier & Joseph Proust’s fundamental laws of chemical combination',
      'Dalton’s Atomic Theory and its modern merits/limitations',
      'IUPAC symbols and naming conventions for elements',
      'Valency of common monoatomic and polyatomic ions (SO4 2-, NO3 -, NH4 +, PO4 3-)',
      'The criss-cross method for writing chemical formulas accurately'
    ],
    learningOutcomes: [
      'Write balanced chemical formulas for ionic compounds like Calcium Carbonate & Aluminium Sulphate',
      'Calculate molecular mass and formula unit mass in unified mass units (u)',
      'State the significance of Avogadro’s constant'
    ],
    previewType: 'pdf',
    pdfPages: [
      {
        pageNumber: 1,
        title: 'Fundamental Laws of Chemical Combination',
        content: `1. Law of Conservation of Mass (Lavoisier, 1774):
Mass can neither be created nor destroyed in a chemical reaction.
Total mass of Reactants = Total mass of Products.

2. Law of Constant Proportions (Proust, 1799):
In a chemical substance, the elements are always present in definite proportions by mass.
Example: In water (H2O), the ratio of the mass of hydrogen to oxygen is always 1:8, regardless of the source.`
      },
      {
        pageNumber: 2,
        title: 'Writing Chemical Formulae (Criss-Cross Rule)',
        content: `Steps to write chemical formula:
1. Write the symbols of constituent elements/ions side by side (cation on left, anion on right).
2. Write their valencies below each symbol.
3. Cross over the valencies.
4. If valencies have a common factor, divide by the common factor.
5. If a polyatomic ion has a multiplier > 1, enclose the ion in brackets.

Example 1: Aluminium Sulphate
Al valency = 3, SO4 valency = 2
Criss-cross gives: Al2(SO4)3

Example 2: Calcium Hydroxide
Ca valency = 2, OH valency = 1
Criss-cross gives: Ca(OH)2`
      }
    ]
  },
  {
    id: 'res-cs-12-python-sql',
    title: 'Computer Science: Python Data Structures & MySQL Connectivity',
    subject: 'Computer Science',
    chapter: 'Python & SQL Integration',
    classLevel: 'Class 12',
    board: 'CBSE',
    resourceType: 'Short Notes',
    difficulty: 'Intermediate',
    estimatedTime: '35 mins read',
    dateAdded: '2026-11-09',
    pagesCount: '14 pages',
    downloadsCount: 1530,
    rating: 4.9,
    author: 'Karan Mehra, CS Faculty',
    shortDescription: 'Stack implementation using lists, cursor execution methods, fetchall vs fetchone, and commit/rollback operations.',
    fullDescription: 'Strictly aligned with Class 12 CBSE Computer Science (Code 083) syllabus. Offers crystal-clear code snippets for Push and Pop functions in linear stack data structures and mysql.connector database workflows.',
    whatItCovers: [
      'Linear stack data structure: LIFO principle, Push, Pop, Peek, Underflow & Overflow',
      'mysql.connector library setup: connect(), cursor(), execute()',
      'Data retrieval: fetchone(), fetchall(), fetchmany(n), and rowcount attribute',
      'Parameterized SQL queries to prevent syntax errors'
    ],
    learningOutcomes: [
      'Write error-free 3-mark Python stack implementation programs',
      'Establish robust database connections with try-except blocks',
      'Understand when mydb.commit() is mandatory (INSERT, UPDATE, DELETE)'
    ],
    previewType: 'pdf',
    pdfPages: [
      {
        pageNumber: 1,
        title: 'Stack Operations in Python',
        content: `Stack Implementation using List:

def push(stk, item):
    stk.append(item)
    print(f"Pushed {item} to stack")

def pop(stk):
    if len(stk) == 0:
        print("Underflow! Stack is empty.")
        return None
    else:
        return stk.pop()

def peek(stk):
    if len(stk) == 0:
        return None
    return stk[-1]

def display(stk):
    if len(stk) == 0:
        print("Empty Stack")
    else:
        for i in range(len(stk)-1, -1, -1):
            print(stk[i])`
      },
      {
        pageNumber: 2,
        title: 'MySQL Connector Workflow',
        content: `Standard Database Script:

import mysql.connector

try:
    con = mysql.connector.connect(
        host="localhost",
        user="root",
        password="password123",
        database="school_db"
    )
    cur = con.cursor()
    
    # Executing Query
    cur.execute("SELECT roll_no, name, marks FROM student WHERE marks >= %s", (75,))
    
    # Fetching Data
    records = cur.fetchall()
    for row in records:
        print(f"Roll: {row[0]}, Name: {row[1]}, Marks: {row[2]}")
        
except mysql.connector.Error as err:
    print(f"Database error: {err}")
finally:
    if cur: cur.close()
    if con: con.close()`
      }
    ]
  },
  {
    id: 'res-math-12-sample-paper-2026',
    title: 'CBSE Class 12 Mathematics Official Style Sample Paper with Solutions',
    subject: 'Mathematics',
    chapter: 'Full Syllabus Mock 01',
    classLevel: 'Class 12',
    board: 'CBSE',
    resourceType: 'Sample Papers',
    difficulty: 'Advanced',
    estimatedTime: '3 hours paper',
    dateAdded: '2026-11-15',
    pagesCount: '38 Questions / 80 Marks',
    downloadsCount: 3200,
    rating: 5.0,
    author: 'CBSE Master Examiners Group',
    shortDescription: 'Latest blueprint mock test containing 20 Section A MCQs, 5 Section B 2-markers, 6 Section C 3-markers, 4 Section D 5-markers, and 3 Case Studies.',
    fullDescription: 'Authentic examination experience mimicking the exact CBSE pattern. Includes section-by-section breakdown, time allocation tips, step marking guidelines, and complete worked solutions for every problem.',
    whatItCovers: [
      'Relations and Functions, Inverse Trigonometry (8 Marks)',
      'Algebra: Matrices and Determinants (10 Marks)',
      'Calculus: Limits, Derivatives, Integrals, Diff Equations (35 Marks)',
      'Vectors and 3-Dimensional Geometry (14 Marks)',
      'Linear Programming & Probability (13 Marks)'
    ],
    learningOutcomes: [
      'Practice 3-hour examination pacing and question selection',
      'Understand step-marking criteria for long-form calculus proofs',
      'Solve Section E case-based real world optimization questions'
    ],
    previewType: 'paper',
    paperSections: [
      {
        sectionName: 'Section A (20 Marks — 1 Mark Each)',
        description: 'Questions 1 to 18 are multiple choice questions. Questions 19 and 20 are Assertion-Reason based questions.',
        sampleQuestions: [
          {
            qNum: 'Q1',
            text: 'If A is a square matrix of order 3 such that |A| = -4, then the value of |2 adj A| is:',
            options: ['-128', '128', '-32', '64'],
            answer: '128',
            explanation: '|2 adj A| = 2^3 * |adj A| = 8 * |A|^(3-1) = 8 * (-4)^2 = 8 * 16 = 128.'
          },
          {
            qNum: 'Q2',
            text: 'The order and degree of the differential equation [1 + (dy/dx)^2]^(3/2) = d^2y/dx^2 are respectively:',
            options: ['Order 2, Degree 2', 'Order 1, Degree 3', 'Order 2, Degree 3', 'Order 2, Degree 1'],
            answer: 'Order 2, Degree 2',
            explanation: 'Squaring both sides eliminates fractional power: [1 + (dy/dx)^2]^3 = (d^2y/dx^2)^2. Highest order derivative is d^2y/dx^2 (order 2), and its power is 2 (degree 2).'
          }
        ]
      },
      {
        sectionName: 'Section B (10 Marks — 5 Questions of 2 Marks)',
        description: 'Very Short Answer Type Questions.',
        sampleQuestions: [
          {
            qNum: 'Q21',
            text: 'Find the principal value of cos^(-1)(-1/2) + 2 sin^(-1)(1/2).',
            answer: 'Principal value is 4π/3.',
            explanation: 'cos^(-1)(-1/2) = π - cos^(-1)(1/2) = π - π/3 = 2π/3.\nsin^(-1)(1/2) = π/6 => 2 sin^(-1)(1/2) = 2*(π/6) = π/3.\nTotal = 2π/3 + π/3 = 3π/3 = π... wait: 2π/3 + π/3 = π.'
          }
        ]
      }
    ]
  },
  {
    id: 'res-phys-12-pyq-5years',
    title: 'Class 12 Physics: Last 5 Years Solved Board Examination Papers',
    subject: 'Physics',
    chapter: 'Optics & Wave Theory',
    classLevel: 'Class 12',
    board: 'CBSE',
    resourceType: 'Previous-Year Questions',
    difficulty: 'Advanced',
    estimatedTime: '60 mins review',
    dateAdded: '2026-11-01',
    pagesCount: '24 pages',
    downloadsCount: 2840,
    rating: 4.9,
    author: 'All India Physics Teachers Forum',
    shortDescription: 'Topic-wise collection of recurring 3-mark and 5-mark derivation questions from 2020-2025 board papers.',
    fullDescription: 'Covers Huygens wave theory derivations for reflection and refraction, Young’s Double Slit Experiment fringe width derivation, astronomical telescope ray diagrams, and compound microscope magnifying power.',
    whatItCovers: [
      'Proof of Snell’s Law of Refraction using Huygens’ wave principle',
      'Derivation of fringe width β = λD/d in interference',
      'Ray diagrams in normal adjustment and at least distance of distinct vision',
      'Brewster’s Law and polarization phenomena'
    ],
    learningOutcomes: [
      'Master the 5 most repeated 5-mark optical derivations in CBSE history',
      'Memorize correct focal length sign conventions for lens-mirror combinations',
      'Identify critical ray paths in refracting vs reflecting telescopes'
    ],
    previewType: 'pdf',
    pdfPages: [
      {
        pageNumber: 1,
        title: 'Huygens Principle: Proof of Laws of Refraction',
        content: `Question (CBSE 2024, 2022, 2019):
Derive Snell’s law of refraction using Huygens’ secondary wavelets for a plane wavefront incident on a plane refracting surface separating two media.

Derivation Steps:
1. Let AB be a plane wavefront incident at angle i on surface XY separating medium 1 (speed v1) from medium 2 (speed v2, v2 < v1).
2. The wavefront touches the boundary at point A at time t = 0.
3. During time t that point B reaches C on the boundary, distance BC = v1 * t.
4. From point A, a secondary wavelet spreads into medium 2 of radius AD = v2 * t.
5. In right triangle ABC: sin(i) = BC / AC = (v1 * t) / AC.
6. In right triangle ADC: sin(r) = AD / AC = (v2 * t) / AC.
7. Dividing (5) by (6):
   sin(i) / sin(r) = (v1 * t) / (v2 * t) = v1 / v2.
8. By definition, refractive index n21 = v1 / v2.
   Therefore, sin(i) / sin(r) = n21 (Snell’s Law proved).`
      }
    ]
  },
  {
    id: 'res-bio-10-life-processes',
    title: 'Class 10 Biology: Life Processes Visual Diagrams & Mind Maps',
    subject: 'Biology',
    chapter: 'Life Processes',
    classLevel: 'Class 10',
    board: 'CBSE',
    resourceType: 'Short Notes',
    difficulty: 'Beginner',
    estimatedTime: '20 mins read',
    dateAdded: '2026-10-18',
    pagesCount: '6 pages',
    downloadsCount: 2200,
    rating: 4.9,
    author: 'Studo High School Division',
    shortDescription: 'High-clarity diagrams of human digestive system, nephron filtration, double circulation in heart, and stomatal opening.',
    fullDescription: 'Concise visual guide focusing on diagrams that appear in 3-mark and 5-mark board questions. Includes step-by-step labelling notes and enzymatic secretions summary table.',
    whatItCovers: [
      'Nutrition: Autotrophic vs Heterotrophic; salivary amylase, pepsin, trypsin, lipase',
      'Respiration: Aerobic vs Anaerobic pathways (breakdown of glucose in cytoplasm vs mitochondria)',
      'Transportation: Internal structure of human heart, systemic and pulmonary loops',
      'Excretion: Structure and functioning of a nephron unit in human kidney'
    ],
    learningOutcomes: [
      'Label human alimentary canal and heart chambers with 100% accuracy',
      'Explain urine formation stages: ultrafiltration, selective reabsorption, secretion',
      'Compare xylem vs phloem transport mechanisms'
    ],
    previewType: 'pdf',
    pdfPages: [
      {
        pageNumber: 1,
        title: 'Digestive Enzymes Quick Reference Matrix',
        content: `1. Mouth:
• Gland: Salivary Glands
• Enzyme: Salivary Amylase (Ptyalin)
• Substrate: Starch -> Maltose (pH ~6.8)

2. Stomach:
• Gland: Gastric Glands
• Secretions: HCl (acidic medium pH ~1.5, kills pathogens), Pepsin (Proteins -> Peptones), Mucus (protects inner wall).

3. Small Intestine:
• Liver Secretion: Bile Juice (Emulsifies large fat globules, provides alkaline medium).
• Pancreas: Trypsin (Proteins -> Peptides), Pancreatic Amylase, Pancreatic Lipase (Emulsified fats -> Fatty acids + Glycerol).
• Intestinal Wall: Peptidases, Maltase, Sucrase (Final breakdown into amino acids, glucose, fructose).`
      }
    ]
  }
];

export const INITIAL_STUDENT_PROFILE = {
  name: '',
  school: '',
  currentClass: 'Class 12',
  board: 'CBSE',
  stream: 'Science',
  learningHours: 0,
  avatarColor: '#E9E1FF'
};
