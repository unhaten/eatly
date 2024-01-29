import { List, ListItem, Typography, Box, ListItemButton } from '@mui/material'
import options from './lib/config'

const Filter = () => {
	return (
		<Box
			component={List}
			display='flex'
			justifyContent={'center'}
			alignItems='center'
			flexWrap={'wrap'}
			gap={2}
			mt={6}
		>
			{options.map((item, index) => {
				return (
					<Box
						key={index}
						component={ListItem}
						width={'fit-content'}
						padding={0}
						borderRadius={5}
						bgcolor={`${item.key}.bgColor`}
						sx={{
							boxShadow:
								'0px 19.6px 29.4px rgba(135, 125, 200, 0.25)'
						}}
					>
						<Box
							component={ListItemButton}
							display='flex'
							justifyContent={'center'}
							minWidth={100}
							minHeight={50}
							borderRadius={5}
						>
							<Typography
								variant='body1'
								fontWeight={500}
								color={`${item.key}.color`}
							>
								{item.name}
							</Typography>
							<Box
								component={'img'}
								ml={1}
								src={`/img/${item.icon}.svg`}
							/>
						</Box>
					</Box>
				)
			})}
		</Box>
	)
}
export default Filter
