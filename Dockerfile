FROM node:22.23.2-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY nuxt.config.js ./
COPY app ./app
COPY public ./public
COPY server ./server
COPY shared ./shared
RUN npm run build

FROM node:22.23.2-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/.output ./.output
USER node
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
