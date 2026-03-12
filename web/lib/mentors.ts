export interface MentorProfile {
    name: string;
    title: string;
    credentials: string[];
    image: string;
    linkedinUrl: string;
}

export const mentorsData: MentorProfile[] = [
    {
        name: "Vikram Anand Bhushan",
        title: "Co-Founder, Hypermine",
        credentials: ["Founder with 11+ years of experience scaling blockchain venture, currently building privacy-first digital trust infrastructure through Hypermine."],
        image: "/vikrambanand.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/vikrambanand/?originalSubdomain=ae"
    },
    {
        name: "Ashish Kulkarni",
        title: "Founder, Founders' Psyche",
        credentials: ["Ex-CoFounder - FundEnable, MBA-IE Business School-Spain. Ex-Research Assistant - INSEAD, France. Brings strong experience of building startups and raising funds."],
        image: "/Ashish_kulkarni.jpeg", // Using a fallback in the component if file doesn't exist
        linkedinUrl: "https://www.linkedin.com/in/ashishkul/"
    },
    {
        name: "Vaibhav Bhargava",
        title: "Salesforce Architect",
        credentials: ["Salesforce Architect at JLL with 15+ years of experience across JLL, PwC, PTC, and Amdocs, leading enterprise Salesforce architecture and digital transformation initiatives."],
        image: "/vaibhav_bhargava.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/vaibhav-bhargava-0a1364a/"
    },
    {
        name: "Harsh Gupta",
        title: "PhD, Quantum Error Correction",
        credentials: ["Ph.D. scholar at IISER, Bhopal researching Quantum Error Correction in Measurement-Based Quantum Computing. M.Tech from NIT-Srinagar, prior industry experience at Infosys."],
        image: "/harsh_gupta.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/harsh-gupta-aa3bbb99/"
    },
    {
        name: "Pavan Agarwal",
        title: "Founder, DD Cinemas",
        credentials: ["'The Cinema Man of UP-East.' Founder of DD Cinema, currently operating 30+ multiplex screens with a strategic expansion to 50+ screens by the end of 2026."],
        image: "/pavan_dd.png",
        linkedinUrl: "https://www.linkedin.com/in/pavan-agarwal-8353092/"
    },
    {
        name: "CA Moon Goel",
        title: "CA, Co-Founder - Vitt Kushal",
        credentials: ["20+ yrs work-ex in forensic accounting, internal audit, compliance, and tax advisory. Expertise in guiding startups for financial forecasting, valuation and cap table management."],
        image: "/moongoel.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/moongoel/"
    },
    {
        name: "CA Mahendra Tiwari",
        title: "CA, Partner",
        credentials: ["20+ yrs of work ex with expertise in startup valuation, Small Business Tax Preparation, Bookkeeping and Accounting."],
        image: "/mahendra.png",
        linkedinUrl: "https://www.linkedin.com/in/mahendra-tiwari-4a62b112/"
    },
    {
        name: "Akash Kansal",
        title: "Founder, Author",
        credentials: ["A FMS-Delhi passout, he brings with him 12+ yrs of expereince in building products , strategy at organisations like 99acre, Droom, Deloitte. His book 'The class of 2006' was launched by R.Madhavan. Currently building next Gen AI Products in B2B SAAS."],
        image: "/akash.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/akashkansal/"
    },
    {
        name: "Upyukt Prakash",
        title: "Senior Principal Consultant",
        credentials: ["Senior Principal Consultant at Oracle with 18+ years of experience in project management, process transformation, and Lean Six Sigma, previously contributing at Tata Consultancy Services and Thales Avionics USA."],
        image: "/upyukt.jpg",
        linkedinUrl: "https://www.linkedin.com/in/upyukt-prakash-mater-black-belt-six-sigma-0b821514/"
    },
    {
        name: "Pawan Mishra",
        title: "Ex-Co-founder",
        credentials: ["Software Engineer at PhonePe, previously SDE-2 at Blinkit and Co-Founder of Fashn.me, with a strong foundation in building scalable consumer tech products. Combines startup experience with high-growth product engineering expertise."],
        image: "/pawan.jpg",
        linkedinUrl: "https://www.linkedin.com/in/pawan-mishra-2910/"
    },
    {
        name: "Deric Karunesudas",
        title: "Cybersecurity Leader & Investor",
        credentials: ["A Cybersecurity Leader and seasoned Investor with an 18-year track record of driving profitable growth for global enterprises. Spanning the US, Europe, Middle East, and APAC."],
        image: "/deric.jpg",
        linkedinUrl: "https://www.linkedin.com/in/derickarunesudas/"
    },
    {
        name: "Dr Debashis Bhattacharya",
        title: "Surgeon & Medical Advisor",
        credentials: ["A seasoned Surgeon and MNC Medical Advisor, he blends clinical mastery with a sophisticated acumen for enterprise building. As a mentor and investor, he translates deep healthcare expertise into actionable growth strategies."],
        image: "/debashis.jpg",
        linkedinUrl: "https://www.linkedin.com/in/debashis-bhattacharya-0611a645/"
    },
    {
        name: "Anant Sharma",
        title: "Ex-Founder @Tweek Labs",
        credentials: ["He brings strong experience in building startups, bio-sensing devices and robust IoT systems. Understands the full spectrum of hardware development, from industrial design to electro-mechanical prototyping."],
        image: "/anant.jpg",
        linkedinUrl: "https://www.linkedin.com/in/anant3110/"
    }
];
