const ADMIN_EMAILS = ['ashutoshaamonty@gmail.com', 'tideseren@gmail.com'];
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

const SYLLABUS_BY_YEAR = {
  year1: {
    id: 'year1',
    label: 'BCA 1st Year',
    semLabel: 'BCA 1st Year • Semester I',
    subjects: YEAR_1_SEM_1_SUBJECTS,
    sem2ComingSoon: true
  },
  year2: {
    id: 'year2',
    label: 'BCA 2nd Year',
    semLabel: 'BCA 2nd Year • Semester III',
    subjects: YEAR_2_SEM_3_SUBJECTS,
    sem2ComingSoon: false
  }
};

const STORAGE_KEY = 'bca_3rd_sem_checklist_v1';
const YEAR_STORAGE_KEY = 'bca_selected_year_v1';

let selectedYear = 'year2';
let checkedMap = {};
let activeTab = 'overview';
let filterMode = 'all';
let searchQuery = '';
let collapsedUnits = {};
let pendingModalAction = null;
let promptDismissedThisSession = false;
let guestTickCount = 0;

let fbAuth = null;
let fbDb = null;
let currentUser = null;
let unsubscribeSnapshot = null;

function getCurrentSubjects() {
  return (SYLLABUS_BY_YEAR[selectedYear] || SYLLABUS_BY_YEAR.year2).subjects;
}

function isAdminUser(user) {
  return !!(
    user &&
    user.email &&
    ADMIN_EMAILS.some((e) => e.toLowerCase() === user.email.toLowerCase())
  );
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

function updateYearUI() {
  const cfg = SYLLABUS_BY_YEAR[selectedYear] || SYLLABUS_BY_YEAR.year2;
  const badge = document.getElementById('header-sem-badge');
  if (badge) badge.textContent = cfg.semLabel;
  const wrap = document.getElementById('year-selector-wrap');
  if (wrap) {
    if (currentUser && !isAdminUser(currentUser)) {
      wrap.classList.add('hidden');
    } else {
      wrap.classList.remove('hidden');
    }
  }
  document.querySelectorAll('[data-select-year]').forEach((btn) => {
    if (btn.getAttribute('data-select-year') === selectedYear) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function setYear(yr, pushCloud) {
  if (!SYLLABUS_BY_YEAR[yr]) return;
  selectedYear = yr;
  activeTab = 'overview';
  filterMode = 'all';
  searchQuery = '';
  try {
    localStorage.setItem(YEAR_STORAGE_KEY, yr);
  } catch (e) {}
  updateYearUI();
  render();
  if (pushCloud && currentUser && fbDb) {
    pushToCloud();
  }
}

function loadState() {
  checkedMap = {};
  try {
    const savedYr = localStorage.getItem(YEAR_STORAGE_KEY);
    if (savedYr && SYLLABUS_BY_YEAR[savedYr]) {
      selectedYear = savedYr;
    }
  } catch (e) {}
}

function saveState(skipCloud) {
  if (!currentUser) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedMap));
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

function getYearStats(yr) {
  const subjects = (SYLLABUS_BY_YEAR[yr] || SYLLABUS_BY_YEAR.year2).subjects;
  let total = 0;
  let done = 0;
  const breakdown = {};
  subjects.forEach((sub) => {
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
  const activeStats = getYearStats(selectedYear);
  const y1Stats = getYearStats('year1');
  const y2Stats = getYearStats('year2');
  const payload = {
    email: currentUser.email || '',
    displayName:
      currentUser.displayName ||
      (currentUser.email ? currentUser.email.split('@')[0] : 'Student'),
    photoURL: currentUser.photoURL || '',
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
    updatedAt: new Date().toISOString()
  };
  fbDb
    .collection('users')
    .doc(currentUser.uid)
    .set(payload, { merge: true })
    .catch(() => {});
}

function startCloudListener(user) {
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
        if (data.selectedYear && SYLLABUS_BY_YEAR[data.selectedYear]) {
          selectedYear = data.selectedYear;
          updateYearUI();
        } else if (guestTickCount === 0) {
          document.getElementById('year-picker-modal').classList.add('open');
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
        document.getElementById('year-picker-modal').classList.add('open');
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

function renderAdminUserCard(u, yr) {
  const name = escapeHtml(u.displayName || 'Student');
  const email = escapeHtml(u.email || '');
  const pct = yr === 'year1' ? (u.year1Pct ?? u.overallPct ?? 0) : (u.year2Pct ?? u.overallPct ?? 0);
  const done = yr === 'year1' ? (u.year1Done ?? u.doneCount ?? 0) : (u.year2Done ?? u.doneCount ?? 0);
  const total = yr === 'year1' ? (u.year1Total ?? u.totalCount ?? 0) : (u.year2Total ?? u.totalCount ?? 0);
  const subjectsObj = yr === 'year1' ? (u.year1Subjects || u.subjectStats) : (u.year2Subjects || u.subjectStats);
  const updated = u.updatedAt ? new Date(u.updatedAt).toLocaleString() : 'Never';
  const initial = (u.displayName || u.email || 'S').trim().charAt(0).toUpperCase();
  const avatarHtml = u.photoURL
    ? `<img src="${escapeHtml(u.photoURL)}" class="avatar-img" alt="" />`
    : `<span class="avatar-fallback">${escapeHtml(initial)}</span>`;
  const pills = subjectsObj
    ? Object.entries(subjectsObj)
        .map(([sName, sPct]) => `<span class="admin-sub-pill">${escapeHtml(sName)}: <strong>${sPct}%</strong></span>`)
        .join('')
    : '';
  return `
    <div class="admin-user-card">
      <div class="admin-user-top">
        <div style="display:flex;align-items:center;gap:0.65rem;">
          ${avatarHtml}
          <div>
            <div style="font-weight:700;font-size:0.92rem;color:#0f172a;">${name}</div>
            <div style="font-size:0.75rem;color:#64748b;">${email} • Last active: ${escapeHtml(updated)}</div>
          </div>
        </div>
        <div style="text-align:right;">
          <div style="font-weight:700;font-size:1rem;color:#4f46e5;">${pct}%</div>
          <div style="font-size:0.72rem;color:#64748b;">${done}/${total} topics</div>
        </div>
      </div>
      <div class="progress-track progress-track-sm" style="margin-top:0.5rem;">
        <div class="progress-fill" style="width:${pct}%"></div>
      </div>
      ${pills ? `<div class="admin-sub-pills">${pills}</div>` : ''}
    </div>
  `;
}

function loadAdminDashboard() {
  const container = document.getElementById('admin-year-containers');
  if (!isAdminUser(currentUser) || !fbDb) {
    container.innerHTML = '<p class="sync-error">Access denied.</p>';
    return;
  }
  container.innerHTML = '<p class="unit-sub">Loading student progress...</p>';
  fbDb
    .collection('users')
    .orderBy('updatedAt', 'desc')
    .get()
    .then((snap) => {
      const y1Users = [];
      const y2Users = [];
      snap.forEach((doc) => {
        const d = doc.data();
        if (d.selectedYear === 'year1') {
          y1Users.push(d);
        } else {
          y2Users.push(d);
        }
      });

      const y1Avg = y1Users.length
        ? Math.round(y1Users.reduce((acc, u) => acc + (u.year1Pct ?? u.overallPct ?? 0), 0) / y1Users.length)
        : 0;
      const y2Avg = y2Users.length
        ? Math.round(y2Users.reduce((acc, u) => acc + (u.year2Pct ?? u.overallPct ?? 0), 0) / y2Users.length)
        : 0;

      const buildYearBox = (yrKey, title, subtitle, list, avgPct) => `
        <div class="admin-year-box">
          <button type="button" data-admin-toggle="${yrKey}" class="admin-year-header">
            <div>
              <div style="font-weight:700;font-size:0.95rem;color:#0f172a;">${title}</div>
              <div style="font-size:0.76rem;color:#64748b;">${subtitle} • <strong>${list.length}</strong> students • Avg: <strong>${avgPct}%</strong></div>
            </div>
            <span style="font-size:0.78rem;font-weight:600;color:#4f46e5;">View Students ▾</span>
          </button>
          <div id="admin-box-${yrKey}" class="admin-year-body hidden">
            ${
              list.length
                ? list.map((u) => renderAdminUserCard(u, yrKey)).join('')
                : '<p class="unit-sub">No students have signed in for this year yet.</p>'
            }
          </div>
        </div>
      `;

      container.innerHTML =
        buildYearBox('year1', 'BCA 1st Year', 'Semester I', y1Users, y1Avg) +
        buildYearBox('year2', 'BCA 2nd Year', 'Semester III', y2Users, y2Avg);
    })
    .catch((err) => {
      container.innerHTML = `<p class="sync-error">Could not load users: ${escapeHtml(err.message || 'Permission error')}</p>`;
    });
}

function getTopicId(unitId, groupIdx, topicIdx) {
  return `${unitId}__g${groupIdx}__t${topicIdx}`;
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
  const cfg = SYLLABUS_BY_YEAR[selectedYear] || SYLLABUS_BY_YEAR.year2;
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
          placeholder="Search topic..." class="search-input" />
        <button type="button" id="btn-toggle-collapse" class="btn btn-outline">
          ${sub.units.every((u) => collapsedUnits[u.id]) ? 'Expand All' : 'Collapse All'}
        </button>
      </div>
    </div>
  </section>
  `;

  const query = searchQuery.trim().toLowerCase();
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
    const isCollapsed = !!collapsedUnits[unit.id];
    const allUnitDone = uStats.total > 0 && uStats.done === uStats.total;

    let groupsHtml = '';
    let visibleTopicCount = 0;

    unit.groups.forEach((group, gi) => {
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
        groupsHtml += `
          <div class="group-block">
            <div class="group-title">${escapeHtml(group.name)}</div>
            <div>${topicsHtml}</div>
          </div>
        `;
      }
    });

    if ((query || filterMode !== 'all') && visibleTopicCount === 0) {
      return;
    }

    unitsHtml += `
      <div class="card unit-card">
        <div class="unit-header ${isCollapsed ? 'collapsed' : ''}">
          <button type="button" data-toggle-unit="${unit.id}" class="unit-toggle">
            <span class="unit-arrow ${isCollapsed ? '' : 'open'}">▶</span>
            <div>
              <h3 class="unit-title">${escapeHtml(unit.title)}</h3>
              <p class="unit-sub">${uStats.done}/${uStats.total} done • ${uStats.left} left (${uStats.pct}%)</p>
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
        <div class="unit-body ${isCollapsed ? 'hidden' : ''}">
          ${groupsHtml || '<p class="unit-sub" style="padding:0.5rem;">No matching topics.</p>'}
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

// Year Selector Events
document.querySelectorAll('[data-select-year]').forEach((btn) => {
  btn.addEventListener('click', () => {
    setYear(btn.getAttribute('data-select-year'), true);
  });
});

document.querySelectorAll('[data-pick-year]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const yr = btn.getAttribute('data-pick-year');
    document.getElementById('year-picker-modal').classList.remove('open');
    setYear(yr, true);
    showToast(`${SYLLABUS_BY_YEAR[yr].label} selected!`);
  });
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
    collapsedUnits[uid] = !collapsedUnits[uid];
    render();
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
      const allCollapsed = sub.units.every((u) => collapsedUnits[u.id]);
      sub.units.forEach((u) => {
        collapsedUnits[u.id] = !allCollapsed;
      });
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
  const cfg = SYLLABUS_BY_YEAR[selectedYear] || SYLLABUS_BY_YEAR.year2;
  openModal(
    `Reset ${cfg.label} Progress?`,
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
      showToast(`${cfg.label} progress reset`);
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
  document.getElementById('year-picker-modal').classList.add('open');
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
  document.getElementById('admin-modal').classList.add('open');
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
  const toggleBtn = e.target.closest('[data-admin-toggle]');
  if (!toggleBtn) return;
  const yrKey = toggleBtn.getAttribute('data-admin-toggle');
  const body = document.getElementById(`admin-box-${yrKey}`);
  if (body) {
    body.classList.toggle('hidden');
  }
});

// Show gentle sign-in prompt 10 seconds after opening if not signed in
setTimeout(() => {
  if (!currentUser && !promptDismissedThisSession) {
    openLoginPromptModal();
  }
}, 10000);


const THEME_STORAGE_KEY = 'bca_theme_v1';

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
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
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
