import ShareButton from './share-button';

const shareButton = new ShareButton('https://github.com/rafalogan/shared-button');
shareButton.bind('.btn-twitter', 'twitter');
shareButton.bind('.btn-facebook', 'facebook');
shareButton.bind('.btn-linkedin', 'linkedin');
