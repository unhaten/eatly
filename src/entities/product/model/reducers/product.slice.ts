import { PayloadAction, createSlice } from '@reduxjs/toolkit'
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
		addToFavorites(state, action: PayloadAction<IProduct>) {
			state.favoriteProducts.push(action.payload)
		}
	}
})

export default productSlice.reducer
