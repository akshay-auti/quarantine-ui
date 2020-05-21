/*
export function someAction (context) {
}
*/

import axios from "axios";

const loginUrl = "https://covid-19api.maharashtra.gov.in/api-token-auth/";

const district = "https://covid-19api.maharashtra.gov.in/api/districts/";

const options = "https://covid-19api.maharashtra.gov.in/api/questions/";

// const url = "https://covid-19api.maharashtra.gov.in/api/search/";

const url = (age_gte = '', age_lte = '', from_date = '', to_date = '', temperature = '',
    symptoms = '', additionalSymptoms = '', gender = '', risk = '', exposureHistory = '',
    underlyingConditions = '', progress = '', district = '') =>
    `https://covid-19api.maharashtra.gov.in/api/search/?age_gte=${age_gte}&age_lte=${age_lte}&from_date=${from_date}&to_date=${to_date}&temperature=${temperature}&symptoms=${symptoms}&additionalSymptoms=${additionalSymptoms}&gender=${gender}&risk=${risk}&exposureHistory=${exposureHistory}&underlyingConditions=${underlyingConditions}&progress=${progress}&district=${district}`;

export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
        return {headers: { Authorization: 'Token ' + user }};
    } else {
        return {};
    }
    }

export const login = ({ commit }, cred) => {
    axios.post(loginUrl, cred).then(response => 
    {if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data.token));
    }
    commit("LOGIN_SUCCESS");
    })
}

export const logout = ({ commit }) => {
    localStorage.removeItem('user');
    commit("LOGOUT");
    };

export const search = ({ commit }, payload) => {
    var fromDate = JSON.stringify(payload.fromDate).slice(1, 11);
    var toDate = JSON.stringify(payload.toDate).slice(1, 11);
        axios
            .get(url(payload.ageGTE, payload.ageLTE, fromDate, toDate, payload.temperature,
                payload.symptoms, payload.addSymptoms, payload.gender, payload.risk,
                payload.travelHistory, payload.underlying, payload.progress, payload.district),
                authHeader())
            .then(response => {
                commit("UPDATE_QUIZ_DATA", response.data);
            })
            .catch(error => console.log(error));
    
};

export const fetchSuspect = ({ commit }) => {
    axios.get(suspect).then(response => {
        commit("UPDATE_SUSPECT_DATA", response.data);
    });
};

export const paginationSearch = ({ commit }, paginationURL) => {
    axios
        .post(loginUrl, { username: "dashboard", password: "keD6JXiWemGrg5u" })
        .then(response => {
            const auth = { headers: { Authorization: `Token ${response.data.token}` } };
            if (auth) {
                axios
                    .get(paginationURL, auth)
                    .then(response => {
                        commit("UPDATE_QUIZ_DATA", response.data);
                    })
                    .catch();
            }
        }).catch(error => console.log(error));
};

export const fetchDistrict = ({ commit }) => {
    axios.get(district).then(response => {
        commit("UPDATE_DISTRICT_DATA", response.data);
    });
};

export const fetchOptions = ({ commit }) => {
    axios.get(options).then(response => {
        commit("UPDATE_OPTIONS_DATA", response.data);
    });
};

