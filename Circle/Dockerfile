# 使用Node.js 18作为基础镜像
FROM node:18.14.0

# 设置工作目录
WORKDIR /usr/src/app

# 安装应用依赖
COPY package*.json ./
RUN npm install

# 拷贝应用源代码
COPY . .

# 暴露端口
EXPOSE 4300

# 启动应用
CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]
