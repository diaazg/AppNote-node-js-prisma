const express = require("express");
const app = express();
const userRouter = require('./routers/user_router');
const noteRouter = require('./routers/note_routers')


app.use(express.json());

app.use('/',userRouter)
app.use('/',noteRouter)

const PORT = 3000
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

