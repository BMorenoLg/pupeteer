
const puppeteer = require('puppeteer');

describe('Mi primer test en puppeteer', () => {
	it('Debe abrir y cerrar el navegador', async () => {
		const browser = await puppeteer.launch({
			headless: false,
            args: ['--window-size=1920,1080'],
            defaultViewport:{
                width:1920,
                height:1080
            }
            
		});
		const page = await browser.newPage();
        
		await page.goto('https://automationexercise.com/');
		await new Promise(resolve => setTimeout(resolve, 1000));
        await page.waitForSelector('img');
        await page.type('H1', 'Exercise');

     
        const clickButtonGoogle = await Promise.all([
            page.waitForNavigation({waitUntil: 'networkidle0'}  ),
            page.click('text=Women'),
            page.click('.panel-body > ul > li:nth-child(2) > a'),
            await page.waitForSelector('h2'),
            await page.type('H1', 'Women - Tops Products'),
            await page.screenshot({ path: 'captura.png' }),
            //page.click('.FPdoLc > center:nth-child(1) > input:nth-child(1)'),
        ]);

        //await page.screenshot({ path: 'captura.png' });
        // const clickOptionSpotify = await Promise.all([
        //     page.waitForNavigation({waitUntil: 'networkidle0'}  ),
        //     page.click('text=Reproductor web: música para todos - Spotify'),
        // ]); 
       

        //recargar la pagina
        //await page.reload();
        //await page.waitForSelector('img');

        //navegar a otro sitio
        //await page.goto('https://google.com');

        //navegar hacia atras
        //await page.goBack();
        //navegar hacia adelante
        //await page.goForward();

        //abrir otra pestaña
        //const page2 = await browser.newPage()
        //await page2.goto('https://open.spotify.com/intl-es');
        //await page.waitForSelector('xpath//html/body/div[5]/div/div[2]/div[1]/div[1]/a/svg/title');

		await browser.close();
	},600000);
});