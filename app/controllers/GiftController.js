import { giftService } from "../services/GiftService.js"

export class GiftController {
  constructor() {
    console.log('This is the Gift Controller')
  }

  async getGiftApi(){
    try {
      giftService.getGiftApi()
    } catch (error) {
      console.error(error);
    }
  }

}
