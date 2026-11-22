const ADMIN_ACCESS = {
  'ashutoshaamonty@gmail.com': { scope: '*', canViewAllSyllabus: true, canAddSyllabus: true },
  'tideseren@gmail.com': { scope: '*', canViewAllSyllabus: true, canAddSyllabus: false },
  'ankitayo2005@gmail.com': { scope: ['ashutoshaamonty@gmail.com'], canViewAllSyllabus: false, canAddSyllabus: false }
};
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCjK6hvr-faQTcV5mRA1QTkZw8LoZyO2bU",
  authDomain: "project-b2096ed9-f6e9-4bfc-9ef.firebaseapp.com",
  projectId: "project-b2096ed9-f6e9-4bfc-9ef",
  storageBucket: "project-b2096ed9-f6e9-4bfc-9ef.firebasestorage.app",
  messagingSenderId: "877614629020",
  appId: "1:877614629020:web:caa36f9228c7d5539ead59"
};

const YEAR_1_SEM_1_SUBJECTS = [
  {
    id: 'y1s1_pst',
    shortName: 'Problem Solving (C)',
    name: '1. Problem Solving Techniques',
    code: 'F0160701T',
    category: 'CC 01 (Theory + Lab)',
    units: [
      {
        id: 'y1s1_pst-u1',
        title: 'Unit I — Problem Solving and Algorithmic Thinking',
        groups: [
          {
            name: 'Problem Analysis & Algorithms',
            topics: [
              'Define and explain problems and problem instances',
              'Differentiate between generalization and special cases',
              'Classify different types of computational problems',
              'Analyze problems for inputs, outputs, constraints, and solution approaches',
              'Develop algorithms and analyze efficiency and correctness',
              'Role of data structures in problem solving',
              'Systematic problem-solving steps (understanding, planning, execution, review)',
              'Breaking problems into sub-problems',
              'Input/output specifications, validation rules, preconditions & postconditions'
            ]
          }
        ]
      },
      {
        id: 'y1s1_pst-u2',
        title: 'Unit II — Structured Programming & Algorithm Representation',
        groups: [
          {
            name: 'Structured Programming Concepts',
            topics: [
              'Sequence, selection, and repetition concepts',
              'Control structures: if, if-else, for, while, do-while',
              'Nesting and stacking of control structures',
              'Repetition mechanisms (entry/exit, counter, definite, indefinite, sentinel-controlled loops)'
            ]
          },
          {
            name: 'Algorithm Representation & Communication',
            topics: [
              'Construct pseudocode and flowcharts',
              'Algorithm characteristics and formats',
              'Data representation of integers and floating-point numbers in memory',
              'Character encoding schemes: ASCII and Unicode',
              'Implement structured programming concepts using C language'
            ]
          }
        ]
      },
      {
        id: 'y1s1_pst-u3',
        title: 'Unit III — C Language Fundamentals',
        groups: [
          {
            name: 'C Basics & Constructs',
            topics: [
              'Evolution and generations of programming languages',
              'Typed versus typeless languages',
              'History and structure of a basic C program',
              'C constructs for input, output, assignment, arithmetic, relational, and logical operations',
              'Decision-making, looping statements, and selecting data types',
              'Translation of algorithms and pseudocode into executable C programs'
            ]
          }
        ]
      },
      {
        id: 'y1s1_pst-u4',
        title: 'Unit IV — Problems on Numbers & Control Flow',
        groups: [
          {
            name: 'Number Programs & C Statements',
            topics: [
              'Extracting digits of a number (Left to Right and Right to Left)',
              'Palindrome number',
              'Prime number and Prime factors',
              'Amicable number, Perfect number, Armstrong number, Factorial',
              'Converting number from one base to another',
              'else-if ladder and switch-case',
              'Increment/Decrement operators, break and continue statements'
            ]
          }
        ]
      },
      {
        id: 'y1s1_pst-u5',
        title: 'Unit V — Modular Programming, Arrays & Ethics',
        groups: [
          {
            name: 'Functions, Arrays & Searching/Sorting',
            topics: [
              'Modular programming: Top-Down and Bottom-Up approaches',
              'Recursion',
              'Array operations: Reading, writing, max, min, sum, average, median, mode',
              'Sequential and Binary Search',
              'Sorting algorithm',
              'Matrix operations',
              'Function definition, declaration (prototype), and return statement',
              '1D and 2D arrays, String functions',
              'Other operators, Operator Precedence and Associativity'
            ]
          },
          {
            name: 'Professional & Ethical Issues',
            topics: [
              'Responsible use of algorithms and societal impact of software solutions'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'y1s1_csa',
    shortName: 'Computer Architecture',
    name: '2. Computer System Architecture',
    code: 'F0160702T',
    category: 'CC 02',
    units: [
      {
        id: 'y1s1_csa-u1',
        title: 'Unit I — Basic Computer Organization',
        groups: [
          {
            name: 'Architecture & CPU Basics',
            topics: [
              'Computer systems and evolution of computer architecture',
              'Functional units, block diagram, and working of a digital computer',
              'Structure of CPU, ALU, Control Unit, and registers',
              'Register organization and instruction cycle',
              'Fetch–decode–execute cycle',
              'System bus organization (data bus, address bus, control bus)'
            ]
          }
        ]
      },
      {
        id: 'y1s1_csa-u2',
        title: 'Unit II — Data Representation & Computer Arithmetic',
        groups: [
          {
            name: 'Number Systems & Digital Logic',
            topics: [
              'Number systems, complements, fixed and floating-point representation',
              'Addition, subtraction, magnitude comparison, multiplication and division algorithms',
              'Logic gates and Boolean algebra',
              'Combinational circuits and circuit simplification',
              'Flip-flops and sequential circuits',
              'Decoders, multiplexers, registers, and counters'
            ]
          }
        ]
      },
      {
        id: 'y1s1_csa-u3',
        title: 'Unit III — Basic Computer Organization and Design',
        groups: [
          {
            name: 'Registers, Instructions & Bus Design',
            topics: [
              'Computer registers and bus system',
              'Instruction set, timing and control',
              'Instruction cycle and memory reference',
              'Input-output and interrupt',
              'Interconnection structures and bus interconnection design'
            ]
          }
        ]
      },
      {
        id: 'y1s1_csa-u4',
        title: 'Unit IV — Central Processing Unit',
        groups: [
          {
            name: 'CPU Design & Pipelining',
            topics: [
              'Register organization, arithmetic and logical micro-operations',
              'Stack organization and micro-programmed control',
              'Instruction formats, addressing modes, and instruction codes',
              'Machine language, assembly language, and I/O programming',
              'RISC and CISC architectures',
              'Pipelining and parallel architecture'
            ]
          }
        ]
      },
      {
        id: 'y1s1_csa-u5',
        title: 'Unit V — Memory, I/O & Green Computing',
        groups: [
          {
            name: 'Memory & I/O Organization',
            topics: [
              'Cache memory, Associative memory, and mapping',
              'External devices and I/O modules',
              'Programmed I/O, Interrupt-Driven I/O, Direct Memory Access (DMA), I/O Channels'
            ]
          },
          {
            name: 'Green Computing & Ethical Hardware',
            topics: [
              'Energy-efficient computer systems',
              'Environmental impact of computer hardware and e-waste management'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'y1s1_hist',
    shortName: 'Ancient Indian Sci & Tech',
    name: '3. History of Science and Technology in Ancient India',
    code: 'F0160703T',
    category: 'CC 02',
    units: [
      {
        id: 'y1s1_hist-u1',
        title: 'Unit I — Indus Civilization',
        groups: [
          {
            name: 'Indus Valley Science & Planning',
            topics: [
              'Metallurgy',
              'Mathematics and Astronomy',
              'Town Planning',
              'Flora and Fauna'
            ]
          }
        ]
      },
      {
        id: 'y1s1_hist-u2',
        title: 'Unit II — Astronomy in Ancient India',
        groups: [
          {
            name: 'Historical Periods',
            topics: ['Vedic Period', 'Vedanga', 'Classical Age']
          }
        ]
      },
      {
        id: 'y1s1_hist-u3',
        title: 'Unit III — Chemistry in Ancient India (upto NBPW Period)',
        groups: [
          {
            name: 'Metallurgy & Materials',
            topics: [
              'Copper in Chalcolithic to pre-NBPW Period',
              'Iron Technology from earliest time to NBPW Period',
              'Glass Technology from earliest time to NBPW Period'
            ]
          }
        ]
      },
      {
        id: 'y1s1_hist-u4',
        title: 'Unit IV — Mathematics in Ancient India (up to Gupta Period)',
        groups: [
          {
            name: 'Mathematical Developments',
            topics: ['Bakhshali Mathematics', 'Geometry', 'Algebra', 'Arithmetic']
          }
        ]
      }
    ]
  },
  {
    id: 'y1s1_math',
    shortName: 'Foundation of Math',
    name: '4. Foundation of Mathematics for Computer Applications',
    code: 'F0160704T',
    category: 'MDE 01',
    units: [
      {
        id: 'y1s1_math-u1',
        title: 'Unit I — Set Theory, Relations & Functions',
        groups: [
          {
            name: 'Sets & Functions',
            topics: [
              'Basic concepts of set theory',
              'Operations on sets: power set, Venn diagram, Cartesian product',
              'Relations and functions',
              'Types of functions and composition of functions'
            ]
          }
        ]
      },
      {
        id: 'y1s1_math-u2',
        title: 'Unit II — Mathematical Logic',
        groups: [
          {
            name: 'Propositional & Predicate Logic',
            topics: [
              'Introduction, statements, connectives (negation, conjunction, disjunction)',
              'Statement formulas and truth tables',
              'Conditional and bi-conditional statements',
              'Tautology, contradiction, equivalence of formulas, duality law',
              'Predicates, Quantifiers, and Arguments'
            ]
          }
        ]
      },
      {
        id: 'y1s1_math-u3',
        title: 'Unit III — Matrix Algebra',
        groups: [
          {
            name: 'Matrices & Linear Systems',
            topics: [
              'Types of matrices, matrix operations, transpose of a matrix',
              "Determinant, inverse of a matrix, Cramer's rule",
              'Rank of a matrix, normal form, echelon form',
              'Cayley-Hamilton theorem',
              'Eigen values and Eigen vectors'
            ]
          }
        ]
      },
      {
        id: 'y1s1_math-u4',
        title: 'Unit IV — Differential Calculus',
        groups: [
          {
            name: 'Limits & Derivatives',
            topics: [
              'Functions and limits',
              'Simple differentiation of algebraic functions',
              'Evaluation of first and second order derivatives',
              'Maxima and Minima'
            ]
          }
        ]
      },
      {
        id: 'y1s1_math-u5',
        title: 'Unit V — Integral Calculus',
        groups: [
          {
            name: 'Integration Techniques',
            topics: [
              'Integral as limit of sum & Fundamental Theorem of Calculus',
              'Indefinite integrals',
              'Methods of integration: Substitution, By Parts, Partial Fractions',
              'Reduction formulae for trigonometric functions',
              'Gamma and Beta functions (definition)'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'y1s1_ict',
    shortName: 'ICT (SEC 01)',
    name: '5. Information and Communication Technology',
    code: 'SEC 01',
    category: 'Skill Enhancement',
    missingNotice: 'Official unit-wise syllabus for this subject has not been provided by the college yet. Topics will be updated once released.',
    units: []
  },
  {
    id: 'y1s1_firstaid',
    shortName: 'First Aid & Health',
    name: '6. First aid and Basic Health',
    code: 'AEC 01',
    category: 'Ability Enhancement',
    missingNotice: 'Official unit-wise syllabus for this subject has not been provided by the college yet. Topics will be updated once released.',
    units: []
  }
];

// Saved in code for BCA 1st Year Semester II (will go live when Semester II begins)
const YEAR_1_SEM_2_RESERVE = {
  isLive: false,
  subjects: [
    {
      id: 'y1s2_cpp',
      shortName: 'OOP Using C++',
      name: '1. Object Oriented Programming Using C++',
      code: 'F0260701T',
      category: 'CC I (Theory + Lab)',
      units: [
        {
          id: 'y1s2_cpp-u1',
          title: 'UNIT-I — Introduction & Basic Terms',
          groups: [{ name: 'OOP Paradigms & C++ Basics', topics: ['Object-Oriented Approach vs Functional/Data decomposition', 'Abstraction, Encapsulation, Inheritance, Polymorphism', 'Review of C, Difference between C and C++ (cin, cout, new, delete, operators)'] }]
        },
        {
          id: 'y1s2_cpp-u2',
          title: 'UNIT-II — Classes and Objects',
          groups: [{ name: 'Objects, Constructors & Memory', topics: ['Encapsulation, information hiding, abstract data types', 'Object & classes, attributes, methods, C++ class declaration', 'State, identity and behaviour of an object', 'Constructors, destructors, instantiation, default parameter value', 'C++ garbage collection, dynamic memory allocation, Metaclass/abstract classes'] }]
        },
        {
          id: 'y1s2_cpp-u3',
          title: 'UNIT-III — Inheritance and Polymorphism',
          groups: [{ name: 'Inheritance & Overloading', topics: ['Inheritance, Class hierarchy, public/private/protected derivation', 'Aggregation, composition vs classification hierarchies', 'Polymorphism categorization, method polymorphism, polymorphism by parameter', 'Operator overloading, Parametric Polymorphism'] }]
        },
        {
          id: 'y1s2_cpp-u4',
          title: 'UNIT-IV — Generic Function',
          groups: [{ name: 'Templates & Runtime Polymorphism', topics: ['Template function, function name overloading', 'Overriding inheritance methods', 'Run time polymorphism, Multiple Inheritance'] }]
        },
        {
          id: 'y1s2_cpp-u5',
          title: 'UNIT-V — Files and Exception Handling',
          groups: [{ name: 'Streams, Namespaces & Exceptions', topics: ['Streams and files', 'Namespaces', 'Exception handling', 'Generic Classes'] }]
        }
      ]
    },
    {
      id: 'y1s2_ds',
      shortName: 'Data Structure',
      name: '2. Concepts of Data Structure',
      code: 'F0260702T',
      category: 'CC II (Theory + Lab)',
      units: [
        {
          id: 'y1s2_ds-u1',
          title: 'UNIT-I — Introduction & Arrays',
          groups: [{ name: 'Arrays & Matrices', topics: ['Introduction to Data Structure and its characteristics', 'Single and multidimensional arrays', 'Sparse arrays, lower/upper triangular and Tridiagonal matrices with Vector representation'] }]
        },
        {
          id: 'y1s2_ds-u2',
          title: 'UNIT-II — Stacks and Queues',
          groups: [{ name: 'Stack & Queue Operations', topics: ['Primitive operations on stack and stack applications', 'Infix, postfix, prefix expressions, evaluation & conversion', 'Primitive operations on queues, D-queues, and priority queues'] }]
        },
        {
          id: 'y1s2_ds-u3',
          title: 'UNIT-III — Lists',
          groups: [{ name: 'Linked Lists', topics: ['Introduction to linked lists (sequential and linked)', 'Traversal, insertion, deletion, searching', 'Two-way lists and use of headers'] }]
        },
        {
          id: 'y1s2_ds-u4',
          title: 'UNIT-IV — Trees',
          groups: [{ name: 'Binary Trees & BST', topics: ['Introduction and terminology, traversal of binary trees', 'Recursive algorithms for traversal, insertion, deletion', 'Binary Search Tree'] }]
        },
        {
          id: 'y1s2_ds-u5',
          title: 'UNIT-V — B-Trees, Sorting & Searching',
          groups: [{ name: 'Indexing, Sorting & Searching', topics: ['B-Trees: invention, indexing, creating a B-Tree', 'Sorting: Insertion, selection, merge, heap sort', 'Searching: linear search, binary search, hashing'] }]
        }
      ]
    }
  ]
};

const YEAR_2_SEM_3_SUBJECTS = [
  {
    id: 'java',
    shortName: 'JAVA & Web Design',
    name: '1. JAVA Programming and Dynamic Web Design',
    code: 'BCA301T',
    category: 'Major 08',
    units: [
      {
        id: 'java-u1',
        title: 'UNIT-I',
        groups: [
          {
            name: 'Java Programming',
            topics: ['Data types', 'Control structures', 'Arrays', 'Strings', 'Vector']
          }
        ]
      },
      {
        id: 'java-u2',
        title: 'UNIT-II',
        groups: [
          {
            name: 'Core OOP & Multithreading',
            topics: [
              'Classes',
              'Inheritance',
              'Abstract Class',
              'Interface',
              'Package',
              'Exception Handling',
              'Multithreaded Programming'
            ]
          },
          {
            name: 'Applets, AWT & String Handling',
            topics: [
              'Java Applets',
              'How to Run an Applet',
              'AWT Controls – Button, Label, Combo, List',
              'Event Listeners',
              'Menu Bar',
              'Layout Manager',
              'String Handling (only main functions)'
            ]
          }
        ]
      },
      {
        id: 'java-u3',
        title: 'UNIT-III',
        groups: [
          {
            name: 'Networking',
            topics: ['Datagram Socket', 'TCP/IP based Server Socket', 'Event Handling']
          },
          {
            name: 'JDBC',
            topics: ['Introduction', 'Drivers', 'Establishing Connection', 'Connection Pooling']
          }
        ]
      },
      {
        id: 'java-u4',
        title: 'UNIT-IV',
        groups: [
          {
            name: 'HTML',
            topics: [
              'Use of commenting',
              'Headers',
              'Text styling',
              'Images',
              'Formatting text with <FONT>',
              'Special characters',
              'Horizontal rules',
              'Line breaks',
              'Table',
              'Forms',
              'Image maps',
              '<META> tags',
              '<FRAMESET> tags',
              'File formats including image formats'
            ]
          },
          {
            name: 'Java Servlets',
            topics: [
              'Introduction',
              'HTTP Servlet Basics',
              'The Servlet Lifecycle',
              'Retrieving Information',
              'Sending HTML Information',
              'Session Tracking',
              'Database Connectivity'
            ]
          }
        ]
      },
      {
        id: 'java-u5',
        title: 'UNIT-V',
        groups: [
          {
            name: 'Java Server Pages',
            topics: [
              'Introducing Java Server Pages',
              'JSP Overview',
              'Setting Up the JSP Environment',
              'Generating Dynamic Content',
              'Using Custom Tag Libraries',
              'JSP Standard Tag Library',
              'Processing Input and Output'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'os',
    shortName: 'Operating System',
    name: '2. Operating System',
    code: 'BCA302T',
    category: 'Major 09',
    units: [
      {
        id: 'os-u1',
        title: 'UNIT-I',
        groups: [
          {
            name: 'Introduction',
            topics: [
              'What is an Operating System',
              'Simple Batch Systems',
              'Multi-programmed Batch Systems',
              'Time-Sharing Systems',
              'Personal-Computer Systems',
              'Parallel Systems',
              'Distributed Systems',
              'Real-Time Systems'
            ]
          },
          {
            name: 'Memory Management',
            topics: [
              'Background',
              'Logical versus Physical Address Space',
              'Swapping',
              'Contiguous Allocation',
              'Paging',
              'Segmentation'
            ]
          },
          {
            name: 'Virtual Memory',
            topics: [
              'Demand Paging',
              'Page Replacement',
              'Page-Replacement Algorithms',
              'Performance of Demand Paging',
              'Allocation of Frames',
              'Thrashing',
              'Other Considerations'
            ]
          }
        ]
      },
      {
        id: 'os-u2',
        title: 'UNIT-II',
        groups: [
          {
            name: 'Processes',
            topics: ['Process Concept', 'Process Scheduling', 'Operation on Processes']
          },
          {
            name: 'CPU Scheduling',
            topics: [
              'Basic Concepts',
              'Scheduling Criteria',
              'Scheduling Algorithms',
              'Multiple-Processor Scheduling'
            ]
          },
          {
            name: 'Process Synchronization',
            topics: [
              'Background',
              'The Critical-Section Problem',
              'Synchronization Hardware',
              'Semaphores',
              'Classical Problems of Synchronization'
            ]
          }
        ]
      },
      {
        id: 'os-u3',
        title: 'UNIT-III',
        groups: [
          {
            name: 'Deadlocks',
            topics: [
              'System Model',
              'Deadlock Characterization',
              'Methods for Handling Deadlocks',
              'Deadlock Prevention',
              'Deadlock Avoidance',
              'Deadlock Detection',
              'Recovery from Deadlock'
            ]
          }
        ]
      },
      {
        id: 'os-u4',
        title: 'UNIT-IV',
        groups: [
          {
            name: 'Device Management',
            topics: [
              'Techniques for Device Management',
              'Dedicated Devices',
              'Shared Devices',
              'Virtual Devices',
              'Input or Output Devices',
              'Storage Devices',
              'Buffering'
            ]
          },
          {
            name: 'Secondary Storage Structure',
            topics: [
              'Disk Structure',
              'Disk Scheduling',
              'Disk Management',
              'Swap-Space Management',
              'Disk Reliability'
            ]
          }
        ]
      },
      {
        id: 'os-u5',
        title: 'UNIT-V',
        groups: [
          {
            name: 'Information Management',
            topics: [
              'Introduction',
              'A Simple File System',
              'General Model of a File System',
              'Symbolic File System',
              'Basic File System',
              'Access Control Verification',
              'Logical File System',
              'Physical File System',
              'File-System Interface',
              'File Concept',
              'Access Methods',
              'Directory Structure',
              'Protection',
              'Consistency Semantics'
            ]
          },
          {
            name: 'File-System Implementation',
            topics: ['File-System Structure', 'Allocation Methods', 'Free-Space Management']
          }
        ]
      }
    ]
  },
  {
    id: 'nm',
    shortName: 'Numerical Methods',
    name: '3. Numerical Methods',
    code: 'BCA303',
    category: 'Major 10',
    units: [
      {
        id: 'nm-u1',
        title: 'UNIT-I',
        groups: [
          {
            name: 'Roots of Equations',
            topics: [
              'Bisection Method',
              'False Position Method',
              "Newton's Raphson Method",
              "Rate of Convergence of Newton's Method"
            ]
          }
        ]
      },
      {
        id: 'nm-u2',
        title: 'UNIT-II',
        groups: [
          {
            name: 'Interpolation and Extrapolation',
            topics: [
              'Finite Differences',
              'The Operator E',
              "Newton's Forward Differences",
              "Newton's Backward Differences",
              "Newton's Divided Differences Formula",
              "Lagrange's Interpolation Formula for Unequal Intervals",
              "Gauss's Interpolation Formula",
              'Stirling Formula',
              "Bessel's Formula",
              'Laplace-Everett Formula'
            ]
          }
        ]
      },
      {
        id: 'nm-u3',
        title: 'UNIT-III',
        groups: [
          {
            name: 'Numerical Differentiation',
            topics: ['Numerical Differentiation']
          },
          {
            name: 'Numerical Integration',
            topics: [
              'Introduction',
              'Direct Methods',
              'Maxima and Minima of a Tabulated Function',
              'General Quadratic Formula',
              'Trapezoidal Rule',
              "Simpson's One-Third Rule",
              "Simpson's Three-Eighth Rule"
            ]
          }
        ]
      },
      {
        id: 'nm-u4',
        title: 'UNIT-IV',
        groups: [
          {
            name: 'Solution of Linear Equation',
            topics: ["Gauss's Elimination Method", "Gauss's Siedel Iterative Method"]
          }
        ]
      },
      {
        id: 'nm-u5',
        title: 'UNIT-V',
        groups: [
          {
            name: 'Solution of Differential Equations',
            topics: ["Euler's Method", "Picard's Method", 'Fourth-Order Runge-Kutta Method']
          }
        ]
      }
    ]
  },
  {
    id: 'stats',
    shortName: 'Statistics',
    name: '4. Elements of Statistics',
    code: 'BCA308',
    category: 'Minor 2',
    units: [
      {
        id: 'stats-u1',
        title: 'UNIT-I',
        groups: [
          {
            name: 'Population, Sample and Data Condensation',
            topics: [
              'Definition and Scope of Statistics',
              'Concept of Population and Sample with Illustration',
              'Raw Data',
              'Attributes and Variables',
              'Classification',
              'Frequency Distribution',
              'Cumulative Frequency Distribution'
            ]
          }
        ]
      },
      {
        id: 'stats-u2',
        title: 'UNIT-II',
        groups: [
          {
            name: 'Measures of Central Tendency',
            topics: [
              'Concept of Central Tendency',
              'Requirements of a Good Measure of Central Tendency',
              'Arithmetic Mean',
              'Median',
              'Mode',
              'Harmonic Mean',
              'Geometric Mean for Grouped and Ungrouped Data'
            ]
          }
        ]
      },
      {
        id: 'stats-u3',
        title: 'UNIT-III',
        groups: [
          {
            name: 'Measures of Dispersion',
            topics: [
              'Concept of Dispersion',
              'Absolute and Relative Measure of Dispersion',
              'Range',
              'Variance',
              'Standard Deviation',
              'Coefficient of Variation'
            ]
          }
        ]
      },
      {
        id: 'stats-u4',
        title: 'UNIT-IV',
        groups: [
          {
            name: 'Permutations and Combinations',
            topics: [
              'Permutations of n dissimilar objects taken r at a time',
              'With or without repetitions',
              'nPr = n!/(n-r)! (without proof)',
              'Combinations of r objects taken from n objects',
              'nCr = n!/[r!(n-r)!] (without proof)',
              'Simple Examples',
              'Applications'
            ]
          }
        ]
      },
      {
        id: 'stats-u5',
        title: 'UNIT-V',
        groups: [
          {
            name: 'Probability Theory',
            topics: [
              'Experiments and Random Experiments',
              'Ideas of Deterministic and Non-Deterministic Experiments',
              'Definition of Sample Space',
              'Discrete Sample Space',
              'Events',
              'Types of Events',
              'Union and Intersection of Two or More Events',
              'Mutually Exclusive Events',
              'Complementary Event',
              'Exhaustive Event',
              'Simple Examples',
              'Classical Definition of Probability',
              'Addition Theorem of Probability without Proof',
              'Up to Three Events are Expected',
              'Conditional Probability',
              'Independence of Two Events'
            ]
          },
          {
            name: 'Statistical Quality Control',
            topics: [
              'Introduction',
              'Control Limits',
              'Specification Limits',
              'Tolerance Limits',
              'Process and Product Control'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'web',
    shortName: 'Web Designing',
    name: '5. Web Designing',
    code: '1180101T',
    category: 'Vocational',
    missingNotice: 'Official syllabus has not been provided by the college yet. Topics will be updated once released.',
    units: []
  },
  {
    id: 'hv',
    shortName: 'Human Values & EVS',
    name: '6. Human Values and Environmental Studies',
    code: 'BCA305',
    category: 'AECC 3',
    units: [
      {
        id: 'hv-u1',
        title: 'UNIT-I',
        groups: [
          {
            name: 'Human Values',
            topics: [
              'Introduction',
              'Values',
              'Characteristics',
              'Types',
              'Developing Value System in Indian Organisation',
              'Values in Business Management',
              'Value Based Organisation',
              'Trans-cultural Human Values in Management',
              "Swami Vivekananda's Philosophy of Character Building",
              "Gandhi's Concept of Seven Sins",
              'APJ Abdul Kalam View on Role of Parents and Teachers'
            ]
          },
          {
            name: 'Human Values and Present Practices',
            topics: [
              'Issues: Corruption and Bribe',
              'Privacy Policy in Web and Social Media',
              'Cyber Threats',
              'Online Shopping etc.'
            ]
          }
        ]
      },
      {
        id: 'hv-u2',
        title: 'UNIT-II',
        missingNotice: 'Unit-II details have not been provided in the official syllabus yet.',
        groups: []
      },
      {
        id: 'hv-u3',
        title: 'UNIT-III',
        groups: [
          {
            name: 'Remedies',
            topics: [
              'UK Bribery Act',
              'Introduction to Sustainable Policies and Practices in Indian Economy'
            ]
          },
          {
            name: 'Principles of Ethics',
            topics: ['Principles of Ethics']
          },
          {
            name: 'Secular and Spiritual Values in Management',
            topics: [
              'Introduction',
              'Secular and Spiritual Values',
              'Features',
              'Levels of Value Implementation',
              'Features of Spiritual Values'
            ]
          },
          {
            name: 'Corporate Social Responsibility',
            topics: ['Nature', 'Levels', 'Phases and Models of CSR']
          },
          {
            name: 'Corporate Governance',
            topics: ['Corporate Governance']
          },
          {
            name: 'CSR and Modern Business Tycoons',
            topics: ['Ratan Tata', 'Azim Premji', 'Bill Gates']
          }
        ]
      },
      {
        id: 'hv-u4',
        title: 'UNIT-IV',
        groups: [
          {
            name: 'Holistic Approach in Decision Making',
            topics: [
              'Decision Making',
              'The Decision-Making Process',
              'The Bhagavad Gita: Techniques in Management',
              'Dharma and Holistic Management'
            ]
          },
          {
            name: 'Discussion through Dilemmas',
            topics: [
              'Dilemmas in Marketing and Pharma Organisations',
              'Moving from Public to Private – Monopoly Context',
              'Dilemma of Privatisation',
              'Dilemma on Liberalization',
              'Dilemma on Social Media and Cyber Security',
              'Dilemma on Organic Food',
              'Dilemma on Standardization',
              'Dilemma on Quality Standards'
            ]
          }
        ]
      },
      {
        id: 'hv-u5',
        title: 'UNIT-V',
        groups: [
          {
            name: 'Ecosystem',
            topics: [
              'Concept',
              'Structure & Functions of Ecosystem',
              'Producer',
              'Consumer',
              'Decomposer',
              'Food Web',
              'Food Chain',
              'Energy Flow',
              'Ecological Pyramids'
            ]
          },
          {
            name: 'Conservation of Biodiversity',
            topics: ['In-situ Conservation', 'Ex-situ Conservation of Biodiversity']
          },
          {
            name: 'Other Topics',
            topics: [
              'Role of Individual in Pollution Control',
              'Human Population & Environment',
              'Sustainable Development',
              'India and UN Sustainable Development Goals',
              'Concept of Circular Economy and Entrepreneurship'
            ]
          }
        ]
      },
      {
        id: 'hv-u6',
        title: 'UNIT-VI',
        groups: [
          {
            name: 'Environmental Laws',
            topics: [
              'International Advancements in Environmental Conservation',
              'Role of National Green Tribunal',
              'Air Quality Index',
              'Importance of Indian Traditional Knowledge on Environment',
              'Bio Assessment of Environmental',
              'Quality Environmental Management System',
              'Environmental Impact Assessment',
              'Environmental Audit'
            ]
          }
        ]
      }
    ]
  }
];

const BCOM_1_SEM_1_SUBJECTS = [
  {
    id: 'bcom_bom',
    shortName: 'Business Org & Mgmt',
    name: '1. Business Organization and Management',
    code: 'DSC-1',
    category: '4 Credits',
    units: [
      {
        id: 'bcom_bom-u1',
        title: 'Unit I — Introduction',
        groups: [
          {
            name: 'Lesson 1: Management: An Overview',
            topics: [
              '1.2 Introduction',
              '1.3 Evolution of Management (Classical, Neoclassical & Modern Era Theories)',
              '1.4 Principles of Management',
              '1.5 Nature of Management',
              '1.6 Characteristics of Management',
              '1.7 Levels of Management',
              '1.8 Purpose of Management',
              '1.9 Significance of Management',
              '1.10 Functions of Management',
              "1.11 Saint Kabir's Model of Managerial Competencies"
            ]
          },
          {
            name: 'Lesson 2: Organizations',
            topics: [
              '2.2 Introduction: Organisation',
              "2.3 Stakeholder's Outlook about Organisation (Entrepreneur, Employees, Community, Consumers)",
              '2.4 Scope of Organisation',
              '2.5 Forms of Organisation',
              '2.6 Business Formats (Brick and Mortar, Brick and Click, Click)',
              '2.7 Difference between Brick & Mortar, Brick & Click and Click Organisation',
              '2.8 E-Commerce (Types, Benefits, Drawbacks)',
              '2.9 Franchising (Channels, Levels, Location, Benefits, Drawbacks)',
              '2.10 Outsourcing (Classification, Benefits, Disadvantages)',
              '2.11 Difference between Organisation and Management'
            ]
          }
        ]
      },
      {
        id: 'bcom_bom-u2',
        title: 'Unit II — Business Environment and Entrepreneurship',
        groups: [
          {
            name: 'Lesson 3: Business Environment',
            topics: [
              '3.2 Introduction: Business Environment',
              '3.3 Characteristics of Business Environment',
              '3.4 Components of Business Environment',
              '3.5 Business Friendly Environment',
              '3.6 Elements of Business Friendly Environment',
              '3.7 Ethics in Business',
              '3.8 The Importance of Business Ethics',
              '3.9 Principles of Business Ethics',
              '3.10 Steps to Develop Business Ethics in a Company',
              '3.11 Social Responsibility in Business',
              '3.12 Reasons for Corporate Social Responsibility',
              '3.13 Companies Act 2013: The CSR Legislations',
              '3.14 Properties of Corporate Social Responsibility',
              '3.15 Social Responsibility Components'
            ]
          },
          {
            name: 'Lesson 4: Entrepreneurship',
            topics: [
              '4.2 Introduction: Entrepreneurship',
              '4.3 The Role of Entrepreneurs',
              '4.4 Competencies for Entrepreneurs',
              '4.5 Functions of an Entrepreneur',
              '4.6 Types of Entrepreneurship',
              '4.7 The Importance of Entrepreneurship',
              '4.8 Entrepreneurship Process',
              '4.9 Social Entrepreneurship',
              '4.10 Features of Social Entrepreneurship',
              '4.11 Qualities of Social Entrepreneurship',
              '4.12 Social Entrepreneurship Process',
              '4.13 Micro, Small and Medium Enterprises (MSMEs)',
              "4.14 India's MSME Industry",
              '4.15 Investments in the MSMEs',
              '4.16 Major MSME Support Strategies'
            ]
          }
        ]
      },
      {
        id: 'bcom_bom-u3',
        title: 'Unit III — Planning and Organizing',
        groups: [
          {
            name: 'Lesson 5: Planning',
            topics: [
              '5.2 Introduction: Planning',
              '5.3 Types of Planning',
              '5.4 Importance of Planning',
              '5.5 Features of Planning',
              '5.6 Goals of Planning',
              '5.7 Planning Restrictions',
              '5.8 Procedure for the Planning Function',
              '5.9 External Planning Limitations',
              '5.10 Strategic Planning',
              '5.11 Operational Planning',
              '5.12 Characteristics of Operational Planning',
              '5.13 Decision-Making',
              '5.14 Decision-Making Models',
              '5.15 Decision-Making Techniques',
              '5.16 Qualitative Decision-Making Techniques'
            ]
          },
          {
            name: 'Lesson 6: Organizing',
            topics: [
              '6.2 Introduction',
              '6.3 Features of Organising',
              '6.4 Elements of Organising',
              '6.5 Importance of Organising',
              '6.6 Process of Organising',
              '6.7 Principles of Organising',
              '6.8 Organisation',
              '6.9 Organisational Process',
              '6.10 Structure of Organisation',
              '6.11 Virtual Organisation',
              '6.12 Types of Virtual Organisation',
              '6.13 Foundations of Organisational Structure',
              '6.14 Departmentation',
              '6.15 Configuration'
            ]
          }
        ]
      },
      {
        id: 'bcom_bom-u4',
        title: 'Unit IV — Directing and Controlling',
        groups: [
          {
            name: 'Lesson 7: Motivation',
            topics: [
              '7.2 Introduction',
              '7.3 Factors Essential for Effective Motivation',
              '7.4 Features of Motivation',
              '7.5 Significance of Motivation',
              '7.6 Theories of Motivation',
              '7.7 Rewards',
              '7.8 The Efficacy of Rewards',
              '7.9 Organisational Incentive System',
              '7.10 Incentive-Based Motivation',
              '7.11 Distinction between Reward and Incentives',
              '7.12 Types of Incentives'
            ]
          },
          {
            name: 'Lesson 8: Leadership, Communication and Control',
            topics: [
              '8.2 Introduction: Leadership',
              '8.3 Significance of Leadership',
              '8.4 Features of Leadership',
              '8.5 Leadership Styles',
              '8.6 Qualities of a Leader',
              '8.7 Leadership across the Organisation',
              '8.8 Practices for Developing Leadership',
              '8.9 Relationship among Leadership and Followership',
              '8.10 Importance of Good Followership',
              '8.11 Qualities of a Good Follower',
              '8.12 Types of Follower',
              '8.13 Communication',
              '8.14 Features of Communication',
              '8.15 Components of Communication',
              '8.16 Process of Communication',
              '8.17 Types of Communication',
              '8.18 Qualities of a Good Communicator',
              '8.19 Goals of Communication Effectiveness',
              '8.20 Factors Influencing Communication Effectiveness',
              '8.21 Controlling',
              '8.22 Features of Controlling',
              '8.23 Process of Controlling',
              '8.24 Kinds of Control',
              '8.25 Benefits of Controlling',
              '8.26 Drawbacks of Controlling',
              '8.27 Types of Control Mechanism'
            ]
          }
        ]
      },
      {
        id: 'bcom_bom-u5',
        title: 'Unit V — Indian Ethos and Contemporary Issues in Management',
        groups: [
          {
            name: 'Lesson 9: Indian Ethos in Management',
            topics: [
              '9.2 Introduction',
              '9.3 Nature of Ethics',
              '9.4 Benefits of Ethics',
              '9.5 Aims of Ethics',
              '9.6 Principles of Ethics',
              '9.7 Sources of Ethics',
              '9.8 Theories of Ethics',
              '9.9 Indian Culture and Ethics',
              '9.10 Indian Ethos in Management (Bhagwad Gita, Lord Ganesha, Ramayana, Lord Hanuman, Saint Kabir, Ethical Leadership: Adi Godrej)',
              '9.11 Holistic Management',
              '9.12 Features of Holistic Management',
              '9.13 Benefits of Holistic Management'
            ]
          },
          {
            name: 'Lesson 10: Business Organization and Management: Recent Developments',
            topics: [
              '10.2 Business Process Reengineering (BPR) (Principles, Process, Benefits, Drawbacks)',
              '10.3 Learning Organisations (Features, Advantages, Elements, Limitations)',
              '10.4 Six Sigma (Objectives, Benefits, Principles, DMAIC Life Cycle Model, Role)',
              '10.5 Supply Chain Management (Features, Principles, Functions, Components)'
            ]
          },
          {
            name: 'Lesson 11: Emerging Concepts in Management',
            topics: [
              '11.2 Introduction: Diversity at Workplace',
              '11.3 The Case for Workplace Diversity (Advantages, Disadvantages)',
              '11.4 Workplace Diversity and Inclusion',
              '11.5 Workforce Inclusion at Workplace',
              '11.6 Work-Life Balance',
              '11.7 The Case of Work-Life Balance (Negative Consequences)',
              '11.8 Workplace Strategies for Improving Work-Life Balance (Advantages, Disadvantages)',
              '11.9 Freelancing (Benefits, Drawbacks)',
              '11.10 Internet and Freelance at Work',
              '11.11 Difference between Freelancing and Working from Home',
              '11.12 Flexi Time (Benefits, Drawbacks)',
              '11.13 Work from Home',
              '11.14 Characteristics of Work from Home (Advantages, Disadvantages)',
              '11.15 Co-Sharing / Co-Working (Benefits, Drawbacks)'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bcom_law',
    shortName: 'Business Laws',
    name: '2. Business Laws',
    code: 'DSC-2',
    category: '4 Credits',
    units: [
      {
        id: 'bcom_law-u1',
        title: 'Unit I — Indian Contract Act, 1872',
        groups: [
          {
            name: 'Lesson 1: Indian Contract Act, 1972 (1872)',
            topics: [
              '1.2 Introduction',
              '1.3 Application of The English Law',
              '1.4 Meaning and Nature of Contract (Requirements, Essential Elements, Kinds of Contracts)',
              '1.5 Offer and Acceptance (Determination, Essentials, Tender, Cross Offers, Acceptance, Communication & Revocation, Modes of Revocation/Lapse)',
              "1.6 Capacity of Parties (Disqualification by Infancy, Minor's Agreement, Disqualification by Insanity)",
              '1.7 Consideration (Definition, Essential Elements, When No Consideration is Necessary, Stranger to Contract)',
              '1.8 Lawful Consideration or Objects',
              '1.9 Free Consent (Coercion, Undue Influence, Distinction)',
              '1.10 Fraud and Misrepresentation (Fraud, Misrepresentation, Distinction)',
              '1.11 Void Agreement (Void Agreement vs Void Contract, Illegal vs Opposed to Public Policy, Mistake of Law, Wager, Collateral Transaction, Contingent Contract, Wagering vs Contingent)'
            ]
          }
        ]
      },
      {
        id: 'bcom_law-u2',
        title: 'Unit II — Discharge of Contract and Remedies for Breach',
        groups: [
          {
            name: 'Lesson 2: Discharge of Contracts',
            topics: [
              '2.2 Introduction',
              '2.3 Discharge of Contract (Agreement, Performance, Lapse of Time, Operation of Law, Material Alteration, Subsequent Impossibility, Breach)',
              '2.4 Remedies for Breach of Contract (Rescission, Damages, Quantum Meruit, Specific Performance, Injunction)'
            ]
          },
          {
            name: 'Lesson 3: Contingent Contract and Quasi Contract',
            topics: [
              '3.2 Introduction',
              '3.3 Contingent Contracts (Introduction, Characteristics, Rules)',
              '3.4 Quasi Contracts (Introduction, Quasi-Contractual Obligations Sec. 68–72)'
            ]
          }
        ]
      },
      {
        id: 'bcom_law-u3',
        title: 'Unit III — Introduction to Special Contract',
        groups: [
          {
            name: 'Lesson 4: Indemnity, Guarantee, Bailment, Pledge & Agency',
            topics: [
              '4.2 Introduction',
              "4.3 Contract of Indemnity (Commencement of Indemnifier's Liability, Rights of Indemnity-Holder)",
              "4.4 Contract of Guarantee (Definition, Essentials, Invalid Guarantee, Indemnity vs Guarantee, Kinds, Revocation, Surety's Liability, Rights of Surety, Co-Sureties Sec. 147, Discharge)",
              '4.5 Contract of Bailment (Definition, Characteristics, Rights & Duties of Bailor & Bailee, Third Parties, Finder of Goods, Lien)',
              '4.6 Contract of Pledge (Definition, Rights & Duties of Pawner & Pawnee, Termination of Bailment)',
              '4.7 Contract of Agency (Definition, Creation, Extent & Delegation of Authority Sec. 186–195, Third Persons, Personal Liability, Rights & Duties, Termination)'
            ]
          }
        ]
      },
      {
        id: 'bcom_law-u4',
        title: 'Unit IV — The Sale of Goods Act, 1930',
        groups: [
          {
            name: 'Lesson 5: The Sale of Goods Act 1930',
            topics: [
              '5.2 Introduction',
              '5.3 Fundamental Concepts (Goods, Kinds of Goods, Effect of Perishing of Goods)',
              '5.4 Contract of Sale',
              '5.5 Sale Distinguished from Other Transactions (Hire Purchase, Work & Labour, Conditions & Warranties)',
              '5.6 Implied Conditions and Warranties (Implied Warranties Sec. 14, Doctrine of Caveat Emptor)',
              '5.7 Essentials of a Contract of Sale of Goods'
            ]
          },
          {
            name: 'Lesson 6: Transfer of Property in Contracts of Sale of Goods',
            topics: [
              '6.2 Introduction',
              '6.3 Transfer of Property (Specific & Ascertained Goods, Appropriation of Goods, Transfer of Title)',
              '6.4 Sale by Non-Owners',
              '6.5 Reservation of Right of Disposal by Seller',
              '6.6 Rights of Unpaid Seller (Against Goods, Against the Buyer Personally)'
            ]
          }
        ]
      },
      {
        id: 'bcom_law-u5',
        title: 'Unit V — The Limited Liability Partnership Act, 2008',
        groups: [
          {
            name: 'Lesson 7: Meaning of Limited Liability Partnership',
            topics: [
              '7.2 Introduction',
              '7.3 Meaning of LLP',
              '7.4 Administration and Amendments in the Act',
              '7.5 Features of LLP',
              '7.6 LLP Agreement (Contents, Advantages, Disadvantages)',
              '7.7 Difference between Partnership, Company and LLP',
              '7.8 Incorporation of LLP (Sec. 11)',
              '7.9 Registered Office of LLP (Sec. 13)',
              '7.10 Provisions Relating to Name of LLP and Changes Therein (Sec. 15–21)'
            ]
          },
          {
            name: 'Lesson 8: Partners, Their Relations and Liabilities in a LLP',
            topics: [
              '8.2 Introduction',
              '8.3 Who Can Be Partners of LLP (Qualifications, Disqualification Sec. 5)',
              '8.4 Minimum and Maximum Number of Partners',
              '8.5 Designated Partners (Appointment, DPIN, Disqualifications)',
              '8.6 Liabilities of Designated Partners Sec. 8 (Changes, Relations, Punishment)',
              '8.7 Termination of Partnership Interest (Termination, Obligations of Former Partner)',
              '8.8 Registration of Changes in Partners',
              '8.9 Partner as Agent of LLP',
              "8.10 Extent of Liability of LLP (Limits, Partners' Liability, Holding Out, Unlimited Liability in Fraud)",
              '8.11 Whistle Blowing'
            ]
          },
          {
            name: 'Lesson 9: Financial Disclosure and Winding Up of LLP',
            topics: [
              '9.2 Introduction',
              '9.3 Meaning of Financial Disclosures of LLP (Books of Account, Annual Return, Other Compliances)',
              '9.4 Taxation of LLP',
              '9.5 Conversion into LLP (Partnership Firm, Private Company, Unlisted Public Company)',
              '9.6 Effects of Registration of Conversion',
              '9.7 Winding Up of LLP (Meaning, Modes)',
              '9.8 Voluntary Winding Up (Steps Involved, Effect of Liquidation)',
              '9.9 Compulsory Winding Up by the Tribunal (Steps)',
              '9.10 Liquidator'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bcom_fa',
    shortName: 'Financial Accounting',
    name: '3. Financial Accounting',
    code: 'DSC-3',
    category: '4 Credits',
    units: [
      {
        id: 'bcom_fa-u1',
        title: 'Unit I — Theoretical Framework and Accounting Process',
        groups: [
          {
            name: 'Lesson 1: Accounting: Its Concepts and Conventions',
            topics: [
              '1.2 Introduction',
              '1.3 Accounting as an Information System (Functions, Advantages, Limitations, Users, Role of AI & Data Analytics)',
              '1.4 Branches of Accounting',
              '1.5 Basis of Accounting',
              '1.6 Accounting Concepts',
              '1.7 Essential Features of Accounting Principles',
              '1.8 Accounting Conventions'
            ]
          },
          {
            name: 'Lesson 2: Accounting Standards',
            topics: [
              '2.2 Introduction',
              '2.3 Utility of Accounting Standards',
              '2.4 Accounting Standards in India',
              '2.5 Procedure of Preparing Accounting Standards',
              '2.6 Propagation of Accounting Standards',
              '2.7 Preface to the Statements of Accounting Standards (ASB Formation, Scope & Functions, Audited Financial Statements, Compliance)'
            ]
          },
          {
            name: 'Lesson 3: Accounting Process',
            topics: [
              '3.2 Introduction',
              '3.3 Meaning of Accounting Process',
              '3.4 Details Contained in Subsidiary Books',
              '3.5 Purchase Book',
              '3.6 Sales Book',
              '3.7 Purchase Return Book',
              '3.8 Sales Return Book',
              '3.9 Cash Book (and Bills Receivable)',
              '3.10 Cash Book (Cash and Discount Columns)',
              '3.11 Triple Column Cash Book',
              '3.12 Petty Cash Book',
              '3.13 Trial Balance'
            ]
          }
        ]
      },
      {
        id: 'bcom_fa-u2',
        title: 'Unit II — Business Income, PPE & Valuation of Inventory',
        groups: [
          {
            name: 'Lesson 4: Business Income, AS-10 & Inventory',
            topics: [
              '4.2 Introduction',
              '4.3 Business Income',
              '4.4 AS-10 Property, Plant and Equipment',
              '4.5 Meaning of Inventory',
              '4.6 Significance of Inventory Valuation',
              '4.7 Inventory Record Systems – Periodic and Perpetual',
              '4.8 Inventories Taking',
              '4.9 Methods of Inventory Valuation – Introduction of FIFO, LIFO and Weighted Average'
            ]
          },
          {
            name: 'Lesson 5: Inventory Management',
            topics: [
              '5.2 Introduction',
              '5.3 Methods of Inventory Valuation – FIFO Method',
              '5.4 FIFO Method – Periodic FIFO and Perpetual FIFO',
              '5.5 LIFO Method – Periodic LIFO and Perpetual LIFO',
              '5.6 Weighted Average Method – Periodic Average and Perpetual Average',
              '5.7 Miscellaneous / Practical Problems'
            ]
          }
        ]
      },
      {
        id: 'bcom_fa-u3',
        title: 'Unit III — Financial Statements of Sole Proprietorship & NPOs',
        groups: [
          {
            name: 'Lesson 6: Accounts from Incomplete Records: Single Entry System',
            topics: [
              '6.2 Introduction',
              '6.3 Meaning and Definition of Single Entry System and Disadvantages',
              '6.4 How to Ascertain Capital',
              '6.5 Conversion into Double Entry',
              '6.6 Checking Waste Book for Unrecorded Transactions',
              '6.7 Preparation of Trading and P&L A/c & Balance Sheet from Single Entry Records'
            ]
          },
          {
            name: 'Lesson 7: Final Accounts of Not-for-Profit Organizations',
            topics: [
              '7.2 Introduction',
              '7.3 Meaning of Final Accounts of Not-for-Profit Organisation',
              '7.4 Receipt and Payment Account',
              '7.5 Difference between Receipts & Payments A/c and Income & Expenditure A/c',
              '7.6 Steps to Prepare Income and Expenditure A/c from Receipts and Payments A/c'
            ]
          }
        ]
      },
      {
        id: 'bcom_fa-u4',
        title: 'Unit IV — Accounting for Inland Branches, Departments and Leases',
        groups: [
          {
            name: 'Lesson 8: Accounting for Branches and Departments',
            topics: [
              '8.2 Introduction',
              '8.3 Meaning of Branch',
              '8.4 Types of Branches',
              '8.5 Accounting for Dependent Branch',
              '8.6 Goods Returned and Cash Remitted by Branch Customers Directly to Head Office',
              '8.7 Goods Sent to Another Branch and Goods Received from Another Branch',
              '8.8 When Goods Are Sent to Branch at Cost Plus Profit',
              '8.9 Stock and Debtor System',
              '8.10 Department Accounting'
            ]
          },
          {
            name: 'Lesson 9: Lease Transactions: Concept & Classification',
            topics: [
              '9.2 Introduction',
              '9.3 Meaning of Lease and its Accounting Standard',
              '9.4 Features, Advantages and Disadvantages of Lease',
              '9.5 Important Terms Used in Lease Agreement',
              '9.6 Classification of Lease (Finance Lease and Operating Lease)',
              '9.7 Difference between Operating and Financing Lease',
              '9.8 Practical (Classification & MLP)',
              '9.9 Accounting Treatment of Finance Lease',
              '9.10 Accounting Treatment of Operating Lease',
              '9.11 Accounting for Sale and Lease Back',
              '9.12 Ind AS-116 Lease and AS-19'
            ]
          }
        ]
      },
      {
        id: 'bcom_fa-u5',
        title: 'Unit V — Computerized Accounting System',
        groups: [
          {
            name: 'Lesson 10: Computerized Accounting System',
            topics: [
              '10.2 Introduction',
              '10.3 Objectives of Computerized Accounting System',
              '10.4 Creating a Company',
              '10.5 Short Cut Keys Used at Gateways of Tally Related to Company/Companies',
              '10.6 Accounting Features (General, Outstanding, Cost/Profit Centres, Invoicing, Budget & Scenario, Banking, Other)',
              '10.7 General Configurations Used in Tally (Country, Naming, Dates, Numbers, Table, Import/Export, Other)',
              '10.8 Numeric Symbol',
              '10.9 Accounts / Inventories (Master Configuration, Accounts Master, Inventory Masters)',
              '10.10 Ledgers and their Heads',
              '10.11 Creating Groups'
            ]
          },
          {
            name: 'Lesson 11: Groups and Ledgers',
            topics: [
              '11.2 Introduction',
              '11.3 Reserved Groups that Go into Balance Sheet',
              '11.4 Ledger Creation within Groups (Multiple Ledgers, Buttons on Multiple Ledger Screen)',
              '11.5 Groups Formation, Types of Groups and Group Formation under Inventory Info',
              '11.6 Vouchers (Types of Vouchers)',
              '11.7 Conversion of Voucher from One Type to Another'
            ]
          },
          {
            name: 'Lesson 12: Trial Balance, Cash Flow Statement and Reports',
            topics: [
              '12.2 Introduction',
              '12.3 Generating Reports',
              '12.4 Trial Balance',
              '12.5 Cash Flow Statement',
              '12.6 Cash Flow in Tally ERP.9',
              '12.7 Fund Flow Statement',
              '12.8 Selecting and Shutting a Company',
              '12.9 Backup and Restore of Data of a Company'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bcom_evs',
    shortName: 'Environmental Studies',
    name: '4. Environmental Studies',
    code: 'Core Module',
    category: 'Compulsory',
    units: [
      {
        id: 'bcom_evs-u1',
        title: 'Unit 1 — Introduction to Environmental Studies (2 Lectures)',
        groups: [
          {
            name: 'Core Topics',
            topics: [
              'Multidisciplinary nature of environmental studies',
              'Scope and importance',
              'Need for public awareness'
            ]
          }
        ]
      },
      {
        id: 'bcom_evs-u2',
        title: 'Unit 2 — Ecosystems (6 Lectures)',
        groups: [
          {
            name: 'Core Topics',
            topics: [
              'What is an ecosystem? Structure and function of ecosystem',
              'Energy flow in an ecosystem: food chains, food webs and ecological succession',
              'Case studies: Forest, Grassland, Desert, and Aquatic ecosystems (ponds, streams, lakes, rivers, oceans, estuaries)'
            ]
          }
        ]
      },
      {
        id: 'bcom_evs-u3',
        title: 'Unit 3 — Natural Resources: Renewable and Non-renewable Resources (8 Lectures)',
        groups: [
          {
            name: 'Core Topics',
            topics: [
              'Land resources and landuse change; Land degradation, soil erosion and desertification',
              'Deforestation: Causes and impacts due to mining, dam building on environment, forests, biodiversity and tribal populations',
              'Water: Use and over-exploitation of surface and ground water, floods, droughts, conflicts over water (international & inter-state)',
              'Energy resources: Renewable and non-renewable energy sources, alternate energy sources, growing energy needs, case studies'
            ]
          }
        ]
      },
      {
        id: 'bcom_evs-u4',
        title: 'Unit 4 — Biodiversity and Conservation (8 Lectures)',
        groups: [
          {
            name: 'Core Topics',
            topics: [
              'Levels of biological diversity: genetic, species and ecosystem diversity',
              'Biogeographic zones of India; Biodiversity patterns and global biodiversity hot spots',
              'India as a mega-biodiversity nation; Endangered and endemic species of India',
              'Threats to biodiversity: Habitat loss, poaching of wildlife, man-wildlife conflicts, biological invasions',
              'Conservation of biodiversity: In-situ and Ex-situ conservation of biodiversity',
              'Ecosystem and biodiversity services: Ecological, economic, social, ethical, aesthetic and Informational value'
            ]
          }
        ]
      },
      {
        id: 'bcom_evs-u5',
        title: 'Unit 5 — Environmental Pollution (8 Lectures)',
        groups: [
          {
            name: 'Core Topics',
            topics: [
              'Environmental pollution: types, causes, effects and controls (Air, water, soil and noise pollution)',
              'Nuclear hazards and human health risks',
              'Solid waste management: Control measures of urban and industrial waste',
              'Pollution case studies'
            ]
          }
        ]
      },
      {
        id: 'bcom_evs-u6',
        title: 'Unit 6 — Environmental Policies & Practices (7 Lectures)',
        groups: [
          {
            name: 'Core Topics',
            topics: [
              'Sustainability and sustainable development',
              'Climate change, global warming, ozone layer depletion, acid rain and impacts on human communities and agriculture',
              'Environment Laws: Environment Protection Act, Air Act, Water Act, Wildlife Protection Act, Forest Conservation Act',
              'Nature reserves, tribal populations and rights, and human-wildlife conflicts in Indian context'
            ]
          }
        ]
      },
      {
        id: 'bcom_evs-u7',
        title: 'Unit 7 — Human Communities and the Environment (6 Lectures)',
        groups: [
          {
            name: 'Core Topics',
            topics: [
              'Human population growth: Impacts on environment, human health and welfare',
              'Resettlement and rehabilitation of project affected persons; case studies',
              'Disaster management: floods, earthquake, cyclones and landslides',
              'Environmental movements: Chipko, Silent Valley, Bishnois of Rajasthan',
              'Environmental ethics: Role of Indian and other religions and cultures in environmental conservation',
              'Environmental communication and public awareness, case studies (e.g., CNG vehicles in Delhi)'
            ]
          }
        ]
      },
      {
        id: 'bcom_evs-u8',
        title: 'Unit 8 — Field Work (Equal to 5 Lectures)',
        groups: [
          {
            name: 'Field Activities',
            topics: [
              'Visit to an area to document environmental assets: river / forest / flora / fauna, etc.',
              'Visit to a local polluted site – Urban / Rural / Industrial / Agricultural',
              'Study of common plants, insects, birds and basic principles of identification',
              'Study of simple ecosystems – pond, river, Delhi Ridge, etc.'
            ]
          }
        ]
      }
    ]
  }
];

const COURSES = {
  bca: {
    id: 'bca',
    name: 'BCA',
    fullName: 'Bachelor of Computer Applications',
    defaultYear: 'bca_y2',
    years: {
      bca_y1: {
        id: 'bca_y1',
        label: '1st Year (Semester I)',
        shortLabel: '1st Year',
        semLabel: 'BCA 1st Year • Semester I',
        subjects: YEAR_1_SEM_1_SUBJECTS,
        sem2ComingSoon: true
      },
      bca_y2: {
        id: 'bca_y2',
        label: '2nd Year (Semester III)',
        shortLabel: '2nd Year',
        semLabel: 'BCA 2nd Year • Semester III',
        subjects: YEAR_2_SEM_3_SUBJECTS,
        sem2ComingSoon: false
      }
    }
  },
  bcom: {
    id: 'bcom',
    name: 'DU B.Com',
    fullName: 'B.Com (Delhi University)',
    defaultYear: 'bcom_y1',
    years: {
      bcom_y1: {
        id: 'bcom_y1',
        label: '1st Year (Semester I)',
        shortLabel: '1st Year',
        semLabel: 'DU B.Com (Delhi University) 1st Year • Semester I',
        subjects: BCOM_1_SEM_1_SUBJECTS,
        sem2ComingSoon: false
      }
    }
  }
};

const STORAGE_KEY = 'syllabus_tracker_checklist_v1';
const COURSE_STORAGE_KEY = 'syllabus_selected_course_v1';
const YEAR_STORAGE_KEY = 'syllabus_selected_year_v1';
const COLLAPSED_UNITS_KEY = 'syllabus_collapsed_units_v1';
const COLLAPSED_CHAPTERS_KEY = 'syllabus_collapsed_chapters_v1';

let selectedCourse = 'bca';
let selectedYear = 'bca_y2';
let modalCourse = 'bca';
let checkedMap = {};
let activeTab = 'overview';
let filterMode = 'all';
let searchQuery = '';
let collapsedUnits = {};
let collapsedChapters = {};
let pendingModalAction = null;
let promptDismissedThisSession = false;
let guestTickCount = 0;

let fbAuth = null;
let fbDb = null;
let currentUser = null;
let unsubscribeSnapshot = null;
let adminUsersCache = [];
let adminDetailState = null;
let adminDashboardMode = 'students';
let previewDraftState = null;
let editingCourseMeta = null;
let editingSubjectsDraft = null;
let expandedEditSubIdx = null;

function normalizeCourseYear(course, year) {
  if (year === 'year1') return { course: 'bca', year: 'bca_y1' };
  if (year === 'year2') return { course: 'bca', year: 'bca_y2' };
  if (course && COURSES[course]) {
    const yrs = COURSES[course].years;
    if (year && yrs[year]) return { course, year };
    return { course, year: COURSES[course].defaultYear };
  }
  for (const [cId, cObj] of Object.entries(COURSES)) {
    if (year && cObj.years[year]) {
      return { course: cId, year };
    }
  }
  return { course: 'bca', year: 'bca_y2' };
}


function isYearVisibleToUser(yearObj) {
  if (!yearObj) return false;
  if (yearObj.isDraft && !previewDraftState) return false;
  if (yearObj.isDraft && previewDraftState && previewDraftState.yearId !== yearObj.id) return false;
  return true;
}

function getVisibleCourses() {
  const out = {};
  Object.entries(COURSES).forEach(([cId, cObj]) => {
    const visibleYears = {};
    Object.entries(cObj.years || {}).forEach(([yId, yObj]) => {
      if (isYearVisibleToUser(yObj)) visibleYears[yId] = yObj;
    });
    if (Object.keys(visibleYears).length > 0) {
      out[cId] = { ...cObj, years: visibleYears };
    }
  });
  return out;
}

function getCurrentCourseConfig() {
  if (previewDraftState && COURSES[previewDraftState.courseId]) {
    return COURSES[previewDraftState.courseId];
  }
  const vis = getVisibleCourses();
  return vis[selectedCourse] || vis.bca || COURSES.bca;
}

function getCurrentYearConfig() {
  const c = getCurrentCourseConfig();
  if (previewDraftState && c.years[previewDraftState.yearId]) {
    return c.years[previewDraftState.yearId];
  }
  const firstKey = Object.keys(c.years)[0];
  return c.years[selectedYear] || c.years[c.defaultYear] || c.years[firstKey];
}

function getCurrentSubjects() {
  return getCurrentYearConfig().subjects;
}

function getAdminConfig(user) {
  if (!user || !user.email) return null;
  const email = user.email.toLowerCase();
  for (const [k, v] of Object.entries(ADMIN_ACCESS)) {
    if (k.toLowerCase() === email) return v;
  }
  return null;
}

function getAdminScope(user) {
  const cfg = getAdminConfig(user);
  return cfg ? cfg.scope : null;
}

function isAdminUser(user) {
  return getAdminConfig(user) !== null;
}

function canAdminViewAllSyllabus(user) {
  const cfg = getAdminConfig(user);
  return !!(cfg && cfg.canViewAllSyllabus);
}

function canAdminAddSyllabus(user) {
  const cfg = getAdminConfig(user);
  return !!(cfg && cfg.canAddSyllabus);
}

function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'Good Morning';
  if (hour >= 12 && hour < 17) return 'Good Afternoon';
  if (hour >= 17 && hour < 21) return 'Good Evening';
  return 'Good Night';
}

function updateGreetingUI() {
  const greetingEl = document.getElementById('greeting-text');
  if (!greetingEl) return;
  const baseGreeting = getTimeGreeting();
  if (currentUser) {
    const firstName = currentUser.displayName
      ? currentUser.displayName.split(' ')[0]
      : currentUser.email.split('@')[0];
    greetingEl.textContent = `Hello ${firstName}! ${baseGreeting}`;
  } else {
    greetingEl.textContent = `Hello! ${baseGreeting}`;
  }
}

function renderHeaderYearButtons() {
  const yearBar = document.getElementById('year-bar');
  if (!yearBar) return;
  const c = getCurrentCourseConfig();
  yearBar.innerHTML = Object.values(c.years)
    .map(
      (y) => `
      <button type="button" data-select-year="${y.id}" class="year-pill ${y.id === selectedYear ? 'active' : ''}">
        ${escapeHtml(y.label)}
      </button>
    `
    )
    .join('');
}

function renderModalYearChoices() {
  const container = document.getElementById('modal-year-choices');
  const modalCourseBar = document.getElementById('modal-course-bar');
  if (modalCourseBar) {
    modalCourseBar.innerHTML = Object.values(getVisibleCourses())
      .map(
        (cObj) => `<button type="button" data-modal-course="${escapeHtml(cObj.id)}" class="year-pill ${cObj.id === modalCourse ? 'active' : ''}">${escapeHtml(cObj.fullName || cObj.name)}</button>`
      )
      .join('');
  }
  if (!container) return;
  const visC = getVisibleCourses();
  const c = visC[modalCourse] || visC.bca || Object.values(visC)[0];
  container.innerHTML = Object.values(c.years)
    .map(
      (y) => `
      <button type="button" data-pick-course="${c.id}" data-pick-year="${y.id}" class="year-choice-btn">
        <div style="font-weight:700;font-size:0.95rem;">${escapeHtml(c.name)} ${escapeHtml(y.shortLabel)}</div>
        <div style="font-size:0.78rem;color:#64748b;margin-top:0.15rem;">${escapeHtml(y.semLabel)}</div>
      </button>
    `
    )
    .join('');
}

function updateYearUI() {
  const banner = document.getElementById('preview-banner');
  const bannerTxt = document.getElementById('preview-banner-text');
  const pubBtn = document.getElementById('btn-preview-publish');
  if (banner) {
    if (previewDraftState && canAdminAddSyllabus(currentUser)) {
      const pCourse = COURSES[previewDraftState.courseId];
      const pYear = pCourse && pCourse.years[previewDraftState.yearId];
      banner.classList.remove('hidden');
      if (bannerTxt && pYear) {
        bannerTxt.innerHTML = `<strong>Preview Mode:</strong> ${escapeHtml(pYear.semLabel)} ${pYear.isDraft ? '(Draft — Only visible to you)' : '(Live)'}`;
      }
      if (pubBtn) pubBtn.classList.toggle('hidden', !(pYear && pYear.isDraft));
    } else {
      banner.classList.add('hidden');
    }
  }
  const cfg = getCurrentYearConfig();
  const badge = document.getElementById('header-sem-badge');
  if (badge) badge.textContent = cfg.semLabel;

  const wrap = document.getElementById('year-selector-wrap');
  if (wrap) {
    if (currentUser) {
      wrap.classList.add('hidden');
    } else {
      wrap.classList.remove('hidden');
    }
  }

  const courseBar = document.getElementById('course-bar');
  if (courseBar) {
    courseBar.innerHTML = Object.values(getVisibleCourses())
      .map(
        (cObj) => `<button type="button" data-select-course="${escapeHtml(cObj.id)}" class="year-pill ${cObj.id === selectedCourse ? 'active' : ''}">${escapeHtml(cObj.fullName || cObj.name)}</button>`
      )
      .join('');
  }
  renderHeaderYearButtons();
}

function setCourseAndYear(course, yr, pushCloud) {
  const norm = normalizeCourseYear(course, yr);
  selectedCourse = norm.course;
  selectedYear = norm.year;
  activeTab = 'overview';
  filterMode = 'all';
  searchQuery = '';
  try {
    localStorage.setItem(COURSE_STORAGE_KEY, selectedCourse);
    localStorage.setItem(YEAR_STORAGE_KEY, selectedYear);
  } catch (e) {}
  updateYearUI();
  render();
  if (pushCloud && currentUser && fbDb) {
    pushToCloud();
  }
}

function saveCollapseState() {
  try {
    localStorage.setItem(COLLAPSED_UNITS_KEY, JSON.stringify(collapsedUnits));
    localStorage.setItem(COLLAPSED_CHAPTERS_KEY, JSON.stringify(collapsedChapters));
  } catch (e) {}
}

function loadState() {
  checkedMap = {};
  try {
    const savedCourse = localStorage.getItem(COURSE_STORAGE_KEY);
    const savedYr = localStorage.getItem(YEAR_STORAGE_KEY);
    const norm = normalizeCourseYear(savedCourse, savedYr);
    selectedCourse = norm.course;
    selectedYear = norm.year;
    modalCourse = selectedCourse;
    const savedCU = localStorage.getItem(COLLAPSED_UNITS_KEY);
    if (savedCU) collapsedUnits = JSON.parse(savedCU) || {};
    const savedCC = localStorage.getItem(COLLAPSED_CHAPTERS_KEY);
    if (savedCC) collapsedChapters = JSON.parse(savedCC) || {};
  } catch (e) {}
}

function saveState(skipCloud) {
  if (!currentUser) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedMap));
    localStorage.setItem(COURSE_STORAGE_KEY, selectedCourse);
    localStorage.setItem(YEAR_STORAGE_KEY, selectedYear);
  } catch (e) {}
  if (!skipCloud && fbDb) {
    pushToCloud();
  }
}

function applyAvatar(imgEl, fallbackEl, user) {
  const name = (user && (user.displayName || user.email)) || 'U';
  const initial = name.trim().charAt(0).toUpperCase();
  fallbackEl.textContent = initial;
  if (user && user.photoURL) {
    imgEl.src = user.photoURL;
    imgEl.classList.remove('hidden');
    fallbackEl.classList.add('hidden');
    imgEl.onerror = () => {
      imgEl.classList.add('hidden');
      fallbackEl.classList.remove('hidden');
    };
  } else {
    imgEl.classList.add('hidden');
    fallbackEl.classList.remove('hidden');
  }
}

function updateAuthUI() {
  const loginBtn = document.getElementById('btn-google-login');
  const userPill = document.getElementById('btn-user-pill');
  const adminBtn = document.getElementById('btn-admin-panel');

  if (currentUser) {
    loginBtn.classList.add('hidden');
    userPill.classList.remove('hidden');
    const shortName = currentUser.displayName
      ? currentUser.displayName.split(' ')[0]
      : currentUser.email.split('@')[0];
    document.getElementById('header-user-name').textContent = shortName;
    applyAvatar(
      document.getElementById('header-avatar-img'),
      document.getElementById('header-avatar-fallback'),
      currentUser
    );
    applyAvatar(
      document.getElementById('modal-avatar-img'),
      document.getElementById('modal-avatar-fallback'),
      currentUser
    );
    document.getElementById('modal-user-name').textContent = currentUser.displayName || 'Google User';
    document.getElementById('modal-user-email').textContent = currentUser.email || '';
  } else {
    loginBtn.classList.remove('hidden');
    userPill.classList.add('hidden');
  }

  if (isAdminUser(currentUser)) {
    adminBtn.classList.remove('hidden');
  } else {
    adminBtn.classList.add('hidden');
  }

  updateGreetingUI();
  updateYearUI();
}

function getYearStatsFor(courseId, yearId) {
  const c = COURSES[courseId] || COURSES.bca;
  const y = c.years[yearId] || c.years[c.defaultYear];
  let total = 0;
  let done = 0;
  const breakdown = {};
  y.subjects.forEach((sub) => {
    const s = getSubjectStats(sub);
    total += s.total;
    done += s.done;
    if (!sub.missingNotice) {
      breakdown[sub.shortName] = s.pct;
    }
  });
  return {
    total,
    done,
    left: total - done,
    pct: total ? Math.round((done / total) * 100) : 0,
    breakdown
  };
}

function pushToCloud() {
  if (!currentUser || !fbDb) return;
  const activeStats = getYearStatsFor(selectedCourse, selectedYear);
  const y1Stats = getYearStatsFor('bca', 'bca_y1');
  const y2Stats = getYearStatsFor('bca', 'bca_y2');
  const bcomY1Stats = getYearStatsFor('bcom', 'bcom_y1');
  const payload = {
    email: currentUser.email || '',
    displayName:
      currentUser.displayName ||
      (currentUser.email ? currentUser.email.split('@')[0] : 'Student'),
    photoURL: currentUser.photoURL || '',
    selectedCourse: selectedCourse,
    selectedYear: selectedYear,
    checkedMap: checkedMap,
    overallPct: activeStats.pct,
    doneCount: activeStats.done,
    totalCount: activeStats.total,
    subjectStats: activeStats.breakdown,
    year1Pct: y1Stats.pct,
    year1Done: y1Stats.done,
    year1Total: y1Stats.total,
    year1Subjects: y1Stats.breakdown,
    year2Pct: y2Stats.pct,
    year2Done: y2Stats.done,
    year2Total: y2Stats.total,
    year2Subjects: y2Stats.breakdown,
    bcomY1Pct: bcomY1Stats.pct,
    bcomY1Done: bcomY1Stats.done,
    bcomY1Total: bcomY1Stats.total,
    bcomY1Subjects: bcomY1Stats.breakdown,
    updatedAt: new Date().toISOString()
  };
  fbDb
    .collection('users')
    .doc(currentUser.uid)
    .set(payload)
    .catch(() => {});
}

function openCourseYearPickerModal() {
  modalCourse = selectedCourse;
  renderModalYearChoices();
  document.getElementById('year-picker-modal').classList.add('open');
}

const GEMINI_KEY_STORAGE = 'admin_gemini_api_key_v1';
let cachedAdminGeminiKey = '';
try { cachedAdminGeminiKey = localStorage.getItem(GEMINI_KEY_STORAGE) || ''; } catch (e) {}

function loadAdminSecretsIfAllowed(user) {
  if (!fbDb || !canAdminAddSyllabus(user)) return;
  fbDb.collection('admin_config').doc('secrets').get()
    .then((doc) => {
      if (doc.exists && doc.data() && doc.data().geminiApiKey) {
        cachedAdminGeminiKey = doc.data().geminiApiKey;
        try { localStorage.setItem(GEMINI_KEY_STORAGE, cachedAdminGeminiKey); } catch (e) {}
      }
    })
    .catch(() => {});
}

function startCloudListener(user) {
  loadAdminSecretsIfAllowed(user);
  if (unsubscribeSnapshot) {
    unsubscribeSnapshot();
    unsubscribeSnapshot = null;
  }
  if (!user || !fbDb) return;
  const docRef = fbDb.collection('users').doc(user.uid);
  unsubscribeSnapshot = docRef.onSnapshot(
    (doc) => {
      if (doc.exists && doc.data()) {
        const data = doc.data();
        if (data.selectedYear) {
          const norm = normalizeCourseYear(data.selectedCourse, data.selectedYear);
          selectedCourse = norm.course;
          selectedYear = norm.year;
          updateYearUI();
        } else if (guestTickCount === 0) {
          openCourseYearPickerModal();
        }
        if (data.checkedMap) {
          if (guestTickCount > 0) {
            checkedMap = { ...data.checkedMap, ...checkedMap };
            guestTickCount = 0;
            saveState(false);
          } else {
            checkedMap = data.checkedMap;
            saveState(true);
          }
          render();
        } else {
          guestTickCount = 0;
          pushToCloud();
        }
      } else {
        guestTickCount = 0;
        openCourseYearPickerModal();
        pushToCloud();
      }
    },
    () => {}
  );
}

function initFirebase() {
  if (typeof firebase === 'undefined') return;
  if (!FIREBASE_CONFIG || !FIREBASE_CONFIG.apiKey || !FIREBASE_CONFIG.projectId) return;
  try {
    const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(FIREBASE_CONFIG);
    fbAuth = app.auth();
    fbDb = app.firestore();
    fbDb.collection('courses').onSnapshot(
      (snap) => {
        let changed = false;
        snap.forEach((doc) => {
          const data = doc.data();
          if (data && data.id && data.years) {
            if (!COURSES[data.id]) {
              COURSES[data.id] = {
                id: data.id,
                name: data.name || data.id.toUpperCase(),
                fullName: data.fullName || data.name || data.id.toUpperCase(),
                defaultYear: data.defaultYear || Object.keys(data.years)[0],
                years: data.years,
                isCustom: true,
                hasCustomDoc: true
              };
            } else {
              COURSES[data.id].years = { ...COURSES[data.id].years, ...data.years };
              COURSES[data.id].hasCustomDoc = true;
            }
            changed = true;
          }
        });
        if (changed) {
          updateYearUI();
          render();
        }
      },
      () => {}
    );
    fbAuth.getRedirectResult().catch(() => {});
    fbAuth.onAuthStateChanged((user) => {
      currentUser = user || null;
      updateAuthUI();
      if (currentUser) {
        startCloudListener(currentUser);
      } else if (unsubscribeSnapshot) {
        unsubscribeSnapshot();
        unsubscribeSnapshot = null;
      }
    });
  } catch (e) {
    fbAuth = null;
    fbDb = null;
  }
}

function getStudentStatsForYear(u, yrKey) {
  if (yrKey === 'bca_y1') {
    return {
      pct: u.year1Pct ?? u.overallPct ?? 0,
      done: u.year1Done ?? u.doneCount ?? 0,
      total: u.year1Total ?? u.totalCount ?? 0,
      subjectsObj: u.year1Subjects || u.subjectStats
    };
  }
  if (yrKey === 'bcom_y1') {
    return {
      pct: u.bcomY1Pct ?? u.overallPct ?? 0,
      done: u.bcomY1Done ?? u.doneCount ?? 0,
      total: u.bcomY1Total ?? u.totalCount ?? 0,
      subjectsObj: u.bcomY1Subjects || u.subjectStats
    };
  }
  return {
    pct: u.year2Pct ?? u.overallPct ?? 0,
    done: u.year2Done ?? u.doneCount ?? 0,
    total: u.year2Total ?? u.totalCount ?? 0,
    subjectsObj: u.year2Subjects || u.subjectStats
  };
}

function renderAdminUserCard(u, yrKey, cacheIdx) {
  const name = escapeHtml(u.displayName || 'Student');
  const email = escapeHtml(u.email || '');
  const st = getStudentStatsForYear(u, yrKey);
  const updated = u.updatedAt ? new Date(u.updatedAt).toLocaleString() : 'Never';
  const initial = (u.displayName || u.email || 'S').trim().charAt(0).toUpperCase();
  const avatarHtml = u.photoURL
    ? `<img src="${escapeHtml(u.photoURL)}" class="avatar-img" alt="" />`
    : `<span class="avatar-fallback">${escapeHtml(initial)}</span>`;
  const pills = st.subjectsObj
    ? Object.entries(st.subjectsObj)
        .map(([sName, sPct]) => `<span class="admin-sub-pill">${escapeHtml(sName)}: <strong>${sPct}%</strong></span>`)
        .join('')
    : '';
  return `
    <div class="admin-user-card admin-user-card-clickable" data-admin-view-student="${cacheIdx}">
      <div class="admin-user-top">
        <div style="display:flex;align-items:center;gap:0.65rem;">
          ${avatarHtml}
          <div>
            <div style="font-weight:700;font-size:0.92rem;">${name}</div>
            <div style="font-size:0.75rem;color:#64748b;">${email} • Last active: ${escapeHtml(updated)}</div>
          </div>
        </div>
        <div style="text-align:right;">
          <div style="font-weight:700;font-size:1rem;color:#4f46e5;">${st.pct}%</div>
          <div style="font-size:0.72rem;color:#64748b;">${st.done}/${st.total} topics</div>
        </div>
      </div>
      <div class="progress-track progress-track-sm" style="margin-top:0.5rem;">
        <div class="progress-fill" style="width:${st.pct}%"></div>
      </div>
      ${pills ? `<div class="admin-sub-pills">${pills}</div>` : ''}
      <div style="margin-top:0.45rem;text-align:right;font-size:0.72rem;font-weight:600;color:#4f46e5;">
        Tap to view ticked topics →
      </div>
    </div>
  `;
}

function renderAdminStudentDetail(idx, filter) {
  const container = document.getElementById('admin-year-containers');
  const entry = adminUsersCache[idx];
  if (!entry) return;
  adminDetailState = { idx, filter };
  const u = entry.user;
  const courseId = entry.course;
  const yrKey = entry.yr;
  const studentMap = u.checkedMap || {};
  const cCfg = COURSES[courseId] || COURSES.bca;
  const cfg = cCfg.years[yrKey] || cCfg.years[cCfg.defaultYear];
  const st = getStudentStatsForYear(u, yrKey);
  const name = escapeHtml(u.displayName || 'Student');
  const email = escapeHtml(u.email || '');
  const initial = (u.displayName || u.email || 'S').trim().charAt(0).toUpperCase();
  const avatarHtml = u.photoURL
    ? `<img src="${escapeHtml(u.photoURL)}" class="avatar-img" alt="" />`
    : `<span class="avatar-fallback">${escapeHtml(initial)}</span>`;

  let subjectsHtml = '';
  cfg.subjects.forEach((sub) => {
    if (sub.missingNotice) return;
    let subDone = 0;
    let subTotal = 0;
    let unitsHtml = '';
    sub.units.forEach((unit) => {
      if (unit.missingNotice) return;
      let unitTopicsHtml = '';
      unit.groups.forEach((g, gi) => {
        let groupTopicsHtml = '';
        g.topics.forEach((t, ti) => {
          subTotal++;
          const isTicked = !!studentMap[getTopicId(unit.id, gi, ti)];
          if (isTicked) subDone++;
          if (filter === 'completed' && !isTicked) return;
          if (filter === 'pending' && isTicked) return;
          groupTopicsHtml += `
            <div class="admin-topic-item ${isTicked ? 'admin-topic-done' : 'admin-topic-pending'}">
              <span>${isTicked ? '✅' : '⬜'}</span>
              <span>${escapeHtml(t)}</span>
            </div>
          `;
        });
        if (groupTopicsHtml) {
          unitTopicsHtml += `
            <div style="margin-top:0.35rem;">
              <div style="font-size:0.72rem;font-weight:700;color:#64748b;margin-bottom:0.15rem;">${escapeHtml(g.name)}</div>
              ${groupTopicsHtml}
            </div>
          `;
        }
      });
      if (unitTopicsHtml) {
        unitsHtml += `
          <div class="admin-detail-unit">
            <div style="font-size:0.8rem;font-weight:700;margin-bottom:0.2rem;">${escapeHtml(unit.title)}</div>
            ${unitTopicsHtml}
          </div>
        `;
      }
    });
    const subPct = subTotal ? Math.round((subDone / subTotal) * 100) : 0;
    subjectsHtml += `
      <div class="admin-detail-sub">
        <div class="admin-detail-sub-title">
          <span>${escapeHtml(sub.name)}</span>
          <span style="color:#4f46e5;">${subDone}/${subTotal} (${subPct}%)</span>
        </div>
        ${unitsHtml || '<div class="admin-detail-unit"><span class="unit-sub">No topics in this filter.</span></div>'}
      </div>
    `;
  });

  container.innerHTML = `
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.75rem;">
      <button type="button" id="btn-admin-back" class="btn btn-outline">← Back to Students</button>
      <div class="filter-group">
        ${['all', 'completed', 'pending']
          .map(
            (f) => `<button type="button" data-admin-detail-filter="${f}" class="filter-btn ${filter === f ? 'active' : ''}">${f}</button>`
          )
          .join('')}
      </div>
    </div>
    <div class="admin-detail-head">
      <div style="display:flex;align-items:center;gap:0.65rem;">
        ${avatarHtml}
        <div>
          <div style="font-weight:700;font-size:0.95rem;">${name}</div>
          <div style="font-size:0.75rem;color:#64748b;">${email} • ${escapeHtml(cfg.semLabel)}</div>
        </div>
      </div>
      <div style="text-align:right;">
        <div style="font-weight:700;font-size:1.05rem;color:#4f46e5;">${st.pct}%</div>
        <div style="font-size:0.75rem;color:#64748b;">${st.done}/${st.total} topics done</div>
      </div>
    </div>
    ${subjectsHtml}
  `;
}


function updateAdminModeTabs() {
  const tabsEl = document.getElementById('admin-mode-tabs');
  const descEl = document.querySelector('#admin-modal .modal-desc');
  const allowSyl = canAdminViewAllSyllabus(currentUser);
  const addTabBtn = document.getElementById('btn-admin-add-tab');
  const allowAdd = canAdminAddSyllabus(currentUser);
  if (addTabBtn) addTabBtn.classList.toggle('hidden', !allowAdd);
  if (!allowAdd && adminDashboardMode === 'add') adminDashboardMode = 'students';
  if (!allowSyl) {
    adminDashboardMode = 'students';
    if (tabsEl) tabsEl.classList.add('hidden');
    if (descEl) descEl.textContent = 'Viewing shared student progress.';
  } else {
    if (tabsEl) tabsEl.classList.remove('hidden');
    if (descEl) descEl.textContent = 'Track student progress or browse all listed syllabi.';
  }
  document.querySelectorAll('[data-admin-mode]').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-admin-mode') === adminDashboardMode);
  });
}

function renderAdminAllSyllabus() {
  const container = document.getElementById('admin-year-containers');
  updateAdminModeTabs();
  if (!canAdminViewAllSyllabus(currentUser)) {
    container.innerHTML = '<p class="sync-error">Access denied.</p>';
    return;
  }

  let html = '';
  Object.entries(COURSES).forEach(([cKey, cCfg]) => {
    const yearKeys = Object.keys(cCfg.years);
    const yearsHtml = yearKeys
      .map((yKey) => {
        const yCfg = cCfg.years[yKey];
        const subjectsHtml = yCfg.subjects
          .map((sub) => {
            if (sub.missingNotice) {
              return `
                <div class="admin-detail-sub" style="margin-top:0.5rem;">
                  <div class="admin-detail-sub-title">
                    <span>${escapeHtml(sub.name)} (${escapeHtml(sub.code)})</span>
                    <span class="pill-warn">Pending</span>
                  </div>
                </div>
              `;
            }
            const unitsHtml = sub.units
              .map((u) => {
                if (u.missingNotice) {
                  return `<div class="admin-detail-unit"><strong>${escapeHtml(u.title)}</strong> — <span style="color:#b45309;">Pending</span></div>`;
                }
                const chapsHtml = u.groups
                  .map(
                    (g) => `
                    <div style="margin-top:0.3rem;padding-left:0.5rem;">
                      <div style="font-size:0.75rem;font-weight:700;color:#4f46e5;">${escapeHtml(g.name)} (${g.topics.length} topics)</div>
                      <ul style="margin:0.2rem 0 0.35rem 1.1rem;padding:0;font-size:0.75rem;color:#64748b;">
                        ${g.topics.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}
                      </ul>
                    </div>
                  `
                  )
                  .join('');
                return `
                  <div class="admin-detail-unit">
                    <div style="font-size:0.78rem;font-weight:700;">${escapeHtml(u.title)}</div>
                    ${chapsHtml}
                  </div>
                `;
              })
              .join('');
            return `
              <div class="admin-detail-sub" style="margin-top:0.5rem;">
                <div class="admin-detail-sub-title">
                  <span>${escapeHtml(sub.name)} (${escapeHtml(sub.code)})</span>
                  <span style="font-size:0.75rem;color:#64748b;">${sub.units.length} units</span>
                </div>
                ${unitsHtml}
              </div>
            `;
          })
          .join('');

        return `
          <div class="admin-year-box">
            <button type="button" data-admin-syl-year="${yKey}" class="admin-year-header">
              <div>
                <div style="font-weight:700;font-size:0.92rem;">${escapeHtml(cCfg.name)} ${escapeHtml(yCfg.shortLabel)}</div>
                <div style="font-size:0.75rem;color:#64748b;">${escapeHtml(yCfg.semLabel)} • ${yCfg.subjects.length} subjects</div>
              </div>
              <span style="font-size:0.76rem;font-weight:600;color:#4f46e5;">View Subjects ▾</span>
            </button>
            <div id="admin-syl-box-${yKey}" class="admin-year-body hidden">
              ${subjectsHtml}
            </div>
          </div>
        `;
      })
      .join('');

    html += `
      <div class="admin-course-box">
        <button type="button" data-admin-syl-course="${cKey}" class="admin-course-header">
          <div>
            <div style="font-weight:700;font-size:1rem;">${escapeHtml(cCfg.name)} — ${escapeHtml(cCfg.fullName)}</div>
            <div style="font-size:0.78rem;color:#64748b;margin-top:0.15rem;">${yearKeys.length} ${yearKeys.length === 1 ? 'year' : 'years'} listed</div>
          </div>
          <span style="font-size:0.8rem;font-weight:600;color:#4f46e5;">Open Years ▾</span>
        </button>
        <div id="admin-syl-course-${cKey}" class="admin-course-body hidden">
          ${yearsHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}


function parsePlainTextSyllabus(rawText, defaultSubjectName) {
  const lines = rawText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const units = [];
  let curUnit = null;
  let curGroup = null;
  let uIdx = 0;
  let detectedSubject = '';

  const ensureUnit = (title) => {
    uIdx++;
    curUnit = { id: `u${uIdx}_${Date.now().toString(36).slice(-3)}`, title, groups: [] };
    units.push(curUnit);
    curGroup = null;
  };
  const ensureGroup = (name) => {
    if (!curUnit) ensureUnit('Unit I');
    curGroup = { name, topics: [] };
    curUnit.groups.push(curGroup);
  };

  for (const line of lines) {
    if (/^(suggested\s+readings?|references?|bibliography|recommended\s+books?|text\s+books?)\b/i.test(line)) {
      break;
    }
    if (/^\d{1,3}$/.test(line)) continue;
    if (/^\(?(?:equal\s+to\s+)?\d+\s+lectures?\)?$/i.test(line)) continue;

    if (/^(unit|module)\b/i.test(line)) {
      ensureUnit(line);
    } else if (/^(lesson|chapter|topic group)\b/i.test(line)) {
      ensureGroup(line);
    } else if (!curUnit) {
      if (!/^(department\s+of|university\s+of|faculty\s+of|\()/i.test(line) && !detectedSubject) {
        detectedSubject = line;
      }
    } else {
      const clean = line.replace(/^[-*•\u2022\uf0b7]\s*/, '').replace(/^\[\s*\]\s*/, '').trim();
      if (!clean) continue;
      if (!curGroup) ensureGroup('Topics');
      curGroup.topics.push(clean);
    }
  }

  if (!units.length && detectedSubject) {
    ensureUnit('Unit I');
    ensureGroup('Topics');
    curGroup.topics.push(detectedSubject);
  }
  if (!units.length) return [];

  const finalName = (defaultSubjectName || detectedSubject || '1. New Subject').trim();
  return [
    {
      id: `sub_${Date.now().toString(36)}`,
      shortName: finalName.slice(0, 22),
      name: finalName,
      code: 'CORE',
      category: '4 Credits',
      units
    }
  ];
}

async function parseWithGeminiApi(apiKey, rawText) {
  const prompt = `Extract the syllabus from the following text. Ignore Suggested Readings, References, Bibliography, Glossaries, and Practice Questions.
Return ONLY valid JSON matching this schema:
{
  "courseName": "Detected course name (e.g. BCA, DU B.Com, BBA, or empty string if not mentioned)",
  "yearLabel": "Detected year/semester (e.g. 1st Year (Semester I), or empty string if not mentioned)",
  "subjects": [
    {
      "id": "unique_short_id",
      "shortName": "Short Name (max 20 chars)",
      "name": "1. Full Subject Name",
      "code": "Subject Code or CORE",
      "category": "Credits or Category",
      "units": [
        {
          "id": "unique_unit_id",
          "title": "Unit 1 — Unit Title",
          "groups": [
            {
              "name": "Lesson / Chapter / Topics",
              "topics": ["Subtopic 1", "Subtopic 2"]
            }
          ]
        }
      ]
    }
  ]
}
Text:\n${rawText.slice(0, 120000)}`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${encodeURIComponent(apiKey)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: 'application/json' }
      })
    }
  );
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err.error && err.error.message) || `Gemini API error (${res.status})`);
  }
  const data = await res.json();
  const txt = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
  return JSON.parse(txt);
}

async function extractPdfTextClient(file) {
  if (typeof pdfjsLib === 'undefined') {
    throw new Error('PDF.js failed to load. Check internet connection.');
  }
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  const buf = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
  let fullText = '';
  const maxPages = Math.min(pdf.numPages, 80);
  for (let i = 1; i <= maxPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    let lastY = null;
    let line = '';
    content.items.forEach((it) => {
      const y = it.transform ? Math.round(it.transform[5]) : null;
      if (lastY !== null && y !== null && Math.abs(y - lastY) > 2) {
        if (line.trim()) fullText += line.trim() + '\n';
        line = '';
      }
      line += it.str || '';
      if (it.hasEOL) {
        if (line.trim()) fullText += line.trim() + '\n';
        line = '';
        lastY = null;
      } else {
        lastY = y;
      }
    });
    if (line.trim()) fullText += line.trim() + '\n';
  }
  return fullText;
}

let pendingParsedSubjects = null;
let pendingDetectedMeta = null;

function detectCourseAndYearFromText(rawText) {
  const sample = rawText.slice(0, 2500);
  const coursePatterns = [
    { re: /\b(B\.?\s*Com\.?(?:\s*\(Hons\.?\))?)\b/i, name: 'B.Com' },
    { re: /\b(B\.?\s*C\.?\s*A\.?)\b/i, name: 'BCA' },
    { re: /\b(B\.?\s*B\.?\s*A\.?)\b/i, name: 'BBA' },
    { re: /\b(M\.?\s*C\.?\s*A\.?)\b/i, name: 'MCA' },
    { re: /\b(M\.?\s*B\.?\s*A\.?)\b/i, name: 'MBA' },
    { re: /\b(B\.?\s*Tech\.?)\b/i, name: 'B.Tech' },
    { re: /\b(B\.?\s*Sc\.?)\b/i, name: 'B.Sc' },
    { re: /\b(B\.?\s*A\.?)\b/i, name: 'B.A.' }
  ];
  let courseName = '';
  for (const p of coursePatterns) {
    const m = sample.match(p.re);
    if (m) { courseName = p.name; break; }
  }
  if (/delhi university|university of delhi/i.test(sample) && courseName === 'B.Com') {
    courseName = 'DU B.Com';
  }

  let yearPart = '';
  const yrMatch = sample.match(/\b(1st|2nd|3rd|4th|First|Second|Third|Fourth)\s+Year\b/i);
  if (yrMatch) {
    const map = { first: '1st', second: '2nd', third: '3rd', fourth: '4th' };
    const normYr = map[yrMatch[1].toLowerCase()] || yrMatch[1];
    yearPart = `${normYr} Year`;
  }

  let semPart = '';
  const semMatch = sample.match(/\b(?:Semester|Sem\.?)\s*[-:]?\s*(I{1,3}V?|V?I{0,3}|[1-8])\b/i)
    || sample.match(/\b(1st|2nd|3rd|4th|5th|6th|7th|8th)\s+Semester\b/i);
  if (semMatch) {
    semPart = `Semester ${semMatch[1].toUpperCase()}`;
  }

  let yearLabel = '';
  if (yearPart && semPart) yearLabel = `${yearPart} (${semPart})`;
  else if (yearPart) yearLabel = yearPart;
  else if (semPart) yearLabel = semPart;

  return { courseName, yearLabel };
}


function renderVisualPreviewHtml(subjects) {
  if (!subjects || !subjects.length) return '';
  return subjects
    .map((sub) => {
      const unitsHtml = (sub.units || [])
        .map((u) => {
          const chapsHtml = (u.groups || [])
            .map(
              (g) => `
              <div style="margin-top:0.25rem;padding-left:0.5rem;">
                <div style="font-size:0.76rem;font-weight:700;color:#4f46e5;">${escapeHtml(g.name)} (${(g.topics || []).length})</div>
                <div style="font-size:0.74rem;color:#64748b;">${(g.topics || []).slice(0, 4).map(escapeHtml).join(' • ')}${(g.topics || []).length > 4 ? ' ...' : ''}</div>
              </div>
            `
            )
            .join('');
          return `
            <div style="margin-top:0.35rem;padding-top:0.35rem;border-top:1px dashed #cbd5e1;">
              <div style="font-size:0.8rem;font-weight:700;">${escapeHtml(u.title)}</div>
              ${chapsHtml}
            </div>
          `;
        })
        .join('');
      return `
        <div class="admin-user-card" style="margin-top:0.5rem;">
          <div style="font-weight:700;font-size:0.9rem;">${escapeHtml(sub.name)} <span class="pill-code">${escapeHtml(sub.code || '')}</span></div>
          ${unitsHtml}
        </div>
      `;
    })
    .join('');
}

function renderYearEditorHtml() {
  if (!editingCourseMeta || !Array.isArray(editingSubjectsDraft)) return '';
  const subsHtml = editingSubjectsDraft
    .map((sub, si) => {
      const isOpen = expandedEditSubIdx === si;
      const unitsHtml = isOpen
        ? (sub.units || [])
            .map((u, ui) => {
              const groupsHtml = (u.groups || [])
                .map(
                  (g, gi) => `
                  <div style="margin-top:0.5rem;padding:0.5rem;border:1px solid #cbd5e1;border-radius:0.5rem;">
                    <div style="display:flex;gap:0.4rem;align-items:center;margin-bottom:0.35rem;">
                      <input type="text" class="add-syl-input" data-edit-group-name="${si}:${ui}:${gi}" value="${escapeHtml(g.name || '')}" placeholder="Chapter / Lesson name" />
                      <button type="button" data-del-edit-group="${si}:${ui}:${gi}" class="btn btn-danger-soft" style="padding:0.3rem 0.55rem;">Del Chapter</button>
                    </div>
                    <label class="add-syl-label">Topics (one per line):</label>
                    <textarea class="add-syl-textarea" style="min-height:85px;" data-edit-group-topics="${si}:${ui}:${gi}">${escapeHtml((g.topics || []).join('\n'))}</textarea>
                  </div>
                `
                )
                .join('');
              return `
                <div style="margin-top:0.6rem;padding:0.65rem;border:1px solid #94a3b8;border-radius:0.6rem;">
                  <div style="display:flex;gap:0.4rem;align-items:center;flex-wrap:wrap;">
                    <input type="text" class="add-syl-input" style="flex:1;" data-edit-unit-title="${si}:${ui}" value="${escapeHtml(u.title || '')}" placeholder="Unit title" />
                    <button type="button" data-add-edit-group="${si}:${ui}" class="btn btn-outline" style="padding:0.3rem 0.6rem;">+ Chapter</button>
                    <button type="button" data-del-edit-unit="${si}:${ui}" class="btn btn-danger-soft" style="padding:0.3rem 0.6rem;">Del Unit</button>
                  </div>
                  ${groupsHtml}
                </div>
              `;
            })
            .join('')
        : '';

      return `
        <div class="admin-user-card" style="margin-top:0.55rem;">
          <div style="display:flex;gap:0.45rem;align-items:center;flex-wrap:wrap;">
            <input type="text" class="add-syl-input" style="flex:2;min-width:160px;" data-edit-sub-name="${si}" value="${escapeHtml(sub.name || '')}" placeholder="Subject Name" />
            <input type="text" class="add-syl-input" style="flex:1;min-width:90px;" data-edit-sub-code="${si}" value="${escapeHtml(sub.code || '')}" placeholder="Code" />
            <button type="button" data-toggle-edit-sub="${si}" class="btn btn-outline">${isOpen ? 'Close Units ▲' : `Edit Units (${(sub.units || []).length}) ▼`}</button>
            <button type="button" data-del-edit-sub="${si}" class="btn btn-danger-soft">Delete Subject</button>
          </div>
          ${
            isOpen
              ? `<div style="margin-top:0.5rem;">
                   ${unitsHtml}
                   <button type="button" data-add-edit-unit="${si}" class="btn btn-outline" style="margin-top:0.5rem;">+ Add Unit</button>
                 </div>`
              : ''
          }
        </div>
      `;
    })
    .join('');

  return `
    <div class="add-syl-card">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;">
        <div>
          <div style="font-weight:700;font-size:1rem;">Editing: ${escapeHtml(editingCourseMeta.courseName)} — ${escapeHtml(editingCourseMeta.yearLabel)}</div>
          <div class="unit-sub">Edit or delete any Subject, Unit, Chapter, or Topic below, then click Save Changes.</div>
        </div>
        <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">
          <button type="button" id="btn-cancel-edit-syl" class="btn btn-muted">Cancel</button>
          <button type="button" id="btn-save-edited-year" class="btn btn-primary">Save Changes</button>
        </div>
      </div>
      <div style="margin-top:0.65rem;">
        ${subsHtml || '<p class="unit-sub">No subjects left in this year.</p>'}
      </div>
    </div>
  `;
}

function renderAdminAddSyllabus() {
  const container = document.getElementById('admin-year-containers');
  updateAdminModeTabs();
  if (!canAdminAddSyllabus(currentUser)) {
    container.innerHTML = '<p class="sync-error">Access denied.</p>';
    return;
  }

  if (editingCourseMeta && Array.isArray(editingSubjectsDraft)) {
    container.innerHTML = renderYearEditorHtml();
    return;
  }

  const customCoursesHtml = Object.values(COURSES)
    .map((c) => {
      const yearsRows = Object.values(c.years || {})
        .map(
          (y) => `
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;padding:0.45rem 0;border-top:1px dashed #cbd5e1;">
            <div>
              <span style="font-weight:600;font-size:0.84rem;">${escapeHtml(y.label)}</span>
              <span class="${y.isDraft ? 'pill-warn' : 'pill-cat'}" style="margin-left:0.35rem;font-size:0.7rem;">
                ${y.isDraft ? 'Draft (Only You)' : 'Live (Public)'}
              </span>
              <div class="unit-sub">${(y.subjects || []).length} subjects</div>
            </div>
            <div style="display:flex;gap:0.35rem;flex-wrap:wrap;">
              <button type="button" data-preview-course="${escapeHtml(c.id)}" data-preview-year="${escapeHtml(y.id)}" class="btn btn-outline">Preview</button>
              <button type="button" data-edit-course="${escapeHtml(c.id)}" data-edit-year="${escapeHtml(y.id)}" class="btn btn-outline">Edit Subjects/Units</button>
              ${c.isCustom || !['bca_y1', 'bca_y2', 'bcom_y1'].includes(y.id) ? `<button type="button" data-toggle-publish-course="${escapeHtml(c.id)}" data-toggle-publish-year="${escapeHtml(y.id)}" class="btn ${y.isDraft ? 'btn-primary' : 'btn-muted'}">${y.isDraft ? 'Publish' : 'Hide'}</button>` : ''}
              ${!['bca_y1', 'bca_y2', 'bcom_y1'].includes(y.id) ? `<button type="button" data-delete-custom-year="${escapeHtml(c.id)}" data-year-id="${escapeHtml(y.id)}" class="btn btn-danger-soft">Delete Year</button>` : ''}
            </div>
          </div>
        `
        )
        .join('');
      return `
        <div class="admin-user-card" style="margin-top:0.5rem;">
          <div style="font-weight:700;font-size:0.92rem;margin-bottom:0.35rem;">${escapeHtml(c.fullName || c.name)}</div>
          ${yearsRows}
        </div>
      `;
    })
    .join('');

  const targetOptions = ['<option value="">-- Select Existing Course &amp; Year --</option>'];
  Object.entries(COURSES).forEach(([cId, cObj]) => {
    Object.entries(cObj.years || {}).forEach(([yId, yObj]) => {
      targetOptions.push(`<option value="${escapeHtml(cId)}::${escapeHtml(yId)}">${escapeHtml(cObj.name)} — ${escapeHtml(yObj.label)}</option>`);
    });
  });
  targetOptions.push('<option value="__new__">+ Create New Custom Course / Year</option>');

  const hasDetected = !!(pendingDetectedMeta && (pendingDetectedMeta.courseName || pendingDetectedMeta.yearLabel));

  container.innerHTML = `
    <div class="add-syl-card">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;">
        <div style="font-weight:700;font-size:0.95rem;">Step 1: Upload Syllabus PDF</div>
        <button type="button" id="btn-toggle-key-box" class="btn btn-muted" style="padding:0.22rem 0.55rem;font-size:0.72rem;">
          ${cachedAdminGeminiKey ? '🔑 AI Key Saved' : '🔑 Set Gemini Key'}
        </button>
      </div>
      <div id="admin-key-box" class="hidden" style="margin-top:0.55rem;padding:0.6rem;border:1px solid #cbd5e1;border-radius:0.5rem;">
        <label class="add-syl-label">Gemini API Key (saved privately in your Admin account, never shown publicly)</label>
        <div style="display:flex;gap:0.4rem;">
          <input id="add-gemini-key" type="password" class="add-syl-input" value="${escapeHtml(cachedAdminGeminiKey)}" placeholder="Paste key once from aistudio.google.com" />
          <button type="button" id="btn-save-gemini-key" class="btn btn-primary">Save</button>
        </div>
      </div>
      <div style="margin-top:0.55rem;">
        <label class="add-syl-label">Subject Name (optional — auto-detected from PDF if blank)</label>
        <input id="add-subject-name" class="add-syl-input" placeholder="e.g. Environmental Studies" />
      </div>
      <div style="margin-top:0.75rem;display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center;">
        <input id="add-pdf-file" type="file" accept="application/pdf" style="font-size:0.8rem;" />
        <button type="button" id="btn-read-pdf-free" class="btn btn-outline"
          title="Instant local scan — best for clean, well-defined syllabus PDFs (less accurate on messy PDFs)">
          Auto-Detect (Free)
        </button>
        <button type="button" id="btn-read-pdf-ai" class="btn btn-primary"
          title="Smart Gemini AI scan — best for messy, complex, or book-style PDFs (removes references &amp; extracts clean units/topics)">
          Gemini AI Detect
        </button>
      </div>
      <div id="add-scan-progress" class="scan-progress-wrap hidden">
        <div id="add-scan-progress-text" class="scan-progress-text">Starting...</div>
        <div class="scan-progress-track">
          <div id="add-scan-progress-fill" class="scan-progress-fill" style="width: 15%;"></div>
        </div>
      </div>
      <div id="add-parse-status" class="unit-sub" style="margin-top:0.5rem;"></div>
    </div>

    <div id="add-preview-wrap" class="add-syl-card ${pendingParsedSubjects ? '' : 'hidden'}">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
        <div style="font-weight:700;font-size:0.95rem;">Step 2: Confirm Course &amp; Year</div>
        <button type="button" id="btn-cancel-preview" class="btn btn-muted" style="padding:0.25rem 0.6rem;font-size:0.75rem;">✕ Cancel / Clear</button>
      </div>
      <div id="add-detected-box" class="sem-notice-banner ${hasDetected ? '' : 'hidden'}" style="margin-top:0;margin-bottom:0.65rem;flex-direction:column;align-items:flex-start;gap:0.35rem;">
        <div><strong>PDF me ye mila:</strong> Course: <strong>${escapeHtml(pendingDetectedMeta?.courseName || 'Not found')}</strong> &bull; Year/Sem: <strong>${escapeHtml(pendingDetectedMeta?.yearLabel || 'Not found')}</strong></div>
        <label style="display:flex;align-items:center;gap:0.4rem;font-size:0.82rem;cursor:pointer;">
          <input type="checkbox" id="chk-use-detected" ${hasDetected ? 'checked' : ''} />
          <span>Yahi detected Course &amp; Year lagao (uncheck karke niche custom/existing choose kar sakte ho)</span>
        </label>
      </div>

      <div id="add-manual-target-wrap" class="${hasDetected ? 'hidden' : ''}" style="margin-bottom:0.75rem;">
        <label class="add-syl-label">Select Existing Course &amp; Year (or Create Custom):</label>
        <select id="add-target-select" class="add-syl-input">
          ${targetOptions.join('')}
        </select>
        <div id="add-new-course-fields" class="add-syl-grid hidden" style="margin-top:0.55rem;">
          <div>
            <label class="add-syl-label">Custom Course Name</label>
            <input id="add-course-name" class="add-syl-input" value="${escapeHtml(pendingDetectedMeta?.courseName || '')}" placeholder="e.g. BBA" />
          </div>
          <div>
            <label class="add-syl-label">Custom Year &amp; Semester</label>
            <input id="add-year-label" class="add-syl-input" value="${escapeHtml(pendingDetectedMeta?.yearLabel || '')}" placeholder="e.g. 1st Year (Semester I)" />
          </div>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;padding-top:0.5rem;border-top:1px solid #cbd5e1;">
        <div style="font-weight:700;font-size:0.95rem;">Step 3: Save Draft or Publish</div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          <button type="button" id="btn-save-draft-syllabus" class="btn btn-outline">Save Draft &amp; Preview on Site</button>
          <button type="button" id="btn-save-custom-syllabus" class="btn btn-primary">Publish to Everyone</button>
        </div>
      </div>
      <div id="add-visual-preview" style="margin-top:0.5rem;">
        ${renderVisualPreviewHtml(pendingParsedSubjects)}
      </div>
    </div>

    <div class="add-syl-card">
      <div style="font-weight:700;font-size:0.95rem;margin-bottom:0.4rem;">Manage Courses &amp; Edit Any Subject/Unit</div>
      ${customCoursesHtml}
    </div>
  `;

  const chkDet = document.getElementById('chk-use-detected');
  const manWrap = document.getElementById('add-manual-target-wrap');
  if (chkDet && manWrap) {
    chkDet.addEventListener('change', () => {
      manWrap.classList.toggle('hidden', chkDet.checked);
    });
  }
  const sel = document.getElementById('add-target-select');
  const newFields = document.getElementById('add-new-course-fields');
  if (sel && newFields) {
    sel.addEventListener('change', () => {
      newFields.classList.toggle('hidden', sel.value !== '__new__');
    });
  }
}

function loadAdminDashboard() {
  updateAdminModeTabs();
  if (adminDashboardMode === 'syllabus') {
    renderAdminAllSyllabus();
    return;
  }
  if (adminDashboardMode === 'add') {
    renderAdminAddSyllabus();
    return;
  }
  const container = document.getElementById('admin-year-containers');
  if (!isAdminUser(currentUser) || !fbDb) {
    container.innerHTML = '<p class="sync-error">Access denied.</p>';
    return;
  }
  container.innerHTML = '<p class="unit-sub">Loading student progress...</p>';
  const scope = getAdminScope(currentUser);
  const queryPromise =
    scope === '*'
      ? fbDb.collection('users').orderBy('updatedAt', 'desc').get()
      : fbDb.collection('users').where('email', 'in', scope).get();
  queryPromise
    .then((snap) => {
      adminUsersCache = [];
      adminDetailState = null;
      const grouped = {};
      Object.entries(COURSES).forEach(([ck, cObj]) => {
        grouped[ck] = {};
        Object.keys(cObj.years).forEach((yk) => { grouped[ck][yk] = []; });
      });

      snap.forEach((doc) => {
        const d = doc.data();
        const norm = normalizeCourseYear(d.selectedCourse, d.selectedYear);
        const idx = adminUsersCache.length;
        adminUsersCache.push({ user: d, course: norm.course, yr: norm.year });
        if (grouped[norm.course] && grouped[norm.course][norm.year]) {
          grouped[norm.course][norm.year].push({ user: d, idx });
        }
      });

      const buildYearBox = (yrKey, title, subtitle, list) => {
        const avgPct = list.length
          ? Math.round(list.reduce((acc, item) => acc + getStudentStatsForYear(item.user, yrKey).pct, 0) / list.length)
          : 0;
        return `
          <div class="admin-year-box">
            <button type="button" data-admin-toggle="${yrKey}" class="admin-year-header">
              <div>
                <div style="font-weight:700;font-size:0.92rem;">${escapeHtml(title)}</div>
                <div style="font-size:0.75rem;color:#64748b;">${escapeHtml(subtitle)} • <strong>${list.length}</strong> students • Avg: <strong>${avgPct}%</strong></div>
              </div>
              <span style="font-size:0.76rem;font-weight:600;color:#4f46e5;">View Students ▾</span>
            </button>
            <div id="admin-box-${yrKey}" class="admin-year-body hidden">
              ${
                list.length
                  ? list.map((item) => renderAdminUserCard(item.user, yrKey, item.idx)).join('')
                  : '<p class="unit-sub">No students have signed in for this year yet.</p>'
              }
            </div>
          </div>
        `;
      };

      const buildCourseBox = (courseKey) => {
        const cCfg = COURSES[courseKey];
        const yearKeys = Object.keys(cCfg.years);
        const allCourseStudents = yearKeys.flatMap((yk) => grouped[courseKey][yk] || []);
        const courseAvg = allCourseStudents.length
          ? Math.round(
              allCourseStudents.reduce((acc, item) => {
                const yr = adminUsersCache[item.idx].yr;
                return acc + getStudentStatsForYear(item.user, yr).pct;
              }, 0) / allCourseStudents.length
            )
          : 0;
        const yearsHtml = yearKeys
          .map((yk) => {
            const yCfg = cCfg.years[yk];
            return buildYearBox(yk, `${cCfg.name} ${yCfg.shortLabel}`, yCfg.semLabel, grouped[courseKey][yk] || []);
          })
          .join('');
        return `
          <div class="admin-course-box">
            <button type="button" data-admin-course-toggle="${courseKey}" class="admin-course-header">
              <div>
                <div style="font-weight:700;font-size:1rem;">${escapeHtml(cCfg.name)} — ${escapeHtml(cCfg.fullName)}</div>
                <div style="font-size:0.78rem;color:#64748b;margin-top:0.15rem;"><strong>${allCourseStudents.length}</strong> students • Overall Avg: <strong>${courseAvg}%</strong></div>
              </div>
              <span style="font-size:0.8rem;font-weight:600;color:#4f46e5;">Open Years ▾</span>
            </button>
            <div id="admin-course-box-${courseKey}" class="admin-course-body hidden">
              ${yearsHtml}
            </div>
          </div>
        `;
      };

      if (scope !== '*') {
        container.innerHTML = adminUsersCache.length
          ? adminUsersCache.map((entry, idx) => renderAdminUserCard(entry.user, entry.yr, idx)).join('')
          : '<p class="unit-sub">No progress data found yet.</p>';
        return;
      }
      container.innerHTML = Object.keys(COURSES).map((ck) => { if (!grouped[ck]) grouped[ck] = {}; return buildCourseBox(ck); }).join('');
    })
    .catch((err) => {
      container.innerHTML = `<p class="sync-error">Could not load users: ${escapeHtml(err.message || 'Permission error')}</p>`;
    });
}

function getTopicId(unitId, groupIdx, topicIdx) {
  return `${unitId}__g${groupIdx}__t${topicIdx}`;
}

function getChapterId(unitId, groupIdx) {
  return `${unitId}__g${groupIdx}`;
}

function getChapterStats(unitId, groupIdx, group) {
  let total = 0;
  let done = 0;
  group.topics.forEach((_, ti) => {
    total++;
    if (checkedMap[getTopicId(unitId, groupIdx, ti)]) done++;
  });
  return { total, done, left: total - done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function getUnitStats(unit) {
  let total = 0;
  let done = 0;
  unit.groups.forEach((g, gi) => {
    g.topics.forEach((_, ti) => {
      total++;
      if (checkedMap[getTopicId(unit.id, gi, ti)]) done++;
    });
  });
  return { total, done, left: total - done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function getSubjectStats(subject) {
  let total = 0;
  let done = 0;
  subject.units.forEach((u) => {
    const s = getUnitStats(u);
    total += s.total;
    done += s.done;
  });
  return { total, done, left: total - done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function getOverallStats() {
  const subjects = getCurrentSubjects();
  let total = 0;
  let done = 0;
  subjects.forEach((sub) => {
    const s = getSubjectStats(sub);
    total += s.total;
    done += s.done;
  });
  return { total, done, left: total - done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function openModal(title, desc, onConfirm) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-desc').textContent = desc;
  pendingModalAction = onConfirm;
  document.getElementById('confirm-modal').classList.add('open');
}

function triggerGoogleSignIn() {
  if (!fbAuth || typeof firebase === 'undefined') {
    showToast('Sign-in requires internet connection');
    return;
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  fbAuth
    .signInWithPopup(provider)
    .then(() => {
      document.getElementById('login-prompt-modal').classList.remove('open');
      showToast('Signed in with Google!');
    })
    .catch((err) => {
      if (err && (err.code === 'auth/popup-blocked' || err.code === 'auth/operation-not-supported-in-this-environment')) {
        fbAuth.signInWithRedirect(provider).catch(() => showToast('Could not start Google Sign-In'));
      } else {
        showToast(err.message || 'Google Sign-In failed');
      }
    });
}

function openLoginPromptModal() {
  const descEl = document.getElementById('login-prompt-desc');
  descEl.textContent =
    'Sign in with your Google account to save your progress and access it anywhere — on your laptop, mobile, or tablet. Without signing in, your ticks will reset when you close or reopen the site.';
  document.getElementById('login-prompt-modal').classList.add('open');
}

function closeModal() {
  document.getElementById('confirm-modal').classList.remove('open');
  pendingModalAction = null;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderOverall() {
  const stats = getOverallStats();
  document.getElementById('overall-percent').textContent = `${stats.pct}%`;
  document.getElementById('overall-done').textContent = stats.done;
  document.getElementById('overall-left').textContent = stats.left;
  document.getElementById('overall-total').textContent = stats.total;
  document.getElementById('overall-bar').style.width = `${stats.pct}%`;
}

function renderTabs() {
  const container = document.getElementById('subject-tabs');
  const subjects = getCurrentSubjects();
  let html = `
    <button type="button" data-tab="overview"
      class="tab-btn ${activeTab === 'overview' ? 'active-overview' : ''}">
      All Subjects
    </button>
  `;

  subjects.forEach((sub) => {
    const s = getSubjectStats(sub);
    const isActive = activeTab === sub.id;
    const badge = sub.missingNotice ? 'N/A' : `${s.pct}%`;
    html += `
      <button type="button" data-tab="${sub.id}"
        class="tab-btn ${isActive ? 'active-subject' : ''}">
        <span>${escapeHtml(sub.shortName)}</span>
        <span class="tab-badge">${badge}</span>
      </button>
    `;
  });

  container.innerHTML = html;
}

function renderOverview() {
  const subjects = getCurrentSubjects();
  const cfg = getCurrentYearConfig();
  let cards = '';
  subjects.forEach((sub) => {
    const s = getSubjectStats(sub);
    const unitCount = sub.units.filter((u) => !u.missingNotice).length;
    cards += `
      <div class="card sub-card">
        <div>
          <div class="sub-card-top">
            <span class="pill-code">${escapeHtml(sub.code)} • ${escapeHtml(sub.category)}</span>
            ${
              sub.missingNotice
                ? '<span class="pill-warn">Syllabus Pending</span>'
                : `<span class="sub-pct">${s.pct}%</span>`
            }
          </div>
          <h2 class="sub-title">${escapeHtml(sub.name)}</h2>
          ${
            sub.missingNotice
              ? `<p class="sub-meta" style="color:#b45309;margin-top:0.4rem;">${escapeHtml(sub.missingNotice)}</p>`
              : `
                <p class="sub-meta">${unitCount} units • ${s.done} of ${s.total} topics done (${s.left} left)</p>
                <div class="progress-track progress-track-sm">
                  <div class="progress-fill" style="width: ${s.pct}%"></div>
                </div>
              `
          }
        </div>
        <div class="sub-card-footer">
          <button type="button" data-open-subject="${sub.id}" class="link-btn">
            Open Checklist →
          </button>
        </div>
      </div>
    `;
  });

  const sem2Banner = cfg.sem2ComingSoon
    ? `
      <div class="sem-notice-banner">
        <span><strong>Semester II:</strong> 2nd Semester syllabus will go live once the semester begins in college.</span>
      </div>
    `
    : '';

  return `<div class="overview-grid">${cards}</div>${sem2Banner}`;
}

function renderSubjectView(sub) {
  const stats = getSubjectStats(sub);
  const allUnitsCollapsed = sub.units.length > 0 && sub.units.filter((u) => !u.missingNotice).every((u) => !!collapsedUnits[u.id]);

  let headerHtml = `
    <section class="card subject-header-card">
      <div class="subject-header-top">
        <div>
          <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
            <span class="pill-code">${escapeHtml(sub.code)}</span>
            <span class="pill-cat">${escapeHtml(sub.category)}</span>
          </div>
          <h2 class="subject-h2">${escapeHtml(sub.name)}</h2>
        </div>
        ${
          sub.missingNotice
            ? ''
            : `
          <div>
            <button type="button" data-reset-subject="${sub.id}" class="btn btn-danger-soft">
              Reset Subject
            </button>
          </div>
        `
        }
      </div>
  `;

  if (sub.missingNotice) {
    headerHtml += `
      <div class="warn-box">
        <strong>Note:</strong> ${escapeHtml(sub.missingNotice)}
      </div>
    </section>`;
    return headerHtml;
  }

  headerHtml += `
    <div style="margin-top:1rem;">
      <div style="display:flex;justify-content:space-between;font-size:0.8rem;margin-bottom:0.4rem;">
        <span style="font-weight:600;color:#4f46e5;">${stats.pct}% completed</span>
        <span style="color:#475569;"><strong>${stats.done}</strong> / ${stats.total} done • <strong>${stats.left}</strong> remaining</span>
      </div>
      <div class="progress-track progress-track-sm">
        <div class="progress-fill" style="width: ${stats.pct}%"></div>
      </div>
    </div>

    <div class="controls-bar">
      <div class="filter-group">
        ${['all', 'pending', 'completed']
          .map(
            (m) => `
          <button type="button" data-filter="${m}" class="filter-btn ${filterMode === m ? 'active' : ''}">
            ${m}
          </button>
        `
          )
          .join('')}
      </div>
      <div class="search-wrap">
        <input id="topic-search" type="search" value="${escapeHtml(searchQuery)}"
          placeholder="Search chapter or topic..." class="search-input" />
        <button type="button" id="btn-toggle-collapse" class="btn btn-outline">
          ${allUnitsCollapsed ? 'Expand All' : 'Collapse All'}
        </button>
      </div>
    </div>
  </section>
  `;

  const query = searchQuery.trim().toLowerCase();
  const forceOpenForFilter = query !== '' || filterMode !== 'all';
  let unitsHtml = '';

  sub.units.forEach((unit) => {
    if (unit.missingNotice) {
      unitsHtml += `
        <div class="card unit-card" style="border-color:#fde68a;padding:1rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.25rem;">
            <h3 class="unit-title">${escapeHtml(unit.title)}</h3>
            <span class="pill-warn">Syllabus Pending</span>
          </div>
          <p class="unit-sub" style="color:#b45309;">${escapeHtml(unit.missingNotice)}</p>
        </div>
      `;
      return;
    }

    const uStats = getUnitStats(unit);
    const isUnitOpen = forceOpenForFilter || !collapsedUnits[unit.id];
    const allUnitDone = uStats.total > 0 && uStats.done === uStats.total;

    let chaptersHtml = '';
    let visibleTopicCount = 0;

    unit.groups.forEach((group, gi) => {
      const chapId = getChapterId(unit.id, gi);
      const cStats = getChapterStats(unit.id, gi, group);
      const isChapOpen = forceOpenForFilter || !collapsedChapters[chapId];
      const allChapDone = cStats.total > 0 && cStats.done === cStats.total;

      let topicsHtml = '';
      group.topics.forEach((topic, ti) => {
        const tid = getTopicId(unit.id, gi, ti);
        const isChecked = !!checkedMap[tid];

        if (filterMode === 'pending' && isChecked) return;
        if (filterMode === 'completed' && !isChecked) return;
        if (query && !topic.toLowerCase().includes(query) && !group.name.toLowerCase().includes(query)) return;

        visibleTopicCount++;
        topicsHtml += `
          <label class="topic-row">
            <input type="checkbox" data-topic-id="${tid}" ${isChecked ? 'checked' : ''} />
            <span>${escapeHtml(topic)}</span>
          </label>
        `;
      });

      if (topicsHtml) {
        chaptersHtml += `
          <div class="chapter-card">
            <div class="chapter-header ${isChapOpen ? '' : 'collapsed'}">
              <button type="button" data-toggle-chapter="${chapId}" class="chapter-toggle">
                <span class="chapter-arrow ${isChapOpen ? 'open' : ''}">▶</span>
                <div>
                  <div class="chapter-title">${escapeHtml(group.name)}</div>
                  <div class="chapter-sub">${cStats.done}/${cStats.total} done • ${cStats.left} left (${cStats.pct}%)</div>
                </div>
              </button>
              <div class="chapter-actions">
                <div class="chapter-mini-bar">
                  <div class="progress-fill" style="width: ${cStats.pct}%"></div>
                </div>
                <button type="button" data-mark-chapter="${chapId}" data-mark-val="${allChapDone ? '0' : '1'}"
                  class="btn-chapter-done ${allChapDone ? 'done' : ''}">
                  ${allChapDone ? '✓ Done' : 'Mark Done'}
                </button>
              </div>
            </div>
            <div class="chapter-body ${isChapOpen ? '' : 'hidden'}">
              ${topicsHtml}
            </div>
          </div>
        `;
      }
    });

    if (forceOpenForFilter && visibleTopicCount === 0) {
      return;
    }

    unitsHtml += `
      <div class="card unit-card">
        <div class="unit-header ${isUnitOpen ? '' : 'collapsed'}">
          <button type="button" data-toggle-unit="${unit.id}" class="unit-toggle">
            <span class="unit-arrow ${isUnitOpen ? 'open' : ''}">▶</span>
            <div>
              <h3 class="unit-title">${escapeHtml(unit.title)}</h3>
              <p class="unit-sub">${unit.groups.length} ${unit.groups.length === 1 ? 'chapter' : 'chapters'} • ${uStats.done}/${uStats.total} done • ${uStats.left} left (${uStats.pct}%)</p>
            </div>
          </button>
          <div class="unit-actions">
            <div class="unit-mini-bar">
              <div class="progress-fill progress-fill-green" style="width: ${uStats.pct}%"></div>
            </div>
            <button type="button" data-mark-unit="${unit.id}" data-mark-val="${allUnitDone ? '0' : '1'}"
              class="btn-unit-done ${allUnitDone ? 'done' : ''}">
              ${allUnitDone ? '✓ Completed' : 'Mark Unit Done'}
            </button>
          </div>
        </div>
        <div class="unit-body ${isUnitOpen ? '' : 'hidden'}">
          ${chaptersHtml || '<p class="unit-sub" style="padding:0.5rem;">No matching topics.</p>'}
        </div>
      </div>
    `;
  });

  if (!unitsHtml) {
    unitsHtml = `
      <div class="card" style="padding:2rem;text-align:center;">
        <p class="unit-sub">No topics match your current filter or search.</p>
      </div>
    `;
  }

  return headerHtml + unitsHtml;
}

function render() {
  renderOverall();
  renderTabs();
  const main = document.getElementById('main-content');
  const subjects = getCurrentSubjects();
  if (activeTab === 'overview') {
    main.innerHTML = renderOverview();
  } else {
    const sub = subjects.find((s) => s.id === activeTab);
    main.innerHTML = sub ? renderSubjectView(sub) : renderOverview();
  }

  const searchEl = document.getElementById('topic-search');
  if (searchEl) {
    searchEl.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      const pos = e.target.selectionStart;
      render();
      const newSearch = document.getElementById('topic-search');
      if (newSearch) {
        newSearch.focus();
        newSearch.setSelectionRange(pos, pos);
      }
    });
  }
}

// Header Course & Year Selector Events
document.getElementById('course-bar').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-select-course]');
  if (!btn) return;
  const cId = btn.getAttribute('data-select-course');
  if (!COURSES[cId]) return;
  setCourseAndYear(cId, COURSES[cId].defaultYear, true);
});

document.getElementById('year-bar').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-select-year]');
  if (!btn) return;
  setCourseAndYear(selectedCourse, btn.getAttribute('data-select-year'), true);
});

// Modal Course & Year Picker Events
document.getElementById('modal-course-bar').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-modal-course]');
  if (!btn) return;
  modalCourse = btn.getAttribute('data-modal-course');
  renderModalYearChoices();
});

document.getElementById('modal-year-choices').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-pick-year]');
  if (!btn) return;
  const cId = btn.getAttribute('data-pick-course');
  const yr = btn.getAttribute('data-pick-year');
  document.getElementById('year-picker-modal').classList.remove('open');
  setCourseAndYear(cId, yr, true);
  const cCfg = COURSES[cId];
  const yCfg = cCfg && cCfg.years[yr];
  if (yCfg) showToast(`${yCfg.semLabel} selected!`);
});

document.getElementById('year-picker-close').addEventListener('click', () => {
  document.getElementById('year-picker-modal').classList.remove('open');
});

// Tab & Content Events
document.getElementById('subject-tabs').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-tab]');
  if (!btn) return;
  activeTab = btn.getAttribute('data-tab');
  filterMode = 'all';
  searchQuery = '';
  render();
});

document.getElementById('main-content').addEventListener('click', (e) => {
  const openSub = e.target.closest('[data-open-subject]');
  if (openSub) {
    activeTab = openSub.getAttribute('data-open-subject');
    filterMode = 'all';
    searchQuery = '';
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const filterBtn = e.target.closest('[data-filter]');
  if (filterBtn) {
    filterMode = filterBtn.getAttribute('data-filter');
    render();
    return;
  }

  const toggleUnit = e.target.closest('[data-toggle-unit]');
  if (toggleUnit) {
    const uid = toggleUnit.getAttribute('data-toggle-unit');
    if (collapsedUnits[uid]) delete collapsedUnits[uid];
    else collapsedUnits[uid] = true;
    saveCollapseState();
    render();
    return;
  }

  const toggleChapter = e.target.closest('[data-toggle-chapter]');
  if (toggleChapter) {
    const cid = toggleChapter.getAttribute('data-toggle-chapter');
    if (collapsedChapters[cid]) delete collapsedChapters[cid];
    else collapsedChapters[cid] = true;
    saveCollapseState();
    render();
    return;
  }

  const markChapter = e.target.closest('[data-mark-chapter]');
  if (markChapter) {
    const cid = markChapter.getAttribute('data-mark-chapter');
    const val = markChapter.getAttribute('data-mark-val') === '1';
    const [uid, gPart] = cid.split('__g');
    const gi = parseInt(gPart, 10);
    const sub = getCurrentSubjects().find((s) => s.id === activeTab);
    const unit = sub && sub.units.find((u) => u.id === uid);
    const group = unit && unit.groups[gi];
    if (group) {
      group.topics.forEach((_, ti) => {
        const tid = getTopicId(unit.id, gi, ti);
        if (val) checkedMap[tid] = true;
        else delete checkedMap[tid];
      });
      saveState();
      render();
      showToast(val ? `${group.name} marked complete` : `${group.name} unchecked`);
      if (!currentUser && val && !promptDismissedThisSession) {
        guestTickCount += 3;
        openLoginPromptModal();
      }
    }
    return;
  }

  const markUnit = e.target.closest('[data-mark-unit]');
  if (markUnit) {
    const uid = markUnit.getAttribute('data-mark-unit');
    const val = markUnit.getAttribute('data-mark-val') === '1';
    const sub = getCurrentSubjects().find((s) => s.id === activeTab);
    const unit = sub && sub.units.find((u) => u.id === uid);
    if (unit) {
      unit.groups.forEach((g, gi) => {
        g.topics.forEach((_, ti) => {
          const tid = getTopicId(unit.id, gi, ti);
          if (val) checkedMap[tid] = true;
          else delete checkedMap[tid];
        });
      });
      saveState();
      render();
      showToast(val ? `${unit.title} marked complete` : `${unit.title} unchecked`);
      if (!currentUser && val && !promptDismissedThisSession) {
        guestTickCount += 3;
        openLoginPromptModal();
      }
    }
    return;
  }

  const resetSub = e.target.closest('[data-reset-subject]');
  if (resetSub) {
    const sid = resetSub.getAttribute('data-reset-subject');
    const sub = getCurrentSubjects().find((s) => s.id === sid);
    if (!sub) return;
    openModal(
      `Reset ${sub.shortName}?`,
      `This will uncheck all completed topics in ${sub.name}.`,
      () => {
        sub.units.forEach((u) => {
          u.groups.forEach((g, gi) => {
            g.topics.forEach((_, ti) => {
              delete checkedMap[getTopicId(u.id, gi, ti)];
            });
          });
        });
        saveState();
        render();
        showToast(`${sub.shortName} progress reset`);
      }
    );
    return;
  }

  if (e.target.closest('#btn-toggle-collapse')) {
    const sub = getCurrentSubjects().find((s) => s.id === activeTab);
    if (sub) {
      const validUnits = sub.units.filter((u) => !u.missingNotice);
      const allCollapsed = validUnits.every((u) => !!collapsedUnits[u.id]);
      validUnits.forEach((u) => {
        if (allCollapsed) {
          delete collapsedUnits[u.id];
          u.groups.forEach((_, gi) => {
            delete collapsedChapters[getChapterId(u.id, gi)];
          });
        } else {
          collapsedUnits[u.id] = true;
          u.groups.forEach((_, gi) => {
            collapsedChapters[getChapterId(u.id, gi)] = true;
          });
        }
      });
      saveCollapseState();
      render();
    }
  }
});

document.getElementById('main-content').addEventListener('change', (e) => {
  const cb = e.target.closest('input[type="checkbox"][data-topic-id]');
  if (!cb) return;
  const tid = cb.getAttribute('data-topic-id');
  if (cb.checked) {
    checkedMap[tid] = true;
    if (!currentUser) {
      guestTickCount++;
      if (guestTickCount >= 3 && !promptDismissedThisSession) {
        openLoginPromptModal();
      }
    }
  } else {
    delete checkedMap[tid];
  }
  saveState();
  render();
});

document.getElementById('btn-reset-all').addEventListener('click', () => {
  const cfg = getCurrentYearConfig();
  openModal(
    `Reset ${cfg.semLabel} Progress?`,
    `This will uncheck every topic in ${cfg.semLabel}.`,
    () => {
      cfg.subjects.forEach((sub) => {
        sub.units.forEach((u) => {
          u.groups.forEach((g, gi) => {
            g.topics.forEach((_, ti) => {
              delete checkedMap[getTopicId(u.id, gi, ti)];
            });
          });
        });
      });
      saveState();
      render();
      showToast(`${cfg.semLabel} progress reset`);
    }
  );
});

document.getElementById('modal-cancel').addEventListener('click', closeModal);
document.getElementById('modal-confirm').addEventListener('click', () => {
  if (typeof pendingModalAction === 'function') {
    pendingModalAction();
  }
  closeModal();
});
document.getElementById('confirm-modal').addEventListener('click', (e) => {
  if (e.target.id === 'confirm-modal') closeModal();
});

// Google Sign-In & Prompt Modal Events
document.getElementById('btn-google-login').addEventListener('click', triggerGoogleSignIn);
document.getElementById('btn-prompt-google-login').addEventListener('click', triggerGoogleSignIn);

function closeLoginPrompt() {
  promptDismissedThisSession = true;
  document.getElementById('login-prompt-modal').classList.remove('open');
}
document.getElementById('btn-prompt-later').addEventListener('click', closeLoginPrompt);
document.getElementById('login-prompt-close').addEventListener('click', closeLoginPrompt);
document.getElementById('login-prompt-modal').addEventListener('click', (e) => {
  if (e.target.id === 'login-prompt-modal') closeLoginPrompt();
});

document.getElementById('btn-user-pill').addEventListener('click', () => {
  document.getElementById('account-modal').classList.add('open');
});

document.getElementById('account-modal-close').addEventListener('click', () => {
  document.getElementById('account-modal').classList.remove('open');
});

document.getElementById('account-modal').addEventListener('click', (e) => {
  if (e.target.id === 'account-modal') {
    document.getElementById('account-modal').classList.remove('open');
  }
});

document.getElementById('btn-change-year').addEventListener('click', () => {
  document.getElementById('account-modal').classList.remove('open');
  openCourseYearPickerModal();
});

document.getElementById('btn-sync-now').addEventListener('click', () => {
  pushToCloud();
  showToast('Synced to cloud');
});

document.getElementById('btn-sync-signout').addEventListener('click', () => {
  if (fbAuth) {
    fbAuth.signOut().then(() => {
      document.getElementById('account-modal').classList.remove('open');
      showToast('Logged out');
    });
  }
});

// Admin Dashboard Events
document.getElementById('btn-admin-panel').addEventListener('click', () => {
  adminDashboardMode = 'students';
  document.getElementById('admin-modal').classList.add('open');
  loadAdminDashboard();
});

document.getElementById('admin-mode-tabs').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-admin-mode]');
  if (!btn) return;
  adminDashboardMode = btn.getAttribute('data-admin-mode');
  loadAdminDashboard();
});

document.getElementById('btn-admin-refresh').addEventListener('click', () => {
  loadAdminDashboard();
});

document.getElementById('admin-modal-close').addEventListener('click', () => {
  document.getElementById('admin-modal').classList.remove('open');
});

document.getElementById('admin-modal').addEventListener('click', (e) => {
  if (e.target.id === 'admin-modal') {
    document.getElementById('admin-modal').classList.remove('open');
  }
});

document.getElementById('admin-year-containers').addEventListener('click', (e) => {
  const sylCourseToggle = e.target.closest('[data-admin-syl-course]');
  if (sylCourseToggle) {
    const cKey = sylCourseToggle.getAttribute('data-admin-syl-course');
    const body = document.getElementById(`admin-syl-course-${cKey}`);
    if (body) body.classList.toggle('hidden');
    return;
  }

  const sylYearToggle = e.target.closest('[data-admin-syl-year]');
  if (sylYearToggle) {
    const yKey = sylYearToggle.getAttribute('data-admin-syl-year');
    const body = document.getElementById(`admin-syl-box-${yKey}`);
    if (body) body.classList.toggle('hidden');
    return;
  }

  const courseToggle = e.target.closest('[data-admin-course-toggle]');
  if (courseToggle) {
    const cKey = courseToggle.getAttribute('data-admin-course-toggle');
    const body = document.getElementById(`admin-course-box-${cKey}`);
    if (body) body.classList.toggle('hidden');
    return;
  }

  const toggleBtn = e.target.closest('[data-admin-toggle]');
  if (toggleBtn) {
    const yrKey = toggleBtn.getAttribute('data-admin-toggle');
    const body = document.getElementById(`admin-box-${yrKey}`);
    if (body) body.classList.toggle('hidden');
    return;
  }

  const viewStudent = e.target.closest('[data-admin-view-student]');
  if (viewStudent) {
    const idx = parseInt(viewStudent.getAttribute('data-admin-view-student'), 10);
    renderAdminStudentDetail(idx, 'all');
    return;
  }

  if (e.target.closest('#btn-admin-back')) {
    loadAdminDashboard();
    return;
  }

  const filterBtn = e.target.closest('[data-admin-detail-filter]');
  if (filterBtn && adminDetailState) {
    renderAdminStudentDetail(adminDetailState.idx, filterBtn.getAttribute('data-admin-detail-filter'));
    return;
  }

  const delCourse = e.target.closest('[data-delete-custom-course]');
  if (delCourse && fbDb && canAdminAddSyllabus(currentUser)) {
    const cid = delCourse.getAttribute('data-delete-custom-course');
    fbDb.collection('courses').doc(cid).delete().then(() => {
      delete COURSES[cid];
      updateYearUI();
      render();
      renderAdminAddSyllabus();
      showToast('Custom course deleted');
    }).catch((err) => showToast(err.message || 'Delete failed'));
    return;
  }

  if (e.target.closest('#btn-toggle-key-box')) {
    const kb = document.getElementById('admin-key-box');
    if (kb) kb.classList.toggle('hidden');
    return;
  }

  if (e.target.closest('#btn-save-gemini-key')) {
    const keyInput = document.getElementById('add-gemini-key');
    const statusEl = document.getElementById('add-parse-status');
    const k = keyInput ? keyInput.value.trim() : '';
    if (!k) { statusEl.textContent = 'Pehle Gemini API key paste karo.'; return; }
    cachedAdminGeminiKey = k;
    try { localStorage.setItem(GEMINI_KEY_STORAGE, k); } catch (err) {}
    if (fbDb && canAdminAddSyllabus(currentUser)) {
      fbDb.collection('admin_config').doc('secrets').set({ geminiApiKey: k, updatedAt: new Date().toISOString() }, { merge: true })
        .then(() => {
          document.getElementById('admin-key-box')?.classList.add('hidden');
          document.getElementById('btn-toggle-key-box').textContent = '🔑 AI Key Saved';
          statusEl.textContent = 'Gemini API Key securely saved! Ab seedha "Gemini AI Detect" use kar sakte ho.';
          showToast('API Key saved!');
        })
        .catch(() => {
          document.getElementById('admin-key-box')?.classList.add('hidden');
          statusEl.textContent = 'API Key saved in this browser!';
        });
    }
    return;
  }

  if (e.target.closest('#btn-cancel-preview')) {
    pendingParsedSubjects = null;
    pendingDetectedMeta = null;
    document.getElementById('add-preview-wrap')?.classList.add('hidden');
    const st = document.getElementById('add-parse-status');
    if (st) st.textContent = '';
    showToast('Preview cleared');
    return;
  }

  const startPdfScan = (useAi) => {
    const fileInput = document.getElementById('add-pdf-file');
    const statusEl = document.getElementById('add-parse-status');
    const progWrap = document.getElementById('add-scan-progress');
    const progText = document.getElementById('add-scan-progress-text');
    const progFill = document.getElementById('add-scan-progress-fill');
    const previewWrap = document.getElementById('add-preview-wrap');
    const btnFree = document.getElementById('btn-read-pdf-free');
    const btnAi = document.getElementById('btn-read-pdf-ai');

    const file = fileInput && fileInput.files && fileInput.files[0];
    if (!file) {
      statusEl.className = 'sync-error';
      statusEl.textContent = 'Pehle ek PDF file select karo.';
      return;
    }

    const apiKey = (document.getElementById('add-gemini-key')?.value || '').trim() || cachedAdminGeminiKey;
    if (useAi && !apiKey) {
      document.getElementById('admin-key-box')?.classList.remove('hidden');
      statusEl.className = 'sync-error';
      statusEl.textContent = 'Pehle upar "Set Gemini Key" me apni key daal kar Save karo.';
      return;
    }

    // Clear old preview immediately so user knows fresh scan is running
    pendingParsedSubjects = null;
    pendingDetectedMeta = null;
    if (previewWrap) previewWrap.classList.add('hidden');
    statusEl.className = 'unit-sub';
    statusEl.textContent = '';

    const setProg = (pct, msg) => {
      if (progWrap) progWrap.classList.remove('hidden');
      if (progFill) progFill.style.width = `${pct}%`;
      if (progText) progText.textContent = msg;
    };

    if (btnFree) btnFree.disabled = true;
    if (btnAi) btnAi.disabled = true;
    setProg(20, 'Opening PDF & reading pages...');

    const subName = (document.getElementById('add-subject-name')?.value || '').trim();

    extractPdfTextClient(file)
      .then((txt) => {
        if (!txt || !txt.trim()) {
          throw new Error('PDF me readable text nahi mila (agar scanned photo PDF hai to browser read nahi kar payega).');
        }
        if (useAi) {
          setProg(65, 'Gemini AI reading & structuring Units, Chapters & Topics...');
          return parseWithGeminiApi(apiKey, txt).then((res) => {
            const subs = Array.isArray(res) ? res : (res.subjects || []);
            if (!subs.length) throw new Error('Gemini AI ko is PDF me subjects nahi mile.');
            return {
              subs,
              meta: {
                courseName: (!Array.isArray(res) && res.courseName) || '',
                yearLabel: (!Array.isArray(res) && res.yearLabel) || ''
              }
            };
          });
        } else {
          setProg(70, 'Extracting Units, Chapters & Topics...');
          const subs = parsePlainTextSyllabus(txt, subName);
          if (!subs.length) throw new Error('Free scan se Units/Topics nahi mile. "Gemini AI Detect" try karo.');
          return {
            subs,
            meta: detectCourseAndYearFromText(txt)
          };
        }
      })
      .then(({ subs, meta }) => {
        setProg(100, 'Done!');
        pendingParsedSubjects = subs;
        pendingDetectedMeta = meta;
        renderAdminAddSyllabus();
        const newSt = document.getElementById('add-parse-status');
        if (newSt) {
          newSt.className = 'unit-sub';
          newSt.textContent = `${useAi ? 'Gemini AI' : 'Auto-Detect'} complete! ${subs.length} subject(s) ready.`;
        }
      })
      .catch((err) => {
        if (progWrap) progWrap.classList.add('hidden');
        if (btnFree) btnFree.disabled = false;
        if (btnAi) btnAi.disabled = false;
        statusEl.className = 'sync-error';
        statusEl.textContent = `Error: ${err.message || 'Scan failed. Internet ya API key check karo.'}`;
      });
  };

  if (e.target.closest('#btn-read-pdf-ai')) {
    startPdfScan(true);
    return;
  }

  if (e.target.closest('#btn-read-pdf-free')) {
    startPdfScan(false);
    return;
  }

  const saveCustomCourse = (isDraft, openPreviewAfter) => {
    if (!fbDb || !canAdminAddSyllabus(currentUser)) return;
    const statusEl = document.getElementById('add-parse-status');
    if (!pendingParsedSubjects || !pendingParsedSubjects.length) {
      statusEl.textContent = 'Pehle Step 1 me PDF read karo.';
      return;
    }

    const useDetected = document.getElementById('chk-use-detected')?.checked && pendingDetectedMeta && pendingDetectedMeta.courseName && pendingDetectedMeta.yearLabel;
    let cId, cName, yId, yLabel, subjectsToSave;

    if (useDetected) {
      cName = pendingDetectedMeta.courseName;
      yLabel = pendingDetectedMeta.yearLabel;
      const matchedCourse = Object.values(COURSES).find(
        (c) => c.name.toLowerCase() === cName.toLowerCase() || (c.fullName && c.fullName.toLowerCase() === cName.toLowerCase())
      );
      if (matchedCourse) {
        cId = matchedCourse.id;
        cName = matchedCourse.name;
        const matchedYear = Object.values(matchedCourse.years || {}).find(
          (y) => y.label.toLowerCase() === yLabel.toLowerCase() || yLabel.toLowerCase().includes(y.shortLabel.toLowerCase())
        );
        if (matchedYear) {
          yId = matchedYear.id;
          yLabel = matchedYear.label;
          subjectsToSave = [...(matchedYear.subjects || []), ...pendingParsedSubjects];
        } else {
          yId = `${cId}_${yLabel.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
          subjectsToSave = pendingParsedSubjects;
        }
      } else {
        cId = cName.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
        yId = `${cId}_${yLabel.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
        subjectsToSave = pendingParsedSubjects;
      }
    } else {
      const targetVal = document.getElementById('add-target-select') ? document.getElementById('add-target-select').value : '';
      if (!targetVal) {
        statusEl.textContent = 'Step 2 me Course & Year select karo (ya Custom create karo)!';
        showToast('Select Course & Year in Step 2');
        return;
      }
      if (targetVal !== '__new__' && targetVal.includes('::')) {
        const parts = targetVal.split('::');
        cId = parts[0];
        yId = parts[1];
        const cObj = COURSES[cId];
        const yObj = cObj && cObj.years[yId];
        cName = cObj.name;
        yLabel = yObj.label;
        subjectsToSave = [...(yObj.subjects || []), ...pendingParsedSubjects];
      } else {
        cName = (document.getElementById('add-course-name').value || '').trim();
        yLabel = (document.getElementById('add-year-label').value || '').trim();
        if (!cName || !yLabel) {
          statusEl.textContent = 'Custom Course Name aur Year & Semester dono bharo.';
          return;
        }
        cId = cName.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
        yId = `${cId}_${yLabel.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
        subjectsToSave = pendingParsedSubjects;
      }
    }

    const shortYr = yLabel.split('(')[0].trim() || yLabel;
    const existingYear = COURSES[cId] && COURSES[cId].years[yId];
    const yearObj = {
      id: yId,
      label: yLabel,
      shortLabel: (existingYear && existingYear.shortLabel) || shortYr,
      semLabel: (existingYear && existingYear.semLabel) || `${cName} ${yLabel}`,
      subjects: subjectsToSave,
      isDraft: !!isDraft,
      sem2ComingSoon: !!(existingYear && existingYear.sem2ComingSoon)
    };
    const existing = COURSES[cId];
    const mergedYears = existing ? { ...existing.years, [yId]: yearObj } : { [yId]: yearObj };
    const docPayload = {
      id: cId,
      name: cName,
      fullName: (existing && existing.fullName) || cName,
      defaultYear: existing ? existing.defaultYear : yId,
      years: mergedYears,
      updatedAt: new Date().toISOString()
    };
    statusEl.textContent = isDraft ? 'Saving draft...' : 'Publishing to website...';
    fbDb.collection('courses').doc(cId).set(docPayload, { merge: true }).then(() => {
      pendingParsedSubjects = null;
      pendingDetectedMeta = null;
      if (openPreviewAfter) {
        previewDraftState = { courseId: cId, yearId: yId };
        activeTab = 'overview';
        document.getElementById('admin-modal').classList.remove('open');
        updateYearUI();
        render();
        showToast('Draft Preview active (only visible to you)');
      } else {
        showToast(isDraft ? `${cName} saved as draft!` : `${cName} published!`);
        renderAdminAddSyllabus();
      }
    }).catch((err) => {
      statusEl.textContent = `Save failed: ${err.message || 'Check Firestore Rules'}`;
    });
  };

  if (e.target.closest('#btn-save-draft-syllabus')) {
    saveCustomCourse(true, true);
    return;
  }

  if (e.target.closest('#btn-save-custom-syllabus')) {
    saveCustomCourse(false, false);
    return;
  }

  if (e.target.closest('#btn-cancel-edit-syl')) {
    editingCourseMeta = null;
    pendingParsedSubjects = null;
    renderAdminAddSyllabus();
    return;
  }

  const prevBtn = e.target.closest('[data-preview-course]');
  if (prevBtn && canAdminAddSyllabus(currentUser)) {
    const cId = prevBtn.getAttribute('data-preview-course');
    const yId = prevBtn.getAttribute('data-preview-year');
    previewDraftState = { courseId: cId, yearId: yId };
    activeTab = 'overview';
    document.getElementById('admin-modal').classList.remove('open');
    updateYearUI();
    render();
    showToast('Previewing course on website');
    return;
  }

  const syncEditorDraftFromDom = () => {
    if (!Array.isArray(editingSubjectsDraft)) return;
    document.querySelectorAll('[data-edit-sub-name]').forEach((inp) => {
      const si = parseInt(inp.getAttribute('data-edit-sub-name'), 10);
      if (editingSubjectsDraft[si]) {
        editingSubjectsDraft[si].name = inp.value.trim();
        editingSubjectsDraft[si].shortName = inp.value.trim().slice(0, 22);
      }
    });
    document.querySelectorAll('[data-edit-sub-code]').forEach((inp) => {
      const si = parseInt(inp.getAttribute('data-edit-sub-code'), 10);
      if (editingSubjectsDraft[si]) editingSubjectsDraft[si].code = inp.value.trim();
    });
    document.querySelectorAll('[data-edit-unit-title]').forEach((inp) => {
      const [si, ui] = inp.getAttribute('data-edit-unit-title').split(':').map(Number);
      if (editingSubjectsDraft[si]?.units?.[ui]) editingSubjectsDraft[si].units[ui].title = inp.value.trim();
    });
    document.querySelectorAll('[data-edit-group-name]').forEach((inp) => {
      const [si, ui, gi] = inp.getAttribute('data-edit-group-name').split(':').map(Number);
      if (editingSubjectsDraft[si]?.units?.[ui]?.groups?.[gi]) editingSubjectsDraft[si].units[ui].groups[gi].name = inp.value.trim();
    });
    document.querySelectorAll('[data-edit-group-topics]').forEach((ta) => {
      const [si, ui, gi] = ta.getAttribute('data-edit-group-topics').split(':').map(Number);
      if (editingSubjectsDraft[si]?.units?.[ui]?.groups?.[gi]) {
        editingSubjectsDraft[si].units[ui].groups[gi].topics = ta.value.split(/\r?\n/).map((t) => t.trim()).filter(Boolean);
      }
    });
  };

  if (e.target.closest('#btn-cancel-edit-syl')) {
    editingCourseMeta = null;
    editingSubjectsDraft = null;
    expandedEditSubIdx = null;
    renderAdminAddSyllabus();
    return;
  }

  if (e.target.closest('#btn-save-edited-year') && fbDb && editingCourseMeta) {
    syncEditorDraftFromDom();
    const { courseId, yearId } = editingCourseMeta;
    const cObj = COURSES[courseId];
    const yObj = cObj && cObj.years[yearId];
    if (cObj && yObj) {
      const updatedYear = { ...yObj, subjects: editingSubjectsDraft };
      const updatedYears = { ...cObj.years, [yearId]: updatedYear };
      fbDb.collection('courses').doc(courseId).set({
        id: courseId,
        name: cObj.name,
        fullName: cObj.fullName || cObj.name,
        defaultYear: cObj.defaultYear,
        years: updatedYears,
        updatedAt: new Date().toISOString()
      }, { merge: true }).then(() => {
        COURSES[courseId].years[yearId] = updatedYear;
        editingCourseMeta = null;
        editingSubjectsDraft = null;
        expandedEditSubIdx = null;
        updateYearUI();
        render();
        renderAdminAddSyllabus();
        showToast('Changes saved!');
      }).catch((err) => showToast(err.message || 'Save failed'));
    }
    return;
  }

  const toggleEditSub = e.target.closest('[data-toggle-edit-sub]');
  if (toggleEditSub) {
    syncEditorDraftFromDom();
    const si = parseInt(toggleEditSub.getAttribute('data-toggle-edit-sub'), 10);
    expandedEditSubIdx = expandedEditSubIdx === si ? null : si;
    renderAdminAddSyllabus();
    return;
  }

  const delEditSub = e.target.closest('[data-del-edit-sub]');
  if (delEditSub) {
    syncEditorDraftFromDom();
    const si = parseInt(delEditSub.getAttribute('data-del-edit-sub'), 10);
    editingSubjectsDraft.splice(si, 1);
    expandedEditSubIdx = null;
    renderAdminAddSyllabus();
    showToast('Subject removed (click Save Changes to apply)');
    return;
  }

  const addEditUnit = e.target.closest('[data-add-edit-unit]');
  if (addEditUnit) {
    syncEditorDraftFromDom();
    const si = parseInt(addEditUnit.getAttribute('data-add-edit-unit'), 10);
    const sub = editingSubjectsDraft[si];
    if (sub) {
      sub.units = sub.units || [];
      sub.units.push({ id: `${sub.id}_u${Date.now().toString(36)}`, title: 'New Unit', groups: [{ name: 'Chapter 1', topics: ['Topic 1'] }] });
      renderAdminAddSyllabus();
    }
    return;
  }

  const delEditUnit = e.target.closest('[data-del-edit-unit]');
  if (delEditUnit) {
    syncEditorDraftFromDom();
    const [si, ui] = delEditUnit.getAttribute('data-del-edit-unit').split(':').map(Number);
    if (editingSubjectsDraft[si]?.units) {
      editingSubjectsDraft[si].units.splice(ui, 1);
      renderAdminAddSyllabus();
    }
    return;
  }

  const addEditGroup = e.target.closest('[data-add-edit-group]');
  if (addEditGroup) {
    syncEditorDraftFromDom();
    const [si, ui] = addEditGroup.getAttribute('data-add-edit-group').split(':').map(Number);
    if (editingSubjectsDraft[si]?.units?.[ui]) {
      editingSubjectsDraft[si].units[ui].groups.push({ name: 'New Chapter', topics: ['Topic 1'] });
      renderAdminAddSyllabus();
    }
    return;
  }

  const delEditGroup = e.target.closest('[data-del-edit-group]');
  if (delEditGroup) {
    syncEditorDraftFromDom();
    const [si, ui, gi] = delEditGroup.getAttribute('data-del-edit-group').split(':').map(Number);
    if (editingSubjectsDraft[si]?.units?.[ui]?.groups) {
      editingSubjectsDraft[si].units[ui].groups.splice(gi, 1);
      renderAdminAddSyllabus();
    }
    return;
  }

  const editBtn = e.target.closest('[data-edit-course]');
  if (editBtn && canAdminAddSyllabus(currentUser)) {
    const cId = editBtn.getAttribute('data-edit-course');
    const yId = editBtn.getAttribute('data-edit-year');
    const cObj = COURSES[cId];
    const yObj = cObj && cObj.years[yId];
    if (cObj && yObj) {
      editingCourseMeta = {
        courseId: cId,
        yearId: yId,
        courseName: cObj.fullName || cObj.name,
        yearLabel: yObj.label
      };
      editingSubjectsDraft = JSON.parse(JSON.stringify(yObj.subjects || []));
      expandedEditSubIdx = null;
      renderAdminAddSyllabus();
    }
    return;
  }

  const pubToggle = e.target.closest('[data-toggle-publish-course]');
  if (pubToggle && fbDb && canAdminAddSyllabus(currentUser)) {
    const cId = pubToggle.getAttribute('data-toggle-publish-course');
    const yId = pubToggle.getAttribute('data-toggle-publish-year');
    const cObj = COURSES[cId];
    const yObj = cObj && cObj.years[yId];
    if (cObj && yObj) {
      const nextDraft = !yObj.isDraft;
      const updatedYears = { ...cObj.years, [yId]: { ...yObj, isDraft: nextDraft } };
      fbDb.collection('courses').doc(cId).set({ years: updatedYears, updatedAt: new Date().toISOString() }, { merge: true })
        .then(() => {
          showToast(nextDraft ? 'Moved to Draft (hidden from students)' : 'Published live to everyone!');
          renderAdminAddSyllabus();
        })
        .catch((err) => showToast(err.message || 'Update failed'));
    }
    return;
  }

  const resetDocBtn = e.target.closest('[data-reset-custom-doc]');
  if (resetDocBtn && fbDb && canAdminAddSyllabus(currentUser)) {
    const cId = resetDocBtn.getAttribute('data-reset-custom-doc');
    openModal(
      'Remove Custom Firestore Data?',
      `This will delete all custom/uploaded entries stored in Firestore for "${cId}" (built-in BCA/DU B.Com subjects will stay intact).`,
      () => {
        fbDb.collection('courses').doc(cId).delete().then(() => {
          showToast('Custom data removed! Reloading...');
          setTimeout(() => location.reload(), 600);
        });
      }
    );
    return;
  }

  const delYearBtn = e.target.closest('[data-delete-custom-year]');
  if (delYearBtn && fbDb && canAdminAddSyllabus(currentUser)) {
    const cId = delYearBtn.getAttribute('data-delete-custom-year');
    const yId = delYearBtn.getAttribute('data-year-id');
    const cObj = COURSES[cId];
    if (!cObj) return;
    openModal(
      'Delete Syllabus?',
      `Are you sure you want to delete ${cObj.name} (${cObj.years[yId]?.label || yId})?`,
      () => {
        const remaining = { ...cObj.years };
        delete remaining[yId];
        if (Object.keys(remaining).length === 0) {
          fbDb.collection('courses').doc(cId).delete().then(() => {
            delete COURSES[cId];
            if (previewDraftState && previewDraftState.courseId === cId) previewDraftState = null;
            updateYearUI();
            render();
            renderAdminAddSyllabus();
            showToast('Course deleted');
          });
        } else {
          fbDb.collection('courses').doc(cId).update({
            [`years.${yId}`]: firebase.firestore.FieldValue.delete()
          }).then(() => {
            COURSES[cId].years = remaining;
            if (previewDraftState && previewDraftState.yearId === yId) previewDraftState = null;
            updateYearUI();
            render();
            renderAdminAddSyllabus();
            showToast('Year deleted permanently!');
          }).catch((err) => showToast(err.message || 'Delete failed'));
        }
      }
    );
  }
});

// Preview Banner Events
document.getElementById('btn-preview-exit').addEventListener('click', () => {
  previewDraftState = null;
  activeTab = 'overview';
  updateYearUI();
  render();
  showToast('Exited preview mode');
});

document.getElementById('btn-preview-publish').addEventListener('click', () => {
  if (!previewDraftState || !fbDb || !canAdminAddSyllabus(currentUser)) return;
  const { courseId, yearId } = previewDraftState;
  const cObj = COURSES[courseId];
  const yObj = cObj && cObj.years[yearId];
  if (!cObj || !yObj) return;
  const updatedYears = { ...cObj.years, [yearId]: { ...yObj, isDraft: false } };
  fbDb.collection('courses').doc(courseId).set({ years: updatedYears, updatedAt: new Date().toISOString() }, { merge: true })
    .then(() => {
      previewDraftState = null;
      activeTab = 'overview';
      updateYearUI();
      render();
      showToast('Published live to everyone!');
    })
    .catch((err) => showToast(err.message || 'Publish failed'));
});

// Show gentle sign-in prompt 10 seconds after opening if not signed in
setTimeout(() => {
  if (!currentUser && !promptDismissedThisSession) {
    openLoginPromptModal();
  }
}, 10000);

const THEME_STORAGE_KEY = 'syllabus_theme_v1';

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark', isDark);
  const btn = document.getElementById('btn-theme-toggle');
  if (btn) {
    btn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
  }
}

function initTheme() {
  let theme = 'light';
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) || localStorage.getItem('bca_theme_v1');
    if (saved === 'dark' || saved === 'light') {
      theme = saved;
    }
  } catch (e) {}
  applyTheme(theme);
}

document.getElementById('btn-theme-toggle').addEventListener('click', () => {
  const next = document.body.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(next);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch (e) {}
});

initTheme();
loadState();
updateYearUI();
updateGreetingUI();
initFirebase();
render();
