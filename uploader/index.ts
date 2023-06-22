import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import multer from "multer";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const MIME_TYPES= {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  'image/bmp': 'bmp', 
  'image/tiff': 'tiff',
  'image/tif': 'tif',
};

let storage = multer.diskStorage({
  destination: (
    req,
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
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype as keyof typeof MIME_TYPES];
    callback(null, name + Date.now() + '.' + extension);
  },
});

let upload = multer({ storage: storage });

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
      filepath: filePath
    });
  }
);

app.use("/uploader", express.static("uploads"));

app.listen(port, () => {
  console.log(`Server Uploader started on port ${port}`);
});