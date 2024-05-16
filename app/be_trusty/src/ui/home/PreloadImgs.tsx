import ReactDOM from 'react-dom';

export default function PreloadImgs() {

  ReactDOM.preload('/img/apart1_img1.webp',{ as: 'image', fetchPriority: 'high' })
  ReactDOM.preload('/img/apart1_img2.webp',{ as: 'image', fetchPriority: 'high' })
  ReactDOM.preload('/img/apart1_img3.webp',{ as: 'image', fetchPriority: 'high' })
  ReactDOM.preload('/img/apart1_img4.webp',{ as: 'image', fetchPriority: 'high' })

  return null
}