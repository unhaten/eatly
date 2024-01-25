import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRestaurant } from '../../types/types'

export const restaurantAPI = createApi({
	reducerPath: 'restaurantAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
	tagTypes: ['Restaurant'],
	endpoints: build => ({
		fetchAllRestaurants: build.query<IRestaurant[], string>({
			query: () => ({
				url: '/restaurant'
			}),
			providesTags: ['Restaurant']
		})
	})
})
	