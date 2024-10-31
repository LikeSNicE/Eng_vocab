const vocabulary = [
  {
    id: "1",
    english: "algorithm",
    russian: ["алгоритм", "метод"],
    sentences: {
      english: [
        "An algorithm is a step-by-step procedure for solving a problem.",
        "Sorting algorithms are essential for efficient data processing.",
      ],
      russian: [
        "алгоритм — это пошаговая процедура для решения задачи.",
        "сортировочные алгоритмы необходимы для эффективной обработки данных.",
      ],
    },
    definition:
      "a process or set of rules to be followed in calculations or other problem-solving operations",
  },
  {
    id: "2",
    english: "database",
    russian: ["база данных", "бд"],
    sentences: {
      english: [
        "A database is an organized collection of data.",
        "SQL is commonly used to interact with databases.",
      ],
      russian: [
        "база данных — это организованная коллекция данных.",
        "SQL часто используется для взаимодействия с базами данных.",
      ],
    },
    definition:
      "an integrated collection of data records or files that is stored in one or more common computers",
  },
  {
    id: "3",
    english: "frontend",
    russian: ["фронтенд", "исполнительная часть", "клиентская часть"],
    sentences: {
      english: [
        "The frontend is the part of a website that users interact with.",
        "Frontend developers use HTML, CSS, and JavaScript.",
      ],
      russian: [
        "фронтенд — это та часть сайта, с которой взаимодействуют пользователи.",
        "разработчики фронтенда используют HTML, CSS и JavaScript.",
      ],
    },
    definition:
      "the visual part of a website or application that users engage with directly",
  },
  {
    id: "4",
    english: "backend",
    russian: ["бэкенд", "серверная часть"],
    sentences: {
      english: [
        "The backend is responsible for managing the database and server-side logic.",
        "Backend developers often work with server languages like Python or Ruby.",
      ],
      russian: [
        "бэкенд отвечает за управление базой данных и логикой на стороне сервера.",
        "разработчики бэкенда часто работают с языками сервера, такими как Python или Ruby.",
      ],
    },
    definition:
      "the server side of an application, which handles the logic and database management",
  },
  {
    id: "5",
    english: "cloud computing",
    russian: ["облачные вычисления", "удаленные серверы"],
    sentences: {
      english: [
        "Cloud computing allows users to access data and applications over the internet.",
        "Many companies are moving to cloud computing for better scalability.",
      ],
      russian: [
        "облачные вычисления позволяют пользователям получать доступ к данным и приложениям через интернет.",
        "многие компании переходят на облачные вычисления для лучшей масштабируемости.",
      ],
    },
    definition:
      "the delivery of computing services over the internet, allowing for flexible resources and faster innovation",
  },

  {
    id: "6",
    english: "API",
    russian: ["api", "интерфейс", "программный интерфейс"],
    sentences: {
      english: [
        "An API allows different software applications to communicate with each other.",
        "Developers use APIs to integrate third-party services.",
      ],
      russian: [
        "api позволяет различным программным приложениям взаимодействовать друг с другом.",
        "разработчики используют api для интеграции сторонних сервисов.",
      ],
    },
    definition:
      "a set of rules and protocols for building and interacting with software applications",
  },
  {
    id: "7",
    english: "server",
    russian: ["сервер"],
    sentences: {
      english: [
        "A server is a computer designed to process requests and deliver data to other computers over a network.",
        "Web servers host websites and serve content to users.",
      ],
      russian: [
        "сервер — это компьютер, предназначенный для обработки запросов и доставки данных другим компьютерам по сети.",
        "веб-серверы хранят веб-сайты и предоставляют контент пользователям.",
      ],
    },
    definition:
      "a computer or system that provides data to other computers in a network",
  },
  {
    id: "8",
    english: "framework",
    russian: ["фреймворк", "каркас", "система"],
    sentences: {
      english: [
        "A framework provides a foundation for developing software applications.",
        "Popular JavaScript frameworks include React and Angular.",
      ],
      russian: [
        "фреймворк предоставляет основу для разработки программных приложений.",
        "популярные фреймворки javascript включают react и angular.",
      ],
    },
    definition: "a basic structure underlying a system, concept, or text",
  },
  {
    id: "9",
    english: "version control",
    russian: ["система контроля версий", "контроль версий"],
    sentences: {
      english: [
        "Version control systems help track changes to code over time.",
        "Git is a popular version control system used by developers.",
      ],
      russian: [
        "системы контроля версий помогают отслеживать изменения в коде с течением времени.",
        "git — популярная система контроля версий, используемая разработчиками.",
      ],
    },
    definition:
      "a system for managing changes to documents, computer programs, and other collections of information",
  },
  {
    id: "10",
    english: "debugging",
    russian: ["отладка", "дебаггинг"],
    sentences: {
      english: [
        "Debugging is the process of finding and fixing errors in software code.",
        "Developers spend a lot of time debugging their applications.",
      ],
      russian: [
        "отладка — это процесс поиска и исправления ошибок в программном коде.",
        "разработчики тратят много времени на отладку своих приложений.",
      ],
    },
    definition:
      "the process of identifying and removing errors from computer hardware or software",
  },
  {
    id: "11",
    english: "open source",
    russian: ["открытый исходный код"],
    sentences: {
      english: [
        "Open source software allows users to view and modify the source code.",
        "Linux is a well-known example of open source software.",
      ],
      russian: [
        "программное обеспечение с открытым исходным кодом позволяет пользователям просматривать и изменять исходный код.",
        "linux — известный пример программного обеспечения с открытым исходным кодом.",
      ],
    },
    definition:
      "software that is released with a license that allows anyone to inspect, modify, and enhance it",
  },
  {
    id: "12",
    english: "cloud storage",
    russian: ["облачное хранилище", "хранилище данных"],
    sentences: {
      english: [
        "Cloud storage allows users to save data online and access it from anywhere.",
        "Services like Google Drive offer cloud storage solutions.",
      ],
      russian: [
        "облачное хранилище позволяет пользователям сохранять данные онлайн и получать к ним доступ из любого места.",
        "сервисы, такие как google drive, предлагают решения для облачного хранения.",
      ],
    },
    definition:
      "a model of computer data storage in which the digital data is stored in logical pools",
  },
  {
    id: "13",
    english: "cybersecurity",
    russian: ["кибербезопасность", "безопасность"],
    sentences: {
      english: [
        "Cybersecurity is essential for protecting sensitive data from cyber threats.",
        "Organizations invest in cybersecurity measures to safeguard their information.",
      ],
      russian: [
        "кибербезопасность необходима для защиты конфиденциальных данных от киберугроз.",
        "организации инвестируют в меры кибербезопасности для защиты своей информации.",
      ],
    },
    definition:
      "the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks",
  },
  {
    id: "14",
    english: "machine learning",
    russian: ["машинное обучение", "моделирование", "алгоритмы"],
    sentences: {
      english: [
        "Machine learning enables computers to learn from data and improve their performance over time.",
        "Applications of machine learning include image recognition and natural language processing.",
      ],
      russian: [
        "машинное обучение позволяет компьютерам учиться на данных и улучшать свою производительность со временем.",
        "применения машинного обучения включают распознавание изображений и обработку естественного языка.",
      ],
    },
    definition:
      "a branch of artificial intelligence that focuses on the use of data and algorithms to imitate the way that humans learn",
  },
  {
    id: "15",
    english: "UI/UX design",
    russian: ["дизайн интерфейсов", "ui/ux дизайн"],
    sentences: {
      english: [
        "UI/UX design focuses on creating user-friendly interfaces and experiences.",
        "Good UI/UX design improves user satisfaction and engagement.",
      ],
      russian: [
        "дизайн интерфейсов сосредоточен на создании удобных для пользователей интерфейсов и опыта.",
        "хороший ui/ux дизайн улучшает удовлетворенность и вовлеченность пользователей.",
      ],
    },
    definition:
      "the process of enhancing user satisfaction by improving the usability and accessibility of a product",
  },
  {
    id: "16",
    english: "data analysis",
    russian: ["анализ данных", "исследования"],
    sentences: {
      english: [
        "Data analysis involves inspecting and interpreting data to uncover useful information.",
        "Businesses rely on data analysis for making informed decisions.",
      ],
      russian: [
        "анализ данных включает в себя исследование и интерпретацию данных для выявления полезной информации.",
        "бизнес полагается на анализ данных для принятия обоснованных решений.",
      ],
    },
    definition:
      "the process of evaluating data with the aim of discovering useful information",
  },
  {
    id: "17",
    english: "big data",
    russian: ["большие данные", "биг дата"],
    sentences: {
      english: [
        "Big data refers to data sets that are too large or complex for traditional data-processing software.",
        "Companies analyze big data to gain insights into customer behavior.",
      ],
      russian: [
        "большие данные относятся к наборам данных, которые слишком велики или сложны для обработки традиционным ПО.",
        "компании анализируют большие данные для получения информации о поведении клиентов.",
      ],
    },
    definition:
      "extremely large data sets that may be analyzed computationally to reveal patterns, trends, and associations",
  },
  {
    id: "18",
    english: "blockchain",
    russian: ["блокчейн", "цепочка блоков"],
    sentences: {
      english: [
        "Blockchain technology enables secure and transparent transactions.",
        "Many cryptocurrencies are built on blockchain technology.",
      ],
      russian: [
        "технология блокчейн обеспечивает безопасные и прозрачные транзакции.",
        "многие криптовалюты построены на технологии блокчейн.",
      ],
    },
    definition:
      "a system in which a record of transactions made in bitcoin or another cryptocurrency is maintained across several computers",
  },
  {
    id: "19",
    english: "artificial intelligence",
    russian: ["искусственный интеллект", "ai"],
    sentences: {
      english: [
        "Artificial intelligence is the simulation of human intelligence in machines.",
        "AI can perform tasks such as speech recognition and decision-making.",
      ],
      russian: [
        "искусственный интеллект — это симуляция человеческого интеллекта в машинах.",
        "ai может выполнять такие задачи, как распознавание речи и принятие решений.",
      ],
    },
    definition:
      "the capability of a machine to imitate intelligent human behavior",
  },
  {
    id: "20",
    english: "internet of things",
    russian: ["интернет вещей", "iot"],
    sentences: {
      english: [
        "The Internet of Things refers to the interconnected nature of devices and systems.",
        "Smart home devices are a part of the Internet of Things.",
      ],
      russian: [
        "интернет вещей относится к взаимосвязанной природе устройств и систем.",
        "умные домашние устройства являются частью интернета вещей.",
      ],
    },
    definition:
      "the interconnection via the internet of computing devices embedded in everyday objects",
  },
];

export { vocabulary };
