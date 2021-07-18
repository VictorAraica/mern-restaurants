const Restaurant = require("../schemas/restaurantSchema");

const postComment = async (req, res) => {
    try {
        await Restaurant.findByIdAndUpdate(req.body.restaurantId, {
            $push: { comments: { user: req.body.user, comment: req.body.comment } },
        });

        return res.status(201).send("comment posted");
    } catch (err) {
        return res.status(500).send(err);
    }
};

module.exports = { 
    postComment: postComment,
}