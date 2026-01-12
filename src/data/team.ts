export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Ekin Şahin",
    role: "Writer & Founder",
    bio: "Passionate about journalism and storytelling, Ekin founded Voice of AAL to give students a platform for their voices. She leads the editorial direction and contributes articles across all categories.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&facepad=2"
  },
  {
    id: "2",
    name: "Musa Öztürk",
    role: "Advisory Teacher",
    bio: "With years of experience in education and media, Musa Öztürk guides the Voice of AAL team with wisdom and expertise, ensuring journalistic standards while nurturing student creativity.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&facepad=2"
  },
  {
    id: "3",
    name: "Yusuf Mert Öksüzler",
    role: "IT Member",
    bio: "The technical backbone of Voice of AAL, Yusuf Mert ensures the website runs smoothly and securely. His expertise in web development keeps our digital presence cutting-edge.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&facepad=2"
  }
];
