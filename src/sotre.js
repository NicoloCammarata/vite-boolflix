import { reactive } from "vue";

export const store = reactive({
    url: 'https://api.themoviedb.org/3/search/movie?api_key=131abdcb5fd33f160abcf1426cd3a650&query=ritorno+al+futuro',
    films: [],
    searchText: ''
});