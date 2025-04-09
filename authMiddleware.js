export const authMiddleware = (req, res, next) => {
  console.log('Accesso effettuato')
  next()
}
