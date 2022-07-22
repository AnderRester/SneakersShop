import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [

        ]
        this._brands = [
            {id: 0, name: "Nike"},
            {id: 1, name: "Adidas"},
            {id: 2, name: "Kelme"},
            {id: 3, name: "ESG-Custom"},
            {id: 4, name: "Veer"}
        ]
        this._devices = [
            {id: 1, name: "Ultraboost 22", price: 700, rating: 5, img: "https://www.tradeinn.com/f/13842/138429797/adidas-ultraboost-22-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg"},
            {id: 1, name: "Megaboost 02", price: 700, rating: 5, img: "https://www.tradeinn.com/f/13842/138429797/adidas-ultraboost-22-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg"},
            {id: 1, name: "Gboost 001", price: 700, rating: 5, img: "https://www.tradeinn.com/f/13842/138429797/adidas-ultraboost-22-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg"},
            {id: 1, name: "Megaboost 02", price: 700, rating: 5, img: "https://www.tradeinn.com/f/13842/138429797/adidas-ultraboost-22-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg"},
            {id: 1, name: "Gboost 001", price: 700, rating: 5, img: "https://www.tradeinn.com/f/13842/138429797/adidas-ultraboost-22-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg"},
            {id: 1, name: "Megaboost 02", price: 700, rating: 5, img: "https://www.tradeinn.com/f/13842/138429797/adidas-ultraboost-22-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg"},
            {id: 1, name: "Gboost 001", price: 700, rating: 5, img: "https://www.tradeinn.com/f/13842/138429797/adidas-ultraboost-22-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg"},
            {id: 1, name: "Megaboost 02", price: 700, rating: 5, img: "https://www.tradeinn.com/f/13842/138429797/adidas-ultraboost-22-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg"},
            {id: 1, name: "Gboost 001", price: 700, rating: 5, img: "https://www.tradeinn.com/f/13842/138429797/adidas-ultraboost-22-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg"},
            {id: 1, name: "ESGboost 99", price: 700, rating: 5, img: "https://www.tradeinn.com/f/13842/138429797/adidas-ultraboost-22-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg"}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }


    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }


    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}