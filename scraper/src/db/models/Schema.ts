import mongoose from 'mongoose'

const PasteSchema = new mongoose.Schema({
    id:{
        type:String,
        required : true,
        unique:true
    },
    title: {
        type:String,
        required : true
    },
    content: {
        type:String,
        required : true
    },
    author: {
        type:String,
        required : true
    },
    date: {
        type:String,
        required : true
    },
  });

  const Paste = mongoose.model("strong_hold_pastes", PasteSchema);

  export default Paste;