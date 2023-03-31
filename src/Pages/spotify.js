import axios from "axios"

const authEndpoint="https://accounts.spotify.com/authorize?"
const clientID="19915306d630419bba891520b21cbb6c"
const redirectUri="http://musicaspotifyplayer.netlify.app"
const scopes=["streaming","user-read-email","user-read-private","user-library-read","user-library-modify","user-read-playback-state","user-modify-playback-state"]

 export const loginEndpoint =`${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialogue=true`


 const apiClient=axios.create({
    baseURL:"https://api.spotify.com/v1",
 })
 
 export const setClientToken= (token) => {
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization ="Bearer " + token
        return config })
    }


    export default apiClient