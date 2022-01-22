<template>
  <div class="right-block">
    <span class="price">590 240 <sub>₸</sub></span>
    <a class="order-btn" href="#" @click.prevent>Выбрать</a>
    <span class="price-includes">Цена за всех пассажиров</span>
    <div class="luggage-info">
      <span class="luggage-offer">Нет багажа</span>
      <a class="add-luggage-btn" href="#" @click.prevent>+ Добавить багаж</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "FlightCardRightBlock",
};
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

.right-block {
  width: 240px;
  height: 100%;
  background-color: #f5f5f5;
  padding: $padding-optimum 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.price {
  font-family: Arial;
  font-size: 24px;
  line-height: 28px;
  padding-bottom: $padding-optimum;

  sub {
    font-size: 16px;
    position: static;
  }
}

.order-btn {
  display: block;
  padding: 8px 12px;
  width: 200px;
  height: 40px;
  background: #55bb06;
  border-radius: 4px;

  display: block;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #fff;
  margin-bottom: 8px;
}

.price-includes {
  color: #707276;
  margin-bottom: 16px;
}

.luggage-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  .add-luggage-btn {
    width: 128px;
    height: 24px;

    display: block;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #eaf0fa;
    border-radius: 2px;

    color: #5763b3;
  }
}
</style>