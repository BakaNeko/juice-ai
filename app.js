var tumblr = require('tumblr');

var oauth = {
  consumer_key: '5oZIvD8mfO8S61Pya3sF5a3rmPCypHX6AygHsNRmWDCiurR26B',
  consumer_secret: 'aKdV89OvlB1A3mbieZTseOtFoblOXn5wB4E2bZ9SzWT8COPTND',
  token: 'sxkprwwPdQZByfNouSjShiAU8HVFbtkaP7Q5knbGdKH9qTh5Cc',
  token_secret: 'Ik3cO1JLda0xsvcnlbDZcrsGj7sXAKXf6dGWJvBrnfGr2an6gq'
};

var blog = new tumblr.Blog("juice-ai.tumblr.com", oauth);
blog.text([], function(err, data) {
	console.log(data.posts);
});