import { api } from "./AxiosService.js";


class GiftService {
  async getGiftApi(){
    const response = await api.get('api/gifts')
    console.log(response)
  }
}

export const giftService = new GiftService()
