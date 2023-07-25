import prismadb from "@/lib/prismadb"
import { format } from "date-fns"
import SizeClient from "./components/Client"
import { ColorsColumn } from "./components/Columns"
import ColorsClient from "./components/Client"

const ColorsPage = async ({params}:{params:{colorsId: string}}) => {
  const colors = await prismadb.color.findMany({
    where:{
      storeId: params.colorsId
    },
    orderBy:{
      createdAt: 'desc'
    }
  })

  const formattedColors : ColorsColumn[] = colors.map((item)=>({
    
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt,"MMMM do, yyyy"),

  }))
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient  data={formattedColors}/>
      </div>
    </div>
  )
}

export default ColorsPage