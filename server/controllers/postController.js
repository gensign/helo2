const getUser = async (req, res) => {
    console.log('Getting Users')
    console.log('')
    let db = req.app.get('db');
    console.log('req.params: ', req.params);
    console.log('');
    const { user_id } = req.params;
    // console.log('username: ', username)
    // console.log('')
    console.log('userId: ', user_id);
    console.log('');
    // need a req.query. Need explanation on how to use.
    // req.query {
        // search: '',
        // userpost: true
    // };
    const userDisplay = await db.find_user_by_id([user_id]);
    console.log("userDisplay: ", userDisplay);
    console.log('');
    res.status(200).send(userDisplay);
};

const getPosts = async (req, res) => {
    console.log('Getting Posts');
    console.log('');
    let db = req.app.get('db');
    const getPosts = await db.get_all_posts();
    console.log('getPosts: ', getPosts);
    console.log('');
    res.status(200).send(getPosts);
};

const addPosts = (req, res) => {
    console.log('Adding Posts');
    console.log('');
    let db = req.app.get('db');
    const { title, image, content, author_id } = req.body;
    console.log('title: ', title);
    console.log('');
    const addPost = db.create_posts([title, image, content, author_id]);
    console.log('addPost: ', addPost);
    console.log('');
    res.status(200).send(addPost);
};

module.export = {
    getUser,
    getPosts,
    addPosts
};