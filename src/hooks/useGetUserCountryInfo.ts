import { useState, useEffect } from 'react'
import axios from 'axios'

type CountryProps = Partial<{
  country: string
  currency: string
}>

const useGetUserCountryInfo = () => {
  const [country, setCountry] = useState<CountryProps>({} as CountryProps)
  useEffect(() => {
    try {
      const getUserCountry = async () => {
        const { data } = await axios.get('https://ipapi.co/json/')
        setCountry(data)
      }
      getUserCountry()
    } catch (e) {
      setCountry({ country: 'PH', currency: 'PHP' })
    }
  }, [])
  return country
}

export default useGetUserCountryInfo
