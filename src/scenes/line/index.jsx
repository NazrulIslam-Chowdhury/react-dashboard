import { Box } from "@mui/material"
import Header from "../../components/Header"
import LineChart from "../../components/LineChart"


const Line = () => {
    return (
        <Box m="20px">
            <Header title="LINE CHART" subTitle="Simple line chart" />
            <Box height="75dvh">
                <LineChart />
            </Box>
        </Box>
    )
}

export default Line