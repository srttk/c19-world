import React, { useState} from 'react';
import useSWR from 'swr'
import { Select, Loading , Card, Text, Grid} from '@zeit-ui/react'
import { Heart, Meh, Activity } from '@zeit-ui/react-icons'
import fetcher from '../../lib/fetcher'
import OverallCount from './OverallCount'
import Detailed from './Detailed'

const CountryStat = () => {

    const [country, setCountry] = useState("IND")

    const { data , error} = useSWR('/api/countries', fetcher)


    const { data: countryData } = useSWR(`/api/countries/${country}`, fetcher)

    function handleCountrySelection(countryCode) {
        
        setCountry(countryCode)
    }

    return (
        <Card shadow style={{marginTop:"30px"}}>
            <div>
            <Text span type="secondary" style={{marginRight:"9px"}}>Select country</Text>
            <Select 
                value={country}
              onChange={handleCountrySelection}
            >
                { data && data.countries && 
                  data.countries.map(country => 
                    
                  <Select.Option
                   key={country.iso3+country.name} 
                   value={country.iso3 || country.iso2 ||country.name}
                 
                   >{country.name}</Select.Option>
                    )
                }
            </Select>
            </div>
            {/* Country data */}
            {!countryData &&  <Loading/>}
            {countryData&& <div style={{marginTop:"12px"}}>
                <Grid.Container gap={1}>
                    <Grid xs={24} md={8}>
                        <OverallCount title="Confirmed" cardType="warning" item={countryData.confirmed} Icon={Activity}/>
                    </Grid>
                    <Grid xs={24} md={8}>
                        <OverallCount title="Deaths" cardType="error" item={countryData.deaths} Icon={Meh}/>
                    </Grid>
                    <Grid xs={24} md={8}>
                        <OverallCount title="Recovered" cardType="success" item={countryData.recovered} Icon={Heart}/>
                    </Grid>

                </Grid.Container>
            </div>}

            {/* Country detail */}
            { country && (<div style={{marginTop:"24px"}}>
                <Detailed country={country}/>
            </div>)}

        </Card>
    );
}

export default CountryStat;
