import React from 'react';
import '../../global.scss';

const Cadres = (props) => {
  const classe = props.class;
  const title = props.titre;
  const text = props.text;
  const pixUrl = props.pixUrl;
  const pixAlt = props.pixAlt;
  const link1 = props.link1;
  const linktext1 = props.linktext1;
  const link2 = props.link2;
  const linktext2 = props.linktext2;
  const link3 = props.link3;
  const linktext3 = props.linktext3;


  const lines = text.split('/n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="my-frame">
      <h2>{title}</h2>
      <div className='cadres-components'>
        <p>{lines}</p>
        <img className={classe} src={pixUrl} alt={pixAlt} />
          <a href={link1}>{linktext1}</a>
          <a href={link2}>{linktext2}</a>
          <a href={link3}>{linktext3}</a>
      </div>
    </div>
  );
}

export default Cadres;
