export function useConstants() {
  const navigation = [
    {
      id: 2,
      name: "스킬",
      href: "/skills",
    },
    {
      id: 6,
      name: "타임라인",
      href: "/timeline",
    },
    {
      id: 3,
      name: "경력",
      href: "/works",
    },
    {
      id: 4,
      name: "개인 프로젝트",
      href: "/projects",
    },
    // {
    //   id: 6,
    //   name: "Blog",
    //   href: "https://my-blog-eazypau.vercel.app/",
    // },
  ];

  const skillWithLogo = [
    {
      imgUrl: "/logos/vuejs-original.svg",
      name: "Vue",
      alt: "Vue logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nuxtjs-original.svg",
      name: "Nuxt",
      alt: "Nuxt logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/tailwindcss-plain.svg",
      name: "TailwindCSS",
      alt: "TailwindCSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/firebase-plain.svg",
      name: "Firebase",
      alt: "Firebase logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/typescript-original.svg",
      name: "TypeScript",
      alt: "TypeScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nestjs-icon.svg",
      name: "NestJS",
      alt: "NestJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/git-original.svg",
      name: "Git",
      alt: "Git logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nosql.svg",
      name: "NoSQL",
      alt: "NoSQL logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/graphql-icon.svg",
      name: "GraphQL",
      alt: "GraphQL logo",
      width: 150,
      height: 150,
    }
  ];

  const projects = [
    {
      isReverse: true,
      title: "Team Firewood",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/teamfirewood.png",
      description: "사이드 프로젝트를 진행하는 팀인 '팀 파이어우드' 소개 페이지",
      techStack: ["NextJS", "TS", "TailwindCSS"],
      isUrl: true,
      urlLink: "https://tfw.kr/",
      // githubLink: "https://github.com/eazypau/my-blog",
    },
    {
      isReverse: true,
      title: "iroun",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/iroun.png",
      description: "개발자들이 모여 봉사활동을 하는 봉사팀 '이로운' 소개 페이지",
      techStack: [
        "NextJS",
        "TS",
        "TailwindCSS",
        "Firebase",
      ],
      isUrl: true,
      urlLink: "https://iroun.org/",
      githubLink: "https://github.com/KimEJ/iroun.git",
    },
    {
      isReverse: false,
      title: "WRaThioN",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/WRaThioN.png",
      description:
        "비공식 파이썬 뤼튼(https://wrtn.ai/) 클라이언트",
      techStack: [
        "Python3",
        "pyjwt"
      ],
      isUrl: true,
      // urlLink: "https://eazy-chat-app.netlify.app/login",
      githubLink: "https://github.com/KimEJ/WRaThioN",
    }
  ];

  const workingProjects = [
    {
      name: "TecpPLEX",
      description: "TechPLEX는 무선 네트워크 기술을 연구하는 회사입니다.\n저는 TechPLEX에서 임베디드 개발부터 웹 개발까지 다양한 프로젝트를 경험했습니다.",
      techStack: ["Vue", "TS", "electron.js", "AWS", "mongoDB"],
      projects: [
        {
          image: {
            src: "/work/techplex/cm-tool/main.png",
            alt: "cm tool",
            width: "410",
            height: "117",
            maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
          },
          imageShowcase: [
            {
              title: "메인 화면",
              src: "/work/techplex/cm-tool/main.png",
              alt: "메인 화면",
              width: "800",
              height: "446",
            },
          ],
          teamMembers: [],
          heading: "CM Tool",
          description:
            "CM Tool은 TechPLEX에서 개발한 LTE모뎀을\n"+
            "컨트롤 하는 데스크탑 프로그램 입니다.\n"+
            "이 프로그램은 TechPLEX에서 개발한\n"+
            "LTE모뎀의 펌웨어 업데이트, 설정 변경 등\n"+
            "제어를 할 수 있습니다.\n\n",
          techStack: ["electron.js", "Vue", "TS"],
          urls: [],
        },
        {
          image: {
            src: "/work/techplex/bike/web-main.png",
            alt: "bike app main",
            width: "410",
            height: "117",
            maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
          },
          imageShowcase: [
            {
              title: "시스템 개요",
              src: "/work/techplex/bike/overview.png",
              alt: "시스템 개요",
              width: "800",
              height: "446",
            },
            {
              title: "앱 메인화면",
              src: "/work/techplex/bike/app-main.png",
              alt: "메인화면",
              width: "800",
              height: "446",
            },
            {
              title: "웹 메인화면",
              src: "/work/techplex/bike/web-main.png",
              alt: "메인화면",
              width: "800",
              height: "446"
            },
            {
              title: "웹 자전거 위치 상세화면",
              src: "/work/techplex/bike/web-gps.png",
              alt: "위치 상세 화면",
              width: "800",
              height: "446"
            }
          ],
          teamMembers: [],
          heading: "단말 시스템 프레임워크 개발",
          description:
            "TechPLEX에서 개발한 LTE모뎀을 기반으로\n"+
            "제작되는 단말의 제어 프레임워크를 개발하는\n"+
            "프로젝트였습니다.\n\n"+
            "단말을 직접 제어할 수 있는 데스크탑 앱과\n"+
            "단말의 상태를 기록하고 제어할 수 있는 서버 및\n"+
            "웹 앱으로 구성되어 있습니다.\n\n"+
            "저는 데스크탑 앱과 서버 및 웹 앱의 개발을 담당했습니다.",
          techStack: ["bootstrap", "electron.js", "Vue", "TS", "AWS", "Node.js"],
          urls: [],
        },
        {
          image: {
            src: "/work/techplex/car-tracking/main.png",
            alt: "car tracking system",
            width: "410",
            height: "117",
            maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
          },
          imageShowcase: [
            {
              title: "시스템 개요",
              src: "/work/techplex/car-tracking/overview.png",
              alt: "시스템 개요",
              width: "800",
              height: "446",
            },
            {
              title: "메인화면",
              src: "/work/techplex/car-tracking/main.png",
              alt: "메인화면",
              width: "800",
              height: "446",
            },
            {
              title: "차량 운행 기록 화면",
              src: "/work/techplex/car-tracking/detail.png",
              alt: "차량 운행 기록 화면",
              width: "800",
              height: "404",
            },
          ],
          teamMembers: [],
          heading: "차량 트래킹 시스템",
          description: 
          "차량 트래킹 시스템은 TechPLEX에서 개발한\n"+
          "LTE모뎀을 기반으로 한 차량 운행 기록 단말기와\n"+
          "node.js, mongoDB, docker를 이용한 서버 및\n"+
          "웹 앱으로 구성되어 있습니다.\n\n"+
          "차량 운행 기록 단말기는 차량에 부착되어\n"+
          "운행 기록을 수집하고, 웹 앱은 수집된\n"+
          "운행 기록을 시각화하여 보여주는 시스템이었습니다.\n"+
          "저의 도메인은 서버 및 웹 앱의 개발이었습니다.",
          techStack: ["Vue", "TS", "mongoDB", "bootstrap", "Node.js", "docker"],
          urls: [],
        },
        {
          image: {
            src: "/work/techplex/6G/interfaceCheck.png",
            alt: "6G interface check",
            width: "410",
            height: "117",
            maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
          },
          imageShowcase: [
            {
              title: "시스템 개요",
              src: "/work/techplex/6G/overview.png",
              alt: "시스템 개요",
              width: "800",
              height: "446",
            },
            {
              title: "인터페이스 체크 화면",
              src: "/work/techplex/6G/interfaceCheck.png",
              alt: "인터페이스 체크 화면",
              width: "800",
              height: "446",
            },
            {
              title: "파일 전송 테스트 화면",
              src: "/work/techplex/6G/FileSend.png",
              alt: "파일 전송 테스트 화면",
              width: "800",
              height: "446",
            },
            {
              title: "전송 속도 테스트 화면",
              src: "/work/techplex/6G/RXTX.png",
              alt: "전송 속도 테스트 화면",
              width: "800",
              height: "446",
            }
          ],
          teamMembers: [],
          heading: "6G 테스트 시스템",
          description: 
          "6G 테스트 시스템은 TechPLEX에서 외부 업체와 진행한\n"+
          "6G 기지국 시험 환경을 테스트 및 모니터링 하는\n"+
          "시스템으로 외부 업체에서 제공한 기지국을\n"+
          "TechPLEX에서 개발한 테스트베드에서\n"+
          "테스트하고, 테스트 결과를 모니터링하는 시스템 입니다.\n\n"+
          "이 프로젝트에서 저는 electron.js 기반의\n"+
          "테스트 프로그램을 개발했습니다.",
          techStack: ["Vue", "TS", "electron.js"],
          urls: [],
        },
      ],
    },
    {
      name: "InterPass",
      description: "InterPass는 버스 등 대중교통 시스템을 유지보수하는 회사입니다.\n"+
      "저는 InterPass에서 node.js 기반의 백엔드 개발자로서의 경험을 다졌습니다.",
      techStack: ["Node.js", "TS", "Nest", "MySQL", "GraphQL"],
      projects: [
        {
          image: {
            src: "/work/interpass/taxi-erp/main.png",
            alt: "taxi erp",
            width: "410",
            height: "117",
            maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
          },
          imageShowcase: [
            {
              title: "로그인 화면",
              src: "/work/interpass/taxi-erp/main.png",
              alt: "로그인 화면",
              width: "800",
              height: "446",
            },
            {
              title: "입출고 관리",
              src: "/work/interpass/taxi-erp/inout.png",
              alt: "입출고 관리",
              width: "800",
              height: "446",
            },
            {
              title: "입출고 요청 관리",
              src: "/work/interpass/taxi-erp/request.png",
              alt: "입출고 요청 관리",
              width: "800",
              height: "446",
            },
            {
              title: "수리 관리",
              src: "/work/interpass/taxi-erp/fix.png",
              alt: "수리 관리",
              width: "800",
              height: "446",
            },
            {
              title: "재고 관리",
              src: "/work/interpass/taxi-erp/stock.png",
              alt: "재고 관리",
              width: "800",
              height: "446",
            },
            {
              title: "차량 관리",
              src: "/work/interpass/taxi-erp/taxi.png",
              alt: "차량 관리",
              width: "800",
              height: "446",
            },
          ],
          teamMembers: [],
          heading: "택시 유지보수 업무 관리 시스템",
          description:
          "택시 유지보수 업무 관리 시스템은\n"+
          "새로 시작된 택시 유지보수 업무를\n"+
          "디지털화하여 관리하는 시스템이었습니다.",
          techStack: ["Nest", "TS", "GraphQL", "MySQL", "Vue", "Vuetify"],
          urls: [],
        },
        {
          image: {
            src: "/work/interpass/bus-erp/main.png",
            alt: "interpass",
            width: "410",
            height: "117",
            maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
          },
          imageShowcase: [
            {
              title: "시스템 개요",
              src: "/work/interpass/bus-erp/overview.png",
              alt: "시스템 개요",
              width: "800",
              height: "446",
            },
            {
              title: "로그인 화면",
              src: "/work/interpass/bus-erp/main.png",
              alt: "로그인 화면",
              width: "800",
              height: "446",
            },
            {
              title: "대시보드",
              src: "/work/interpass/bus-erp/dashboard.png",
              alt: "대시보드",
              width: "800",
              height: "446",
            },
            {
              title: "업무 관리",
              src: "/work/interpass/bus-erp/service.png",
              alt: "업무 관리",
              width: "800",
              height: "446",
            },
          ],
          teamMembers: [],
          heading: "버스 유지보수 업무 관리 시스템",
          description: 
          "버스 유지보수 업무 관리 시스템은\n"+
          "기존의 아날로그방식의 업무와 재고 관리 체계를\n"+
          "디지털화하여 관리하는 시스템이었습니다.\n\n"+
          "저는 이 프로젝트에서 백엔드 및 웹 개발을 담당했습니다.",
          techStack: ["Nest", "TS", "GraphQL", "MySQL", "Vue", "Vuetify"],
          urls: [],
        },
      ],
    }
  ];

  const timeline = [
    {
      date: "2023. 02",
      title: "한양사이버대학교 입학",
      description:
        "한양사이버대학교 응용소프트웨어공학과에 입학하여 블록체인과 프로그래밍 교육 등 경험해 보지 못한 분야를 배우며 학사과정을 이수하고 있습니다.",
      link: {
        text: "홈페이지",
        url: "https://www.hycu.ac.kr/",
      },
    },
    {
      date: "2022. 08",
      title: "인터패스 입사",
      description:
        "인터패스에서 node.js와 mysql기반의 백엔드 개발자로서의 경험과 기술을 다듬었습니다.",
      // link: {
      //   text: "홈페이지",
      //   url: "https://www.interpark.com/",
      // },
    },
    {
      date: "2018. 10",
      title: "테크플렉스 입사",
      description:
        "테크플렉스에서 임베디드, 앱, 웹 등 개발자로서의 다양한 포지션과 프로젝트를 경험하며 성장했습니다. 또, 이런 경험을 바탕으로 node.js 기반의 백엔드 개발자로의 포지션을 결정하게 되었습니다.",
      link: {
        text: "홈페이지",
        url: "http://www.techplex.co.kr/main/",
      },
    },
    {
      date: "2016. 02",
      title: "대덕소프트웨어마이스터고등학교 졸업",
      description:
        "대덕소프트웨어마이스터고등학교에서 개발자로서의 기본기를 다졌습니다.",
      link: {
        text: "홈페이지",
        url: "https://dsmhs.djsch.kr/main.do",
      },
    },
  ];

  return {
    navigation,
    skillWithLogo,
    projects,
    workingProjects,
    timeline,
  };
}
