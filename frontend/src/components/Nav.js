import { AppBar, Toolbar, Container, Typography, IconButton, Hidden } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

export default function Nav(props) {
    const { toggleOpen } = props
    const styles = makeStyles(() => ({
        AppBar: {
            borderBottom: '1px solid white',
            background: '#121212',
        },
        title: {
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            paddingLeft: '16px',
        }
    }))
    const classes = styles()
    return (
        <AppBar 
            position='sticky'
            className={classes.AppBar}
        >
            <Container disableGutters>
                <Toolbar disableGutters variant='dense'>
                    <Hidden mdUp>
                        <IconButton onClick={() => toggleOpen(true)}>
                            <MenuIcon/>
                        </IconButton>
                    </Hidden>
                    <Typography className={classes.title}>
                       台灣景點
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}