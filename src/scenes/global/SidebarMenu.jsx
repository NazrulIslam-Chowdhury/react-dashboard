import { Box, IconButton, Typography, useTheme } from '@mui/material';
// import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from '../../theme';
import { useState } from 'react';
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutline, HomeMaxOutlined, MapOutlined, MenuOutlined, PeopleAltOutlined, PersonOutlined, PieChartOutline, ReceiptOutlined, TimelineOutlined } from '@mui/icons-material';
import profile from '../../assets/Picsart_22-07-04_00-17-37-372.png';
import { Link } from 'react-router-dom';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >

            <Link
                to={to}
                style={{
                    color: colors.grey[100],
                    textDecoration: 'none'
                }}
            >
                {title}
            </Link>
        </MenuItem>
    )
}


const SidebarMenu = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box>
            <Sidebar
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        background: colors.primary[400],
                        height: "auto"
                    },
                }}
                collapsed={isCollapsed}>
                <Menu
                    menuItemStyles={{
                        icon: {
                            backgroundColor: 'transparent'
                        },
                        button: {
                            [`& .active`]: {
                                color: "#6870fa"
                            }
                        },
                        root: {
                            [`& .hover`]: {
                                color: '#868dfb'
                            }
                        }
                    }}
                    iconShape="square">

                    {/* logo and menu icon */}
                    <MenuItem
                        icon={isCollapsed ? <MenuOutlined /> : undefined}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        style={{
                            margin: '10px 0 20px 0',
                            color: colors.grey[100]
                        }}
                    >
                        {
                            !isCollapsed && (
                                <Box
                                    display='flex'
                                    justifyContent='space-between'
                                    alignItems='center'
                                    ml='15px'
                                >
                                    <Typography variant='h3' color={colors.grey[100]}>
                                        ADMIN
                                    </Typography>
                                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlined />
                                    </IconButton>
                                </Box>
                            )
                        }
                    </MenuItem>

                    {/* user */}
                    {
                        !isCollapsed && (
                            <Box mb='25px'>
                                <Box display='flex' justifyContent='center' alignItems='center'>
                                    <img
                                        src={profile}
                                        alt="profile-user"
                                        width='100px'
                                        height='100px'
                                        style={{
                                            cursor: 'pointer',
                                            borderRadius: '50%'
                                        }}
                                    />
                                </Box>

                                <Box textAlign='center'>
                                    <Typography variant='h2' color={colors.grey[100]} fontWeight='bold' sx={{ m: '10px 0 0 0' }}>Nazrul Islam</Typography>
                                    <Typography variant='h5' color={colors.greenAccent[500]}>Admin</Typography>
                                </Box>
                            </Box>
                        )
                    }

                    {/* menu items */}
                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeMaxOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant='h6'
                            color={colors.grey[300]}
                            sx={{ m: '15px 0 5px 20px' }}
                        >
                            Data
                        </Typography>

                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleAltOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Contacts Information"
                            to="/contacts"
                            icon={<ContactsOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Invoices Balances"
                            to="/invoices"
                            icon={<ReceiptOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant='h6'
                            color={colors.grey[300]}
                            sx={{ m: '15px 0 5px 20px' }}
                        >
                            Pages
                        </Typography>
                        <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="FAQ page"
                            to="/faq"
                            icon={<HelpOutline />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant='h6'
                            color={colors.grey[300]}
                            sx={{ m: '15px 0 5px 20px' }}
                        >
                            Charts
                        </Typography>
                        <Item
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutline />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    )
}

export default SidebarMenu