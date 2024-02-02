import { Provider } from 'react-redux'
import { setupStore } from './config/store'
import { FC, ReactNode } from 'react'

const store = setupStore()

interface IStoreProvider {
	children?: ReactNode
}

const StoreProvider: FC<IStoreProvider> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
