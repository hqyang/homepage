// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/homepage/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/homepage/publications/";
          },
        },{id: "nav-services",
          title: "Services",
          description: "Help the growth of AI research communities",
          section: "Navigation",
          handler: () => {
            window.location.href = "/homepage/services/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/homepage/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/homepage/books/the_godfather/";
            },},{id: "news-task-wrapped-continual-learning-in-task-oriented-dialogue-systems-appeared-at-naacl-2025-congratulations-to-my-collaborators",
          title: 'Task-wrapped Continual Learning in Task-Oriented Dialogue Systems appeared at NAACL 2025. Congratulations to...',
          description: "",
          section: "News",},{id: "news-parsql-enhancing-text-to-sql-through-sql-parsing-and-reasoning-was-accepted-by-acl-2025-congratulations-to-my-intern-yaxun",
          title: 'PARSQL: Enhancing Text-to-SQL through SQL Parsing and Reasoning was accepted by ACL 2025....',
          description: "",
          section: "News",},{id: "news-glad-to-start-serving-as-area-chair-for-acl-rolling-review-arr",
          title: 'Glad to start serving as Area Chair for ACL Rolling Review (ARR).',
          description: "",
          section: "News",},{id: "news-intrinsic-evaluation-of-unlearning-using-parametric-knowledge-traces-and-let-s-play-across-cultures-a-large-multilingual-multicultural-benchmark-for-assessing-language-models-understanding-of-sports-were-both-accepted-by-emnlp-2025-main-conference-congratulations-to-my-collaborators",
          title: 'Intrinsic Evaluation of Unlearning Using Parametric Knowledge Traces and Let‘s Play Across Cultures:...',
          description: "",
          section: "News",},{id: "news-glad-to-be-invited-to-serve-as-an-area-chair-for-iclr-26",
          title: 'Glad to be invited to serve as an Area Chair for ICLR’26.',
          description: "",
          section: "News",},{id: "news-sparse-adapter-fusion-for-continual-learning-in-nlp-was-accepted-by-ecal-2025-main-conference-congratulations-to-my-collaborators",
          title: 'Sparse Adapter Fusion for Continual Learning in NLP was accepted by ECAL 2025...',
          description: "",
          section: "News",},{id: "news-glad-to-serve-different-roles-for-acl-arr-26-icml-26-ijcai-26-kdd-26-uai-26",
          title: 'Glad to serve different roles for ACL ARR’26, ICML’26, IJCAI’26, KDD’26, UAI’26.',
          description: "",
          section: "News",},{id: "news-reex-sql-reasoning-with-execution-aware-reinforcement-learning-for-text-to-sql-and-beyond-prompt-engineering-a-systematic-analysis-of-prompt-lexical-sensitivity-and-its-impacts-on-quality-appeared-at-acl-2026-congratulations-to-my-collaborators",
          title: 'ReEx-SQL: Reasoning with Execution-Aware Reinforcement Learning for Text-to-SQL and Beyond Prompt Engineering: A...',
          description: "",
          section: "News",},{id: "news-nrityam-language-models-meet-art-and-heritage-of-dance-was-accepted-by-ecml-pkdd-2026-congratulations-to-my-collaborators",
          title: 'NRITYAM: Language Models Meet Art and Heritage of Dance was accepted by ECML...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%61%6E%67%68%61%69%71%69%6E@%73%7A%74%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/hqyang", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/homepage/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=nfijDy4AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
