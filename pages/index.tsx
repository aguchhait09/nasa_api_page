import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/api/axiosInstance";
import { InterfaceApod } from "@/typescript/apod.interface";
import { endpoints } from "@/api/endpoints";
import { apodDetails } from "@/api/functions/apod.api";
import { Box, Container, Grid, Typography, Skeleton } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ darkMode }) {
  const { isPending, data } = useQuery({
    queryKey: ['apodData'],
    queryFn: apodDetails
  });



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container sx={{ mb: 4 }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={6}>
              {isPending ? (
                <Skeleton sx={{
                  backgroundColor: darkMode
                    ? "rgba(0, 0, 0, 0.1)"
                    : "grey",
                }} variant="rectangular" width="100%" height={400} />
              ) : (
                <>
                  {!!data?.hdurl && (
                    <img
                      src={data?.hdurl}
                      width="100%"
                      alt="test"
                      height="auto"
                      loading="lazy"
                      style={{
                        borderRadius: 10
                      }}
                    />
                  )}
                </>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.5)", p: 5, borderRadius: 2 }}>
                {isPending ? (
                  <>
                    <Skeleton sx={{
                      backgroundColor: darkMode
                        ? "rgba(0, 0, 0, 0.1)"
                        : "grey",
                    }} variant="text" width="50%" height={40} />
                    <Skeleton sx={{
                      backgroundColor: darkMode
                        ? "rgba(0, 0, 0, 0.1)"
                        : "grey",
                    }} variant="text" width="70%" height={60} />
                    <Skeleton sx={{
                      backgroundColor: darkMode
                        ? "rgba(0, 0, 0, 0.1)"
                        : "grey",
                    }} variant="text" width="100%" height={100} />
                  </>
                ) : (
                  <>
                    <Typography variant="h5" sx={{ color: "#4535a5" }}>{data?.date}</Typography>
                    <Typography variant="h4">{data?.title}</Typography>
                    <Typography>Description: {data?.explanation}</Typography>
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
