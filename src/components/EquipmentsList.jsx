export default function EquipmentsList({ house }) {
  const equipmentsList = house.equipments
  const equipments = equipmentsList.map((equipment, index) => (
    <p key={index}>{equipment}</p>
  ))

  return <>{equipments}</>
}