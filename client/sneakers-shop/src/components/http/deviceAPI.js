import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $host.get('api/type', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async (brand) => {
    const {data} = await $host.get('api/type', brand)
    return data
}

export const fetchDevices = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const fetchOneDevice = async () => {
    const {data} = await $host.get('api/brand')
    return data
}