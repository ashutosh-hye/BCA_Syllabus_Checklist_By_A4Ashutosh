const ADMIN_EMAIL = 'ashutoshaamonty@gmail.com';
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCjK6hvr-faQTcV5mRA1QTkZw8LoZyO2bU",
  authDomain: "project-b2096ed9-f6e9-4bfc-9ef.firebaseapp.com",
  projectId: "project-b2096ed9-f6e9-4bfc-9ef",
  storageBucket: "project-b2096ed9-f6e9-4bfc-9ef.firebasestorage.app",
  messagingSenderId: "877614629020",
  appId: "1:877614629020:web:caa36f9228c7d5539ead59"
};

const SYLLABUS_DATA = [
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

const STORAGE_KEY = 'bca_3rd_sem_checklist_v1';

let checkedMap = {};
let activeTab = 'overview';
let filterMode = 'all';
let searchQuery = '';
let collapsedUnits = {};
let pendingModalAction = null;

let fbAuth = null;
let fbDb = null;
let currentUser = null;
let unsubscribeSnapshot = null;

function isAdminUser(user) {
  return !!(
    user &&
    user.email &&
    ADMIN_EMAIL &&
    user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()
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

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        checkedMap = parsed;
      }
    }
  } catch (e) {
    checkedMap = {};
  }
}

function saveState(skipCloud) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedMap));
  } catch (e) {}
  if (!skipCloud && currentUser && fbDb) {
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
}

function buildSubjectBreakdown() {
  const breakdown = {};
  SYLLABUS_DATA.forEach((sub) => {
    if (!sub.missingNotice) {
      breakdown[sub.shortName] = getSubjectStats(sub).pct;
    }
  });
  return breakdown;
}

function pushToCloud() {
  if (!currentUser || !fbDb) return;
  const overall = getOverallStats();
  const payload = {
    email: currentUser.email || '',
    displayName:
      currentUser.displayName ||
      (currentUser.email ? currentUser.email.split('@')[0] : 'Student'),
    photoURL: currentUser.photoURL || '',
    checkedMap: checkedMap,
    overallPct: overall.pct,
    doneCount: overall.done,
    totalCount: overall.total,
    subjectStats: buildSubjectBreakdown(),
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
      if (doc.exists && doc.data() && doc.data().checkedMap) {
        checkedMap = doc.data().checkedMap;
        saveState(true);
        render();
      } else {
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

function loadAdminDashboard() {
  const listEl = document.getElementById('admin-users-list');
  if (!isAdminUser(currentUser) || !fbDb) {
    listEl.innerHTML = '<p class="sync-error">Access denied.</p>';
    return;
  }
  listEl.innerHTML = '<p class="unit-sub">Loading user progress...</p>';
  fbDb
    .collection('users')
    .orderBy('updatedAt', 'desc')
    .get()
    .then((snap) => {
      const users = [];
      snap.forEach((doc) => users.push(doc.data()));
      document.getElementById('admin-total-users').textContent = users.length;
      const avg = users.length
        ? Math.round(users.reduce((acc, u) => acc + (u.overallPct || 0), 0) / users.length)
        : 0;
      document.getElementById('admin-avg-progress').textContent = `${avg}%`;

      if (!users.length) {
        listEl.innerHTML = '<p class="unit-sub">No users have signed in yet.</p>';
        return;
      }

      listEl.innerHTML = users
        .map((u) => {
          const name = escapeHtml(u.displayName || 'Student');
          const email = escapeHtml(u.email || '');
          const pct = u.overallPct || 0;
          const done = u.doneCount || 0;
          const total = u.totalCount || 0;
          const updated = u.updatedAt ? new Date(u.updatedAt).toLocaleString() : 'Never';
          const initial = (u.displayName || u.email || 'S').trim().charAt(0).toUpperCase();
          const avatarHtml = u.photoURL
            ? `<img src="${escapeHtml(u.photoURL)}" class="avatar-img" alt="" />`
            : `<span class="avatar-fallback">${escapeHtml(initial)}</span>`;
          const pills = u.subjectStats
            ? Object.entries(u.subjectStats)
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
        })
        .join('');
    })
    .catch((err) => {
      listEl.innerHTML = `<p class="sync-error">Could not load users: ${escapeHtml(err.message || 'Permission error')}</p>`;
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
  let total = 0;
  let done = 0;
  SYLLABUS_DATA.forEach((sub) => {
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
  let html = `
    <button type="button" data-tab="overview"
      class="tab-btn ${activeTab === 'overview' ? 'active-overview' : ''}">
      All Subjects
    </button>
  `;

  SYLLABUS_DATA.forEach((sub) => {
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
  let cards = '';
  SYLLABUS_DATA.forEach((sub) => {
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

  return `<div class="overview-grid">${cards}</div>`;
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
  if (activeTab === 'overview') {
    main.innerHTML = renderOverview();
  } else {
    const sub = SYLLABUS_DATA.find((s) => s.id === activeTab);
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

// Event Delegation
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
    const sub = SYLLABUS_DATA.find((s) => s.id === activeTab);
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
    }
    return;
  }

  const resetSub = e.target.closest('[data-reset-subject]');
  if (resetSub) {
    const sid = resetSub.getAttribute('data-reset-subject');
    const sub = SYLLABUS_DATA.find((s) => s.id === sid);
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
    const sub = SYLLABUS_DATA.find((s) => s.id === activeTab);
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
  if (cb.checked) checkedMap[tid] = true;
  else delete checkedMap[tid];
  saveState();
  render();
});

document.getElementById('btn-reset-all').addEventListener('click', () => {
  openModal(
    'Reset All Progress?',
    'This will uncheck every topic across all BCA 3rd Semester subjects.',
    () => {
      checkedMap = {};
      saveState();
      render();
      showToast('All syllabus progress reset');
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

// Google Sign-In & Account Modal Events
document.getElementById('btn-google-login').addEventListener('click', () => {
  if (!fbAuth || typeof firebase === 'undefined') {
    showToast('Sign-in requires internet connection');
    return;
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  fbAuth
    .signInWithPopup(provider)
    .then(() => showToast('Signed in with Google!'))
    .catch((err) => {
      if (err && (err.code === 'auth/popup-blocked' || err.code === 'auth/operation-not-supported-in-this-environment')) {
        fbAuth.signInWithRedirect(provider).catch(() => showToast('Could not start Google Sign-In'));
      } else {
        showToast(err.message || 'Google Sign-In failed');
      }
    });
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

loadState();
updateGreetingUI();
initFirebase();
render();
