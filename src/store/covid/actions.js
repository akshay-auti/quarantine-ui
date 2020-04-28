/*
export function someAction (context) {
}
*/

import axios from "axios";
import { getTemperature } from "./getters";

const loginUrl = "https://covid-19api.maharashtra.gov.in/api-token-auth/"

// const url = "https://covid-19api.maharashtra.gov.in/api/search/";

// Mapping for drop down fields.
let temperatureMap = new Map();
temperatureMap.set('Don’t know',7);
temperatureMap.set('Fever (98.6°F-102°F)',5);
temperatureMap.set('High Fever (>102°F)',6);
temperatureMap.set('Normal (96°F-98.6°F)',4);

let symptomsMap = new Map();
symptomsMap.set('Dry Cough',8);
symptomsMap.set('Sneezing',9);
symptomsMap.set('Sore Throat',10);
symptomsMap.set('Weakness',11);
symptomsMap.set('None of These',12);

let additionalSymptomsMap = new Map();
additionalSymptomsMap.set('Moderate to Severe Cough',13);
additionalSymptomsMap.set('Feeling Breathless',14);
additionalSymptomsMap.set('Difficulty in Breathing',15);
additionalSymptomsMap.set('Drowsiness',16);
additionalSymptomsMap.set('Persistent Pain and Pressure in Chest',17);
additionalSymptomsMap.set('Severe Weakness',18);
additionalSymptomsMap.set('None of These',19);

let genderMap = new Map();
genderMap.set('Male',1);
genderMap.set('Female',2);
genderMap.set('Others ',3);

let exposureMap = new Map();
exposureMap.set('No Travel History',20);
exposureMap.set('No contact with anyone with Symptoms',21);
exposureMap.set('History of travel or meeting in affected geographical area in last 14 days',22);
exposureMap.set('Close Contact with confirmed COVID in last 14 days',23);

let underlyingMap = new Map();
underlyingMap.set('Diabetes',24);
underlyingMap.set('High Blood Pressure',25);
underlyingMap.set('Heart Disease',26);
underlyingMap.set('Kidney Disease',27);
underlyingMap.set('Lung disease',28);
underlyingMap.set('Stroke',29);
underlyingMap.set('Reduced Immunity',30);
underlyingMap.set('None of These',31);

let progressMap = new Map();
progressMap.set('Improved',32);
progressMap.set('No Change',33);
progressMap.set('Worsened',34);
progressMap.set('Worsened Considerably',35);

const url = (age_gte = '', age_lte = '', from_date = '', to_date = '', temperature = '', symptoms = '', additionalSymptoms = '', gender = '', risk = '',exposureHistory = '', underlyingConditions = '', progress = '') => `https://covid-19api.maharashtra.gov.in/api/search/?age_gte=${age_gte}&age_lte=${age_lte}&from_date=${from_date}&to_date=${to_date}&temperature=${temperature}&symptoms=${symptoms}&additionalSymptoms=${additionalSymptoms}&gender=${gender}&risk=${risk}&exposureHistory=${exposureHistory}&underlyingConditions=${underlyingConditions}&progress=${progress}`

// categoryDetails: (storeUid, sectionSlug, categorySlug) => `${baseUrl}/stores/${storeUid}/sections/${sectionSlug}/categories/${categorySlug}/`,

export const search = ({ commit }, payload) => {
// console.log("-------------sadasdsa",payload);
var fromDate = JSON.stringify(payload.fromDate).slice(1,11);
console.log(payload.fromDate)
var toDate = JSON.stringify(payload.toDate).slice(1,11);

var temperatureId, symptomId, additionalSymptomsId, genderId, exposureID;
var riskId, underlyingId, progressId;

// Get values from payload.
var temperatureDetails = payload.temperature;
var symptomsDetails = payload.symptoms;
var additionalSymptomsDetails = payload.addSymptoms;
var genderDetails = payload.gender;
var exposureDetails = payload.travelHistory;
var riskDetails = payload.risk;
var underlyingDetails = payload.underlying;
var progressDetails = payload.progress;

// Concatenation of Id's separated by comma.
for(var i=0; i< temperatureDetails.length;i++){
var temperature = temperatureDetails[i];
temperatureId = temperatureId != undefined ? temperatureId + ',' + temperatureMap.get(temperature) : temperatureMap.get(temperature);
}

for(var i=0; i< symptomsDetails.length;i++){
var symptom = symptomsDetails[i];
symptomId = symptomId != undefined ? symptomId + ',' + symptomsMap.get(symptom) : symptomsMap.get(symptom);
}

for(var i=0; i< additionalSymptomsDetails.length;i++){
var addSymptom = additionalSymptomsDetails[i];
additionalSymptomsId = additionalSymptomsId != undefined ? additionalSymptomsId + ',' + additionalSymptomsMap.get(addSymptom) : additionalSymptomsMap.get(addSymptom);
}

for(var i=0; i< genderDetails.length;i++){
var gender = genderDetails[i];
genderId = genderId != undefined ? genderId + ',' + genderMap.get(gender) : genderMap.get(gender);
}

for(var i=0; i< exposureDetails.length;i++){
var exposure = exposureDetails[i];
exposureID = exposureID != undefined ? exposureID + ',' + exposureMap.get(exposure) : exposureMap.get(exposure);
}

for(var i=0; i< riskDetails.length;i++){
var risk = riskDetails[i];
riskId = riskId != undefined ? riskId + ',' + risk : risk;
}

for(var i=0; i< underlyingDetails.length;i++){
var underlying = underlyingDetails[i];
underlyingId = underlyingId != undefined ? underlyingId + ',' + underlyingMap.get(underlying) : underlyingMap.get(underlying);
}

for(var i=0; i< progressDetails.length;i++){
var progress = progressDetails[i];
progressId = progressId != undefined ? progressId + ',' + progressMap.get(progress) : progressMap.get(progress);
}

// let search_URL = '';
// if(payload.ageLTE && payload.ageGTE){
// search_URL = `https://covid-19api.maharashtra.gov.in/api/search/?age_gte=${payload.ageGTE}&age_lte=${payload.ageLTE}`
// }
axios
.post(loginUrl, {username: "dashboard", password: "keD6JXiWemGrg5u"})
.then(response => {
const auth = { headers :{Authorization: `Token ${response.data.token}`}};
if(auth){
axios
.get(url(payload.ageGTE ,payload.ageLTE,fromDate,toDate,temperatureId,symptomId,additionalSymptomsId,genderId,riskId,exposureID,underlyingId,progressId), auth)
.then(response => {
commit("UPDATE_QUIZ_DATA", response.data);})
.catch();
}
}).catch(error => console.log(error));
};

export const fetchSuspect = ({ commit }) => {
axios.get(suspect).then(response => {
commit("UPDATE_SUSPECT_DATA", response.data);
});
};