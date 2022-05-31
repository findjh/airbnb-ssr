import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'
const i18n = createI18n({
  locale: 'zh-cn',
  legacy: false,
  messages: {
    'zh-cn': zh,
    en
  }
})
export default i18n
