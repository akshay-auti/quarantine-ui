/*
export function someGetter (state) {
}
*/


export const getSymptoms = (state) => {
    return state.symptoms;
};
export const getTemperature = (state) => {
    return state.temperature;
};
export const getAdditional = (state) => {
    return state.additionalSymptoms;
};
export const getDistrict = (state) => {
    return state.district;
};
export const getGender = (state) => {
    return state.gender;
};
export const getRisk = (state) => {
    return state.risk;
};
export const getExposure = (state) => {
    return state.exposure;
};
export const getUnderlying = (state) => {
    return state.underlying;
};
export const getProgress = (state) => {
    return state.progress;
};

export const getTotalQuizes = (state) => {
    return state.quizes.count;
};

export const getLowRisk = (state) => {
    // console.log("low---------", state.quizes.low)
    // var t = state.quizes.results.filter(elem => {return elem.risk === 'low';});
    // return state.quizes.low;
    // var t = state.quizes.filter(elem => {
    //     return elem.risk === 'low';
    // });
    return state.quizes.low;
};

export const getMediumRisk = (state) => {
    // var t = state.quizes.filter(elem => {
    //     return elem.risk === 'medium';
    // });
    // var t = state.quizes.results.filter(elem => {return elem.risk === 'medium';});
    return state.quizes.medium;
};

export const getHighRisk = (state) => {
    // var t = state.quizes.filter(elem => {
    //     return elem.risk === 'high';
    // });
    // var t = state.quizes.results.filter(elem => {return elem.risk === 'high';});
    return state.quizes.high;
};

export const getTableData = (state) => {
    return Object.freeze(state.quizes.results)
    // return state.quizes.results;
};

export const getCSVData = (state) => {
    var json_data = [];
    var res = state.quizes.results;
    for (var i = 0; i < res.length; i++) {
        var id = res[i]['id'];
        var language = res[i]['language']
        var name = res[i]['name']
        var phone= res[i]['phone']
        var pincode = res[i]['pincode']
        var address_1= res[i]['address_1']
        var address_2= res[i]['address_2']
        var latitude= res[i]['latitude']
        var longitude= res[i]['longitude']
        var age = res[i]['age']
        var gender = res[i]['gender']['text']
        var temperature = res[i]['temperature']['text']
        var symptoms = res[i]['symptoms']['text']
        var additionalSymptoms = res[i]['additionalSymptoms']['text']
        var exposureHistory = res[i]['exposureHistory']['text']
        var underlyingConditions = res[i]['underlyingConditions']['text']
        var progress = res[i]['progress']['text']
        var risk = res[i]['risk']
        var timestamp = res[i]['timestamp']
        json_data.push({id: id, language: language, name: name, phone: phone, 
            pincode: pincode, address_1: address_1, address_2:address_2, latitude: latitude, 
            longitude: longitude, age: age, gender: gender, temperature: temperature, symptoms: symptoms, 
            additionalSymptoms: additionalSymptoms, exposureHistory: exposureHistory, 
            underlyingConditions: underlyingConditions, progress: progress, risk: risk, timestamp: timestamp})
    }
    return json_data;
};