import axios from 'axios';
import { requestURL } from '../BaseURL/requestURL';

function getAllUser (token: string){
    axios.get(requestURL.baseURL + requestURL.endPoint.admin.GET.getAllUser, {
        headers: {
            token: token,
        }
    }
    ).then((response: any)=> {
        console.log(response);
    })
}
getAllUser()

