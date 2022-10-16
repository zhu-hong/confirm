interface IConfirmConfig {
  /**
   * @default '提示'
   * @description 标题文字
   */
  title: string
  /**
   * @default '😅'
   * @description 内容
   */
  content: string
  /**
   * @default '确定'
   * @description 确认按钮文字
   */
  confirmText: string
  /**
   * @default '取消'
   * @description 取消按钮文字
   */
  cancelText: string
  /**
   * @default false
   * @description 确认按钮是否为危险类型
   */
  isDanger: boolean
  /**
   * @default true
   * @description 显示取消按钮
   */
  showCancel: boolean
  /**
   * @default false
   * @description 显示关闭图标
   */
  showClose: boolean,
  /**
   * @default '#FF9900'
   * @description 图标颜色
   */
  fill: string
  /**
   * @default true
   * @description 显示遮罩层
   */
  modal: boolean
  /**
   * @default '440px'
   * @description 确认框宽度
   */
  width: string
  /**
   * @default '25vh'
   * @description 确认框距离顶部的距离
   */
  top: string
}

declare function useConfirm(config?: IConfirmConfig): Promise<void>

export {
  useConfirm
}