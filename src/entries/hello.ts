export default (c: echo.Context) => {
  const name = c.pathParam('name')

  return c.json(200, { message: `Hello, ${name}` })
}
