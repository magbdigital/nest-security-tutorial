CREATE TABLE "User" (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  fullName TEXT NOT NULL,
  isActive BOOLEAN DEFAULT TRUE,
  roles TEXT[] DEFAULT ARRAY['user']
);