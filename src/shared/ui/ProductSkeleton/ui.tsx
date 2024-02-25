import { Stack, Skeleton, Box } from '@mui/material'

const ProductSkeleton = () => {
	return (
		<Stack spacing={1} maxWidth={150} sx={{ paddingY: 1 }}>
			<Skeleton
				animation='wave'
				variant='circular'
				width={20}
				height={20}
				sx={{ marginLeft: 'auto !important' }}
			/>
			<Skeleton
				animation='wave'
				variant='circular'
				width={100}
				height={100}
				sx={{ margin: '0 auto !important' }}
			/>
			<Box paddingX={4} paddingTop={2}>
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
					width={100}
				/>
				<Skeleton
					animation='wave'
					variant='text'
					sx={{ fontSize: '10px' }}
					width={80}
				/>
				<Box display='flex' gap={2} mt={2}>
					<Skeleton
						animation='wave'
						variant='text'
						sx={{ fontSize: '10px' }}
						width={40}
					/>
					<Skeleton
						animation='wave'
						variant='circular'
						width={20}
						height={20}
					/>
				</Box>
			</Box>
		</Stack>
	)
}

export default ProductSkeleton
