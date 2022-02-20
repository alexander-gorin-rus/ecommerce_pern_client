import { $host, $authHost } from ".";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type/create', {type});
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type/get-types');
    return data  
}
