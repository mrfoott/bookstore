import axios from 'axios';
import { requestURL } from '../BaseURL/requestURL';

export async function getAllUser(token: string, dispatch: any) {
    dispatch()
    try {
        await axios.get(requestURL.baseURL + requestURL.endPoint.admin.GET.getAllUser, {
            headers: {
                token: token,
            }
        }
        ).then((response: any) => {
            console.log(response);
        })
    } catch (error) {
        dispatch()
    }

}

