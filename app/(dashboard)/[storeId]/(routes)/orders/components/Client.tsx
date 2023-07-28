"use client";


import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import { Columns, OrderColumn } from './Columns';
import { DataTable } from '@/components/ui/data-table';
import ApiList from '@/components/ui/api-list';

interface OrderClientProps {
    data: OrderColumn[]
}

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
    const router = useRouter();
    const params = useParams();
    return (
        <>
            <Heading title={`Orders (${data.length})`} description='Manage orders for your store' />
            <Separator />
            <DataTable columns={Columns} data={data} searchKey='products' />
        </>
    )
}

export default OrderClient