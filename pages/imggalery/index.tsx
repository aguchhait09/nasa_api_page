import { imageGalery } from '@/api/functions/imgGalery.api';
import { Container, Grid, Skeleton } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Image from 'next/image';

const Index = () => {
    const { isFetching, data } = useQuery({
        queryKey: ['img'],
        queryFn: imageGalery,
    });

    return (
        <Container maxWidth="xl"> 
            <Grid container spacing={2}> 
                {isFetching || !data ? (
                    [...Array(12)].map((_, key) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={key}> 
                            <Skeleton variant="rectangular" width="100%" height={400} /> 
                        </Grid>
                    ))
                ) : (
                    data.map((item, key) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={key}> 
                            <Image
                                src={item?.img_src}
                                width={300}
                                height={300}
                                alt={'Earth Date: ' + item?.earth_date}
                                loading="lazy"
                                title={'Earth Date: ' + item?.earth_date}
                                style={{
                                    borderRadius: 10,
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover' 
                                }}
                            />
                        </Grid>
                    ))
                )}
            </Grid>
        </Container>
    );
};

export default Index;
