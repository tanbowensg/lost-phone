import TEXT from '../../data/text.js';
import Store from '../../components/store.js';

const gm = {
  events: {
    firstNoty: () => {
      console.log('第一次启动')
      setTimeout(() => {
        console.log('noty出现')
        Store.noty.show = true;
        Store.noty.from = TEXT.noty.FIRST_NOTY.from;
        Store.noty.content = TEXT.noty.FIRST_NOTY.content;
      }, 5000);
    },
  },
};

export default gm;
