DROP DATABASE IF EXISTS saskatchewanizon;
CREATE DATABASE saskatchewanizon;
USE saskatchewanizon;

CREATE TABLE categories (
  categoryId INT NOT NULL PRIMARY KEY,
  category VARCHAR(255)
);

CREATE TABLE itemData (
  productId INT NOT NULL PRIMARY KEY,
  productName VARCHAR(255),
  productDescription TEXT,
  price FLOAT,
  categoryId INT,
  imgUrl VARCHAR(255),
  FOREIGN KEY (categoryId) REFERENCES categories(categoryId)
);

INSERT INTO categories 
  (categoryId, category) 
VALUES 
  (1, 'Hockey'),
  (2, 'Syrup'),
  (3, 'Music'),
  (4, 'Camping'),
  (5, 'Hunting'),
  (6, 'Food');

INSERT INTO itemData 
  (productId, productName, productDescription, price, categoryId, imgUrl) 
VALUES 
  (1, 'STX Ice Hockey Surgeon RX3 Hockey Stick', 'HPR - with an ultra-high balance point and performance engineering the high performance ratio of the new stallion stick has been optimized for players seeking durability and performance all in one', 74.32, 1, 'https://images-na.ssl-images-amazon.com/images/I/515Pu1JIHoL._SL1000_.jpg'),
  (2, 'Shock Doctor Pro Mouth Guard', 'Our sports mouth guard is suitable for all contact sports where a mouth guard is required or recommended like: football, basketball, lacrosse, hockey, MMA, boxing, jiu jitsu and much more', 5.69, 1, 'https://images-na.ssl-images-amazon.com/images/I/710TCPdOn1L._SL1500_.jpg'),
  (22, 'Pure, Organic Canadian Maple Syrup, All-Natural, Grade-A Amber Rich Taste', "Naturally Delicious - This Grade-A Amber Rich Taste maple syrup is perfect for pancakes, waffles, desserts, drinks and all your favorite sweet treats with a smooth, natural flavor. Pure, Organic Quality - A family owned-and-operated brand, our Canadian organic maple syrup is free of additives, preservatives and artificial flavors. Vegan Friendly - Kosher and organic syrup is completely naturally and totally delicious, making it great for kids, adults and special dietary needs. Resealable Freshness Unlike most Canadian maple syrup brands, our glass bottles can be resealed tight to ensure a fresh, sweet taste every time it's opened. Canadian Made Quality - Every bottle of our organic pure maple syrup is crafted in Canada to ensure you get the best maple syrup available.", 36.95, 2, 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_Jbeywxx9qUBhJobfq0hLUuoVatidGjPVkqVHzNQ2hqftm8oog7HS2QmRmQH4vvUA_KN1UHge0lo_7Bpoko0iicV_AbwloXL5wjkyzdmhWcKgCjoPrde1f7ms&usqp=CAY');



  -- select itemData.productId,itemData.productName,itemData.productDescription,itemData.price, categories.category from itemData inner join categories on itemData.categoryId=categories.categoryId;

  -- select images.imgUrl from images inner join itemData on images.productId=itemData.productId;

  -- select (select itemData.productId,itemData.productName,itemData.productDescription,itemData.price, categories.category from itemData inner join categories on itemData.categoryId=categories.categoryId,)

  -- select 
  --   itemData.productId,
  --   itemData.productName,
  --   itemData.productDescription,
  --   itemData.price, 
  --   categories.category,
  --   images.imgUrl
  -- from itemData limit 1
  -- inner join categories on itemData.categoryId=categories.categoryId 
  -- inner join images on images.productId=itemData.productId 
  -- where itemData.productId = 1;
 