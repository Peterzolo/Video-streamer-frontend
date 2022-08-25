import { configureStore} from "@reduxjs/toolkit";
import authReducer from "../redux/slice/userSlice";



export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});


