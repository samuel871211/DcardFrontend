import { useState } from 'react'
import { useSelector } from 'react-redux'
import MUIDataTable from "mui-datatables"
import RightDialog from './RightDialog'
import { Grid, IconButton } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'

export default function RightTable(props) {
    const count = useSelector(state => state.AllReducers.count)
    const { content, end, updateState } = props
    const length = content.length
    const [data, appendData] = useState([])
    const [rightDialog, setRightDialog] = useState({
        idx: 0,
        open: false,
        content: content,
    })

    function WatchMoreIcon(props) {
        const { index } = props
        return (
            <IconButton 
            	onClick={() => setRightDialog({
            		idx:index,
            		open: true,
            		content: content,
            	})}
            	children={<VisibilityIcon/>}
            />
        )
    }

    const columns = ['名稱', '地點', '介紹', '詳細內容']
    const options = {
        filter: false,
        print: false,
        download: false,
        rowsPerPage: 100,
    }

    // content => fetch來的json資料，沒有經過擷取
    // data => 從content擷取需要的欄位，顯示在UI
    // 兩者長度相同，代表不需要再刷新state然後render component
    let temp = []
    if (length !== data.length) {
        for (let i = 0; i < length; i++) {
            temp.push([
                content[i].Name,
                content[i].Address,
                content[i].Description || content[i].DescriptionDetail,
                <WatchMoreIcon index={i}/>
            ])
        }
        appendData(temp)
    }

    return (
        <Grid item xs={12} md={10}>
	        <MUIDataTable
				title="景點列表"
				data={data}
				columns={columns}
				options={options}
			/>
			<RightDialog
				rightDialog={rightDialog}
				setRightDialog={setRightDialog}
			/>
		</Grid>
    )
}