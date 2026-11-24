// STUDO Secure Client-Side Authentication Module
// Implements secure password hashing with Web Crypto API SHA-256 and local credential validation.

const STORAGE_KEY_USERS = 'studo_users_v2';
const STORAGE_KEY_SESSION = 'studo_session_v2';

// Hashes a plain-text password using SHA-256 via Web Crypto API
export async function hashPassword(password) {
  if (!password) return '';
  const encoder = new TextEncoder();
  const data = encoder.encode(password + '_studo_salt_2026');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Retrieves all registered user accounts
export function getRegisteredUsers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USERS);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to read users from localStorage', err);
    return [];
  }
}

// Registers a new user account with validation
export async function registerUser({
  name,
  email,
  password,
  school = 'Secondary School',
  currentClass = 'Class 12',
  board = 'CBSE',
  stream = 'Science',
  theme = 'cosmic'
}) {
  if (!name || name.trim().length < 2) {
    throw new Error('Please enter your full name (minimum 2 characters).');
  }

  const cleanEmail = (email || '').trim().toLowerCase();
  if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    throw new Error('Please enter a valid email address.');
  }

  if (!password || password.length < 6) {
    throw new Error('Password must be at least 6 characters long.');
  }

  const users = getRegisteredUsers();
  const existing = users.find((u) => u.email === cleanEmail);
  if (existing) {
    throw new Error('An account with this email already exists. Please log in.');
  }

  const passwordHash = await hashPassword(password);
  const newUser = {
    id: 'user_' + Date.now(),
    name: name.trim(),
    email: cleanEmail,
    passwordHash,
    school: school.trim() || 'Secondary School',
    currentClass,
    board,
    stream: stream.trim() || 'Science',
    theme,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));

  // Set active session (excluding passwordHash)
  const sessionUser = { ...newUser };
  delete sessionUser.passwordHash;
  localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(sessionUser));

  return sessionUser;
}

// Authenticates an existing user
export async function loginUser(email, password) {
  const cleanEmail = (email || '').trim().toLowerCase();
  if (!cleanEmail) {
    throw new Error('Please enter your registered email address.');
  }

  if (!password) {
    throw new Error('Please enter your password.');
  }

  const users = getRegisteredUsers();
  const user = users.find((u) => u.email === cleanEmail);
  if (!user) {
    throw new Error('No account found with this email. Please check your spelling or register.');
  }

  const passwordHash = await hashPassword(password);
  if (user.passwordHash !== passwordHash) {
    throw new Error('Incorrect password. Please verify and try again.');
  }

  const sessionUser = { ...user };
  delete sessionUser.passwordHash;
  localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(sessionUser));

  return sessionUser;
}

// Retrieves currently authenticated session user
export function getActiveSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SESSION);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error('Failed to parse active session', err);
    return null;
  }
}

// Clears active session
export function logoutUser() {
  localStorage.removeItem(STORAGE_KEY_SESSION);
}
