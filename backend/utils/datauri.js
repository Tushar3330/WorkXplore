import DataUriParser from "datauri/parser.js"

import path from "path";

const getDataUri = (file) => {
    const path = file.originalname;
    const ext = path.split(".").pop();
    const uri = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
    return { content: uri };
};


export default getDataUri;