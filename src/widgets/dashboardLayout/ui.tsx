import { Grid } from '@mui/material'
import Wallet from '../../widgets/wallet'
import Recommended from '../../widgets/recommended'
import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface IDashboardLayout {
	children?: ReactNode
}

const DashboardLayout: FC<IDashboardLayout> = () => {
	return (
		<>
			<Grid container justifyContent={'space-between'} gap={4}>
				<Grid item xs={12} lg={8}>
					<Outlet />
				</Grid>
				<Grid item xs={12} lg={3.5}>
					<Wallet />
					<Recommended />
				</Grid>
			</Grid>
		</>
	)
}

export default DashboardLayout
