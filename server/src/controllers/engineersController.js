import EngineersModel from "../models/engineersModel.js";

export const registerEngineers = async (req, res) => {
  try {
    const engineers = new EngineersModel ({ ...req.body, verified: false });
    res.status(200).send({engineers});
    await engineers.save();
  } catch (error) {
    console.log("error registering engineers"  +error);
  }
};

  export const getAllEngineers = async (req,res) => {
  try {
    const engineers = await EngineersModel.find({verified: false}).sort({updatedAt: -1});
    res.status(200).send({ engineer: engineers });
  } catch (error) {
    console.error("Error Getting Engineers:" +error);
  }
};


export const getAllVerifiedEngineers = async (req, res) => {
  try {
    const engineers= await EngineersModel.find({ verified: true }).sort({updatedAt: -1});
    res.status(200).send({ engineers});
  } catch (error) {
    console.error("Error getting employees:" +error);
    res.status(500).send({ status: false, message: "Internal Server Error" });
  }
};


export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const { verified } = req.body;
    
    const updatedEngineer = await EngineersModel.findByIdAndUpdate(
      id,
      { verified },
      { new: true }
    );

    if (!updatedEngineer) {
      return res.status(404).send({ status: false, message: "Engineer not found" });
    }

    res.status(200).send({ engineer: updatedEngineer});
  } catch (error) {
    console.error("Error updating Engineers:", error.message);
    res.status(500).send({ status: false, message: "Internal Server Error" });
  }
};
