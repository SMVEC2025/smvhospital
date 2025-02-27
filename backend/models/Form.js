import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  concern: { type: String, required: true },
  packageType: { type: String, required: true },
  selectedPackage: { type: String, required: true }, // Renamed from "package"
});

const Form = mongoose.model('Form', formSchema);

export default Form;
