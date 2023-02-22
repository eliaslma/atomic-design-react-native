import { profiles } from './profiles';

export const posts = [
  {
    id: '1',
    likes: 'liked by karenne and 29 others',
    cover: require('../assets/photos/1.png'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    lastLiked: profiles[1],
    username: 'kieron_d',
    avatar: profiles[4].avatar

  },
  {
    id: '2',
    likes: 'liked by felipe and 34 others',
    cover: require('../assets/photos/2.png'),
    description: 'Nunc volutpat, quam ut congue laoreet, mauris diam posuere urna, in pharetra dui mi in odio. Phasellus fringilla et mi non volutpat. Integer congue',
    lastLiked: profiles[2],
    username: 'fred',
    avatar: profiles[5].avatar
  },
  {
    id: '3',
    likes: 'liked by zackjohn and 23 others',
    cover: require('../assets/photos/3.png'),
    description: 'Orci at condimentum tempor, risus magna fermentum risus, ac ultrices massa velit sed sapien. Praesent et pellentesque purus',
    lastLiked: profiles[3],
    username: 'zackjohn',
    avatar: profiles[3].avatar
  },
];