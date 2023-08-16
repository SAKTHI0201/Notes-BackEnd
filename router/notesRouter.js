import express from "express";
import {
  getAllNotes,
  createNote,
  deleteNote,
  updateNote,
} from "../Controllers/notesController.js";
const router = express.Router();

router
  .post("/:id")
  .get(getAllNotes)
  .post(createNote)
  .delete(deleteNote)
  .patch(updateNote);

export default router;
