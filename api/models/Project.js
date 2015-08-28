module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    slug: {
      type: 'string',
      required: true
    }
  },
  githubRepo: function(){
    return String.concat('https://github.com', '/koombea/', this.slug);    
  }
};