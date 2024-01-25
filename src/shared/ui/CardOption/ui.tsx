import { FC } from 'react'
import s from './style.module.scss'

import { Typography, Box } from '@mui/material'
import { ICardOption } from './types/types'

const CardOption: FC<ICardOption> = ({ text, icon }) => {
	return (
		<Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
			<Box className={s.iconContainer}>{icon}</Box>
			<Typography className={s.text} mt={2}>
				{text}
			</Typography>
		</Box>
	)
}

export default CardOption
