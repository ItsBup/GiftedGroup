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
}