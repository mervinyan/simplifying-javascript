class Coupon {
  constructor(price, expiration) {
    this._price = price;
    this.expiration = expiration || 'two weeks';
  }

  get priceText() {
    return `$ ${this._price}`;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    const newPrice = price.toString().replace(/[^\d]/g, '');
    this._price = newPrice;
  }

  get expirationMessage() {
    return `This offer expires in ${this.expiration}.`;
  }

}

const coupon = new Coupon(5);

console.log(coupon.priceText);
console.log(coupon.price);

console.log(coupon.expirationMessage);

coupon.price = 10;

console.log(coupon.price);

console.log(coupon.priceText);

