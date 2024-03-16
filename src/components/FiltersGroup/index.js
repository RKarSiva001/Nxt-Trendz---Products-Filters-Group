import './index.css'

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/reac t-js/rating-one-star-img.png',
  },
]

const FiltersGroup = props => {
  const {
    clickCategoryItem,
    clickRatingItem,
    onChangeSearchInput,
    clickClearfilters,
  } = props

  return (
    <div className="filters-group-container">
      <input
        type="Search"
        onChange={event => onChangeSearchInput(event.target.value)}
      />

      <div>
        <h1>Category</h1>
        <ul>
          {categoryOptions.map(eachCategory => (
            <li key={eachCategory.categoryId}>
              <button
                type="button"
                onClick={() => clickCategoryItem(eachCategory.categoryId)}
              >
                <p>{eachCategory.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Rating</h1>
        <ul>
          {ratingsList.map(eachRating => (
            <li key={eachRating.ratingId}>
              <button
                type="button"
                onClick={() => clickRatingItem(eachRating.ratingId)}
              >
                <img
                  src={eachRating.imageUrl}
                  alt={eachRating.ratingId}
                  className="img"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={clickClearfilters}>
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
