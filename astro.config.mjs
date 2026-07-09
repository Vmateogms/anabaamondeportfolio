// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';


export default defineConfig({
    output: 'server', 
    adapter: node({mode: 'standalone'}),
    site: 'https://anabaamondeperez.com',
    security: {
        allowedDomains: [
            { hostname: 'anabaamondeperez.com', protocol: 'https' },
            { hostname: 'www.anabaamondeperez.com', protocol: 'https' }, // solo si usas www
        ]
    },
    i18n: {
        locales: ["es", "en"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: true,
        }
    }

});