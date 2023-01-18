import React from "react";
import Posting from "../posts/posts";
import { useForm } from "react-hook-form";

const MyPost = (props) => {
  let Post = props.ProfilePage.posts.map((p) => (
    <Posting key={p.id} post={p.post} like={p.like} />
  ));

  
  return (
    <div>
      <div>
        <h1>My posts</h1>
        <div>
          <AddPostForm sendPost={props.addPost}/>
        </div>
        <div posts={props.ProfilePageposts}>{Post}</div>
      </div>
    </div>
  );
};
const AddPostForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode:'onChange',
    defaultValues:{
        post: ''
    }
  });
  const onSubmit = (data) => onSendPostClick(data);

  const onSendPostClick = (data) => {
    props.sendPost(data.post);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="kurwa text"
        {...register("post", {maxLength:{value:20, message:'Максимальна кількість символів - 20'} })}
      />
      {errors.post &&(<div>{errors.post.message}</div>)}
      <input type="submit" />
    </form>
  );
};
export default MyPost;
