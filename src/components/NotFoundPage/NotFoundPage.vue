<template>
  <main class="not-found-page">
    <h1>Ошибка 404. Страница не найдена.</h1>
    <p>Запрашиваемая Вами страница не найдена. Попробуйте начать с <router-link :to="mainPageLink">главной страницы.</router-link></p>
  </main>
</template>

<script>
import { MAIN_PAGE_LINK } from '../../GlobalConstants';

export default {
  name: 'NotFoundPage',
  data() {
    return {
      mainPageLink: MAIN_PAGE_LINK,
    };
  },
};
</script>

<style lang="scss" scoped>
.not-found-page {
  max-width: 1140px;
  margin: 50px auto;
}
</style>
