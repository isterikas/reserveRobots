export default function RobotCard({ item, reservedValue, setReservedValue }) {
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
              setReservedValue(
                reservedValue.map((robot) => {
                  return robot.id === item.id
                    ? { ...robot, reserved: "true" }
                    : robot;
                })
              );
            }}
          >
            reserve
          </button>
        )}
      </div>
    </div>
  );
}
