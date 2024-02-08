import { Box, Container, Typography } from "@mui/material"
import Link from "next/link"

const index = () => {
    return (
        <>
            <Container>
                <Box sx={{boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.4)", p: 5, borderRadius: 5}}>
                    <Typography variant="h4" sx={{ color: "#4535a5", fontWeight: "bold" }}>About</Typography>
                    <Box sx={{my: 2}}><Typography variant="h5" sx={{ fontWeight: "bold" }} >NASA Image Library</Typography>
                        <Typography>API: <Link style={{ textDecoration: "none", color: "black" }} href="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY">https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY</Link></Typography></Box>
                    <Box sx={{my: 2}}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>EPIC: Earth Polychromatic Imaging Camera</Typography>
                    <Typography>API: <Link style={{ textDecoration: "none", color: "black" }} href="https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=DEMO_KEY">https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=DEMO_KEY</Link></Typography>
                    <Typography>Image Api: <Link style={{ textDecoration: "none", color: "black" }} href="https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY">https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY</Link></Typography>
                    </Box>
                    <Box sx={{my: 2}}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>Astronomy Picture of the Day</Typography>
                    <Typography>API: <Link style={{textDecoration: "none", color: "black"}} href="https://api.nasa.gov/planetary/apod">https://api.nasa.gov/planetary/apod</Link></Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default index