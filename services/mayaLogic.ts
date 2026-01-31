
import { MAYA_SEALS, CASTLES } from '../constants';

export const calculateMayaKin = (birthDate: string) => {
  const epoch = new Date('1970-01-01').getTime();
  const birth = new Date(birthDate).getTime();
  const diffDays = Math.floor((birth - epoch) / (1000 * 60 * 60 * 24));
  
  let kin = (178 + diffDays) % 260;
  if (kin <= 0) kin += 260;

  const tone = ((kin - 1) % 13) + 1;
  const sealIndex = (kin - 1) % 20;
  const seal = MAYA_SEALS[sealIndex];

  // Castle Logic
  const castleData = CASTLES.find(c => kin >= c.range[0] && kin <= c.range[1]) || CASTLES[4];
  
  // Wavespell Logic
  // A wavespell starts at Tone 1. 
  // If we subtract (tone - 1) from the kin, we find the kin that started the wavespell.
  let wavespellKinStart = kin - (tone - 1);
  if (wavespellKinStart <= 0) wavespellKinStart += 260;
  
  const wavespellSealIndex = (wavespellKinStart - 1) % 20;
  const wavespellName = MAYA_SEALS[wavespellSealIndex];

  return { 
    kin, 
    tone, 
    seal,
    castle: {
      name: castleData.name,
      color: castleData.color,
      phase: castleData.phase,
      description: "" // To be filled by AI
    },
    wavespell: {
      name: wavespellName,
      kinStart: wavespellKinStart,
      position: tone
    }
  };
};
