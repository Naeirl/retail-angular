export class Additem {
  id: number;
  barcode: number;
  name: string;
  description: string;

  constructor(json: string) {
    const jsonObject = JSON.parse(json);
    this.id = jsonObject.id;
    this.barcode = jsonObject.barcode;
    this.name = jsonObject.name;
    this.description = jsonObject.description;
  }
}
