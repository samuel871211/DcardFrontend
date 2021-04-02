import { Button, Box } from '@material-ui/core'

export default function NotFound() {
    return (
        <Box display='flex' alignItems='center'>
	        <Box 
        		color='white' 
        		px={2} 
        		fontSize={20}
        		children='404 Not Found'
	        />
	        <Button 
        		variant='contained' 
        		color='primary'
        		children='回首頁'
        		onClick={() => window.location.assign('/scenicSpot')}
	        />
        </Box>
    )
}