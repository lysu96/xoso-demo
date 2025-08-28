import bcrypt from "bcrypt";
import * as repo from "../repositories/users.repo.js";

export async function getAll() {
  return repo.findAll();
}

export async function getById(id) {
  return repo.findById(id);
}

export async function create({ email, password, name, role }) {
  const hashed = await bcrypt.hash(password, 10);
  return repo.insertUser({ email, password: hashed, name, role });
}

export async function update(id, { name, password, role }) {
  let hashed;
  if (password) {
    hashed = await bcrypt.hash(password, 10);
  }
  return repo.updateUser(id, { name, password: hashed, role });
}

export async function remove(id) {
  return repo.deleteUser(id);
}
