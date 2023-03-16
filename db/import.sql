COPY "Hiragana"(romanji, symbol)
FROM '/db/hiragana.csv' 
WITH DELIMITER ',' 
CSV HEADER;