CREATE TABLE Node (
    id INT PRIMARY KEY,
    type VARCHAR(255), -- 'input', 'output', etc.
    label TEXT,
    positionX INT,
    positionY INT
);


CREATE TABLE Edge (
    id INT PRIMARY KEY,
    source INT,
    target INT,
    label TEXT
);