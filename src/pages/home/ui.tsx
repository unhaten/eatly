import Hero from './components/hero'
import Filter from '../../features/filter'
import Nearby from './components/nearby'
import Popular from './components/popular'
import { FC } from 'react'

const HomePage: FC = () => {
	return (
		<>
			<Hero />
			<section>
				<Filter />
			</section>
			<Nearby />
			<Popular />
		</>
	)
}

export default HomePage
