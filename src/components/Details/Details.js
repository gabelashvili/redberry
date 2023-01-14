import './details.scss';
import ImgSrc from '../../assets/images/Image.png';

const Details = () => {
  return (
    <div className="details">
      <div className="details__header">
        <h1 className="details__title">Quam Tristique Condimentum</h1>
        <p className="details__desc">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. <span>Curabitur blandit</span> tempus porttitor.
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.
        </p>
      </div>
      <div className="details__wrapper">
        <div className="details__info">
          <h1 className="details__title">Fringilla Euismod Adipiscing Ipsum</h1>
          <p className="details__desc">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis
            interdum. Aenean lacinia bibendum nulla sed.
          </p>
          <ul class="details__list root">
            <li className="details__list-item">Tellus Ullamcorper </li>
            <li className="details__list-item">Inceptos Magna Condimentum</li>
            <li className="details__list-item wrapper">
              <ul class="details__list">
                <li className="details__list-item sub-child">Mattis Tristique</li>
                <li className="details__list-item sub-child">Pharetra Pellentesque Dapibus</li>
              </ul>
            </li>
            <li className="details__list-item">Aenean Inceptos </li>
            <li className="details__list-item">Parturient Bibendum</li>
          </ul>
        </div>
        <img src={ImgSrc} alt="" />
      </div>
    </div>
  );
};

export default Details;
