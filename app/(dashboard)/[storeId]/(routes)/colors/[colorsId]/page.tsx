import prismadb from '@/lib/prismadb'
import React from 'react'
import CategoryForm from './components/SizeForm'

const ColorPage = async ({ params }: { params: { colorId:string } }) => {
    const color = await prismadb.color.findUnique({
        where: {
            id: params.sizeId
        }
    })

   
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoryForm initialData={size} />
            </div>
        </div>
    )
}

export default ColorPage