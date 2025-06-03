import type { Employee } from "../../store/employee/employee.types";
import baseApi from "../api";
import type { employeeRequest, employeeResponse } from "./types";


export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
        getEmployeeList: builder.query({
	
        query: () => '/employee',
	
        providesTags: ['EMPLOYEES']
	
      }),
      getEmployee: builder.query<employeeRequest,{id:number}>({
	
        query: ({id}) => `/employee/${id}`,
	
        providesTags: ['EMPLOYEE_DETAILS']
	
      }),
     deleteEmployee: builder.mutation<void, { id: number }>({
      query: ({ id }) => ({
        url: `/employee/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['EMPLOYEES'],
    }),
     createEmployee: builder.mutation<employeeRequest,employeeResponse>({
      query: (payload) => ({
        url: '/employee/',
        method: "POST",
        body:payload
      }),
      invalidatesTags: ['EMPLOYEES'],
    }),
      editEmployee: builder.mutation<void,{id:number,payload:employeeRequest}>({
        query: ({payload,id}) => ({
        url: `/employee/${id}`,
        method: "PUT",
        body:payload
      }),
      invalidatesTags: ['EMPLOYEES'],
    })

  })
})

export const { useGetEmployeeListQuery,useGetEmployeeQuery, useDeleteEmployeeMutation,useCreateEmployeeMutation,useEditEmployeeMutation} = employeeApi;