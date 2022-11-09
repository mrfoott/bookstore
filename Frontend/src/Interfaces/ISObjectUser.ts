export interface ISObjectUser {
    registerUser: {
        email: string,
        phone: string,
        full_name: string,
        password: string,
        address: string
    },
    loginUser: {
        email: string,
        password: string,
    },
    
}
