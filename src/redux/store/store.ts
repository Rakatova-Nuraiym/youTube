import { configureStore } from "@reduxjs/toolkit";
import youTubeSlice from "../tools/youTubeSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: youTubeSlice.reducer,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
