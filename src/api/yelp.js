import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer u0mcwBOd6oyxsR_LwvoT-aiVlFaVIztzaO0pU338OCXgQcdqya5H-YTgrux-kLOwRWFpnOL4tMnlfzqPNEA65RUgZPnjcF5d501-ksWVhSLVhuVYlOXEirUEyRcJYHYx'
    }
});