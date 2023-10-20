import volunteeringsData from "../assets/volunteerings.json";
import LocationIcon from "../assets/location.png";

function DisplayVolunteerings() {
  return (
    <>
      {volunteeringsData.map((volunteering) => (
        <div key={volunteering.id}>
          <img src={LocationIcon} style={{ maxHeight: "20px" }} />
          <h2>{volunteering.place}</h2>
          <p>{volunteering.people_registered}</p>
          <p>{volunteering.date}</p>
        </div>
      ))}
    </>
  );
}

export default DisplayVolunteerings;
