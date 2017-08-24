var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.manage().window().setSize(1500, 900);

driver.get('http://www.supremenewyork.com/shop/all/accessories');
// driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.partialLinkText('Gonz')).click();
driver.wait(() => {
  return driver.findElement(By.className("//div[@id='sidebar']")) 
}, 5000);











// driver.findElement(By.xpath("//div[@id='container']"));
// driver.quit();
// driver.wait(until.titleIs('webdriver - Google Search'), 1000);
// driver.quit();