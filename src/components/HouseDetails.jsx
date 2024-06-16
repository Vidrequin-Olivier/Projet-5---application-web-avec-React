import { useHouse } from "../contexts/HouseContext"
import EquipmentsList from "./EquipmentsList"
import Collapse from "./Collapse"

export default function HouseDetails() {
  const house = useHouse()
  const equipmentsList = <EquipmentsList house={house} />

  return (
    <div className="houseDetails">
      <Collapse button="Description" contents={house.description} />
      <Collapse button="Equipements" contents={equipmentsList} />
    </div>
  )
}