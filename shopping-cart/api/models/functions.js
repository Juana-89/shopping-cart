import axios from 'axios';
 const allProducts = async (state) => {
    const peticion = await axios.get('http://localhost:4000/api/clothing')
    state(peticion.data)
}
export { allProducts }