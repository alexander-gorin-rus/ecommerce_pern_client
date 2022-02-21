import { $host, $authHost } from ".";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type/create', {type});
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type/get-types');
    return data  
}

export const createBrand = async (type) => {
    const {data} = await $authHost.post('api/brand/create', {type});
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand/get-brands');
    return data  
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device/create', {device});
    return data
}

export const fetchDevices = async () => {
    const {data} = await $host.get('api/device/get-devices');
    return data  
}

export const fetchDevice = async (id) => {
    const {data} = await $host.get(`api/device/get-device/${id}`);
    return data  
}
