import m from "./message.module.css";
import React from "react";
import MI from "./dialogs/messageItem";
import Dialogs from "./dialogs/dialogs";
import { useForm } from "react-hook-form";

const Mess = (props) => {
  let MessageItems = props.DialogsPage.dialogs.map((m) => (
    <MI name={m.name} key={m.id} />
  ));
  let DialogItems = props.DialogsPage.messages.map((d) => (
    <Dialogs message={d.message} />
  ));
  return (
    <div className={m.message}>
      <div>{DialogItems}</div>
      <div>{MessageItems}</div>
      <div>
        <AddMessageForm sendMessage={props.sendMessage} />
      </div>
    </div>
  );
};
const AddMessageForm = (props) => {
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
  const onSubmit = (data) => onSendMessageClick(data);

  const onSendMessageClick = (data) => {
    props.sendMessage(data.messages);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Повідомлення"
        {...register("messages", {maxLength:{value: 20, message:'Максимальна кількість символів - 20'} })}
      />
      {errors.messages && (<div>{errors.messages.message}</div>)}
      <input type="submit" />
    </form>
  );
};
export default Mess;
