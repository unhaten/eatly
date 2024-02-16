import { FC } from 'react'
import s from './style.module.scss'

import { Typography, Box, IconButton } from '@mui/material'
import { ICardOption } from './types/types'

const CardOption: FC<ICardOption> = ({ text, icon }) => {
	return (
		<Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
			<IconButton
				className={s.iconContainer}
				sx={{
					width: '56px',
					height: '56px',
					borderRadius: '12px',
					border: ' 1px solid #edf2f7'
				}}
			>
				{icon}
			</IconButton>
			<Typography className={s.text} mt={2}>
				{text}
			</Typography>
		</Box>
	)
}

export default CardOption
