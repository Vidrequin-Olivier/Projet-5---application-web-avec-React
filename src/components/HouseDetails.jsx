import { useHouse } from "../contexts/HouseContext"
import EquipmentsList from "./EquipmentsList"
import DropdownBar from "./DropdownBar"

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