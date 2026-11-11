export const profile = {
  name: "Luke Payne",
  role: "Software Engineer | Python, TypeScript and Applied AI",
  location: "Remote, Virginia",
  email: "lukecello@gmail.com",
  phone: "(540) 322-6547",
  phoneHref: "tel:+15403226547",
  portfolio: "https://lukepayne.web.app/",
  portfolioLabel: "lukepayne.web.app",
  github: "https://github.com/lpaynedev",
  githubLabel: "@lpaynedev",
  linkedin: "https://www.linkedin.com/in/lukepaynesci/",
  linkedinLabel: "in/lukepaynesci",
  status: "Open to work",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/lab", label: "Writing" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export const overviewRows = [
  { label: "Role", value: profile.role },
  { label: "Focus", value: "Agentic workflows / Local-first tools / Retrieval systems / Product APIs" },
  { label: "Quality", value: "Vitest / pytest / Playwright / Docker / Deployment checks" },
  { label: "Experience", value: "Full-stack products / AI systems / Simulation / Developer automation" },
];

export type PortfolioProject = {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  status?: string;
  featured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
  evidenceLinks?: { label: string; href: string }[];
  caseStudyUrl: string;
  disclaimer?: string;
  caseStudy: {
    source: string;
    problem: string;
    approach: string[];
    example: string;
    insights: string[];
  };
};

export const projects: PortfolioProject[] = [
  {
    "id": "openclaw-evolutionary-lab",
    "featured": false,
    "category": "Agent systems / Architecture & acceptance",
    "title": "OpenClaw Evolutionary Coding Lab",
    "status": "Active engineering / historical offline candidate",
    "caseStudyUrl": "/projects/openclaw-evolutionary-lab",
    "description": "Bounded coding work with explicit permissions, isolated project copies and inspectable outcomes. Recovery and acceptance remain active engineering work; operational integration is incomplete.",
    "tags": [
      "Python",
      "Durable state",
      "Evaluation",
      "Agent systems"
    ],
    "highlights": [
      "Historical source-v10 receipt: 1,612 offline tests, one expected historical failure and 17 host checks excluded.",
      "The installed offline wheel enrolled one synthetic registry candidate with execution and other capabilities disabled.",
      "Planning, scheduling, durable records and execution components exist; a complete integrated coding demonstration remains unfinished.",
      "Current convergence policy has population one; multi-population evolutionary search is not established."
    ],
    "disclaimer": "Historical offline validation is not native qualification, release readiness or a production service. Observer/service acceptance, native startup and durable request integration remain incomplete. Saved results were not rerun for this portfolio refresh.",
    "evidenceLinks": [
      {
        "label": "Project and eight-part series",
        "href": "/lab/openclaw-engine-progress/"
      },
      {
        "label": "Cancellation and recovery",
        "href": "/lab/openclaw-cancellation-and-recovery/"
      }
    ],
    "caseStudy": {
      "source": "Source-v10 validation receipt and public engineering series",
      "problem": "What counts as a completed coding task when a caller disappears, a deadline expires, or a process survives cancellation?",
      "approach": [
        "Make permissions and acceptance criteria explicit before execution. Keep proposed changes in an isolated project copy for human review.",
        "Separate a caller’s lifetime from durable work records. Preserve stop requests, deadlines and inspectable outcomes across interruption.",
        "My focus is the system boundaries, recovery behavior and evidence needed for acceptance. Development and implementation are AI-assisted.",
        "Keep offline package validation separate from host qualification and integrated operational acceptance."
      ],
      "example": "The September 22 source-v10 candidate recorded 1,612 offline tests with no unexpected failures or errors. Its nativeQualificationClaim was NONE. The installed wheel demo registered one synthetic candidate with execution disabled; this is a historical development artifact, not a completed coding service.",
      "insights": [
        "Recovery is part of the task contract: success, failure, cancellation and restart need inspectable outcomes.",
        "A passing offline candidate does not establish operational integration. The complete success/failure/cancellation/restart demonstration remains unfinished.",
        "The public series explains focused findings and their boundaries; it does not independently reproduce the local engine results."
      ]
    }
  },
  {
    "id": "llm-tool-calling-lab",
    "featured": true,
    "category": "Applied ML / Controlled Experiment",
    "title": "LLM Tool Calling Lab",
    "status": "Experimental v0.1.0",
    "githubUrl": "https://github.com/lpaynedev/llm-tool-calling-lab",
    "caseStudyUrl": "/projects/llm-tool-calling-lab",
    "description": "An experimental local chatbot exploring how an LLM can use specialized ML models as tools. It answers questions about numerical data, compares methods and shows recorded results, with limits on model runs and tool calls.",
    "tags": [
      "Python",
      "scikit-learn",
      "Streamlit",
      "Ollama",
      "Evaluation"
    ],
    "highlights": [
      "Same local model, ML tools, data access and episode limits across both conversational conditions.",
      "96 supported held-out episodes on 24 datasets; two fixed-seed repeats per condition and dataset.",
      "33/48 generic and 31/48 structured completions; only 5/24 anomaly conversations passed.",
      "Frozen source, raw transcripts, failed episodes, reviewer rationales and release checksums are inspectable."
    ],
    "disclaimer": "Small synthetic tables and one backend. Completion combines structural checks with unblinded AI reviews by implementation agents. No independent human study, statistical significance, general superiority or production reliability is established.",
    "evidenceLinks": [
      {
        "label": "Results and evidence map",
        "href": "https://github.com/lpaynedev/llm-tool-calling-lab/blob/main/RESULTS.md#inspect-the-evidence"
      },
      {
        "label": "Protocol and controls",
        "href": "https://github.com/lpaynedev/llm-tool-calling-lab/blob/main/EVALUATION.md"
      },
      {
        "label": "Raw evidence and frozen source",
        "href": "https://github.com/lpaynedev/llm-tool-calling-lab/releases/tag/v0.1.0"
      }
    ],
    "caseStudy": {
      "source": "Frozen v0.1.0 campaign and public evidence",
      "problem": "Does adding structured planning instructions improve grounded completion over a generic tool-calling chatbot with the same model, tools and budget? A useful fit alone is insufficient: the initial answer and follow-up must deliver valid output, faithfully explain evidence and state its limits.",
      "approach": [
        "Compare a shared tool-calling prompt with the same prompt plus planning instructions. Both arms already receive task, safety, evidence and follow-up guidance; the intervention is a prompt addition, not a trained planner.",
        "Keep preprocessing, data partitions, fitting and timeouts in a validated executor. Selection uses validation evidence; test scores and synthetic truth stay outside the chat tools. Anomaly methods fit reference rows and rank a separate batch.",
        "Freeze source, model digest, fixtures, rubric and caps before the replacement campaign. Evaluate two-turn episodes on 24 held-out synthetic datasets, twice per arm with temperature 0 and sampling seed 0. Repeats do not create independent datasets or random draws.",
        "Count failed and invalid episodes as zero. Fixed one-method references know the intended family and supply model-quality comparisons, not conversational competition. Report separate challenge outcomes and family-specific metrics."
      ],
      "example": "In saved anomaly episode c122_generic_1, Isolation Forest and Local Outlier Factor both fitted successfully. The follow-up repeated the original Isolation Forest ranking instead of comparing the methods. Structural checks passed, but the recorded reviewer failed relevant_followup. This is a concrete failure example, not proof of its cause or a tested fix.",
      "insights": [
        "Executable model evidence and grounded conversation completion need separate checks.",
        "Structured planning passed two fewer episodes here. Dataset-level repeat averages show one structured win, three generic wins, fifteen nonzero ties and five both-zero ties; no significance claim follows.",
        "The failed launch made no LLM inference calls. The replacement fixed a path defect and changed data seeds and initial-question assignment together; the campaigns are preserved separately and never pooled.",
        "Proposed next work is one artifact-backed anomaly-comparison contract under the same caps, tested on fresh cases. It remains a proposal requiring a new version and evaluation."
      ]
    }
  },
  {
    "id": "bic",
    "featured": false,
    "category": "Neural Learning Research",
    "title": "Brain in Computer (BiC)",
    "status": "Research prototype",
    "githubUrl": "https://github.com/lpaynedev/BiC",
    "caseStudyUrl": "/projects/bic",
    "description": "Small neural learner with verified English curricula, an external local tutor loop, and a CPU demo. Controlled experiments measure instruction learning, retention, and the limits of unfamiliar composition.",
    "tags": [
      "Python",
      "PyTorch",
      "Ollama",
      "Evaluation"
    ],
    "highlights": [
      "Verified curricula with independently checked teaching targets.",
      "External local tutor with bounded lesson choices and tutor-free evaluation.",
      "Matched experiments tracking acquisition and retention separately.",
      "Public CPU inference demo and compact research evidence.",
      "Lower-rate continuation improved acquisition by 24.375 percentage points across 12 equally weighted cells, but failed full promotion.",
      "Unfamiliar composition: 0/96 pairs; sequence: 1/96. Retention: 479/480 checks, with the remaining failure blocking promotion."
    ],
    "disclaimer": "Research prototype. The lower-rate candidate failed full promotion and did not replace the retained home learner. Reliable unfamiliar composition, useful tutor advantage and learned curriculum selection remain unproven. The CPU demo runs tutor-free inference in four fixed scenarios; the embedded website display replays its recorded outputs. Neither is a benchmark or evidence of general reasoning.",
    "caseStudy": {
      "source": "Public CPU demo record and controlled shared-rate comparison",
      "problem": "Learning a practiced instruction does not establish that a model can reuse its meaning in a new procedure. BiC investigates that gap with small, checkable English environments and explicit retention measurements.",
      "approach": [
        "Verify lesson meanings with independent interpreters before using them as teaching targets.",
        "Keep the local tutor outside the learner's evaluation and restrict it to supported lesson choices.",
        "Compare matched continuations while preserving learner and optimizer state.",
        "Report acquisition, retention, and unfamiliar composition separately, including failed comparisons."
      ],
      "example": "Matched continuations used the same inherited learner and optimizer state and identical lesson exposure. Lower learning rate improved acquisition by 24.375 percentage points across 12 equally weighted cells, but unfamiliar composition remained 0/96 and sequence 1/96. One 6.25-point retention loss exceeded the 5-point limit despite 479/480 checks passing. No arm qualified for adoption.",
      "insights": [
        "Improved acquisition and reusable procedural understanding require separate evidence.",
        "Accurate lessons do not prove that the learner has acquired their meanings.",
        "Preserving failed experiments makes the limits of a research system inspectable."
      ]
    },
    "evidenceLinks": [
      {
        "label": "Controlled comparison and failed promotion",
        "href": "https://github.com/lpaynedev/BiC/blob/main/docs/SHARED_RATE_RESULTS.md"
      },
      {
        "label": "CPU demo and its limits",
        "href": "https://github.com/lpaynedev/BiC/blob/main/docs/PUBLIC_DEMO.md"
      },
      {
        "label": "Recorded demo observations",
        "href": "https://github.com/lpaynedev/BiC/blob/main/assets/demo-observations.json"
      }
    ]
  },
  {
    "id": "nasa-cmr-agent",
    "featured": true,
    "category": "AI / Data Search",
    "title": "Earth Science Metadata Agent",
    "status": "Independent assessment prototype",
    "githubUrl": "https://github.com/lpaynedev/NASA_CMR_AGENT",
    "caseStudyUrl": "/projects/nasa-cmr-agent",
    "disclaimer": "Independent assessment prototype, not an official NASA product or an operational service. Searches metadata rather than analyzing Earth-observation data. Recommendations are heuristic, not scientifically validated rankings; live provider behavior and deployment readiness are not established by the test doubles.",
    "description": "An independent prototype for finding Earth science datasets from plain-language questions. It searches NASA’s public metadata API, retrieves related context with Chroma and summarizes returned records using FastAPI and LangGraph.",
    "tags": [
      "Python",
      "FastAPI",
      "LangGraph",
      "NASA CMR",
      "Chroma",
      "pytest"
    ],
    "highlights": [
      "Intent validation and spatial/temporal search parameter planning.",
      "Sequential LangGraph stages with concurrent CMR requests inside search.",
      "Full graph JSON through /query; a separate lightweight HTTP /stream flow.",
      "Focused tests around agent and API boundaries, mostly using test doubles."
    ],
    "caseStudy": {
      "source": "GitHub README: lpaynedev/NASA_CMR_AGENT",
      "problem": "NASA CMR is powerful, but natural-language Earth science questions need to be converted into precise search parameters before collection, granule, and variable search becomes useful. The README calls out that CMR reliability depends on good parameterization, so the project centers on planning and validation before synthesis.",
      "approach": [
        "Separate intent, validation, planning, CMR search, analysis and synthesis into staged graph components.",
        "Convert queries into bounded collection, granule and variable metadata searches. Returned records need not be exhaustive.",
        "Expose the full graph through /query and the CLI. Keep the separate HTTP /stream collection/variable flow explicit; it does not have full graph parity.",
        "Use local Chroma as supporting retrieval context. In-memory conversation history is lost on restart; authentication and deployment hardening remain unfinished."
      ],
      "example": "A precipitation-dataset question can be converted into geography, dates and topic parameters, then searched through public CMR metadata. The /query path returns the graph result; HTTP /stream is a separate, lighter flow. This does not establish scientific suitability or exhaustive search coverage.",
      "insights": [
        "Precise search parameters are an explicit interface boundary; their effect on answer quality still needs evaluation.",
        "An endpoint called stream should describe what actually runs behind it; the HTTP stream and full graph are different paths.",
        "Metadata search, scientific data analysis and validated recommendations require different evidence."
      ]
    },
    "evidenceLinks": [
      {
        "label": "Architecture, endpoints and limitations",
        "href": "https://github.com/lpaynedev/NASA_CMR_AGENT/blob/main/README.md"
      }
    ]
  },
  {
    "id": "autoagent",
    "featured": false,
    "category": "Local AI / Developer Tools",
    "title": "AutoAgent",
    "status": "Experimental prototype",
    "githubUrl": "https://github.com/lpaynedev/AutoAgent",
    "caseStudyUrl": "/projects/autoagent",
    "description": "Local code-review tooling with Ollama-backed critiques, structured findings, stored feedback, and retrieval of earlier examples. Explicit failure handling keeps model and retrieval errors visible.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Ollama",
      "SQLite"
    ],
    "highlights": [
      "Code and file input with structured issue cards.",
      "Local-model critiques with JSON parsing and issue normalization.",
      "SQLite storage for critiques, feedback, and prompt versions.",
      "Embedding retrieval with validation and focused regression checks."
    ],
    "disclaimer": "Experimental local application. Ticket and patch workflows remain experimental; stored feedback does not demonstrate improved review correctness.",
    "caseStudy": {
      "source": "GitHub README: lpaynedev/AutoAgent",
      "problem": "Model-generated code reviews need structured findings, useful context, and clear failures before a developer can assess proposed changes. AutoAgent explores those requirements through a local review workflow.",
      "approach": [
        "Normalize local Ollama responses into structured issues through a Next.js critique endpoint.",
        "Persist critiques, feedback, and prompt versions in SQLite.",
        "Retrieve earlier examples with Ollama embeddings and exact cosine search over a JSON-persisted index.",
        "Reject invalid embeddings and surface model or retrieval failures in the main critique flow."
      ],
      "example": "A developer submits code, receives normalized issue cards informed by earlier examples, and records feedback. If the model or retrieval request fails, the main critique endpoint returns an error for the developer to address.",
      "insights": [
        "Structured findings and visible failures make generated reviews easier to assess.",
        "Feedback acceptance and measured review correctness are different signals.",
        "Retrieval checks can validate storage behavior without establishing model review quality."
      ]
    }
  },
  {
    "id": "smart-image-insights",
    "featured": false,
    "category": "Computer Vision",
    "title": "Smart Image Insights",
    "status": "Inference prototype",
    "githubUrl": "https://github.com/lpaynedev/smart-image-insights",
    "caseStudyUrl": "/projects/smart-image-insights",
    "description": "Multi-image analysis prototype with a Next.js interface and a separate FastAPI inference service. The upload workflow displays YOLOv5 object detections and BLIP scene captions; the backend also includes CLIP/FAISS image retrieval.",
    "tags": [
      "Next.js",
      "FastAPI",
      "YOLOv5",
      "BLIP",
      "CLIP",
      "FAISS"
    ],
    "highlights": [
      "Multi-image upload with per-image analysis and result state.",
      "YOLOv5 object detections and BLIP-generated scene captions.",
      "Separate frontend and model-serving API.",
      "Supporting CLIP embeddings and FAISS retrieval in the backend."
    ],
    "disclaimer": "Source-backed inference prototype. Hosted availability and end-to-end live inference are unverified. No accuracy benchmark or production reliability is established. CLIP/FAISS retrieval is supporting backend code, distinct from the upload interface.",
    "caseStudy": {
      "source": "Public frontend and inference-service implementation",
      "problem": "Image-analysis tools need to connect image upload, model execution, and result presentation. Smart Image Insights explores that workflow with detection and captioning while keeping model-serving responsibilities separate from the web interface.",
      "approach": [
        "Use Next.js and Tailwind for multi-image upload and per-image result presentation.",
        "Send analysis requests to a separate FastAPI inference service that runs YOLOv5 detection and BLIP captioning.",
        "Keep the backend's CLIP/FAISS retrieval capability distinct from the detection-and-caption upload interface.",
        "Present inference failures as retryable errors and keep generated captions distinct from classification results."
      ],
      "example": "A user uploads several images and analyzes them individually. Successful responses show detected objects and a generated caption; a failed request remains an error that the user can retry.",
      "insights": [
        "Per-image state helps a batch workflow stay understandable when one request fails.",
        "Detection, captioning, and retrieval are different capabilities and should be labeled separately.",
        "Separating model serving from the frontend makes deployment boundaries easier to maintain."
      ]
    }
  },
  {
    "id": "fuguely",
    "featured": false,
    "category": "Full-Stack Product",
    "title": "Fuguely",
    "status": "Private-source product prototype",
    "caseStudyUrl": "/projects/fuguely",
    "description": "Music lesson scheduling platform for private teachers and students, connecting studio onboarding, teacher availability, student bookings, messaging, billing workflows, and email confirmations.",
    "tags": [
      "TypeScript",
      "Scheduling",
      "Stripe",
      "Messaging"
    ],
    "highlights": [
      "Teacher onboarding, student rosters, and invitation flows.",
      "Teacher availability and student lesson booking.",
      "Messaging and confirmation emails around the lesson workflow.",
      "Billing, cancellations, refunds, and lesson-credit workflows."
    ],
    "caseStudy": {
      "source": "Private repository README and scheduling/cancellation implementation",
      "problem": "Independent music teachers need to coordinate lesson times, student bookings, messages, and payment state. A useful studio tool must keep those workflows connected while preserving clear rules for availability, cancellations, and credits.",
      "approach": [
        "Separate teacher and student workflows so each role can find its next action quickly.",
        "Model availability, booking, cancellation, and lesson credits as explicit state transitions.",
        "Keep scheduling, billing, and email responsibilities separate so a provider change or delivery failure does not obscure the lesson state."
      ],
      "example": "The implementation connects teacher availability and student booking with confirmation, messaging and billing paths. Cancellation code distinguishes an eligible lesson credit from a payment-method refund. These are source-backed workflows; live provider acceptance was not verified here.",
      "insights": [
        "Scheduling products depend on consistent state across the calendar, communications, and billing.",
        "Complete teacher and student journeys are useful units for product validation.",
        "Clear cancellation and credit rules matter as much as the booking form."
      ]
    },
    "disclaimer": "Private-source implementation with scheduling, messaging and billing integration code. Source inspection does not establish an active beta, payment-provider acceptance, email delivery or production readiness."
  },
  {
    "id": "document-qa-chatbot",
    "category": "Document Search",
    "title": "Document Q&A Search",
    "status": "Keyword-search prototype",
    "caseStudyUrl": "/projects/document-qa-chatbot",
    "description": "Next.js and TypeScript document-search prototype that extracts PDF text and answers queries with keyword-matched snippets and filename references. File limits, bounded parsing, timeout handling, and clear errors support the upload workflow.",
    "tags": [
      "Next.js",
      "TypeScript",
      "PDF.js",
      "Keyword Search",
      "Document Parsing"
    ],
    "highlights": [
      "PDF text extraction with bounded processing.",
      "Keyword-based query matching against document text.",
      "Matched snippets accompanied by source filenames.",
      "Upload limits, timeout handling, and visible error states."
    ],
    "disclaimer": "The current query path returns keyword-matched snippets and filenames, without an LLM or embeddings. Hosted availability and deployed integration are unverified.",
    "caseStudy": {
      "source": "PDF and chat API implementation",
      "problem": "A small document-search tool must make uploaded text usable without letting large files or slow parsing leave the interface stuck. This prototype focuses on bounded PDF processing and a transparent keyword-based retrieval path.",
      "approach": [
        "Extract PDF text with PDF.js in a Node.js API route, with bounded page processing and a limited fallback parser.",
        "Process questions through keyword matching and return relevant document snippets with filename references.",
        "Apply upload limits and client/server timeout handling so failures become visible states.",
        "Keep storage access defensive and distinguish retrieved source text from a generated answer."
      ],
      "example": "A user uploads a PDF and asks about a term in the document. The query route returns matching passages and their filenames when it finds relevant text; upload and parsing failures produce an explanation in the interface.",
      "insights": [
        "Simple retrieval is useful when its limits and source text remain visible.",
        "File-size and parsing limits define the experience just as much as the search logic.",
        "Calling a response a retrieved snippet makes the system's behavior clearer than implying model-generated reasoning."
      ]
    }
  },
  {
    "id": "autopycode",
    "category": "Developer Tools",
    "title": "AutoPyCode",
    "status": "Private-source coding prototype",
    "caseStudyUrl": "/projects/autopycode",
    "description": "Python coding prototype that requests patches from a local Ollama endpoint, checks path and size limits, runs configured quality gates, and records patches, results and reports. Its inspected end-to-end success test supplies a fixed patch through a mock client.",
    "tags": [
      "Python",
      "pytest",
      "CLI",
      "Code Automation",
      "Local-First"
    ],
    "highlights": [
      "Local CLI with bounded patch attempts against a target repository.",
      "Path and change-size checks before patch application.",
      "Configured command gates and inspectable run artifacts.",
      "Scripted integration test with a mock patch; live-model success remains unverified."
    ],
    "caseStudy": {
      "source": "Private repository orchestrator, model client, learner and mock integration test",
      "problem": "Automated coding tools become risky when they hide what changed or skip the same quality gates a developer would run manually. AutoPyCode is framed as a local-only engine that works against a target repository while leaving an auditable trail.",
      "approach": [
        "Request a diff from the default local Ollama endpoint, with a bounded number of attempts.",
        "Validate patch paths and change-size limits before applying a proposed diff.",
        "Run configured command gates and write patches, results and reports for review.",
        "Keep fixed-patch integration tests separate from live-model evaluation. Outcome notes do not establish learned improvement."
      ],
      "example": "The inspected integration test supplies a known correction through MockClient, applies it to a miniature repository, and checks gate results and artifact creation. It exercises orchestration without an Ollama call; it does not establish reliable live coding or model learning.",
      "insights": [
        "A passing gate and a correct solution are separate acceptance questions.",
        "Fixed patches can check orchestration without evaluating a model.",
        "Local defaults and outcome logs are inspectable implementation choices, not proof of network isolation or self-improvement."
      ]
    },
    "disclaimer": "Prototype, not evidence of autonomous self-improvement or accepted OpenClaw integration. The learner component appends outcome notes; measured learning is not established. Default model access is local, but local execution alone does not prove network isolation or a general privacy guarantee."
  }
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export const capabilities = [
  {
    code: "A",
    title: "Full-Stack Product Engineering",
    body: "React / Vite / Next.js / Node / FastAPI / Postgres / API design / booking and billing workflows",
  },
  {
    code: "B",
    title: "AI Systems & Agents",
    body: "LangGraph / RAG / NASA CMR search / retrieval workflows / streaming events / bounded agent state",
  },
  {
    code: "C",
    title: "Local-First Tooling",
    body: "Ollama / SQLite feedback / CLI workflows / bounded patch attempts",
  },
  {
    code: "D",
    title: "Reproducible Engineering",
    body: "Vitest / pytest / Playwright / Docker / seeded runs / release checks / artifacted quality gates",
  },
];

export const resumeSummary =
  "Software engineer building Python APIs and TypeScript/Node.js applications, with C++ systems and ML data-pipeline experience. Applied AI work includes retrieval, structured LLM tool use and automated evaluation.";

export const resumeSkillGroups = [
  { title: "Languages and backend", body: "Python / TypeScript / C++ / SQL / Node.js / FastAPI / REST APIs" },
  { title: "AI applications", body: "LangChain / LangGraph / Ollama / retrieval and RAG / Chroma / tool calling" },
  { title: "Engineering", body: "Docker / Git / pytest / Playwright / CI/CD / data pipelines / authentication" },
];

export const experience = [
  {
    dates: "Sep 2025 - Jun 2026",
    title: "ADNET Systems",
    detail: "Python Software Developer",
    bullets: ["Contributed to software development, testing, and observability for scientific data applications."],
  },
  {
    dates: "Nov 2023 - Nov 2024",
    title: "Verint",
    detail: "Software Engineer",
    bullets: [
      "Developed customer-facing B2B SaaS features in TypeScript and Node.js; investigated defects and implemented product enhancements.",
      "Worked with product and engineering teammates through code review, testing and continuous delivery.",
    ],
  },
  {
    dates: "Jun 2021 - May 2022",
    title: "Naval Surface Warfare Center Dahlgren",
    detail: "Computer Scientist",
    bullets: ["Built Python data-labeling and processing pipelines supporting TensorFlow and YOLOv5 model training with engineering and research teams."],
  },
  {
    dates: "May 2018 - Jun 2021",
    title: "Northrop Grumman and Peraton",
    detail: "Software Engineer",
    bullets: [
      "Developed Python ETL tools for a research project. On a separate project, maintained C++ simulation software, investigated defects and performed integration testing.",
      "Continued employment through the transfer of the Northrop Grumman business to Peraton; supported builds, version control and user training.",
    ],
  },
];

export const resumeProjects = [
  {
    title: "LLM Tool Calling Lab",
    href: "/projects/llm-tool-calling-lab/",
    bullets: ["Built an experimental local chatbot to explore how an LLM can use specialized ML models as tools. It answers questions about numerical data, compares methods and shows recorded results, with limits on model runs and tool calls."],
  },
  {
    title: "Earth Science Metadata Agent",
    href: "/projects/nasa-cmr-agent/",
    bullets: ["Built an independent prototype for finding Earth science datasets from plain-language questions. It searches NASA’s public metadata API, retrieves related context with Chroma and summarizes returned records using FastAPI and LangGraph."],
  },
];

export const additionalExperience = [
  "Freelance AI Software Development",
  "Computer science tutoring in Python, algorithms, object-oriented programming and debugging.",
];

export const education = [
  { degree: "B.S. Computer Science; B.A. Music", school: "University of Mary Washington", location: "Fredericksburg, VA", dates: "2018" },
];

export const ideas = [
  {
    id: "OBS-001",
    type: "Systems",
    theme: "Observability",
    title: "Agents Need Flight Recorders",
    description:
      "Why autonomous systems need logs, traces, replay, and human-readable decision trails before they need more autonomy.",
    href: "/ideas/agents-need-flight-recorders",
  },
  {
    id: "EVAL-001",
    type: "Practice",
    theme: "Evaluation",
    title: "Rubrics Beat Vibes: Evaluating LLM Output",
    description:
      "A short note on why LLM evaluation should be structured, repeatable, and boring enough to trust.",
    href: "/ideas/rubrics-beat-vibes",
  },
  {
    id: "SEC-001",
    type: "Safety",
    theme: "Security",
    title: "Poisoned Context Is the New Supply Chain Risk",
    description:
      "As models read from the web, repos, docs, and tickets, prompt injection and data poisoning become engineering problems, not just security trivia.",
    href: "/ideas/poisoned-context-supply-chain-risk",
  },
  {
    id: "NTE-001",
    type: "Blueprint",
    theme: "Safety",
    title: "Nanotech Safety Blueprint",
    description:
      "Principles for responsible self-replicating nanomachine development with multi-layered safety systems, applying AI-alignment thinking to a physical autonomous domain.",
    href: "/ideas/nanotech-safety",
  },
  {
    id: "NTE-002",
    type: "Thought Exp.",
    theme: "Speculative",
    title: "What If: A Real Unconscious Nanodrone Swarm?",
    description:
      "A thought experiment exploring the plausibility of self-replicating microbots within the next decade, and what guardrails would need to exist first.",
    href: "/ideas/unconscious-nanodrone-swarm",
  },
];
