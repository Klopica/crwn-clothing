import { useNavigate } from 'react-router-dom'

import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles'

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category
  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(route)
  // console.log(category)
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage 
        className="background-image"
        imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem