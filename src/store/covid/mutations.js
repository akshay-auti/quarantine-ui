/*
export function someMutation (state) {
}
*/

export const UPDATE_QUIZ_DATA = (state, payload) => {
    state.quizes = payload;
};