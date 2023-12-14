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
    const openedGift = AppState.gifts.find(gift => gift.id == id)
    openedGift.opened = true
    const response = await api.put(`api/gifts/${this.id}`, openedGift)
    console.log(response)
    AppState.emit('gifts')
    console.log(openedGift)
  }
}

export const giftService = new GiftService()
