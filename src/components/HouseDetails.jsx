import { useHouse } from "../contexts/HouseContext"
import DropdownBar from "./DropdownBar"

function EquipmentsList({ house }) {
  const equipmentsList = house.equipments
  const equipments = equipmentsList.map((equipment, index) => (
    <p key={index}>{equipment}</p>
  ))

  return <>{equipments}</>
}

export default function HouseDetails() {
  const house = useHouse()
  const equipmentsList = <EquipmentsList house={house} />

  return (
    <div className="houseDetails">
      <DropdownBar button="Description" contents={house.description} />
      <DropdownBar button="Equipements" contents={equipmentsList} />
    </div>
  )
}