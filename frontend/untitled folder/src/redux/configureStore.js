import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import setSelecedtProjectData from "./reducers"; // the value from combineReducers

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};
console.log(setSelecedtProjectData);
const pReducer = persistReducer(persistConfig, setSelecedtProjectData);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
