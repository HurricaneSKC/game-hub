import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '1c0177713fbc4176b358612a3952ef80'
  }
})
