CREATE TABLE "Users" (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(40) NOT NULL,
  password VARCHAR(60) NOT NULL,
  email VARCHAR(100),
  "willCome" BOOLEAN,
  "confirmedOn" TIMESTAMP,
  "createdAt" TIMESTAMP,
  "updatedAt" TIMESTAMP
);

INSERT INTO "Users"(username, password) VALUES ('Pum', 'Pim');
