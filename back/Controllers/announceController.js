const Announce = require('../Models/announceModel');
const User = require('../Models/userModel');

const createAnnounce = async (req, res) => {
  try {
    const userId = req.user.id;
    const announce = new Announce({
      ...req.body,
      user: userId
    });
    await announce.save();
    const user = await User.findById(userId).select('username');
    res.status(201).json({ message: 'Announce created successfully', announce, username: user.username });
  } catch (error) {
    res.status(400).json({ error: 'Error creating announce', details: error.message });
  }
};

const getAllAnnounces = async (req, res) => {
  try {
    const announces = await Announce.find().populate('user', 'username email');
    res.status(200).json(announces);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching announces', details: error.message });
  }
};

const getAnnounceById = async (req, res) => {
  try {
    const announce = await Announce.findById(req.params.id).populate('user', 'username email');
    if (!announce) {
      return res.status(404).json({ error: 'Announce not found' });
    }
    res.status(200).json(announce);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching announce', details: error.message });
  }
};

const updateAnnounce = async (req, res) => {
  try {
    const announce = await Announce.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!announce) {
      return res.status(404).json({ error: 'Announce not found' });
    }
    res.status(200).json({ message: 'Announce updated successfully', announce });
  } catch (error) {
    res.status(400).json({ error: 'Error updating announce', details: error.message });
  }
};

const deleteAnnounce = async (req, res) => {
  try {
    const announce = await Announce.findByIdAndDelete(req.params.id);
    if (!announce) {
      return res.status(404).json({ error: 'Announce not found' });
    }
    res.status(200).json({ message: 'Announce deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error deleting announce', details: error.message });
  }
};

module.exports = {
  createAnnounce,
  getAllAnnounces,
  getAnnounceById,
  updateAnnounce,
  deleteAnnounce,
};