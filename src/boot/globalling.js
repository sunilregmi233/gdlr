import { boot } from 'quasar/wrappers'
import BaseButton from 'components/base-components/BaseButton.vue'
import BaseNav from 'components/base-components/BaseNav.vue'
import BaseCarousel from 'components/base-components/BaseCarousel.vue'
import BaseCard from 'components/base-components/BaseCard.vue'
import BaseFooter from 'components/base-components/BaseFooter.vue'
import BaseCaro from 'components/base-components/BaseCaro.vue'
import BaseSwiperCard from 'components/base-components/BaseSwiperCard.vue'
import About from 'components/About.vue'



export default boot(async ({ app, router }) => {
  app.component('About', About);
  // something to do
  app.component('BaseButton', BaseButton);
  app.component('BaseNav', BaseNav);
  app.component('BaseCarousel', BaseCarousel);
  app.component('BaseCard', BaseCard);
  app.component('BaseFooter', BaseFooter);
  app.component('BaseCaro', BaseCaro);
  app.component('BaseSwiperCard', BaseSwiperCard);

})
