import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../types/types'

interface ProductState {
	products: IProduct[]
}

const initialState: ProductState = {
	products: []
}

export const productSlice = createSlice({	
	name: 'products',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<IProduct>) {
			state.products.push(action.payload)
		}
	}
})

export default productSlice.reducer
