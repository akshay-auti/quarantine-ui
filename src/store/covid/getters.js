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