const {Schema, model} = require("mongoose");
const bcrypt = require("bcrypt");


const readerSchema = new Schema({
  readerId: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  screenName: {
    type: String,
    // required: true,
    minlength: 3,
  },
  passages: [
    {
      passageId: {
        type: Schema.Types.ObjectId,
        ref: "Passage",
      },
      resumeAt: {
        type: Number,
        default: 0,
      },
    },
  ],
});

// set up pre-save middleware to create password
readerSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
readerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Reader = model("Reader", readerSchema);

module.exports = Reader;
