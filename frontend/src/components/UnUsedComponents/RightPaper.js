import { Grid, Box, Avatar, IconButton, List, ListItem } from '@material-ui/core'
import { Fragment, useState, useEffect } from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

// import { useParams } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import APIs from '../APISource/APIs'
// console.log('APIs', APIs())

export default function RightPaper(props) {
    const { toggleRightDialog, content } = props
    const [articles, appendArticles] = useState([])
    const count = useSelector(state => state.AllReducers.count)

    const style = makeStyles(() => ({
        ListItem: {
            color: 'white',
            paddingRight: '16px',
            paddingLeft: '16px',
        }
    }))
    const classes = style()

    function Article() {
        return (
            <ListItem 
                button 
                divider 
                disableGutters 
                className={classes.ListItem}
                onClick={() => toggleRightDialog(true)}
            >
                <Box width='100%' mx={1}> 
                    <Box display='flex' alignItems='center'>
                        <Box flexGrow={1}>
                            <Box>Name</Box>
                            <Box>Description</Box>
                            <Box>Address</Box>
                        </Box>
                        <Box>
                            <Avatar>H</Avatar>
                        </Box>
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <IconButton disabled>
                            <ThumbUpIcon/>
                        </IconButton>
                        <Box>300</Box>
                        <IconButton disabled>
                            <ThumbDownIcon/>
                        </IconButton>
                        <Box>400</Box>
                        <IconButton disabled>
                            <BookmarkIcon/>
                        </IconButton>
                        <Box>收藏</Box>
                    </Box>
                </Box> 
            </ListItem>
        )
    }

    // useEffect(() => {
    //     let temp = [...articles]
    //     for (let i = 0; i < 5; i++) {
    //         temp.push(<Article key={i}/>)
    //         appendArticles(temp)
    //     }
    // }, [])

    return (
        <Grid item xs={12} md={10}>
            <List disablePadding>
                <Article/>
            </List>
        </Grid>
    )
}