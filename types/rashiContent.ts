interface RashiContent {
  [key: string]: {
    dateRange: string;
    element: string;
    quality: string;
    overview: string;
    positiveTraits: string[];
    challenges: string[];
    loveLife: string;
    compatibleSigns: string[];
    career: string;
    recommendedCareers: string[];
    health: string;
    healthStrengths: string[];
    healthConcerns: string[];
    ruling: {
      planet: string;
      stone: string;
      color: string;
      day: string;
    };
  };
}

const rashiContent: RashiContent = {
  'Aries': {
    dateRange: 'March 21 - April 19',
    element: 'Fire',
    quality: 'Cardinal',
    overview: 'Aries is the first sign of the zodiac, represented by the Ram. Natural leaders, they are energetic, dynamic, and confident pioneers who are not afraid to venture into unknown territory.',
    positiveTraits: [
      'Natural born leader',
      'Energetic and dynamic',
      'Courageous and adventurous',
      'Optimistic and enthusiastic',
      'Direct and straightforward'
    ],
    challenges: [
      'Can be impulsive and impatient',
      'May come across as aggressive',
      'Tendency to leave projects unfinished',
      'Can be self-centered at times',
      'Might act before thinking'
    ],
    loveLife: 'In love, Aries is passionate and direct. They pursue their love interests with enthusiasm and are not afraid to take the initiative. They seek partners who can match their energy and independence.',
    compatibleSigns: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
    career: 'Aries excels in careers that allow them to take charge, initiate projects, and demonstrate their leadership abilities. They thrive in dynamic environments and enjoy challenges.',
    recommendedCareers: [
      'Entrepreneur',
      'Sales Executive',
      'Athletic Trainer',
      'Military Officer',
      'Marketing Director',
      'Emergency Response Worker'
    ],
    health: 'Aries rules the head and brain. They typically have high energy levels and strong physical constitution, but need to be mindful of headaches and potential head injuries.',
    healthStrengths: [
      'High energy levels',
      'Quick recovery from illness',
      'Strong immune system',
      'Natural athleticism',
      'Good physical endurance'
    ],
    healthConcerns: [
      'Prone to headaches',
      'Risk of head injuries',
      'Stress-related issues',
      'Insomnia due to overactivity',
      'Tendency to burn out'
    ],
    ruling: {
      planet: 'Mars',
      stone: 'Diamond',
      color: 'Red',
      day: 'Tuesday'
    }
  },
  'Taurus': {
    dateRange: 'April 20 - May 20',
    element: 'Earth',
    quality: 'Fixed',
    overview: "Taurus is the second sign of the zodiac, symbolized by the Bull. They are known for their stability, reliability, and appreciation for life's pleasures. Patient and determined, Taureans have a strong connection to the material world and value security.",
    positiveTraits: [
      'Reliable and dependable',
      'Patient and determined',
      'Practical and grounded',
      'Appreciative of beauty',
      'Loyal and devoted'
    ],
    challenges: [
      'Can be stubborn and inflexible',
      'May be resistant to change',
      'Sometimes possessive',
      'Can be materialistic',
      'May be too comfort-seeking'
    ],
    loveLife: 'In matters of the heart, Taurus is romantic and sensual. They seek stable, long-term relationships and value physical touch and emotional security. Once committed, they are deeply loyal and devoted partners.',
    compatibleSigns: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
    career: 'Taurus excels in careers that require patience, reliability, and attention to detail. They have a natural talent for managing resources and creating tangible results.',
    recommendedCareers: [
      'Financial Advisor',
      'Chef or Restaurant Owner',
      'Real Estate Agent',
      'Artist or Designer',
      'Banker',
      'Agricultural Specialist'
    ],
    health: 'Taurus rules the throat, neck, and thyroid gland. They typically have good physical stamina and a strong constitution, but need to be mindful of overindulgence and maintaining regular exercise.',
    healthStrengths: [
      'Strong physical stamina',
      'Good immune system',
      'Natural healing abilities',
      'Regular sleeping patterns',
      'Steady energy levels'
    ],
    healthConcerns: [
      'Throat issues',
      'Weight management',
      'Stiff neck and shoulders',
      'Thyroid problems',
      'Tendency to overindulge'
    ],
    ruling: {
      planet: 'Venus',
      stone: 'Emerald',
      color: 'Green',
      day: 'Friday'
    }
  },
  'Gemini': {
    dateRange: 'May 21 - June 20',
    element: 'Air',
    quality: 'Mutable',
    overview: 'Gemini, the third sign of the zodiac, is represented by the Twins. They are versatile, intellectual, and communicative. Natural multitaskers, Geminis are curious about everything and everyone around them.',
    positiveTraits: [
      'Excellent communicators',
      'Quick-witted and intelligent',
      'Adaptable and versatile',
      'Curious and eager to learn',
      'Socially outgoing'
    ],
    challenges: [
      'Can be inconsistent',
      'May seem superficial',
      'Tendency to scatter energy',
      'Can be restless',
      'Sometimes indecisive'
    ],
    loveLife: 'Geminis are playful and intellectually stimulating in relationships. They need mental connection and variety in their love life. Communication is key for them, and they seek partners who can keep up with their quick minds.',
    compatibleSigns: ['Libra', 'Aquarius', 'Aries', 'Leo'],
    career: 'Gemini thrives in careers that involve communication, multitasking, and continuous learning. Their adaptability makes them excellent in fast-paced environments.',
    recommendedCareers: [
      'Journalist',
      'Public Relations Specialist',
      'Teacher',
      'Social Media Manager',
      'Sales Representative',
      'Writer or Blogger'
    ],
    health: 'Gemini rules the lungs, arms, shoulders, and nervous system. They need to balance their mental activity with physical exercise and should pay attention to respiratory health.',
    healthStrengths: [
      'Quick recovery ability',
      'Good coordination',
      'Mental agility',
      'Adaptable metabolism',
      'Natural flexibility'
    ],
    healthConcerns: [
      'Nervous tension',
      'Respiratory issues',
      'Anxiety',
      'Sleep problems',
      'Scattered energy'
    ],
    ruling: {
      planet: 'Mercury',
      stone: 'Pearl',
      color: 'Yellow',
      day: 'Wednesday'
    }
  },
  
    // ... Previous signs (Aries, Taurus, Gemini) remain the same ...
  
    'Cancer': {
      dateRange: 'June 21 - July 22',
      element: 'Water',
      quality: 'Cardinal',
      overview: 'Cancer, the fourth sign of the zodiac, is symbolized by the Crab. They are deeply emotional, intuitive, and protective. Cancerians are known for their nurturing nature and strong connection to home and family.',
      positiveTraits: [
        'Deeply caring and nurturing',
        'Strong intuition',
        'Excellent memory',
        'Protective of loved ones',
        'Creative and imaginative'
      ],
      challenges: [
        'Can be moody',
        'Tendency to be overemotional',
        'May be too attached',
        'Can be oversensitive',
        'Sometimes manipulative'
      ],
      loveLife: 'Cancer is deeply romantic and emotional in relationships. They seek security and emotional depth, offering unwavering loyalty and nurturing care to their partners. Family approval is often important to them.',
      compatibleSigns: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
      career: 'Cancer excels in careers that allow them to use their nurturing abilities and emotional intelligence. They have excellent business instincts and are good at managing resources.',
      recommendedCareers: [
        'Nurse or Healthcare Provider',
        'Teacher',
        'Chef or Restaurant Owner',
        'Real Estate Agent',
        'Counselor or Therapist',
        'Interior Designer'
      ],
      health: 'Cancer rules the chest, breasts, and stomach. They need to pay attention to their emotional well-being as it directly affects their physical health.',
      healthStrengths: [
        'Strong immune system',
        'Good digestion when balanced',
        'Emotional resilience',
        'Natural healing abilities',
        'Intuitive health awareness'
      ],
      healthConcerns: [
        'Digestive issues',
        'Emotional eating',
        'Anxiety and mood swings',
        'Breast health',
        'Water retention'
      ],
      ruling: {
        planet: 'Moon',
        stone: 'Pearl',
        color: 'Silver',
        day: 'Monday'
      }
    },
  
    'Leo': {
      dateRange: 'July 23 - August 22',
      element: 'Fire',
      quality: 'Fixed',
      overview: 'Leo, the fifth sign of the zodiac, is symbolized by the Lion. Natural leaders with a flair for dramatics, Leos are confident, generous, and charismatic. They bring warmth and energy to everything they do.',
      positiveTraits: [
        'Natural leader',
        'Generous and warm-hearted',
        'Creative and dramatic',
        'Confident and ambitious',
        'Loyal and protective'
      ],
      challenges: [
        'Can be egotistical',
        'May be domineering',
        'Tendency to be dramatic',
        'Sometimes lazy',
        'Need for constant attention'
      ],
      loveLife: 'Leos are passionate and romantic partners who love grand gestures. They seek admiration and loyalty in relationships, offering warmth, protection, and excitement to their partners.',
      compatibleSigns: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
      career: 'Leo thrives in positions of leadership and where they can showcase their creativity. They excel in careers that put them in the spotlight.',
      recommendedCareers: [
        'Actor or Entertainer',
        'Executive or Manager',
        'Fashion Designer',
        'Teacher',
        'Sales Director',
        'Event Planner'
      ],
      health: 'Leo rules the heart, spine, and back. They generally have strong vitality but need to balance their energy output.',
      healthStrengths: [
        'Strong vitality',
        'Good circulation',
        'Quick recovery',
        'Strong immune system',
        'Natural athleticism'
      ],
      healthConcerns: [
        'Heart health',
        'Back problems',
        'High blood pressure',
        'Eye strain',
        'Stress from overexertion'
      ],
      ruling: {
        planet: 'Sun',
        stone: 'Ruby',
        color: 'Gold',
        day: 'Sunday'
      }
    },
  
    'Virgo': {
      dateRange: 'August 23 - September 22',
      element: 'Earth',
      quality: 'Mutable',
      overview: 'Virgo, the sixth sign of the zodiac, is symbolized by the Virgin or Maiden. They are analytical, practical, and detail-oriented. Virgos have a deep sense of humanity and a strong desire to help others.',
      positiveTraits: [
        'Analytical and intelligent',
        'Practical and reliable',
        'Detail-oriented',
        'Hardworking and dedicated',
        'Health-conscious'
      ],
      challenges: [
        'Can be overly critical',
        'Tendency to worry',
        'Perfectionist nature',
        'Can be too analytical',
        'Sometimes inflexible'
      ],
      loveLife: 'Virgos are attentive and devoted in relationships. They show love through acts of service and practical care. They seek partners who appreciate their attention to detail and share their values for self-improvement.',
      compatibleSigns: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
      career: 'Virgo excels in careers that require attention to detail, analysis, and problem-solving. They are natural organizers and excel in service-oriented professions.',
      recommendedCareers: [
        'Healthcare Professional',
        'Editor or Writer',
        'Data Analyst',
        'Nutritionist',
        'Project Manager',
        'Quality Control Specialist'
      ],
      health: 'Virgo rules the digestive system and intestines. They are naturally health-conscious but can be prone to worry-related health issues.',
      healthStrengths: [
        'Health awareness',
        'Good dietary habits',
        'Regular exercise routine',
        'Attention to hygiene',
        'Systematic approach to health'
      ],
      healthConcerns: [
        'Digestive issues',
        'Nervous tension',
        'Stress-related problems',
        'Food sensitivities',
        'Overthinking affecting health'
      ],
      ruling: {
        planet: 'Mercury',
        stone: 'Sapphire',
        color: 'Navy Blue',
        day: 'Wednesday'
      }
    },

    

      
        'Libra': {
          dateRange: 'September 23 - October 22',
          element: 'Air',
          quality: 'Cardinal',
          overview: 'Libra, the seventh sign of the zodiac, is symbolized by the Scales. They are diplomatic, fair-minded, and seek balance in all things. Librans are known for their charm, grace, and desire for harmony.',
          positiveTraits: [
            'Diplomatic and fair-minded',
            'Romantic and charming',
            'Idealistic and peaceful',
            'Social and cooperative',
            'Graceful and elegant'
          ],
          challenges: [
            'Indecisive nature',
            'Can be people-pleasing',
            'Avoids confrontation',
            'Sometimes superficial',
            'Tendency to procrastinate'
          ],
          loveLife: 'Libras are romantic and seek harmony in relationships. They value partnership highly and often feel most complete when in a balanced relationship. They are charming partners who prioritize equality and fairness.',
          compatibleSigns: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
          career: 'Libra excels in careers involving diplomacy, creativity, and working with others. They have a natural talent for mediation and bringing people together.',
          recommendedCareers: [
            'Diplomat or Mediator',
            'Interior Designer',
            'Lawyer',
            'Counselor',
            'Art Director',
            'Human Resources Manager'
          ],
          health: 'Libra rules the kidneys, lower back, and skin. They need to maintain balance in their lifestyle and pay attention to their physical and emotional well-being.',
          healthStrengths: [
            'Natural grace in movement',
            'Good skin health',
            'Balance in activities',
            'Social wellness',
            'Stress management through art'
          ],
          healthConcerns: [
            'Lower back issues',
            'Kidney problems',
            'Skin conditions',
            'Decision-related stress',
            'Balance disorders'
          ],
          ruling: {
            planet: 'Venus',
            stone: 'Opal',
            color: 'Pink',
            day: 'Friday'
          }
        },
      
        'Scorpio': {
          dateRange: 'October 23 - November 21',
          element: 'Water',
          quality: 'Fixed',
          overview: "Scorpio, the eighth sign of the zodiac, is symbolized by the Scorpion. They are intense, passionate, and powerful. Scorpios have deep emotional intelligence and an innate understanding of life's mysteries.",
          positiveTraits: [
            'Passionate and determined',
            'Resourceful and brave',
            'Loyal and protective',
            'Deep and intuitive',
            'Magnetic personality'
          ],
          challenges: [
            'Can be jealous and possessive',
            'Tendency to be secretive',
            'Sometimes manipulative',
            'Can hold grudges',
            'Intense emotions'
          ],
          loveLife: 'Scorpios are deeply passionate and intense in relationships. They seek profound emotional and spiritual connections, offering unwavering loyalty and depth to their partnerships.',
          compatibleSigns: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
          career: "Scorpio excels in careers requiring investigation, analysis, and dealing with life's deeper aspects. They have natural leadership abilities and work well in crisis situations.",
          recommendedCareers: [
            'Detective or Investigator',
            'Psychologist',
            'Surgeon',
            'Financial Advisor',
            'Research Scientist',
            'Crisis Manager'
          ],
          health: 'Scorpio rules the reproductive system and elimination organs. They have strong regenerative powers but need to manage their intense energy.',
          healthStrengths: [
            'Strong regenerative abilities',
            'Emotional resilience',
            'Physical endurance',
            'Strong immune system',
            'Natural healing powers'
          ],
          healthConcerns: [
            'Reproductive health',
            'Stress-related issues',
            'Emotional tension',
            'Digestive problems',
            'Obsessive tendencies'
          ],
          ruling: {
            planet: 'Pluto/Mars',
            stone: 'Topaz',
            color: 'Deep Red',
            day: 'Tuesday'
          }
        },
      
        'Sagittarius': {
          dateRange: 'November 22 - December 21',
          element: 'Fire',
          quality: 'Mutable',
          overview: 'Sagittarius, the ninth sign of the zodiac, is symbolized by the Archer. They are optimistic, adventurous, and philosophical. Sagittarians love to explore both physically and mentally.',
          positiveTraits: [
            'Optimistic and enthusiastic',
            'Adventure-loving',
            'Honest and direct',
            'Philosophical and wise',
            'Freedom-loving'
          ],
          challenges: [
            'Can be tactless',
            'Restless nature',
            'Sometimes irresponsible',
            'May promise more than can deliver',
            'Fear of commitment'
          ],
          loveLife: 'Sagittarians seek adventure and growth in relationships. They value honesty and independence, offering enthusiasm and philosophical depth to their partnerships.',
          compatibleSigns: ['Aries', 'Leo', 'Libra', 'Aquarius'],
          career: 'Sagittarius excels in careers involving travel, teaching, and expanding horizons. They work well in dynamic environments that offer variety and independence.',
          recommendedCareers: [
            'Travel Writer',
            'Professor',
            'International Business',
            'Sports Coach',
            'Publisher',
            'Motivational Speaker'
          ],
          health: 'Sagittarius rules the hips, thighs, and liver. They have natural athletic ability but need to avoid excess and maintain regular exercise.',
          healthStrengths: [
            'Natural athleticism',
            'High energy levels',
            'Quick recovery',
            'Positive outlook benefits health',
            'Love of outdoor activities'
          ],
          healthConcerns: [
            'Hip problems',
            'Liver issues',
            'Sports injuries',
            'Restlessness',
            'Tendency to overdo'
          ],
          ruling: {
            planet: 'Jupiter',
            stone: 'Turquoise',
            color: 'Purple',
            day: 'Thursday'
          }
        },
      
        'Capricorn': {
          dateRange: 'December 22 - January 19',
          element: 'Earth',
          quality: 'Cardinal',
          overview: 'Capricorn, the tenth sign of the zodiac, is symbolized by the Sea-Goat. They are ambitious, disciplined, and patient. Capricorns are natural managers with a strong sense of responsibility.',
          positiveTraits: [
            'Ambitious and determined',
            'Practical and responsible',
            'Patient and persistent',
            'Disciplined and organized',
            'Traditional and reliable'
          ],
          challenges: [
            'Can be too serious',
            'Sometimes pessimistic',
            'May be too rigid',
            'Workaholic tendencies',
            'Can be status-conscious'
          ],
          loveLife: 'Capricorns are loyal and committed in relationships. They take romance seriously and seek stable, long-term partnerships that align with their life goals.',
          compatibleSigns: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
          career: 'Capricorn excels in careers requiring management, organization, and long-term planning. They have natural business acumen and leadership abilities.',
          recommendedCareers: [
            'CEO or Manager',
            'Accountant',
            'Architect',
            'Government Official',
            'Business Owner',
            'Financial Advisor'
          ],
          health: 'Capricorn rules the bones, joints, and skin. They need to maintain good posture and ensure adequate rest from their work-focused lifestyle.',
          healthStrengths: [
            'Strong constitution',
            'Good stamina',
            'Disciplined health habits',
            'Stress resilience',
            'Aging gracefully'
          ],
          healthConcerns: [
            'Joint problems',
            'Bone health',
            'Skin issues',
            'Work-related stress',
            'Dental concerns'
          ],
          ruling: {
            planet: 'Saturn',
            stone: 'Garnet',
            color: 'Brown',
            day: 'Saturday'
          }
        },
      
        'Aquarius': {
          dateRange: 'January 20 - February 18',
          element: 'Air',
          quality: 'Fixed',
          overview: 'Aquarius, the eleventh sign of the zodiac, is symbolized by the Water Bearer. They are innovative, progressive, and humanitarian. Aquarians are known for their original thinking and social consciousness.',
          positiveTraits: [
            'Innovative and original',
            'Humanitarian and progressive',
            'Independent and intellectual',
            'Friendly and social',
            'Forward-thinking'
          ],
          challenges: [
            'Can be emotionally detached',
            'Sometimes eccentric',
            'May be unpredictable',
            'Tendency to rebel',
            'Can be aloof'
          ],
          loveLife: 'Aquarians seek intellectual connection and friendship in relationships. They value independence and uniqueness, offering originality and stimulating conversation to their partners.',
          compatibleSigns: ['Gemini', 'Libra', 'Sagittarius', 'Aries'],
          career: 'Aquarius excels in careers involving technology, social causes, and innovation. They work well in group settings and are natural problem-solvers.',
          recommendedCareers: [
            'Technology Developer',
            'Social Activist',
            'Scientist',
            'Humanitarian Worker',
            'Inventor',
            'Environmental Scientist'
          ],
          health: 'Aquarius rules the circulatory system and ankles. They need to balance their mental activity with physical exercise and maintain good circulation.',
          healthStrengths: [
            'Quick nervous system',
            'Good circulation',
            'Mental agility',
            'Resistance to illness',
            'Adaptable metabolism'
          ],
          healthConcerns: [
            'Ankle problems',
            'Circulation issues',
            'Nervous tension',
            'Stress from overthinking',
            'Variable energy levels'
          ],
          ruling: {
            planet: 'Uranus/Saturn',
            stone: 'Amethyst',
            color: 'Electric Blue',
            day: 'Saturday'
          }
        },
      
        'Pisces': {
          dateRange: 'February 19 - March 20',
          element: 'Water',
          quality: 'Mutable',
          overview: 'Pisces, the twelfth and final sign of the zodiac, is symbolized by the Fish. They are intuitive, artistic, and deeply empathetic. Pisceans have a strong connection to the spiritual and emotional realms.',
          positiveTraits: [
            'Compassionate and empathetic',
            'Artistic and creative',
            'Intuitive and psychic',
            'Gentle and adaptable',
            'Musical and romantic'
          ],
          challenges: [
            'Can be escapist',
            'Sometimes oversensitive',
            'May be unrealistic',
            'Tendency to be victim-like',
            'Can be easily influenced'
          ],
          loveLife: 'Pisces are romantic and dreamy in relationships. They seek spiritual and emotional connection, offering deep understanding and unconditional love to their partners.',
          compatibleSigns: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
          career: 'Pisces excels in careers involving creativity, healing, and spirituality. They have natural artistic abilities and work well in helping professions.',
          recommendedCareers: [
            'Artist or Musician',
            'Counselor or Therapist',
            'Nurse or Healer',
            'Photographer',
            'Social Worker',
            'Marine Biologist'
          ],
          health: 'Pisces rules the feet and lymphatic system. They need to maintain emotional balance and pay attention to their immune system.',
          healthStrengths: [
            'Natural healing ability',
            'Emotional awareness',
            'Flexible body',
            'Good immune system when balanced',
            'Responsive to alternative healing'
          ],
          healthConcerns: [
            'Foot problems',
            'Immune system issues',
            'Emotional health',
            'Sleep disorders',
            'Addiction tendencies'
          ],
          ruling: {
            planet: 'Neptune/Jupiter',
            stone: 'Aquamarine',
            color: 'Sea Green',
            day: 'Thursday'
          }
        }
      
  

  
};

// Helper functions to get specific content
export function getDateRange(rashiName: string): string {
  return rashiContent[rashiName]?.dateRange || '';
}

export function getElement(rashiName: string): string {
  return rashiContent[rashiName]?.element || '';
}

export function getQuality(rashiName: string): string {
  return rashiContent[rashiName]?.quality || '';
}

export function getOverview(rashiName: string): string {
  return rashiContent[rashiName]?.overview || '';
}

export function getPositiveTraits(rashiName: string): string[] {
  return rashiContent[rashiName]?.positiveTraits || [];
}

export function getChallenges(rashiName: string): string[] {
  return rashiContent[rashiName]?.challenges || [];
}

export function getLoveLife(rashiName: string): string {
  return rashiContent[rashiName]?.loveLife || '';
}

export function getCompatibleSigns(rashiName: string): string[] {
  return rashiContent[rashiName]?.compatibleSigns || [];
}

export function getCareer(rashiName: string): string {
  return rashiContent[rashiName]?.career || '';
}

export function getRecommendedCareers(rashiName: string): string[] {
  return rashiContent[rashiName]?.recommendedCareers || [];
}

export function getHealth(rashiName: string): string {
  return rashiContent[rashiName]?.health || '';
}

export function getHealthStrengths(rashiName: string): string[] {
  return rashiContent[rashiName]?.healthStrengths || [];
}

export function getHealthConcerns(rashiName: string): string[] {
  return rashiContent[rashiName]?.healthConcerns || [];
}

export function getRulingInfo(rashiName: string): {
  planet: string;
  stone: string;
  color: string;
  day: string;
} {
  return rashiContent[rashiName]?.ruling || {
    planet: '',
    stone: '',
    color: '',
    day: ''
  };
}

export default rashiContent;
