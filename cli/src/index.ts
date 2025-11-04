// console.log("Hello World from cli");
import { program } from "commander";
import { IConfig } from "./types";

const pkg = require("../package.json");
const cwd = process.cwd();
const fs = require('fs');

// 获取命令执行的相对路径
const userPkgPath = `${cwd}/package.json`

// 暴露config给开发者使用
let config: IConfig = {
    port: 9000,
    entry: './index.js',
    cwd: process.cwd(),
}

// 读取用户配置
if (fs.existsSync(userPkgPath)) {
    let userConfig = require(userPkgPath).vue_simple_cli || {};
    config = {
        ...config,
        ...userConfig
    }
}

// 1. 定义 -v / --version 命令 查看版本号
program.version(`当前版本：${pkg.version}`, "-v, --version", "查看版本号");

// 2. 定义 init 命令 <name> 初始化项目
program.command('init')
    .description('初始化项目')
    .option('-r, --react', '初始化react项目')
    .option('-v, --vue', '初始化vue项目')
    .option('-t, --typescript', '初始化typescript项目')
    .action((args) => {
        console.log('init args',args);
    });

// 3. start 命令 启动项目
program.command('start')
    .description('启动项目')
    .option('-m, --mock', '启动mock服务')
    .option('-p, --port <port>', '启动端口')
    .action((args) => {
        console.log('start args',args);
    })

// 4. build 命令 打包项目
program.command('build')
    .description('打包项目')
    .option('-m, --mock', '打包mock服务')
    .option('-p, --port <port>', '打包端口')
    .action((args) => {
        console.log('build args',args);
    })

// 5. publish
program.command('publish')
    .description('发布项目')
    .option('-m, --mock', '发布mock服务')
    .option('-p, --port <port>', '发布端口')
    .action((args) => {
        console.log('publish args',args);
    })

program.parse(process.argv);