# Art Pet Litoral

Site institucional de página única, responsivo, com identidade azul e amarela, fotos reais, serviços, rações e acessórios, avaliações, mapa e contato pelo WhatsApp.

## Publicar na Vercel

1. Na Vercel, escolha **Add New → Project** e importe `lucasdecmedina-ui/Artpetlitoral`.
2. Mantenha **Root Directory** na raiz do repositório (`.`) e **Framework Preset: Other**.
3. Clique em **Deploy**. O arquivo `vercel.json` já define o build (`npm run build`) e a saída (`dist`). Não é necessário instalar dependências ou configurar segredos.

O site na Vercel funciona diretamente, sem login do ChatGPT. O endereço usado em compartilhamentos, canonical e sitemap é preenchido no build com `VERCEL_PROJECT_PRODUCTION_URL` (ou `VERCEL_URL`). Ao conectar um domínio próprio, defina `SITE_URL` nas variáveis de ambiente da Vercel, por exemplo `https://seudominio.com.br`, e faça um novo deploy. Não é preciso alterar os arquivos para escolher um domínio.

## Rodar no computador

Requer Node.js 22 ou superior. Não há pacotes externos para instalar.

```sh
npm run check
npm run build
npm start
```

Abra `http://localhost:3000`. Fora da Vercel, o build usa esse endereço se `SITE_URL` não estiver definido. O arquivo `.env.example` documenta a variável; configure-a no ambiente do terminal ou no painel da Vercel.

## Onde editar

- `public/index.html`: textos, serviços, avaliações, produtos, contatos e mapa.
- `public/styles.css`: cores, tipografia, layout e animações.
- `public/app.js`: menu, links de WhatsApp e comportamento da página.
- `public/assets/`: logo e fotos otimizadas.
- `scripts/build.mjs`: gera a pasta `dist`, o sitemap e o robots.txt.

Edite `public/`; a pasta `dist/` é gerada e não vai para o Git. O site não possui carrinho ou pagamento: pedidos e agendamentos seguem para o WhatsApp. Os nomes das marcas são apresentados em texto.

## Informações e fontes

- Instagram: https://www.instagram.com/artpetlitoral/
- Google Maps: https://maps.app.goo.gl/2F84vPUyHMoGbzk86
- WhatsApp: +55 13 98876-5823.
- Endereço: Av. Bernardino de Campos, 208 B — Santos/SP.
- Logo e seis fotos de pets fornecidas pelo responsável pelo projeto.
- Foto da fachada encontrada no Google Maps, identificada como março de 2022.
- Avaliações reais de Maria Helena Marques e Gabriel Ricardo Rocha de Lira; nota 5,0 com 55 avaliações consultada em 27/10/2026. O bloco é estático, sem atualização automática.
- Horários, bairro e CEP foram omitidos por divergência entre fontes; visitantes são orientados a consultar a loja.

As fontes tipográficas são carregadas pelo Google Fonts, com fontes alternativas locais. O mapa incorporado depende do Google Maps. Fotos, logo, estilos e comportamento principal estão no próprio repositório.
