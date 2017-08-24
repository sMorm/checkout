var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://biancachandon.com/');

// Fetch Product
driver.findElement(By.className('image')).click();

// Select Color, Size, then Cart
driver.findElement(By.xpath("//select[@data-option='option1']/option[2]")).click();
driver.findElement(By.xpath("//select[@data-option='option2']/option[3]")).click();
driver.findElement(By.xpath("//input[@id='add-to-cart']")).click();

// Checkout
driver.findElement(By.xpath("//input[@id='checkout']")).click();

driver.wait(until.titleIs('Bianca Chandon - Checkout'), 3000);

// Fill the Forms
driver.findElement(By.xpath("//input[@placeholder='Email']")).sendKeys('email@email.com');
driver.findElement(By.xpath("//input[@placeholder='First name']")).sendKeys('NAME');
driver.findElement(By.xpath("//input[@placeholder='Last name']")).sendKeys('LAST');
driver.findElement(By.xpath("//input[@placeholder='Address']")).sendKeys('email@email.com');
driver.findElement(By.xpath("//input[@placeholder='City']")).sendKeys('Reveeeeah');
driver.findElement(By.xpath("//input[@placeholder='Zip code']")).sendKeys('01010');
driver.findElement(By.xpath("//input[@placeholder='Phone']")).sendKeys('12345678900');

// Go to Shipping
driver.findElement(By.xpath("//button[@class='step__footer__continue-btn btn ']")).click();

// Go to payment
driver.findElement(By.xpath("//button[@class='step__footer__continue-btn btn ']")).click();

// Checkout
driver.findElement(By.xpath("//button[@class='step__footer__continue-btn btn ']")).click();
