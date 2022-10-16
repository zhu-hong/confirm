import Vue from 'vue'
import _ConfirmBoxComponent from './ConfirmBox.vue'

/** 
 * @param { object } config
 * @param { string } config.title
 * @param { string } config.content
 * @param { string } config.confirmText
 * @param { string } config.cancelText
 * @param { boolean } config.isDanger
 * @param { boolean } config.showCancel
 * @param { string } config.showClose
 * @param { string } config.fill
 * @param { string } config.modal
 * @param { string } config.width
 * @param { string } config.top
 * @returns { Promise<void> }
*/
export function useConfirm(config) {
  return new Promise((resolve, reject) => {
    const ConfirmBox = new Vue({
      render: (h) => h(_ConfirmBoxComponent, {
        props: {
          resolve,
          reject,
          ...config,
        },
      })
    }).$mount()

    document.body.append(ConfirmBox.$el)
  })
}
