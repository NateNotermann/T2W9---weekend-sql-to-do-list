-- Make a databse called:
-- weekend-to-do-app

CREATE TABLE tasks (
    "id" serial PRIMARY KEY,
    "name" varchar(40) NOT NULL,
    "description" varchar(240) NOT NULL,
    "status" boolean
);


-- example tasks for database
INSERT INTO tasks ( name, description, status)
VALUES ('Shop', 'go shopping', false ), 
('workout', 'do workout', false ),
('nap', 'take a darn nap', false );