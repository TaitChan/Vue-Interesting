/**
 * 访问状态枚举
 * @type {{a: string, f: string}}
 */
export const access = {
  f: '禁止',
  a: '允许',
}
export const access_Color = {
  f: 'danger',
  a: 'success',
}
export function getAccess(key) {
  return access[key]
}
export function getAccessColor(key) {
  return access_Color[key]
}

/**
 * 操作弹窗枚举
 * @type {{add: string, edit: string, show: string}}
 */
export const dialogTitle = {
  add: '添加',
  edit: '编辑',
  show: '查看',
}
export function getDialogTitle(key) {
  return dialogTitle[key]
}
export const dialogDom = {
  add: true,
  edit: true,
  show: false,
}
export function getDialogDom(key) {
  return dialogDom[key]
}

/**
 * 搜索表单枚举
 * @type {{true: string, false: string}}
 */
export const queryFlag = {
  true: '收起搜索',
  false: '展开搜索',
}
export const queryFlagIcon = {
  true: 'el-icon-top',
  false: 'el-icon-bottom',
}
export function getQueryFlag(key) {
  return queryFlag[key]
}
export function getQueryFlagIcon(key) {
  return queryFlagIcon[key]
}
