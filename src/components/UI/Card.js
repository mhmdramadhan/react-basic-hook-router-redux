import React from 'react';

// import css menggunakan module
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${classes.cards_list} ${props.className}`}>
      <div className={classes.card}>
        <div className={classes.card_title, classes.title_white}>{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
