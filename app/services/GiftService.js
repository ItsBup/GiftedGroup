
class GiftService {
  async getGiftApi(){
    const response = api.get('api/gifs')
    console.log(response)
  }
}

export const giftService = new GiftService()
