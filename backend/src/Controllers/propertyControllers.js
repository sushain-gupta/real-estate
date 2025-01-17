const Property = require("../Models/propertySchema.js");
const User = require("../Models/User.js");
const { uploadOnCloudinary } = require("../util/fileUpload.js");

// Function to generate a unique numeric property ID
function generatePropertyID() {
	const prefix = "PPD";
	const randomNumeric = Math.floor(Math.random() * 90000) + 10000; // Generate a random 5-digit number
	return prefix + randomNumeric;
}

exports.addProperty = async (req, res) => {
	try {
		const propertyData = req.body; // Assuming request body contains property data

		console.log(propertyData);

		const userId = req.params.id;
		// Check if file was uploaded
		if (!propertyData.photo) {
			return res.status(400).json({ message: "No file uploaded" });
		}

		// Create a new property document
		const property = new Property({
			...propertyData,
			postedBy: userId, // Assign the user's ObjectId to the postedBy field
			PPDID: generatePropertyID(),
		});

		// Save the property document to the database
		await property.save();

		// Update the user's property array in the User model
		await User.findByIdAndUpdate(userId, {
			$push: { properties: property._id },
		});

		res.status(201).json({
			status: "success",
			message: "Property saved successfully",
			property,
		});
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ status: "error", message: "Failed to save property" });
	}
};

exports.getAllProperties = async (req, res) => {
	try {
		// Retrieve all properties from the database
		const properties = await Property.find();
		res.status(200).json(properties);
	} catch (error) {
		console.error("Error getting properties:", error);
		res.status(500).json({ message: "Failed to get properties" });
	}
};
