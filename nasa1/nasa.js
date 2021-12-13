let puppeteer = require("puppeteer");

(async()=>{
    let browser = await puppeteer.launch({
        headless:false,
        slowMo: 100,
        defaultViewport:null,
        args:['--start-maximized']
    })
    let page = await browser.newPage();
    await page.goto("https://www.google.com");
    await page.waitForSelector(".gLFyf.gsfi");
    await page.type(".gLFyf.gsfi","nasa");
    await page.keyboard.press("Enter")
    await page.waitForSelector('a[href="https://www.nasa.gov/"]');
    await page.click('a[href="https://www.nasa.gov/"]');
    await page.waitForSelector('a[href="javascript:void(0);"]')
    let arr = await page.$$('a[href="javascript:void(0);"]');
    arr[4].hover();
    await page.waitForSelector('a[href="/feature/third-rock-radio"]');
    await page.click('a[href="/feature/third-rock-radio"]');
    await page.waitForSelector('.text')
    let results = await page.evaluate(()=>{
        let something = document.querySelectorAll('.text>p')
        let arr =[]
        for(i=0;i<something.length;i++){
            arr.push(something[i].textContent)
        }
        return arr
    })
    console.log(results)
})()