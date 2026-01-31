
import React from 'react';

export const MAYA_SEALS = [
  "Dragon", "Wind", "Night", "Seed", "Serpent", "Worldbridger", "Hand", "Star",
  "Moon", "Dog", "Monkey", "Human", "Skywalker", "Wizard", "Eagle", "Warrior",
  "Earth", "Mirror", "Storm", "Sun"
];

export const CASTLES = [
  { name: "Red Eastern Castle", color: "red", phase: "Initiation", range: [1, 52] },
  { name: "White Northern Castle", color: "white", phase: "Refinement", range: [53, 104] },
  { name: "Blue Western Castle", color: "blue", phase: "Transformation", range: [105, 156] },
  { name: "Yellow Southern Castle", color: "yellow", phase: "Maturation", range: [157, 208] },
  { name: "Green Central Castle", color: "green", phase: "Integration", range: [209, 260] }
];

export const TONES = [
  "Magnetic", "Lunar", "Electric", "Self-Existing", "Overtone", "Rhythmic", 
  "Resonant", "Galactic", "Solar", "Planetary", "Spectral", "Crystal", "Cosmic"
];

export const RAYS_DATA = [
  { name: "First Ray", quality: "Will and Power", color: "blue", archangel: "Michael" },
  { name: "Second Ray", quality: "Love and Wisdom", color: "yellow", archangel: "Jophiel" },
  { name: "Third Ray", quality: "Active Intelligence", color: "pink", archangel: "Chamuel" },
  { name: "Fourth Ray", quality: "Purity and Harmony", color: "white", archangel: "Gabriel" },
  { name: "Fifth Ray", quality: "Concrete Knowledge", color: "green", archangel: "Raphael" },
  { name: "Sixth Ray", quality: "Devotion and Idealism", color: "ruby", archangel: "Uriel" },
  { name: "Seventh Ray", quality: "Ceremonial Order and Magic", color: "violet", archangel: "Zadkiel" }
];

// Icons
export const StarIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
  </svg>
);
