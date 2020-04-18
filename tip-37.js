class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || 'two weeks';
  }

  getPriceText() {
    return `$ ${this.price}`;
  }

  getExpirationMessage() {
    return `This offer expires in ${this.expiration}.`;
  }
}

const coupon = new Coupon(5);

console.log(coupon.getPriceText());

console.log(coupon.getExpirationMessage());

class FlashCoupon extends Coupon {
  constructor(price, expiration) {
    super(price);
    this.expiration = expiration || 'two hours';
  }
}

const flash = new FlashCoupon(10);

console.log(flash.getPriceText());

console.log(flash.getExpirationMessage());