import mongoose from 'mongoose';

const applicationSchema = mongoose.Schema(
  {
    internship: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Internship',
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    college: { // FIX: The 'college' field is now optional
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      // 'required: true' has been removed from this field
    },
    applicationDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['Pending', 'Reviewed', 'Accepted', 'Rejected', 'Withdrawn'],
      default: 'Pending',
    },
    coverLetter: {
      type: String,
    },
    resumeUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

applicationSchema.index({ internship: 1, applicant: 1 }, { unique: true });

const Application = mongoose.model('Application', applicationSchema);

export default Application;
