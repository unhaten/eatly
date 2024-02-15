import { Box, Typography } from '@mui/material'
import s from './style.module.scss'
import { FC } from 'react'
import { InfoProps } from './types/types'
import ExtraInfo from './components/ExtraInfo/ui'
import Badge from './components/Badge'

const CardInfo: FC<InfoProps> = ({ item }) => {
	return (
		<Box>
			<Badge type={item.type} />
			<Typography
				fontWeight={600}
				variant='body1'
				className={s.name}
				mt={0.5}
			>
				{item.name}
			</Typography>
			<Box className={s.info}>
				<ExtraInfo
					deliveryTime={item.deliveryTime}
					rate={item.rate}
					inCard
				/>
			</Box>
		</Box>
	)
}

export default CardInfo
