import { Drawer, ListItemText, ListItem, ListItemIcon, List, IconButton, Hidden, Grid } from '@material-ui/core'
// import StarIcon from '@material-ui/icons/Star'
import { useState, Fragment, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import array from '../APISource/array'

export default function LeftDrawer(props) {

    const {
        leftDrawer,
        toggleLeftDrawer,
        leftIndex,
        setLeftIndex,
    } = props

    const styles = makeStyles(() => ({
        List: {
            // background: '#424242',
            color: 'white',
        },
    }))
    const classes = styles()

    function changeCounty(idx) {
        setLeftIndex(idx)
        window.location.assign('/scenicSpot/' + array[idx])
    }

    function ListItems() {
        return (
            <List className={classes.List} disablePadding>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 0}
                    onClick={() => changeCounty(0)}
                >
                    <ListItemText primary="全部"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 1}
                    onClick={() => changeCounty(1)}
                >
                    <ListItemText primary="臺北市"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 2}
                    onClick={() => changeCounty(2)}
                >
                    <ListItemText primary="新北市"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 3}
                    onClick={() => changeCounty(3)}
                >
                    <ListItemText primary="桃園市"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 4}
                    onClick={() => changeCounty(4)}
                >
                    <ListItemText primary="臺中市"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 5}
                    onClick={() => changeCounty(5)}
                >
                    <ListItemText primary="臺南市"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 6}
                    onClick={() => changeCounty(6)}
                >
                    <ListItemText primary="高雄市"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 7}
                    onClick={() => changeCounty(7)}
                >
                    <ListItemText primary="基隆市"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 8}
                    onClick={() => changeCounty(8)}
                >
                    <ListItemText primary="新竹市"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 9}
                    onClick={() => changeCounty(9)}
                >
                    <ListItemText primary="新竹縣"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 10}
                    onClick={() => changeCounty(10)}
                >
                    <ListItemText primary="苗栗縣"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 11}
                    onClick={() => changeCounty(11)}
                >
                    <ListItemText primary="彰化縣"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 12}
                    onClick={() => changeCounty(12)}
                >
                    <ListItemText primary="南投縣"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 13}
                    onClick={() => changeCounty(13)}
                >
                    <ListItemText primary="雲林縣"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 14}
                    onClick={() => changeCounty(14)}
                >
                    <ListItemText primary="嘉義縣"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 15}
                    onClick={() => changeCounty(15)}
                >
                    <ListItemText primary="嘉義市"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 16}
                    onClick={() => changeCounty(16)}
                >
                    <ListItemText primary="屏東縣"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 17}
                    onClick={() => changeCounty(17)}
                >
                    <ListItemText primary="宜蘭縣"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 18}
                    onClick={() => changeCounty(18)}
                >
                    <ListItemText primary="花蓮縣"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 19}
                    onClick={() => changeCounty(19)}
                >
                    <ListItemText primary="臺東縣"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 20}
                    onClick={() => changeCounty(20)}
                >
                    <ListItemText primary="金門縣"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 21}
                    onClick={() => changeCounty(21)}
                >
                    <ListItemText primary="澎湖縣"/>
                </ListItem>
                <ListItem 
                    button 
                    divider
                    selected={leftIndex === 22}
                    onClick={() => changeCounty(22)}
                >
                    <ListItemText primary="連江縣"/>
                </ListItem>
            </List>
        )
    }

    return (
        <Fragment>
            <Hidden mdUp>
                <Drawer
                    open={leftDrawer}
                    onClose={() => toggleLeftDrawer(false)}
                >
                    <ListItems/>
                </Drawer>
            </Hidden>
            <Hidden smDown>
                <Grid item md={2}>
                    <ListItems/>
                </Grid>
            </Hidden>
        </Fragment>
    )
}