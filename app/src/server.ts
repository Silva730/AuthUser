import Express  from "express";
import authRoutes from "./routes/Auth";

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.static("public"));

app.use("/auth", authRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});