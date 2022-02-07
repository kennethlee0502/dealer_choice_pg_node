DROP TABLE IF EXISTS post;

create table post(
    id SERIAL PRIMARY KEY,
    name varchar (150),
    title varchar(150),
    content varchar (500),
    likes varchar(20),
    description varchar (100),
    number_of_post int,
    number_of_followrs int
);

INSERT INTO post (name ,title ,content, likes, description, number_of_post,number_of_followrs) 
VALUES ('jennie','jennierubyjane','@calvinklein @heron #ADS #MYCALVINS','72,292,938', '@lesyeuxdenini', 822, 62);

INSERT INTO post (name ,title ,content, likes, description, number_of_post, number_of_followrs) 
VALUES ('lisa','lalalalisa_m','@Bulgari #Bulgari #BulgariHighJewelry #Magnifica','87,382,930', '🖤💗', 815, 73);

INSERT INTO post (name ,title ,content, likes, description, number_of_post, number_of_followrs) 
VALUES ('rose','roses_are_rosie','📷/@emjbhe','99,032,049','ON THE GROUND
youtu.be/CKZvWhCqx1s', 765, 55);

INSERT INTO post (name ,title ,content, likes, description, number_of_post, number_of_followrs) 
VALUES ('jisoo','sooyaaa__','@diorbeauty #missdior #wakeupforlove wakeup for love','86,938,933','
youtu.be/dyRsYk0LyA8',772,56);
