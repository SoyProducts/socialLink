let schema = {
    'initial': {
        image: 'none',
        next_keys: ['I want', 'I feel']
    },
    'I want': {
        image: 'want_image.jpg',
        next_keys: ['to play', 'to eat', 'to drink']
    },
    'to play': {
        image: 'play_image.jpg',
        next_keys: ['ball']
    },
    'to eat': {
        image: 'eat_path',
        next_keys: []
    },
    'to drink': {
        image: 'drink_path',
        next_keys: []
    },
    'ball': {
        image: 'ball_path',
        next_keys: []
    }
};

