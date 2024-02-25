import { Stack, Skeleton, Box } from '@mui/material'

const RestaurantSkeleton = () => {
	return (
		<Stack spacing={1} maxWidth={300}>
			<Skeleton
				animation='wave'
				variant='rectangular'
				height={200}
				sx={{
					borderTopLeftRadius: 12,
					borderTopRightRadius: 12
				}}
			/>
			<Box
				display='flex'
				gap={2}
				alignItems='center'
				justifyContent={'space-between'}
				paddingX={2}
			>
				<Box>
					<Skeleton
						animation='wave'
						variant='text'
						sx={{ fontSize: '10px' }}
						width={60}
					/>
					<Skeleton
						animation='wave'
						variant='text'
						sx={{ fontSize: '16px' }}
						width={130}
					/>
					<Skeleton
						animation='wave'
						variant='text'
						sx={{ fontSize: '10px' }}
						width={110}
					/>
				</Box>
				<Box>
					<Skeleton
						animation='wave'
						variant='circular'
						width={40}
						height={40}
					/>
				</Box>
			</Box>
		</Stack>
	)
}

export default RestaurantSkeleton
