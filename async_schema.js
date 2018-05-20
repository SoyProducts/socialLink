let schema = {
    'initial': {
        image: 'none',
        nextKeys: ['I want', 'I feel']
    },
    'I want': {
        image: 'want_image.jpg',
        nextKeys: ['to play', 'to eat', 'to drink']
    },
    'to play': {
        image: 'play_image.jpg',
        nextKeys: ['ball']
    },
    'to eat': {
        image: 'eat_path',
        nextKeys: []
    },
    'to drink': {
        image: 'drink_path',
        nextKeys: []
    },
    'ball': {
        image: 'ball_path',
        nextKeys: []
    }
};

//header is responsible for pushing onPress and poping when hitting
//
