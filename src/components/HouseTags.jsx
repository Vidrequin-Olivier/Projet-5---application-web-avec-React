export default function HouseTags( { house } ) {
  const housesTags = house.tags.map((tag, index) => (
    <p key={index}>{tag}</p>
  ));

  return <> {housesTags} </>
}
