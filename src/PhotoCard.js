import React from "react";
import "./PhotoCard.scss";
import { fluidCard } from 'semantic-ui-react';

// const divStyle = {
//     margin: 'auto',
//     maxWidth: '90%',
//     borderLeft: '3px solid grey',
//     borderRight: '3px solid grey',
//     background: 'white'

//   };
//   const pStyle = {
    // margin: '20px',
    // fontSize: '15px',
    // textAlign: 'left'
//   };
//   const aStyle = {
//     fontSize: '16px',
//     textAlign: 'center',
//     textDecoration: 'none'
//   };
//   const h1Style = {
    // fontSize: '50px',
    // textAlign: 'center',
    // color: 'blue'
//   };
//   const h2Style = {
//     fontSize: '25px',
//     textAlign: 'center'
//  };

// function PhotoCard(props) {
//   return (
//       <div className='photo-card' style={divStyle}>
//           <h1 className='title-text' style={h1Style}>A super awesome component!</h1>
//           <img className='image' src={props.url} alt='NASA image of the day'/>
//           <div className='text'>
//               <h2 className='title-text' style={h2Style}>{props.title}</h2>
//               <h3 className='text-content' style={pStyle}>{props.explanation}</h3>
//               <a href={props.url} style={aStyle}>View source</a>
//           </div>
//           <footer> 
//               <p>Copyright:{props.copyright}</p>
//           </footer>
//       </div>
//   );
// }

function PhotoCard(props) {
  return (
      <fluidCard className='photo-card'>
        <div class="ui raised segment">
          <h1 className='title'>NASA's Daily Photo</h1>
          <div class="ui divider"></div>
          <img className='ui centered large rounded image' src={props.url} alt='NASA image of the day'/>
          <div class="ui divider"></div>
          <div className='text'>
              <h2 className='title-text'>{props.title}</h2>
              <div class="ui segment">
                <p>{props.explanation}</p>
              </div>
              <a href={props.url} >View source</a>
          </div>
          <footer> 
              <p>{'Copyright: '+props.copyright}</p>
          </footer>
          </div>
      </fluidCard>
  );
}

export default PhotoCard;