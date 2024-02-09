import { getEpicData } from "@/api/functions/epic.api"
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query"

const index = () => {
    const { isPending: loading, data: epic } = useQuery({
        queryKey: ['epicDetails'],
        queryFn: getEpicData
    })
    console.log('data', epic);

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <img src="" alt="" height={200}/>
                </Grid>
                <Grid item xs={6}>
                </Grid>
            </Grid>
        </>
    )
}

export default index