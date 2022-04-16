import { useEffect, useState } from "react";

export const useQueryString = (filters: string[], startDate: string, endDate: string) => {
    const [queryString, setQueryString] = useState('');

    useEffect(() => {
        if (filters.length > 0) {
            let newQueryString = '';

            for (let i = 0; i < filters.length; i++) {
                newQueryString += `contenttype:"${filters[i]}"`

                if (i !== filters.length - 1) {
                    newQueryString += ' OR '
                }
            }

            if (startDate !== '' && endDate !== '') {
                newQueryString += ` (StartDate >= ${startDate} AND StartDate <= ${endDate})`
            }

            setQueryString(newQueryString)
        }
    }, [filters, startDate])

    return {
        queryString
    }
}