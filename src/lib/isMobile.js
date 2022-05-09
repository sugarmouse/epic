export const isMobile = () => {
  let width = document.body.clientWidth
  return width <= 600
}