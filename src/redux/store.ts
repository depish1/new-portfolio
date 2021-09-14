import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const store = configureStore({ reducer });
export type TStore = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<TStore>();
