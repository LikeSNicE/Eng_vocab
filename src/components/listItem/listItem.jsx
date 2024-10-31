import './listItem.css';

const ListItem = ({english,russian,definition}) => {
  return (
    <div>
      <div class="card has-background-grey-darker card__main ">
        <div class="card-content">
          <div class="content">
            <div className="content-translate mb-4">
              <div className="content-lang">{english}</div>
              <div className="content-lang">{russian[0]}</div>
            </div>
            <p>definition : {definition}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;