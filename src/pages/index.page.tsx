import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import Button from 'components/Button'
import { useEffect, useState } from 'react'
import { api } from 'services/api'
import * as S from './styles'

interface VehiclesEntity {
  chassis: string
  type: string
  number_passengers: number
  color: string
}

export default function Home() {
  const [vehicles, setVehicles] = useState<VehiclesEntity[]>([])

useEffect(() => {
  api.get('vehicles').then(res => setVehicles(res.data))
}, [])

  return (
    <S.Container>

    <S.Wrapper>
      <input type="search" placeholder='Search by ChassisId' />
      <Button title='Add vehicle' iconAdd={true} onClick={() => {}}/>
    </S.Wrapper>
      <S.Table>
        <S.TableHeader>
            <th>Chassis Id</th>
            <th>Type of vehicle</th>
            <th>Number of passengers</th>
            <th>Color</th>
            <th></th>
            <th></th>
        </S.TableHeader>
        <S.List>
        {

          vehicles.map(row => (
            console.log(row.number_passengers),
            <S.Row key={row.chassis}>
              <p>{row.chassis}</p>
              <p>{row.type}</p>
              <p>{row.number_passengers}</p>
              <p>{row.color}</p>
              {/* <a onClick={() => {handleOpenModalDelete(), setVehicle(row)}}><Trash color="#FF5555" size={18} /></a>
              <a onClick={() => {handleOpenModalDelete(), setVehicle(row)}}><Trash color="#FF5555" size={18} /></a> */}
              <a onClick={() => {}}><FaEdit color="#111616" size={18} /></a>
              <a onClick={() => {}}><FaTrashAlt color="#111616" size={18} /></a>
            </S.Row>
          ))
        }
        </S.List>
        </S.Table>
    </S.Container>

  )
}
