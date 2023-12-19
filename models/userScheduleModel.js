const mongoose = require("mongoose");

const scheduleSchema = mongoose.Schema(
  {
   
    name: {
      type: String,
      required: [true, "Please add the contact name"],
      
    },
    email: {
      type: String,
      required: [true, "Please add the contact email address"],
      ref: "User",
    },
    saturday: {
        isActive: {
          type: Boolean,
          required: true,
        },
        startTime: {
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
        StoreName: {
            type: String,
            required: true,
          },
          hour: {
            type: Number,
            
          },
          Note: {
            type:String
          }
      },
    sunday: {
        isActive: {
          type: Boolean,
          required: true,
        },
        startTime: {
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
        StoreName: {
            type: String,
            required: true,
          },
          hour: {
            type: Number,
            
          },
          Note: {
            type:String
          }
      },
    monday: {
        isActive: {
          type: Boolean,
          required: true,
        },
        startTime: {
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
        StoreName: {
            type: String,
            required: true,
          },
          hour: {
            type: Number,
            
          },
          Note: {
            type:String
          }
      },
    tuesday: {
        isActive: {
          type: Boolean,
          required: true,
        },
        startTime: {
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
        StoreName: {
            type: String,
            required: true,
          },
          hour: {
            type: Number,
            
          },
          Note: {
            type:String
          }
      },
    wednesday: {
        isActive: {
          type: Boolean,
          required: true,
        },
        startTime: {
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
        StoreName: {
            type: String,
            required: true,
          },
          hour: {
            type: Number,
            
          },
          Note: {
            type:String
          }
      },
    thursday: {
        isActive: {
          type: Boolean,
          required: true,
        },
        startTime: {
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
        StoreName: {
            type: String,
            required: true,
          },
          hour: {
            type: Number,
            
          },
          Note: {
            type:String
          }
      },
    friday: {
        isActive: {
          type: Boolean,
          required: true,
        },
        startTime: {
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
        StoreName: {
            type: String,
            required: true,
          },
          hour: {
            type: Number,
            
          },
          Note: {
            type:String
          }
      },
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Schedule", scheduleSchema);