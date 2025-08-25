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
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Tell me and I forget. Teach me and I remember. Involve me and I learn. – Benjamin Franklin",
          section: "Navigation",
          handler: () => {
            window.location.href = "/homepage/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/homepage/books/the_godfather/";
            },},{id: "news-parsql-enhancing-text-to-sql-through-sql-parsing-and-reasoning-was-acceptec-by-acl-2025-congratulations-to-my-intern-yaxun",
          title: 'PARSQL: Enhancing Text-to-SQL through SQL Parsing and Reasoning was acceptec by ACL 2025....',
          description: "",
          section: "News",},{id: "news-parsql-enhancing-text-to-sql-through-sql-parsing-and-reasoning-was-acceptec-by-acl-2025-congratulations-to-my-intern-yaxun",
          title: 'PARSQL: Enhancing Text-to-SQL through SQL Parsing and Reasoning was acceptec by ACL 2025....',
          description: "",
          section: "News",},{id: "news-glad-to-start-serving-as-area-chair-for-acl-rolling-review-arr",
          title: 'Glad to start serving as Area Chair for ACL Rolling Review (ARR)',
          description: "",
          section: "News",},{id: "news-let-s-play-across-cultures-a-large-multilingual-multicultural-benchmark-for-assessing-language-models-understanding-of-sports-and-intrinsic-evaluation-of-unlearning-using-parametric-knowledge-traces-were-both-accepted-by-emnlp-2025-main-conference-congratulations-to-my-collaborators-and-my-intern-yihuai",
          title: 'Let‘s Play Across Cultures: A Large Multilingual, Multicultural Benchmark for Assessing Language Models’...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%61%6E%67%68%61%69%71%69%6E@%73%7A%74%75.%65%64%75.%63%6E", "_blank");
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
