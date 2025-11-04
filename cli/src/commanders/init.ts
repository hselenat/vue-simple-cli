// 可以选择从git 去拉取模版(推荐使用这个) 方便模版维护
// 也可以选择从CDN/OSS 下载模版
// 也可以在插件内部内置模版, 初始化的时候从插件copy模版到用户目录
import fs from 'fs-extra'
import path from 'path';
import { UConfig } from '../types';

export default (config: UConfig) => {
    let template = 'vue'// 默认是vue模版
    if (config.typescript) {
        template = 'typescript'
    }
    // 最简单的方法是从本地获取，也可以从git上download下来，也可以从CDN/OSS上下载
    const templatePath = path.join(__dirname, `../../templates/${template}`)
    // 用户执行目录
    const targetPath = config.cwd;
    fs.copy(templatePath, targetPath, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('初始化成功')
        }
    })
}