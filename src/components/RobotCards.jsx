import { useState } from "react";
import { robots } from "../assets/robots";
import RobotCard from "./RobotCard";

function RobotCards() {
  const [searchText, setSearchText] = useState("");
  const [reservedValue, setReservedValue] = useState(robots);

  return (
    <>
      <div className="bg-teal-500 p-3 flex flex-col items-start font-serif">
        <h1 className="text-5xl m-2">Robofriends 🤖</h1>
        <input
          type="text"
          className="rounded w-80"
          name="search"
          id="search"
          placeholder="search for a monster..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="bg-teal-600 p-3 grid grid-cols-3">
        {reservedValue
          .filter(
            (item) =>
              item.name.toLowerCase().includes(searchText.toLowerCase()) ||
              item.username.toLowerCase().includes(searchText.toLowerCase()) ||
              item.email.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item) => {
            return (
              <RobotCard
                key={item.id}
                item={item}
                reservedValue={reservedValue}
                setReservedValue={setReservedValue}
              />
            );
          })}
      </div>
    </>
  );
}

export default RobotCards;
