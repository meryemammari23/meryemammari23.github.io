// Compétences par catégorie.
// items  : ce que tu maîtrises (pastilles pleines)
// basics : ce que tu connais en bases (pastilles discrètes, sous « Bases »)
// icon   : code | brain | chart | server | layout | db | cloud | tool | cpu
export const skills = [
  {
    icon: 'code', en: 'Programming Languages', fr: 'Langages de programmation',
    items: ['Python', 'Java', 'C', 'C++', 'C#', 'SQL', 'HTML / CSS'],
    basics: ['JavaScript', 'PHP', 'Bash / Shell', 'TypeScript'],
  },
  {
    icon: 'brain', en: 'AI & Machine Learning', fr: 'IA & Machine Learning',
    items: ['Scikit-learn', 'sentence-transformers', 'PaddleOCR', 'RapidOCR / ONNX Runtime', 'Tesseract OCR', 'Gradient Boosting', 'Isolation Forest', 'Ollama (local LLM)', 'LLM APIs (Gemini, OpenAI)', 'RAG'],
    basics: ['PyTorch', 'TensorFlow / Keras'],
  },
  {
    icon: 'chart', en: 'Data Science & Data Analysis', fr: 'Data Science & analyse de données',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Jupyter', 'Google Colab'],
    basics: ['Seaborn', 'Plotly', 'Excel / openpyxl', 'Tableau'],
  },
  {
    icon: 'server', en: 'Backend Development', fr: 'Développement backend',
    items: ['Spring Boot', 'Spring Security (JWT)', 'Spring Data JPA / Hibernate', 'ASP.NET Core MVC / Web API', 'Entity Framework', 'ADO.NET', 'FastAPI', 'Django / Django REST', 'Swagger / OpenAPI'],
    basics: ['Jakarta EE', 'SQLModel / SQLAlchemy', 'Node.js / Express', 'WebSocket', 'Symfony'],
  },
  {
    icon: 'layout', en: 'Frontend Development', fr: 'Développement frontend',
    items: ['Angular'],
    basics: ['Bootstrap', 'Vite', 'React'],
  },
  {
    icon: 'db', en: 'Databases', fr: 'Bases de données',
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'SQL Server'],
    basics: [],
  },
  {
    icon: 'cloud', en: 'DevOps, Cloud & Systems', fr: 'DevOps, cloud & systèmes',
    items: ['Docker', 'Docker Compose', 'Git (branches, merge)', 'GitLab CI', 'Ansible', 'Maven'],
    basics: ['GitHub Actions', 'AWS', 'Azure', 'Google Cloud', 'Linux', 'Nginx', 'RabbitMQ', 'Kafka', 'SonarQube', 'Jenkins', 'Prometheus / Grafana', 'Kubernetes'],
  },
  {
    icon: 'tool', en: 'Tools, Testing & Methods', fr: 'Outils, tests & méthodes',
    items: ['Postman', 'JUnit', 'GitHub / GitLab', 'Jira', 'Scrum / Agile', 'UML (StarUML, Draw.io)', 'MERISE', 'Design patterns (MVC, Repository, Singleton, Strategy)', 'Microservices architecture', 'n8n', 'VS Code / IntelliJ / Eclipse / Visual Studio', 'XAMPP / phpMyAdmin'],
    basics: ['pytest'],
  },
  {
    icon: 'cpu', en: 'IoT & Systems', fr: 'IoT & systèmes',
    items: ['ESP8266 / Arduino', 'Parallel programming (threads, mutex)'],
    basics: ['Sensors (DHT11…)', 'Networks & security'],
  },
];
