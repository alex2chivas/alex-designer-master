import storage from 'redux-persist/lib/storage'

export const persistConfig = {
  key: 'authType',
  storage,
  whitelist: ['form'], // which reducer want to store
  blacklist: ['login']
};