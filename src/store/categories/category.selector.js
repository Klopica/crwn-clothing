export const selectCategoriesMap = (state) => 
  state.categories.categories.reduce((acc, {title, items}) => {
    acc[title.toLowerCase()] = items
    return acc 
  }, {});