import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

export default function RightDialog(props) {
    const {
        rightDialog: {
            idx,
            open,
            content,
        },
        setRightDialog,
    } = props

    // Recursively Destructure jsonObj
    function Destructure(array, jsonObj) {
        if (jsonObj) {
            const keys = Object.keys(jsonObj)
            for (let i = 0; i < keys.length; i++) {
                let value = jsonObj[keys[i]]
                if (typeof(value) === 'object') {
                    Destructure(array, value)
                } else {
                    array.push(<DialogContentText children={keys[i]} key={keys[i]}/>)
                    if (keys[i].startsWith('WebsiteUrl')) {
                        array.push(<Button 
                        			key={value}
                        			href={value} 
                        			children='前往官網'
                        			variant='contained'
                        			color='primary'
                        			/>)
                    } else if (keys[i].startsWith('PictureUrl')) {
                        array.push(<img src={value} key={value}/>)
                    } else {
                        array.push(<DialogContentText children={value} key={keys[i]+value}/>)
                    }
                }
            }
        }
        return array
    }

    return (
        <Dialog 
        	open={open} 
        	maxWidth='md' 
        	fullWidth
        	onClose={() => setRightDialog({
        		idx:idx,
        		open:false,
        		content:content,
        	})}
        >	
        	<DialogTitle>{'第'+(idx+1)+'篇'+'(共'+content.length+'篇)'}</DialogTitle>
			<DialogContent>
				{Destructure([], content[idx])}
			</DialogContent>
			<DialogActions>
				<Button 
					color='primary' 
					variant='contained'
					onClick={() => setRightDialog({
						idx:idx-1,
						open:true,
						content:content,
					})}
					disabled={idx === 0}
					children='上篇'
				/>
				<Button 
					color='primary' 
					variant='contained'
					children='下篇'
					onClick={() => setRightDialog({
			            idx: idx + 1,
			            open: true,
			            content: content,
			        })}
					disabled={idx === content.length-1}
				/>
			</DialogActions>
		</Dialog>
    )
}