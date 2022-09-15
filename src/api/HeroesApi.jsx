import axios from 'axios';

const baseURL = 'https://api-superheroes-sgj.herokuapp.com/';

const heroesApi = axios.create({ baseURL });

export default heroesApi;