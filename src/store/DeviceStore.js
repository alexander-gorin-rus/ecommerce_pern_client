import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor(){
        this._types = [
            {id: 1, name: 'Smartphones'},
            {id: 2, name: 'Smart TV'},
            {id: 3, name: 'Computers'},
            {id: 4, name: 'Tablets'},
        ]
        this._brands = [
            {id: 1, name: 'Sumsung'},
            {id: 2, name: 'Lenovo'},
            {id: 3, name: 'Apple'},
            {id: 4, name: 'Huawei'},
            {id: 5, name: 'Oppo'},
            {id: 6, name: 'Viva'},
        ]
        this._devices = [
            {id: 1, name: 'Sunset H3', price: 1200, rating: 4, img: 'https://st.depositphotos.com/2562265/5111/i/600/depositphotos_51112145-stock-photo-lenovo-s6000.jpg'},
            {id: 2, name: 'Lenovo', price: 1200, rating: 5, img: 'https://media.istockphoto.com/photos/galaxy-s20-on-a-white-background-picture-id1213025546?k=20&m=1213025546&s=612x612&w=0&h=6gf9I2rZdqGO8ydRhngZ1wpLxkCDZMtCL6FRhXUt5Zk='},
            {id: 3, name: 'MacBook Air Pro', price: 1200, rating: 4, img: 'https://media.gettyimages.com/photos/the-new-macbook-air-is-on-display-as-people-look-at-the-new-apple-at-picture-id1055498542?s=612x612'},
            {id: 4, name: 'Mate X2', price: 1200, rating: 5, img: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/mate-x2/img/kv/huawei-mate-x2-kv@2x.jpg'},
            {id: 5, name: 'Iphone 13', price: 2300, rating: 5, img: 'https://m.media-amazon.com/images/I/61l9ppRIiqL._SX522_.jpg'},
            {id: 6, name: 'X50', price: 1200, rating: 5, img: 'https://i.gadgets360cdn.com/large/vivo_1595327962487.png'},
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