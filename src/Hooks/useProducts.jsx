import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'


export default function useProducts() {

    function getRecent() {

        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    }

    let responseObject = useQuery({
        queryKey: ['recentProducts'],
        queryFn: getRecent,
        // refetchInterval: 5000,
        // refetchIntervalInBackground:true,
        // staleTime: 80000,
        // retry:5,
        // retryDelay:2000,


    })
    return (responseObject)
}
