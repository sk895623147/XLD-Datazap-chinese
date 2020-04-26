// ==UserScript==
// @name         Datazap LOG數據 中文化腳本 XLD_Coding Beta V1
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the world!
// @author       XLD_Coding
// @match        *://datazap.me/u/*
// @grant        none
// @run-at       document-end
// ==/UserScript==
var logo = document.createElement("div");
logo.innerHTML = '<div style="text-align:center;color:#FFFFFF;font-size:40px;background-color:#2C2E33;padding:20px;">XLD-DataZap中文化插件V1</div>'
document.body.insertBefore(logo, document.body.firstChild);
'use strict'
const i18n = new Map([
//介面
['Login', '登入'],
['Create Account', '註冊'],
['Upload Log', '上傳數據'],
['Menu', '選單'],
['Logout', '登出'],
['Share Chart', '分享數據'],
['Change Log', '切換數據'],
['Save PNG', '儲存圖片'],
['Chart Size', '視窗大小'],
['Gauge View', '參數觀看'],
['Clear Markers', '刪除標記'],
['Zoom Out', '縮小'],
['Trim', '修剪'],
['Play', '播放'],
['Playback Speed', '播放速度,越小越快'],
['Layout', '慣用顯示參數'],
['My Datalogs', '我的上傳數據紀錄'],
['Account Settings', '帳戶設置'],
['Upload English CSV', '上傳數據'],
['Download', '下載'],
['Favorite Log', '喜好數據'],
['Datazap.me', 'Datazap.me-中文化腳本-XLD'],

//參數
['time', '時間'],
['rpm', '轉速'],
['accel ped. pos. %', '油門深度'],
['amb pressure bar', '環境氣壓bar'],
['amb pressure psi', '環境氣壓psi'],

['boost bar', '增壓值bar'],
['boost psi', '增壓值psi'],
['boost setpoint', '增壓設置係數'],

['boost target bar', '目標增壓值bar'],
['boost target psi', '目標增壓值psi'],

['cyl1 timing cor *', '1缸點火校正'],
['cyl2 timing cor *', '2缸點火校正'],
['cyl3 timing cor *', '3缸點火校正'],
['cyl4 timing cor *', '4缸點火校正'],
['cyl5 timing cor *', '5缸點火校正'],
['cyl6 timing cor *', '6缸點火校正'],
['fuel low pressure sensor bar', '低壓泵傳感器bar'],
['fuel low pressure sensor psi', '低壓泵傳感器psi'],
['gear', '檔位'],
['iat', '進氣溫度'],
['lambda bank 1 afr', '含氧1空燃比'],
['lambda bank 2 afr', '含氧2空燃比'],
['oil temp', '機油溫度'],
['timing cyl. 1 ', '1缸點火提前角'],
['timing cyl. 2 ', '2缸點火提前角'],
['timing cyl. 3 ', '3缸點火提前角'],
['timing cyl. 4 ', '4缸點火提前角'],
['timing cyl. 5 ', '5缸點火提前角'],
['timing cyl. 6 ', '6缸點火提前角'],
['throttle position', '節流閥位置'],
['rail pressure bar', '燃油壓力psi'],
['rail pressure psi', '燃油壓力psi'],
['actual load', '實際負載'],
['load actual', '實際負載'],
['torque actual value nm', '實際扭力nm'],
['torque lim. active', '有效扭力限制'],
['fuel mode', '燃油模式'],

['coolant temp', '水溫'],
['stft 1 %', '短燃油修正1側%'],
['stft 2 %', '短燃油修正2側%'],
['ltft 1 %', '長燃油修正1側%'],
['ltft 2 %', '長燃油修正2側%'],
['load req.', '請求負載'],
['load requested', '請求負載'],
['maf g/s', '空氣流量 g/s'],
['maf req wgdc g/s', '請求空流'],
['wgdc after pid %', 'PID後廢氣閥佔空比'],
['wgdc base value %', '基礎廢氣閥佔空比'],









])

replaceText(document.body)

const bodyObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(addedNode => replaceText(addedNode))
  })
})
bodyObserver.observe(document.body, { childList: true, subtree: true })

function replaceText(node) {
  nodeForEach(node).forEach(htmlnode => {
    i18n.forEach((value, index) => {
      // includes可直接使用 === 以提高匹配精度
      const textReg = new RegExp(index, 'g')
      if (htmlnode instanceof Text && htmlnode.nodeValue.includes(index))
        htmlnode.nodeValue = htmlnode.nodeValue.replace(textReg, value)
      else if (htmlnode instanceof HTMLInputElement && htmlnode.value.includes(index))
        htmlnode.value = htmlnode.value.replace(textReg, value)
    })
  })
}

function nodeForEach(node) {
  const list = []
  if (node.childNodes.length === 0) list.push(node)
  else {
    node.childNodes.forEach(child => {
      if (child.childNodes.length === 0) list.push(child)
      else list.push(...nodeForEach(child))
    })
  }
  return list
}