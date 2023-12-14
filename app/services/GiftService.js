import { api } from "./AxiosService.js";
import { Gift } from "../models/Gift.js";
import { AppState } from "../AppState.js";

class GiftService {
  async getGiftApi(){
    const response = await api.get('api/gifts')
    AppState.gifts = response.data.map(gift => new Gift(gift))
    console.log(';-;', AppState.gifts)
  }
}

export const giftService = new GiftService()
