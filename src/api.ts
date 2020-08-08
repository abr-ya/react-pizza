import axios from 'axios';

export const requestProducts = () => axios.get('http://localhost:8000/products/');
