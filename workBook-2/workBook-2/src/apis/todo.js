import axiosInstance from "./axiosInstance";

const postTodo = async ({title, content, checked = false}) => {
    console.log("전송하는 데이터:", { title, content, checked });
    const {data} = await axiosInstance.post("/todo", {
        title,
        content,
        checked,
    });

    return data;
};

const getTodoList = async ({title}) => {
    let url = "/todo";

    if(title) {
        url += `?title=${title}`;
    }

    const {data} = await axiosInstance.get(url);
    console.log("응답 데이터:", data);
    return data;
}

const getTodo = async ({id}) => {

    const {data} = await axiosInstance.get(`/todo/${id}`);

    return data;
}

const patchTodo = async ({id,title,content,checked}) => {

    const {data} = await axiosInstance.patch(`/todo/${id}`,{
        title,
        content,
        checked,
    });

    return data;
}

const deleteTodo = async ({id}) => {

    const {data} = await axiosInstance.delete(`/todo/${id}`);

    return data;
}

export {postTodo, getTodo, getTodoList, patchTodo, deleteTodo};