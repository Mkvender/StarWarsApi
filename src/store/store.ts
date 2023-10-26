import { configureStore } from "@reduxjs/toolkit";
import { starwarsService } from "../services/starwars";

export const store = configureStore({
  reducer: {
    [starwarsService.reducerPath]: starwarsService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starwarsService.middleware),
});
