import React from 'react';
import { Table, Loading } from '@geist-ui/react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'

const DetailTable: React.FC<{ country: string, fetchSection?:string}>= ({ country = null, fetchSection="confirmed" }) => {
    const { data , error } = useSWR(`/api/countries/${country}/${fetchSection}`, fetcher)
    return (
        <div>
            <Table data={data ? data.map(d => ({...d,
                confirmed: Number(d.confirmed).toLocaleString(),
                deaths:Number(d.deaths).toLocaleString(),
                recovered:Number(d.recovered).toLocaleString(),
                incidentRate: Number(d.incidentRate).toLocaleString()
                 })):[]}>
                <Table.Column prop="provinceState" label="Province / State" />
                <Table.Column prop="confirmed" label="Confirmed" />
                <Table.Column prop="deaths" label="Deaths" />
                <Table.Column prop="recovered" label="Recovered" />
                <Table.Column prop="incidentRate" label="Incident Rate" />
            </Table>
            { !data && <Loading size="large"/>}
        </div>
    );
}

export default DetailTable;
