import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from "../redux/slice/userSlice"
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'


// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// }

// const rootReducer = combineReducers({

// })




// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  // reducer:persistedReducer,
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
  auth : authReducer
})

// export const persistor = persistStore(store)
