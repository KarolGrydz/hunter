import Forest from '../assets/img/forest.jpg';
import Fire from '../assets/img/fire.jpg';
import Leaf from '../assets/img/leaf.jpg';

const randomImg = () => {
  const imgs = [Forest, Fire, Leaf];
  const drawImg = Math.floor(Math.random() * 3);
  return imgs[drawImg];
};

export default randomImg;
