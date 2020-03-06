USE yogaflowapp;

INSERT INTO Teachers
    (teacher_name, login, email, password, createdAt, updatedAt)
VALUES
    ("Ivan", "Ivan", "ivan@ivan.com", "Ivan1", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)


INSERT INTO Poses
    (pose_name, picture, createdAt, updatedAt, TeacherId)
VALUES
    ("Navasana", "https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
    ("Ardha Navasana", "https://www.dropbox.com/s/1nx0r94msxjwvyp/boatbentlegs.svg?raw=1", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
    ("Dhanurasana", "https://www.dropbox.com/s/wizj5kwxvez4c0a/bow.svg?raw=1", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
    ("Setu Bandha Sarvangasana", "https://www.dropbox.com/s/f1w64ybg4sn8ejt/bridge.svg?raw=1", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
    ("Baddha Konasana", "https://www.dropbox.com/s/3h2pts6xbn28dh7/butterfly%3F.svg?raw=1", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
    ("Ustrasana", "https://www.dropbox.com/s/o5gr4lngltsdg5r/camel.svg?raw=1", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1)