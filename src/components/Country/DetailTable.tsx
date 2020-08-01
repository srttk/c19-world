import React from 'react';
import { Table, Loading } from '@zeit-ui/react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'

const DetailTable = ({ country = null, fetchSection="confirmed" }) => {
    const { data , error } = useSWR(`/api/countries/${country}/${fetchSection}`, fetcher)
    console.log('tavle data ', data)
    return (
        <div>
            <Table data={data}>
                <Table.Column prop="provinceState" label="Province / State" />
                <Table.Column prop="confirmed" label="Confirmed" />
                <Table.Column prop="deaths" label="Deaths" />
                <Table.Column prop="recovered" label="Recovered" />
                <Table.Column prop="recovered" label="Recovered" />
                <Table.Column prop="incidentRate" label="Incident Rate" />
            </Table>
            { !data && <Loading size="large"/>}
        </div>
    );
}

export default DetailTable;
