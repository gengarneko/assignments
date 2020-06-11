var keys = {
  0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  length: 3
}
var hash = {
  'q': 'qq.com',
  'w': 'weibo.com',
  'e': 'ele.me',
  'r': 'renren.com'
}

// 取出 localStorage 中的 zzz 对应的 hash
var hashInLocalStorage = JSON.parse(localStorage.getItem('www') || null)
hash = hashInLocalStorage

// 输出三列按键容器
for (i = 0; i < keys['length']; ++i) {
  yeye = document.getElementById('wrapper')
  // 创建一个 class 为 row 的 div
  son = document.createElement('div')
  console.log(yeye)
  son.className = 'row'
  // 挂载到 wrapper 下面
  yeye.appendChild(son)

  row = keys[i]
  // 输出本列所有按键
  for (j = 0; j < row.length; ++j) {
    // 创建一个 class 为 key 的 kbd
    grandson = document.createElement('kbd')
    grandson.className = 'key'
    // 挂载到 son 下面
    son.appendChild(grandson)

    // 创建一个 class 为 keyInner 的 div
    keyInner = document.createElement('div')
    keyInner.className = 'keyInner'
    keyInner.textContent = row[j]
    grandson.appendChild(keyInner)

    // 创建一个编辑按钮 button
    buttonx = document.createElement('button')
    buttonx.textContent = '编辑'
    // 挂载到 grandson 下面
    keyInner.appendChild(buttonx)

    buttonx.id = row[j]
    buttonx.onclick = function (e) {
      /// 获取按键 id
      key = e.target.id
      // 自定义网址
      site = prompt('输入按键所对应的链接网址')
      hash[key] = site
      localStorage.setItem('www', JSON.stringify(hash))
    }
  }
}
// 监听错误例子
// yeye.onkeypress = function(suibiandemingzi) {
//   console.log('你输入了一个键')
// }

// 监听键盘点击事件
document.onkeypress = function (e) {
  key = e.key
  website = hash[key]

  window.open('http://' + website, '_blank')
}