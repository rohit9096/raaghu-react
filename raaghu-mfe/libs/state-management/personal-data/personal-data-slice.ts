import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GdprRequestService, PlanAdminService } from "../../proxy";

type InitialState = {
    personalData: { items: any[] };
    error: string;
    status: "pending" | "loading" | "error" | "success";
};

export const initialState: InitialState = {
    personalData: { items: [] },
    error: "",
    status: "pending",
};


export const getPersonalData = createAsyncThunk(
    "PersonalData/getPersonalData",
    async (userId: any) => {
        return GdprRequestService.getRequestsList({userId,sorting: undefined,skipCount :undefined,maxResultCount: undefined}).then(
            (result: any) => {
                console.log('fetched data , ', result.items)
                return result;
            }
        );
    }
);
export const requestPersonalData = createAsyncThunk(
    "PersonalData/requestPersonalData",
    async () => {
        return GdprRequestService.postRequestsPrepareData().then(
            (result: any) => {
                console.log('fetched data , ', result.items)
                return result.items

            }
        );
    }
);

export const deletePersonalData = createAsyncThunk(
    "PersonalData/deletePersonalData",
    async () => {
        return GdprRequestService.deleteRequests().then(
            (result: any) => {
                console.log('fetched data , ', result.items)
                return result.items

            }
        );
    }
);

export const downloadTokenPersonalData = createAsyncThunk(
    "PersonalData/downloadTokenPersonalData",
    async (id: any) => {
        
        return GdprRequestService.getRequestsDownloadToken({id:id}).then(
            (result: any) => {
                console.log('fetched data , ', result)
                return result;

            }
        );
    }
);

const PersonalDataSlice = createSlice({
    name: "PersonalData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(requestPersonalData.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(
            requestPersonalData.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.status = "success";
                state.personalData = action.payload;
                state.error = "";
            }
        );
        builder.addCase(requestPersonalData.rejected, (state, action) => {
            state.status = "error";
            state.personalData = { items: [] };;
            state.error = action.error.message || "Something went wrong";
        });

        builder.addCase(getPersonalData.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(
            getPersonalData.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.status = "success";
                state.personalData = action.payload;
                state.error = "";
            }
        );
        builder.addCase(getPersonalData.rejected, (state, action) => {
            state.status = "error";
            state.personalData = { items: [] };;
            state.error = action.error.message || "Something went wrong";
        });


        builder.addCase(deletePersonalData.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(
            deletePersonalData.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.status = "success";
                state.personalData = action.payload;
                state.error = "";
            }
        );
        builder.addCase(deletePersonalData.rejected, (state, action) => {
            state.status = "error";
            state.personalData = { items: [] };;
            state.error = action.error.message || "Something went wrong";
        });


        builder.addCase(downloadTokenPersonalData.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(
            downloadTokenPersonalData.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.status = "success";
                state.personalData = action.payload;
                state.error = "";
            }
        );
        builder.addCase(downloadTokenPersonalData.rejected, (state, action) => {
            state.status = "error";
            state.personalData = { items: [] };;
            state.error = action.error.message || "Something went wrong";
        });


    }

});
export default PersonalDataSlice.reducer;