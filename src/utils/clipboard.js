import Clipboard from 'clipboard'
import { ElMessage } from 'element-plus'

function clipboardSuccess(text) {
  ElMessage({
    message: `复制${text}成功`,
    type: 'success',
    duration: 1500,
  })
}

function clipboardError(text) {
  ElMessage({
    message: `复制${text}失败`,
    type: 'error',
  })
}

/**
 * @description 复制数据
 * @param text
 * @param event
 */
export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text,
  })
  clipboard.on('success', () => {
    clipboardSuccess(text)
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError(text)
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
