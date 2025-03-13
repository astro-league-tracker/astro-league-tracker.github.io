CREATE TABLE IF NOT EXISTS meta_programs(
    id INTEGER PRIMARY KEY ASC,
    name TEXT,
    content TEXT,
    url TEXT
);

CREATE TABLE IF NOT EXISTS requirements_group(
    id INTEGER PRIMARY KEY ASC,
    meta_program_id INTEGER
);

CREATE TABLE IF NOT EXISTS programs_req_link(
    id INTEGER PRIMARY KEY ASC,
    group_id INTEGER,
    program_id INTEGER
);

CREATE TABLE IF NOT EXISTS programs(
    id INTEGER PRIMARY KEY ASC,
    name TEXT,
    content TEXT,
    url TEXT
);
