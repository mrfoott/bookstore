import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "adminSlice_User",
    initialState: {
        state_allUser: {
            status: "",
            data: null
        }
    },
    reducers: {
        getAllUser: {
            getAllUserStart: (state)=> {

            },
            getAllUserSuccessfully: (state, action)=> {

            },
            getAllUserFailed: (state)=> {

            },
        }
    }
})

export const { getAllUser } = user.actions