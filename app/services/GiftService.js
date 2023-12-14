import { api } from "./AxiosService.js";
import { Gift } from "../models/Gift.js";
import { AppState } from "../AppState.js";

class GiftService {
  async getGiftApi(){
    const response = await api.get('api/gifts')
    AppState.gifts = response.data.map(gift => new Gift(gift))
    console.log(';-;', AppState.gifts)
  }

  async openGift(id){
    let openedGift = AppState.gifts.find(gift => gift.id == id)
    openedGift.opened = true
    console.log(openedGift)
    const response = await api.put(`api/gifts/${id}`, openedGift)
    console.log(response.data)
    const index = AppState.gifts.findIndex(gift => gift.id == id)
    const newGift = new Gift(response.data)
    console.log(index, newGift)
    AppState.gifts.splice(index, 1, newGift)
    // AppState.emit('gifts')
  }
  async createGift(formData){
    let newGift = new Gift(formData)
    const response = await api.post('api/gifts', newGift)
    console.log('the new gift', formData)
    AppState.gifts.push(response.data)

  }
}

export const giftService = new GiftService()
