import React from 'react';
import useSWR from 'swr'
import Layout from '../components/Layout'
import fetcher from '../lib/fetcher'
import StatBoard from '../components/StatBoard'
import { Loading } from '@zeit-ui/react'
const index = () => {

    const { data, error } = useSWR(`/api`, fetcher)


    return (
        <Layout>
        
            {!data && <Loading size="large"/> }
            { data && <StatBoard {...data} />}
        </Layout>
    );
}

export default index;
