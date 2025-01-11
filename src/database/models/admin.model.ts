import { Schema, model, models } from "mongoose";

interface IAdmin {
  name: string;
  email: string;
  password: string;
  role: string;
  profilePicture: string;
}

const adminSchema = new Schema<IAdmin>({
  name: { 
    type: String, 
    required: [true, 'Name is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { 
    type: String, 
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long']
  },
  role: { 
    type: String, 
    required: true,
    default: 'admin',
    enum: ['admin']
  },
  profilePicture: { 
    type: String,
    required: true,
    default: 'https://via.placeholder.com/150'
  },
}, { 
  timestamps: true 
});

// Add any pre-save hooks or methods here if needed
adminSchema.pre('save', function(next) {
  // You can add password hashing here if needed
  next();
});

const Admin = models.Admin || model('Admin', adminSchema);

export default Admin;
