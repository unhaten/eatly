import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productAPI } from '../../../entities/product/model/services/product.service'
import { restaurantAPI } from '../../../entities/restaurant/model/services/restaurant.service'
import { userAPI } from '../../../entities/user/model/services/user.service'

const rootReducer = combineReducers({
	[productAPI.reducerPath]: productAPI.reducer,
	[restaurantAPI.reducerPath]: restaurantAPI.reducer,
	[userAPI.reducerPath]: userAPI.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat([
				productAPI.middleware,
				restaurantAPI.middleware,
				userAPI.middleware
			])
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
