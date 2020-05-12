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
    if(res){
        for (var i = 0; i < res.length; i++) {
            json_data.push({
                id: res[i]['id'], language: res[i]['language'], name: res[i]['name'], phone: res[i]['phone'],
                pincode: res[i]['pincode'], address_1: res[i]['address_1'], address_2: res[i]['address_2'], 
                latitude: res[i]['latitude'], longitude: res[i]['longitude'], age: res[i]['age'], 
                gender: res[i]['gender']['text'], temperature: res[i]['temperature']['text'], 
                symptoms: res[i]['symptoms']['text'], additionalSymptoms: res[i]['additionalSymptoms']['text'], 
                exposureHistory: res[i]['exposureHistory']['text'], 
                underlyingConditions: res[i]['underlyingConditions']['text'], 
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