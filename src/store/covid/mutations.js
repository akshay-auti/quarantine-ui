/*
export function someMutation (state) {
}
*/

export const UPDATE_QUIZ_DATA = (state, payload) => {
    state.quizes = payload;
};

export const UPDATE_DISTRICT_DATA = (state, payload) => {
    state.district = payload;
};