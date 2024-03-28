import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import axios from "axios"
export default function SearchPlant() {
    const [search, setSearch] = useState("");
    const [plants, setPlants] = useState([]);

    const searchPlant = async () => {
        const response = await axios.post("http://localhost:3000/model", {
        name: search,
      });
      // console.log(response.data.message);
      const lala = response.data.message;
      const temp = lala.split("\n");
      
      setPlants(temp);
    }
  return (
    <div className="flex flex-col w-full max-w-sm items-center space-x-2">
    <div className="flex flex-row gap-3 p-5">
      <Input type="email" placeholder="Enter Plant name" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
      <Button type="submit" onClick={searchPlant}>Search</Button>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg w-[850px]">
        {plants.map((plant, index) => (
          <div key={index} >
            <p className="text-xl font-bold">{plant}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
