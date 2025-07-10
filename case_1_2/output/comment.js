"use strict";
const comments = [
    {
        commentId: 1,
        commentContent: "Hai",
        replies: [
            {
                commentId: 11,
                commentContent: "Hai juga",
                replies: [
                    {
                        commentId: 111,
                        commentContent: "Haai juga hai jugaa",
                    },
                    {
                        commentId: 112,
                        commentContent: "Haai juga hai jugaa",
                    },
                ],
            },
            {
                commentId: 12,
                commentContent: "Hai juga",
                replies: [
                    {
                        commentId: 121,
                        commentContent: "Haai juga hai jugaa",
                    },
                ],
            },
        ],
    },
    {
        commentId: 2,
        commentContent: "Halooo",
    },
];
const countTotalComment = (comments) => {
    let total = 0;
    for (const comment of comments) {
        total += 1;
        if (comment.replies) {
            total += countTotalComment(comment.replies);
        }
    }
    return total;
};
const totalComment = countTotalComment(comments);
console.log(totalComment);
//# sourceMappingURL=comment.js.map