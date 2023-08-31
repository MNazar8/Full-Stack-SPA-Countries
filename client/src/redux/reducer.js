import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_BY_NAME,
    GET_COUNTRY_DETAIL,
    GET_ACTIVITIES,
    FILTER_BY_CONTINENTS,
    FILTER_BY_ACTIVITIES,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
} from './actionTypes'

const initialState = {
    countries: [],
    activities: [],
    detail: [],
    filteredCountries: []
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: payload,
                filteredCountries: payload
            }

        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                filteredCountries: payload
            }

        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                detail: payload
            }


        case GET_ACTIVITIES:
            return {
                ...state,
                activities: payload
            }

        case FILTER_BY_CONTINENTS:
            const allCountriesFiltered = payload === "All"
                ? state.filteredCountries
                : state.filteredCountries.filter(country => country.continent === payload);
                console.log(allCountriesFiltered);

            return {
                ...state,
                filteredCountries: state.filteredCountries.length > 0 ? allCountriesFiltered : state.countries
            };

        case FILTER_BY_ACTIVITIES:
            const selectedActivity = payload;
            if (selectedActivity === 'All') {
                return {
                    ...state,
                    filteredCountries: state.countries
                };
            } else {
                const allCountriesFilteredByActivity = state.filteredCountries.filter(country => {
                    return country.Activities.some(activity => activity.name === selectedActivity);
                });

                return {
                    ...state,
                    filteredCountries: allCountriesFilteredByActivity
                };
            }

        case ORDER_BY_NAME:
            const orderBy = payload;
            if (orderBy === 'OrderAZ') {
                const countriesByNameAsc = [...state.filteredCountries].sort(function (a, b) {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
                    if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
                    return 0;
                })
                return {
                    ...state,
                    filteredCountries: countriesByNameAsc
                };
            }

            if (orderBy === 'OrderZA') {
                const countriesByNameDes = [...state.filteredCountries].sort(function (a, b) {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) { return 1; }
                    if (a.name.toLowerCase() > b.name.toLowerCase()) { return -1; }
                    return 0;
                });
                return {
                    ...state,
                    filteredCountries: countriesByNameDes
                };
            }
            break;

        case ORDER_BY_POPULATION:
            const orderByNumber = payload;

            if (orderByNumber === 'Minortomajor') {
                const MinorToMajor = [...state.filteredCountries].sort(function (a, b) {
                    return a.population - b.population;
                })

                return {
                    ...state,
                    filteredCountries: MinorToMajor
                };
            }

            if (orderByNumber === 'MajortoMinor') {
                const MajorToMinor = [...state.filteredCountries].sort(function (a, b) {
                    return b.population - a.population;
                })

                return {
                    ...state,
                    filteredCountries: MajorToMinor
                };
            }
            break;

        default: return state
    }
}