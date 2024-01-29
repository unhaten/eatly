import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productAPI } from '../../../entities/product/model/services/product.service'
import { restaurantAPI } from '../../../entities/restaurant/model/services/restaurant.service'
import { userAPI } from '../../../entities/user/model/services/user.service'
import productReducer from '../../../entities/product/model/reducers/product.slice'
import restaurantReducer from '../../../entities/restaurant/model/reducers/restaurant.slice'

const rootReducer = combineReducers({
	productReducer,
	restaurantReducer,
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
