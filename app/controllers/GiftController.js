import { AppState } from "../AppState.js";
import { giftService } from "../services/GiftService.js"
import { setHTML } from "../utils/Writer.js";

function _drawApiGiftsList(){
  let content = ''
  AppState.gifts.forEach(gift => content += gift.GiftTemplateList)
  setHTML('gift-list-area', content)

}

export class GiftController {
  constructor() {
    console.log('This is the Gift Controller')
    AppState.on('user', this.getGiftApi)
    AppState.on('gifts', _drawApiGiftsList)
  }

  async getGiftApi(){
    try {
      await giftService.getGiftApi()
    } catch (error) {
      console.error(error);
    }
  }

  async openGift(id){
    try{
      giftService.openGift(id)
    }
    catch(error){
      console.log(error)
    }
    

  }
}
