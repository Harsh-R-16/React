import React from "react";

export default function Comment({ comment }) {
  const [show, setShow] = React.useState(false);
  const [inp, setInp] = React.useState("");
  const [arr, setArr] = React.useState(comment.replies);

  const addComment = () => {
    let newComments = [...arr];
    console.log(newComments);
    setShow(true);
    newComments.push({
      id: "004",
      author: comment.author,
      body: inp ? inp : "No Comments",
      replies: [],
    });
    setInp("");
    setArr(newComments);
  };

  return (
    <div>
      <p>
        {comment.author} ({arr.length} replies)
      </p>
      <h3>{comment.body}</h3>
      <p className="para">
        <span onClick={() => setShow(!show)}>Show</span> | Give Award | Share |
        Report | Save
      </p>
      <input type="text" value={inp} onChange={(e) => setInp(e.target.value)} />
      <button onClick={addComment}>Add Comment</button>
      {show && arr.length ? (
        <ol>
          {arr.map((item) => (
            <li>
              <Comment comment={item} />
            </li>
          ))}
        </ol>
      ) : (
        ""
      )}
    </div>
  );
}
