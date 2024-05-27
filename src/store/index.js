import { configureStore } from "@reduxjs/toolkit";
import AlertSlice from './slice/alert';

export default configureStore({
  reducer: {
    alert: AlertSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
})