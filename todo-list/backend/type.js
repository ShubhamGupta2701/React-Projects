<<<<<<< HEAD
const zod = require("zod");

const createTodo = zod.object({
    title:zod.string(),
    description:zod.string(),
});


const updateTodo = zod.object({
    id:zod.string(),
});

=======
const zod = require("zod");

const createTodo = zod.object({
    title:zod.string(),
    description:zod.string(),
});


const updateTodo = zod.object({
    id:zod.string(),
});

>>>>>>> 1dcde66d9c6daf589debc1a912fe99a9d62420ed
module.exports = {createTodo:createTodo,updateTodo:updateTodo};