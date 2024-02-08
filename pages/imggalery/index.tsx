import { imageGalery } from '@/api/functions/imgGalery.api'
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import styles from "@/styles/imgHover.module.css"
import Image from 'next/image'

const index = () => {
    const { isPending, data } = useQuery({
        queryKey: ['img'],
        queryFn: imageGalery
    })
    console.log('data', data);


    return (
        <>
            <Container>
                {
                    isPending ? (
                        <>
                            <h1>Loading ...</h1>
                        </>
                    ) : (
                        <>
                            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                {
                                    data?.map((item, key) => {
                                        return (
                                            <>
                                                <Grid item xs={4} key={key}>
                                                    <Image
                                                        src={item?.img_src}
                                                        width={300}
                                                        height={300}
                                                        alt={'Earth Date: '+ item?.earth_date}
                                                        loading='lazy'
                                                        title={'Earth Date: '+ item?.earth_date}
                                                        style={{
                                                            borderRadius: 10
                                                        }}
                                                    />
                                                </Grid>
                                            </>
                                        )
                                    })
                                }
                            </Grid>
                        </>
                    )
                }
            </Container>
        </>
    )
}

export default index