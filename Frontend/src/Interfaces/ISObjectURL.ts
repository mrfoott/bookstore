export interface ISObjectURL {
    baseURL: string,
    endPoint: {
        admin: {
            GET: {
                getAllUser: string,
                getUserById: any
            }
        }
    }
}
