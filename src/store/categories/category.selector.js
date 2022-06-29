export const selectCategoriesMap = (state) => {
  console.log('selector fired')
  return state.categories.categories.reduce((acc, {title, items}) => {
    acc[title.toLowerCase()] = items
    return acc 
  }, {});
}