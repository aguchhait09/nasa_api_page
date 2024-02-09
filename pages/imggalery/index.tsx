import { imageGalery } from '@/api/functions/imgGalery.api';
import { Container, Grid, Skeleton } from '@mui/material';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import React from 'react';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';


const Index = () => {
    const { isFetching, data } = useQuery({
        queryKey: ['img'],
        queryFn: imageGalery,
    });

    // const {
    //     fetchNextPage,
    //     fetchPreviousPage,
    //     hasNextPage,
    //     hasPreviousPage,
    //     isFetchingNextPage,
    //     isFetchingPreviousPage,
    //     ...result
    //   } = useInfiniteQuery({
    //     queryKey: ['img'],
    //     queryFn: ({ pageParam = 1 }) => imageGalery(pageParam as number),
    //     ...options,
    //     getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
    //     getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
    //   })

    return (
        <Container maxWidth="xl">
            {/* <InfiniteScroll
                dataLength={data?.length as number}
                next={imageGalery}
                hasMore={true}
                loader={<p>Loading...</p>}
                endMessage={<p>No more data to load.</p>}
            > */}
                <Grid container spacing={2}>
                    {isFetching || !data ? (
                        [...Array(12)].map((_, key) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={key}>
                                <Skeleton sx={{backgroundColor: 'primary'}} variant="rectangular" width="100%" height={400} />
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
            {/* </InfiniteScroll> */}
        </Container>
    );
};

export default Index;
