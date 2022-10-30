import React from 'react'
import './lin.css';


export default function Lin() {
  return (
    <div>
      <div>
            <a href='https://twitter.com/_Michaaeeelllll'><button id='twitteruser'>Twitter Link</button></a>
            <p></p>
            <a href='https://training.zuri.team/'><button id='btn__zuri'>Zuri Team</button></a>
            <p></p>
            <a href='http://books.zuri.team'><button id='books'>Zuri Books</button></a>
            <p></p>
            <a href='https://books.zuri.team'><button id='book__python'>Python Books</button></a>
            <p></p>
            <a href='https://background.zuri.team'><button id='pitch'>Background Check for Coders</button></a>
            <p></p>
            <a href='https://books.zuri.team/design-rules'><button id='book__design'>Design Books</button></a>
      </div>
        <div className='solo'>
          <img src='/images/slack.svg' alt='slack'/>
          <img src='/images/github.svg' alt='git'/>
        </div>
    </div>

  )
}
