import { Box, IconButton, InputBase, useTheme } from "@mui/material"
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";
import { DarkModeOutlined, LightModeOutlined, NotificationsOutlined, PersonOutlineOutlined, Search, SettingsOutlined } from "@mui/icons-material";


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2} >
            {/* search bar */}
            <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='8px'>
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <Search />
                </IconButton>
            </Box>

            {/* icons */}
            <Box display='flex'>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {
                        theme.palette.mode === 'dark' ? (
                            <DarkModeOutlined />
                        )
                            : (
                                <LightModeOutlined />
                            )
                    }
                </IconButton>
                <IconButton>
                    <NotificationsOutlined />
                </IconButton>
                <IconButton>
                    <SettingsOutlined />
                </IconButton>
                <IconButton>
                    <PersonOutlineOutlined />
                </IconButton>

            </Box>
        </Box>
    )
}

export default Topbar