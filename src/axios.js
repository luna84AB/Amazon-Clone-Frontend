import axios from 'axios'
const instance= axios.create({

    baseURL:' https://us-central1-clone-frontend-d0058.cloudfunctions.net/api',
})
export default instance;

// 'http://127.0.0.1:5001/clone-frontend-d0058/us-central1/api/payments/create?total=...)'