/*
export function someGetter (state) {
}
*/


export const getSymptoms = (state) => {
    return state.options.symptoms ? state.options.symptoms.choices : [];
};
export const getTemperature = (state) => {
    return state.options.temperature ? state.options.temperature.choices : [];
};
export const getAdditional = (state) => {
    return state.options.additionalSymptoms ? state.options.additionalSymptoms.choices : [];
};
export const getDistrict = (state) => {
    return state.district;
};
export const getGender = (state) => {
    return state.options.gender ? state.options.gender.choices : [];
};
export const getRisk = (state) => {
    return state.risk;
};
export const getExposure = (state) => {
    return state.options.exposureHistory ? state.options.exposureHistory.choices : [];
};
export const getUnderlying = (state) => {
    return state.options.underlyingConditions ? state.options.underlyingConditions.choices : [];
};
export const getProgress = (state) => {
    return state.options.progress ? state.options.progress.choices : [];
};
export const getTotalQuizes = (state) => {
    return state.quizes.count;
};
export const getLowRisk = (state) => {
    return state.quizes.low;
};
export const getMediumRisk = (state) => {
    return state.quizes.medium;
};
export const getHighRisk = (state) => {
    return state.quizes.high;
};
export const getTableData = (state) => {
    return Object.freeze(state.quizes.results)
    // return state.quizes.results;
};
export const getCSVData = (state) => {
    var json_data = [];
    var res = state.quizes.results;
    if(res){
        for (var i = 0; i < res.length; i++) {
            var symptomsList = [];
            res[i]['symptoms'].forEach(element => {symptomsList.push(element.text)});
            var additionalSymptomsList = [];
            res[i]['additionalSymptoms'].forEach(element => {additionalSymptomsList.push(element.text)})
            var underlyingConditionsList = [];
            res[i]['underlyingConditions'].forEach(element => {underlyingConditionsList.push(element.text)})
            json_data.push({
                id: res[i]['id'], language: res[i]['language'], name: res[i]['name'], phone: res[i]['phone'],
                pincode: res[i]['pincode'], address: res[i]['address'], 
                latitude: res[i]['latitude'], longitude: res[i]['longitude'], age: res[i]['age'], 
                gender: res[i]['gender']['text'], temperature: res[i]['temperature']['text'], 
                symptoms: symptomsList, 
                additionalSymptoms: additionalSymptomsList, 
                exposureHistory: res[i]['exposureHistory']['text'], 
                underlyingConditions: underlyingConditionsList, 
                progress: res[i]['progress']['text'], risk: res[i]['risk'], timestamp: res[i]['timestamp'],
                taluka: res[i]['taluk'] ? res[i]['taluk']['name'] : '', 
                district: res[i]['taluk'] ? res[i]['taluk']['district']['name'] : ''
            })
        }
    }
    return json_data;
};
export const getNextTableData = (state) => {
    return state.quizes.next;
};
export const getPreviousTableData = (state) => {
    return state.quizes.previous;
};
export const getLoginStatus = (state) => {
    return state.loggedIn;
};