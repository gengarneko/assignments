// 1.数据初始化
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']

// 2.键盘样式生成
buildKeyboard(keys, hash)

// 3.事件监听
listenToUser(hash)


// 各种工具类
// 获取本地数据
function getFromLocalStorage (name) {
  return JSON.parse(localStorage.getItem(name) || 'null')
}
// 创建元素
function tag (tagName) {
  return document.createElement(tagName)
}
// 创建 span 元素
function createSpan (textContent) {
  var span = tag('span')
  span.textContent = textContent
  span.className = "text"
  return span
}
// 创建 button 按钮
function createButton (id) {
  var button = tag('button')
  button.textContent = 'E'
  button.id = id
  button.onclick = function (e) {
    var button2 = e.target
    var img2 = button2.previousSibling
    var key = button2['id']
    var x = prompt('输入网址：')
    hash[key] = x
    img2.src = 'http://' + x + '/favicon.ico'
    img2.onerror = function (xxx) {
      xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    localStorage.setItem('zzz', JSON.stringify(hash))
  }
  return button
}
// 创建图片
function createImage (domain) {
  var img = tag('img')
  if (domain) {
    img.src = 'http://'+ domain + '/favicon.ico'
  } else {
    img.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
  }
  img.onerror = function(xxx){
    xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
  }
  return img
}
// 初始化
function init () {
  var keys = {
    '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    'length': 3
  }
  var hash = {
    'q': 'quora.com',
    'w': 'weibo.com',
    'e': 'ele.me',
    'r': 'ruby-lang.org',
    't': 'taobao.com',
    'y': 'youtube.com',
    'u': '',
    'i': 'iviewui.com',
    'o': 'opera.com',
    'b': 'bilibili.com'
  }
  // 取出 localStorage 中的 zzz 对应的 hash
  var hashInLocalStorage = getFromLocalStorage('zzz')
  if(hashInLocalStorage){
    hash = hashInLocalStorage
  }
  return {
    "keys": keys,
    "hash": hash
  }
}
// 样式初始化
function buildKeyboard () {
  for (var index=0; index< keys['length']; index = index+1 ) {
    var div = tag('div')
    main = document.getElementById('wrapper')
    div.className = 'row'
    main.appendChild(div)
    var row = keys[index]  // 第一个数组  第二个数组  第三个数组
    for (var index2 =0;index2< row['length']; index2 = index2 + 1) {
      var span = createSpan(row[index2])
      var button = createButton(row[index2])
      var img = createImage(hash[row[index2]])
      var kbd = tag('kbd')
      kbd.className = 'key'
      var inner = tag('div')
      inner.className = 'keyInner'
      inner.appendChild(span)
      inner.appendChild(img)
      inner.appendChild(button)
      kbd.appendChild(inner)
      div.appendChild(kbd)
    }
  }
}
// 事件监听
function listenToUser (hash) {
  document.onkeypress = function(xzkjcnxlkcjlk){
    var key = xzkjcnxlkcjlk['key'] // q w e
    var website = hash[key]
    //location.href = 'http://'+website
    window.open('http://'+website, '_blank')
  }
}