import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import multer from "multer";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (
    request,
    file,
    callback
  ) => {
    callback(null, "uploads");
  },
  filename: (
    req,
    file,
    callback
  ) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post(
  "/uploader/image-upload",
  upload.single("file"),
  (req: Request, res: Response) => {
    const fileName = req.file?.filename;
    const originalName = req.file?.originalname;
    const filePath = req.file?.path;
    res.send({
      message: "Image uploaded",
      filename: fileName,
      originalname: originalName,
      filepath: filePath,
    });
  }
);

app.use("/uploader", express.static("uploads"));

app.listen(port, () => {
  console.log(`Server Uploader started on port ${port}`);
});