CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  fullname TEXT NOT NULL,
  isActive BOOLEAN DEFAULT TRUE,
  roles TEXT[] DEFAULT ARRAY['user']
);