import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const userAPI = createApi({
	reducerPath: 'userAPI',
	baseQuery: fetchBaseQuery({ baseUrl: '' }),
	tagTypes: ['User'],
	endpoints: build => ({})
})
