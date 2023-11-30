import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const passwordRegex =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, 
             required: true,
             match:[passwordRegex] }
});

export default mongoose.model('User', UserSchema);