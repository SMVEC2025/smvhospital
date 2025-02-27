import Form from '../models/Form.js';

const createForm = async (req, res) => {
  try {
    const { name, age, gender, phone, concern, packageType, selectedPackage } = req.body; // Renamed from "package"

    if (!name || !age || !gender || !phone || !concern || !packageType || !selectedPackage) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newForm = new Form({ 
      name, 
      age, 
      gender, 
      phone, 
      concern, 
      packageType, 
      selectedPackage // Updated to "selectedPackage"
    });
    
    await newForm.save();
    res.status(201).json({ message: "Form submitted successfully", data: newForm });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { createForm };
