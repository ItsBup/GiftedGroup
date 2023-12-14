import { AppState } from "../AppState.js";
import { giftService } from "../services/GiftService.js"

export class GiftController {
  constructor() {
    console.log('This is the Gift Controller')
    AppState.on('user', this.getGiftApi)
  }

  async getGiftApi(){
    try {
      await giftService.getGiftApi()
    } catch (error) {
      console.error(error);
    }
  }

}
