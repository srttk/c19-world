import React, { useState} from 'react';
import useSWR from 'swr'
import { Select, Loading , Card, Text, Grid} from '@zeit-ui/react'
import fetcher from '../../lib/fetcher'

const CountryStat = () => {

    const [country, setCountry] = useState("IND")

    const { data , error} = useSWR('/api/countries', fetcher)


    const { data: countryData } = useSWR(`/api/countries/${country}`, fetcher)

    console.log('>',countryData)

    function handleCountrySelection(countryCode) {
        
        setCountry(countryCode)
    }

    console.log('Data ', data)
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
                        <Card>
                            <Text h3 type="warning">Active</Text>
                            <Text h4 type="secondary">{countryData.confirmed.value}</Text>
                        </Card>
                    </Grid>
                    <Grid xs={24} md={8}>
                        <Card>
                            <Text h3 type="error">Deaths</Text>
                            <Text h4 type="secondary">{countryData.deaths.value}</Text>
                        </Card>
                    </Grid>
                    <Grid xs={24} md={8}>
                        <Card>
                            <Text h3 type="success">Recovered</Text>
                            <Text h4 type="secondary">{countryData.recovered.value}</Text>
                        </Card>
                    </Grid>

                </Grid.Container>
            </div>}

        </Card>
    );
}

export default CountryStat;
