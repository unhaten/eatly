import { PayloadAction, createSlice, current } from '@reduxjs/toolkit'
import { IProduct } from '../../types/types'

interface ProductState {
	products: IProduct[]
	favoriteProducts: IProduct[]
	quantity: number
}

const initialState: ProductState = {
	products: [],
	favoriteProducts: []
}

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		// ! TODO: unique values stack together by counting them
		addToCart(state, action: PayloadAction<IProduct>) {
			const productInCart = state.products.find(
				product => product.id === action.payload.id
			)
			if (productInCart) {
				productInCart.quantity++
			} else {
				state.products.push({ ...action.payload, quantity: 1 })
			}
		},
		incrementQuantity(state, action: PayloadAction<string>) {
			const product = state.products.find(
				item => item.id === action.payload
			)
			product && product.quantity++
		},
		decrementQuantity(state, action: PayloadAction<string>) {
			const product = state.products.find(
				item => item.id === action.payload
			)
			product?.quantity === 1
				? (product.quantity = 1)
				: product.quantity--
			// if (product?.quantity === 1) {
			// 	product.quantity = 1
			// } else if (product?.quantity? > 1) {
			// 	product.quantity--
			// }
		},
		removeFromCart(state, action: PayloadAction<IProduct>) {
			state.products = state.products.filter(
				product => product.id !== action.payload.id
			)
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
