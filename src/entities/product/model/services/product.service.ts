import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../types/types'

export const productAPI = createApi({
	reducerPath: 'productAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
	tagTypes: ['Product'],
	endpoints: build => ({
		fetchAllProducts: build.query<IProduct[], string>({
			query: () => ({
				url: '/product'
			}),
			providesTags: ['Product']
		}),
		fetchProductById: build.query<IProduct, string>({
			query: id => ({
				url: `/product/${id}`
			}),
			providesTags: ['Product']
		})
	})
})
