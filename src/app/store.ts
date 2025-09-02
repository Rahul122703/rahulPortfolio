import { configureStore } from "@reduxjs/toolkit";

import { AuthReducer, UIReducer } from "../features/featuresIndex";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    ui: UIReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
