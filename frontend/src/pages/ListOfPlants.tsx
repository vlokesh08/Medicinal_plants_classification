import plants from "./JsonFiles/AdditionalPlants.json";
import SearchPlant from "./components/SearchPlant";
export const ListOfPlants = () => {
  return (
    <>
      <div className="">
        <div className="mt-5 flex justify-center">
          <SearchPlant />
        </div>
        <div className="grid grid-cols-3 gap-4 m-5 p-5">
          {plants.map((plant) => (
            <div key={plant.id} className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-xl font-bold">{plant.plant_name}</h2>
              <p>{plant.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
