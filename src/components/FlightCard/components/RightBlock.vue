<template>
  <div class="right-block">
    <div class="price-order-button">
      <span class="price">{{ flight.price }} <sub>&#8376;</sub></span>
    <a class="order-btn" href="#" @click.prevent>Выбрать</a>
    </div>
    <span class="price-includes">Цена за всех пассажиров</span>
    <div class="luggage-info">
      <span class="luggage-offer">{{ baggageInfo }}</span>
      <a class="add-luggage-btn" href="#" @click.prevent>&plus; Добавить багаж</a>
    </div>
  </div>
</template>
<script>
const ServiceTypeMapper = {
  '20KG': '20 кг',
  '0PC': 'Без багажа',
  '1PC': '1 шт',
};

export default {
  name: 'FlightCardRightBlock',
  props: {
    flight: {
      type: Object,
      required: true,
    },
  },
  computed: {
    baggageInfo() {
      const servicesList = Object.keys(this.flight.services);

      return ServiceTypeMapper[servicesList[0]];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';
@import '../../../styles/mixins.scss';

.right-block {
  @include wh(100%, 100%);
  max-width: 240px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: $padding-optimum 20px;

  background-color: #f5f5f5;
}

.price-order-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.price {
  padding-bottom: $padding-optimum;

  font-family: Arial;
  font-size: $large-font-size;
  line-height: 28px;

  sub {
    font-size: 16px;
    position: static;
  }
}

.order-btn {
  @include anchor-button;
  @include wh(200px, 40px);

  padding: 8px 12px;
  margin-bottom: 8px;

  background: #55bb06;
  border-radius: 4px;

  font-weight: 700;
  font-size: $medium-font-size;
  line-height: 25px;
  color: #fff;
}

.price-includes {
  color: #707276;
  margin-bottom: 16px;
}

.luggage-info {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 4px;

}
.add-luggage-btn {
    @include anchor-button;
    @include wh(100%, 24);

    padding: 3px 8px;

    background: #eaf0fa;
    border-radius: 2px;

    color: #5763b3;
  }

  .luggage-offer {
    min-width: 68px;
    text-align: center;
  }
@media screen and (max-width: 940px) {
  .right-block{
    max-width: none;
  }

  .price-order-button {
    flex-direction: row;
    gap: 20px;
  }
}

@media screen and (max-width: 710px) {
  .luggage-offer {
    position: absolute;
    top: 20px;
    right: 20px;
    text-align: right;
  }

  .price-order-button {
    flex-direction: column;
    gap: 0;
  }

  .add-luggage-btn {
    display: none;
  }
}
</style>
