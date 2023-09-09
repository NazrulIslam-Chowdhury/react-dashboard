import { Box, useTheme } from "@mui/material"
import { tokens } from "../theme";


const Header = ({ title, subTitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box>
            Header
        </Box>
    )
}

export default Header