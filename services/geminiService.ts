
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGalacticSoulPortrait = async (
  name: string,
  birthDate: string,
  mayaInfo: any,
  vocation: string = "Esoteric Programmer"
) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const prompt = `
    Generate a deep multidimensional spiritual and astrological profile for ${name}, born on ${birthDate}.
    Vocation: ${vocation}.
    
    ASTROLOGICAL CONTEXT:
    - Maya Kin: ${mayaInfo.kin} (${mayaInfo.tone} ${mayaInfo.seal}).
    - Castle: ${mayaInfo.castle.name} (${mayaInfo.castle.phase}).
    - Wavespell: ${mayaInfo.wavespell.name}.
    - Pluto Interpretation based on birth date.

    SPECIAL INTERPRETATION (Spectral Night / Akbal 11):
    - Akbal (Night) is the abundance of the inner world, the sanctuary of dreams.
    - Tone 11 (Spectral) is the power of dissolution, liberation, and release.
    - Since the user is an "${vocation}", integrate how they use "code" or "structure" to deprogram old karmic patterns and program new abundance-based realities.

    MAYA INTERPRETATION REQUIREMENTS:
    1. SOLAR SEAL SYMBOLISM: Deep description of ${mayaInfo.seal} as the sanctuary of wisdom and the mystery of the dark.
    2. GALACTIC TONE MEANING: Interpretation of Tone ${mayaInfo.tone} as a force of liberation and simplification.
    3. SYNTHESIS: Specifically mention how being a "${vocation}" allows them to bridge the subconscious (Akbal) with logical liberation (Tone 11).
    4. PRACTICAL APPLICATIONS: 
       - 3 Affirmations (e.g., "I release the codes of scarcity").
       - 1 Guided Meditation theme focusing on the "Cosmic IDE" or inner sanctuary.
       - 2 Practical exercises for "Esoteric Programming" (e.g., rewriting mental scripts).
    5. CONNECTIONS: Third Eye chakra or Soul Star chakra resonance.

    OTHER REQUIREMENTS:
    - Identify Pluto's Sign and House as the root of this "programming" power.
    - Identify multiple Starseed origins (likely Lyra or Sirius B).
    - Akáshic insights: How past lives as architects or scribes inform current coding.

    Return the result in JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            pluto: {
              type: Type.OBJECT,
              properties: {
                sign: { type: Type.STRING },
                house: { type: Type.STRING },
                interpretation: { type: Type.STRING },
                starseedResonance: { type: Type.STRING }
              }
            },
            mayaProfile: {
              type: Type.OBJECT,
              properties: {
                symbolism: { type: Type.STRING },
                toneMeaning: { type: Type.STRING },
                synthesis: { type: Type.STRING },
                nahual: { type: Type.STRING },
                tonal: { type: Type.STRING },
                description: { type: Type.STRING },
                affirmations: { type: Type.ARRAY, items: { type: Type.STRING } },
                meditation: { type: Type.STRING },
                practicalExercises: { type: Type.ARRAY, items: { type: Type.STRING } },
                chakraConnection: { type: Type.STRING },
                castleDescription: { type: Type.STRING }
              }
            },
            wavespellDescription: { type: Type.STRING },
            rays: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  quality: { type: Type.STRING },
                  description: { type: Type.STRING },
                  archangel: { type: Type.STRING },
                  color: { type: Type.STRING }
                }
              }
            },
            starseed: {
              type: Type.OBJECT,
              properties: {
                origins: { type: Type.ARRAY, items: { type: Type.STRING } },
                characteristics: { type: Type.ARRAY, items: { type: Type.STRING } },
                soulMission: { type: Type.STRING },
                pastLifeInsight: { type: Type.STRING },
                karmicLesson: { type: Type.STRING }
              }
            },
            dailyGuidance: { type: Type.STRING }
          },
          required: ["pluto", "mayaProfile", "wavespellDescription", "rays", "starseed", "dailyGuidance"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
