import Hero from './components/hero'
import Filter from '../../features/filter'
import Nearby from './components/nearby'
import Popular from './components/popular'

const HomePage = () => {
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
