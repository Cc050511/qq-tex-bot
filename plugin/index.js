const message = require('../message')
const config = require('../config')
const { am, tex, text } = require('./math')
const rotateImage = require('./rotate')
const oneATwoB = require('./one-a-two-b')
const savePic = require('./save-pic')

const commands = [
  {
    reg: /^\/text/i,
    method: text,
    isFormula: true,
  },
  {
    reg: /^\/tex/i,
    method: tex,
    isFormula: true,
  },
  {
    reg: /^\/am/i,
    method: am,
    isFormula: true,
  },
  // {
  //   reg: /^\/rotate/i,
  //   method: rotateImage,
  // },
  {
    reg: /^\/1a2b/i,
    method: oneATwoB,
  },
  {
    reg: /^\/savepic/i,
    method: savePic.savePic,
    whiteList: [...config.auth.admin],
    whiteGroup: [...config.auth.saveGroup],
  },
  {
    reg: savePic.extReg,
    method: savePic.sendPic,
    trim: false,
  }
]

function checkWhite(list, group, sender) {
  if (!list && !group) return true
  if (list && list.includes(sender.id)) return true
  if (group && sender.group && group.includes(sender.group.id)) return true
  return false
}

function checkBlack(list, group, sender) {
  if (!list && !group) return true
  if (list && list.includes(sender.id)) return false
  if (group && sender.group && group.includes(sender.group.id)) return false
  return true
}

module.exports = function command (text, sender, chain) {
  const { whiteList, whiteGroup, blackList, blackGroup } = config.auth
  // 名单过滤
  if (!checkWhite(whiteList, whiteGroup, sender)) return
  if (!checkBlack(blackList, blackGroup, sender)) return

  // 寻找第一个匹配的命令, 并执行
  for (let i = 0; i < commands.length; ++i) {
    const {
      reg,
      method,
			whiteList,
			whiteGroup,
      blackList,
			blackGroup,
			trim = true,
			isFormula,
		} = commands[i]
    if (!reg.test(text)) continue

    // 名单过滤 (按命令)
    if (!checkWhite(whiteList, whiteGroup, sender)) return
    if (!checkBlack(blackList, blackGroup, sender)) return

    if (trim) {
      text = text.replace(reg, '').trim()
    }
    console.log(sender.id, reg, text)

    // 构造响应体
    return {
      isFormula,
      message: method(text, sender, chain).catch(e => {
        console.error(e);
        return [message.error]
      })
    }
  }
}
