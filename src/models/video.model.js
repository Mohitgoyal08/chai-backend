import mongoose, {Schema} from "mogoose"

const videoSchema = new Schema({
    videoFILE:{
        
    }

},{timestamps:true})

export const Video = mongoose.model("Video , videoSchema")