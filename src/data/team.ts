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
    imageUrl: "/team/ekin-sahin.jpg"
  },
  {
    id: "2",
    name: "Musa Öztürk",
    role: "Advisory Teacher",
    bio: "With years of experience in education and media, Musa Öztürk guides the Voice of AAL team with wisdom and expertise, ensuring journalistic standards while nurturing student creativity.",
    imageUrl: "/team/musa-ozturk.jpg"
  },
  {
    id: "3",
    name: "Yusuf Mert Öksüzler",
    role: "IT Member",
    bio: "The technical backbone of Voice of AAL, Yusuf Mert ensures the website runs smoothly and securely. His expertise in web development keeps our digital presence cutting-edge.",
    imageUrl: "/team/yusuf-mert.jpg"
  }
];
