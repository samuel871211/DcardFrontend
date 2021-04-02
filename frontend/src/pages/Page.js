import Nav from '../components/Nav'
import NotFound from './NotFound'
import LeftDrawer from '../components/LeftDrawer'
import RightTable from '../components/RightTable'

import { Fragment, useState, useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'

import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import url from '../APISource/url'
import array from '../APISource/array'
import { BottomScrollListener } from 'react-bottom-scroll-listener'

export default function Page() {
    const { route } = useParams()
    const dispatch = useDispatch()
    const curLeftIdx = route === undefined ? 0 : array.indexOf(route)
    const [leftIndex, setLeftIndex] = useState(curLeftIdx)
    const [leftDrawer, toggleLeftDrawer] = useState(false)
    const [content, setContent] = useState([])
    const [end, setEnd] = useState(false)

    const count = useSelector(state => state.AllReducers.count)

    useEffect(initState, [])

    async function initState() {
        const payload = { 'route': route, 'count': 0 }
        dispatch({ type: 'ROUTEANDCOUNT', payload: payload })
        fetchData(payload)
    }

    async function updateState() {
        console.log('trying to update state')
        if (!end) {
            const payload = { 'route': route, 'count': count + 30 }
            dispatch({ type: 'ROUTEANDCOUNT', payload: payload })
            fetchData(payload)
        }
    }

    async function fetchData(payload) {
        const { route, count } = payload

        // generate http query string
        // 因為政府提供的API沒有stop這個參數，所以我沒辦法一次只撈30筆，我自己寫了一個簡單的API去處理
        // let url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot'
        // if (route === undefined) {
        //     url += '?$top=' + (count + 30) + '&$skip=' + count + '&$format=JSON'
        // } else {
        //     url += '/' + route + '?$top=' + (count + 30) + '&$skip=' + count + '&$format=JSON'
        // }

        // generate http query string
        let base = url
        if (route === undefined) {
            base += '?skip=' + count + '&stop=' + (count + 30)
        } else {
            base += '/' + route + '?skip=' + count + '&stop=' + (count + 30)
        }

        // append result into content
        const response = await fetch(base)
        const json = await response.json()
        let temp = [...content]
        temp = temp.concat(json)
        setContent(temp)

        // reach data end, no more API calls
        if (json.length < 30) { setEnd(true) }
    }

    if (curLeftIdx === -1) { return <NotFound/> }

    return (
        <Fragment>
            <Nav toggleOpen={toggleLeftDrawer}/>
            <Container disableGutters>
                <Grid container>
                    <LeftDrawer
                        leftDrawer={leftDrawer}
                        toggleLeftDrawer={toggleLeftDrawer}
                        leftIndex={leftIndex}
                        setLeftIndex={setLeftIndex}
                    />
                    <RightTable 
                        content={content} 
                        end={end}
                    />
                </Grid>
            </Container>
            <BottomScrollListener onBottom={() => updateState(30)}/>
        </Fragment>
    )
}