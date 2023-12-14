import { AppState } from "../AppState.js";
import { giftService } from "../services/GiftService.js"
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawApiGiftsList(){
  let content = ''
  AppState.gifts.forEach(gift => content += gift.GiftTemplateList)
  setHTML('gift-list-area', content)
}
// function _createGiftForm(){
//   if(AppState.user){
//     let form = even
//   }
// }

export class GiftController {
  constructor() {
    console.log('This is the Gift Controller')
    AppState.on('user', this.getGiftApi)
    AppState.on('gifts', _drawApiGiftsList)
  }
  async createGift(){
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      console.log('sending to service', formData)
      await giftService.createGift(formData)
      form.reset()
      
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async getGiftApi(){
    try {
      await giftService.getGiftApi()
    } catch (error) {
      console.error(error);
      Pop.error(error)
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
