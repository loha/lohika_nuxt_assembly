FROM node:12.13.0

ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD .. ${APP_ROOT}

RUN yarn install
RUN yarn run build

ENV HOST 0.0.0.0
