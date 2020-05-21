/*
export function someMutation (state) {
}
*/

export const LOGIN_SUCCESS = (state) => {
    state.loggedIn = true;
    console.log("login sucess----------->",state.loggedIn);
};

export const LOGOUT = (state) => {
    state.loggedIn = false;
};

export const UPDATE_QUIZ_DATA = (state, payload) => {
    state.quizes = payload;
};

export const UPDATE_DISTRICT_DATA = (state, payload) => {
    payload.splice(0,0,{'id': ['1','2','3','4','5','6','7','8','9','10',
                            '11','12','13','14','15','16','17','18','19','20',
                            '21','22','23','24','25','26','27','28','29','30',
                            '31','32','33','34'], 'name': 'All Maharashtra Districts'})
    payload.splice(1,0,{'id': '0', 'name': 'Non Maharashtra districts'})
    state.district = payload;
};

export const UPDATE_OPTIONS_DATA = (state, payload) => {
    state.options = payload.options.english;
};