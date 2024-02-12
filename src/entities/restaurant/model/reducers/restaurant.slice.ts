import {
	PayloadAction,
	createSlice
	// current
} from '@reduxjs/toolkit'
import { IRestaurant } from '../../types/types'

interface RestaurantState {
	bookmarkedRestaurants: IRestaurant[]
}

const initialState: RestaurantState = {
	bookmarkedRestaurants: []
}

export const restaurantSlice = createSlice({
	name: 'restaurants',
	initialState,
	reducers: {
		toggleBookmarks(state, action: PayloadAction<IRestaurant>) {
			const isExists = state.bookmarkedRestaurants.some(
				restaurant => restaurant.id === action.payload.id
			)
			if (isExists) {
				const index = state.bookmarkedRestaurants.findIndex(
					item => item.id === action.payload.id
				)
				if (index !== -1) {
					state.bookmarkedRestaurants.splice(index, 1)
				}
			} else {
				state.bookmarkedRestaurants.push(action.payload)
			}

			// console.log(current(state.bookmarkedRestaurants))

			// state.bookmarkedRestaurants.push(action.payload)
		}
	}
})

export default restaurantSlice.reducer
