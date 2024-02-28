import React from 'react';
import '../../global.scss';

const Cadres = (props) => {
  const title = props.titre;
  const text = props.text;

  const lines = text.split('/n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="my-frame">
      <h2>{title}</h2>
      <p>{lines}</p>
    </div>
  );
}

export default Cadres;
