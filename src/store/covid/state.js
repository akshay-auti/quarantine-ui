export default function () {
  return {
    quizes: [],
    temperature: ["Don’t know",
      "Fever (98.6°F-102°F)",
      "High Fever (>102°F)",
      "Normal (96°F-98.6°F)"],
    symptoms: ["Dry Cough", "Sneezing", "Sore Throat", "Weakness", "None of These"],
    additionalSymptoms: ["Difficulty in Breathing",
      "Drowsiness", "Feeling Breathless",
      "Moderate to Severe Cough", "None of These",
      "Persistent Pain and Pressure in Chest",
      "Severe Weakness"],
    district: [],
    gender: ["Male", "Female", "Others"],
    risk: ["low", "medium", "high"],
    exposure: [
      "Close Contact with confirmed COVID in last 14 days",
      "History of travel or meeting in affected geographical area in last 14 days",
      "No Travel History", "No contact with anyone with Symptoms"
    ],
    underlying: [
      "Diabetes", "Heart Disease", "High Blood Pressure", "Kidney Disease", "Lung disease", "None of These", "Reduced Immunity", "Stroke"
    ],
    progress: ["Improved", "No Change", "Worsened", "Worsened Considerably"]
  };
}
