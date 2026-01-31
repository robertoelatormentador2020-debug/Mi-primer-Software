
export interface MayaProfile {
  kin: number;
  tone: number;
  seal: string;
  nahual: string;
  tonal: string;
  description: string;
  symbolism: string; // Symbolic description of the Solar Seal
  toneMeaning: string; // Interpretation of the Galactic Tone
  synthesis: string; // Combined reading of Seal + Tone + Castle
  affirmations: string[];
  meditation: string;
  practicalExercises: string[];
  chakraConnection?: string;
  castle: {
    name: string;
    color: string;
    phase: string;
    description: string;
  };
  wavespell: {
    name: string;
    kinStart: number;
    position: number; // 1-13
  };
}

export interface RayProfile {
  name: string;
  color: string;
  quality: string;
  description: string;
  archangel: string;
}

export interface PlutoProfile {
  sign: string;
  house: string;
  interpretation: string;
  starseedResonance: string;
}

export interface StarseedProfile {
  origins: string[];
  characteristics: string[];
  soulMission: string;
  pastLifeInsight: string;
  karmicLesson: string;
}

export interface UserData {
  name: string;
  birthDate: string;
  maya?: MayaProfile;
  rays?: RayProfile[];
  starseed?: StarseedProfile;
  pluto?: PlutoProfile;
}

export type AppState = 'onboarding' | 'dashboard' | 'educational' | 'loading';
