import { PayloadAction, createSlice, current } from '@reduxjs/toolkit'
import { IProduct } from '../../types/types'

interface ProductState {
	products: IProduct[]
	favoriteProducts: IProduct[]
	amount: number
}

const initialState: ProductState = {
	products: [],
	favoriteProducts: [],
	amount: 0
}

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<IProduct>) {
			const productInCart = state.products.find(
				product => product.id === action.payload.id
			)
			if (productInCart) {
				productInCart.quantity++
			} else {
				state.products.push({ ...action.payload, quantity: 1 })
			}
			state.amount++
		},
		incrementQuantity(state, action: PayloadAction<string>) {
			const product = state.products.find(
				item => item.id === action.payload
			)
			product && product.quantity++
			state.amount++
		},
		decrementQuantity(state, action: PayloadAction<string>) {
			const product = state.products.find(
				item => item.id === action.payload
			)
			if (product?.quantity === 1) {
				product.quantity = 1
				// state.amount = 1
			} else {
				product.quantity--
				state.amount--
			}
		},
		removeFromCart(state, action: PayloadAction<IProduct>) {
			const isMultiple = state.products.find(
				product => product.id === action.payload.id
			)
			state.amount = state.amount - isMultiple?.quantity
			state.products = state.products.filter(
				product => product.id !== action.payload.id
			)
		},
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
		}
	}
})

export default productSlice.reducer
