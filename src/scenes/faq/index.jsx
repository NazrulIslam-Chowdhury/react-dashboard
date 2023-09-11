import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { ExpandMore } from "@mui/icons-material";

const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subTitle="Frequently asked question page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore sed minima a. Temporibus ratione natus cupiditate aliquid nesciunt, fugiat pariatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore sed minima a. Temporibus ratione natus cupiditate aliquid nesciunt, fugiat pariatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore sed minima a. Temporibus ratione natus cupiditate aliquid nesciunt, fugiat pariatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore sed minima a. Temporibus ratione natus cupiditate aliquid nesciunt, fugiat pariatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Some Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore sed minima a. Temporibus ratione natus cupiditate aliquid nesciunt, fugiat pariatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Random Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore sed minima a. Temporibus ratione natus cupiditate aliquid nesciunt, fugiat pariatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default Faq