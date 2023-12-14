export class Gift {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.updatedAt = data.updatedAt
  }

  get  GiftTemplateList(){
    return `<div role="button" onclick="app.GiftController.openGift('${this.id}')" class="col-2 m-2 p-1 border border-light rounded">
    <img class="img-fluid rounded" src="${this.url}">
  
    </div>
    `
  }
}