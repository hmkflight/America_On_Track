export const links = {
  donate: "https://americaontrack.wufoo.com/forms/m1w310g302w124e",
  mentor: "https://americaontrack.wufoo.com/forms/rf5ekag09zzgxe/",
  teen: "https://americaontrack.wufoo.com/forms/m1uaxyu10hwmilf/",
  volunteer: "https://americaontrack.wufoo.com/forms/m1jzfup1vg14w4/",
  golf: "https://americaontrack.wufoo.com/forms/kids-on-track-golf-tournament-registration/",
  sponsor:
    "https://americaontrack.wufoo.com/forms/kids-on-track-golf-sponsorship-form/",
  dinner:
    "https://americaontrack.wufoo.com/forms/kids-on-track-golf-awards-dinner-registration/",
  auction:
    "https://americaontrack.wufoo.com/forms/kids-on-track-golf-tournament-donation-form/",
  schedule:
    "/documents/golf-schedule-2026.pdf",
  email: "mailto:PR@AmericaOnTrack.org",
  newsletter: "https://americaontrack.wufoo.com/forms/r1qw0owl0zsn6ym",
};
export type Program = {
  slug: string;
  name: string;
  audience: string;
  format: string;
  intro: string;
  image: string;
  alt: string;
  areas: string[];
  steps: { title: string; text: string }[];
  details: { title: string; text: string }[];
  cta: string;
  href: string;
};
export const programs: Program[] = [
  {
    slug: "emerging-leaders",
    name: "Emerging Leaders",
    audience: "Students in grades 4–12",
    format: "After-school leadership & civic engagement",
    intro:
      "Emerging Leaders for Civic Engagement helps young people build the confidence, skills, and sense of purpose to become leaders in their communities.",
    image: "leaders.jpg",
    alt: "America On Track scholarship recipients with Terry Thompson",
    areas: ["youth", "schools"],
    steps: [
      {
        title: "Find your voice",
        text: "Practice public speaking and dynamic leadership with individual and group coaching.",
      },
      {
        title: "Expand your world",
        text: "Explore STEM careers, the arts, global issues, and the possibilities of higher education.",
      },
      {
        title: "Make your contribution",
        text: "Put leadership into practice through volunteering, civic engagement, and learning about social justice.",
      },
    ],
    details: [
      {
        title: "More than leadership lessons",
        text: "Fitness, nutrition, LifeSkills drug-use prevention, and a love of reading are woven into the program. Sessions also build interpersonal and decision-making skills through interactive activities. The approach supports the whole young person.",
      },
      {
        title: "Recognition and scholarships",
        text: "The published program includes awards and college scholarships. Ask the team about current eligibility, opportunities, and participation requirements.",
      },
      {
        title: "Joining the program",
        text: "The program serves grades 4–12. Teens can complete the interest form; parents of younger students and educators should contact the team to discuss current opportunities.",
      },
    ],
    cta: "Teen interest form",
    href: links.teen,
  },
  {
    slug: "brighter-futures",
    name: "Brighter Futures",
    audience: "Children with an incarcerated parent & their families",
    format: "Free mentoring & family support",
    intro:
      "Brighter Futures for Children of Prisoners brings mentoring, learning, and family support together. Established in 2004, this free program creates opportunities for children navigating parental incarceration.",
    image: "brighter.jpg",
    alt: "A young participant working on a hands-on STEM project",
    areas: ["youth", "families"],
    steps: [
      {
        title: "A trusted connection",
        text: "Qualified, trained mentors serve as positive role models and offer encouragement.",
      },
      {
        title: "New possibilities",
        text: "STEAM activities and an educational summer college camp at Cal State Fullerton broaden horizons.",
      },
      {
        title: "Support around the family",
        text: "Special events, wraparound family services, and free books throughout the year add practical and joyful support.",
      },
    ],
    details: [
      {
        title: "Five connected components",
        text: "The program combines STEAM, a college camp, trained mentors, special events, and wraparound services with year-round books. These components are designed to work together.",
      },
      {
        title: "For parents and caregivers",
        text: "Contact America On Track to discuss your family’s needs, current availability, and how to participate. You do not need to share personal family information on this website.",
      },
      {
        title: "Become an adult mentor",
        text: "Start with the adult mentor interest form. The team will explain its qualification and training process, expectations, and next steps.",
      },
    ],
    cta: "Ask about family support",
    href: "mailto:PR@AmericaOnTrack.org?subject=Brighter%20Futures%20program%20inquiry",
  },
  {
    slug: "fitness",
    name: "Fitness & Active Play",
    audience: "Students, schools, teachers & parents",
    format: "School-based physical education & training",
    intro:
      "From structured PE to active recess, America On Track helps schools make movement a meaningful part of a child’s day.",
    image: "fitness.png",
    alt: "America On Track physical education activities",
    areas: ["youth", "schools"],
    steps: [
      {
        title: "Move with purpose",
        text: "Structured physical education uses an evidence-based curriculum to develop skills and confidence.",
      },
      {
        title: "Make play part of the day",
        text: "The On Track Fitness Fun Zone, active recess, and painted playground stencils encourage participation.",
      },
      {
        title: "Equip the adults, too",
        text: "Active Play training for teachers and parents, plus professional development for school staff, supports lasting practice.",
      },
    ],
    details: [
      {
        title: "A history of school partnerships",
        text: "The published fitness page describes Federal Physical Education Program grant work in 21 schools since 2006. This is a historical program total, not a count of schools currently served.",
      },
      {
        title: "Measuring and supporting progress",
        text: "The published approach includes California FitnessGram measurements and physical activity policies, alongside staff training. Fitness has also been part of the Teen Emerging Leaders program since 1996.",
      },
    ],
    cta: "Bring movement to your school",
    href: "mailto:PR@AmericaOnTrack.org?subject=School%20fitness%20program%20inquiry",
  },
  {
    slug: "nutrition",
    name: "Nutrition",
    audience: "Youth, adults, families & community partners",
    format: "Education, demonstrations & community action",
    intro:
      "Practical nutrition education connects everyday choices with healthier environments—at home, in schools, and across the community.",
    image: "nutrition-team.jpg",
    alt: "America On Track’s nutrition education team",
    areas: ["families", "schools", "community"],
    steps: [
      {
        title: "Learn by doing",
        text: "Youth and adult nutrition classes, food demonstrations, and healthy shopping tours bring learning into daily life.",
      },
      {
        title: "Meet people where they are",
        text: "Healthy snack and Re-Think Your Drink booths connect with families at community events.",
      },
      {
        title: "Shape healthier environments",
        text: "Resident leadership, advocacy training, and nutrition and physical activity policies support community-level change.",
      },
    ],
    details: [
      {
        title: "Part of the organization from the beginning",
        text: "Nutrition education has been a recurring component of America On Track’s programs since its founding in 1995.",
      },
      {
        title: "For schools and community organizations",
        text: "Contact the team about educational opportunities and partnerships. Availability, locations, and scheduling are confirmed directly with America On Track.",
      },
    ],
    cta: "Explore a nutrition partnership",
    href: "mailto:PR@AmericaOnTrack.org?subject=Nutrition%20partnership%20inquiry",
  },
  {
    slug: "drug-use-prevention",
    name: "Drug-Use Prevention",
    audience: "Elementary, middle & high school students; adults",
    format: "Multi-week learning & one-hour presentations",
    intro:
      "America On Track helps young people develop the confidence and practical skills to resist social pressure and choose healthy alternatives to substance use.",
    image: "stem.jpg",
    alt: "Young people collaborating during an America On Track learning activity",
    areas: ["youth", "schools", "families"],
    steps: [
      {
        title: "Build confidence",
        text: "Activities support self-esteem, self-confidence, and the ability to manage anxiety.",
      },
      {
        title: "Practice the skills",
        text: "Students learn to respond to social pressures around smoking, drinking, and drug use.",
      },
      {
        title: "Understand the choices",
        text: "Education explores the immediate consequences of substance misuse and strengthens decision-making.",
      },
    ],
    details: [
      {
        title: "Topics and formats",
        text: "The published program addresses alcohol, tobacco and vaping, marijuana, opioids, and methamphetamines. Multi-week activities serve students; one-hour presentations are also offered for youth and adult audiences.",
      },
      {
        title: "For educators and families",
        text: "Ask the team about a presentation or a longer program that fits your school or group. This page describes educational services and does not provide individual medical advice.",
      },
    ],
    cta: "Ask about a presentation",
    href: "mailto:PR@AmericaOnTrack.org?subject=Prevention%20education%20inquiry",
  },
  {
    slug: "tobacco-free-communities",
    name: "Tobacco-Free Communities",
    audience: "Youth, residents, schools, merchants & policymakers",
    format: "Prevention education & community policy work",
    intro:
      "America On Track connects education, youth leadership, merchant outreach, and policy work to reduce youth access to tobacco and exposure to secondhand smoke.",
    image: "park.jpg",
    alt: "A Santa Ana park pictured in America On Track’s tobacco policy work",
    areas: ["community", "schools"],
    steps: [
      {
        title: "Help young people lead",
        text: "Vaping prevention education, high-school leadership clubs, and parent town halls support youth and families.",
      },
      {
        title: "Engage local businesses",
        text: "Merchant education, social sources campaigns, and the 5 Star Merchant recognition program address youth access.",
      },
      {
        title: "Change the environment",
        text: "Youth and adult workgroups, public opinion surveys, community presentations, and policymaker collaboration support smoke-free policies.",
      },
    ],
    details: [
      {
        title: "Lowering youth access",
        text: "The youth-access project combines school and community education with merchant engagement. Parent town halls involve law enforcement and school administrators.",
      },
      {
        title: "Reducing secondhand smoke exposure",
        text: "On Track for a Tobacco-Free Orange County focuses on health disparities and works with priority populations on legislative and voluntary policies, including housing, public spaces, and other community settings.",
      },
      {
        title: "Documented policy milestones",
        text: "America On Track reports work supporting smoke-free parks in Santa Ana (February 2012) and Stanton (July 2018), and smoke-free city and multi-unit housing policies in Buena Park (July 2023). These are historical achievements, not guidance on current law.",
      },
    ],
    cta: "Partner on community health",
    href: "mailto:PR@AmericaOnTrack.org?subject=Community%20health%20partnership",
  },
];
export const board = [
  ["Patrick Ross", "Chairman of the Board", "CPA / Partner · Haskell & White"],
  ["Terry Thompson", "President", "America On Track"],
  ["Mike Lake", "Vice President, Marketing", "Crevier BMW & Mini"],
  ["Claire Braeburn", "Executive Director", "America On Track"],
  ["Donnie Crevier", "President", "Crevier Classic Cars"],
  ["Mike Kilbride", "CEO", "Kilbride Engineering"],
  ["Heather Grover", "VP Product Management", "Experian"],
  [
    "Steve Weber",
    "Managing Director",
    "Morgan Stanley, Private Wealth Management",
  ],
  ["Thomas Creato", "Principal", "Creato Consulting"],
  ["Michael J. Chilleen", "Partner", "SheppardMullin LLP"],
];
export const honorary = [
  ["Ed Arnold", "News Anchor · PBS SoCal"],
  ["Charles Brobeck", "Chief of Police (Ret.) · Irvine Police Department"],
  ["David O. Carter", "Judge · United States District Court"],
  [
    "William M. Habermehl",
    "Superintendent of Schools Emeritus · Orange County Department of Education",
  ],
];
export const advisory = [
  ["Doug Forde", "Principal · Forde Consulting"],
  ["Alberto Gedissman", "M.D., Medical Director · AltaMed Health Services"],
  ["Tim Smith", "President · Competitive Simulations Inc."],
  ["Dr. Mark Van Horn", "Resource Teacher · Wilson Elementary, SAUSD"],
];
export const milestones = [
  [
    "1995",
    "A shared conviction becomes a nonprofit.",
    "Terry Thompson and Claire Braeburn establish America On Track after researching the needs of Orange County children and families.",
  ],
  [
    "1997",
    "Community service earns recognition.",
    "The Orange County Department of Education recognizes outstanding contributions to education. Tobacco prevention work begins in the same year.",
  ],
  [
    "2004",
    "Brighter Futures begins.",
    "A dedicated program brings mentoring and comprehensive support to children with an incarcerated parent.",
  ],
  [
    "2010",
    "Healthy places, lasting change.",
    "Santa Ana recognizes the organization’s role in the Memorial Exercise Park with a Community Building Award.",
  ],
  [
    "2016",
    "A national investment in movement.",
    "America On Track receives a three-year U.S. Department of Education Physical Education Program grant, following awards in 2007 and 2011.",
  ],
  [
    "2023",
    "Community health moves forward.",
    "The organization reports its work toward Buena Park’s smoke-free city and multi-unit housing ordinance, passed in July.",
  ],
];
