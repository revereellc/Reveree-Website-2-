/* ============================================
   Reveree — Shared Data (typed)
   ============================================ */

export interface Category {
  slug: string;
  icon: string;
  name: string;
  tagline: string;
  description: string;
  subcategories: string[];
}

export interface Creator {
  id: string;
  name: string;
  role: string;
  rate: number;
  rating: number;
  reviews: number;
  badge: string;
  badgeClass: string;
  photo: string;
  tags: string[];
  category: string;
  location: string;
  bio: string;
}

export interface SearchIndexItem {
  label: string;
  icon: string;
  url: string;
  type: string;
}

export const REVEREE_CATEGORIES: Category[] = [
  {
    slug: "personal-training",
    icon: "dumbbell",
    name: "Remote Personal Training",
    tagline: "Train from anywhere",
    description:
      "Work with certified trainers for live virtual sessions, custom workout plans, nutrition coaching, and accountability check-ins — wherever you are in the world.",
    subcategories: [
      "Strength Training",
      "Yoga & Mobility",
      "Nutrition Coaching",
      "HIIT & Cardio",
      "Pre/Postnatal Fitness",
      "Sports-Specific Training",
      "Senior Fitness",
      "Online Group Classes",
    ],
  },
  {
    slug: "creative-writing",
    icon: "pen",
    name: "Creative Writing",
    tagline: "Learn Creative Writing",
    description:
      "Find ghostwriters, editors, and writing coaches for fiction, poetry, screenwriting, and personal projects — or book one-on-one lessons to sharpen your own craft.",
    subcategories: [
      "Fiction & Novels",
      "Poetry",
      "Screenwriting",
      "Children's Books",
      "Memoir & Personal Essay",
      "Writing Coaching",
      "Ghostwriting",
      "Editing & Proofreading",
    ],
  },
  {
    slug: "language-tutors",
    icon: "chat",
    name: "Language Tutors",
    tagline: "Learn Hindi, Japanese & More",
    description:
      "Connect with native-speaking tutors for conversational practice, exam prep, business language training, and immersive lessons in over 40 languages.",
    subcategories: [
      "Spanish",
      "Japanese",
      "Hindi",
      "Mandarin",
      "French",
      "Korean",
      "Business English",
      "Exam Prep (IELTS/TOEFL)",
    ],
  },
  {
    slug: "coding-development",
    icon: "code",
    name: "Coding & Development",
    tagline: "Build, deploy, learn & ship",
    description:
      "Hire developers to build your product, get code reviewed, or book 1:1 mentorship sessions covering web, mobile, data, and everything in between.",
    subcategories: [
      "Web Development",
      "Mobile Apps",
      "Python & Data Science",
      "DevOps & Cloud",
      "Game Development",
      "Code Review & Debugging",
      "1:1 Programming Lessons",
      "API Integrations",
    ],
  },
  {
    slug: "design-branding",
    icon: "palette",
    name: "Design & Branding",
    tagline: "Logos, UI, and visual identity",
    description:
      "From logo design to full brand systems and product UI, work with designers who turn your ideas into a cohesive visual identity clients remember.",
    subcategories: [
      "Logo Design",
      "Brand Identity",
      "UI/UX Design",
      "Packaging Design",
      "Pitch Deck Design",
      "Illustration",
      "Print Design",
      "Social Media Graphics",
    ],
  },
  {
    slug: "photography-video",
    icon: "camera",
    name: "Photography & Video",
    tagline: "Shoot, edit, and produce",
    description:
      "Book local photographers and videographers for shoots, or hire remote editors for video production, color grading, and post-production work.",
    subcategories: [
      "Portrait Photography",
      "Event Photography",
      "Product Photography",
      "Video Editing",
      "Motion Graphics",
      "Drone Footage",
      "Wedding Videography",
      "Color Grading",
    ],
  },
];

export const REVEREE_CREATORS: Creator[] = [
  {
    id: "elena-v",
    name: "Elena V.",
    role: "Yoga Guide",
    rate: 45,
    rating: 4.9,
    reviews: 312,
    badge: "Top Rated",
    badgeClass: "badge-top",
    photo:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    tags: ["Yoga", "Meditation", "Wellness"],
    category: "personal-training",
    location: "Remote · Bali, Indonesia",
    bio: "Certified yoga instructor with 8 years of experience guiding students through Vinyasa, Hatha, and restorative practices. I specialize in helping busy professionals build a sustainable home practice.",
  },
  {
    id: "aarav-k",
    name: "Aarav K.",
    role: "Python Dev",
    rate: 80,
    rating: 5.0,
    reviews: 198,
    badge: "Pro",
    badgeClass: "badge-pro",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    tags: ["Python", "Django", "APIs"],
    category: "coding-development",
    location: "Remote · Bengaluru, India",
    bio: "Backend engineer specializing in Python, Django, and scalable API design. I've shipped production systems for startups across fintech and healthtech.",
  },
  {
    id: "mia-chen",
    name: "Mia Chen",
    role: "UX Designer",
    rate: 65,
    rating: 4.8,
    reviews: 256,
    badge: "Rising Star",
    badgeClass: "badge-rising",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    tags: ["Figma", "Branding", "UI"],
    category: "design-branding",
    location: "Remote · Toronto, Canada",
    bio: "Product designer focused on clean, usable interfaces and cohesive brand systems. I help founders go from idea to polished, ready-to-build designs in Figma.",
  },
  {
    id: "james-o",
    name: "James O.",
    role: "Copywriter",
    rate: 55,
    rating: 4.7,
    reviews: 174,
    badge: "Top Rated",
    badgeClass: "badge-top",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    tags: ["SEO Copy", "Blogs", "Email"],
    category: "creative-writing",
    location: "Remote · London, UK",
    bio: "Copywriter and content strategist helping brands tell better stories — from SEO blog content to email sequences that actually convert.",
  },
  {
    id: "sofia-r",
    name: "Sofia R.",
    role: "Spanish Tutor",
    rate: 30,
    rating: 4.9,
    reviews: 421,
    badge: "Top Rated",
    badgeClass: "badge-top",
    photo:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop",
    tags: ["Spanish", "Conversation", "Exam Prep"],
    category: "language-tutors",
    location: "Remote · Madrid, Spain",
    bio: "Native Spanish speaker and certified language teacher with a focus on conversational fluency and exam preparation for DELE and SIELE.",
  },
  {
    id: "noah-b",
    name: "Noah B.",
    role: "Wedding Photographer",
    rate: 120,
    rating: 4.9,
    reviews: 88,
    badge: "Pro",
    badgeClass: "badge-pro",
    photo:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=600&auto=format&fit=crop",
    tags: ["Weddings", "Portraits", "Editing"],
    category: "photography-video",
    location: "In-person · Austin, TX",
    bio: "Documentary-style wedding and portrait photographer based in Austin, available for travel. Full editing and delivery included in every package.",
  },
  {
    id: "priya-d",
    name: "Priya D.",
    role: "Nutrition Coach",
    rate: 50,
    rating: 4.8,
    reviews: 143,
    badge: "Rising Star",
    badgeClass: "badge-rising",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop",
    tags: ["Nutrition", "Coaching", "Wellness"],
    category: "personal-training",
    location: "Remote · Mumbai, India",
    bio: "Registered dietitian helping clients build sustainable eating habits with personalized meal plans and weekly check-ins.",
  },
  {
    id: "lucas-m",
    name: "Lucas M.",
    role: "Frontend Developer",
    rate: 70,
    rating: 4.9,
    reviews: 210,
    badge: "Top Rated",
    badgeClass: "badge-top",
    photo:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=600&auto=format&fit=crop",
    tags: ["React", "TypeScript", "UI"],
    category: "coding-development",
    location: "Remote · São Paulo, Brazil",
    bio: "Frontend specialist building fast, accessible interfaces with React and TypeScript. Comfortable working directly with designers or from scratch.",
  },
  {
    id: "hana-y",
    name: "Hana Y.",
    role: "Japanese Tutor",
    rate: 35,
    rating: 5.0,
    reviews: 267,
    badge: "Top Rated",
    badgeClass: "badge-top",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    tags: ["Japanese", "JLPT", "Conversation"],
    category: "language-tutors",
    location: "Remote · Osaka, Japan",
    bio: "Japanese language teacher with 6 years of experience preparing students for JLPT exams and everyday conversational fluency.",
  },
  {
    id: "diego-f",
    name: "Diego F.",
    role: "Brand Designer",
    rate: 75,
    rating: 4.8,
    reviews: 132,
    badge: "Pro",
    badgeClass: "badge-pro",
    photo:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=600&auto=format&fit=crop",
    tags: ["Logo", "Identity", "Print"],
    category: "design-branding",
    location: "Remote · Mexico City, Mexico",
    bio: "Brand identity designer crafting logos, style guides, and print collateral for small businesses and startups looking to stand out.",
  },
  {
    id: "ava-t",
    name: "Ava T.",
    role: "Video Editor",
    rate: 60,
    rating: 4.7,
    reviews: 95,
    badge: "Rising Star",
    badgeClass: "badge-rising",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    tags: ["Video Editing", "Motion Graphics", "YouTube"],
    category: "photography-video",
    location: "Remote · Manchester, UK",
    bio: "Video editor specializing in fast-turnaround YouTube edits, motion graphics, and short-form social content.",
  },
  {
    id: "ben-k",
    name: "Ben K.",
    role: "Screenwriting Coach",
    rate: 90,
    rating: 4.9,
    reviews: 61,
    badge: "Pro",
    badgeClass: "badge-pro",
    photo:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600&auto=format&fit=crop",
    tags: ["Screenwriting", "Editing", "Coaching"],
    category: "creative-writing",
    location: "Remote · Los Angeles, CA",
    bio: "Working screenwriter and script consultant offering coverage, notes, and one-on-one coaching for feature and TV writers.",
  },
];

// Build a flat search index combining categories and subcategories
function buildSearchIndex(): SearchIndexItem[] {
  const index: SearchIndexItem[] = [];
  REVEREE_CATEGORIES.forEach((cat) => {
    index.push({
      label: cat.name,
      icon: cat.icon,
      url: `service.html?cat=${cat.slug}`,
      type: "Category",
    });
    cat.subcategories.forEach((sub) => {
      index.push({
        label: sub,
        icon: cat.icon,
        url: `service.html?cat=${cat.slug}#${encodeURIComponent(sub)}`,
        type: cat.name,
      });
    });
  });
  REVEREE_CREATORS.forEach((c) => {
    index.push({
      label: `${c.name} — ${c.role}`,
      icon: "person",
      url: `creator.html?id=${c.id}`,
      type: "Creator",
    });
  });
  return index;
}

export const REVEREE_SEARCH_INDEX: SearchIndexItem[] = buildSearchIndex();
