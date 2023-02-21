import Vue from 'vue'
import _ConfirmBoxComponent from './ConfirmBox.vue'

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
