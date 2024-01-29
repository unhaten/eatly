import { PayloadAction, createSlice, current } from '@reduxjs/toolkit'
import { IProduct } from '../../types/types'

interface ProductState {
	products: IProduct[]
	favoriteProducts: IProduct[]
}

const initialState: ProductState = {
	products: [],
	favoriteProducts: []
}

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<IProduct>) {
			state.products.push(action.payload)
		},
		// addToFavorites(state, action: PayloadAction<IProduct>) {
		// 	// ! FIXME: does not operate properly from the first time and I cant use .includes() because of this
		// 	// console.log(current(state.favoriteProducts), 'favProd')
		// 	state.favoriteProducts.push(action.payload)
		// },
		toggleFavorites(state, action: PayloadAction<IProduct>) {
			const isExists = state.favoriteProducts.some(
				product => product.id === action.payload.id
			)
			if (isExists) {
				const index = state.favoriteProducts.findIndex(
					item => item.id === action.payload.id
				)
				if (index !== -1) {
					state.favoriteProducts.splice(index, 1)
				}
			} else {
				state.favoriteProducts.push(action.payload)
			}

			// state.favoriteProducts.push(action.payload)
		}
	}
})

export default productSlice.reducer
