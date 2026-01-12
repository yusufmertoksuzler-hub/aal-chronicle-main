export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'news' | 'clubs' | 'events' | 'sports' | 'culture';
  author: string;
  publishDate: string;
  imageUrl: string;
  featured: boolean;
  editorsPick: boolean;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Atakent Science Fair Breaks Records with 150 Student Projects",
    excerpt: "This year's annual science fair showcased unprecedented creativity and innovation, with projects ranging from renewable energy solutions to AI-powered learning tools.",
    content: `<p>The 2026 Atakent Anatolian High School Science Fair exceeded all expectations, featuring 150 innovative student projects that demonstrated the remarkable talent and dedication of our student body.</p>
    
    <p>Held in the main gymnasium over three days, the fair attracted visitors from neighboring schools, local universities, and even representatives from major technology companies seeking young talent.</p>
    
    <h2>Highlights from the Fair</h2>
    
    <p>Among the standout projects was a solar-powered water purification system designed by junior students, which caught the attention of environmental organizations in İzmir. Another impressive entry was an AI-based tutoring assistant created by seniors, which uses machine learning to adapt to individual learning styles.</p>
    
    <blockquote>"The creativity and technical sophistication of this year's projects truly amazed us. Our students are ready to tackle real-world challenges." — Science Department Head</blockquote>
    
    <p>The fair concluded with an awards ceremony where the top three projects in each category received recognition and prizes including university scholarships and internship opportunities.</p>`,
    category: "events",
    author: "Ekin Şahin",
    publishDate: "2026-01-10",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop",
    featured: true,
    editorsPick: true
  },
  {
    id: "2",
    title: "Basketball Team Secures Regional Championship Title",
    excerpt: "Our varsity basketball team delivered an outstanding performance, claiming the regional title after an intense final match against Karşıyaka Lisesi.",
    content: `<p>In a thrilling conclusion to the regional basketball championship, Atakent Anatolian High School's varsity team emerged victorious with a final score of 78-72 against longtime rivals Karşıyaka Lisesi.</p>
    
    <p>The match, held at the İzmir Sports Arena, drew a crowd of over 2,000 spectators including students, parents, and alumni cheering passionately for their teams.</p>
    
    <h2>A Season of Excellence</h2>
    
    <p>This championship marks the culmination of an exceptional season where our team maintained an impressive 18-2 record. Coach Ahmet Yılmaz credited the victory to months of rigorous training and the unwavering team spirit.</p>
    
    <p>Team captain Mehmet Kaya scored 24 points in the final, including a crucial three-pointer in the closing minutes that sealed the victory. The team will now advance to the national championships in Ankara next month.</p>`,
    category: "sports",
    author: "Ekin Şahin",
    publishDate: "2026-01-08",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop",
    featured: true,
    editorsPick: false
  },
  {
    id: "3",
    title: "New Robotics Club Launches with State-of-the-Art Equipment",
    excerpt: "Thanks to generous sponsorships, our newly formed Robotics Club begins operations with cutting-edge resources and ambitious goals for national competition.",
    content: `<p>Atakent Anatolian High School proudly announces the launch of its new Robotics Club, equipped with state-of-the-art technology including 3D printers, Arduino kits, and professional-grade robotics platforms.</p>
    
    <p>The club, established through partnerships with local technology companies and alumni donations, aims to prepare students for national robotics competitions and foster interest in STEM careers.</p>
    
    <h2>Getting Started</h2>
    
    <p>Weekly meetings will be held every Wednesday and Friday afternoon in the newly renovated Technology Lab. Students of all skill levels are welcome to join, with experienced members and faculty advisors providing mentorship for beginners.</p>
    
    <p>The club's first major project will be designing a robot for the National Robotics Olympiad, with preliminary rounds scheduled for March.</p>`,
    category: "clubs",
    author: "Ekin Şahin",
    publishDate: "2026-01-06",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
    featured: false,
    editorsPick: true
  },
  {
    id: "4",
    title: "Annual Theater Production 'Hamlet' Receives Standing Ovation",
    excerpt: "The Drama Club's ambitious production of Shakespeare's classic tragedy captivated audiences over three sold-out performances.",
    content: `<p>The Drama Club's rendition of Shakespeare's "Hamlet" proved to be a resounding success, with all three performances selling out and receiving standing ovations from impressed audiences.</p>
    
    <p>Director and Drama Teacher Zeynep Hanım guided the student cast through months of rehearsals, resulting in a production that many compared favorably to professional theater.</p>
    
    <h2>Behind the Scenes</h2>
    
    <p>The production involved over 50 students including actors, stage crew, costume designers, and lighting technicians. The elaborate sets were designed and built by Art Club members, showcasing the collaborative spirit of our school community.</p>
    
    <blockquote>"Theater teaches students not just about performance, but about teamwork, discipline, and the power of storytelling." — Drama Club Director</blockquote>`,
    category: "culture",
    author: "Ekin Şahin",
    publishDate: "2026-01-04",
    imageUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&auto=format&fit=crop",
    featured: false,
    editorsPick: false
  },
  {
    id: "5",
    title: "School Implements New Digital Learning Platform for 2026",
    excerpt: "A comprehensive digital learning ecosystem launches this semester, providing students with personalized learning paths and real-time progress tracking.",
    content: `<p>Starting this semester, Atakent Anatolian High School has fully implemented a new digital learning platform that promises to revolutionize how students engage with their coursework.</p>
    
    <p>The platform, developed in partnership with educational technology experts, offers features including interactive lessons, automated homework submission, video tutorials, and AI-powered study recommendations.</p>
    
    <h2>Key Features</h2>
    
    <p>Students can access all course materials from any device, track their progress across subjects, and receive personalized suggestions for additional resources based on their performance.</p>
    
    <p>Parents will also have access to a dedicated portal where they can monitor their children's academic progress and communicate directly with teachers.</p>`,
    category: "news",
    author: "Ekin Şahin",
    publishDate: "2026-01-02",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop",
    featured: false,
    editorsPick: true
  },
  {
    id: "6",
    title: "Chess Club Members Qualify for National Tournament",
    excerpt: "Three students from our Chess Club have qualified for the National Youth Chess Championship after exceptional performances in regional qualifiers.",
    content: `<p>In a remarkable achievement for our Chess Club, three members—Ayşe Demir, Can Özkan, and Efe Yıldırım—have secured their spots in the National Youth Chess Championship.</p>
    
    <p>The students competed against over 200 participants from across the Aegean Region, demonstrating strategic brilliance and composure under pressure.</p>
    
    <h2>Road to Nationals</h2>
    
    <p>The national tournament will be held in Istanbul in February, where our students will face the best young chess players from across Turkey. The Chess Club is organizing additional training sessions and practice matches to prepare.</p>`,
    category: "clubs",
    author: "Ekin Şahin",
    publishDate: "2025-12-28",
    imageUrl: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&auto=format&fit=crop",
    featured: false,
    editorsPick: false
  },
  {
    id: "7",
    title: "Environmental Initiative: School Goes Plastic-Free",
    excerpt: "As part of our commitment to sustainability, the school has launched a comprehensive plastic-free initiative across all facilities.",
    content: `<p>Atakent Anatolian High School has taken a significant step toward environmental sustainability by implementing a comprehensive plastic-free policy across campus.</p>
    
    <p>The initiative, spearheaded by the Environmental Club and supported by school administration, includes replacing all single-use plastics with biodegradable alternatives and installing water refill stations throughout the building.</p>
    
    <h2>Student-Led Change</h2>
    
    <p>The Environmental Club has been instrumental in raising awareness about plastic pollution and organizing campus clean-up events. Their efforts have inspired neighboring schools to consider similar initiatives.</p>`,
    category: "news",
    author: "Ekin Şahin",
    publishDate: "2025-12-20",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop",
    featured: false,
    editorsPick: false
  },
  {
    id: "8",
    title: "Music Festival Celebrates Student Talent",
    excerpt: "The annual Winter Music Festival featured performances from student bands, solo artists, and the school orchestra in a memorable evening of artistic expression.",
    content: `<p>The Winter Music Festival transformed the school auditorium into a vibrant concert venue, showcasing the incredible musical talent within our student body.</p>
    
    <p>Performances ranged from classical orchestral pieces to contemporary rock and jazz, demonstrating the diverse musical interests and abilities of Atakent students.</p>
    
    <h2>Memorable Performances</h2>
    
    <p>Highlights included the school orchestra's rendition of Vivaldi's Four Seasons, an original composition by junior Deniz Aksu, and energetic performances by student bands that had the audience on their feet.</p>`,
    category: "culture",
    author: "Ekin Şahin",
    publishDate: "2025-12-15",
    imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&auto=format&fit=crop",
    featured: false,
    editorsPick: false
  }
];

// Helper to get articles from local storage or fallback to static data
const getStoredArticles = (): Article[] => {
  try {
    const savedArticles = localStorage.getItem("admin_articles");
    if (savedArticles) {
      return JSON.parse(savedArticles);
    }
  } catch (error) {
    console.error("Error reading from localStorage:", error);
  }
  return articles;
};

export const getArticleById = (id: string): Article | undefined => {
  return getStoredArticles().find(article => article.id === id);
};

export const getArticlesByCategory = (category: string): Article[] => {
  const currentArticles = getStoredArticles();
  if (category === 'all') return currentArticles;
  return currentArticles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): Article[] => {
  return getStoredArticles().filter(article => article.featured);
};

export const getEditorsPickArticles = (): Article[] => {
  return getStoredArticles().filter(article => article.editorsPick);
};

export const getLatestArticles = (count: number = 6): Article[] => {
  return [...getStoredArticles()]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count);
};
