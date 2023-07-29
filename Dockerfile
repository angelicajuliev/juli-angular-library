FROM node:18-alpine
LABEL maintainer="julieth15gomez@gmail.com"

RUN apk update && apk add --update --no-cache git zsh curl openssh
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

USER node
WORKDIR /table-library

RUN yarn global add @angular/cli@11
COPY --chown=node:node package.json .
RUN yarn
ENV PATH="/table-library/node_modules/.bin:$PATH"
COPY . .

EXPOSE 4200 49153

CMD ["yarn", "start", "--host=0.0.0.0", "--port=4200"]

# CMD /bin/sh
