export interface PortfolioCompany {
  name: string;
  logo?: string;
}

export interface Investor {
  id: string;
  name: string;
  type: string;
  title: string;
  stages: string[];
  industries: string[];
  logoUrl: string;
  about: string;
  investments: number | null;
  socials: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  portfolioCompanies: string[];
  portfolioLogos: PortfolioCompany[];
  pocName: string;
  pocTitle: string;
  pocLinkedin: string;
  pocPhoto: string;
}

export const investorsData: Investor[] = [
  {
    "id": "100x-vc",
    "name": "100X.VC",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "Edtech",
      "Mobility",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac251_168.%20Shobana%20Prakash.webp",
    "about": "100X.VC stands as India's pioneering venture fund that employs iSAFE Notes for investments in early-stage startups. As a SEBI Registered CAT I AIF and Investment Adviser, it holds the distinction of being the first institutional investor in this realm. Beyond mere investment, 100X.VC assumes multiple roles for the startups it backs — acting as a coach, strategic consultant, investment banker, business mentor, and reliable advisor. Through this comprehensive approach, the firm collaborates closely with founders, aiding them in securing subsequent rounds of funding and guiding them toward sustainable growth. The average investment size of 100x.vc is around $60k.",
    "investments": 127,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/100x-vc/",
      "twitter": "",
      "website": "https://www.100x.vc/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "Shobana Prakash",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "3one4-cap",
    "name": "3one4 cap",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed",
      "Early"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac043_image%2064.webp",
    "about": "3one4 Capital, headquartered in Bangalore, is an early-stage venture capital firm focused on funding promising market sectors poised for growth and innovation. With a portfolio of 21 companies across diverse industries such as enterprise automation, drone technologies, ed-tech, fin-tech, media, multi-lingual content generation, and high-margin niche retail, 3one4 Capital demonstrates its commitment to backing unique and transformative products and services. Their investment range spans from $300K to $5 million, allowing them to support startups at various stages of development. By identifying and investing in emerging sectors, 3one4 Capital plays a pivotal role in nurturing the next wave of innovative startups in India.",
    "investments": 60,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/goelsonali/",
      "twitter": "https://twitter.com/sonaligoel16",
      "website": "https://www.3one4capital.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "Sonali Goel",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "91springboard",
    "name": "91springboard",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech"
    ],
    "logoUrl": "",
    "about": "91Springboard is a venture capital firm based out of Delhi that was founded in 2012. The firm invests in early-stage startups that are focused on the areas of AI and ML, commerce and shopping, and community and lifestyle. 91Springboard's investment philosophy is to partner with startups that have the potential to make a significant impact on their respective industries. The firm looks for startups that are led by strong teams with a clear vision for the future. 91Springboard also seeks out startups that are operating in markets with large addressable audiences. Some of the startups that 91Springboard has invested in include Almaconnect, Finly, Logicroots, and 4 other startups. These startups are all at different stages of development, but they all have the potential to disrupt their respective industries. 91Springboard is committed to helping startups succeed. The firm provides its portfolio companies with access to a wide range of resources and support, including capital, mentorship, and advice. 91Springboard also helps its portfolio companies connect with potential investors and partners.",
    "investments": 7,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/91springboard/",
      "twitter": "",
      "website": "https://www.91springboard.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": ""
  },
  {
    "id": "haptik-inc",
    "name": "Aakrit Vaish",
    "type": "Angel Investor",
    "title": "CoFounder & CEO at Haptik Inc.",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Media"
    ],
    "logoUrl": "",
    "about": "Aakrit Vaish, as the CoFounder and CEO of Haptik, played a pioneering role in the inception of conversational AI, leading the charge since 2013. Today, Haptik stands as one of the globe's most prominent entities in this field, maintaining a strong presence in New York, Los Angeles, Mumbai, Singapore, and catering to over 100 major enterprise clients including industry giants like KFC, Samsung, CocaCola, Oyo Rooms, Kotak Life, and Dream11. A watershed moment arrived in April 2019 when Reliance Industries acquired a majority shareholding in Haptik for $100 million, solidifying its status as one of the world's most valuable AI companies. Aakrit's strategic vision has been instrumental in driving Haptik's ascent to global prominence. Beyond Haptik, Aakrit's influence extends into the startup ecosystem. As an investor, he has actively backed ventures in the domains of consumer technology and B2B SaaS. His portfolio includes noteworthy investments such as Unacademy (valued at over $200 million), Third Wave Coffee, Dataweave, Haikujam (backed by Lightbox), Flatchat (acquired by Commonfloor in 2014), Tookitaki, Dil Mil, Ayopop, iON Energy, and Talent Litmus, among others.",
    "investments": 26,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/aakrit/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "aavishkaar-group",
    "name": "Aavishkaar group",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early",
      "Growth"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac076_Aavishkaar.webp",
    "about": "Aavishkaar is an impact investment firm that started in 2001, with a focus on investing in sustainable enterprises that drive development impact for underserved communities globally. Initially centered in India, Aavishkaar has expanded its operations to South and Southeast Asia, leveraging the lessons learned from its investments.",
    "investments": 16,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sanskritikapoor30/",
      "twitter": "",
      "website": "https://aavishkaarcapital.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Aavishkaar group",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1a1_GoBolt.svg"
      },
      {
        "name": "Aavishkaar group",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1a3_chqbook.svg"
      }
    ],
    "pocName": "Sanskriti Kapoor",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "hav",
    "name": "Abdul Paravengal",
    "type": "Angel Investor",
    "title": "Co-founder & CEO at Hav.",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "SaaS",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac22f_125.%20Abdul%20Paravengal.webp",
    "about": "Abdul Paravengal is an Angel Investor from Indonesia. Prominent investment areas are Manufacturing, Real Estate, Commerce and Shopping and has invested in startups like Crib, Settl., & Prodo.",
    "investments": 3,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/abdulgafoorme/?originalSubdomain=id",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Hav.",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac26d_Crib.svg"
      },
      {
        "name": "Hav.",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac26e_Settl.svg"
      },
      {
        "name": "Hav.",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac26f_Prodo.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "tracxn",
    "name": "Abhishek Goyal",
    "type": "Angel Investor",
    "title": "Founder at Tracxn",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac209_161.%20Abhishek%20Goyal.webp",
    "about": "Abhishek Goyal is a prominent figure in the entrepreneurial and investment landscape, known for his roles as the Co-Founder of Tracxn and the Founder & CEO of UrbanTouch.com. Before embarking on his entrepreneurial journey, he honed his skills and expertise as an Associate at the prestigious venture capital firm, Accel Partners. Tracxn, the venture co-founded by Abhishek Goyal, is dedicated to building the largest and most comprehensive platform for tracking innovative startups, private companies, and emerging sectors on a global scale. With a mission to provide valuable insights to investors and Global 2000 Corporates, Tracxn diligently monitors thousands of signals from millions of companies. This vast and detailed data repository empowers investors and corporates to effortlessly explore and stay updated on sectors of their interest. At UrbanTouch.com, another venture founded by Abhishek Goyal, he demonstrated his entrepreneurial vision and leadership by establishing a successful online platform. The company played a significant role in the e-commerce landscape, offering a wide range of products and services to customers. Abhishek's journey as an entrepreneur and investor reflects his deep passion for technology, innovation, and identifying opportunities for growth. His experiences at both Tracxn and UrbanTouch.com have contributed to his expertise in tracking and understanding the dynamics of startups, private companies, and emerging sectors. Through his endeavors, Abhishek Goyal continues to leave a lasting impact on the tech industry, empowering investors and corporates with invaluable insights to make informed decisions in an ever-evolving business landscape.",
    "investments": 43,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/abhishekgoyal/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Tracxn",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2c9_Bobble%20AI.svg"
      },
      {
        "name": "Tracxn",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2ca_Vahak.svg"
      },
      {
        "name": "Tracxn",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac294_GoKwik.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "lightspeed-india",
    "name": "Abhishek Nag",
    "type": "Angel Investor",
    "title": "Parter at Lightspeed India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1f7_192.%20Abhishek%20Nag.webp",
    "about": "Hailing from Mumbai, Abhishek Nag is a distinguished Angel Investor with a reputation for making strategic investments that drive innovation and growth. His investment focus spans diverse sectors, notably Apps, Professional Services, and Health-Tech. Abhishek has played a pivotal role in supporting startups that align with his vision for advancement, fostering their progress in the competitive market landscape. Notable among his investments are ventures such as Evenflow, Growthschool, Flint, and an impressive array of eight additional pioneering enterprises. Abhishek Nag's investment decisions reflect his insightful understanding of emerging trends and his dedication to fostering transformative ideas. His investments extend beyond financial backing, representing a catalyst for startups to flourish and achieve their goals. Abhishek's role as an Angel Investor extends beyond monetary support; his network, knowledge, and strategic guidance contribute significantly to the development of the startups he supports. As an influential figure in the Mumbai startup ecosystem, Abhishek Nag has demonstrated a deep commitment to driving positive change and nurturing entrepreneurship. His involvement in sectors such as Apps, Professional Services, and Health-Tech highlights his dedication to advancing sectors that have a profound impact on modern lifestyles, businesses, and healthcare.",
    "investments": 11,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/abhisheknag/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Lightspeed India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac283_Stockgro.svg"
      },
      {
        "name": "Lightspeed India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac25c_growth%20school.svg"
      },
      {
        "name": "Lightspeed India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2b5_Onsurity.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "abhishek-rungta",
    "name": "Abhishek Rungta",
    "type": "Angel Investor",
    "title": "Founder & CEO at Indus Net Technologies",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0b9_102.%20Abhishek%20Rungta.jpeg",
    "about": "Abhishek Rungta is a highly accomplished entrepreneur and digital strategist with a wide range of expertise. As the founder of Indus Net Technologies, a globally recognized digital innovation venture, he has successfully led a team of 750+ professionals serving over 200 clients across five continents. With a strong focus on integrated digital strategies, Abhishek advises enterprises across various industries, prioritizing impactful initiatives and employing data-driven marketing and analytics. In addition to his professional achievements, he is an active angel investor, providing guidance and support to startups. Abhishek's diverse skills, entrepreneurial success, and dedication to innovation make him a notable figure in the business world.",
    "investments": 7,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/abhishekrungta/?originalSubdomain=in",
      "twitter": "https://twitter.com/abhishekrungta",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Indus Net Technologies",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1c8_Bookee.svg"
      },
      {
        "name": "Indus Net Technologies",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1c9_Galabox.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "fashinza",
    "name": "Abhishek Sharma",
    "type": "Angel Investor",
    "title": "Founder at Fashinza",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "SaaS",
      "Consumer",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1f6_193.%20Abhishek%20Sharma.webp",
    "about": "Abhishek Sharma emerges as a notable Angel Investor hailing from the United Arab Emirates, marked by his strategic investments that drive innovation and transformation. With a keen eye for potential, Abhishek's investment interests span a diverse array of sectors, including Apps, Media and Entertainment, and Others. His contributions to the startup landscape have been instrumental in supporting pioneering ventures that align with his vision for progress. Among his notable investments are Wishlink, Magma, Produze, and an additional startup. Abhishek Sharma's investment decisions reflect not only his perceptive understanding of emerging market trends but also his commitment to nurturing the growth of startups. His investments extend beyond financial backing, as he brings to the table his experience, insights, and a valuable network that contributes significantly to the startups' development and success. Based in the dynamic business environment of the United Arab Emirates, Abhishek Sharma's role as an Angel Investor underscores his dedication to fostering entrepreneurship and driving positive change. His involvement in sectors like Apps, Media and Entertainment, and Others highlights his dedication to advancing industries that shape modern experiences and innovation. Through his investments in startups like Wishlink, Magma, Produze, and more, Abhishek Sharma cements his legacy as a key player in the startup ecosystem. His contributions not only inject capital but also provide startups with the guidance and resources they need to navigate the challenges of growth and establish themselves as impactful players in their respective industries.",
    "investments": 4,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/abhishekksharma/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Fashinza",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac30a_Anar.svg"
      },
      {
        "name": "Fashinza",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac30b_Produze.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "accel-india",
    "name": "Accel (India)",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early",
      "Growth"
    ],
    "industries": [
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac025_Accel_(Partners)_2015_logo.webp",
    "about": "Accel is a prominent venture capital firm that provides support and investment opportunities to entrepreneurs worldwide. With a focus on both early stage and growth stage companies, Accel actively engages with startups operating in diverse sectors such as cloud computing, software as a service (SaaS), consumer products, enterprise solutions, information technology, healthcare, fintech, security, media, and business services. The firm's global presence includes offices in San Francisco, London, and Bangalore, enabling it to tap into entrepreneurial ecosystems across different geographies. Accel's strategic approach and extensive network contribute to its success in identifying and nurturing innovative businesses at various stages of development.",
    "investments": 50,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/lakshay-bansal/",
      "twitter": "https://twitter.com/lakshaybansal_",
      "website": "https://www.accel.com/india-home"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "Lakshay Bansal",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "all-in-capital",
    "name": "Aditya Singh",
    "type": "Angel Investor",
    "title": "CoFounder at All in Capital",
    "stages": [
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "SaaS",
      "HealthTech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546f0bbe9143acefda2e29_205.%20Aditya%20Singh.webp",
    "about": "Aditya Singh, a dynamic Angel Investor based in Delhi, stands out as a pivotal figure in the investment arena. With a focus on Software, HealthTech, Commerce, and Shopping, he has demonstrated a keen eye for identifying opportunities across diverse industries. Aditya's investment portfolio boasts a lineup of promising startups, including Unbox Robotics, Masterchow, Glamyo Health, and another noteworthy venture. Hailing from the bustling city of Delhi, Aditya Singh has carved a niche for himself in the startup ecosystem. His investment choices reflect a strategic approach that aligns with his interest in Software, HealthTech, Commerce, and Shopping sectors. By diversifying his investment areas, he showcases his adaptability and his ability to spot innovation across a wide spectrum of industries.",
    "investments": 4,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/adityasingh581bb813a/",
      "twitter": "https://twitter.com/allin_adi?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "agility-ventures",
    "name": "Agility Ventures",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "AI/ML",
      "Edtech",
      "Fintech",
      "HealthTech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac239_Agility%20ventures%20VC%20Logo.png",
    "about": "Agility Ventures invests in the startups and technology that are powering transformation of the supply chain. We have the know-how to incubate, go to market and scale great ideas. Agility Ventures is the corporate venture arm of Agility, a leader in supply chain services, innovation and investing. We partner with companies that are championing technology that will be the foundation for faster, cleaner, fairer and stronger supply chains.",
    "investments": 21,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/agilityventures/about/",
      "twitter": "",
      "website": "https://invest.agilityventures.in/login"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "Sonika Prabhakar",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ah-ventures",
    "name": "Ah Ventures",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Early",
      "Growth"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Digital Entertainment"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac06c_Ah-ventures.webp",
    "about": "Ah!Ventures is a platform that brings together investors and promising ventures and serves both of them through a unique blend of customized services, skill and experience. Startups associated with ah! Ventures receive an all-round development in every facet of their enterprise be it funding, networking or even recruitment of office space. They've made 29 investments in 27 companies in sectors like banking, e-commerce, consumer internet, etc. Their investment size varies between 100K - 10 Million USD.",
    "investments": 75,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ca-anvita-dasari-360404135/",
      "twitter": "",
      "website": "https://www.ahventures.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Ah Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac197_EDVISO.svg"
      },
      {
        "name": "Ah Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac192_Aisle.svg"
      }
    ],
    "pocName": "Anvita Dasari",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "epic-foundation",
    "name": "Ajai Chowdhry",
    "type": "Angel Investor",
    "title": "Founder & Chairman at EPIC Foundation",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534a537b2e8e6cff3c4980_245.%20Ajai%20Chowdhry.webp",
    "about": "Dr. Ajai Chowdhry is a visionary pioneer who cofounded HCL in 1976 with five others, with a dream of using the microprocessor & changing the world. He spearheaded HCL’s expansion into Singapore in 1980, & created a successful business spanning ASEAN, China, & Hong Kong. Today, HCL is valued at an impressive US $50 billion. Ajai has played a leading role in the establishment of the electronics industry in India, serving on government committees since 1999. He has been nominated by MEITY as a Member to the Advisory Board of India Semiconductor Mission. He has also been appointed as a member of the Consultation Group on Science & Technology and Innovation Sector & as a Member of the Committee on the Semiconductor Sector by NITI Aayog. In recognition of his efforts to build the IT & Electronics industry in India, in 2011 he was conferred the prestigious Padma Bhushan, by the Hon’ble President of India. He is the recipient of many other awards, including the Electronics Man of the Year 2010, CNBC TV18’s India Innovator of the Year Award 2010, & Cybermedia Business ICT Award 2013 for Lifetime Achievement in ICT.",
    "investments": 12,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ajaichowdhry/?ref=ynos.in",
      "twitter": "https://twitter.com/https://twitter.com/ajaichowdhry?ref=ynos.in",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "EPIC Foundation",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534a4df9d7abc34165f23f_clensta.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ericsson-india",
    "name": "Ajay Gupta",
    "type": "Angel Investor",
    "title": "Vice President & Head of Strategy at Ericsson , India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "SaaS",
      "Mobility",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/655462a36dde3120b1746fae_233.%20Ajay%20Gupta.webp",
    "about": "Ajay Gupta assumes the roles of a startup mentor, angel investor, and holds a notable position as a member within the India Angel Network, a prominent angel investment network focusing on Indian startups. Currently, he holds the esteemed position of Vice President & Head of Strategy at Ericsson, a significant role that underscores his influence within the technology and business sectors. In addition to his corporate responsibilities, Ajay actively participates as a member of TiE Delhi, a dynamic entrepreneurial ecosystem fostering innovation and growth. His illustrious career spans decades, reflecting a rich amalgamation of experiences in business, strategy, and technology domains. As a startup mentor and angel investor, Ajay's contributions reverberate across the startup landscape, where his insights and support play an integral role in nurturing the growth of emerging ventures. His affiliation with the India Angel Network underlines his commitment to catalyzing the success of Indian startups, adding substantial value through financial backing, mentorship, and a wealth of industry expertise. Ajay's noteworthy position at Ericsson showcases his prowess as a strategic leader, driving the company's trajectory in an everevolving technology landscape. His expertise in business, strategy, and technology is a testament to his multifaceted abilities, which are integral in steering companies toward growth, innovation, and success.",
    "investments": 6,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ajaygupta100/",
      "twitter": "https://twitter.com/ajay_2",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Ericsson , India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/6554628039732368f590a5ef_MirrAR.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "stanford-angels-entrepreneurs-india",
    "name": "Ajay Lavakare",
    "type": "Angel Investor",
    "title": "Co president at Stanford Angels & Entrepreneurs India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Edtech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546ea965ceb96609d63b9a_207.%20Ajay%20Lavakare.webp",
    "about": "Ajay Lavakare, an esteemed Angel Investor based in Delhi, stands as a pivotal figure within the investment landscape. With a keen focus on Community and Lifestyle, Software, and various other sectors, he has demonstrated a discerning eye for identifying promising opportunities. Ajay's investment portfolio showcases his dedication, featuring noteworthy startups such as Videoken, Trezi, Smartvizx, and a couple more. Emerging from the vibrant city of Delhi, Ajay Lavakare has earned a reputation as a discerning investor with a multifaceted approach. His investment preferences span across diverse domains including Community and Lifestyle, Software, and other dynamic sectors. This demonstrates not only his versatility but also his ability to recognize innovation in various industries. Ajay's role as an Angel Investor transcends the provision of capital; it involves actively fostering growth and development within startups. His strategic investments in Videoken, Trezi, Smartvizx, and others underline his commitment to nurturing groundbreaking ideas and steering them towards success.",
    "investments": 5,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ajaylavakare/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "zebpay",
    "name": "Ajeet Singh Balwant Singh Khurana",
    "type": "Angel Investor",
    "title": "CEO at Zebpay",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/655468200c6be28597b3c200_225.%20Ajeet%20Singh%20Khurana.webp",
    "about": "Member of Mumbai Angels. Ajeet Khurana is An active member of Mumbai Angels and also a lecturer at the University of Texas at Austin, Ajeet is known for overcoming financial and operational challenges of running education business networks. Some companies invested: Rolocule Games, ShepHertz, Avaz, Carveniche Technologies, Maximojo, United Mobile Apps, Karmic Lifesciences, Carve Niche Technologies Pvt. Ltd., PickMe eSolutions Get in touch: Ajeet KhuranaExperienced CEO with a demonstrated history of working in the fintech industry. Skilled in building teams, ensuring performance, scaling, digital strategy, planning, and negotiation. Work best in international, growth oriented, entrepreneurial settings.",
    "investments": 29,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ajeetkhurana/",
      "twitter": "https://twitter.com/ajeetk",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "akshay-chaturvedi",
    "name": "Akshay Chaturvedi",
    "type": "Angel Investor",
    "title": "Founder & CEO at LeverageEdu",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Edtech",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0c0_Akshay%20Chaturvedi%20.webp",
    "about": "Akshay Chaturvedi is a notable Angel Investor based in Noida. With a keen interest in Game-Tech, Sales and Marketing, and Content and Publishing, he has made strategic investments in startups such as Josh Talks, Ncore Games, and Proeves. Akshay's investment choices reflect his belief in the potential of these sectors and his commitment to supporting innovative and promising ventures. As an Angel Investor, he plays a vital role in providing financial backing and guidance to early-stage startups, contributing to their growth and success.",
    "investments": 3,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/akshaychaturvedi/",
      "twitter": "https://twitter.com/Akshay001",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "LeverageEdu",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac13d_JoshTalks.svg"
      },
      {
        "name": "LeverageEdu",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1d0_nCore%20Games.svg"
      },
      {
        "name": "LeverageEdu",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1d1_Proeves.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "alok-mittal",
    "name": "Alok Mittal",
    "type": "Angel Investor",
    "title": "Co-founder & CEO at Indifi Technoligies pvt ltd",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0c4_114.%20Alok%20Mittal.webp",
    "about": "Alok Mittal, an Angel Investor based in Gurugram, has made significant investments in startups across diverse sectors including Manufacturing, Data and Analytics, and Community and Lifestyle. With his extensive portfolio of investments, which includes companies like Leap.Club, Mistry.Store, Gromo, and 35 others, Alok Mittal plays a crucial role in supporting and fostering innovation in these industries. His expertise and strategic investments contribute to the growth and success of the startups he backs, further strengthening the entrepreneurial ecosystem.",
    "investments": 38,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/alok-mittal-590a/",
      "twitter": "https://twitter.com/alokmittal001?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Indifi Technoligies pvt ltd",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1d6_cuemath.svg"
      },
      {
        "name": "Indifi Technoligies pvt ltd",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac12e_Leverage%20edu.svg"
      },
      {
        "name": "Indifi Technoligies pvt ltd",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1da_ByteLearn.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "aloke-bajpai",
    "name": "Aloke Bajpai",
    "type": "Angel Investor",
    "title": "Co-founder at Ixigo",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0b8_101.%20Aloke%20Bajpai.webp",
    "about": "Aloke Bajpai is a distinguished entrepreneur and technology leader, known for his roles as the Co-Founder and CEO of ixigo.com, as well as the CEO and Co-Founder of Travenues. With a strong educational background from IIT Kanpur, he embarked on his career at Amadeus in Europe, where he excelled in key product and technology positions. During his tenure, Aloke showcased his expertise in building and managing large-scale web-based products and networks. His impressive track record and experience in the industry have contributed to his success as a visionary leader in the travel and technology sectors.",
    "investments": 6,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/alokebajpai/",
      "twitter": "https://twitter.com/alokebajpai",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Ixigo",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1c5_twigly.svg"
      },
      {
        "name": "Ixigo",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1c6_zapr.svg"
      },
      {
        "name": "Ixigo",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1c7_mealhopper.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "aman-gupta",
    "name": "Aman Gupta",
    "type": "Angel Investor",
    "title": "Co-founder at boAt",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "SaaS",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0c6_105.%20Aman%20Gupta.webp",
    "about": "Aman Gupta is the Co-Founder and Chief Marketing Officer (CMO) of boat, a renowned consumer electronics brand. His diverse professional background includes notable positions such as Chairman of the D2C Council of the Internet and Mobile Association of India, Co-Founder of Imagine Marketing India, Director of Sales at HARMAN International, Senior Management Consultant in the Strategy Services Group at KPMG, and CEO & Co-Founder of Advanced Telemedia Pvt. Ltd. Additionally, he has served as an Assistant Manager at Citi. Aman Gupta is an accomplished individual holding a Bachelor of Commerce degree from Delhi University, a Chartered Accountant designation from the Institute of Chartered Accountants of India, and an MBA degree from the Indian School of Business.",
    "investments": 29,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/aman-gupta-7217a515/",
      "twitter": "https://twitter.com/amangupta0303",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "boAt",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0cf_Wyld.svg"
      },
      {
        "name": "boAt",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0d0_Growfitter.svg"
      },
      {
        "name": "boAt",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0d1_Altor.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "amit-gupta",
    "name": "Amit Gupta",
    "type": "Angel Investor",
    "title": "Co-Founder & CEO at Yulu",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac07d_78.%20Amit%20Gupta.webp",
    "about": "Amit Gupta is a well-known figure in the Indian startup ecosystem, particularly as the co-founder of InMobi, the country's first unicorn. With a track record as a serial entrepreneur, Amit previously founded Analyticsworks, a business intelligence platform. He embarked on his second entrepreneurial venture with Yulu, a startup focused on e-bikes and mobility solutions. Holding degrees from IIT Kanpur and Harvard Business School, Amit established Yulu in 2017 and successfully secured investment from Rajiv Bajaj, MD at Bajaj Auto, to manufacture Yulu bikes in India. Beyond his ventures, Amit is an active angel investor, having supported over 30 early-stage startups, including HealthifyMe, Applicate, and Vahak.",
    "investments": 12,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/amitgupta007/?ref=ynos.in",
      "twitter": "https://twitter.com/amitgupta007?ref=ynos.in",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Yulu",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac198_Shuttl.svg"
      },
      {
        "name": "Yulu",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac127_vahak.svg"
      },
      {
        "name": "Yulu",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac199_Healthify.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "amit-lakhotia",
    "name": "Amit Lakhotia",
    "type": "Angel Investor",
    "title": "Founder at Park+",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "SaaS",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac07a_80.%20Amit%20Lakhotia.webp",
    "about": "Amit Lakhotia has over 8 years of experience in the internet space, specifically in the areas of travel, payments, and e-commerce. He has held leadership positions at two highly successful startups, MakeMyTrip and Paytm, contributing to their growth from early stages to billion-dollar companies. Amit is known for his expertise in building businesses from scratch, including strategic planning, implementation, and developing robust distribution channels. His specialties include consumer research, product management, supplier negotiations, data analytics, P&L management, and team leadership.",
    "investments": 19,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/amitlakhotia/",
      "twitter": "https://twitter.com/amit_lakhotia?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Park+",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac19c_Farmart.svg"
      },
      {
        "name": "Park+",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac18c_GoKwik.svg"
      },
      {
        "name": "Park+",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac19d_Insurity.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "campden-family-connect-india",
    "name": "Amit Patni",
    "type": "Angel Investor",
    "title": "Director at Campden Family Connect, India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "Edtech",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534d6f304c75996b27d773_238.%20Amit%20Patni.webp",
    "about": "Amit takes the helm of Campden Family Connects' operations in India, spearheading the firm's growth and strategic direction within the country. As a thirdgeneration member of the esteemed Patni Family, renowned for founding Patni Computers and pioneering the establishment of Family Offices as early as the 2000s, much of Amit's professional focus centers around engaging with wealthy families and advocating the significance and purpose of Family Offices. Beyond his role in Campden Family Connects, he is a prominent promoter shareholder of Patni Computers and holds a distinguished history as a former Director of PCS Technology Ltd. Amit's involvement in the business landscape is not limited to his association with Campden Family Connects. He is the visionary Founder and Director of RAAY, a significant family office entity. Additionally, he serves as the CoFounder and Chairman of Nirvana Venture Advisors, Partner at The HiveIndia and Ideaspring Capital, and holds a directorial position at Waterfield Advisors and RAAY Foundation. Amit's academic journey boasts a Bachelor's degree in Commerce, coupled with an MBA earned from Babson College in Boston, USA. These qualifications underscore his commitment to both practical business acumen and the pursuit of advanced knowledge in the realm of entrepreneurship",
    "investments": 8,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/patniamit/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "slideshare",
    "name": "Amit Ranjan",
    "type": "Angel Investor",
    "title": "Co-Founder at SlideShare",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac206_163.%20Amit%20Ranjan.webp",
    "about": "Amit Ranjan is a passionate startup entrepreneur who has effectively connected startups with the Indian Government through his role as the Architect for Digital Locker and OpenForge. These technology-centric e-governance platforms are pivotal components of the Digital India initiative, promoting paperless governance and secure digital access to citizen records. Amit Ranjan's entrepreneurial background infuses innovation into his government role, driving efficiency and accessibility in traditional processes. His contributions exemplify the synergy between startups and the government, fostering technological advancements and enhancing citizen services. His dedication to creating a digitally inclusive India through his work demonstrates his commitment to positive change.",
    "investments": 23,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/amitranjanprofile/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "SlideShare",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2d2_Seekho.svg"
      },
      {
        "name": "SlideShare",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2c9_Bobble%20AI.svg"
      },
      {
        "name": "SlideShare",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac28e_Minko.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "asr-greenzo",
    "name": "Amit Singal",
    "type": "Angel Investor",
    "title": "Director at ASR & Greenzo",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "Edtech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546dec1e69ea25eed6ae2c_202.%20Amit%20Singal.webp",
    "about": "Experienced Chief Executive Officer with a proven track record in the field of accounting. Possesses expertise in areas such as Internal Audit, Corporate Finance, Managerial Finance, and External Audit. A skilled and adept professional with a background in business development, holding a degree from The Institute of Chartered Accountants of India. With a wealth of experience, he has assumed the role of Chief Executive Officer, successfully leading and navigating the accounting industry.His proficiency encompasses a range of vital areas, including Internal Audit, where he excels in assessing and enhancing internal control systems, minimizing risk, and ensuring compliance.",
    "investments": 11,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/amitsingalca/",
      "twitter": "https://twitter.com/amitsingalca?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "amit-somani",
    "name": "Amit Somani",
    "type": "Angel Investor",
    "title": "Managing Partner at Prime Venture Partners",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Consumer",
      "Mobility"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac01c_10.jpg__1261x605_q85_crop_subsampling-2.webp",
    "about": "Amit Somani, an esteemed angel investor based in Bengaluru, focuses his investments on prominent sectors such as Edu-Tech, Information Technology, and Software. Notable startups in his portfolio include Hiration and Collpoll, among others. With his expertise and experience, Amit provides valuable support and guidance to the startups he invests in, contributing to their growth and success.",
    "investments": 2,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/thesomani/",
      "twitter": "https://twitter.com/amitsomani?ref_src=twsrc%5Etfw",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Prime Venture Partners",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0ef_mindtickle.svg"
      },
      {
        "name": "Prime Venture Partners",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0ee_ixigo.svg"
      },
      {
        "name": "Prime Venture Partners",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0f0_hotel%20travel.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "anand-chandrasekaran",
    "name": "Anand Chandrasekaran",
    "type": "Angel Investor",
    "title": "Director at Facebook",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac016_anand-chandrasekaran.webp",
    "about": "Anand has successfully managed five products, each reaching over 10 million users, with one of them amassing a user base exceeding 1 billion. Anand is the co-founder of Aeroprise Inc., acquired by BMC Software. Currently serving as the Executive Vice President of Product Management at Five9, Anand has played a crucial role in the company's market value growth of over $10 billion since 2019. Previously, he held positions such as Director of Messenger Platform at Facebook, and other leadership roles at Snapdeal/Freecharge and Bharti Airtel, driving innovative product development and digital transformation. He has a strong academic background with degrees from Stanford University and PSG College of Technology, and is recognized as a Young Global Leader by the World Economic Forum. Anand is actively involved in startup investments, having provided seed funding to over 60 startups in the US and India.",
    "investments": 49,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/anandc/",
      "twitter": "https://twitter.com/anandc",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Facebook",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0df_fynd.svg"
      },
      {
        "name": "Facebook",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0e0_nobroker.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "anand-ladsariya",
    "name": "Anand Ladsariya",
    "type": "Angel Investor",
    "title": "Founder at Everest Flavours",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Mobility",
      "Media",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac01a_adfaf.webp",
    "about": "Anand Ladsariya, a member of Indian Angels, holds the position of CEO and promoter director at Everest Flavours Ltd., a privately owned company renowned for its production and export of Menthol, Peppermint Oil, flavors, and fragrances. With a remarkable academic background, Anand is a graduate and gold medalist from Bombay University, as well as a postgraduate MBA from IIM, Ahmedabad. In addition to his business endeavors, he actively engages in various social activities. Anand's contributions extend to his role as the ex-Chairman of CHEMEXCIL, a prestigious export promotion organization established by the Ministry of Commerce, Government of India. As an avid angel investor, he is associated with both Mumbai Angels and Indian Angel Network, having invested in over 35 startups to date. Anand's expertise and mentorship play a crucial role in guiding and assisting founders to achieve the next level of success.",
    "investments": 16,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/anand-ladsariya-02667113/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Everest Flavours",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0e8_risk%20assured.svg"
      },
      {
        "name": "Everest Flavours",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0e9_myntra.svg"
      },
      {
        "name": "Everest Flavours",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0ea_oyo.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "dhamiri",
    "name": "Anand Shah",
    "type": "Angel Investor",
    "title": "Founder at Dhamiri",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac22c_128.%20Anand%20Shah.webp",
    "about": "Anand Shah is an Angel Investor from United States of America. Prominent investment areas are Energy, Agritech and Farming, Others and has invested in startups like Onecare, Eekifoods, & Evage.",
    "investments": 3,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/anand-shah-0817b1115/?originalSubdomain=in",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Dhamiri",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac277_eekifoods.svg"
      },
      {
        "name": "Dhamiri",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac278_Evage.svg"
      },
      {
        "name": "Dhamiri",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac279_Onecare.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "angel-networks-ian-man-etc",
    "name": "Angel networks (IAN, MAN, etc)",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed",
      "Early"
    ],
    "industries": [
      "SaaS",
      "Edtech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac041_image%2062.webp",
    "about": "Indian Angel Network is a prominent network of angel investors in India. The network focuses on investing in early-stage businesses across a wide range of sectors, including agriculture, gaming, internet, retail, e-commerce, healthcare, lifestyle, semiconductor, education, hospitality, manufacturing, services, financial services, information technology, mobile, and social impact. With their extensive network of experienced investors, Indian Angel Network provides not only capital but also mentorship, guidance, and valuable industry connections to the startups they invest in. By supporting entrepreneurs and their innovative ideas, Indian Angel Network plays a crucial role in fostering the growth of the Indian startup ecosystem and driving economic development in various sectors.",
    "investments": 75,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/gargprafful/",
      "twitter": "https://twitter.com/praffulgarg",
      "website": "https://www.indianangelnetwork.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Angel networks (IAN, MAN, etc)",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac142_Webengage.svg"
      },
      {
        "name": "Angel networks (IAN, MAN, etc)",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac14d_ridlr.svg"
      },
      {
        "name": "Angel networks (IAN, MAN, etc)",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac14e_zippr.svg"
      }
    ],
    "pocName": "Prafful Garg",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "avaana-capital-india",
    "name": "Anjali Bansal",
    "type": "Angel Investor",
    "title": "Founder & Chairperson at Avaana Capital, India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Consumer",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534c40cf5bdf94e366c4ab_240.%20Anjali%20Bansal.webp",
    "about": "Anjali Bansal is former non executive Chairperson of Dena Bank where she successfully led the resolution of the stressed bank. She also chairs NITI Aayog Investment Council for Fintech and Women Entrepreneurship. Anjali is founder of Avaana Capital, a fund platform that invests in innovation led business models to achieve impact at scale. She was previously global Partner and Managing Director with TPG Growth PE, Spencer Stuart India Founder CEO, and strategy consultant with McKinsey and Co in New York and India. She has been an active investor and mentor in companies including MakeMyTrip, Nykaa, Safari, Alphavector, Lenskart, UrbanClap, Darwinbox, Loantap. She started her career as an engineer. She serves as an independent non executive director on the boards of Siemens Ltd, Tata Power, Voltas, Kotak AMC, and Delhivery. She is on the Advisory Board of the Columbia University Global Centers, South Asia. Previously, she chaired the India board of Women's World Banking, a leading global livelihoodpromoting institution and continues to be an advisor to SEWA. She has previously served on the public boards of GSK Pharma and Bata. She is a charter member of TiE, serves on the managing committee of the Indian Venture Capital Association, mentor to Facebook SheLeadsTech, NITI Aayog's Atal Innovation Mission. An active contributor to the dialogue on corporate governance and diversity, Anjali cofounded and chaired the FICCI Center for Corporate Governance program for Women on Corporate Boards. She serves on the managing committee of the Bombay Chamber of Commerce and Industry. She is a member of the Young Presidents' Organization. She has been listed as one of the Most Powerful Women in Indian Business by Indias leading publication, Business Today, and by Fortune India. She is a frequent speaker at forums like Harvard, Stanford, Columbia, IVCA, BSE and jury member for awards including ET 40 Under 40, Women Ahead, CEO Awards, VC Circle, AIWMI Wealth Awards and others. She has a BE in Computer Engineering from Gujarat University and Masters in International Finance and Business from Columbia University",
    "investments": 14,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/anjalibansal8489091/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Avaana Capital, India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534c137796cdb6ba9ed16c_Gigindia.webp"
      },
      {
        "name": "Avaana Capital, India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534c3136376901faee299a_1687285683825-e6cf23.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "dineout",
    "name": "Ankit Mehrotra",
    "type": "Angel Investor",
    "title": "CEO at Dineout",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Edtech",
      "SaaS",
      "Consumer",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534b6a8c02df5d5eb4d6bf_242.%20Ankit%20Mehrotra.webp",
    "about": "Ankit Mehrotra is the CEO and Cofounder of Dineout, a venture he initiated in early 2012. Through a series of acquisitions spanning eight years, he expanded Dineout's range to encompass both consumer and businessfocused services. His adept leadership has positioned Dineout as India's foremost platform for dining out and restaurant technology. Ankit's accomplishments have earned him numerous accolades, including the Education UK Alumni Award in 2016 and the title of Entrepreneur of the Year in 2017 from the British Council. He was also recognized as the Digital Entrepreneur of the Year at the 2019 Drivers of Digital Awards and was featured among the Top 50 Most Influential eCommerce Professionals by the eCommerce Summit & Awards in the same year. Before embarking on his journey with Dineout, Ankit spent a decade in London, during which he dedicated seven years to various roles at BNP Paribas, including Investment Banking and Wealth Management. While working in these capacities, he managed a portfolio of Ultra High Net Worth Individuals (UHNWI) and concurrently pursued the CFA charter, successfully obtaining it in 2011. Ankit's passion for startups and technology fuels his curiosity for understanding online customer behavior across web and mobile platforms. His areas of expertise encompass Ecommerce Strategy, startup expansion strategies, deciphering and interpreting digital customer actions, introducing new product lines, and fostering mutually beneficial partnerships across networks.",
    "investments": 9,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ankitatdineout/?ref=ynos.in",
      "twitter": "https://twitter.com/dineout_india?ref=ynos.in",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Dineout",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac201_kohebee.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ankur-capital",
    "name": "Ankur Capital",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed",
      "Early"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "HealthTech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac033_Ankur-Capital-_Logo.png",
    "about": "Ankur Capital is a Mumbai-based venture capital firm that focuses on investing in startups operating in the fields of artificial intelligence (AI) and machine learning (ML), agritech and farming, and apps. With their deep industry knowledge and expertise, Ankur Capital has made investments in notable startups such as Anantm Technologies Private Limited, Agricxlab, Agrizy, and 28 other promising companies. By supporting these innovative ventures, Ankur Capital plays a crucial role in driving technological advancements, improving agricultural practices, and promoting the development of cutting-edge applications. Through their investments and guidance, Ankur Capital helps these startups thrive, grow, and make a positive impact in their respective industries.",
    "investments": 30,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/shreyanshsinghal/",
      "twitter": "https://twitter.com/ansh_shrey",
      "website": "https://www.ankurcapital.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Ankur Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac13a_Rupifi.svg"
      },
      {
        "name": "Ankur Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac13c_ibisa.svg"
      },
      {
        "name": "Ankur Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac13d_JoshTalks.svg"
      }
    ],
    "pocName": "Shreyansh Singhal",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "inflection-point-ventures",
    "name": "Ankur Mittal",
    "type": "Angel Investor",
    "title": "CoFounder at Inflection Point ventures",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546a777af72d605fa2a503_217.%20Ankur%20Mittal.webp",
    "about": "Finance Expert with 20+ Years of Global Experience in Fortune 50 companies.Managed and Expanded operation at TTS across AsiaPacific, including Middle East. Advised Fortune 500 Companies on crossborder M&A Transactions across sectors like Banking and Financial Services, Consumer Goods, Retail, Luxury, FIG, Education, Real Estate, Media, Telecom, Healthcare and White Goods, during the stint at Credit Suisse. Built Emerging Market Long Only Equity portfolio for Citigroup's US Defined Benefit Plan. Executed over $60m of new investments / commitments. Focused on expanding Citigroup’s footprint through acquisitions in the North America and EMEA regions. Currently focusing on VC investments in early & growth stage start ups",
    "investments": 17,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ankurmittal3ba773/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ocho",
    "name": "Ankur Nagpal",
    "type": "Angel Investor",
    "title": "Founder at Ocho",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac204_165.%20Ankur%20Nagpal.webp",
    "about": "Ankur Nagpal, a distinguished Angel Investor hailing from the United States of America, is renowned for his strategic investments across various sectors. His primary areas of focus include Content and Publishing, Software, and Real Estate, showcasing a keen interest in supporting transformative and disruptive ventures. As an influential figure in the investment community, Ankur has made substantial contributions to the startup ecosystem by backing a diverse range of promising companies. Among the startups he has chosen to invest in are Pepper Content, Tortoise, Bitespeed, and an additional nine innovative enterprises. Ankur's investment philosophy likely revolves around the belief in the power of technology to reshape industries and drive positive change. By investing in startups operating in Content and Publishing, Software, and Real Estate, he exhibits a forward-thinking approach to identifying opportunities that can shape the future. In his role as an Angel Investor, Ankur goes beyond providing financial support to these startups. His expertise and experience likely prove invaluable as he offers mentorship, guidance, and a strong network of connections to the entrepreneurs he backs. This active involvement nurtures a thriving ecosystem that fosters innovation and propels early-stage companies towards success.",
    "investments": 12,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ankurnagpal/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ankur-warikoo",
    "name": "Ankur Warikoo",
    "type": "Angel Investor",
    "title": "Founder at Nearbuy",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac08d_62.%20Ankur%20Warikoo.webp",
    "about": "Ankur Warikoo is a versatile entrepreneur, angel investor, mentor, and public speaker based in India. He founded nearbuy.com in 2015 and served as the CEO until 2019. Prior to that, Ankur played a key role in establishing and leading Groupon India as the APAC General Manager. Passionate about public speaking, Ankur frequently delivers motivational talks on leadership, consumer internet, and the entrepreneurial mindset at various corporates, colleges, schools, and conferences. Additionally, he actively invests in early-stage tech startups as an angel investor and mentors founders on crucial aspects such as product-market fit, talent acquisition and retention, and cultivating a founder's mindset.",
    "investments": 11,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/warikoo/",
      "twitter": "https://twitter.com/warikoo",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb03_Group%20675959112.svg"
  },
  {
    "id": "b2b-1k-ventures-india",
    "name": "Anoop Mathur",
    "type": "Angel Investor",
    "title": "Founder at B2B 1K Ventures , India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534e2a9387469ff647621b_236.%20Anoop%20Mathur.webp",
    "about": "Anoop is characterized by his exceptional commitment, unwavering dedication, profound support, and a remarkably humble demeanor. His approach to transforming event hosting and management is marked by innovation, introducing fresh perspectives to create inclusive environments that foster connections and engagement. Infused with a genuine warmth of hospitality and personalized care, Anoop's initiatives redefine the event experience. His innate talent for building cohesive teams and nurturing relationships further distinguishes him. Above all, his humility shines as a defining trait that makes interactions with Anoop not only enriching but truly exceptional. At the helm of CORE MEDIA, Anoop's role as Founder and President underscores his leadership in driving the organization's mission of recognition and excellence. His innovative mindset translates into visionary strategies that transform the landscape of how achievements are celebrated. With a focus on inclusivity and engagement, he has set the stage for meaningful connections that transcend the ordinary.",
    "investments": 6,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/mathuranoop/",
      "twitter": "https://twitter.com/https://twitter.com/MathurAnoop",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "B2B 1K Ventures , India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534e16282a496637bcc9b0_Adstringo.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "anthill",
    "name": "Anthill",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "SaaS",
      "HealthTech",
      "Consumer",
      "Edtech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac02f_Anthill%20.webp",
    "about": "Anthill Ventures is a dynamic investment and scaling platform dedicated to supporting early growth stage startups seeking rapid expansion in the Indian markets. With a strong focus on collaboration, Anthill Ventures identifies strategic partners worldwide, including funds, family offices, and accelerators, to co-invest alongside them in highly scalable business ideas with significant growth potential in the Asian market. Beyond providing financial investment, Anthill Ventures offers a range of tailored services designed to propel startups towards their Series A funding round within a remarkable 12-month timeframe. With their comprehensive support ecosystem, Anthill Ventures empowers startups to achieve remarkable scale and success in their entrepreneurial journey.",
    "investments": 46,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/praptipatel/",
      "twitter": "https://twitter.com/_praptipatel",
      "website": "http://www.anthillventures.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "Prapti Patel",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "antler",
    "name": "Antler",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "SaaS",
      "Consumer",
      "Mobility"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac02e_ANtler.svg",
    "about": "Antler is a globally recognized early-stage venture capital firm that focuses on investing in groundbreaking technology companies that have the potential to shape the future. With a presence in key entrepreneurial hubs worldwide, including London, New York, Singapore, and Sydney, Antler is committed to enabling and investing in the world's most exceptional individuals who are building the defining companies of tomorrow. Since its establishment in 2017 in Singapore, Antler has made investments in over 300 companies. Notably, 40% of these companies have at least one female co-founder, and the founders hail from 70 different nationalities. Antler empowers these exceptional individuals by facilitating the formation of strong co-founder teams, providing extensive support for validating their business models, and offering a global platform for scaling their startups. Through their innovative approach, Antler is dedicated to making a positive and lasting impact on the world.",
    "investments": 495,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/samikshaag/",
      "twitter": "https://twitter.com/samiksha0396?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      "website": "https://www.antler.co/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Antler",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac122_Pathzero.svg"
      },
      {
        "name": "Antler",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac123_volopay.svg"
      },
      {
        "name": "Antler",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac124_ailient.svg"
      }
    ],
    "pocName": "Samiksha Agarwal",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "venture-catalysts-0a5d9",
    "name": "Anuj Golecha",
    "type": "Angel Investor",
    "title": "Co-Founder at Venture Catalysts",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "SaaS",
      "Mobility"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac205_164.%20Anuj%20Golecha.webp",
    "about": "Anuj Golecha is a highly engaged Angel Investor and holds a position among the top 10 angel investors in India, as recognized by VCCircle. His investment portfolio boasts successful ventures such as Koinex, Fynd, Coutloot, BharatPe, SuprDaily, and numerous others. He is a qualified Chartered Accountant and serves as a second-generation partner at Banshi Jain and Associates. Alongside his impressive achievements as an investor, Anuj is also a co-founder of Venture Catalysts, which stands as India's pioneering Integrated incubator. With a diverse professional background spanning over fifteen years, he has garnered extensive experience across various industries, including financial services, real estate, manufacturing, jewelry, and internet companies. Through his investments and contributions, Anuj Golecha has made a significant impact on the startup ecosystem in India, fostering innovation and supporting the growth of promising ventures.",
    "investments": 10,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/anujgolecha/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Venture Catalysts",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2b1_Convin.svg"
      },
      {
        "name": "Venture Catalysts",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2cc_Homecapital.svg"
      },
      {
        "name": "Venture Catalysts",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2cd_Tyke.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "anuj-srivastava",
    "name": "Anuj Srivastava",
    "type": "Angel Investor",
    "title": "Founder & CEO at Livspace",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac08a_65.%20Anuj%20Srivastava.webp",
    "about": "Anuj Srivastava, the founder of Livspace, plays a pivotal role in shaping the company's vision, strategy, and growth, revolutionizing the way interiors are designed and delivered. With a rich background in the Silicon Valley, Anuj previously served as the Global Head of Product Marketing for Google's eCommerce team. His global perspective is reflected in his educational journey, having attended IIT Kanpur, earned an MBA from the London Business School, and lived in various cities around the world, including India, San Francisco, London, New York, and Singapore.",
    "investments": 12,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/anujs/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Livspace",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac17b_PiggyRide.svg"
      },
      {
        "name": "Livspace",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac160_Plum.webp"
      },
      {
        "name": "Livspace",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac17c_Brick%20%26%20Bolt.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "anupam-mittal",
    "name": "Anupam Mittal",
    "type": "Angel Investor",
    "title": "Founder & CEO at People Group",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "SaaS",
      "HealthTech",
      "Consumer",
      "Digital Entertainment"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac013_Shaadi.com-founder-Anupam-Mittal-is-also-a-judge-on-Shark-Tank-India.webp",
    "about": "Anupam Mittal is a distinguished entrepreneur holding key positions in the industry. He is the Founder and CEO of People Group, a New Media & Entertainment group. Under which, Anupam has established various successful businesses including Shaadi.com, Makaan.com, Mauj Mobile, and People Pictures. People Group is widely acknowledged as one of the most innovative enterprises in the country. On average, he invests around $30k - $60k.",
    "investments": 75,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/anupam-mittal-4b3b0114/",
      "twitter": "https://twitter.com/AnupamMittal",
      "website": "https://people-group.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "People Group",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0d6_Hackerearth.svg"
      },
      {
        "name": "People Group",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0d7_drivezy.svg"
      },
      {
        "name": "People Group",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0d8_ola.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "apoorv-ranjan-sharma",
    "name": "Apoorv Ranjan Sharma",
    "type": "Angel Investor",
    "title": "Cofounder & Managing Director at 9Unicorns",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "SaaS",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac07f_76.%20Apoorv%20Ranjan%20Sharma.webp",
    "about": "Dr. Apoorv Sharma, the Co-founder and President of Venture Catalysts, holds a distinguished position in India's startup ecosystem. He has played a vital role in its development since the early 2000s, pioneering the establishment of numerous incubators, accelerators, and funds. As a recipient of the prestigious Best Incubator Award presented by the President of India, Dr. Sharma's contributions have been widely recognized. With a PhD in Incubation from Amity University and a diverse educational background, he has curated, incubated, and invested in over 100 startups. Driven by passion and leadership, he continues to inspire investors to participate in the startup funding space.",
    "investments": 29,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/drapoorvsharma/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "9Unicorns",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac188_Homecapital.svg"
      },
      {
        "name": "9Unicorns",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac193_Confirmtkt.svg"
      },
      {
        "name": "9Unicorns",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac194_Credright.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "aprameya-radhakrishna",
    "name": "Aprameya Radhakrishna",
    "type": "Angel Investor",
    "title": "Co-founder & CEO at Koo",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0ba_103.%20Aprameya%20Radhakrishna.webp",
    "about": "Aprameya Radhakrishna is a successful entrepreneur and angel investor, currently leading Koo as its Founder and CEO. He has a rich professional background, having founded and directed TaxiForSure.com and worked in business development at Jones Lang LaSalle Meghraj. With a strong technical foundation from his time at Infosys, Aprameya holds a Bachelor's degree in Engineering and a Master's in Business Administration from renowned institutes. He actively supports startups in India as an angel investor, utilizing his expertise and experience to contribute to the entrepreneurial ecosystem.",
    "investments": 34,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/aprameyaradhakrishna/",
      "twitter": "https://twitter.com/aprameya",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Koo",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1af_trell.svg"
      },
      {
        "name": "Koo",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1ca_parent%20lane.svg"
      },
      {
        "name": "Koo",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0e6_unacademy.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "google",
    "name": "Apurva Chamaria",
    "type": "Head of Startups & Venture Capital at Google",
    "title": "",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Edtech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac203_166.%20Apurva%20Chamaria.webp",
    "about": "Apurva Chamaria currently serves as the Senior Vice President (SVP) & Chief of Staff to the CEO & Managing Director of Tech Mahindra. Formerly, he held the position of Chief Revenue Officer at RateGain, a renowned SaaS provider in the travel and hospitality sectors. At HCL, he directed corporate marketing, overseeing brand marketing, employer branding, thought leadership, digital marketing, analytics, finance, and communications. As SVP & Chief of Staff at Tech Mahindra, he plays a pivotal role in managing the CEO's office and facilitating strategic decision-making. His extensive experience includes fostering growth, driving revenue initiatives, and building strong client relationships during his tenure as Chief Revenue Officer at RateGain.",
    "investments": 9,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/apurvachamaria/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Google",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2d0_Sheroes.svg"
      },
      {
        "name": "Google",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2d1_Innov8.svg"
      },
      {
        "name": "Google",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2b8_JoshTalks.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "aashray-portfolio-pvt-ltd-india",
    "name": "Arjun Seth",
    "type": "Angel Investor",
    "title": "Managing Director at Aashray Portfolio Pvt Ltd , India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546edc14a69a0e134b7f3f_203.%20Arjun%20Seth.webp",
    "about": "Experienced Managing Director with a demonstrated history of working in the polyester resin & travel industry. Skilled in Management, Negotiation, Business Planning, Partnerships and Sales. Has led large teams across India, building a 1000 crore offline to online profitable travel business which he successfully sold to a Nasdaq listed company. Mentors, advises and invests in various startups.",
    "investments": 4,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/arjunpearlseth/",
      "twitter": "https://twitter.com/arjunpearlseth?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Aashray Portfolio Pvt Ltd , India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546ed04dcc80368edd155c_Burgerama.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "v3-ventures",
    "name": "Arjun Vaidya",
    "type": "Angel Investor",
    "title": "CoFounder at V3 Ventures",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546d2fd5dc6c769556e31a_211.%20Arjun%20Vaidya.webp",
    "about": "Arjun Vaidya is an esteemed Angel Investor hailing from the vibrant city of Mumbai. His presence within the investment sphere is marked by a remarkable track record. He specializes in strategic investments within key sectors such as HealthTech, Real Estate, Commerce and Shopping, demonstrating his acute ability to identify promising opportunities. Arjun's investment portfolio boasts a roster of carefully selected startups, including notable ventures such as Dil Foods, Blitz, Mykare Health, and an impressive array of twentyfour others. Rooted in Mumbai's dynamic entrepreneurial ecosystem, Arjun Vaidya has established himself as a pivotal figure. His investment preferences reflect a calculated approach, with a strong focus on HealthTech, Real Estate, Commerce and Shopping sectors. This demonstrates not only his versatility but also his adeptness at recognizing innovation across various industries.",
    "investments": 27,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/arjunvaidya/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "bain-company",
    "name": "Arpan Sheth",
    "type": "Angel Investor",
    "title": "Senior Partner at Bain & Company",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac27a_wishlink.svg",
    "about": "A seasoned consultant with a wealth of experience, offering guidance to businesses and investors across the United States, Australia, India, the Middle East, and China. I have resided and operated in the USA, Australia, and India, and successfully led assignments in locations such as China, Singapore, and the GCC. My collaborations have been instrumental in assisting management teams and founders of prominent digital-native platforms and other enterprises aiming to foster customer-centric transformations, leveraging the potential of digital and analytical technologies. At the helm of Bain Falcon and Bain Innovation Ecosystem (BIE), I've forged strategic partnerships within India's startup ecosystem. Currently, I hold the position of leading Bain's Private Equity Practice in India, spearheading commercial diligence efforts and post-acquisition initiatives for nearly 200 transactions spanning India and the wider Asian region. As the principal author of the annual Bain India private equity report since 2010, I remain deeply engaged in India's philanthropic landscape, serving on the board of Dasra, the nation's foremost philanthropic impact organization, as well as Magic Bus. My commitment to fostering startups in India is evident through my active support for ventures like THB, SecurityAdvisor, Vernacular.ai, CashFlo, Avataar.me, Flatheads, HealthSpring, Delhivery, Dataweave, Medikabazaar, and numerous others.",
    "investments": 9,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/arpansheth/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Bain & Company",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac302_Weskill.svg"
      },
      {
        "name": "Bain & Company",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac303_Cashflo.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "artha-group",
    "name": "Artha group",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac254_Arth.webp",
    "about": "Artha Venture Fund, managed by Artha India Ventures, is a well-established early-stage venture capital fund. It focuses its investments primarily in sectors such as information technology, IoT, LOHAS and wellness, cleantech, and gaming. With its vintage status, the fund brings experience and expertise to support innovative startups in these sectors, fostering their growth and success.",
    "investments": 58,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/arthaventurefund/",
      "twitter": "",
      "website": "https://artha.vc/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "Shivika Bansal",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ashish-goel",
    "name": "Ashish Goel",
    "type": "Angel Investor",
    "title": "Co-founder & CFO at Fibe India",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "Mobility",
      "Consumer",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac08f_59.%20Ashish%20Goel.webp",
    "about": "Ashish Goel, an angel investor based in Bengaluru, has made significant investments in various sectors. His prominent investment areas include sports, consumer products, and fintech. Ashish has a diverse portfolio of investments, supporting startups such as Dawaa Dost, Mokobara, Turno, and others, leveraging his industry insights and financial backing.",
    "investments": 16,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ashishgoyalearlysalary/",
      "twitter": "https://twitter.com/ashishgoyal008?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Fibe India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac16d_mokobara.svg"
      },
      {
        "name": "Fibe India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac16e_bliss%20club.svg"
      },
      {
        "name": "Fibe India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac16f_murf.ai.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "urban-ladder",
    "name": "Ashish Goel",
    "type": "Angel Investor",
    "title": "Founder & CEO at Urban Ladder",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac222_137.%20Ashish%20Goel.webp",
    "about": "Ashish Goel, an Angel Investor based in Bengaluru, focuses on investing in Hardware and Technology, Edu-Tech, and Fin-Tech startups. He has made strategic investments in ventures such as Newtrace, Dawaa Dost, and Mokobara, among others.",
    "investments": 18,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ashish-goel-591572/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Urban Ladder",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac290_mokobara.svg"
      },
      {
        "name": "Urban Ladder",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac272_The%20Souled%20Store.svg"
      },
      {
        "name": "Urban Ladder",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac26c_bliss%20club.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "helion-advisors-private-limited",
    "name": "Ashish Gupta",
    "type": "Angel Investor",
    "title": "Managing Director at HELION ADVISORS PRIVATE LIMITED",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac224_136.-Ashish-Gupta.webp",
    "about": "Dr. Ashish Gupta, a well-known serial entrepreneur, angel investor, and venture capitalist, has joined Prime Venture Partners as Partner Emeritus. He will play a crucial role in the Investment Committee and decision-making process for future investments at Prime VP. Dr. Gupta co-founded Helion Ventures, a significant player in the investment landscape.",
    "investments": 20,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ashish-gupta-9632571/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ashish-hemrajani",
    "name": "Ashish Hemrajani",
    "type": "Angel Investor",
    "title": "Founder & CEO at Bigtree entertainment",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac08c_61.%20Ashish%20Hemrajani.webp",
    "about": "Ashish Hemrajani is a seasoned entrepreneur with a remarkable journey. He is the CEO and Co-founder of Bigtree Entertainment Private Limited, the company behind the popular platform BookMyShow. After completing his MBA from Sydenham University in 1997, Ashish pursued his passion for entrepreneurship and founded Bigtree Entertainment Pvt. Ltd. Since then, he has led the company's growth and expansion, establishing BookMyShow as a prominent player in the entertainment industry. Prior to this, Ashish gained valuable experience in client management and account management at J Walter Thompson (JWT), where he honed his skills in building successful business relationships.",
    "investments": 13,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ashishhemrajani/",
      "twitter": "https://twitter.com/fafsters",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Bigtree entertainment",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac173_Pazcare.svg"
      },
      {
        "name": "Bigtree entertainment",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac169_park%2B.svg"
      },
      {
        "name": "Bigtree entertainment",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac174_Juspay.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "innoven-triple-blue-capital-advisors-llp",
    "name": "Ashish Sharma",
    "type": "Angel Investor",
    "title": "Managing Partner at InnoVen Triple Blue Capital Advisors LLP",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac208_162.%20Ashish%20Sharma.webp",
    "about": "Ashish Sharma boasts a wealth of experience spanning more than two decades within the financial services arena, where he has showcased his proficiency in both operations and investments. Throughout his career, Ashish has held notable leadership positions at distinguished companies such as SBI Cards, GE Capital Services India, GE Money India, and GE Maruti Countrywide, thereby gaining comprehensive insights into the industry's dynamics. His contributions extend beyond individual roles, as he has actively participated on the boards of numerous enterprises.Ashish's expertise encompasses a diverse array of domains, ranging from debt and equity management to structured finance, P&L oversight, strategic planning, business expansion, mergers and acquisitions, and the governance of corporate boards. Notably, he champions the cause of financial inclusion and has been instrumental in spearheading initiatives aimed at fostering financial literacy and enhancing credit accessibility across India.Currently, Ashish Sharma holds the position of Managing Partner at InnoVen Triple Blue Capital Advisors, a testament to his continued dedication and influence within the financial sector.",
    "investments": 13,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ashishsharma91/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "InnoVen Triple Blue Capital Advisors LLP",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac28d_Hyperface.svg"
      },
      {
        "name": "InnoVen Triple Blue Capital Advisors LLP",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac283_Stockgro.svg"
      },
      {
        "name": "InnoVen Triple Blue Capital Advisors LLP",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2cb_Milkbasket.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "posist",
    "name": "Ashish Tulsian",
    "type": "Angel Investor",
    "title": "Co-Founder & CEO at Posist",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "Edtech",
      "Media",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac213_154.%20Ashish%20Tulsian.webp",
    "about": "Ashish Tulsian, the co-founder and CEO of POSist, a prominent cloud-based restaurant technology platform, possesses a unique blend of technocratic and restaurateur expertise. With his visionary approach, POSist now caters to over 9,000+ restaurants across various regions, including UAE, USA, UK, Gulf, LATAM, and Southeast Asia. Prior to this, Ashish held the position of Director & CEO at TechnoApex Software Pvt. Ltd. Besides his entrepreneurial ventures, Ashish is an active angel investor, backing promising startups like Growthschool, Joshtalks, Zorro, and Plum.",
    "investments": 11,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ashishtulsian/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Posist",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac256_plum.svg"
      },
      {
        "name": "Posist",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac25c_growth%20school.svg"
      },
      {
        "name": "Posist",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2b8_JoshTalks.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ashneer-grover",
    "name": "Ashneer Grover",
    "type": "Angel Investor",
    "title": "Founder at BharatPe",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac091_57.%20Ashneer%20Grover.webp",
    "about": "Ashneer Grover is a notable angel investor and entrepreneur hailing from India. In 2018, he co-founded BharatPe, a prominent fintech startup in the country. Ashneer also served as a judge in the first season of Shark Tank India. He holds a B.Tech degree in Civil Engineering from IIT Delhi and an MBA from IIM Ahmedabad. Prior to starting BharatPe, Ashneer gained valuable experience working with renowned companies such as Kotak Investment Bank, Grofers, PC Jeweller Ltd, and American Express. He is an active investor with around 55 investments in various startups spanning fintech, health tech, and auto tech industries. Notable investments include Rupifi and YAP since 2020, as well as previous investments in Ribbit and Vinny Pujji's fund. Ashneer has also invested in startups like BIRA, Meddo, Nazara, IndiaGold, among others.",
    "investments": 32,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ashneer/",
      "twitter": "https://twitter.com/Ashneer_Grover",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "BharatPe",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac167_hoopr.svg"
      },
      {
        "name": "BharatPe",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac168_koo.svg"
      },
      {
        "name": "BharatPe",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac169_park%2B.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "renee-cosmetics",
    "name": "Ashutosh Valani",
    "type": "Angel Investor",
    "title": "CoFounder at Renee Cosmetics",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "HealthTech",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546cc7c06bd3eef0be0925_213.%20Ashutosh%20Valani.webp",
    "about": "Ashutosh Valani emerges as a noteworthy Angel Investor originating from Ahmedabad, contributing significantly to the investment landscape. His discerning investment approach is most pronounced in the sectors of Sports, Internet Services, and Data and Analytics, showcasing his adeptness at identifying promising prospects. Ashutosh's investment portfolio is graced by a selection of startups that echo his strategic insights, including notable ventures such as Slick, Perfora, Woovly, and an impressive assortment of eleven others. Hailing from Ahmedabad, Ashutosh Valani has solidified his presence within the entrepreneurial ecosystem. His investment inclinations reflect a calculated approach, spanning across Sports, Internet Services, and Data and Analytics sectors. This demonstrates his ability to not only diversify his investments but also recognize innovation across diverse industries. Ashutosh's role as an Angel Investor extends beyond financial contributions, embodying an active commitment to nurturing growth and fostering innovation. His investments in Slick, Perfora, Woovly, and numerous other startups underscore his dedication to supporting visionary ideas and propelling them towards fruition.",
    "investments": 14,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ashutoshvalani/",
      "twitter": "https://twitter.com/ashutoshvalani",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ofbusiness",
    "name": "Asish Mohapatra",
    "type": "Angel Investor",
    "title": "Founder & CEO at OfBusiness",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "SaaS",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac220_139.%20Asish%20Mohapatra.webp",
    "about": "Asish Mohapatra is a prominent angel investor and accomplished entrepreneur, playing key roles in the Indian startup ecosystem. He is the Co-Founder of Oxyzo Financial Services Pvt Ltd, a fintech venture focused on providing inclusive financial solutions to individuals and businesses. Asish also serves as the Co-Founder and CEO of OfBusiness, a leading B2B commerce platform revolutionizing procurement and financing services for businesses. With his deep expertise in technology, finance, and business, Asish actively invests in early-stage startups, particularly in the fintech and B2B sectors. His visionary leadership and passion for driving positive change have made him a respected figure in the startup community, shaping the success stories of numerous ventures in India.",
    "investments": 13,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/asish-mohapatra-22685a28/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "OfBusiness",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac294_GoKwik.svg"
      },
      {
        "name": "OfBusiness",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac295_Tranzact.svg"
      },
      {
        "name": "OfBusiness",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac287_Liquide.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "axilor",
    "name": "Axilor",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed",
      "Early"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac037_Axilor-Logo.webp",
    "about": "Axilor Ventures is a leading venture capital firm in India that focuses on supporting and nurturing entrepreneurs to increase their chances of success. With a diverse portfolio of startups, including Urbanpiper, Vyapar, Enkash, Numen, Pepper farms, Loco, and Kaagaz, Axilor Ventures provides these companies with the essential elements required to build and scale successful businesses. This includes access to capital, mentorship, strategic guidance, industry connections, and a supportive ecosystem. By offering comprehensive support and resources, Axilor Ventures plays a crucial role in helping early-stage startups thrive and achieve their growth potential. Their average investments are around $500k - $700k.",
    "investments": 48,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ananth-narayanan-2000vc/",
      "twitter": "https://twitter.com/agsananth2000",
      "website": "https://www.axilor.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Axilor",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac143_Vyapar.svg"
      },
      {
        "name": "Axilor",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac14f_urban%20piper.svg"
      },
      {
        "name": "Axilor",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac150_loco.svg"
      }
    ],
    "pocName": "Ananth Narayanan",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "coin-center",
    "name": "Balaji S. Srinivasan",
    "type": "Angel Investor",
    "title": "Cofounder at Coin Center",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "Edtech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/6554695197a107c969276a3b_221.%20Balaji%20S.%20Srinivasan.webp",
    "about": "Balaji S. Srinivasan is currently engaged in angel investing and is taking a sabbatical from active professional commitments. In the past, he held significant roles, including Chief Technology Officer (CTO) at Coinbase and a General Partner at Andreessen Horowitz. He also cofounded notable ventures such as Earn.com (later acquired by Coinbase), Counsyl (acquired by Myriad), Teleport (acquired by Topia), and Coin Center. Dr. Srinivasan's career trajectory reflects his remarkable achievements. Before his tenure at Coinbase, he served as the CEO of Earn.com, contributing to its acquisition by Coinbase. His role as a General Partner at Andreessen Horowitz further showcased his expertise in the investment landscape. The inception of Counsyl, where he played a cofounder and CTO role, marked another significant milestone in his journey. His work at Counsyl earned him recognition, including a Wall Street Journal Innovation Award for Medicine and a spot on the MIT TR35 list.",
    "investments": 18,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/balajissrinivasan/",
      "twitter": "https://twitter.com/balajis",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "beenext",
    "name": "Beenext",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Early"
    ],
    "industries": [
      "Fintech",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac03e_image%2054.svg",
    "about": "BEENEXT is a venture capital firm founded by entrepreneurs with a strong focus on supporting and empowering founders. They prioritize founder-friendly approaches and understand the importance of operational experience in the venture capital landscape. With their extensive investment portfolio spanning across nine different countries, BEENEXT offers a highly unique perspective and insights to entrepreneurs. Their expertise and network allow them to assist entrepreneurs in scaling their businesses and taking them to the next level. By leveraging their global presence and experiences, BEENEXT provides valuable guidance, resources, and connections to help startups thrive in the competitive market. The closed investments deals are usually in the range of 5 - 10 millions dollars.",
    "investments": 106,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/anirudh-garg98/",
      "twitter": "https://twitter.com/AnirudhGarg24",
      "website": "https://www.beenext.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Beenext",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac110_Angellist.svg"
      },
      {
        "name": "Beenext",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac111_BharatPe.svg"
      },
      {
        "name": "Beenext",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0e0_nobroker.svg"
      }
    ],
    "pocName": "Anirudh Garg",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "gupshup",
    "name": "Beerud Sheth",
    "type": "Angel Investor",
    "title": "CEO at Gupshup",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac233_121.%20Beerud%20Sheth.webp",
    "about": "Co-Founder & CEO at Gupshup. He's a serial tech entrepreneur and investor who likes creating and investing in innovative products that engage millions of users.",
    "investments": 5,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/beerud/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Gupshup",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac261_Decentro.svg"
      },
      {
        "name": "Gupshup",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac262_Pepper%20Content.svg"
      },
      {
        "name": "Gupshup",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac263_Siply.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "bessemer",
    "name": "Bessemer",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Growth"
    ],
    "industries": [
      "SaaS",
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac02b_Bessemer_Venture_Partners_logo.webp",
    "about": "Bessemer Venture Partners is a versatile venture capital firm that invests across all stages of a business. They support entrepreneurs who are passionate, thoughtful, and driven to transform exciting ideas into thriving businesses. Bessemer Venture Partners values founders who challenge conventions and push the boundaries of technology. They focus on various sectors including enterprise, consumer, e-commerce, healthcare, security, SaaS, enterprise software, fintech, and mobile. By providing capital and expertise, Bessemer Venture Partners plays a pivotal role in helping these innovative companies succeed and make a lasting impact in their respective industries.",
    "investments": 396,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/moshimoshe/",
      "twitter": "https://twitter.com/moshimoshe",
      "website": "https://www.bvp.com/india"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Bessemer",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac119_shopify.svg"
      },
      {
        "name": "Bessemer",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac11a_pinterest.svg"
      },
      {
        "name": "Bessemer",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac11b_twilio.svg"
      }
    ],
    "pocName": "Moksha",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "better-capital",
    "name": "Better Capital",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "Mobility",
      "Consumer",
      "Media",
      "SaaS",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac05e_better-capital-2000x920.webp",
    "about": "Better is an early-stage venture firm that focuses on building and investing in innovative businesses that have the potential to redefine their respective industries. They have a diverse investment portfolio spanning across various sectors, including Fintech, Crypto, Edu-Tech, SaaS, Software, Agri-Tech, Health Tech, and Gaming. By strategically investing in these areas, Better aims to support and nurture startups that are pushing the boundaries of technology and creating significant impact. Their expertise lies in identifying promising ventures and providing them with the necessary resources and guidance to thrive in their respective markets.",
    "investments": 123,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/saggarwa08/",
      "twitter": "",
      "website": "https://www.bettercapital.vc/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Better Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1b9_klub.svg"
      },
      {
        "name": "Better Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac15f_Airmeet.svg"
      },
      {
        "name": "Better Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1ba_better.svg"
      }
    ],
    "pocName": "Sahil Aggarwal",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "tradeindia-com",
    "name": "Bikky Khosla",
    "type": "Angel Investor",
    "title": "CEO at Tradeindia.com",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "HealthTech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1fb_188.%20Bikky%20Khosla.webp",
    "about": "Bikky Khosla is an Angel Investor from Delhi. Prominent investment areas are Apps, Food and Beverage, Edu-Tech and has invested in startups like We360.Ai, Lal10, Subcom & 13 others.",
    "investments": 16,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/bikky-khosla-46b23/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Tradeindia.com",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac304_Clensta.svg"
      },
      {
        "name": "Tradeindia.com",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac305_Knudge%20me.svg"
      },
      {
        "name": "Tradeindia.com",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac301_we3.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "binny-bansal",
    "name": "Binny Bansal",
    "type": "Angel Investor",
    "title": "Co-founder at Flipkart",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Consumer",
      "HealthTech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac020_0x0.webp",
    "about": "Binny Bansal is a renowned Indian billionaire Internet entrepreneur, recognized for his significant contributions to the e-commerce industry. As the Co-founder and Executive Chairman at xto10x Technologies, he continues to drive innovation and growth in the tech sector. Binny Bansal also holds the position of Co-founder at Flipkart, a pioneering e-commerce platform that he established in 2007 alongside Sachin Bansal (no relation). He initially served as the Chief Operating Officer and later took on the role of Chief Executive Officer (CEO). Alongside his entrepreneurial ventures, Binny Bansal shares his expertise as a Board Advisor at Udhyam Learning Foundation and N/Core. His leadership and entrepreneurial acumen have made a lasting impact on the digital landscape in India.",
    "investments": 71,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/binnybansal/",
      "twitter": "https://twitter.com/binnybansal",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Flipkart",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0f9_roposo.svg"
      },
      {
        "name": "Flipkart",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0fa_curefit.svg"
      },
      {
        "name": "Flipkart",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0c8_flipkart.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "titan-capital",
    "name": "Bipin Shah",
    "type": "Angel Investor",
    "title": "Partner at Titan Capital",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac20f_150.%20Bipin%20Shah.webp",
    "about": "Bipin Shah, a seasoned angel investor and partner at Titan Capital, a reputable Venture Capital firm, specializes in nurturing early-stage startups led by talented entrepreneurs. His commitment to empowering passionate founders early on in their journeys led him to initiate \"Chai with Titan,\" a mentorship and feedback program providing valuable guidance and support.",
    "investments": 23,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/bipin-shah-81510421/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Titan Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2b1_Convin.svg"
      },
      {
        "name": "Titan Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2b2_Anveshan.svg"
      },
      {
        "name": "Titan Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2b3_Chefkraft.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "blume",
    "name": "Blume",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "SaaS",
      "HealthTech",
      "Consumer",
      "Mobility"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac029_logo-highres.webp",
    "about": "Blume Ventures is a seed-stage venture fund that focuses on providing funding in the range of $50K-$250K to technology-centric startups. They go beyond just financial support and actively mentor and support the startups they invest in. With a diverse portfolio, Blume Ventures invests in sectors such as software, mobile, e-commerce, and more. They have a particular interest in entrepreneurs who are addressing prevailing problems in large markets with innovative solutions. By offering both capital and guidance, Blume Ventures aims to fuel the growth and success of early-stage startups in the tech ecosystem. Blume's cheque sizes are now at $400k to $750k.",
    "investments": 305,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/radhikaagar/",
      "twitter": "https://twitter.com/radhika_agar",
      "website": "https://blume.vc/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Blume",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac112_Cashify.svg"
      },
      {
        "name": "Blume",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac113_HealthifyMe.svg"
      },
      {
        "name": "Blume",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac114_Taxiforsure.svg"
      }
    ],
    "pocName": "Radhika Agarwal",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "campus-fund",
    "name": "Campus Fund",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "SaaS",
      "HealthTech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac042_image%2058.webp",
    "about": "Campus Fund is a Bengaluru-based venture capital firm that was established in 2020. With a focus on investing in emerging technologies, Campus Fund specializes in sectors such as AI and ML, Apps, Commerce, and Shopping. They have made notable investments in startups including D-Nome, Exmyb, Healthysure, and two other startups, contributing to the growth and development of these innovative companies. Campus Fund aims to identify and support promising startups with disruptive ideas and strong growth potential. By providing capital and strategic guidance, Campus Fund aims to help these startups thrive and make a significant impact in their respective industries. Their average cheque size is around $60,000.",
    "investments": 12,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/chiranjeevanand/",
      "twitter": "",
      "website": "https://www.yourcampusfund.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Campus Fund",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac136_we360.ai.svg"
      },
      {
        "name": "Campus Fund",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac137_Park%20Smart.svg"
      },
      {
        "name": "Campus Fund",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac138_Healthysure.svg"
      }
    ],
    "pocName": "Chiranjeev Anand",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "caspian-investments",
    "name": "Caspian Investments",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early",
      "Growth"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac066_Caspian%20equity.webp",
    "about": "Caspian Impact Investments is a provider of digital corporate lending services aimed at investing in enterprises that address access and efficiency challenges while making a positive social or environmental impact. With a focus on supporting business growth and expansion, Caspian Impact Investments offers lending and investment products, along with valuable advice and connections.",
    "investments": 18,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/pranav-varma-42940370/",
      "twitter": "",
      "website": "https://caspianequity.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "Pranav Varma",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "chakradhar-gade",
    "name": "Chakradhar Gade",
    "type": "Angel Investor",
    "title": "Co-founder at Country Delight",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Edtech",
      "Agritech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0c3_113.%20Chakradhar%20Gade.webp",
    "about": "Chakradhar Gade, an Angel Investor based in Gurugram, is the Founder of Country Delight. With a focus on various sectors including Commerce and Shopping, Agritech and Farming, and Media and Entertainment, he has made strategic investments in startups such as Rigi, Ginglani Distillers, Nxtwave, and two others. With his expertise and experience, Chakradhar Gade plays a crucial role in supporting and nurturing promising ventures in these industries, contributing to the growth and development of the startup ecosystem.",
    "investments": 5,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/chakradhar-gade-1025a12/",
      "twitter": "https://twitter.com/chakrigade",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Country Delight",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac16e_bliss%20club.svg"
      },
      {
        "name": "Country Delight",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1d5_krishify.svg"
      },
      {
        "name": "Country Delight",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac183_Nxt%20Wave.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "csd-associates-india",
    "name": "Chand Das",
    "type": "Angel Investor",
    "title": "Business & Leadership Coach at CSD Associates, India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "SaaS",
      "Mobility"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546c95c06bd3eef0bdd758_215.%20Chand%20Das.webp",
    "about": "Currently operating as both an executive coach and an angel investor, my previous role encompassed serving as the CEO of Education & Stationery Products at ITC. My extensive professional journey spans over three and a half decades, characterized by my proficiency in establishing and managing scaled B2B and B2C enterprises within the Indian market. My fervor for angel investing and mentoring remains unwavering. My objective revolves around aiding the triumph of executives, business professionals, and entrepreneurs. This commitment drives me to remain actively engaged in networking endeavors involving alumni from renowned institutions such as IIT and IIM. Throughout my career, I have accumulated substantial experience, fostering a robust foundation in orchestrating and sustaining successful ventures. My present focus on executive coaching and angel investing reflects my enduring dedication to facilitating the growth and triumph of individuals and enterprises alike.",
    "investments": 4,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/chanddas9a85bb13/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "CSD Associates, India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546c848974a385ea7feb04_Autonxt.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "scope-eknowledge-center-p-ltd-india",
    "name": "Chandu Nair",
    "type": "Angel Investor",
    "title": "Executive Director & Cofounder at Scope eKnowledge Center P Ltd, India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65531fba86fc55805b4ed790_250.%20Chandu%20Nair.webp",
    "about": "Chandu, a member of The Chennai Angels, possesses over three decades of diverse experience spanning industry, consultancy, media, and information services. He is a cofounder of Scope eKnowledge Center, a trailblazing knowledge process outsourcing company that expanded to over 1000 employees before he departed. His primary responsibilities included driving business growth and securing funding. He is deeply passionate about fostering enterprise development and transformation. Chandu boasts handson involvement with angel investing, venture capital, and strategic investor funding. He has also been part of two successful business exits. Despite this, he was also engaged in establishing other businesses, many of which saw modest success or didn't flourish. Presently, he concentrates on entrepreneurship and enhancing the entrepreneurial ecosystem. He provides guidance to entrepreneurs and businesses in establishing and nurturing their ventures. Chandu has made investments in several startups, although the outcomes are yet to be determined. He contributes to the advisory board of a private equity firm based in Chennai. He is an enthusiastic charter member of TiE Chennai and has actively participated in its mentoring initiatives. Holding a postgraduate degree in Management from IIM Ahmedabad, he has contributed to various industry discussions both nationally and internationally and has served as a visiting faculty member at various business schools.",
    "investments": 8,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/chandunair/?ref=ynos.in",
      "twitter": "https://twitter.com/chandunair?ref=ynos.in",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "chiratae",
    "name": "Chiratae",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "SaaS",
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac028_chiratae-logo.webp",
    "about": "Chiratae Ventures, formerly known as IDG Ventures, is a technology venture fund with a focus on India. They invest in seed and early-stage startups in various sectors including consumer, software, fintech, and health tech. They actively invest in startups with a cheque size ranging from $5-15 million. Chiratae Ventures has a notable portfolio of startups that they have invested in, including Active.ai, Aroleap, Bytelearn, and Emotix. Their investment strategy revolves around identifying promising startups and providing them with the necessary capital and support to help them grow and succeed. Chiratae Ventures plays an active role in mentoring and guiding the startups in their portfolio to help them achieve their goals and reach their full potential. They actively invest in startups with a cheque size ranging from $5-15 million.",
    "investments": 140,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/kailashnath/",
      "twitter": "https://twitter.com/kailash_nath",
      "website": "https://www.chiratae.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Chiratae",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac10d_Yatra.svg"
      },
      {
        "name": "Chiratae",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac10e_lenskart.svg"
      },
      {
        "name": "Chiratae",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac10f_firstcry.svg"
      }
    ],
    "pocName": "Kailash Nath",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "zomato",
    "name": "Deepinder Goyal",
    "type": "Angel Investor",
    "title": "Founder & CEO at Zomato",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1f1_197.%20Deepinder%20Goyal.webp",
    "about": "Deepinder Goyal, the Founder and CEO of Zomato, is at the helm of the renowned company. Before establishing Zomato, Deepinder's professional journey involved a stint as a management consultant with Bain and Company in New Delhi. During his tenure at Bain, the idea of an online restaurant information platform was conceived by Deepinder as he observed the demand for menu cards among his colleagues. In 2008, he took the bold step of leaving his role at Bain to initiate Zomato (initially known as foodiebay), which he started from his apartment. Since then, he has led the company's strategic direction and product development. Deepinder holds a degree in Mathematics and Computing from IIT Delhi, graduating in 2005, and originates from Muktsar in Punjab.",
    "investments": 17,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/deepigoyal/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Zomato",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac311_Scaler.svg"
      },
      {
        "name": "Zomato",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac312_Park%2B.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "dheeraj-jain",
    "name": "Dheeraj Jain",
    "type": "Angel Investor",
    "title": "Director at Redcliff Capital",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "SaaS",
      "HealthTech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac017_Dheeraj-Jain-Founder-Redcliffe-Labs-e1664773347478.webp",
    "about": "Dheeraj Jain holds several prominent roles in various organizations. He is the Co-Founder of Future Therapeutics and serves as the Managing Director and Board Member at Redcliffe Life Sciences. Additionally, he is a Co-Founder and Board Member of Deyor Rooms, as well as the Managing Partner at Redcliffe Capital. Mr. Jain also serves as an Advisor at Qume, a financial software company. Furthermore, he has Co-Founded EverGreen Power Solutions, Deyor Camps, and PeeSafe, where he holds Board Member positions.",
    "investments": 11,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/dheeraj-jain-4961352/",
      "twitter": "https://twitter.com/dheeraj90179631",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Redcliff Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0e2_yumlane.svg"
      },
      {
        "name": "Redcliff Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0e3_deyor%20camps.svg"
      },
      {
        "name": "Redcliff Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0e4_shaadi%20saga.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "agility-ventures-c2d1b",
    "name": "Dhianu Das",
    "type": "Angel Investor",
    "title": "Founder at Agility Ventures",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "HealthTech",
      "Consumer",
      "Media",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1f8_191.%20Dhianu%20Das.webp",
    "about": "Dhianu Das stands out as a prominent luminary in the world of business, boasting a portfolio as a serial entrepreneur and dedicated investor. His mission centers around empowering aspiring entrepreneurs and startups through strategic investments, invaluable mentorship, and the enhancement of capacities that pave the way for rapid business development. His extensive background encompasses investments, operational expertise, strategic insights, and development acumen, which have collectively shaped his role in nurturing numerous startups into thriving enterprises. With an impressive track record, he has not only spearheaded impactful business turnarounds but has also successfully established new ventures across the breadth of India.Dhianu Das embodies excellence as a businessman, an extraordinary mentor offering unparalleled clarity, and a strategist adept at devising and executing plans. He effortlessly combines the qualities of a visionary, a mentor, a shrewd businessman, and a dreamer, making him a well-rounded force in the entrepreneurial realm. As an active angel investor, he extends his support to a multitude of startups dedicated to inventing transformative and solution-oriented products. His investments not only entail financial backing but also the unwavering belief in companies and individuals who harbor unique and visionary business concepts, driven by the passion to revolutionize the world.",
    "investments": 11,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/dhianu/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Agility Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2e9_Brain%20wired.svg"
      },
      {
        "name": "Agility Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac309_Cleardekho.svg"
      },
      {
        "name": "Agility Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2f4_Dolphin%20Chat.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "dilip-khandelwal",
    "name": "Dilip Khandelwal",
    "type": "Angel Investor",
    "title": "MD & CEO at Deutsche India",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac088_66.%20Dilip%20Khandelwal.webp",
    "about": "Khandelwal is a seasoned business executive with 21 years of experience in leading technology-driven organizations. Currently the Managing Director of Deutsche Bank, he also served as President of SAP HANA Enterprise Cloud. With a focus on open innovation, he mentors B2B startups and is an angel investor in several companies. Recognized with awards and leadership accolades, he is a frequent speaker at industry events. Khandelwal holds engineering and management degrees from Mumbai University and the Indian School of Business.",
    "investments": 9,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/dilipkhandelwal",
      "twitter": "https://twitter.com/dilipkhandelwa?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Deutsche India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac17d_Truefoundry.svg"
      },
      {
        "name": "Deutsche India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac17e_Signzy.svg"
      },
      {
        "name": "Deutsche India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0ca_Limechat.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "indiamart-com",
    "name": "Dinesh Agarwal",
    "type": "Angel Investor",
    "title": "Founder & CEO at IndiaMART.COM",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac22a_130.%20Dinesh%20Agarwal.webp",
    "about": "Dinesh Agarwal is a prominent Indian entrepreneur and the founder and CEO of IndiaMART, a leading online B2B marketplace in India. In addition to his successful venture, he has become a significant investor, supporting various start-ups. His diverse portfolio includes investments in companies like Curofy (a medical app), Wishberry (a crowdfunding platform), SilverPush (a marketing platform), InnerChef (a food tech start-up), AppVirality (a developer startup), and more. With his strategic investments, Dinesh Agarwal continues to contribute to the growth of the Indian start-up ecosystem.",
    "investments": 33,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/advanidinesh/?originalSubdomain=in",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "IndiaMART.COM",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac25d_50%20Fin.svg"
      },
      {
        "name": "IndiaMART.COM",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac27d_kiko.svg"
      },
      {
        "name": "IndiaMART.COM",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac27e_Splitkart.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "dsg-partners",
    "name": "DSG Partners",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac06a_DSG-vc.webp",
    "about": "DSG Consumer Partners is an investment company specializing in consumer businesses, primarily taking minority equity positions in unlisted companies. While prioritizing growth and liquidity, DSG Consumer Partners also considers control deals in conjunction with the right management teams, providing capital and support to fuel the success of these ventures.",
    "investments": 71,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/aditya-gogri-741982127/",
      "twitter": "",
      "website": "https://dsgcp.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "DSG Partners",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1b1_Farmley.svg"
      },
      {
        "name": "DSG Partners",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1b2_Supertails.svg"
      },
      {
        "name": "DSG Partners",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0ea_oyo.svg"
      }
    ],
    "pocName": "Aditya Gogri",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "endiya",
    "name": "Endiya",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac074_Endiya.png",
    "about": "Endiya Partners is a Hyderabad-based venture capital firm specializing in investments in areas such as artificial intelligence, machine learning, agritech, and mobile applications. They have an extensive portfolio of invested startups, including Alphaics, Aqua Exchange, and Cygni Energy, among others.",
    "investments": 21,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/chirag-ginglani/",
      "twitter": "https://twitter.com/chiragginglani?lang=en",
      "website": "https://www.endiya.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Endiya",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1a4_ekincare.svg"
      },
      {
        "name": "Endiya",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1a5_Aqua%20Exchange.svg"
      },
      {
        "name": "Endiya",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1a6_Cult%20fit.svg"
      }
    ],
    "pocName": "Chirag Ginglani",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "eximius-ventures",
    "name": "Eximius Ventures",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Pre-Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/66e29997a84d11c18b83f86c_Eximius%20Ventures.jpg",
    "about": "Eximius Ventures is a pre-seed fund that invests up to $500k in startups at the pre-product or early traction stages. With a thesis-driven approach, it focuses on sectors like fintech, health tech, media/entertainment, and gaming. The fund provides comprehensive support to its portfolio, including help with follow-on fundraising, strategic hiring, access to a global network, and building strategic partnerships.",
    "investments": 23,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/eximius-capital-ventures/?originalSubdomain=in",
      "twitter": "",
      "website": "https://eximiusvc.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Eximius Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/66e29d617c9e772ee89e1011_Jar-App-Logo%202.png"
      },
      {
        "name": "Eximius Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/66e29d664ee340114715114f_Hood%203.png"
      }
    ],
    "pocName": "Preeti N",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sharechat",
    "name": "Farid Ahsan",
    "type": "Angel Investor",
    "title": "CoFounder at ShareChat",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/655464f5c732cb3fd4702d78_226.%20Farid%20Ahsan.webp",
    "about": "Farid Ahsan holds the esteemed position of CoFounder and Chief Operating Officer at Sharechat, a significant role that underscores his pivotal contributions to the company's growth and operational excellence. Hailing from the prestigious IIT Kanpur, his academic journey led him to achieve a Bachelor of Technology degree with a specialization in Material Science and Engineering, reflecting his commitment to academic excellence and a keen interest in the sciences. As a CoFounder of Sharechat, Farid Ahsan has played an instrumental role in shaping the trajectory of the company. His responsibilities as Chief Operating Officer encompass a diverse range of strategic, operational, and leadership initiatives that contribute to the company's dynamic evolution within the competitive landscape of social media and content sharing.",
    "investments": 14,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/faridahsan/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "fireside-ventures",
    "name": "Fireside Ventures",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed",
      "Early"
    ],
    "industries": [
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac045_image%2061.webp",
    "about": "Fireside Ventures is an early-stage venture fund that specializes in investing in consumer brands. With a strong focus on supporting young startups, Fireside provides not only financial investment but also in-house resources and access to a network of partners and advisors. The fund is dedicated to guiding and nurturing these startups through their growth and evolution. Fireside Ventures seeks to invest in a diverse range of consumer brands across sectors including food and beverages, personal care, kids and education, lifestyle, and home products. By leveraging their expertise and network, Fireside Ventures aims to help these brands establish a strong presence in the market and achieve long-term success.",
    "investments": 32,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/vasudha-mathur-347a55b9/",
      "twitter": "https://twitter.com/vsdhamtr?lang=en",
      "website": "https://firesideventures.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Fireside Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac144_Mamaearth.svg"
      },
      {
        "name": "Fireside Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac145_boAt.svg"
      },
      {
        "name": "Fireside Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac146_Yoga%20Bar.svg"
      }
    ],
    "pocName": "Vasudha Mathur",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "first-cheque",
    "name": "First Cheque",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Consumer",
      "Edtech",
      "Digital Entertainment",
      "Mobility"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac040_image%2057.webp",
    "about": "As Founders ourselves, we have a deep passion for building and scaling tech products and companies. With First Cheque, our focus is on investing in the next generation of Indian technology entrepreneurs. We believe in being sector agnostic, allowing us to support a diverse range of ventures. Our main criterion is backing strong teams that are developing tech products for large markets. Early-stage investments can be inherently uncertain, but we embrace the excitement and potential that come with it. Our goal is to provide the necessary support and resources to help these entrepreneurs thrive and succeed in their journey. The average cheque size is about $60k.",
    "investments": 100,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/anshpratapsingh/",
      "twitter": "",
      "website": "https://witter.com/anshpsingh"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "First Cheque",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac128_mailmodo.svg"
      },
      {
        "name": "First Cheque",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac129_zeda.io.svg"
      },
      {
        "name": "First Cheque",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac12a_rocketlane.svg"
      }
    ],
    "pocName": "Ansh Pratap Singh",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "fosun-rz",
    "name": "Fosun RZ",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Early",
      "Growth",
      "Pre-Seed"
    ],
    "industries": [
      "Edtech",
      "Fintech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac068_Fosun%20Rz%20capital.webp",
    "about": "Fosun RZ Capital is a venture capital firm that was founded in 2013. The firm is committed to investing in high-growth, high tech companies in major economic growth regions and has fostered innovation ecosystems around the world, with offices in China, the United States, India, Israel, Indonesia, and Singapore.",
    "investments": 56,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/divijarao/",
      "twitter": "",
      "website": "https://www.frzcapital.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Fosun RZ",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1af_trell.svg"
      },
      {
        "name": "Fosun RZ",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0ee_ixigo.svg"
      },
      {
        "name": "Fosun RZ",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1b0_Delhivery.svg"
      }
    ],
    "pocName": "Divija Rao",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ganesh-krishnan",
    "name": "Ganesh Krishnan",
    "type": "Angel Investor",
    "title": "Partner at Growth Story",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Digital Entertainment"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac084_70.%20Ganesh%20Krishnan.webp",
    "about": "Ganesh Krishnan is a prominent entrepreneur and angel investor based in India. With a keen interest in sectors like Consumer Internet, Healthcare, Education, and Technology, Ganesh has played a pivotal role in several successful startups. He is the director of GrowthStory, an entrepreneurship platform that collaborates with renowned venture capitalists and entrepreneurs to support greenfield ventures. Ganesh has founded and promoted successful startups like BigBasket.com, Bluestone, Portea Medical, and HomeLane, leveraging his expertise in raising funds, building teams, and scaling operations. He has also contributed to the field of education as an Adjunct Professor at IIM Bangalore and as a member of the Board of Governors at IIM Calcutta.",
    "investments": 21,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ganeshk/?originalSubdomain=in",
      "twitter": "https://twitter.com/ganeshk03?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Growth Story",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac189_Homelane.svg"
      },
      {
        "name": "Growth Story",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac18a_Freshmenu.svg"
      },
      {
        "name": "Growth Story",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac18b_Verloop.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "oaktree-sports-india",
    "name": "Gaurav Kapur",
    "type": "Angel Investor",
    "title": "Founder at Oaktree Sports, India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534df1161fce654fd65fd7_237.%20Gaurav%20Kapur.webp",
    "about": "Hailing from the bustling city of Mumbai, Gaurav Kapur stands out as a notable Angel Investor, leaving an indelible mark on the investment landscape. His strategic focus encompasses vital sectors, including Artificial Intelligence (AI) and Machine Learning (ML), Food and Beverage, and Applications (Apps). Through his investments, he has played a pivotal role in fueling the growth and development of startups like Blockfenders, Dubdub.Ai, Moneyyapp, and three other notable ventures. Gaurav Kapur's role as an Angel Investor is marked by his dedication to fostering innovation and driving entrepreneurial success. His influence extends far beyond financial backing, as he actively engages with startups, offering valuable insights, guidance, and mentorship. This collaborative approach underscores his commitment to not only providing capital but also playing a significant role in propelling emerging companies towards success.",
    "investments": 6,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/gauravkapur15437018a/",
      "twitter": "https://twitter.com/gauravkapur",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "unacademy-74174",
    "name": "Gaurav Munjal",
    "type": "Angel Investor",
    "title": "CoFounder and CEO at Unacademy",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546e3fa8007ac10fde384e_208.%20Gaurav%20Munjal.webp",
    "about": "Gaurav Munjal is a highly accomplished entrepreneur who serves as the CoFounder and CEO of Unacademy. He is also the visionary mind behind Flatchat. Unacademy, India's leading educational platform, stands as a testament to his innovative leadership. Under his guidance, Unacademy has evolved into a dynamic hub for learning and knowledge sharing. Gaurav's entrepreneurial journey is deeply rooted in his role as a CoFounder and CEO of Unacademy. He has played a pivotal role in shaping the platform into a transformative force in the education sector. Additionally, his visionary efforts have led to the establishment of Flatchat, showcasing his prowess in identifying and acting upon diverse business opportunities. Unacademy's ascendancy to becoming India's largest learning platform is a testament to Gaurav Munjal's strategic acumen and relentless dedication. His commitment to providing accessible and quality education has resonated with millions of learners, revolutionizing the way education is perceived and pursued.",
    "investments": 40,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/gauravmunjal8/",
      "twitter": "https://twitter.com/gauravmunjal",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Unacademy",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546e357af72d605fa5930b_turnip%20.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "gemba-capital",
    "name": "Gemba Capital",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Digital Entertainment"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac062_Gemba%20capital.webp",
    "about": "Gemba Capital is an India-based micro VC investor that focuses on early-stage investments, particularly in seed and pre-seed rounds. With a mission to institutionalize seed investments in India, Gemba Capital specializes in consumer tech, SaaS, and tech-enabled businesses with strong network effects. The firm seeks out startups that tap into the immense potential of the mid to lower-income households in India, and for SaaS startups, they prioritize companies capable of creating exceptional products for a global market. With a hands-on approach, Gemba Capital actively supports founders who are brave problem solvers and works closely with them to provide valuable expertise and guidance throughout their entrepreneurial journey.",
    "investments": 28,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/adithpodhar/",
      "twitter": "",
      "website": "https://gembacapital.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Gemba Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac15f_Airmeet.svg"
      },
      {
        "name": "Gemba Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac160_Plum.webp"
      },
      {
        "name": "Gemba Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1b8_gemba.svg"
      }
    ],
    "pocName": "Adith Podhar",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "mamaearth",
    "name": "Ghazal Alagh",
    "type": "Angel Investor",
    "title": "Founder at Mamaearth",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac230_124.%20Ghazal%20Alagh.webp",
    "about": "A Corporate trainer turned artist cum entrepreneur Ghazal Alagh, co-founded Mamaearth, driven by the passion for making early parenting, stress-free. As the Co-Founder and Chief Mama at Mamaearth, India's first toxin-free baby care brand, Ghazal is responsible for product development and community management.",
    "investments": 9,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ghazal-alagh-9755a0128/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Mamaearth",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac26a_Unscript.ai.svg"
      },
      {
        "name": "Mamaearth",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac26b_Humpy%20Farms.svg"
      },
      {
        "name": "Mamaearth",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac26c_bliss%20club.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "giridhar-malpani",
    "name": "Giridhar Malpani",
    "type": "Angel Investor",
    "title": "Founder at Climber Capital",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Digital Entertainment",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac086_68.%20Giridhar%20Malpani.webp",
    "about": "Giridhar has been an investor and an entrepreneur. He has been associated as an investor with many brands like brights chapms,alpha ai,threedots,zeda.io,crejo.fun etc. He has completed his MBA from IIM bangalore .",
    "investments": 11,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/giridhar-malpani-b65323148/",
      "twitter": "https://twitter.com/malpanigiri?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Climber Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac183_Nxt%20Wave.svg"
      },
      {
        "name": "Climber Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac184_Crejo.svg"
      },
      {
        "name": "Climber Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac185_Creative%20Galileo.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "girish-mathrubootham",
    "name": "Girish Mathrubootham",
    "type": "Angel Investor",
    "title": "CEO at Freshworks",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "SaaS",
      "Consumer",
      "Edtech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac015_60eddf32ea37df820cf3c229_girish-mathrubootham.webp",
    "about": "Girish Mathrubootham is a multifaceted professional, contributing significantly to the technology and entrepreneurial landscape. He is a member of The Chennai Angels, an angel investment group. As the Founder and CEO of Freshworks Inc. (formerly Freshdesk), a globally renowned company specializing in customer support software, Girish has amassed over 16 years of experience in product management. He possesses a strong passion for developing technology products with user-friendly interfaces.",
    "investments": 42,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/girish1/",
      "twitter": "https://twitter.com/mrgirish",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Freshworks",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0dc_whatfix.svg"
      },
      {
        "name": "Freshworks",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0dd_gobumpr.svg"
      },
      {
        "name": "Freshworks",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0de_the%20ken.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "doordash",
    "name": "Gokul Rajaram",
    "type": "Angel Investor",
    "title": "Product and Business Helper at DoorDash",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "Edtech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1f2_196.%20Gokul%20Rajaram.webp",
    "about": "Gokul Rajaram holds the role of Product and Business Facilitator at DoorDash, while also serving as a Board Member at Coinbase and Pinterest. He additionally contributes as an Investor and Advisor across various ventures. Ben Silbermann, the CEO and co-founder of Pinterest, expressed enthusiasm about Gokul's diverse expertise and innovation, anticipating valuable contributions to the board. Gokul's accomplished background in shopping, digital advertising, and content is expected to greatly enhance the user and advertiser experiences on Pinterest. Presently, Rajaram is a member of DoorDash's executive team, overseeing the premium food ordering service, Caviar, following its acquisition by DoorDash for $410 million from Square in the previous year.",
    "investments": 34,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/gokulrajaram1/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "DoorDash",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac30f_Observe.Ai.svg"
      },
      {
        "name": "DoorDash",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2c1_Daolens.svg"
      },
      {
        "name": "DoorDash",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac310_Airmeet.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "shopatplaces",
    "name": "Hari Balasubramanian",
    "type": "Angel Investor",
    "title": "Director at Shopatplaces",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "SaaS",
      "Consumer",
      "Media",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546462fd4185156a0de47a_229.%20Hari%20Balasubramanian.webp",
    "about": "Hari is an experienced entrepreneur, angel investor, mentor, and advisor with a passion for lifelong learning. Currently, he is focusing on understanding AI tools and finding practical applications for them in various domains. He actively invests in innovative startups and promotes lean startup principles, global thinking, local action, and fostering an organizational culture suitable for innovation. Utilizing OKRs, AI tools, and other proven methodologies, Hari helps founders stay on track and make progress. He has led numerous deals, predominantly in the Indian Angel Network and some in LetsVenture, facilitating exits and fundraising support for investors and portfolio companies. As a member of the Advisory Board of Ivy Cap Ventures, a Mumbaibased venture capital firm, Hari contributes to the decisionmaking process for investments in various companies. IvyCap Ventures has made 60 investments in companies such as Celcius, Eggoz, Deep Routed, Purplle, Clovia, Biryani by Kilo, Miko, Bluestone, FTCash, and others.",
    "investments": 8,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/bhari/",
      "twitter": "https://twitter.com/https://twitter.com/harsha99",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "smile-group-b6ce8",
    "name": "Harish Bahl",
    "type": "Angel Investor",
    "title": "Founder & Chairman at Smile Group",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Edtech",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/655468a12eb1c68699ca6be5_223.%20Harish%20Bahl.webp",
    "about": "A serial entrepreneur renowned for his achievements, having established and nurtured prominent ecommerce and digital media enterprises across Asia and emerging markets. The founder of Smile Group, a noteworthy Asian Internet Group headquartered in India, with substantial holdings within the consumer internet and digital media sectors. Functioning as a business catalyst, Smile Group collaborates with exceptional entrepreneurs, venture capitalists, and global corporations to lay the foundation for digital enterprises from the ground up. Their prowess extends to expanding operations and broadening global presence by facilitating international launches. Notably, Smile Group has previously forged partnerships and crafted businesses in collaboration with industry leaders such as AirBnB, WPP Digital, Ogilvy, Yahoo!, and ScanGroup (Africa). Their rapport with prominent Silicon Valley and European investors further underscores their industry influence.",
    "investments": 11,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/harishbahl/",
      "twitter": "https://twitter.com/harish_bahl",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Smile Group",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/6554689b5bf84599b50b59e8_zapr.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "cocubes-com-india",
    "name": "Harpreet Singh Grover",
    "type": "Angel Investor",
    "title": "CoFounder & CEO at CoCubes.com, India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534a993439e5a5b08b8bc0_246.%20Harpreet%20Singh%20Grover.webp",
    "about": "Harpreet Singh Grover, a cofounder of CoCubes.com, helped create a platform connecting education and business. The venture evolved into an online assessments firm and was acquired by Aon Hewitt in 2016. During their time at IIT Bombay, Grover initiated the BePrepared project to share interview and jobrelated experiences. Their interests span education, career development, mountaineering, and hill running. Grover also supports startups as an angel investor and excels in bringing innovative ideas to life while forging connections between diverse elements and individuals.",
    "investments": 17,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/hsgrover/?ref=ynos.in",
      "twitter": "https://twitter.com/hsgrover?ref=ynos.in",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "fynd",
    "name": "Harsh Shah",
    "type": "Angel Investor",
    "title": "Co-Founder at Fynd",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "SaaS",
      "Consumer",
      "Digital Entertainment",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac200_182.%20Harsh%20Shah.webp",
    "about": "In 2012, Harsh Shah embarked on his entrepreneurial journey by co-founding Shopsense Retail Technologies Private Limited. Alongside this accomplishment, Harsh Shah has also made his mark as a Co-founder at Nova Global, further showcasing his dedication to innovation and business development. Demonstrating his commitment to fostering a culture of entrepreneurship, he holds the esteemed position of being the Head of the Entrepreneurship Cell, where he actively encourages and nurtures aspiring entrepreneurs. Harsh Shah's educational foundation was established at the prestigious IIT Bombay, where he pursued his studies and graduated in the year 2010. His time at this renowned institution not only equipped him with the academic knowledge but also instilled in him the qualities of perseverance, critical thinking, and a passion for exploring new frontiers. Through his co-founding roles, leadership within the Entrepreneurship Cell, and educational background from IIT Bombay, Harsh Shah has demonstrated a multifaceted approach to contributing to the business landscape. His journey stands as a testament to his entrepreneurial spirit and his dedication to shaping the future of innovation and commerce.",
    "investments": 11,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/harshshah/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Fynd",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2d2_Seekho.svg"
      },
      {
        "name": "Fynd",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2f8_Mailmodo.svg"
      },
      {
        "name": "Fynd",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2b5_Onsurity.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "silverpush-india",
    "name": "Hitesh Chawla",
    "type": "Angel Investor",
    "title": "CoFounder & CEO at SilverPush, India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "Edtech",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/655462501e69ea25eece5829_234.%20Hitesh%20Chawla.webp",
    "about": "Hitesh Chawla, a distinguished Angel Investor hailing from Gurugram, holds a significant presence in the investment landscape. His strategic focus encompasses vital sectors including Business Support Services, Artificial Intelligence (AI) and Machine Learning (ML), and Information Technology. His investments have left an indelible mark on noteworthy startups such as Tradex, Hoggy, Zenduty, and three other notable ventures. With a commitment to nurturing innovation and fostering growth, Hitesh Chawla has positioned himself as a catalyst within the startup ecosystem. His contributions extend beyond financial backing, as he offers strategic insights, guidance, and mentorship to the startups he supports. This collaborative approach demonstrates his dedication to not only providing capital but also to actively aiding the growth and development of emerging companies.",
    "investments": 6,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/hiteshchawla/",
      "twitter": "https://twitter.com/hiteshchawla",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "hyderabad-angels",
    "name": "Hyderabad Angels",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac237_Hyderabad%20Angels%20VC%20logo.png",
    "about": "Hyderabad Angels (HA) invests in promising early stage companies globally to create tangible as well as intangible value. Established in 2012, HA investors are leading venture capitalists, entrepreneurs and business leaders, who, with their financial and business acumen, are committed to providing support to the Indian and global start-up ecosystem. Besides providing capital to businesses that we partner with, we also mentor entrepreneurs and provide them access to our professional and personal network thereby helping businesses in achieving scale and exponential growth. Although based out of Hyderabad, we source and invest in opportunities from all over India as well as the rest of the world including USA, UK, Singapore, UAE among other countries. HA has over 120 members from diverse backgrounds who have strong operational experience to scale and create value companies.",
    "investments": 35,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/hyderabad-angels/",
      "twitter": "",
      "website": "https://hyderabadangels.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Hyderabad Angels",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2f5_HA.svg"
      },
      {
        "name": "Hyderabad Angels",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2f6_Glynk.svg"
      },
      {
        "name": "Hyderabad Angels",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2f7_Skillenza.svg"
      }
    ],
    "pocName": "Esha Rao",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "incubate-fund",
    "name": "Incubate Fund",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac060_Incubate%20fund%20VC.webp",
    "about": "Incubate Fund, originally from Japan, is a leading seed-focused venture capital fund that established Incubate Fund India in 2016 to target pre-seed and seed-stage startups in India. With a diverse portfolio of over 200 investments across Asia, Incubate Fund offers hands-on support, mentoring, and guidance to its portfolio companies, leveraging their experiences and studies to drive startup success.",
    "investments": 22,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/rajeevranka/",
      "twitter": "",
      "website": "https://www.incubatefund.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Incubate Fund",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1b6_gigindia.svg"
      },
      {
        "name": "Incubate Fund",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1b7_yulu.svg"
      },
      {
        "name": "Incubate Fund",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac160_Plum.webp"
      }
    ],
    "pocName": "Rajeev Ranka",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "india-quotient",
    "name": "India Quotient",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed",
      "Early"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "HealthTech",
      "Consumer",
      "Digital Entertainment"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac047_image%2060.webp",
    "about": "India Quotient is a micro VC firm in India that focuses on investing in companies with innovative and ingenious ideas. They have recently launched IQ Snipers, an accelerator program specifically designed for early-stage startups in sectors such as consumer internet and mobile, among others. IQ Snipers aims to provide support to startups at the idea stage by making investments ranging from INR 20-25 lacs through a convertible note, with a maximum stake of 2%. By offering this funding opportunity, India Quotient aims to fuel the growth and development of promising startups in their nascent stages, enabling them to turn their ideas into successful ventures.",
    "investments": 85,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/vaishakprashanth/",
      "twitter": "https://twitter.com/itsvaishak",
      "website": "https://www.indiaquotient.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "India Quotient",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac141_Sugar.svg"
      },
      {
        "name": "India Quotient",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac142_Webengage.svg"
      },
      {
        "name": "India Quotient",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac143_Vyapar.svg"
      }
    ],
    "pocName": "Vaishak Prashanth",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "indian-angel-network",
    "name": "Indian Angel Network",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Early"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "Edtech",
      "Mobility",
      "Consumer",
      "Media",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac245_logo-1.webp",
    "about": "Indian Angel Network (IAN) is a network of angel investors. The firm invests in early-stage businesses within a wide range of sectors, including agriculture, gaming, internet, retail, e-commerce, healthcare, lifestyle, semiconductor, education, hospitality, manufacturing, services, financial services, information technology, mobile, and social impact. IAN was founded in 2006 by a group of experienced entrepreneurs and investors. The firm has a strong track record of identifying and backing successful startups. IAN has invested in over 1,500 startups, including several unicorns. IAN's investment process is designed to be efficient and effective. The firm's team of experts evaluates potential investments and identifies the best opportunities for angel investment. IAN also provides its portfolio companies with access to a wide range of resources and support, including capital, mentorship, and advice. IAN is committed to helping startups succeed. The firm believes that by providing early-stage businesses with the capital and resources they need, it can help to create a more vibrant and dynamic startup ecosystem.",
    "investments": 139,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/indian-angel-network/",
      "twitter": "",
      "website": "https://www.ian-fund.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Indian Angel Network",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2e8_Sanfe%20(1).svg"
      },
      {
        "name": "Indian Angel Network",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2e5_Farmart.svg"
      },
      {
        "name": "Indian Angel Network",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2e6_AuraML.svg"
      }
    ],
    "pocName": "Rishabh Chatterjee",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ipv",
    "name": "IPV",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed",
      "Early"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "HealthTech",
      "Consumer",
      "Edtech",
      "Mobility"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac038_IPV.webp",
    "about": "Inflection Point Ventures (IPV) is a leading early-stage angel investing platform that offers comprehensive support to startups. They provide financial and non-financial assistance to their invested companies, ensuring transparency and disclosure to investors. IPV operates across India and globally, allowing investors to access diverse startups and deals without location restrictions. Their investment scope spans various industries, including Healthcare, Sports and Fitness, Retail Finance, HR, AI in hiring, Education, Supply Chain, and Logistics. With a focus on transparency and accessibility, IPV plays a crucial role in supporting early-stage startups and connecting them with potential investors. IPV usually invests around $500k.",
    "investments": 106,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/gautambagga/",
      "twitter": "https://twitter.com/BaggaGautam/photo",
      "website": "https://ipventures.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "IPV",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac151_siply.svg"
      },
      {
        "name": "IPV",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac138_Healthysure.svg"
      },
      {
        "name": "IPV",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac152_samosaparty.svg"
      }
    ],
    "pocName": "Gautam Bagga",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "iron-pillar",
    "name": "Iron Pillar",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed",
      "Early"
    ],
    "industries": [
      "SaaS",
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac035_Iron-Pillar-Logo.webp",
    "about": "Iron Pillar is a venture capital fund that addresses the need for mid-stage technology investments in India. With a focus on supporting companies during the crucial growth phase, Iron Pillar has made notable investments in startups such as FreshtoHome, Servify, Uniphore, Testbook, and Vyome. By providing capital and strategic guidance, Iron Pillar aims to fuel the expansion of these companies and help them reach their full potential. The fund recognizes the importance of supporting entrepreneurs at the mid-stage and plays a crucial role in bridging the gap between early-stage funding and later-stage investments.",
    "investments": 14,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/shivam-agarwal-77604ab8/",
      "twitter": "",
      "website": "https://www.ironpillarfund.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Iron Pillar",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac147_Uniphore.svg"
      },
      {
        "name": "Iron Pillar",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac148_testbook.svg"
      },
      {
        "name": "Iron Pillar",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac149_Freshtohome.svg"
      }
    ],
    "pocName": "Shivam Agarwal",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "iseed",
    "name": "iSeed",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac05c_Iseed.png",
    "about": "Iseed Ventures is a United States-based venture capital firm established in 2014. With a focus on investing in cutting-edge technologies, their prominent investment areas include AI and ML, Apps, and Business Support Services. They have an extensive portfolio of investments, supporting startups such as Chirrup, Daolens, Eximpe, and many others. As an active player in the startup ecosystem, Iseed Ventures provides capital, expertise, and guidance to help these companies grow and succeed in their respective industries. Their strategic investments in innovative startups contribute to the advancement and development of groundbreaking technologies and solutions.",
    "investments": 31,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/utsavsomani/",
      "twitter": "",
      "website": "https://www.iseed.vc/home"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "iSeed",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac158_Everstage.svg"
      },
      {
        "name": "iSeed",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac166_Ultrahuman.svg"
      },
      {
        "name": "iSeed",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1bb_fitmint.svg"
      }
    ],
    "pocName": "Utsav Somani",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ivycap",
    "name": "IvyCap",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac06f_IvyCap.png",
    "about": "IvyCap Ventures follows an entrepreneur-centric investment approach, targeting early and growth-stage companies in sectors such as healthcare, education, food-based businesses, and technology. With a team of experienced mentors, IvyCap Ventures aims to create significant value in its portfolio companies, fostering innovation and driving positive outcomes.",
    "investments": 37,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/gaurav-kumar-rana-8ab4b162/",
      "twitter": "https://twitter.com/GauravK62711515",
      "website": "https://ivycapventures.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "IvyCap",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1a7_Bluestone.svg"
      },
      {
        "name": "IvyCap",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1a8_Bewakoof.svg"
      },
      {
        "name": "IvyCap",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1a9_IvyCap.svg"
      }
    ],
    "pocName": "Gaurav Kumar Rana",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "jitendra-gupta",
    "name": "Jitendra Gupta",
    "type": "Angel Investor",
    "title": "Founder & CEO at Jupiter",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Consumer",
      "Edtech",
      "Fintech",
      "HealthTech",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac094_55.%20Jitendra%20Gupta.webp",
    "about": "Jitendra, the founder of Jupiter (Amica Financial), is dedicated to revolutionizing banking for Indian millennials with a mobile-first approach. His goal is to provide a smart and cost-effective banking experience while assisting young individuals in effectively managing their finances. Jitendra's impressive track record includes founding Lazypay and serving as the Managing Director of PayU India. He also founded Citrus Pay, a renowned digital payments company in India, which was successfully sold to Naspers in 2016 for a remarkable USD 130 million. With over 16 years of experience in the banking and financial services industry, Jitendra is considered an expert in the payments sector. He played a pivotal role in establishing a joint venture between ICICI Bank and First Data, a significant milestone involving a bank and an independent payments company. Jitendra, who holds a degree from Sydenham College, Mumbai, is also a qualified Chartered Accountant.",
    "investments": 50,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/guptajiten/",
      "twitter": "https://twitter.com/guptajiten?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Jupiter",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac161_dukaan.svg"
      },
      {
        "name": "Jupiter",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac162_crofarm.svg"
      },
      {
        "name": "Jupiter",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac163_Scaler.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "jito-angel-network",
    "name": "JITO Angel Network",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac240_JITO%20VC%20logo.webp",
    "about": "Jain International Trade Organisation (JITO) is a worldwide organization of businessmen, industrialists, knowledge workers, and professionals who reflect the glory of ethical business practices. JITO is a global organization that is committed to achieving socio-economic empowerment, value-based education, community welfare, the practice of compassion, the spread of global friendship, and the spiritual upliftment of fellow beings. To learn more, visit Jito.org. JITO's objective is also to provide a platform for young entrepreneurs to connect with the right business contacts and to gain purposeful knowledge from experienced and well-established business leaders. JITO believes that by providing young entrepreneurs with access to these resources, they can help them to succeed in their business ventures.",
    "investments": 60,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/jito-incubation-innovation-foundation/",
      "twitter": "",
      "website": "https://jitojiif.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "JITO Angel Network",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2ed_Magenta.svg"
      },
      {
        "name": "JITO Angel Network",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2ee_Jito.svg"
      },
      {
        "name": "JITO Angel Network",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2ef_Marj.svg"
      }
    ],
    "pocName": "Raj Doshi",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "kae-capital",
    "name": "Kae Capital",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed",
      "Early"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac044_image%2059.webp",
    "about": "Headquartered in Mumbai, Kae Capital is a renowned venture capital firm that serves as a comprehensive funding solution for early-stage companies. With a strong focus on innovation, Kae Capital seeks out and invests in startups that bring forward groundbreaking solutions to address market gaps. The firm values the core principles of innovation, leadership, and growth, and actively seeks partnerships with passionate entrepreneurs who demonstrate immense potential in these areas. To date, Kae Capital has made 35 investments in 28 companies, spanning diverse sectors such as enterprise software, storage, mobile technology, e-commerce, education, healthcare, and more. By providing capital and guidance, Kae Capital empowers these startups to realize their growth objectives and make a meaningful impact in their respective industries.They typically invests in pre-seed to pre-Series A funding rounds with an average cheque size of $2-$3 million.",
    "investments": 39,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/veenu-choudhary-b346835b/",
      "twitter": "https://twitter.com/veenucy",
      "website": "https://kae-capital.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Kae Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac131_Tata%201mg.svg"
      },
      {
        "name": "Kae Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac13e_Porter.svg"
      },
      {
        "name": "Kae Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac132_Healthkart.svg"
      }
    ],
    "pocName": "Veenu Choudhary",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "kalaari",
    "name": "Kalaari",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac03d_image%2055.svg",
    "about": "Kalaari is a prominent venture capital fund based in Bangalore, with a focus on early-stage technology-oriented companies in India. With a fund size of $160 million, Kalaari is committed to supporting the growth and development of innovative startups. They have a strong advisory team that provides valuable guidance and expertise to the companies they invest in. Some notable startups in Kalaari's portfolio include convin, dubdub.ai, Active.ai, and Agnext. Through their investments and support, Kalaari plays an active role in shaping the Indian startup ecosystem and fostering the success of promising technology ventures.",
    "investments": 110,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/vineshsingodia/",
      "twitter": "https://twitter.com/vinesh_singodia?lang=en",
      "website": "https://www.kalaari.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Kalaari",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0f7_snapdeal.svg"
      },
      {
        "name": "Kalaari",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac115_Scoopwhoop.svg"
      },
      {
        "name": "Kalaari",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac116_urbanladder.svg"
      }
    ],
    "pocName": "Vinesh Singodia",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "flipkart",
    "name": "Kalyan Krishnamurthy",
    "type": "Angel Investor",
    "title": "CEO at Flipkart",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac212_155.-Kalyan-Krishnamurthy.webp",
    "about": "Kalyan Krishnamurthy serves as the CEO of Flipkart, with a diverse background in finance and leadership roles. Before joining Flipkart, he was the Director of Finance and Portfolio Companies at Tiger Global Management. Prior to that, he held key positions at eBay Asia-Pacific and eBay South-east Asia, Hong Kong, overseeing financial planning and analysis. Kalyan also gained experience at Procter & Gamble. He holds an MBA degree from the Asian Institute of Management, the Philippines, and another MBA in Finance from UIUC College of Business, Illinois (US). Notably, Kalyan has made notable investments in startups such as Limechat, Turnip, Urban Company, and Scenes.",
    "investments": 19,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/kalyankrishnamurthy/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Flipkart",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2be_Limechat.svg"
      },
      {
        "name": "Flipkart",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2bf_Urban%20Company.svg"
      },
      {
        "name": "Flipkart",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac255_Turnip.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "fireside-ventures-6fe9b",
    "name": "Kanwaljit Singh",
    "type": "Angel Investor",
    "title": "Founder & Managing Partner at Fireside Ventures",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "Consumer",
      "Agritech",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1fd_185.%20Kanwaljit%20Singh.webp",
    "about": "Kanwaljit Singh is a distinguished entrepreneur who currently serves as the Founder and Managing Partner at Fireside Ventures, a role that highlights his exceptional vision and leadership in the world of business and investment. Prior to his current endeavor, he held the esteemed position of Co-Founder and Senior Managing Director at Helion, a testament to his enduring commitment to fostering innovation and driving the growth of pioneering ventures. With an illustrious career marked by strategic insights and a keen eye for opportunities, Kanwaljit Singh continues to shape the landscape of entrepreneurship and investment, leaving an indelible impact on the industry. His journey is a reflection of his dedication to nurturing startups and realizing their full potential, while his role at Fireside Ventures underscores his role as a catalyst for transformative change within the business ecosystem.",
    "investments": 15,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/singhkanwaljit/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Fireside Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2fe_Fitterfly.svg"
      },
      {
        "name": "Fireside Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2ff_Nestaway.svg"
      },
      {
        "name": "Fireside Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac300_DesignCafe.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "360-one",
    "name": "Karan Bhagat",
    "type": "Angel Investor",
    "title": "Founder MD & CEO at 360 One",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546f8390d1e6fffd4af9b2_204.%20Karan%20Bhagat.webp",
    "about": "Karan Bhagat, a distinguished Angel Investor hailing from Mumbai, is a key figure in the investment landscape. His focus extends across various domains, with Consumer Electronics, Manufacturing, and other industries capturing his attention. Karan's investment portfolio showcases his commitment to nurturing innovative ventures, including noteworthy startups like Digantara, Fastjobs.Io, Ls Digital, and a couple more.With a keen eye for potential and a penchant for strategic investments, Karan Bhagat has solidified his reputation as a prominent player in the startup ecosystem. His investments span diverse sectors, underscoring his versatility and his ability to identify promising opportunities across different industries.",
    "investments": 5,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/karanbhagatiifl/",
      "twitter": "https://twitter.com/KB_360_ONE",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "360 One",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546f775bf84599b510871e_Fastjobs.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "force-ventures",
    "name": "Karthik Bhat",
    "type": "Angel Investor",
    "title": "Founder at Force Ventures",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac227_133.%20Karthik%20Bhat.webp",
    "about": "Karthik Bhat is an accomplished Angel Investor with a keen interest in diverse industries such as Hardware and Technology, Edu-Tech, and Fin-Tech. He has made strategic investments in startups like Wyld, Prolance, Growthschool, and others, nurturing their growth and success. Additionally, Karthik's entrepreneurial spirit has led him to found two prominent venture capital firms, Force Ventures and Ubiquity Capital, both of which play a vital role in supporting and shaping the startup ecosystem. With his wealth of experience and expertise, Karthik continues to be a driving force in the world of entrepreneurship and early-stage investments.",
    "investments": 8,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/karthik-bhat-8221b61/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Force Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac283_Stockgro.svg"
      },
      {
        "name": "Force Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac284_Wyld.svg"
      },
      {
        "name": "Force Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac285_Prolance.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "astir-ventures",
    "name": "Kishore Kumar Ganji",
    "type": "Angel investor & mentor at Astir Ventures",
    "title": "",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac21a_146.%20Kishore%20Kumar%20Ganji.webp",
    "about": "Kishore Kumar Ganji, a respected entrepreneur and seasoned angel investor, boasts an extensive two-decade-long experience in the information technology and services industry. His primary mission revolves around nurturing and supporting startups in both the US and India, with the ultimate goal of contributing to India's technological advancement and growth.",
    "investments": 27,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/kishoreganji/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Astir Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2a4_Pension%20Box.svg"
      },
      {
        "name": "Astir Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2a5_Shephertz.svg"
      },
      {
        "name": "Astir Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2a6_Baby%20Chakra.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "axilor-ventures",
    "name": "Kris Gopalakrishnan",
    "type": "Angel Investor",
    "title": "Chairman at Axilor Ventures",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2b9_Farmveda.svg",
    "about": "Senapathy Kris Gopalakrishnan, a co-founder of Infosys, held significant positions such as vice chairman, CEO, and managing director from 2007 to 2014. He is a globally recognized thought leader in business and technology, receiving accolades like being voted the top CEO in IT Services category and being listed in Thinkers 50, an elite list of global business thinkers. Kris is currently the Chairman of Axilor Ventures, an early-stage startup accelerator and venture fund. He has received prestigious awards, including the Padma Bhushan, and serves on the Board of Governors of Okinawa Institute for Science and Technology and IIIT Bangalore. Gopalakrishnan holds Masters degrees in physics and computer science from the Indian Institute of Technology, Madras, and is a Fellow of Indian National Academy of Engineers and Honorary Fellow of Institution of Electronics and Telecommunication Engineers of India.",
    "investments": 65,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/kris-gopalakrishnan-10b49950/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Axilor Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac29d_Bewakoof.svg"
      },
      {
        "name": "Axilor Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2ba_growth%20school%20(1).svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "hotstar",
    "name": "Kumar Aakash",
    "type": "Angel Investor",
    "title": "Senior VP at Hotstar",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Edtech",
      "Digital Entertainment",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac20d_157.%20Kumar%20Aakash.webp",
    "about": "Aakash is a seasoned professional who has held key leadership roles in various prominent organizations. As the Senior VP of Growth at Hotstar, he played a pivotal role in driving the company's expansion and success. Before that, he served as the Vice-president of Products & Monetization at Indus OS, where he was responsible for overseeing the development and monetization strategies of the platform. Prior to his tenure at Indus OS, Aakash held the esteemed position of Chief Strategy Officer at Housing.com, where he contributed significantly to shaping the company's strategic direction and growth initiatives. Additionally, he co-founded and led Wings HR Solutions, a successful business venture that provided comprehensive HR solutions to clients. Even before venturing into the entrepreneurial realm, Aakash founded and served as the CEO of Wings Intellect, showcasing his entrepreneurial acumen and leadership prowess. Aakash's academic journey began with pursuing a B.Tech in Metallurgical Engineering from the prestigious IIT Bombay, providing him with a strong technical foundation that complements his diverse professional experiences. Throughout his career, Aakash has demonstrated an exceptional ability to navigate complex challenges, drive innovation, and deliver outstanding results. His extensive expertise across various domains, including growth strategy, product management, monetization, and human resources, makes him a valuable asset to any organization he engages with.",
    "investments": 5,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/kumaraakash/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Hotstar",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac25c_growth%20school.svg"
      },
      {
        "name": "Hotstar",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2c0_Glip.svg"
      },
      {
        "name": "Hotstar",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2c1_Daolens.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "kunal-bahl",
    "name": "Kunal Bahl",
    "type": "Angel Investor",
    "title": "Founder & CEO at Jasper",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac01f_VCCircleKunalBahl.webp",
    "about": "Kunal Bahl is a notable angel investor and entrepreneur who has made significant contributions to the business world. As the Co-Founder and CEO of Snapdeal, he played a pivotal role in establishing the company as a leading e-commerce platform. Kunal's entrepreneurial journey extends to his involvement as the Co-Founder of AceVector Group and Titan Capital, an investment VC firm. He also serves as an independent Director at Piramal Enterprises Limited. Before venturing into entrepreneurship, Kunal gained valuable experience working with Microsoft in product management for emerging markets and as a Consultant at Deloitte US. He pursued his education at prestigious institutions such as DPS R. K. Puram, the University of Pennsylvania, The Wharton School, and Northwestern University – Kellogg School of Management.",
    "investments": 74,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/kunalbahl/",
      "twitter": "https://twitter.com/1kunalbahl?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Jasper",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0f7_snapdeal.svg"
      },
      {
        "name": "Jasper",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0f8_bira.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "advantedge",
    "name": "Kunal Khattar",
    "type": "Angel Investor",
    "title": "Founder at AdvantEdge",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1ff_183.%20Kunal%20Khattar.webp",
    "about": "A seasoned angel investor with expertise spanning Mobility, Internet/eCommerce, Mobile Communication, Angel/VC/PE, and Automotive domains, Kunal Khattar is a driving force in the tech landscape. His proficiencies encompass investments and M&A, startup capital raising, strategic marketing management, product marketing, corporate communications, advertising, media relations, sales, business development, and eBusiness strategy consulting. With a proven track record in technology marketing and communications on a global scale, Kunal excels in nurturing startups, orchestrating fund raise processes, and executing holistic business plans. His multi-faceted talents make him an influential figure propelling innovation and entrepreneurial success.",
    "investments": 18,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/kkhattar/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "AdvantEdge",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac25c_growth%20school.svg"
      },
      {
        "name": "AdvantEdge",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2f9_Shuttl.svg"
      },
      {
        "name": "AdvantEdge",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2fa_ConnectedH.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "kunal-shah",
    "name": "Kunal Shah",
    "type": "Angel Investor",
    "title": "Founder & CEO at Cred",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Consumer",
      "Edtech",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac021_kunal-shah.webp",
    "about": "Kunal Shah is a highly influential figure in the Indian startup ecosystem, renowned for his entrepreneurial ventures and extensive contributions as an angel investor, mentor, and advisor. As the founder of Freecharge and CRED, a successful unicorn FinTech startup in India, Kunal has demonstrated his expertise in the industry. He serves as an advisor to esteemed organizations such as Bennett Coleman and Co. Ltd. (Times Group), AngelList, Sequoia Capital, and the India division of Y Combinator, sharing his valuable insights and guidance. With a strong passion for supporting innovation, Kunal has made over 150 investments in diverse sectors, further solidifying his status as an active angel investor in the Indian startup scene, with investments lying between $10,000 and $50,000.",
    "investments": 220,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/kunalshah1/",
      "twitter": "https://twitter.com/kunalb11",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Cred",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0e5_Razorpay.svg"
      },
      {
        "name": "Cred",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0fc_bharat%20bazar.svg"
      },
      {
        "name": "Cred",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0fd_INC%2042.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "kifs-trade-capital",
    "name": "Kushal Jayesh Khandwala",
    "type": "Angel Investor",
    "title": "Director at KIFS Trade Capital",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac215_152.%20Kushal%20Jayesh%20Khandwala.webp",
    "about": "Kushal Khandwala is currently serving as a Director at KIFS Trade Capital Pvt Ltd, where he holds a significant leadership position. He has a strong educational background, having completed his post-graduate studies at the University of Warwick, where he obtained a Master of Science (MSc) degree. In addition to his role at KIFS, Kushal is an active investor in various companies like growthschool, bugbase, and wealth42. With his expertise and qualifications, he plays a crucial role in both his investments and the company's operations, driving growth and success in the financial industry. His position as a Director highlights his importance in making strategic decisions and guiding the company's future trajectory. Kushal's valuable contributions and knowledge in the field make him a valuable asset to KIFS Trade Capital Pvt Ltd and his investment portfolio.",
    "investments": 10,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/kushal-khandwala-76b88860/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "KIFS Trade Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2b7_growth%20school.svg"
      },
      {
        "name": "KIFS Trade Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac25c_growth%20school.svg"
      },
      {
        "name": "KIFS Trade Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac298_wealth42%201.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "lalit-keshre",
    "name": "Lalit Keshre",
    "type": "Angel Investor",
    "title": "Founder & CEO at Groww",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac092_56.%20Lalit%20Keshre.webp",
    "about": "Lalit Keshre is an esteemed Indian angel investor and entrepreneur. He currently serves as the Co-founder and CEO of Groww, a prominent company in India. Lalit's entrepreneurial journey includes founding Flipkart and Eduflix, as well as working as a Product and Engineer at Ittiam Systems. Additionally, he has held a position as a Director at Aaditya Vidya Vihar School. Lalit holds a degree in Electrical Engineering with a specialization in Micro-Eelectronics from the Indian Institute of Technology, Bombay.",
    "investments": 20,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/lalitkeshre/",
      "twitter": "https://twitter.com/lkeshre?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Groww",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac164_Decantro.svg"
      },
      {
        "name": "Groww",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac165_turnip.svg"
      },
      {
        "name": "Groww",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac166_Ultrahuman.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "lead-angels-network",
    "name": "Lead Angels Network",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Media",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac23c_Lead%20Angels%20Network%20VC%20logo.png",
    "about": "Lead Angels is a privately owned angel network founded by a team of three originally from IIT Bombay with the aim of improving early stage investment outcomes. The team accomplishes this by providing professional assistance to investor-members in company evaluation and the portfolio companies in their operations. The Lead Angels team members are successful entrepreneurs and professionals across diverse sectors who wish to identify and support high potential entrepreneurs. They are supported by a team of experienced and qualified executives who are passionate about their work for both entrepreneurs and investors.",
    "investments": 42,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/leadangels/",
      "twitter": "",
      "website": "https://leadangels.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Lead Angels Network",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2f2_Lead%20Angels.svg"
      },
      {
        "name": "Lead Angels Network",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2b4_Truly%20Madly.svg"
      },
      {
        "name": "Lead Angels Network",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2f3_Go%20Desi.svg"
      }
    ],
    "pocName": "Jash Ranawat",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "lets-venture",
    "name": "Lets Venture",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Media",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac023_Letsventure.webp",
    "about": "LetsVenture enables startups looking to raise seed/angel money to create investment ready profiles online and connect to accredited Investors. They also allow startups to get their business plans reviewed by experts in their domain and connect to mentors. After a startup has a verbal commitment from an investor, LetsVenture helps them in the funding closure process through their Commitment-to-Closure package which takes care of all legal and financial matters.",
    "investments": 221,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/devavratkulkarni/",
      "twitter": "",
      "website": "https://www.letsventure.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Lets Venture",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac15f_Airmeet.svg"
      },
      {
        "name": "Lets Venture",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac161_dukaan.svg"
      },
      {
        "name": "Lets Venture",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac192_Aisle.svg"
      }
    ],
    "pocName": "Devavrat Kulkarni",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "lightbox",
    "name": "Lightbox",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac063_lightbox%20vc.webp",
    "about": "Lightbox is a prominent venture capital firm based in Mumbai, specializing in early-stage consumer technology businesses. With a substantial $400 million fund, Lightbox has a proven track record of success in the Indian venture capital landscape. Over the past 12 years, they have invested in and nurtured global technology companies operating in India, such as InMobi, Cleartrip, and Naukri.com. The Lightbox team comprises a diverse group of entrepreneurs, technologists, and investors with extensive operational and investing experience in the consumer technology sector. Their current portfolio includes notable ventures like Furlenco, Rebel Foods, Droom, Flinto, and Melorra. They also made headlines with the acquisition of their portfolio company, Embibe, by Reliance Jio for a substantial $180 million, representing the largest AI investment in education worldwide.",
    "investments": 25,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/varunvarma2/",
      "twitter": "",
      "website": "https://www.lightbox.vc/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Lightbox",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1b3_Cleartrip.svg"
      },
      {
        "name": "Lightbox",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1b4_Lightbox.svg"
      },
      {
        "name": "Lightbox",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1b5_Furlenco.svg"
      }
    ],
    "pocName": "Varun Varma",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "lightspeed",
    "name": "Lightspeed",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Early",
      "Growth"
    ],
    "industries": [
      "SaaS",
      "Consumer",
      "Mobility"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac027_download.png",
    "about": "Lightspeed Venture Partners is an investment firm that operates across various stages and sectors in India. Their investment focus includes technology-driven businesses as well as non-technology opportunities in sectors like advertising, media, business services, financial services, healthcare, education, and retail. They are dedicated to supporting talented entrepreneurs and their teams by providing growth or early-stage capital. In addition to financial support, Lightspeed Venture Partners offers ongoing consulting and advising to assist these entrepreneurs in disrupting and transforming large markets within the domestic economy. Their goal is to empower entrepreneurs to drive innovation and create substantial impact in their respective industries. Their check size ranges from US$100,000 up to US$15 million, depending on the company, the opportunity, and its stage of evolution.",
    "investments": 36,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/romit-mehta-b641262a/",
      "twitter": "https://twitter.com/romitme",
      "website": "https://lsvp.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Lightspeed",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac10a_udaan.svg"
      },
      {
        "name": "Lightspeed",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac10b_Epic%20Games.svg"
      },
      {
        "name": "Lightspeed",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac10c_sharechat.svg"
      }
    ],
    "pocName": "Romit Mehta",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "oyo-rooms-india",
    "name": "Maninder Gulati",
    "type": "Angel Investor",
    "title": "Chief Strategy Officer at OYO Rooms, India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Digital Entertainment"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546869ec32b8773180bf44_218.%20Maninder%20Gulati.webp",
    "about": "Originating from Singapore, Maninder Gulati stands out as a distinguished Angel Investor celebrated for his astute investment strategies. His investment endeavors are particularly concentrated in vibrant and evolving sectors such as Media and Entertainment, Consumer Electronics, and the progressive realm of Agritech and Farming. Maninder's portfolio of investments boasts a carefully curated selection of startups that highlight his discerning approach. Notable ventures like Finsire, Vetic, and Driffle are just a few among the impressive thirty others that showcase his commitment to fostering innovation and growth.Hailing from the innovative landscape of Singapore, Maninder Gulati has carved a niche for himself within the investment community. His distinctive focus spans across sectors that drive technological advancement, encompassing Media and Entertainment, Consumer Electronics, as well as the vital domain of Agritech and Farming. This multifaceted approach underscores his capacity to identify groundbreaking opportunities and trends that are shaping the future. Maninder's investment portfolio serves as a testament to his discernment and calculated risktaking. His meticulous selection process is evident in ventures like Finsire, Vetic, and Driffle, each representing the fusion of his strategic vision with their potential for transformative impact. This investment journey reflects his dedication to nurturing startups that hold promise for significant advancements in their respective fields. Beyond the financial contributions, Maninder Gulati's role extends to that of a mentor and guide. His active involvement in fostering innovation and supporting entrepreneurs echoes his commitment to creating a robust startup ecosystem. His accumulated experience and insights are valuable resources for startups seeking not only financial backing but also guidance in their growth journey. In conclusion, Maninder Gulati's presence as an Angel Investor is characterized by his distinct investment philosophy and commitment to propelling startups forward. His strategic focus on Media and Entertainment, Consumer Electronics, and Agritech and Farming speaks volumes about his ability to recognize trends with transformative potential. His investments symbolize not just capital infusion, but a partnership aimed at nurturing innovation and driving positive change within the startup landscape.",
    "investments": 33,
    "socials": {
      "linkedin": "",
      "twitter": "https://twitter.com/maninderg13?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "windt-angels",
    "name": "Manish Gupta",
    "type": "Angel Investor",
    "title": "Partner at WindT Angels",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546dbac732cb3fd4766f28_210.%20Manish%20Gupta.webp",
    "about": "Manish Gupta stands as a distinguished Angel Investor based in Delhi, with a notable track record within the investment realm. His investment focus spans prominent sectors such as Consumer Electronics, Hardware and Technology, as well as the dynamic fields of AI and ML. Manish's investment portfolio shines with strategic choices, including notable startups like Bellatrix Aerospace, Lightspeedai Labs, Aereo, and a couple more. Hailing from Delhi, Manish Gupta has firmly established himself as a key player in the startup ecosystem. His investment interests reflect a strategic approach that encompasses Consumer Electronics, Hardware and Technology, as well as cuttingedge AI and ML innovations. This underscores not only his versatility but also his knack for recognizing opportunities within dynamic industries.",
    "investments": 5,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/maniishgupta/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "waterbridge-ventures-india",
    "name": "Manish Kheterpal",
    "type": "Angel Investor",
    "title": "MD at WaterBridge Ventures, India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Edtech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac20b_159.%20Manish%20Kheterpal.webp",
    "about": "Manish Kheterpal serves as the Managing Partner at WaterBridge Ventures, bringing extensive expertise to the realm of private market investment. With over 15 years of experience in venture capital and private equity, coupled with six years of hands-on involvement in technology, telecom, and education sectors, Manish Kheterpal has established himself as a notable figure in the industry. His academic background includes a bachelor’s degree in engineering from IIT Delhi and an MBA from the prestigious Stanford Graduate School of Business.Manish's investment portfolio reflects his strategic insights, encompassing prominent startups like Chalo, PocketPills, Dataweave, SocialCops, Magicpin, Unacademy, and 9Stacks. Throughout his investment journey, Manish has orchestrated and overseen investments totaling over $500 Million, with a primary focus on both the Indian market and the US-India corridor. Prior to his tenure at WaterBridge Ventures, Manish devoted 11 years of his professional career to senior investment positions at respected entities such as Rho Ventures, Actis Capital, and Providence Equity Partners.",
    "investments": 5,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/mkheterpal/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "WaterBridge Ventures, India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2c2_Chalo.svg"
      },
      {
        "name": "WaterBridge Ventures, India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2c4_Magicpin.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "smile-group",
    "name": "Manish Vij",
    "type": "Angel Investor",
    "title": "Managing Partner at Smile Group",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac20a_160.%20Manish%20Vij.webp",
    "about": "Manish Vij is a seasoned entrepreneur and investor with a focus on internet and technology companies. He has a track record of successful acquisitions, investments, and partnerships in the industry. As a founder or co-founder, he has been associated with companies like Smile Group, SVG Media (which was acquired by DentsoAegis), Quasar (acquired by WPP), and Letsbuy (acquired by Flipkart). Furthermore, he has invested in several leading internet businesses worldwide, establishing himself as a prominent figure in the entrepreneurial and investment landscape.",
    "investments": 14,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/linkmanishvij/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Smile Group",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2b4_Truly%20Madly.svg"
      },
      {
        "name": "Smile Group",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac294_GoKwik.svg"
      },
      {
        "name": "Smile Group",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2c8_Freecultr.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "mars-shot-ventures",
    "name": "Mars Shot Ventures",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "SaaS",
      "Consumer",
      "Digital Entertainment"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0d2_Mars%20Shot%20VC.webp",
    "about": "Mars Shot is an Angel fund led by Harshil and Shashank, who are the founders of Razorpay, a prominent FinTech company. With their expertise and experience in building successful startups, they are actively involved in investing in and advising early-stage startups. Mars Shot aims to support and nurture the growth of promising entrepreneurial ventures, providing them with the necessary capital and guidance to thrive in their respective industries.",
    "investments": 42,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/arjitjohri/",
      "twitter": "https://twitter.com/JohriArjit",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Mars Shot Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac166_Ultrahuman.svg"
      },
      {
        "name": "Mars Shot Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac161_dukaan.svg"
      },
      {
        "name": "Mars Shot Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1d8_rephrase.svg"
      }
    ],
    "pocName": "Arjit Johri",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "marwari-catalysts",
    "name": "Marwari Catalysts",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Early"
    ],
    "industries": [
      "HealthTech",
      "Edtech",
      "SaaS",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac249_Marwari%20Catalysts%20VC%20logo.webp",
    "about": "Marwari Catalysts is a global startup accelerator that was founded in 2019. The company is a founder and investor-friendly platform with a community of industry experts passionate about entrepreneurship. Marwari Catalysts has a well-seasoned and highly competent team of 100 co-founders from major cities like Jaipur, Surat, Nasik, Delhi-NCR, Mumbai, Ahmedabad, Bangalore, Pune, Hyderabad, Ranchi, Indore, Mangalore, and Chennai. The company has a portfolio of 50+ startups where 70% have already raised their seed round. Additionally, 35% of Marwari Catalysts' portfolio startups have women founders on board. Marwari Catalysts has a backward integration with incubators and front-end integration with the AIFs, VCs, and Angel Networks. This allows the company to provide its portfolio startups with access to a wide range of resources and support. Marwari Catalysts conducts a startup acceleration program called \"Thrive.\" This 12-week acceleration program provides the selected startups with a platform to interact with and learn from domain experts and business leaders, making them investor ready.",
    "investments": 10,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/marwaricatalysts/",
      "twitter": "",
      "website": "https://www.marwaricatalysts.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Marwari Catalysts",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2df_Immersive%20Labz.svg"
      },
      {
        "name": "Marwari Catalysts",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2e0_Yougami.svg"
      },
      {
        "name": "Marwari Catalysts",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2e1_Marwari.svg"
      }
    ],
    "pocName": "Anjali Rathi",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "matrix",
    "name": "Matrix",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Early"
    ],
    "industries": [
      "SaaS",
      "Consumer",
      "Mobility",
      "Digital Entertainment",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac03f_image%2053.webp",
    "about": "Matrix Partners is a venture capital firm that prioritizes building long-term partnerships with entrepreneurs. They selectively invest in companies they believe have the potential to become industry leaders. With a focus on sectors such as mobile technology, healthcare, and consumer internet, Matrix Partners has made 40 investments in 30 companies. However, their support extends beyond just financial investment. They leverage their extensive global network of experts to assist startups in forging strategic partnerships and connecting with customers, investors, and advisors. Matrix Partners' commitment to providing comprehensive support contributes to the success and growth of the startups they work with.Their usual cheque size ranges between $5M-$20M.",
    "investments": 73,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/anandkhetan/",
      "twitter": "https://twitter.com/anandkhetan4",
      "website": "https://matrixpartners.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Matrix",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0d8_ola.svg"
      },
      {
        "name": "Matrix",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac108_fiitjee.svg"
      },
      {
        "name": "Matrix",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac109_mswipe.svg"
      }
    ],
    "pocName": "Anand Khetan",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "mayfield",
    "name": "Mayfield",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early",
      "Growth"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac058_Mayfield%20VC%20logo.webp",
    "about": "Mayfield Fund is an early-stage venture capital firm that focuses on investing in companies operating in the consumer and business sectors across non-tech, tech-enabled, and technology verticals. Their investment range spans from $500,000 to $10 million. They seek out passionate founders who are targeting large markets and are committed to building innovative businesses. Mayfield Fund looks for unique solutions that address pain points and have the potential to disrupt existing value chains. By supporting these promising ventures, they aim to foster growth and drive positive change in the market.",
    "investments": 117,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/abhay-malla-7b3b75149/",
      "twitter": "",
      "website": "https://www.mayfield.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Mayfield",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1bd_Truefan.svg"
      },
      {
        "name": "Mayfield",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1be_Mayfield.svg"
      },
      {
        "name": "Mayfield",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac14c_LendingKart.svg"
      }
    ],
    "pocName": "Abhay Malla",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "mekin-maheshwari",
    "name": "Mekin Maheshwari",
    "type": "Angel Investor",
    "title": "Founder at Udhyan",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac07c_75.%20Mekin%20Maheshwari.webp",
    "about": "Mekin, the driving force behind Udhyam, envisions fostering entrepreneurship across the nation. With a background in engineering, Mekin has always embraced entrepreneurial roles throughout his career. Notably, he joined Flipkart in 2009, leading their technology division and subsequently heading two new businesses. In his final two years at Flipkart, Mekin took charge of HR, showcasing his deep concern for people's success. Udhyam is a testament to his commitment to empowering individuals and helping them realize their true potential.",
    "investments": 24,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/mekin/?originalSubdomain=in",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Udhyan",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac163_Scaler.svg"
      },
      {
        "name": "Udhyan",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac192_Aisle.svg"
      },
      {
        "name": "Udhyan",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac184_Crejo.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "cred",
    "name": "Miten Sampat",
    "type": "Angel Investor",
    "title": "Ex-Chief Strategy Officer at Times Internet",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac216_151.%20Miten%20Sampat.webp",
    "about": "Miten Sampat, an accomplished Angel Investor from Bengaluru, prioritizes investments in Content and Publishing, Data and Analytics, and Professional Services sectors. His portfolio includes notable startups such as The Yarn Bazaar, Punt Partners Private Limited, and The Signal, making Miten an active participant in supporting innovation and growth in the startup ecosystem.",
    "investments": 18,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/mitensampat/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "mitesh-shah",
    "name": "Mitesh Shah",
    "type": "Angel Investor",
    "title": "Co-founder at Inflection Point ventures",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0bd_107.%20Mitesh%20Shah.webp",
    "about": "Mitesh Shah embarked on his professional journey with Mandhana Industries Limited, a prominent apparel manufacturing company, where he successfully managed various projects, including the company's IPO in 2010 and its exclusive global licensing deal with Salman Khan's Being Human brand in 2011. In December 2013, he joined Ola as Chief Financial Officer (CFO) and played a pivotal role in the remarkable growth of one of India's most significant start-up success stories. Later, in 2016, Mitesh took on the role of spearheading the finance function at Bookmyshow, contributing to strategic business management. Leveraging his extensive experience in the start-up ecosystem, Mitesh co-founded Inflection Point Ventures in 2018, aiming to provide smart capital and mentorship to founders of early-stage start-ups.",
    "investments": 26,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/mitesh-shah-0627873/?ref=ynos.in",
      "twitter": "https://twitter.com/IamMiteshShah",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Inflection Point ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1d9_stack.svg"
      },
      {
        "name": "Inflection Point ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1db_SpeEdLabs.svg"
      },
      {
        "name": "Inflection Point ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac13d_JoshTalks.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "teamwork-arts",
    "name": "Mohit Satyanand",
    "type": "Angel Investor",
    "title": "Chairman and founder at Teamwork Arts",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac218_148.%20Mohit%20Satyanand.webp",
    "about": "Mohit Satyanand, a seasoned entrepreneur and portfolio investor, dons multiple hats as the Chairman and founder at Teamwork Arts, Managing Partner at eMagic Mountain Investments, and Director at several prominent companies. With a diverse involvement in businesses spanning consumer goods, arts management, and vocational training, Mohit is a skilled strategist. As Chairman of Liberty Institute, a policy think tank, and Advisor to iJustice, a legal initiative, he contributes to addressing legal impediments to liberty.",
    "investments": 9,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/mohit-satyanand-baa2b820/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Teamwork Arts",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2a9_Knock%20Sense.svg"
      },
      {
        "name": "Teamwork Arts",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2ab_Gramaphone.svg"
      },
      {
        "name": "Teamwork Arts",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2aa_Myupchar.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "mumbai-angels",
    "name": "Mumbai Angels",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Digital Entertainment",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac243_Mumbai%20Angels%20VC%20logo.webp",
    "about": "Mumbai Angels is India's premier private investment platform for early-stage venture investments. The firm is headquartered in Mumbai and is at the forefront of building this asset class. Mumbai Angels has a strong track record of identifying and backing successful startups. The firm has invested in over 200 startups, including several unicorns. Mumbai Angels' investment process is designed to be efficient and effective. The firm's team of experts evaluates potential investments and identifies the best opportunities for angel investment. Mumbai Angels also provides its portfolio companies with access to a wide range of resources and support, including capital, mentorship, and advice. Mumbai Angels is committed to helping startups succeed. The firm believes that by providing early-stage businesses with the capital and resources they need, it can help to create a more vibrant and dynamic startup ecosystem.",
    "investments": 136,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/mumbaiangels/",
      "twitter": "",
      "website": "https://www.mumbaiangels.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Mumbai Angels",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2ea_purple.svg"
      },
      {
        "name": "Mumbai Angels",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2ec_Dave.ai.svg"
      },
      {
        "name": "Mumbai Angels",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2eb_Mumbai%20Angels.svg"
      }
    ],
    "pocName": "Maitry Shah",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "matrimony-com",
    "name": "Murugavel Janakiraman",
    "type": "Angel Investor",
    "title": "Founder & CEO at Matrimony.com",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac21b_145.%20Murugavel%20Janakiraman.webp",
    "about": "Murugavel Janakiraman, an esteemed Member of The Chennai Angels, achieved widespread recognition for founding Bharat Matrimony, a highly successful matrimony service that has touched the lives of countless individuals. Beyond his entrepreneurial pursuits, Murugavel passionately supports various social causes, actively promoting eye donations, encouraging blood donations, and actively participating in environmental restoration initiatives.",
    "investments": 26,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/murugavel-janakiraman-0186891/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Matrimony.com",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2a7_Gostops.svg"
      },
      {
        "name": "Matrimony.com",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2a8_Navia%20Life%20Care.svg"
      },
      {
        "name": "Matrimony.com",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac27d_kiko.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "emcure-pharmaceuticals",
    "name": "Namita Thapar",
    "type": "Angel Investor",
    "title": "CEO at Emcure Pharmaceuticals",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "Edtech",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac231_123.%20Namita%20Thapar.webp",
    "about": "Namita Thapar, one of India's leading businesswomen, is the CEO of Emcure Pharmaceuticals, an Indian multinational pharmaceutical company based in Pune, Maharashtra. She is one of the titular sharks on the popular TV show Shark Tank, and her popularity has skyrocketed since the show came out.",
    "investments": 14,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/namita-thapar/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Emcure Pharmaceuticals",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac267_Bummer.svg"
      },
      {
        "name": "Emcure Pharmaceuticals",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac268_Snitch.svg"
      },
      {
        "name": "Emcure Pharmaceuticals",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac269_Jhaji.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "mumbai-angels-india",
    "name": "Nandini Mansinghka",
    "type": "Angel Investor",
    "title": "CEO at Mumbai Angels",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "SaaS",
      "Mobility",
      "Consumer",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534ca75f81d005e8825c85_241.%20Nandini%20Mansinghka.webp",
    "about": "Nandini Mansinghka holds the dual roles of CoPromoter and CEO at Mumbai Angels Network, an influential platform for angel investing and startup support. Prior to this, she assumed the position of Founder Investor at DigiBoosterCo and also served as the Vice President at J.P. Morgan, showcasing her diverse and dynamic career trajectory. At Mumbai Angels Network, Nandini's influence extends beyond her role as CoPromoter, as she spearheads the organization's activities and strategic initiatives. Her leadership plays a pivotal role in shaping the landscape of angel investing and fostering collaboration between investors and innovative startups. Her commitment to supporting entrepreneurship and nurturing emerging ventures has positioned her as a key figure in the Indian startup ecosystem. Before her engagement with Mumbai Angels Network, Nandini's entrepreneurial spirit was evident in her role as the Founder Investor at DigiBoosterCo. Her involvement in this capacity highlights her dedication to fostering innovation and growth within the digital domain. Her experience in this venture likely equipped her with a deep understanding of the challenges and opportunities that startups encounter, further enhancing her role at Mumbai Angels Network. Prior to her entrepreneurial pursuits, Nandini's tenure as Vice President at J.P",
    "investments": 13,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/nandinimansinghka/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "naveen-tewari",
    "name": "Naveen Tewari",
    "type": "Angel Investor",
    "title": "Founder at InMobi",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Media",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac022_naveen-tiwari.webp",
    "about": "Naveen, the founder of InMobi, is a visionary leader whose philosophy of continuous innovation and disruption runs through the core of InMobi. With a Bachelor's degree from the Indian Institute of Technology, Kanpur (IIT), and a Master's degree in Business Administration from Harvard Business School, Naveen brings a strong educational foundation to his entrepreneurial journey. At Harvard, he was honored with the prestigious Dean's Award, recognizing his exceptional leadership and contributions. Naveen's commitment to pushing boundaries and driving change is deeply ingrained in the culture of InMobi, inspiring its employees to embrace innovation and create lasting impact in the industry.",
    "investments": 15,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/naveentewari/",
      "twitter": "https://twitter.com/NaveenTewari?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "InMobi",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0e1_lets%20venture.svg"
      },
      {
        "name": "InMobi",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0fe_wooplr.svg"
      },
      {
        "name": "InMobi",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0db_zimmber.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "nexus-vp",
    "name": "Nexus VP",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Early"
    ],
    "industries": [
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac02a_logo.webp",
    "about": "Nexus Venture Partners is a leading venture capital firm focused on seed and early-stage investments. As the first institutional investors, they provide funding ranging from $500K to $10 million during the early stages of a company. Nexus Venture Partners seeks to partner with passionate and ambitious entrepreneurs who are driving innovative ideas or capital-efficient business models that address specific customer pain points. They have a wide sector focus, including consumer internet, mobile, SaaS, healthcare, e-commerce, travel, logistics, food, insurance, banking, entertainment, data analytics, and more. By supporting startups across diverse industries, Nexus Venture Partners plays a vital role in fostering innovation and growth in the entrepreneurial ecosystem.",
    "investments": 130,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/utkarshmalhotra92/",
      "twitter": "https://twitter.com/utkarshmalhotra",
      "website": "https://nexusvp.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Nexus VP",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac117_shopclues.svg"
      },
      {
        "name": "Nexus VP",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0f7_snapdeal.svg"
      },
      {
        "name": "Nexus VP",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac118_craftsvilla.svg"
      }
    ],
    "pocName": "Utkarsh Malhotra",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "panthera-peak-ventures-india",
    "name": "Nikhil Bhandarkar",
    "type": "Angel Investor",
    "title": "Founder at Panthera Peak Ventures, India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac22b_129.%20Nikhil%20Bhandarkar.webp",
    "about": "Nikhil Bhandarkar is an Angel Investor from India. Prominent investment areas are Software, Commerce and Shopping, Media and Entertainment and has invested in startups like Nysha Mobility Tech, Hoovu Fresh, Wishlink & 1 other.",
    "investments": 4,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/nikhil-b-b71a851/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Panthera Peak Ventures, India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac27a_wishlink.svg"
      },
      {
        "name": "Panthera Peak Ventures, India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac27b_hoovu.svg"
      },
      {
        "name": "Panthera Peak Ventures, India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac27c_Omnivo.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sixth-sense-ventures",
    "name": "Nikhil Vora",
    "type": "Angel Investor",
    "title": "Founder & CEO at Sixth Sense Ventures",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac210_140.%20Nikhil%20Vora.webp",
    "about": "Nikhil Vora, the Founder and CEO of Sixth Sense Ventures, has established India's first consumer-centric domestic venture fund. With a background as the Managing Director and Head of Research at IDFC Securities, Nikhil is renowned for his analytical prowess and forward-thinking approach. Sixth Sense Ventures believes in investing in companies driven by unique skill sets and capabilities rather than just capital.",
    "investments": 15,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/nikhil-vora-07713622/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Sixth Sense Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac29d_Bewakoof.svg"
      },
      {
        "name": "Sixth Sense Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac29e_Pariksha.svg"
      },
      {
        "name": "Sixth Sense Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac29f_One%20Green.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "nimesh-kampani",
    "name": "Nimesh Kampani",
    "type": "Angel Investor",
    "title": "Founding partner at 108 capital",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac087_67.%20Nimesh%20Kampani.webp",
    "about": "Nimesh Kampani is the President of LetsVenture Plus, Founder Director of Svasti Microfinance, and an Associate Vice President at Kotak Mahindra Bank. With a background in Investor Relations and Strategy, he brings a wealth of experience from the banking industry. Nimesh is skilled in areas such as banking, equity valuation, equities, and capital markets.",
    "investments": 8,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/nimeshkampani/",
      "twitter": "https://twitter.com/nimeshkampani",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "108 capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac180_bimaplan.svg"
      },
      {
        "name": "108 capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac181_Pariksha.svg"
      },
      {
        "name": "108 capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac182_Hire%20Quotient.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ula",
    "name": "Nipun Mehra",
    "type": "Angel Investor",
    "title": "Founder & CEO at Ula",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac234_120.%20Nipun%20Mehra.webp",
    "about": "Nipun is a co-founder of Ula. Nipun has had previous stints building out businesses and categories at Amazon and Flipkart.",
    "investments": 6,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/nipunmehra/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Ula",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac25e_BharatPe.svg"
      },
      {
        "name": "Ula",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac25f_klub.svg"
      },
      {
        "name": "Ula",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac260_Leap%20Club.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "avataar-venture-partners",
    "name": "Nishant Rao",
    "type": "Angel Investor",
    "title": "Founding Partner at Avataar Venture Partners",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "SaaS",
      "Media",
      "Fintech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546f4dad9395d0b0adf49c_201.%20Nishant%20Rao.webp",
    "about": "Hailing from Gurugram, Nishant Rao is a distinguished Angel Investor known for his strategic investments that have left a mark on the startup ecosystem. He has demonstrated a keen interest in various sectors, including Apps, Business Support Services, and Clothing and Apparel, showcasing his diverse investment portfolio and forwardthinking approach. Nishant's investments are a testament to his astute understanding of the potential within the tech world. His focus on Apps highlights his recognition of the transformative impact of digital solutions on contemporary lifestyles and industries. Through his investments in this arena, he exhibits his belief in the power of innovative applications to shape the future. In addition to tech, Nishant's interest in Business Support Services underscores his commitment to aiding startups in their growth journey. By backing companies that provide essential services to other businesses, he contributes to the overall ecosystem's development and prosperity.",
    "investments": 5,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/nishantrao/",
      "twitter": "https://twitter.com/nishrao",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "nitin-gupta",
    "name": "Nitin Gupta",
    "type": "Angel Investor",
    "title": "Founder & CEO at Uni",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac083_71.%20Nitin%20Gupta.webp",
    "about": "Nitin Gupta, an angel investor based in Bengaluru, focuses on strategic investments in sports, fintech, and edutech. With an extensive portfolio, Nitin has invested in startups such as Bold Finance, Ap Factors, Cashflo, and many others, contributing to the growth and innovation in these sectors.",
    "investments": 22,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/nitinguptaprofile/?originalSubdomain=in",
      "twitter": "https://twitter.com/nitinwhatever?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Uni",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac111_BharatPe.svg"
      },
      {
        "name": "Uni",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac18c_GoKwik.svg"
      },
      {
        "name": "Uni",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac18d_Minko.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "nazara-technologies",
    "name": "Nitish Mittersain",
    "type": "Angel Investor",
    "title": "CEO & MD at Nazara Technologies",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1fc_186.%20Nitish%20Mittersain.webp",
    "about": "Nitish Mittersain, a dynamic entrepreneur, holds the esteemed position of Founder and Managing Director at Nazara Games, a prominent mobile game publisher renowned as India's largest and most rapidly expanding entity in its field. Operating across more than 60 countries, Nazara Games has strategically positioned itself to thrive in emerging markets, with a notable presence in India, Africa, the Middle East, and South East Asia. Nitish's exceptional leadership has been instrumental in propelling the company's growth and influence in these diverse regions. Beyond his contributions to the gaming industry, Nitish Mittersain is also deeply involved in fostering a vibrant business community. Currently, he serves as the Chairman of the Young Presidents Organization (YPO) Mumbai Connect Chapter, where he continues to play a pivotal role in creating connections and facilitating valuable interactions among young leaders. Amid his multifaceted roles and achievements, Nitish reveals another facet of his personality—he is not just confined to the business realm. With a passion for music, he finds solace and joy in playing the saxophone, a creative outlet that beautifully complements his dedication to the gaming world. Nitish Mittersain's journey exemplifies his ability to bridge various interests, making a mark both in the professional arena and personal pursuits, while continually leaving an indelible impact on the realms he ventures into.",
    "investments": 27,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/nitish-mittersain-924192/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Nazara Technologies",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2a9_Knock%20Sense.svg"
      },
      {
        "name": "Nazara Technologies",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac283_Stockgro.svg"
      },
      {
        "name": "Nazara Technologies",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac301_we3.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "norwest",
    "name": "Norwest",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early",
      "Growth"
    ],
    "industries": [
      "SaaS",
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac02c_norwest_logo.svg",
    "about": "Norwest Venture Partners is a venture capital and private equity firm affiliated with Wells Fargo Investment Group, Inc. Their investment focus spans across various stages, including seed/startup, early, mid, late venture, growth equity, and later stage investments. They have expertise in both listed and unlisted companies. Norwest Venture Partners specializes in the healthcare industry, particularly in medical devices, specialty pharmaceuticals, healthcare services, and therapeutic products. By providing capital and support, they aim to fuel innovation and drive growth in these sectors. Norwest's investments range from early stage investments of $1M till large investments of $30M.",
    "investments": 85,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/vrushindani/",
      "twitter": "https://twitter.com/VrushinD",
      "website": "https://www.nvp.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Norwest",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac11c_quikr.svg"
      },
      {
        "name": "Norwest",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac11d_swiggy.svg"
      },
      {
        "name": "Norwest",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac11e_udemy.svg"
      }
    ],
    "pocName": "Vrushin Dani",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "omidyar-network",
    "name": "Omidyar Network",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Early",
      "Growth"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac131_Tata%201mg.svg",
    "about": "Omidyar Network is a mission-driven venture capital . With a strong commitment to social impact, Omidyar Network collaborates with its partners to create opportunities for individuals to unlock their potential and enhance their lives. By investing in innovative initiatives and projects, Omidyar Network empowers people to make meaningful contributions to their communities. Through their strategic investments and support, Omidyar Network aims to foster positive change and create a lasting impact on society. Omidyar invests $500k to $5M in non profit, and $1M to $10M in for-profit startups.",
    "investments": 339,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/unnishankar/",
      "twitter": "https://twitter.com/unnishankar1001?lang=en",
      "website": "https://omidyar.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Omidyar Network",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac132_Healthkart.svg"
      }
    ],
    "pocName": "Unnishankar Jayaprakash",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "orios-vp",
    "name": "Orios VP",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed",
      "Early"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0ee_ixigo.svg",
    "about": "Orios Venture Partners is a prominent Indian technology venture fund that has established a strong portfolio of path-breaking and fast-growing companies. Some notable companies in their portfolio include Pharmeasy, GoMechanic, Country Delight, Zupee, and many others. Orios takes an active approach in nurturing their invested companies, particularly in the areas of marketing and branding. They work closely with these companies to help them achieve cost-effective break-even points and cultivate a loyal user base. Through their strategic guidance and support, Orios Venture Partners aims to empower these startups to thrive and reach their full potential in the competitive technology landscape. Their usual investment cheque size ranges between $4M to $8M.",
    "investments": 38,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/bhaveshsinghi/",
      "twitter": "https://twitter.com/bhaveshsinghi",
      "website": "https://www.oriosvp.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "Bhavesh Singhi",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "shyft",
    "name": "Pankaj Chaddah",
    "type": "Angel Investor",
    "title": "Co-founder at Shyft",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "Edtech",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/66b473e38153226c98b8a3b1_sFDFV%201.webp",
    "about": "Pankaj, the Co-Founder and COO of Zomato, brings a wealth of expertise to the table, having worked previously with Bain and Company in New Delhi. In his current capacity, Pankaj takes charge of sales and operations for Zomato in both local and international markets, with an additional focus on mobile development and distribution. With a degree in mechanical engineering from IIT Delhi, Pankaj is a driving force behind Zomato's success.",
    "investments": 15,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/pankaj-chaddah-0a54979/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "zomatoindia",
    "name": "Pankaj Chaddha",
    "type": "Angel Investor",
    "title": "CoFounder and Chief Operating Officer (COO) at Zomato",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/66b473e38153226c98b8a3b1_sFDFV%201.webp",
    "about": "Pankaj serves as the CoFounder and Chief Operating Officer (COO) of Zomato. Before his involvement with Zomato, Pankaj held a position at Bain and Company in New Delhi. In his present capacity, Pankaj is responsible for managing sales and operations for Zomato across both local and international markets. He also takes charge of overseeing all aspects related to mobile development and distribution on various platforms. Pankaj's academic background includes a degree in mechanical engineering from IIT Delhi, which he obtained in 2007.",
    "investments": 15,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/pankajchaddah0a54979/?ref=ynos.in",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "peyush-bansal",
    "name": "Peyush Bansal",
    "type": "Angel Investor",
    "title": "Co-founder & CEO at Lenskart",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Edtech",
      "SaaS",
      "Consumer",
      "Digital Entertainment",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0c5_115.%20Peyush%20Bansal.webp",
    "about": "Peyush Bansal is a notable Angel Investor from Delhi, with a strong focus on investments in the areas of Manufacturing, Design, Community, and Lifestyle. He has made investments in several startups, including Haqdarshak, Lil'Goodness, Online Live Learning (Oll), and others. In addition to his angel investing activities, Peyush Bansal is a renowned Indian entrepreneur and business executive. He is best known as the co-founder and CEO of Lenskart, a leading multinational optical prescription eyewear retail chain headquartered in Gurugram. Peyush Bansal's expertise and success in the business world have earned him recognition, including his role as a judge on the show Shark Tank India.",
    "investments": 23,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/peyushbansal/",
      "twitter": "https://twitter.com/peyushbansal",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Lenskart",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1bf_Daily%20Objects.svg"
      },
      {
        "name": "Lenskart",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1cb_Shiprocket.svg"
      },
      {
        "name": "Lenskart",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1d7_hoovu.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "phanindra-sama",
    "name": "Phanindra Sama",
    "type": "Angel Investor",
    "title": "Founder at Redbus",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Edtech",
      "SaaS",
      "Consumer",
      "Digital Entertainment",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac081_73.%20Phanindra%20Sama.webp",
    "about": "Phanindra Sama, a member of the Board of Directors at T Works and the Chief Innovation Officer at the Government of Telangana, is best known as the founder and former CEO of redBus.in and Pilani Soft Labs Pvt Ltd. Having launched redBus in 2006, he successfully led the company for nearly eight years, establishing it as India's largest online ticket booking platform. Currently, Phanindra Sama is actively involved in fostering innovation and driving growth as the Chief Innovation Officer of the Telangana government. His entrepreneurial journey and contributions have left a significant impact on the Indian startup ecosystem.",
    "investments": 24,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/phanisama/",
      "twitter": "https://twitter.com/phanisama?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Redbus",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0e6_unacademy.svg"
      },
      {
        "name": "Redbus",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac15f_Airmeet.svg"
      },
      {
        "name": "Redbus",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac15c_Kaagaz.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "pi-ventures",
    "name": "Pi Ventures",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Early"
    ],
    "industries": [
      "HealthTech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac072_Pi%20ventures.webp",
    "about": "Pi Ventures is an early stage venture fund based out of India. The fund will focus on backing product & technology companies in the areas of Artificial Intelligence, Machine Intelligence & IoT , as we rapidly see hardware and software products coming together using artificial and machine intelligence to create disruptive ventures across multiple sectors.",
    "investments": 20,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/akhilandasu/",
      "twitter": "",
      "website": "https://www.piventures.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Pi Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac17f_Limechat.svg"
      },
      {
        "name": "Pi Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1aa_Locus.svg"
      },
      {
        "name": "Pi Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1ab_Pi%20Ventures.svg"
      }
    ],
    "pocName": "Akhil Andasu",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "point-one-capital",
    "name": "Point One Capital",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "SaaS",
      "Consumer",
      "Edtech",
      "Digital Entertainment"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac048_image%2056.svg",
    "about": "Accel is a renowned venture capital firm that plays a vital role in nurturing a global community of entrepreneurs. With a focus on both early stage and growth stage investments, Accel aims to support and empower promising companies across various sectors. They actively seek out opportunities in the cloud, software as a service (SaaS), consumer, enterprise, information technology, healthcare, fintech, security, media, and business products and services sectors. By providing strategic investments and guidance, Accel helps entrepreneurs turn their innovative ideas into successful businesses. With offices in San Francisco, California, London, United Kingdom, and Bangalore, India, Accel's global presence allows them to identify and support entrepreneurial talent from different corners of the world. Through their extensive network and expertise, Accel continues to drive innovation and contribute to the growth of the startup ecosystem.",
    "investments": 44,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ravish-ratnam-732a7757/",
      "twitter": "https://twitter.com/ratnamravish",
      "website": "https://pointone.capital/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Point One Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac125_Preskale.svg"
      },
      {
        "name": "Point One Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac126_threado.svg"
      },
      {
        "name": "Point One Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac127_vahak.svg"
      }
    ],
    "pocName": "Ravish Ratnam",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "infoquest",
    "name": "Pras Hanuma",
    "type": "Angel Investor",
    "title": "CEO at InfoQuest",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "Edtech",
      "SaaS",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/655464a95bf84599b5084cc8_228.%20Pras%20Hanuma.webp",
    "about": "Hailing from the innovationdriven landscape of Germany, Pras Hanuma stands out as a remarkable Angel Investor, leaving a substantial imprint on the global investment arena. With a strategic focus that spans diverse and dynamic sectors, including Business Support Services, Artificial Intelligence (AI) and Machine Learning (ML), as well as Applications (Apps), Pras Hanuma has established himself as a pivotal figure in shaping the trajectory of pioneering startups, igniting their growth and amplifying their impact within their respective industries. Pras Hanuma's mission is characterized by an unwavering commitment to identifying and nurturing startups that embody exceptional promise across the realms of Business Support Services, AI and ML, and Apps. This investor extraordinaire taps into Germany's innovationrich ecosystem, harnessing the nation's reputation as a global hotspot for technological advancement and entrepreneurial spirit.",
    "investments": 14,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/prashanuma/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "1mg-india",
    "name": "Prashant Tandon",
    "type": "Angel Investor",
    "title": "Founder at 1mg, India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546216ec32b877317c0a36_232.%20Prashant%20Tandon.webp",
    "about": "An enterprising individual, the Founder of 1mg, is actively engaged in the creation and advancement of a healthcare technology enterprise in India. With a focus on leveraging technology to revolutionize the healthcare landscape, this visionary entrepreneur's journey encompasses a diverse array of specialties that span various facets of business and management. Having embarked on a trajectory that includes management consulting and pioneering startups, their expertise extends into the realm of operations management, negotiation tactics, strategic planning, general management, technology integration, and sales and marketing prowess. This multifaceted skill set underscores their comprehensive approach to business leadership, demonstrating an ability to navigate challenges, forge innovative pathways, and drive impactful strategies.",
    "investments": 6,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/prashanttandon2802a4/",
      "twitter": "https://twitter.com/tandon_prashant",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "reviewadda-com",
    "name": "Prateek Kumar Bhowmick",
    "type": "Angel Investor",
    "title": "Co-founder & COO at ReviewAdda.Com",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/66b473e38153226c98b8a3b1_sFDFV%201.webp",
    "about": "Prateek Kumar Bhowmick, an influential Angel Investor based in Delhi, directs his investment focus towards promising sectors like Software, AI and ML, and Energy. His investment portfolio features notable startups such as Garuda Aerospace, Hairoriginals, Leaf Round, and several others, indicating his keen eye for potential disruptors in the market.",
    "investments": 21,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/prateekbhowmick/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "pravega-ventures",
    "name": "Pravega Ventures",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Pre-Seed",
      "Seed",
      "Early"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac15c_Kaagaz.svg",
    "about": "Pravega Ventures is a venture capital firm headquartered in Delhi, India. The firm focuses on investing in early-stage startups operating in the fields of artificial intelligence (AI) and machine learning (ML), agritech and farming, and apps. With a portfolio that includes promising companies like Algiz Consultancy Services, Chefkart, Citizengage Solutions, and many others, Pravega Ventures has established itself as a key player in supporting and nurturing innovative ventures in these sectors. Through their investments and strategic guidance, Pravega Ventures aims to fuel the growth and success of early-stage startups in India's technology ecosystem.",
    "investments": 18,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sridhar-sirugudi-789363122/",
      "twitter": "",
      "website": "https://www.pravegavc.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "Sridhar Sirigudi",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "beardo",
    "name": "Priyank Shah",
    "type": "Angel Investor",
    "title": "Founder at Beardo",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/66b473e38153226c98b8a3b1_sFDFV%201.webp",
    "about": "Priyank Shah, a distinguished Angel Investor hailing from Ahmedabad, has carved a notable niche for himself in the world of startup investments. With a keen eye for innovative ventures, he specializes in backing startups operating in diverse sectors such as Apps, Health-Tech, and Clothing and Apparel. Through his strategic investments, he has made a significant impact on the entrepreneurial landscape. In the realm of technology, Priyank Shah has displayed a remarkable affinity for Apps, recognizing their potential to shape modern lifestyles and business landscapes. His investments in this sector are a testament to his forward-thinking approach and his belief in the power of digital solutions to transform industries.",
    "investments": 13,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/priyank-shah-18369237/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "quona-capital",
    "name": "Quona Capital",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Early"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac13a_Rupifi.svg",
    "about": "Quona Capital is a venture capital firm that specializes in investing in growth-stage financial technology (fintech) companies operating in emerging markets. Their portfolio includes notable companies such as Onsurity, Rupifi, IndiaMart, and Zest. These companies are at the forefront of leveraging technology to revolutionize the financial services industry in their respective markets. With Quona Capital's support, these fintech innovators are able to accelerate their growth, expand their customer base, and drive financial inclusion by providing accessible and inclusive financial solutions to individuals and businesses in emerging economies. Quona Capital's investment and expertise contribute to the continued success and impact of these forward-thinking fintech companies.",
    "investments": 59,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/satvik-b-a92419138/",
      "twitter": "https://twitter.com/satvikbhanot",
      "website": "https://quona.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "Satvik Bhanot",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "kindlife",
    "name": "Radhika Agarwal Ghai",
    "type": "Angel Investor",
    "title": "Founder & CEO at Kindlife",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546896ad9395d0b0a8bd27_Mitron.webp",
    "about": "Radhika Agarwal Ghai has established herself as a prominent serial entrepreneur and influential angel investor. She holds the role of cofounder in diverse ventures, notably kindlife – an innovative beauty and wellness ecosystem fostering commerce, community, and brand engagement. Additionally, her cofounding roles encompass ShopClues, a pioneering online marketplace connecting buyers and sellers, as well as FashionClues. Radhika's journey into entrepreneurship commenced in 1997 when she founded her advertising agency, marking the inception of her business endeavors. Subsequently, she pursued higher education, earning her MBA from Washington University in St. Louis, USA. Gaining valuable experience, she worked with distinguished organizations like Goldman Sachs and Nordstrom in Seattle. In 2009, Radhika propelled the launch of FashionClues, a trailblazing social content platform tailored for NRI women. Her significant contributions to the business domain have garnered numerous accolades over the years. Recognitions include the prestigious CEO of the Year Award at CEO India Awards, the Outlook Business Woman of Worth distinction at Outlook Business Awards, and the title of Exemplary Woman Entrepreneur of the Year at CMO Asia Awards, among others. Radhika's pioneering achievement of creating a Unicorn (a company valued at $1 billion) in India was acknowledged with the esteemed \"First Lady\" award presented by the Ministry of Women and Child Welfare and bestowed by the President of India.",
    "investments": 4,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/radhikaghai/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "raghunandan-g",
    "name": "Raghunandan G",
    "type": "Angel Investor",
    "title": "Founder at Zolve",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac080_74.%20Raghunandan%20G.webp",
    "about": "Raghunandan G, the Founder of Zolve and a passionate start-up enthusiast, has an impressive track record in the technology and entrepreneurship space. Prior to his current venture, he played instrumental roles as the Founder and Director at TaxiForSure and Serendipity Infolabs Pvt. Ltd. Raghunandan's love for running, avid reading, and vast knowledge make him a true encyclopedia in his own right. With degrees from IIM Ahmedabad and NITK Surathkal, and a strong background in technology from his time at Texas Instruments, he brings a unique blend of expertise and experience to the table.",
    "investments": 18,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/graghunandan/?originalSubdomain=in",
      "twitter": "https://twitter.com/raghugnandan",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Zolve",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac190_Bhive.svg"
      },
      {
        "name": "Zolve",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac191_Moengage.svg"
      },
      {
        "name": "Zolve",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac17a_Chingari.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "elevate-now",
    "name": "Rahul Maroli",
    "type": "Angel Investor",
    "title": "CEO at Elevate Now",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "Edtech",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac20c_158.%20Rahul%20Maroli.webp",
    "about": "Rahul Maroli is an accomplished Thought Leader known for his adeptness in strategic planning, P&L management, and cultivating profitable and scalable businesses. With a proven track record spanning more than 15 years, he has successfully directed prominent companies in sectors such as media & entertainment, mobility, e-commerce, consumer goods, and startups. Rahul's capabilities extend to handling intricate, multifaceted businesses through various cross-functional capacities, including Operations, Sales, and Marketing. His skill set encompasses adept problem-solving, strategic planning, partnership cultivation, global and strategic alliances, negotiation prowess, and adept stakeholder management.",
    "investments": 8,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/rahulmaroli/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Elevate Now",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2c5_Dibz.svg"
      },
      {
        "name": "Elevate Now",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2c6_Advantage%20Club.svg"
      },
      {
        "name": "Elevate Now",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2c7_Pee%20Safe.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "rajan-anandan",
    "name": "Rajan Anandan",
    "type": "Angel Investor",
    "title": "Managing Director at Sequoia Capital",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "HealthTech",
      "Consumer",
      "Edtech",
      "Mobility",
      "Digital Entertainment",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac012_1570489555180.webp",
    "about": "Rajan Anandan currently holds the position of Managing Director at Sequoia Capital. Prior to this role, he served as the Vice President for India and Southeast Asia at Google, as well as the Managing Director at Microsoft India for Microsoft. As a member of the leadership team at Sequoia Capital India, Rajan is dedicated to the growth and enhancement of their early-stage program called Surge. He aims to transform Surge into a leading global scale-up program for startups by providing investment advice and mentorship to the founders participating in the program. Some of the notable portfolio companies under Rajan's guidance include Instamojo, Travelkhana, and Explara.",
    "investments": 74,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/rajan-anandan-2481b814/",
      "twitter": "https://twitter.com/rajananandan?lang=en",
      "website": "https://www.sequoiacap.com/india/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Sequoia Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0d3_Instamojo.svg"
      },
      {
        "name": "Sequoia Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0d4_Travel%20Khana.svg"
      },
      {
        "name": "Sequoia Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0d5_POPXO.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "unique-uniforms-pvt-ltd",
    "name": "Rajat Gupta",
    "type": "Angel Investor",
    "title": "Founder at Unique Uniforms Pvt Ltd",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Edtech",
      "SaaS",
      "Mobility"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546c24e4bdaf9b9eb77b33_216.%20Rajat%20Gupta.webp",
    "about": "A proficient and versatile professional with a rich array of work experiences spanning across Business Development, Operations, Buying and Merchandising in the domains of Uniforms, Workwear, and PPE. Accompanied by expertise in Client Servicing, Franchise Development, Business Analysis, and adept Vendor and Team Management. Renowned as a strategic planner, I possess a proven track record in orchestrating business operations and shaping a company's mission and strategic trajectory. My background showcases adeptness in orchestrating diverse facets, including executing promotional activities and events to amplify business, profitability, and market outreach. My skillset extends to effective management of merchandising operations, encompassing requirement analysis, sampling, production, dispatch, and seamless liaison to ensure the timely achievement of organizational targets. I excel in delivering valueadded customer service by adeptly resolving customer concerns, ensuring their contentment with both the product and service standards. Recognized as an adept organizer, motivator, and team player, I exhibit a decisive leadership approach, successfully directing projects from conceptualization to seamless implementation while navigating through dynamic market landscapes.",
    "investments": 4,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/rajat2628/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "9unicorns",
    "name": "Rajesh Mane",
    "type": "Angel Investor",
    "title": "Founding member at 9Unicorns",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "SaaS",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac229_131.%20Rajesh%20Mane.webp",
    "about": "Rajesh Mane is a highly active early-stage investor, with a strong focus on consumer products, fintech, healthcare, and technology startups. He firmly believes in India's growth potential, particularly in Tier 2 and 3 cities, and actively collaborates with founders to reshape their vision, achieve scalability, and find the right product-market fit. With an impressive track record, Rajesh has invested in over 25 startups, including successful exits like Innov8 and Beardo. He joined Venture Catalysts in 2015 as their first team member and has since reviewed more than 14,000 startups, curating 87+ for seed investments, including potential unicorns like BharatPe. Rajesh is not only dedicated to supporting early-stage founders but also contributes to the startup ecosystem by engaging with institutional e-cells, incubators, and innovation hubs across India, GCC, and South East Asia.",
    "investments": 13,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/rajeshmane",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "9Unicorns",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac27f_Blu%20Smart%20Mobility.svg"
      },
      {
        "name": "9Unicorns",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac258_beardo.svg"
      },
      {
        "name": "9Unicorns",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac280_Confirmtkt.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "gsf",
    "name": "Rajesh Sawhney",
    "type": "Angel Investor",
    "title": "Founder at GSF",
    "stages": [
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac235_119.%20Rajesh%20Sawhney.webp",
    "about": "Rajesh is a serial entrepreneur and business builder who has set-up multiple successful businesses over the last two decades. Rajesh is the co-founder of InnerChef, India's fastest growing food tech platform. With brands like healthie. In and KetoGarden. In, he is bring healthy food to a billion people. Rajesh is also the founder of GSF, Indias leading multi-city Tech-Startup Accelerator for the brightest tech startups in India. GSF provides tech startups mentorship from celebrated digital founders, initial capital and global exposure.Rajesh has made 80 angel investments as an active and engaged angel investor",
    "investments": 55,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/rajeshgsf/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "GSF",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac25b_Zenduty.svg"
      },
      {
        "name": "GSF",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac25c_growth%20school.svg"
      },
      {
        "name": "GSF",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac25d_50%20Fin.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "blackbuck",
    "name": "Rajesh Yabaji",
    "type": "Angel Investor",
    "title": "Co-Founder & CEO at BlackBuck",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "Mobility",
      "Consumer",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1fe_184.%20Rajesh%20Yabaji.webp",
    "about": "Rajesh's reputation is built upon his vitality and unwavering determination, evident not only in his fervor for marathons but even more so in his dedication to crafting the largest global trucking network. Holding the roles of Co-Founder and CEO at BlackBuck, Rajesh takes on the continuous task of propelling the company's growth. Whether engaging in financial dialogues, contributing ideas to fresh product designs, or strategizing business expansion, Rajesh remains intricately involved across all operational facets. With a background as an IIT Kharagpur alumnus, he previously led ITC's Leaf Tobacco business's Supply Chain division, marking his journey towards founding BlackBuck.",
    "investments": 17,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/rajesh-yabaji-302347a/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "BlackBuck",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2fb_agrify.svg"
      },
      {
        "name": "BlackBuck",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2fc_VOGO.svg"
      },
      {
        "name": "BlackBuck",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2fd_captain%20fresh.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ramakant-sharma",
    "name": "Ramakant Sharma",
    "type": "Angel Investor",
    "title": "Founder & COO at Livspace",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Mobility",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac093_54.%20Ramakant%20Sharma.webp",
    "about": "Ramakant Sharma holds multiple key roles in various organizations. He is the Founder and COO of Livspace, an interior design and home renovation platform. Additionally, he serves as an Operating Partner at Jungle Ventures and is a Co-Founder at Violetbag.com, which is part of Zing Ecommerce Pvt. Ltd. Within Livspace, Ramakant plays a pivotal role in driving technological innovations that are fundamental to the company's operations. He also leads the operations team. Prior to establishing Livspace, Ramakant was an essential member of the core team and served as the Vice President of Engineering at Myntra, a prominent fashion eCommerce startup in India.",
    "investments": 68,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sharmaramakant/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Livspace",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac15e_toothsi.svg"
      },
      {
        "name": "Livspace",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac15f_Airmeet.svg"
      },
      {
        "name": "Livspace",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac160_Plum.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "multiply-ventures",
    "name": "Raveen Sastry",
    "type": "Angel Investor",
    "title": "Founding partner at Multiply Ventures",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Edtech",
      "Digital Entertainment",
      "Media",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac219_147.%20Raveen%20Sastry.webp",
    "about": "Raveen Sastry, as a Founding Partner at Multiply Ventures, has played a pivotal role in the venture capital realm. Prior to his role at Multiply Ventures, Raveen served as a Strategic Advisor at Zeta Global, gaining invaluable insights into the startup ecosystem. His co-founding of NudgeSpot further demonstrates his expertise and acumen in navigating the world of venture capital and startups.",
    "investments": 11,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/raveens/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Multiply Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2ac_Stoa.svg"
      },
      {
        "name": "Multiply Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2ad_Gramaphone%20(1).svg"
      },
      {
        "name": "Multiply Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac28b_The%20Better%20India.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ravi-bhushan",
    "name": "Ravi Bhushan",
    "type": "Angel Investor",
    "title": "Founder & CEO at BrightChamps",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0c1_111.%20Ravi%20Bhushan.webp",
    "about": "Ravi Bhushan, an Angel Investor based in Goa, focuses on investing in startups operating in the domains of Commerce and Shopping, Health-Tech, and Sales and Marketing. With a keen eye for promising ventures, Ravi has made investments in startups like Mojocare, Flexifyme, Retainiq, and others. By leveraging his expertise and financial support, Ravi plays a crucial role in fostering the growth and development of these startups. His strategic investments demonstrate his confidence in the potential of these sectors and his commitment to supporting innovative and impactful businesses.",
    "investments": 4,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ravibk/",
      "twitter": "https://twitter.com/ravibhu",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "BrightChamps",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1d2_one%20impression.svg"
      },
      {
        "name": "BrightChamps",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1d3_mojo%20care.svg"
      },
      {
        "name": "BrightChamps",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1d4_flexify%20me.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "qikpod",
    "name": "Ravi Gururaj",
    "type": "Angel Investor",
    "title": "Founder at QikPod",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546cf36dde3120b17c050d_212.%20Ravi%20Gururaj.webp",
    "about": "Ravi Gururaj is Founder/CEO of QikPod where he is building a nationwide network of parcel delivery lockers in partnership with top tier investors and strategic industry partners. Ravi is an entrepreneur / founder of 6 technology ventures, 2 which were acquired by public NASDAQ companies, an angel investor, a mentor to numerous entrepreneurs, technology executive, and ecosystem evangelist. Over his 26year career, Ravi has held wide ranging roles including promoting an STPI unit exporting software components out of India, product management at Intel, served as Managing Director of the Trilogy Software's India engineering center, and founded multiple software product ventures. Ravi serves on the Indian Venture Capital Association Council, is Chief Mentor at Reliance Industries GenNext startup program, serves on the Startup Vision Group of the Govt. of Karnataka, the Startup Council of CII, cochairs the Penn & Wharton Club of Bangalore and cofounded the Harvard Business School Alumni Angels chapter in India. He was President of The Indus Entrepreneurs (TiE) for two terms and served six years on the NASSCOM Executive Council and was the first startup CEO elected to that industry body which represents India’s US $200+ billion technology industry.",
    "investments": 13,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/rgururaj/",
      "twitter": "https://twitter.com/ravigururaj?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "QikPod",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546ce7477b93838a9ae0aa_Dealwithus.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "renu-satti",
    "name": "Renu Satti",
    "type": "Angel Investor",
    "title": "COO at PayTM",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac08b_63.%20Renu%20Satti.webp",
    "about": "Renu Satti, an angel investor based in Delhi, has made significant investments in various sectors. Her prominent investment areas include transportation and logistics, apps, and software. Renu has backed startups such as Coffeee, Vama, Weskill, and several others, leveraging her expertise and financial support to fuel their growth and innovation.",
    "investments": 6,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/renusatti/",
      "twitter": "https://twitter.com/renusatti",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "PayTM",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac176_Weskill.svg"
      },
      {
        "name": "PayTM",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac177_vama.svg"
      },
      {
        "name": "PayTM",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac178_Unnati.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "revant-bhate",
    "name": "Revant Bhate",
    "type": "Angel Investor",
    "title": "Co-Founder and CEO at Mosaic Wellness",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac082_72.%20Revant%20Bhate.webp",
    "about": "Revant Bhate, the Founder and CEO of Mosaic, brings a wealth of experience and expertise to the table. Previously, Revant served as a Partner at Kstart, the seed program of Kalaari Capital, where he made strategic investments in multiple B2C businesses. Prior to his role at Kstart, he played a key role in the growth and success of Rebel Foods, India's largest food delivery business, during his tenure as an Entrepreneur in Residence. With a strong background in banking and financial services, particularly in the consumer and healthcare sectors, Revant's contributions have been instrumental in driving innovation and growth in the industry.",
    "investments": 17,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/revant/?ref=ynos.in",
      "twitter": "https://twitter.com/RevantB",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Mosaic Wellness",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac18e_Deserv.svg"
      },
      {
        "name": "Mosaic Wellness",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac18f_The%20Souled%20Store.svg"
      },
      {
        "name": "Mosaic Wellness",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac166_Ultrahuman.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sharrp-ventures",
    "name": "Rishabh Mariwala",
    "type": "Angel Investor",
    "title": "Managing Partner at Sharrp Ventures",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546e7702a8e45a73462ad4_209.%20Rishabh%20Mariwala.webp",
    "about": "Rishabh Mariwala has garnered recognition as the visionary Founder behind the innovative venture, Soap Opera n More. His commitment to driving unique ideas and creating impactful solutions has solidified his reputation within the entrepreneurial sphere. Rishabh's journey showcases a blend of creativity, business acumen, and a profound understanding of consumer needs. Rishabh Mariwala's educational background further enriches his multifaceted profile. He pursued his education at the esteemed United World College of Southeast Asia, a foundation that likely instilled a global perspective and a strong sense of cultural awareness. Continuing his educational journey, he further honed his skills and knowledge by graduating from Hofstra University. These educational experiences have likely contributed to his wellrounded approach to business and innovation.",
    "investments": 5,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/rishabhmariwala43b01524/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ritesh-malik",
    "name": "Ritesh Malik",
    "type": "Angel Investor",
    "title": "Founder & CEO at Innov8 Coworking",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0bf_109.-Ritesh-Malik.webp",
    "about": "Ritesh Malik is a prominent figure in the startup community, serving as the Founder & Trustee at Plaksha and the Founder & CEO at Innov8 Coworking. Additionally, he has established Project Guerilla, an accelerator firm. Ritesh Malik's ventures reflect his dedication to fostering innovation and providing conducive workspaces for entrepreneurs. His contributions to the startup ecosystem have made a significant impact, empowering aspiring founders and driving entrepreneurial growth.",
    "investments": 62,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/drriteshmalik/?originalSubdomain=in",
      "twitter": "https://twitter.com/drriteshmalik",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Innov8 Coworking",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac161_dukaan.svg"
      },
      {
        "name": "Innov8 Coworking",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac179_Growth%20School.svg"
      },
      {
        "name": "Innov8 Coworking",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac12e_Leverage%20edu.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "rohit-chanana",
    "name": "Rohit Chanana",
    "type": "Angel Investor",
    "title": "Founder & Managing partner at Sarcha Advisors",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0bc_106.%20Rohit%20Chanana.webp",
    "about": "As an Managing Partner at Sarcha Advisors LLP, I have had a remarkable journey so far, constantly learning as a 21-year-old student of Philosophy, Psychology, and Digital Technologies. Despite my age, I approach my work with the mindset and experience of a 36-year-old, having interacted with over 200 founders as an angel investor. I offer selective advisory services, aligning with Family Offices and Startups based on shared values. Leveraging my 36 years of experience, I focus on positive outcomes, maintaining a balance between intuition and analysis, and providing frameworks for trade-offs and personal philosophy. My higher purpose is happiness, which I aim to achieve by bringing positive results to my friends and partners.",
    "investments": 27,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/rohit-chanana-1b22811a/",
      "twitter": "https://twitter.com/rohit_chanana",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Sarcha Advisors",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0d1_Altor.svg"
      },
      {
        "name": "Sarcha Advisors",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0d0_Growfitter.svg"
      },
      {
        "name": "Sarcha Advisors",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0cf_Wyld.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "oyo",
    "name": "Rohit Kapoor",
    "type": "Angel Investor",
    "title": "CEO at OYO",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac22e_126.%20Rohit%20Kapoor.webp",
    "about": "Chief Executive Officer - India & South Asia at OYO",
    "investments": 10,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/rohit-kapoor-99a30436/?originalSubdomain=in",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "OYO",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac270_Wingo.svg"
      },
      {
        "name": "OYO",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac271_Upscalio%201.svg"
      },
      {
        "name": "OYO",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac272_The%20Souled%20Store.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "snapdeal",
    "name": "Rohit Kumar Bansal",
    "type": "Angel Investor",
    "title": "CoFounder at Snapdeal",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546340fc8e963bc0901ad8_231.%20Rohit%20Kumar%20Bansal.webp",
    "about": "Rohit Kumar Bansal is a seasoned entrepreneur and angel investor. He is best known for his cofounding roles in several notable ventures, including Snapdeal, an ecommerce company, AceVector Group, a techenabled retail company, and Titan Capital, a venture capital firm. Rohit holds a degree from the prestigious Indian Institute of Technology Delhi (IIT Delhi).",
    "investments": 82,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/rohitkbansal/",
      "twitter": "https://twitter.com/rohitkbansal",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Snapdeal",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/655462dc34c9ab8371a48086_khatabook_logo.webp"
      },
      {
        "name": "Snapdeal",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534c3136376901faee299a_1687285683825-e6cf23.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "cloudnine-group-of-hospitals",
    "name": "Rohit M A",
    "type": "Angel Investor",
    "title": "CoFounder & Managing Director at Cloudnine Group of Hospitals",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/655465300e258af720a3418e_227.%20Rohit%20M%20A.webp",
    "about": "Rohit holds the esteemed positions of CoFounder and Managing Director at Cloudnine Hospitals, a preeminent chain of healthcare facilities specializing in maternity, women's health, and child care services in India. As a pivotal member of Cloudnine's founding team, Rohit has been instrumental in the establishment and subsequent growth of the organization. His leadership role encompasses a spectrum of vital responsibilities, where he has spearheaded strategic and operational facets including digital innovations, brand expansion, stakeholder management, and holistic customercentric initiatives. Rohit's involvement in Cloudnine spans across diverse areas, and he is deeply engaged in the strategic direction of the company. With a steadfast commitment to excellence, he has been at the forefront of crafting and executing strategies that align with Cloudnine's mission of delivering unparalleled healthcare services of international caliber. His close collaboration with the accomplished professional team at Cloudnine underscores his dedication to upholding the highest standards of service quality and customer satisfaction.",
    "investments": 20,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/rohitoncloud9/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "the-glitch",
    "name": "Rohit Raj",
    "type": "Angel Investor",
    "title": "CoFounder at The Glitch",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "SaaS",
      "Consumer",
      "Digital Entertainment"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/6554638c34c9ab8371a524aa_230.%20Rohit%20Raj.webp",
    "about": "Rohit is a seasoned serial entrepreneur who is deeply involved in the startup ecosystem as an engaged angel investor and advisor to numerous emerging ventures. His entrepreneurial journey includes successful cofounding roles in The Glitch and Chtrbox.com, both of which were later acquired. Presently, he serves as the cofounder of Done Deals, a platform that facilitates acquisitions for startups and entrepreneurs, streamlining the process of getting acquired.",
    "investments": 5,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/rohitrajkaral/",
      "twitter": "https://twitter.com/mad_toothbrush",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "roots-ventures",
    "name": "Roots Ventures",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early",
      "Seed",
      "Growth"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac05a_roots%20ventures%20VC.webp",
    "about": "Roots Ventures is a sector-agnostic venture capital firm that operates across multiple stages of investment. They have a flexible approach to investing and do not limit themselves to specific industries or sectors. This allows them to explore opportunities in various fields and support promising startups at different stages of their growth. With a broad investment focus, Roots Ventures seeks to identify and nurture high-potential companies with innovative ideas and strong growth prospects. By providing capital, expertise, and guidance, they aim to help these ventures reach their full potential and create long-term value.",
    "investments": 15,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/gauravnavani/",
      "twitter": "",
      "website": "https://roots-ventures.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Roots Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1bf_Daily%20Objects.svg"
      },
      {
        "name": "Roots Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1c0_teamonk.svg"
      },
      {
        "name": "Roots Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1c1_railofy.svg"
      }
    ],
    "pocName": "Gaurav Navani",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "rtp-global",
    "name": "RTP Global",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Consumer",
      "Digital Entertainment"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac031_RTP%20-%20global.webp",
    "about": "Rtp Global is a Bengaluru-based venture capital firm that was established in 2000. With a focus on investing in cutting-edge technologies, Rtp Global specializes in sectors such as AI and ML, Adtech, Agritech, and Farming. They have made significant investments in startups including Agara Labs, Appsdaily Solutions, Bijak, and many more, totaling over 60 investments to date, with average investment of $5M. Rtp Global's mission is to support and nurture innovative startups in these sectors, helping them grow and make a lasting impact in the market. Through their expertise and strategic investments, Rtp Global aims to contribute to the advancement of these industries and drive positive change.",
    "investments": 79,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/nikunj-jagetia-090b33146/",
      "twitter": "https://twitter.com/nikunjjagetiya",
      "website": "https://rtp.vc/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "RTP Global",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac102_practo.svg"
      },
      {
        "name": "RTP Global",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac134_Cred.svg"
      },
      {
        "name": "RTP Global",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac135_MPL.svg"
      }
    ],
    "pocName": "Nikinj Jagetiya",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "ofbusiness-a69d8",
    "name": "Ruchi Kalra",
    "type": "Angel Investor",
    "title": "CoFounder at OfBusiness",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546984e3711c85cdd805cd_220.%20Ruchi%20Kalra.webp",
    "about": "Ruchi Kalra has been highly known as the Cofounder and CFO at OfBusiness. She has also been a Cofounder and CFO of Oxyzo Financial Services Pvt Ltd and a Partner at McKinsey & Company. She has also worked as a Senior business analyst at Evalueserve. She holds a B.Tech degree in Chemical Engineering from Indian Institute of technology, Delhi and also a MBA degree from INDian sSChool of Busines.",
    "investments": 10,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ruchikalra0a62512/?ref=ynos.in",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "saama-capital",
    "name": "Saama Capital",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac078_saama%20capital.webp",
    "about": "Saama Capital is a prominent venture capital fund in India that focuses on investing in Indian companies. It is the independent successor fund to SVB India Capital Partners (SICP), which has a successful track record of investments in India since 2006. With a collaborative partner-driven approach, Saama Capital maintains diversification across various stages and sectors. While operating under a new identity, Saama Capital comprises the same experienced team and follows the same investment strategy as SICP.",
    "investments": 53,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/varunengineer/",
      "twitter": "https://twitter.com/_varunengineer?",
      "website": "http://www.saama.vc/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Saama Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac19f_Paytm.svg"
      },
      {
        "name": "Saama Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac16d_mokobara.svg"
      },
      {
        "name": "Saama Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1a0_Daily%20Ninja.svg"
      }
    ],
    "pocName": "Varun Engineer",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sachin-bansal",
    "name": "Sachin Bansal",
    "type": "Angel Investor",
    "title": "Founder & CEO at Navi",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac01e_Sachin_Bansal.webp",
    "about": "Sachin Bansal, an Indian entrepreneur and the current CEO of Navi, is renowned for his role as the founder of Flipkart. With a career spanning over 11 years at Flipkart, Sachin served as its CEO and chairman. In 2018, he made his exit from Flipkart following the company's acquisition by Walmart. Sachin, along with Binny Bansal, founded Flipkart in 2007, which grew to become a prominent e-commerce platform with a valuation of $20.8 billion in 2018. Throughout his journey, Sachin has demonstrated a consistent drive for creating successful businesses. Right after his exit from Flipkart, Sachin Bansal swiftly established BAC Acquisitions, which was later rebranded as Navi Technologies in December 2018. The primary objective of this venture was to focus on investments and acquisitions, with a particular emphasis on the BFSI (Banking, Financial Services, and Insurance) sector. His average investments ranges between $1M - $2M.",
    "investments": 19,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sachinbansal/",
      "twitter": "https://twitter.com/_sachinbansal",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Navi",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0f4_Ather.svg"
      },
      {
        "name": "Navi",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0f5_Tracxn.svg"
      },
      {
        "name": "Navi",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0f6_inshorts.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sachin-bhatia",
    "name": "Sachin Bhatia",
    "type": "Angel Investor",
    "title": "Co-Founder & CEO at Bulbul",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Consumer",
      "Digital Entertainment"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac07b_79.%20Sachin%20Bhatia.webp",
    "about": "Sachin Bhatia is the Co-founder and CEO of Bulbul. He is an alumnus of Delhi Public School, RK Puram, and has previously founded TrulyMadly and MakeMyTrip before venturing into the video shopping app industry.",
    "investments": 13,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sbhatia1/",
      "twitter": "https://twitter.com/ahsachin",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Bulbul",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac19a_Wigzo.svg"
      },
      {
        "name": "Bulbul",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac19b_MYHQ.svg"
      },
      {
        "name": "Bulbul",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac198_Shuttl.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "delhivery",
    "name": "Sahil Barua",
    "type": "Angel Investor",
    "title": "Co-Founder at Delhivery",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "Mobility",
      "Consumer",
      "Media",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1fa_189.%20Sahil%20Barua.webp",
    "about": "Hailing from Ahmedabad, Sahil Barua is a notable Angel Investor who has made a distinct mark in the investment landscape. His investments have been particularly impactful across a range of sectors, notably in Apps, Food and Beverage, and Edu-Tech. With a keen eye for innovation and growth potential, Sahil has extended his financial support to a diverse array of startups, creating a ripple effect in their journeys towards success. Notable among his investments are ventures such as Crest, Vidyut, The Souled Store, and an impressive portfolio comprising an additional 16 pioneering enterprises. Sahil's strategic investment choices reflect his profound understanding of evolving market trends and the dynamics of emerging industries. His financial backing goes beyond mere capital infusion – it represents a pivotal catalyst for the growth and expansion of startups that align with his vision for progress. Sahil's role as an Angel Investor not only underscores his commitment to fostering entrepreneurship but also highlights his invaluable role as a mentor and guide for the startups he supports. In his capacity as an Angel Investor, Sahil Barua's influence extends beyond just financial backing; his insights, network, and strategic guidance contribute significantly to the development of these startups. His engagement in sectors like Apps, Food and Beverage, and Edu-Tech highlights his dedication to driving positive transformation in areas that have a profound impact on modern lifestyles and the future of education. Through his involvement in startups like Crest, Vidyut, The Souled Store, and others, Sahil Barua cements his legacy as an instrumental force in the startup ecosystem, making a lasting impact on the entrepreneurial landscape by nurturing innovation, enabling growth, and helping shape the industries of tomorrow.",
    "investments": 19,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sahil-barua-42374b7/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Delhivery",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac272_The%20Souled%20Store.svg"
      },
      {
        "name": "Delhivery",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac306_Hoopr.svg"
      },
      {
        "name": "Delhivery",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2b0_Shyft.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "saif-elevation",
    "name": "SAIF/Elevation",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Early",
      "Growth"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "HealthTech",
      "Consumer",
      "Edtech",
      "Mobility"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac026_EkvXCcuUcAEGwmP.jpg_large.webp",
    "about": "Elevation Capital is a notable venture capital firm established in Gurugram in 2010. With a focus on investment areas such as artificial intelligence (AI) and machine learning (ML), adtech, agritech, and farming, they actively support and fund startups in these sectors. Elevation Capital has a diverse portfolio, having invested in prominent startups like Able Jobs, Acko, Airblack, and many others. Their commitment to fostering innovation and growth is reflected in their extensive investments across a wide range of industries. With their expertise and strategic support, Elevation Capital plays a vital role in nurturing and empowering promising startups in India. They typically write cheques of $2 million to $5 million during the early stages.",
    "investments": 101,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/manish-advani/",
      "twitter": "https://twitter.com/manishadvani12",
      "website": "https://elevationcapital.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "SAIF/Elevation",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac105_bookmyshow.svg"
      },
      {
        "name": "SAIF/Elevation",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac106_acko.svg"
      },
      {
        "name": "SAIF/Elevation",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac107_chaayos.svg"
      }
    ],
    "pocName": "Manish Advani",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "nexus-venture-partners",
    "name": "Sameer Brij Verma",
    "type": "Angel Investor",
    "title": "MD at Nexus Venture Partners",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "HealthTech",
      "Edtech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac20e_156.%20Sameer%20Brij%20Verma.webp",
    "about": "Sameer, the Managing Director at Nexus Venture Partners, heads the Bangalore office and possesses extensive expertise as an early-stage venture investor with over two decades of experience. Throughout his career, he has invested in more than 80 startups, demonstrating a profound comprehension of the venture capital process. His proficiency encompasses product management, business development, sales acceleration, recruiting, follow-on fundraising, and scaling. A firm believer in prioritizing product excellence, Sameer passionately supports entrepreneurs in realizing their aspirations and accomplishing their entrepreneurial goals.",
    "investments": 4,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sameerbrijverma/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Nexus Venture Partners",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2bb_Dhama%20Innovations.svg"
      },
      {
        "name": "Nexus Venture Partners",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2bc_Jumbotail.svg"
      },
      {
        "name": "Nexus Venture Partners",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2bd_Rocketlane.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sameer-mehta",
    "name": "Sameer Mehta",
    "type": "Angel Investor",
    "title": "Co-founder at boAt",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Mobility",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0bb_104.%20Sameer%20Mehta.jpeg",
    "about": "Sameer Ashok Mehta is a seasoned entrepreneur and co-founder of Imagine Marketing Private Limited, popularly known as the consumer electronics brand BoAt. With a strong background in entrepreneurial ventures, Sameer is also the owner of Redwood Interactive, a company that specializes in distributing computer gaming hardware and peripherals under the Redgear brand. Additionally, he holds a directorship at Kores India, a well-established business owned by his family. Kores India Limited is the Indian arm of the renowned global conglomerate Kores, which has been operating in India since 1936. Sameer's experience and expertise in the industry contribute to his valuable contributions to the success of these ventures.",
    "investments": 13,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sameer-mehta-16233318/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "boAt",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1cb_Shiprocket.svg"
      },
      {
        "name": "boAt",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0cf_Wyld.svg"
      },
      {
        "name": "boAt",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1cc_Floryo.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "shopclues",
    "name": "Sandeep Aggarwal",
    "type": "Angel Investor",
    "title": "Founder & CEO at ShopClues",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "Edtech",
      "Mobility"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1f9_190.%20Sandeep%20Aggarwal.webp",
    "about": "Sandeep Aggarwal is a seasoned entrepreneur with a trailblazing track record, distinguished by his roles as an angel investor, visionary in the internet realm, and a dedicated philanthropist. He is renowned as the pioneer of marketplaces in India, earning him the title of the \"father of marketplaces.\" His entrepreneurial journey boasts the founding of two remarkable marketplaces within India: ShopClues, the nation's inaugural managed marketplace in 2011, which ascended to become the 5th Unicorn in India's Consumer Internet sector; and Droom, established in 2014 as India's pioneering automobile marketplace. Eagerly contributing to the advancement of Digital India, fostering startups, nurturing entrepreneurship, and championing fundraising endeavors, Sandeep Aggarwal's influence extends beyond business into the realm of societal betterment. He further expands his contributions as the author of the bestselling biography \"Fall Again Rise Again.\"",
    "investments": 10,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sandeepaggarwal/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "ShopClues",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac307_Clan%20Connect.svg"
      },
      {
        "name": "ShopClues",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2cd_Tyke.svg"
      },
      {
        "name": "ShopClues",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac308_Wydr.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sandeep-nailwal",
    "name": "Sandeep Nailwal",
    "type": "Angel Investor",
    "title": "Co-Founder at Polygon Technology",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Consumer",
      "Media",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0be_108.%20Sandeep%20Nailwal.webp",
    "about": "Sandeep Nailwal is a notable figure in the technology industry as the Co-Founder of Polygon. Prior to his involvement with Polygon, he served as the Co-Founder and CEO of Scopeweaver, showcasing his entrepreneurial skills. Sandeep Nailwal's educational background includes attending the esteemed National Institute of Industrial Engineering, which further enriched his knowledge and expertise in the field.",
    "investments": 37,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sandeep-nailwal-60709a33/",
      "twitter": "https://twitter.com/sandeepnailwal",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Polygon Technology",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1cd_coinshift.svg"
      },
      {
        "name": "Polygon Technology",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1ce_daolens.svg"
      },
      {
        "name": "Polygon Technology",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1cf_lysto.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "goodbox",
    "name": "Sandeep Singhal",
    "type": "Angel Investor",
    "title": "Director at Goodbox",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "SaaS",
      "Mobility",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac22d_127.%20Sandeep%20Singhal.webp",
    "about": "Director at Goodbox & Manging Director at Nexus Venture Partners.",
    "investments": 8,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sandeep-singhal-604499/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Goodbox",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac273_Fasa.svg"
      },
      {
        "name": "Goodbox",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac275_Ultrahuman.svg"
      },
      {
        "name": "Goodbox",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac276_Neend.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sandeep-tandon",
    "name": "Sandeep Tandon",
    "type": "Angel Investor",
    "title": "Co-founder at Freecharge",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "HealthTech",
      "Edtech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac018_we-do-not-buy-the-same-stocks-manufacturing-is-a-theme-that-can-generate-alpha-sandeep-tandon.webp",
    "about": "Sandeep Tandon is a prominent figure in the Indian business and investment community. He serves as a member of the Board of Directors at CRED, a partner at Whiteboard Capital, and a member of the Board of Advisors at Iron Pillar. Sandeep Tandon is also the Chief Business Officer at Accelyst Solutions Pvt. Ltd. and the Managing Director of Tandon Technology Ventures. Additionally, he holds key positions at Infinx Services Private Limited and Infinx Healthcare as Chairman and Managing Director.",
    "investments": 24,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/satandon/",
      "twitter": "https://twitter.com/sandeepmtandon",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Freecharge",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0e6_unacademy.svg"
      },
      {
        "name": "Freecharge",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0e7_pocket%20aces.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sanjay-mehta",
    "name": "Sanjay Mehta",
    "type": "Angel Investor",
    "title": "Founder at MAIA Intelligence",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "SaaS",
      "Consumer",
      "HealthTech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac01b_20191021171359-SanjayMehtafinal.webp",
    "about": "Sanjay Mehta, an angel investor based in Mumbai, has established a notable presence in the investment landscape. His prominent investment areas include consumer products, fintech, media, and entertainment. Sanjay has made strategic investments in startups such as Bugbase, Karnival, Coindcx, and many others, contributing to the growth and success of innovative ventures in various industries. With his expertise and financial support, he plays a pivotal role in nurturing and guiding these startups towards their goals.",
    "investments": 17,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/mehta-sanjay/",
      "twitter": "https://twitter.com/mehtasanjay",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "MAIA Intelligence",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0eb_loginext.svg"
      },
      {
        "name": "MAIA Intelligence",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0ec_box8.svg"
      },
      {
        "name": "MAIA Intelligence",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0c7_lawrato.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "fitso",
    "name": "Saurabh Aggarwal",
    "type": "Angel Investor",
    "title": "Co-founder at Fitso",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac202_167.%20Saurabh%20Aggarwal.webp",
    "about": "Saurabh Aggarwal, a dynamic Angel Investor located in Gurugram, is actively engaged in funding promising startups primarily in the Hardware and Technology, Commerce and Shopping, and Consumer Products sectors. With a discerning eye for innovative ventures, he maintains a diverse portfolio that includes investments in Soptle, Intellemo, Paavan, and several other emerging companies. As an Angel Investor, Saurabh plays a vital role in the startup ecosystem by providing crucial financial support, mentorship, and guidance to early-stage companies. His focus on Hardware and Technology, Commerce and Shopping, and Consumer Products sectors highlights his belief in the transformative potential of these industries. Saurabh's passion for identifying and nurturing promising ventures underscores his commitment to fostering innovation and driving positive change. By actively supporting startups in their growth journey, he contributes to the development of cutting-edge technologies, disruptive business models, and creative solutions that cater to the needs of the modern world. His investments range between $90k to $350k",
    "investments": 10,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/saurabh-aggarwal-86426723/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Fitso",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2d5_Soptle.svg"
      },
      {
        "name": "Fitso",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2d6_Reevoy.svg"
      },
      {
        "name": "Fitso",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac201_kohebee.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "nobroker-com",
    "name": "Saurabh Garg",
    "type": "Angel Investor",
    "title": "Founder and CBO at NoBroker.com",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "Edtech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1f4_194.%20Saurabh%20Garg.webp",
    "about": "Saurabh Garg stands as an influential Angel Investor hailing from the vibrant city of Bengaluru, distinguished by his strategic investments that fuel innovation and growth. With a discerning eye for potential, Saurabh's investment interests encompass a wide spectrum of sectors, including Professional Services, Health-Tech, and Business Support Services. His contributions to the startup ecosystem have played a pivotal role in propelling groundbreaking ventures forward. Notable among his investments are pioneering startups such as Getwork, Dawaa Dost, Getsupp, and an additional seven innovative enterprises. Saurabh Garg's investment choices are a testament not only to his insightful understanding of emerging market dynamics but also his commitment to nurturing the evolution of startups. Beyond providing financial backing, he leverages his experience, expertise, and expansive network to actively contribute to the growth and success of the startups he supports. Within the dynamic entrepreneurial landscape of Bengaluru, Saurabh Garg's role as an Angel Investor reflects his dedication to fostering innovation and driving positive change. His involvement across sectors like Professional Services, Health-Tech, and Business Support Services underscores his commitment to advancing industries critical to modern business landscapes. Through his investments in startups like Getwork, Dawaa Dost, Getsupp, and others, Saurabh Garg solidifies his reputation as a pivotal figure in the startup ecosystem. His contributions extend beyond capital infusion, as he actively guides startups with the resources and mentorship they require to navigate the intricate journey of growth, enabling them to thrive as influential players within their respective domains.",
    "investments": 10,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/saurabh-garg-8876171/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "NoBroker.com",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac30c_Betterhalf.ai.svg"
      },
      {
        "name": "NoBroker.com",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac30d_Masai.svg"
      },
      {
        "name": "NoBroker.com",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac30e_Skillbee.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "paysense-india",
    "name": "Sayli Karanjkar",
    "type": "Angel Investor",
    "title": "Cofounder & CBO at PaySense, India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534db45542cbbe9376b57f_239.%20Sayli%20Karanjkar.webp",
    "about": "Sayali is extremely passionate about building in India for the world and mentors several founders on their entrepreneurial journey. She is now an active angel investor and advisor to several startups in the fintech, SaaS and AI space in India, SEA and the US. She is on the Board of CMS Info Systems Sayali is the CoFounder of Paysense, a leading consumer lending company where she led the Business, Growth and Operations functions. Paysense got acquired by PayU, a leading payments and Fintech company in an all cash deal for an equity value of $185 million. She was the Chief Business Officer of PayU Credit India post this merger. After a successful integration of the teams and the business, Sayali has exited the company. Prior to Paysense Sayali spent 15+ years in US and Singapore building and executing strategies for leading consumer and retail companies in the US with Sun Microsystems in Singapore, AT&T in California and with AT Kearney in Chicago.",
    "investments": 10,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sayalikaranjkar/",
      "twitter": "https://twitter.com/sayalikaranjkar",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "seeders",
    "name": "Seeders",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac247_Seeders%20VC.webp",
    "about": "Seeders is a syndicate led by successful first-generation entrepreneurs from diverse business backgrounds. The syndicate is a high-impact network created by founders for founders. Seeders aims to bring together great startups and investors to co-invest through syndicates. Seeders' founders have a deep understanding of the startup ecosystem and a passion for helping other entrepreneurs succeed. The syndicate's network of investors includes a wide range of individuals and institutions, from angel investors to venture capital firms. Seeders' investment process is designed to be efficient and effective. The syndicate's team of experts evaluates potential investments and identifies the best opportunities for co-investment. Seeders also provides its portfolio companies with access to a wide range of resources and support, including capital, mentorship, and advice. Seeders is committed to helping startups succeed. The syndicate believes that by bringing together great startups and investors, it can help to create a more vibrant and dynamic startup ecosystem.",
    "investments": 10,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/seeders-llp/",
      "twitter": "",
      "website": "https://www.seeders.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Seeders",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2e2_metadome.svg"
      },
      {
        "name": "Seeders",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2e3_Sanfe.svg"
      },
      {
        "name": "Seeders",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2e4_seeders.svg"
      }
    ],
    "pocName": "Pallav Nadhani",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sequoia-surge-india",
    "name": "Sequoia/Surge (India)",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Early",
      "Growth"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac04a_zcxzcz.webp",
    "about": "Sequoia Capital is a renowned venture capital firm with a broad investment focus across various sectors. With expertise in incubation, seed stage, start-up stage, early stage, and growth stage investments, Sequoia Capital has a proven track record of backing both public and private companies. The firm's investment portfolio spans diverse industries, including energy, financial, enterprise, healthcare, internet, and mobile startups. With a keen eye for identifying promising opportunities, Sequoia Capital plays a vital role in nurturing and supporting the growth of innovative businesses at different stages of development. The typical check size ranges from $500k to $1 million.",
    "investments": 618,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/kaustubhmundra3/",
      "twitter": "https://twitter.com/kaustubhmundra3",
      "website": "https://www.sequoiacap.com/india/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Sequoia/Surge (India)",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac102_practo.svg"
      },
      {
        "name": "Sequoia/Surge (India)",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac103_zomato.svg"
      },
      {
        "name": "Sequoia/Surge (India)",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0c9_Justdial.webp"
      }
    ],
    "pocName": "Kaustubh Mundra",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sharad-sharma",
    "name": "Sharad Sharma",
    "type": "Angel Investor",
    "title": "Co-founder at iSpirit Foundation",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac085_69.%20Sharad%20Sharma.webp",
    "about": "Sharad is a highly experienced leader with an impressive career spanning over three decades in the Internet, Enterprise Software, and Digital Infrastructure sectors. He is a prominent figure in India's technology ecosystem and has played a vital role in the growth of notable companies such as Yahoo, VERITAS Software, Symantec, Lucent Technologies, and AT&T. Sharad is also a co-founder of iSPIRT Foundation, a non-profit technology think tank focused on advancing India's software product industry. As an angel investor, he has made significant investments in technology startups and has been involved in establishing India's first IP-focused fund, India Innovation Fund. Sharad's expertise and contributions have been recognized through prestigious awards, including the R&D Visionary Award by Zinnov.",
    "investments": 11,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sharadsharma/?originalSubdomain=in",
      "twitter": "https://twitter.com/sharads",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "iSpirit Foundation",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac186_Minjar.svg"
      },
      {
        "name": "iSpirit Foundation",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac187_Enrich%20Video.svg"
      },
      {
        "name": "iSpirit Foundation",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac14b_Ezetap.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "bharatpe",
    "name": "Shashvat Nakrani",
    "type": "Angel Investor",
    "title": "Founder at BharatPe",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac225_135.%20Shashvat%20Nakrani.webp",
    "about": "Shashvat Nakrani, a renowned Indian Angel Investor and Entrepreneur, co-founded the fintech startup BharatPe. He is an alumnus of the prestigious Indian Institute of Technology Delhi (IITD). Shashvat's achievements have earned him a place in the IIFL Wealth Hurun India Rich List as the youngest member and among the 13 self-made billionaires born in the 90s.",
    "investments": 15,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/shashvat-nakrani/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "BharatPe",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac26d_Crib.svg"
      },
      {
        "name": "BharatPe",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac286_Deserv.svg"
      },
      {
        "name": "BharatPe",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac287_Liquide.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "shrishti-sahu",
    "name": "Shrishti Sahu",
    "type": "Managing partner & Angel investor at Swadharma Source Ventures - SSV",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac089_64.%20Shrishti%20Sahu.webp",
    "about": "Shrishti Sahu, an angel investor hailing from Gurugram, focuses on strategic investments in transportation and logistics, hardware and technology, and apps. Her investment portfolio includes startups like Leap.Club, Wyld, Eximpe, and many more. Shrishti plays a vital role in supporting and nurturing these ventures, contributing to their success and development.",
    "investments": 13,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/shrishtii/",
      "twitter": "https://twitter.com/shrishtie?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Swadharma Source Ventures - SSV",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac13a_Rupifi.svg"
      },
      {
        "name": "Swadharma Source Ventures - SSV",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac179_Growth%20School.svg"
      },
      {
        "name": "Swadharma Source Ventures - SSV",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac17a_Chingari.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "together-a531e",
    "name": "Shubham Gupta",
    "type": "Angel Investor",
    "title": "Founder at Together",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Edtech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546d6590d1e6fffd4969fa_206.%20Shubham%20Gupta.webp",
    "about": "Engaged in SAAS/Deeptech Investments with Matrix, Shubham Gupta has successfully closed two exciting seed deals, although the specifics remain undisclosed. Shubham Gupta's prior ventures are welldocumented in his profile below. With a notable track record, Shubham Gupta has acted as an Angel Investor in prominent ventures such as ZoomCar, Ixigo, Mobile Premier League (MPL), StashFin, Locus, Testbook, Trell, Posist, Kristal, Purple Style Labs, GoComet, Adpushup, Bobble, GramFactory, Mall91, Pesto, Superhuman, Brave Browser, and Madison Reed. His affinity for startups stems from a desire to help founders and continuously learn from their journeys, a passion that has brought him back to India.",
    "investments": 5,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/shubg87/",
      "twitter": "https://twitter.com/shubg",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Together",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546d5597a107c9692a4395_Rapidbox.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sixth-sense-ventures-ba369",
    "name": "Sixth sense ventures",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac24c_Sixthsense%20VC%20logo.webp",
    "about": "Sixth Sense Ventures is India's first domestic, consumer-centric venture fund. The firm was founded by Nikhil Vora, who is regarded as one of the strongest analytical minds in the country. Sixth Sense Ventures invests in early-stage consumer-focused startups that have the potential to disrupt traditional industries and create new markets. The firm believes that the next big wave of dysfunctional growth will be led by entrepreneurs driven by completely different skill sets and capabilities, and not necessarily capital. These entrepreneurs will be able to leverage technology to create new products and services that meet the needs of a changing consumer landscape. Sixth Sense Ventures has a strong track record of identifying and backing successful startups. The firm has invested in a number of startups that have gone on to achieve significant success, including Pepperfry, Urban Ladder, and FirstCry. Sixth Sense Ventures is committed to helping startups succeed, and is a valuable resource for entrepreneurs who are looking to disrupt traditional industries and create new markets.",
    "investments": 43,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/sixth-sense-ventures-llp/",
      "twitter": "",
      "website": "https://sixthsenseventures.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Sixth sense ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2dc_sixth%20sense.svg"
      },
      {
        "name": "Sixth sense ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2dd_cult.fit.svg"
      },
      {
        "name": "Sixth sense ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2de_bira.svg"
      }
    ],
    "pocName": "Ketki Paranjpe",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "social-alpha",
    "name": "Social Alpha",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed",
      "Early"
    ],
    "industries": [
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac039_Social-Alpha-Logo.webp",
    "about": "Social Alpha is a Bengaluru-based venture capital firm that specializes in investing in innovative startups focused on AI and ML, Agritech and Farming, and Clean-Tech sectors. With a strong portfolio of investments, including companies like Agrograde, Ai Health Highway, and Canvaloop Fibre, Social Alpha is committed to supporting transformative ideas and technologies. They play a vital role in nurturing and scaling early-stage startups in these domains, contributing to sustainable and impactful solutions. Social Alpha's investments reflect their dedication to fostering innovation and driving positive change in sectors critical to social and environmental development.",
    "investments": 54,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ajinkyawaradpande/",
      "twitter": "https://twitter.com/ajinkya_w?lang=en",
      "website": "https://www.socialalpha.org/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Social Alpha",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac153_ecowrap.svg"
      },
      {
        "name": "Social Alpha",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac154_canvaloop.svg"
      },
      {
        "name": "Social Alpha",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac155_flexmo.svg"
      }
    ],
    "pocName": "Ajinkya Waradpande",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "angelbay",
    "name": "Sorabh Agarwal",
    "type": "Angel Investor",
    "title": "Co-founder at AngelBay",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac21c_144.%20Sorabh%20Agarwal.webp",
    "about": "Sorabh Agarwal, one of the Co-Founders of AngelBay, brings a wealth of expertise in M&A and financial research to the table. As a key figure leading a private angel network, Sorabh's strategic advisory services offer invaluable guidance to startups and mid-sized firms, elevating their growth and success trajectory.",
    "investments": 7,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sorabh-agarwal-52277a1",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "AngelBay",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2a1_Gostops.svg"
      },
      {
        "name": "AngelBay",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2a2_Navia%20Life%20Care.svg"
      },
      {
        "name": "AngelBay",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac29b_parent%20lane%20(1).svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "swiggy",
    "name": "Sriharsha Majety",
    "type": "Angel Investor",
    "title": "CoFounder & Chief Executive Officer at Swiggy",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/6553208e2f8d133540d90f6f_249.%20Sriharsha%20Majety.webp",
    "about": "Sriharsha Majety holds the position of CoFounder and CEO at Swiggy. Before his involvement with Swiggy, he cofounded Bundl and worked as an Associate at Nomura International. Mr. Majety completed his academic journey with a B.E. in Electrical and Electronics and an M.Sc. in Physics from Birla Institute of Technology and Science, Pilani.",
    "investments": 9,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sriharsham563aa217/?ref=ynos.in",
      "twitter": "https://twitter.com/harshamjty?ref=ynos.in",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "zetwerk",
    "name": "Srinath Ramakkrushnan",
    "type": "Angel Investor",
    "title": "CoFounder at Zetwerk",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Mobility",
      "Consumer",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/655468d939732368f59539d9_224.%20Srinath%20Ramakkrushnan.webp",
    "about": "Srinath Ramakkrushnan, an Angel Investor based in Bengaluru, stands as a notable figure in the investment arena. His strategic focus encompasses Hardware and Technology, Food and Beverage, and Information Technology sectors. His investments have made a significant impact on startups such as Ximkart, Procol, 1K Kirana Bazaar, and four other notable ventures.",
    "investments": 7,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/srinathramakkrushnana658629/",
      "twitter": "https://twitter.com/srinathramki",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "spark-tv-india",
    "name": "Srinivas Anumolu",
    "type": "Angel Investor",
    "title": "Promoter at Spark TV, India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534b21e71a1201ccd3d159_243.%20Srinivas%20Anumolu.webp",
    "about": "Srinivas Anumolu is a distinguished Indian Entrepreneur and Angel Investor known for his involvement in a diverse range of ventures. His impressive portfolio comprises several notable companies that have made a significant impact in various sectors. Among the companies he's associated with are Upwork, TutorVista, BigBasket, BlueStone, Portea, FreshMenu, HomeLane, HungerBox, Verloop, OTO, Arzooo, Newton, SuperK, Homingos, Stage, MediBuddy, BatterySmart, Euler, and DealShare. Upwork is an internationally recognized online platform that connects freelancers with clients seeking various services, contributing to the growth of the gig economy. TutorVista is an educational platform that offers online tutoring services, facilitating accessible and personalized learning experiences. BigBasket is a prominent online grocery delivery platform that has revolutionized the way people shop for groceries. BlueStone is a renowned online jewelry store that offers a wide range of exquisite jewelry pieces. Portea is a leading healthcare service provider, focusing on home healthcare solutions.",
    "investments": 16,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/srinirai/?ref=ynos.in",
      "twitter": "https://twitter.com/srinirai?ref=ynos.in",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sucseed-ventures",
    "name": "SucSEED ventures",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early",
      "Growth"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac250_SucSEED%20VC%20logo.webp",
    "about": "SucSEED Venture Partners is a venture capital firm that was founded in 2016 by a group of CXOs, technology angels, business leaders, and serial entrepreneurs. The firm's investment strategy is primarily targeted at growth stage, post-revenue startups that are involved in innovation for mass or use cases with real problem statements using emerging technology. SucSEED looks for startups that are led by strong teams with a clear vision for the future. The firm also seeks out startups that are operating in markets with large addressable audiences. In addition to providing capital, SucSEED also offers startups access to mentors, market connections, and leadership practices. The firm has a strong track record of identifying and backing high-potential startups. Some of the startups that SucSEED has invested in include Uniplatform Tech, MultiplyMyLeads, and Letsbuy. SucSEED is committed to helping startups succeed and is a valuable resource for entrepreneurs who are looking for capital and support.",
    "investments": 21,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/sucseed-ventures/",
      "twitter": "",
      "website": "https://www.sucseed.biz/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "SucSEED ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2d7_Sucseed.svg"
      },
      {
        "name": "SucSEED ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2d8_SpeedLabs.svg"
      },
      {
        "name": "SucSEED ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2d9_Stockal.svg"
      }
    ],
    "pocName": "Gitali Turlapati",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "suhail-sameer",
    "name": "Suhail Sameer",
    "type": "Angel Investor",
    "title": "CEO at BharatPe",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Consumer",
      "Digital Entertainment",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac090_58.%20Suhail%20Sameer.webp",
    "about": "Suhail Sameer holds key positions in various organizations. Currently, he serves as the Group President at BharatPe, a leading financial technology company. In addition, Suhail is the Managing Partner at OTP Venture Partners and also holds the role of President at RP-Sanjiv Goenka Group, where he contributes his expertise in driving growth and strategic initiatives.",
    "investments": 27,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/suhail-sameer-8226865/?originalSubdomain=in",
      "twitter": "https://twitter.com/suhailsameer14?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "BharatPe",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac16a_Locofast.svg"
      },
      {
        "name": "BharatPe",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac16b_Apnaklub.svg"
      },
      {
        "name": "BharatPe",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac16c_Liquide.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "udaan",
    "name": "Sujeet Kumar",
    "type": "Angel Investor",
    "title": "Founder at Udaan",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1ee_200.%20Sujeet%20Kumar.webp",
    "about": "Sujeet Kumar, one of the co-founders of udaan, played a pivotal role in the establishment of the company in 2016. He embarked on this entrepreneurial journey alongside Vaibhav Gupta and Amod Malviya, both of whom held high-ranking positions at Flipkart in the past. Before venturing into udaan, Sujeet Kumar held the position of President of Operations at Flipkart, where he spearheaded the development of operational strategies, supply chain management, and logistics systems, contributing to over fifty percent of Flipkart's total sales. His efforts were crucial in laying down the foundational framework for India's ecommerce distribution network, cementing his influence in shaping the industry's landscape.",
    "investments": 44,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sujeet-kumar-90039b16/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Udaan",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac318_Crejo.svg"
      },
      {
        "name": "Udaan",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac319_Ultrahuman%20(1).svg"
      },
      {
        "name": "Udaan",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac255_Turnip.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sumit-jain",
    "name": "Sumit Jain",
    "type": "Angel Investor",
    "title": "Co-Founder & CEO at Graphy",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac079_81.%20Sumit%20Jain.webp",
    "about": "Sumit Jain is a notable Angel Investor based in Bengaluru. He focuses on investing in startups operating in the areas of sports, transportation and logistics, and manufacturing. Some of the startups that Sumit Jain has invested in include Fixcraft, Admitkard, Salarybox, and several others.",
    "investments": 12,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sumjain/?ref=ynos.in",
      "twitter": "https://twitter.com/sumjain?ref=ynos.in",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Graphy",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0e6_unacademy.svg"
      },
      {
        "name": "Graphy",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac19e_SalaryBox.svg"
      },
      {
        "name": "Graphy",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac15f_Airmeet.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "stealth-startup",
    "name": "Surojit Chatterjee",
    "type": "Angel Investor",
    "title": "CEO & Founder at Stealth startup",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac232_122.%20Surojit%20Chatterjee.webp",
    "about": "Chatterjee spent more than 11 years at Google over two stints, the first as a founding member of Googles mobile search Ads product thats grown to tens of billions in revenue per year. When he starts at Coinbase next week, Armstrong tells me hell help Coinbase organize its complex array of products, including its cryptocurrency exchange, wallet, stablecoin. He's MBA from MIT Sloan School of Management and B. Tech (Honors) from Indian Institute of Technology, Kharagpur.",
    "investments": 4,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/surojitchatterjee/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Stealth startup",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac264_NFTicaly.svg"
      },
      {
        "name": "Stealth startup",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac265_Videoken.svg"
      },
      {
        "name": "Stealth startup",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac266_Juno.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sweta-rau",
    "name": "Sweta Rau",
    "type": "Founder and GP at White Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac08e_60.%20Sweta%20Rau.webp",
    "about": "Sweata Rau is a highly regarded angel investor with a strong background in technology and business management. With experience working with leading software services companies and as a freelance consultant, Sweata has gained valuable industry knowledge. She has expertise in cutting-edge technologies like Big Data, Business Intelligence, E-Commerce, and web, along with exposure to the finance and telecom sectors.",
    "investments": 16,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/sweta-rau-0b642210/?ref=ynos.in",
      "twitter": "https://twitter.com/swetarau?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "White Venture Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac170_payglocal.svg"
      },
      {
        "name": "White Venture Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac171_tyke.svg"
      },
      {
        "name": "White Venture Capital",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac172_pankhuri.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "t-v-mohandas-pai",
    "name": "T.V. Mohandas Pai",
    "type": "Angel Investor",
    "title": "Chairman at Manipal Global Education, (Former Director, Infosys)",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac014_img_79059_mohandas_pai_sm.webp",
    "about": "Mohandas Pai, a Padma Shri Awardee and former CFO of Infosys, is a prominent figure in the corporate world. He co-founded Akshaya Patra, the world's largest midday meal program, and actively contributes to policy recommendations and guidelines in collaboration with government and regulators. As an esteemed angel investor, Mohan has initiated over 10 funds in venture, growth, and public markets. He also leads Aarin Capital, a private equity fund focused on life sciences and education investments, alongside Manipal Group Chairman Ranjan Pai. Notable companies in their portfolio include Byju's, Counsyl, ZoomCar, Praxify, YourStory, and Licious.",
    "investments": 31,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/mohandaspai/",
      "twitter": "https://twitter.com/TVMohandasPai?s=20&t=Utg2tELgDDm0XQHTl7S9OA",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "techstars",
    "name": "Techstars",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Pre-Seed",
      "Early"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac054_techstars.png",
    "about": "Techstars is a global ecosystem that provides support and investment to entrepreneurs who are developing innovative technologies. They offer mentorship-driven accelerator programs and a wide range of startup programs across the globe. Techstars is committed to assisting promising entrepreneurs at every stage of their journey, from the initial inspiration to the eventual goal of an IPO (Initial Public Offering). By offering resources, guidance, and connections, Techstars aims to empower entrepreneurs and help them bring their new technologies to market, regardless of their geographical location.",
    "investments": 36,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/vinoj-raj-950b6313a/",
      "twitter": "",
      "website": "https://www.techstars.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Techstars",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1c2_pixxel.svg"
      },
      {
        "name": "Techstars",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1c3_techstars.svg"
      },
      {
        "name": "Techstars",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1c4_docsumo.svg"
      }
    ],
    "pocName": "Vinoj Raj",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "the-chennai-angels",
    "name": "The Chennai Angels",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Early"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Media",
      "Agritech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac23e_thechennaiangels.svg",
    "about": "One of India's foremost Angel Networks. Fostering Entrepreneurship. Mentoring Entrepreneurs. Nurturing Ambitions. The Chennai Angels (TCA), formerly known as Chennai Entrepreneurship Trust Fund, was established in November 2007 with the objective of fostering Entrepreneurship with prime focus on nurturing and mentoring new generation entrepreneurs. Aspiring entrepreneurs with innovative business ideas often fumble to translate thoughts into commercially viable ventures. These teething troubles could be attributed to inadequate awareness in taking the ideas forward or paucity of funds.",
    "investments": 75,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/the-chennai-angels/",
      "twitter": "",
      "website": "https://www.thechennaiangels.com/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "The Chennai Angels",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2b4_Truly%20Madly.svg"
      },
      {
        "name": "The Chennai Angels",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2ea_purple.svg"
      },
      {
        "name": "The Chennai Angels",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2f0_Drop%20shop.svg"
      }
    ],
    "pocName": "Darshan Kumar",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "together",
    "name": "Together",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac02d_together%20vc.svg",
    "about": "Together Fund is an early-stage venture capital firm that prioritizes investing in technology companies led by founders. They support and empower entrepreneurs who are driving innovation and disruption in the tech industry. Some notable startups that Together Fund has invested in include Workhack, Kula, Toplyne, and Spry. With their expertise and capital, Together Fund aims to fuel the growth and success of these startups, enabling them to realize their potential and make a meaningful impact in their respective markets.",
    "investments": 13,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/idushyantmishra/",
      "twitter": "https://twitter.com/mddushyant?lang=en",
      "website": "https://together.fund/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Together",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac11f_kula.svg"
      },
      {
        "name": "Together",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac120_insightly.svg"
      },
      {
        "name": "Together",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac121_spendflo.svg"
      }
    ],
    "pocName": "Dushyant Mishra",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "tomorrow-capital",
    "name": "Tomorrow Capital",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "HealthTech",
      "Edtech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac12e_Leverage%20edu.svg",
    "about": "Tomorrow Capital is a Mumbai-based Venture Capital Firm established in 2017. With a focus on fostering innovation and growth, Tomorrow Capital actively invests in startups operating in diverse sectors such as Apps, Commerce and Shopping, Community and Lifestyle. The firm has made notable investments in companies like Bonito Designs, Beyondskool, Easiloan Techno Solutions, and several other promising startups. Tomorrow Capital's strategic investments and support contribute to the development and expansion of these entrepreneurial ventures, driving their success and impact in the market.",
    "investments": 5,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/cs-ca-ashish-purohit-00823335/",
      "twitter": "https://twitter.com/ashish0689?lang=en",
      "website": "http://www.tomorrowcapital.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "Ashish Purohit",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "umang-kumar",
    "name": "Umang Kumar",
    "type": "Angel Investor",
    "title": "Co-founder at Cardekho.com",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Edtech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac18c_GoKwik.svg",
    "about": "As the CEO of Gaadi Web Pvt. Ltd., I bring a decade of experience in the internet startup ecosystem, working with leading media houses, and even having a background as a coder. With a passion for the online space, I have provided consultancy services to some of the largest internet ventures in India. My journey started with a focus on media and sales strategy, but I discovered my true calling as a sales professional. Over the past five years, I have utilized my unique blend of skills to successfully build and grow multiple online businesses. With a strong foundation in technology and a strategic sales approach, I continue to drive the success of Gaadi Web Pvt. Ltd. and contribute to the dynamic world of internet entrepreneurship.",
    "investments": 11,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/umang-kumar-a4768b2/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Cardekho.com",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac179_Growth%20School.svg"
      },
      {
        "name": "Cardekho.com",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac177_vama.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "unacademy",
    "name": "Unacademy",
    "type": "Angel Investor",
    "title": "Co-Founder at Unacademy",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac256_plum.svg",
    "about": "Roman Saini is a Co-Founder of Unacademy, an online learning platform that offers high-quality education to individuals. Alongside his role at Unacademy, Roman is also an IAS officer in the Indian Administrative Service, serving the Government of India. Prior to his entrepreneurial journey, he worked as a Junior Resident at AIIMS. With a dedicated team, Roman is committed to providing accessible and top-notch education to people, making a significant impact in the field of online learning.",
    "investments": 19,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/romansaini/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Unacademy",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac255_Turnip.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "unitus",
    "name": "Unitus",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Pre-Seed",
      "Early"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "HealthTech",
      "Edtech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac036_Unitus%20capital.webp",
    "about": "Unitus Ventures, the leading venture fund in India, has an impressive portfolio of early-stage tech startups that demonstrate the potential for scale in India and global emerging markets. Some notable companies in their portfolio include Masai, Salesken, Supermoney, Milaap, and Wify. These startups span across various sectors, showcasing the diverse range of industries Unitus Ventures invests in. By supporting these innovative companies, Unitus Ventures aims to drive economic growth, create employment opportunities, and foster technological advancements in India and beyond. With their expertise and resources, Unitus Ventures plays a pivotal role in empowering these startups to reach their full potential and make a meaningful impact in their respective markets. Their initial investments are usually between $300k to $1M.",
    "investments": 41,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/rhea-sthalekar-981a0b48/",
      "twitter": "",
      "website": "http://unitus.vc/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "Rhea Sthalekar",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb05_Group%20675959116.svg"
  },
  {
    "id": "better",
    "name": "Vaibhav Domkundwar",
    "type": "Angel Investor",
    "title": "Founder & CEO at Better",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac28d_Hyperface.svg",
    "about": "Vaibhav Domkundwar, a seasoned entrepreneur with an impressive track record, proudly founded two highly successful companies - Roamware and Better. Known for his prowess in growth hacking, Vaibhav has masterfully curated a diverse portfolio comprising over 35 seed investments, which has yielded both successful exits and significant Series A/B milestones, showcasing his adeptness in selecting promising startups.",
    "investments": 36,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/better/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Better",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac255_Turnip.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "seed-finance-india",
    "name": "Vaibhav Karnavat",
    "type": "Angel Investor",
    "title": "Partner at Seed Finance, India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/655461d8420b715a6fda4749_235.%20Vaibhav%20Karnavat.webp",
    "about": "Vaibhav Karnavat holds an impressive array of roles and titles that reflect his multifaceted engagement across various sectors. He serves as a Partner at seedfinance, Itreat Grocers LLP, and Karnavat & Co. His extensive involvements also extend to his role as the CEO of Jewelex International Pvt. Ltd. Beyond his professional responsibilities, he's known as an angel investor and an ardent lifelong learner, embodying a diverse range of interests. As a Partner at seedfinance, Vaibhav Karnavat plays a pivotal role in shaping investment strategies and fostering growth for startups and emerging ventures. His involvement extends to Itreat Grocers LLP, where his expertise contributes to the company's endeavors in the food and grocery sector. Additionally, his role as a Partner at Karnavat & Co. underscores his engagement in the realm of finance and advisory services. At the helm of Jewelex International Pvt. Ltd., Vaibhav Karnavat takes on the role of CEO, steering the direction of the company within the jewelry industry. His leadership in this role exemplifies his ability to drive businesses forward and navigate complex industry landscapes.",
    "investments": 5,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/vaibhavkarnavat23307388/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Seed Finance, India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/655461cbbea3f7f2bab68b38_the%20health%20company.webp"
      },
      {
        "name": "Seed Finance, India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/655461d0ec32b877317bc890_Daalchini.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "honasa-consumer-pvt-ltd",
    "name": "Varun Alagh",
    "type": "Angel Investor",
    "title": "CoFounder at Honasa Consumer Pvt Ltd",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "HealthTech",
      "Edtech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Digital Entertainment",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534adb024edab3660f56c8_244.%20Varun%20Alagh.webp",
    "about": "Varun, a graduate from Delhi College of Engineering (DCE) and holder of an MBA from XLRI Jamshedpur, is currently spearheading the creation of an array of honest, natural, and safe products under his venture Honasa. The maiden offering from this venture is mamaearth, the first MadeSafe certified brand in Asia, aimed at alleviating parenting stress by offering secure and natural product alternatives. In his most recent role, Varun successfully managed one of the world's most esteemed brands, CocaCola, along with its Diets and Lights portfolio across India and South West Asia, including Bangladesh, Nepal, and Sri Lanka. Prior to this role, he played a pivotal role at Diageo Plc, where he held the reins of managing the Indian operations of Smirnoff, the world's leading spirits brand. In these capacities, Varun was entrusted with the task of driving both the topline and bottomline growth of the brand, overseeing strategies across AboveTheLine (ATL), BelowTheLine (BTL), digital platforms, and trade channels. In his earlier marketing role with Unilever, Varun was responsible for steering innovation and communication strategies for Rexona & Sure deodorants across the entire South Asia region. Before making his foray into marketing at Unilever, Varun spent a productive three years in sales at HUL, expertly managing a region with a valuation of 800 crore. This encompassed a diverse spectrum of over 20 categories spanning home care, personal care, and foods. Varun adeptly led a formidable team of over 500 individuals, out of which 35 were HUL employees, while the rest were under thirdparty employment. His remarkable performance resulted in consistent recognition as one of the top managers at HUL for two consecutive years. Throughout his academic journey, Varun capitalized on the opportunity to collaborate with esteemed corporations like Colgate Palmolive, Havells Electric, Madura Garments, Maruti, and Nokia through internships and live projects, significantly enriching his learning curve.",
    "investments": 39,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/varunalagh84/?ref=ynos.in",
      "twitter": "https://twitter.com/varunalagh?ref=ynos.in",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "veda-vc",
    "name": "Vasant Rao",
    "type": "Angel Investor",
    "title": "Managing partner at Veda VC",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Edtech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac228_132.%20Vasant%20Rao.webp",
    "about": "Vasant Rao is a visionary Angel Investor hailing from Alappuzha. With a strong interest in areas such as Community and Lifestyle, Edu-Tech, and AI and ML, he has made strategic investments in startups like Growthschool, Rezo.Ai, and Eloelo. As an enthusiastic supporter of innovative ideas, Vasant's investments have contributed to the growth and success of these promising ventures. His commitment to fostering new and transformative technologies reflects his passion for driving positive change in the startup landscape.",
    "investments": 3,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/vasant-rao-93403667",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Veda VC",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac281_Eloelo.svg"
      },
      {
        "name": "Veda VC",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac27f_Blu%20Smart%20Mobility.svg"
      },
      {
        "name": "Veda VC",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac282_rezo.%20ai%201.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "veda-vc-76775",
    "name": "Veda VC",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Pre-Seed",
      "Seed",
      "Early"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "Edtech",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac24e_veda%20vc%20logo.webp",
    "about": "Veda VC is a venture capital firm that is sector agnostic, but with a keen interest in Enterprise SaaS, Consumer Internet, Deep Tech, and the Creator Economy. The firm invests anywhere from Pre-Seed to Series A, with ticket sizes ranging from $250K to $1.5M. Veda VC is run by a group of entrepreneurs turned investors, who have built, scaled, and exited successful ventures in the past. As an operator, Veda works closely with portfolio companies to help them scale effectively. Founded in 2019 by Vasant Rao, Avijeet Alagathi, and Venus Dhuria, Veda VC has a team of experienced investment professionals with a deep understanding of the startup ecosystem. The firm has a strong network of contacts in the startup community, which they leverage to help their portfolio companies succeed. Veda VC is committed to providing their portfolio companies with the resources and support they need to scale effectively. Veda VC's investment strategy is to identify and back high-potential startups that have the potential to make a significant impact in their respective industries. The firm looks for startups that are led by strong teams with a clear vision for the future. Veda VC also seeks out startups that are operating in markets with large addressable audiences. In addition to providing capital, Veda VC also offers its portfolio companies access to a wide range of resources and support. This includes access to the firm's network of contacts, as well as mentorship and advice from the firm's investment team. Veda VC also provides its portfolio companies with access to its proprietary deal sourcing platform, which helps them identify and connect with potential investors. Their average investment size is around $250k - $1.5M.",
    "investments": 22,
    "socials": {
      "linkedin": "https://www.linkedin.com/company/vedavc/",
      "twitter": "",
      "website": "https://www.veda.vc/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Veda VC",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2da_Redesyn.svg"
      },
      {
        "name": "Veda VC",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2db_SatSure.svg"
      },
      {
        "name": "Veda VC",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac282_rezo.%20ai%201.svg"
      }
    ],
    "pocName": "Jivesh Madan",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "nuware",
    "name": "Venk Krishnan",
    "type": "Angel Investor",
    "title": "Founder & CEO at NuWare",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac21f_141.%20Venk%20Krishnan.webp",
    "about": "Venk Krishnan is the visionary founder of NuWare, a company that has experienced rapid growth by aligning with market trends and meeting customer needs. Under Venk's leadership, NuWare has achieved significant recognition, including listings on the Inc. 500 for two consecutive years and being ranked as a Fast 50 company by Deloitte and Touche. Prior to NuWare, Venk successfully founded GovXcel, a software company that catered to the US local government sector and was later acquired in 2003. Venk's usual investments cheque sizes are between $25k to $50k.",
    "investments": 10,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/venkkrishnan/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "NuWare",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac297_acko.svg"
      },
      {
        "name": "NuWare",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac298_wealth42%201.svg"
      },
      {
        "name": "NuWare",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac29c_parent%20lane.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "venture-catalysts",
    "name": "Venture Catalysts",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Early",
      "Growth"
    ],
    "industries": [
      "Fintech",
      "HealthTech",
      "Edtech",
      "Agritech",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac056_Venturecatalysts%20VC.png",
    "about": "Venture Catalysts is the largest integrated incubator in Asia, offering a comprehensive innovation platform to support startup growth. Their programs, angel network, venture fund, and incubation centers provide valuable resources and support to early-stage startups. With a focus on creating enduring value, Venture Catalysts invests between $250K and $2Mn in promising startups. They not only provide funding but also facilitate follow-on rounds by leveraging their industry relationships with venture capitalists. Through their extensive network and expertise, Venture Catalysts plays a crucial role in nurturing and scaling startups, contributing to the overall development of the entrepreneurial ecosystem.",
    "investments": 175,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/miloni-ghatalia-661a53163/",
      "twitter": "",
      "website": "https://venturecatalysts.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Venture Catalysts",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1bc_beardo.svg"
      },
      {
        "name": "Venture Catalysts",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac161_dukaan.svg"
      },
      {
        "name": "Venture Catalysts",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac193_Confirmtkt.svg"
      }
    ],
    "pocName": "Miloni Ghatalia",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "venture-highway",
    "name": "Venture HIghway",
    "type": "Venture Capital",
    "title": "",
    "stages": [
      "Seed",
      "Early"
    ],
    "industries": [
      "Fintech",
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac03a_Venture%20Highway-logo.webp",
    "about": "Venture Highway is a strategic venture capital firm that partners with the next generation of entrepreneurs, offering them guidance and capital to turn their early-stage nascent ideas in technology into successful businesses. With a diverse portfolio that includes notable startups like Airmeet, cars24, Fampay, Headout, Meesho, and Sharechat, Venture Highway has demonstrated its ability to identify and support innovative ventures across different sectors. By providing both financial support and expertise, Venture Highway plays a crucial role in nurturing and accelerating the growth of promising technology startups in India. Venture highway has an average investment size of $1M.",
    "investments": 39,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/akuljindal/",
      "twitter": "https://twitter.com/akuljindal2",
      "website": "https://www.venturehighway.vc/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Venture HIghway",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac159_fampay.svg"
      },
      {
        "name": "Venture HIghway",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac15a_Cars24.svg"
      },
      {
        "name": "Venture HIghway",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac03c_Meesho.svg"
      }
    ],
    "pocName": "Akul Jindal",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "meesho",
    "name": "Vidit Aatrey",
    "type": "Angel Investor",
    "title": "Founder & CEO at Meesho",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "Edtech",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1f0_198.%20Vidit%20Aatrey.webp",
    "about": "Vidit Aatrey emerges as a distinguished Angel Investor hailing from Bengaluru, renowned for his strategic investments that drive innovation and transformation. With a discerning eye for potential, Vidit's investment interests span a wide spectrum of sectors, including Apps, Food and Beverage, and Edu-Tech. His contributions to the startup ecosystem have played a pivotal role in propelling groundbreaking ventures forward. Noteworthy among his investments are pioneering startups such as Bluelearn, Medbikri, Solarsquare, and an impressive array of nineteen additional innovative enterprises. Vidit Aatrey's investment choices mirror not only his insightful understanding of emerging market dynamics but also his commitment to fostering the growth of startups. Beyond providing financial backing, he offers his experience, insights, and a valuable network that contribute significantly to the startups' development and success.",
    "investments": 23,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/vidit-aatrey-a3639120/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Meesho",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac2ca_Vahak.svg"
      },
      {
        "name": "Meesho",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac274_Ultrahuman.svg"
      },
      {
        "name": "Meesho",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac255_Turnip.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "vijay-shekhar-sharma",
    "name": "Vijay Shekhar Sharma",
    "type": "Angel Investor",
    "title": "Founder & CEO at Paytm",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "Fintech",
      "Consumer",
      "Edtech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac01d_e6JbIoQ3_400x400.webp",
    "about": "Vijay Sekhar Sharma, a self-made Indian billionaire businessman, is not only an angel investor but also the founder and CEO of One97 Communications and the fintech company Paytm. With his entrepreneurial acumen and visionary leadership, Vijay has made significant contributions to the Indian business landscape. As an angel investor, he actively supports and invests in promising startups, leveraging his vast experience and network to fuel their growth and success.",
    "investments": 52,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/vijayshekhar/",
      "twitter": "https://twitter.com/vijayshekhar",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Paytm",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0f1_milaap.svg"
      },
      {
        "name": "Paytm",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0f2_goqii.svg"
      },
      {
        "name": "Paytm",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0f3_flyrobe.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "v-r-forklift-marketing-pvt-ltd",
    "name": "Vikas Bagaria",
    "type": "Angel Investor",
    "title": "Managing Director at V R Forklift Marketing Pvt Ltd,",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "HealthTech",
      "Edtech",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/655349fb03e4cc58ddb6692a_247.%20Vikas%20Bagaria.webp",
    "about": "Vikas Bagaria, a seasoned entrepreneur with over 23 years of experience, cofounded PeeSafe in 2013, a rapidly growing personal hygiene brand. Inspired during a road trip when his wife fell ill with a Urinary Tract Infection, they created a Toilet Seat Sanitizer Spray. In 2020, PeeSafe was recognized as The Best SMB Brand of the Year by Amazon India. It's now available in 70 cities, five countries, and over 5000 stores with a diverse product range. Apart from PeeSafe, Vikas supports Indian companies with conditionalbased monitoring systems. He also founded SafetyKart.com in response to the Nirbhaya rape case. Vikas is a Child Safety Auditor and operates from various locations. He enjoys quizzing, adventure sports, cycling, wildlife photography, and technology. Additionally, he's an investor in several startups. His advice to young entrepreneurs is to \"Celebrate exit, not funding.\"",
    "investments": 9,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/vikkivik/?ref=ynos.in",
      "twitter": "https://twitter.com/vikkivik",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "V R Forklift Marketing Pvt Ltd",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65534a0204e63b7e61ee0e82_Asadeltech.webp"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "reliance-jio",
    "name": "Vikas Choudhury",
    "type": "Angel Investor",
    "title": "President at Reliance Jio",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "Fintech",
      "Edtech",
      "SaaS"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac221_138.%20Vikas%20Choudhury.webp",
    "about": "Vikas Choudhury is a Digital Futurist, Tech Economist, and Strategic Leader with extensive experience in operating, investing, and M&A in multinational public companies. Currently serving as President at Reliance Jio, a prominent consumer conglomerate in digital, telecom, and retail, he has led various business initiatives, including acquisitions in technology and commerce and expansion into e-commerce.",
    "investments": 9,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/vikaschoudhury/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Reliance Jio",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac291_Testbook.svg"
      },
      {
        "name": "Reliance Jio",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac292_Exotel.svg"
      },
      {
        "name": "Reliance Jio",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac293_ByteLearn.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "sucseed-indovation-fund",
    "name": "Vikrant Varshney",
    "type": "Angel Investor",
    "title": "Managing Partner at SucSEED Indovation Fund",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "SaaS",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac226_134.%20Vikrant%20Varshney.webp",
    "about": "Vikrant Varshney is a seasoned Angel investor with a successful track record in the venture capital and private equity sector. He possesses expertise in Disruptive Technologies, Start-up Ventures, Strategy, Angel Investing, and Executive Management. Vikrant's strong domain focus lies in Risk & Regulatory Tech, complemented by his proficiency in business development and Executive Leadership. He is an alumnus of the Executive Leadership Management program for Senior Executives from the prestigious Indian School of Business, holding an MBA from IMI, Delhi, and a BTech degree from AMU. With his extensive experience and skills, Vikrant plays a vital role in supporting and nurturing promising startups in the ever-evolving entrepreneurial landscape.",
    "investments": 8,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/vikrantvarshney-indovation/?originalSubdomain=in",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "SucSEED Indovation Fund",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac288_Pixuate.svg"
      },
      {
        "name": "SucSEED Indovation Fund",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac289_Letz%20Connect.svg"
      },
      {
        "name": "SucSEED Indovation Fund",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac28a_Spintly.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "vinay-bansal",
    "name": "Vinay Bansal",
    "type": "Angel Investor",
    "title": "Cofounder at Inflection Point Ventures",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "HealthTech",
      "SaaS",
      "Mobility",
      "Consumer"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac07e_77.%20Vinay%20Bansal.webp",
    "about": "Vinay Bansal is a highly experienced finance professional and turnaround specialist, with a career spanning over 20 years in Fortune 50 companies, private equity, and startups. Previously, he served as Senior Advisor at TPG Global and held the positions of CFO and CIO at Wildcraft India. With a Chartered Accountant qualification, Vinay brings a strong financial acumen to his roles. Prior to his involvement with startups and private equity, he held leadership positions in renowned companies such as GE, where he served as CFO of Supply Chain for South Asia, and Hindustan Unilever. Apart from his professional achievements, Vinay is also an active sports enthusiast, with a passion for badminton, swimming, and long-distance running.",
    "investments": 19,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/vinay-bansal-383b035/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Inflection Point Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac195_Fitso.svg"
      },
      {
        "name": "Inflection Point Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac196_Milkbasket.svg"
      },
      {
        "name": "Inflection Point Ventures",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac197_EDVISO.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "profitwheel",
    "name": "Vivek Bhargava",
    "type": "Angel Investor",
    "title": "CoFounder at ProfitWheel",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "SaaS",
      "Mobility",
      "Consumer",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/65546a3a0c6be28597b542fc_219.%20Vivek%20Bhargava.webp",
    "about": "Vivek Bhargava holds a prominent position as the Head of the Dan Performance Group at Dentsu Aegis Network, and is the CoFounder of ProfitWheel. Additionally, he serves as the CEO for India at iProspectCommunicate 2. With an impressive career trajectory, Vivek's roles encompass strategic leadership within the dynamic realms of digital marketing and performance management. At Dentsu Aegis Network, Vivek Bhargava leads the Dan Performance Group, overseeing critical strategies and initiatives that drive optimal performance across various digital platforms. Simultaneously, his role as CEO India at iProspectCommunicate 2 underscores his authoritative role in shaping the digital landscape within the Indian market. Vivek's leadership transcends mere titles, symbolizing his expertise and visionary approach. In his capacity at Dentsu Aegis Network, he steers the Dan Performance Group towards achieving digital excellence, harnessing the power of datadriven strategies to deliver superior results. As the CEO India at iProspectCommunicate 2, he drives innovation and market penetration within India's dynamic digital marketing arena.",
    "investments": 8,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/vivekbhargava/",
      "twitter": "https://twitter.com/vivekbhargava?lang=en",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "zara-habitats-llp-india",
    "name": "Zaheer Memon",
    "type": "Angel Investor",
    "title": "Partner at Zara Habitats LLP, India",
    "stages": [
      "Pre-Seed",
      "Seed"
    ],
    "industries": [
      "AI/ML",
      "Fintech",
      "SaaS",
      "Media"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac1f3_195.%20Zaheer%20Memon.webp",
    "about": "Functioning as a Legal Consultant, Zaheer Memon specializes in Criminal Law, Property Law, and Dispute Resolution. Beyond this, the person holds a partnership position at Zara Habitats LLP, a real estate construction firm dedicated to undertaking development and redevelopment projects in Mumbai city, emerging Tier II cities, and other key areas adjoining the Mumbai metropolitan region. Additionally, the individual serves as a Partner at Maxon Realty & Infrastructure, a Mumbai-based entity engaging in various dimensions of the Real Estate Industry across India, with a significant focus on Mumbai itself. Notably, Maxon Realty actively participates as an equity investor in construction projects within the Real Estate sector.",
    "investments": 9,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/zaheer-memon-993b7214/",
      "twitter": "",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Zara Habitats LLP, India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac313_ZineOne.svg"
      },
      {
        "name": "Zara Habitats LLP, India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac314_Buildsupply.svg"
      },
      {
        "name": "Zara Habitats LLP, India",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac30c_Betterhalf.ai.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  },
  {
    "id": "zishaan-hayath",
    "name": "Zishaan Hayath",
    "type": "Angel Investor",
    "title": "Co-founder at Toppr",
    "stages": [
      "Seed",
      "Pre-Seed"
    ],
    "industries": [
      "SaaS",
      "Edtech"
    ],
    "logoUrl": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac024_1612422270491.webp",
    "about": "Zishaan Hayath is a prominent entrepreneur and angel investor in the Indian startup ecosystem. He is renowned for founding Toppr.com, an adaptive learning app that revolutionizes education for school students. With notable backing from investors such as SAIF, Helion, and Eight Roads, Toppr.com has become a leading player in the edtech industry. Prior to Toppr, Zishaan co-founded Chaupaati Bazaar, which was acquired by India's largest retailer, Future Group. Zishaan's impressive academic background includes a degree from IIT Bombay and recognition with the Young Alumni Achiever Award for his significant contributions to the startup ecosystem. As an active angel investor, Zishaan has supported over 150 startups across diverse sectors, solidifying his commitment to fostering innovation and entrepreneurial success.",
    "investments": 17,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/zishaan/",
      "twitter": "https://twitter.com/zishaan",
      "website": "https://shopeg.in/"
    },
    "portfolioCompanies": [],
    "portfolioLogos": [
      {
        "name": "Toppr",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac0ff_adpushup.svg"
      },
      {
        "name": "Toppr",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac100_shadowfax.svg"
      },
      {
        "name": "Toppr",
        "logo": "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/652f7edfbfa272ea310ac101_orobind.svg"
      }
    ],
    "pocName": "",
    "pocTitle": "",
    "pocLinkedin": "",
    "pocPhoto": "https://cdn.prod.website-files.com/652f7edfbfa272ea310abaac/652f7edfbfa272ea310abb0b_LinkedIn%20logo.svg"
  }
];
