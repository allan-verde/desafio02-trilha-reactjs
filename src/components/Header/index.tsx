import { useNavigate } from 'react-router-dom'

import { MapPin } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'

import { Container, Actions, Location } from './styles'
import { useTheme } from 'styled-components'
import { Cart } from '../Cart'
import { useEffect, useState } from 'react'

export function Header() {
  const theme = useTheme()
  const navigate = useNavigate()

  const [location, setLocation] = useState<{ city: string, state: string }>({
    city: '',
    state: '',
  })

  function handleNavitationToCheckout() {
    navigate('/checkout')
  }

  function handleNavigationGoHome() {
    navigate('/')
  }

  async function fetchLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords

          try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`)

            const data = await response.json()
            const addressComponents = data.results[0].address_components

            let city = ''
            let state = ''

            for (const component of addressComponents) {
              if (component.types.includes('administrative_area_level_2')) {
                city = component.long_name
              } else if (component.types.includes('administrative_area_level_1')) {
                state = component.short_name
              }
            }

            setLocation({
              city,
              state,
            })
          } catch (error) {
            console.error(error)
          }
        },
        (error) => {
          console.error(error)
        }
      )
    }
  }

  useEffect(() => {
    fetchLocation()
  }, [])

  return (
    <Container>
      <img src={logoImg} alt="" onClick={handleNavigationGoHome} />

      <Actions>
        <Location>
          <button onClick={fetchLocation}>
            <MapPin
              size={22}
              weight="fill"
              color={theme.purple}
            />
          </button>
          {location.city && location.state && (
            <p>{`${location.city}, ${location.state}`}</p>
          )}
        </Location>

        <Cart onClick={handleNavitationToCheckout} />
      </Actions>
    </Container>
  )
}