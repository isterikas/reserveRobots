import { useState } from "react";
import { robots } from "../assets/robots";

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
        {searchText
          ? reservedValue
              .filter((item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="bg-gray-300 m-3 flex flex-col items-center rounded p-3"
                  >
                    <div
                      className={
                        item.reserved == "true"
                          ? "grayscale flex flex-col items-center"
                          : "grayscale-0 flex flex-col items-center"
                      }
                    >
                      <figure>
                        <img src={item.avatar} alt="avatar" />
                      </figure>
                      <p className="text-xl">{item.name}</p>
                      <p>{item.username}</p>
                      <p>{item.email}</p>
                      {item.reserved == "true" ? (
                        <span className="italic font-bold">
                          The robot is already reserved
                        </span>
                      ) : (
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white rounded p-2 m-3"
                          onClick={() => {
                            reservedValue[index].reserved = "true";
                            setReservedValue(reservedValue);
                          }}
                        >
                          reserve
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
          : reservedValue.map((item, index) => {
              return (
                <div key={item.id} className="bg-gray-300 m-3 rounded p-3">
                  <div
                    className={
                      item.reserved == "true"
                        ? "grayscale flex flex-col items-center"
                        : "grayscale-0 flex flex-col items-center"
                    }
                  >
                    <figure>
                      <img src={item.avatar} alt="avatar" />
                    </figure>
                    <p className="text-xl">{item.name}</p>
                    <p>{item.username}</p>
                    <p>{item.email}</p>
                    {item.reserved == "true" ? (
                      <span className="italic font-bold">
                        The robot is already reserved
                      </span>
                    ) : (
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white rounded p-2 m-3"
                        onClick={() => {
                          reservedValue[index].reserved = "true";
                          setReservedValue(reservedValue);
                        }}
                      >
                        reserve
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default RobotCards;
