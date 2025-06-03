import baseApi from "../api";
import type {Department} from "./types";
export const departmentApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        getDepartments:builder.query({
            query:() => '/departments'
                
            }),
            
        })
    })


export const {useGetDepartmentsQuery}=departmentApi;