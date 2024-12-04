import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name:"company",
    initialState:{
        singleCompany:null,
        companies:[],
        searchcosetSearchCompanyByText:"",
        searchcompany:"",
   
        
    },
    reducers:{
        // actions
        setSingleCompany:(state,action) => {
            state.singleCompany = action.payload;
        }
        ,
        setCompanies:(state,action) => {
            state.companies = action.payload;
           
        }
        ,
        setSearchCompanyByText:(state,action) => {
            state.searchCompanyByText = action.payload;
        }

        ,
        setSearchedCompany:(state,action) => {
            state.searchcompany = action.payload;
        }


    }
});
export const {setSingleCompany , setCompanies , setSearchCompanyByText , setSearchedCompany} = companySlice.actions;
export default companySlice.reducer;