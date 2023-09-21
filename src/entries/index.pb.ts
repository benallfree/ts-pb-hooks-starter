onAfterBootstrap(() => require(`${__hooks}/boot-message.js`).default())

routerAdd(`GET`, `/api/hello/:name`, (c) =>
  require(`${__hooks}/hello.js`).default(c)
)
