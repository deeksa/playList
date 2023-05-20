import {BiTrash} from 'react-icons/bi'
import './index.css'

const ListDisplay = props => {
  const {each, onTapDeleteButton} = props
  const onTapDelete = () => {
    onTapDeleteButton(each.id)
  }
  return (
    <li>
      <div className="container2">
        <div className="container3">
          <div>
            <img src={each.imageUrl} alt="track" className="image4" />
          </div>
          <div>
            <p>{each.name}</p>
            <p>{each.genre}</p>
          </div>
        </div>
        <div className="container3">
          <p className="padding1">{each.duration}</p>
          <button type="button" data-testid="delete" onClick={onTapDelete}>
            <BiTrash color="green" />
          </button>
        </div>
      </div>
    </li>
  )
}
export default ListDisplay
