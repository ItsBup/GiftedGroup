import { api } from "./AxiosService.js";
import { Gift } from "../models/Gift.js";

class GiftService {
  async getGiftApi(){
    const response = await api.get('api/gifts')
    response.data.map(gift => new Gift)
  }
}

export const giftService = new GiftService()
