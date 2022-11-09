import { ISObjectURL } from "../Interfaces/ISObjectURL"
export const requestURL: ISObjectURL = {
    baseURL: `http://localhost:8080/`,
    endPoint: {
        admin: {
            GET: {
                getAllUser: `/api/admin/getalluser`,
                getUserById: (id: number) => {
                    `/api/admin/getuser/${id}`
                },
            }
        }
    }
}
