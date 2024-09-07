CREATE TABLE product (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  description VARCHAR(250)  NOT NULL,
  brand VARCHAR(250),
  stock INTEGER,
  price DECIMAL(7,2)
);