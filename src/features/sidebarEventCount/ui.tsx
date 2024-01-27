import { Box } from '@mui/material'
import { FC } from 'react'
import { useAppSelector } from '../../shared/lib/hooks/redux'
import s from './style.module.scss'

interface ISidebarEventCount {
	event: string
}

const SidebarEventCount: FC<ISidebarEventCount> = ({ event }) => {
	const { products } = useAppSelector(state => state.productReducer)

	return (
		<>
			<Box ml='auto'>
				{event === 'Orders' && products.length > 0 && (
					<Box
						sx={{ backgroundColor: 'accent.main' }}
						className={s.orders}
					>
						{products.length}
					</Box>
				)}
			</Box>
		</>
	)
}

export default SidebarEventCount
