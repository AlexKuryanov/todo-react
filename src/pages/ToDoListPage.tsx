import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";

/* eslint-disable jsx-a11y/anchor-is-valid */
export const ToDoListPage = () => {
  return (
    <>
      <Header />
      <Form />
      <ToDoList />
    </>
  );
};
