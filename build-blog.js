/**
 * Build blog
 * @author Mizuka <mizuka.wu@outlook.com>
 * 构建结束后自动移动文件
 */
import spawn from 'cross-spawn'
import { copyFile, writeFileSync } from 'fs'
import config from './docs/.vuepress/config'
 
const builder = spawn('vuepress', ['build', 'blog'])
builder.stdout.on('data', function (s) {
  console.log(s.toString())
})
 
builder.stdout.on('end', function () {
  if (config.postsAsRoot) {
    copyFile('post/index.html', 'index.html', (err) => {
      if (err) {
        console.error(err)
        throw err
      }
      console.log('copy /post/index.html to /')
    })
  }
})