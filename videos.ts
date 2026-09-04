export interface Comment {
  id: string;
  user: string;
  avatar: string;
  text: string;
  timeAgo: string;
  likes: number;
}

export interface Video {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  category: 'Cute Laughs' | 'Clumsy Steps' | 'Baby vs Pets' | 'Dancing Babies' | 'Funny Expressions' | 'Food Fail';
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
  views: number;
  likes: number;
  laughsCount: number;
  uploadedAgo: string;
  tags: string[];
  comments: Comment[];
  isFeatured?: boolean;
}

export interface SoundEffect {
  id: string;
  title: string;
  hindiTitle: string;
  emoji: string;
  type: 'gasp' | 'giggle' | 'sneeze' | 'boing' | 'aww' | 'cry_laugh' | 'babble';
  color: string;
}

export interface MemeTemplate {
  id: string;
  title: string;
  imageUrl: string;
  defaultTopText: string;
  defaultBottomText: string;
}

export const CATEGORIES = [
  'All',
  'Cute Laughs',
  'Clumsy Steps',
  'Baby vs Pets',
  'Dancing Babies',
  'Funny Expressions',
  'Food Fail',
] as const;

export const SOUND_EFFECTS: SoundEffect[] = [
  { id: '1', title: 'Baby Giggle', hindiTitle: 'छोटे बच्चे की हंसी', emoji: '😂', type: 'giggle', color: 'from-pink-400 to-rose-500' },
  { id: '2', title: 'Cute Sneeze', hindiTitle: 'क्यूटी छींक', emoji: '🤧', type: 'sneeze', color: 'from-amber-400 to-orange-500' },
  { id: '3', title: 'Boing Effect', hindiTitle: 'बोइंग साउंड', emoji: '⚽', type: 'boing', color: 'from-emerald-400 to-teal-500' },
  { id: '4', title: 'Awww Moment', hindiTitle: 'अॉॉव सो क्यूट', emoji: '😍', type: 'aww', color: 'from-purple-400 to-indigo-500' },
  { id: '5', title: 'Baby Babble', hindiTitle: 'तुतलाना बातचीत', emoji: '🍼', type: 'babble', color: 'from-blue-400 to-cyan-500' },
  { id: '6', title: 'Super Laugh', hindiTitle: 'ठहाकेदार हंसी', emoji: '😆', type: 'cry_laugh', color: 'from-yellow-400 to-amber-500' },
];

export const MEME_TEMPLATES: MemeTemplate[] = [
  {
    id: 'meme-1',
    title: 'Surprised Baby',
    imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
    defaultTopText: 'Jab Mummy phone le leti hai',
    defaultBottomText: 'Par passcode wrong nikla! 😈',
  },
  {
    id: 'meme-2',
    title: 'Dancing Kid',
    imageUrl: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=80',
    defaultTopText: 'When shaadi me favorite gane par',
    defaultBottomText: 'DJ wala song play kare! 🕺💃',
  },
  {
    id: 'meme-3',
    title: 'Messy Eating Baby',
    imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    defaultTopText: 'Mummy said: Khana shanti se khao',
    defaultBottomText: 'Me applying sauce like face cream! 🍝',
  },
  {
    id: 'meme-4',
    title: 'Boss Baby Stare',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80',
    defaultTopText: 'Jab koi bole: "Chota bacha hai samajh nhi aayega"',
    defaultBottomText: 'Me planning world domination! 👑',
  },
];

export const MOCK_VIDEOS: Video[] = [
  {
    id: 'v1',
    title: 'Baby Giggles at Sneeze Pretend Game!',
    hindiTitle: 'मम्मी की नकली छींक पर बच्चे की अनस्टॉपेबल हंसी! 🤣',
    description: 'Every time mom pretends to sneeze, this 8-month-old baby goes into uncontrolled fit of cute giggles!',
    category: 'Cute Laughs',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
    duration: '0:45',
    views: 125400,
    likes: 18450,
    laughsCount: 34200,
    uploadedAgo: '2 hours ago',
    tags: ['cute', 'giggle', 'baby', 'funny', 'mummy'],
    isFeatured: true,
    comments: [
      { id: 'c1', user: 'Priya Sharma', avatar: '👩', text: 'Yeh video dekh kar din ban gaya! 💖', timeAgo: '1 hour ago', likes: 42 },
      { id: 'c2', user: 'Rahul Verma', avatar: '👨', text: 'So cute! Pure innocent laugh 😭', timeAgo: '30 mins ago', likes: 19 },
    ]
  },
  {
    id: 'v2',
    title: 'Toddler vs First Time Walking on Grass',
    hindiTitle: 'घास पर पहली बार चलने का गजब का ड्रामा! 🌿👣',
    description: 'Watch how this cute baby thinks grass is molten lava! High level dramatic walking skills.',
    category: 'Clumsy Steps',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=80',
    duration: '1:12',
    views: 98300,
    likes: 14200,
    laughsCount: 22100,
    uploadedAgo: '5 hours ago',
    tags: ['firststeps', 'walking', 'grass', 'drama'],
    isFeatured: true,
    comments: [
      { id: 'c3', user: 'Ananya Gupta', avatar: '👩', text: 'Overacting ke 50 rupey kat! Haha so sweet', timeAgo: '3 hours ago', likes: 58 }
    ]
  },
  {
    id: 'v3',
    title: 'Puppy Steals Baby Biscuit - Epic Reaction!',
    hindiTitle: 'कुत्ते ने बिस्किट चुराया, बच्चे की ऐसी शक्ल बन गई! 🐶🍪',
    description: 'The moment golden retriever snatches a biscuit, baby looks at the camera like "Are you seeing this?!"',
    category: 'Baby vs Pets',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80',
    duration: '0:38',
    views: 210900,
    likes: 31000,
    laughsCount: 48900,
    uploadedAgo: '1 day ago',
    tags: ['dog', 'biscuit', 'reaction', 'bestfriends'],
    isFeatured: true,
    comments: [
      { id: 'c4', user: 'Vikram Singh', avatar: '👨', text: 'Both of them deserve Oscars!', timeAgo: '12 hours ago', likes: 104 }
    ]
  },
  {
    id: 'v4',
    title: 'Dancing Baby Showcases Bollywood Beats',
    hindiTitle: 'छोटा बच्चा और ढोल की ताल, डांस देखकर हैरान रह जाओगे! 🥁💃',
    description: 'When wedding dhol starts, 1-year-old Kabir cannot control his feet! Pure swag and rhythm.',
    category: 'Dancing Babies',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    duration: '1:30',
    views: 310500,
    likes: 45200,
    laughsCount: 61000,
    uploadedAgo: '2 days ago',
    tags: ['dance', 'bollywood', 'wedding', 'swag'],
    comments: [
      { id: 'c5', user: 'Sneha Patel', avatar: '👩', text: 'Yeh mera hero banega bada hokar!', timeAgo: '1 day ago', likes: 33 }
    ]
  },
  {
    id: 'v5',
    title: 'Baby Tastes Sour Lemon for the First Time!',
    hindiTitle: 'पहली बार नींबू चखा, एक्सप्रेसन्स देखकर हंसी नहीं रुकेगी! 🍋😜',
    description: 'Shock, confusion, awe, and then asking for another lick! The iconic sour lemon baby face.',
    category: 'Food Fail',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    duration: '0:55',
    views: 189000,
    likes: 27800,
    laughsCount: 41200,
    uploadedAgo: '3 days ago',
    tags: ['lemon', 'sour', 'expressions', 'food'],
    comments: [
      { id: 'c6', user: 'Rohan Mehra', avatar: '👨', text: 'Expression king/queen! 🍋✨', timeAgo: '2 days ago', likes: 21 }
    ]
  },
  {
    id: 'v6',
    title: 'When Daddy Tries to Do Baby Hair Styling!',
    hindiTitle: 'पापा ने बनाए छोटे बच्चे के बाल, नतीजा देखकर मम्मी शॉक्ड! 💇‍♂️',
    description: 'Daddy uses 3 tubs of baby gel and creates dragon spikes. Baby seems super proud of the new look!',
    category: 'Funny Expressions',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
    duration: '1:05',
    views: 142000,
    likes: 19800,
    laughsCount: 29000,
    uploadedAgo: '4 days ago',
    tags: ['daddy', 'hairstyling', 'dragon', 'epic'],
    comments: [
      { id: 'c7', user: 'Kavita Joshi', avatar: '👩', text: 'Papa log hamesha super creative hote hain 😂', timeAgo: '3 days ago', likes: 45 }
    ]
  }
];
