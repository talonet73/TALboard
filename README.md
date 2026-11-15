# TALboard

Dashboard personale per iPhone: attività, lavori, impegni ed eventi con categorie a colori, hashtag, grafici, report, pensieri a voce e avvisi.

> ⚠️ **Funziona bene solo con Safari su iPhone**, installata sulla schermata Home.
> Da Chrome, Firefox o altri browser su iPhone notifiche, microfono e installazione non funzionano correttamente.

## Installazione su iPhone
1. Apri **Safari** e vai su **https://talonet73.github.io/TALboard/**
2. Tocca **Condividi** → **Aggiungi alla schermata Home** (lascia attivo "Apri come web app") → **Aggiungi**
3. Apri TALboard sempre dall'icona sulla schermata Home
4. In Impostazioni tocca **Consenti notifiche**; al primo pensiero vocale consenti il microfono

## Privacy
In questo repository c'è solo il codice dell'app. Tutti i dati (attività, categorie, pensieri) restano **solo sull'iPhone**: niente server, niente account. Il backup è un file che invii per mail a te stesso.

## Avvisi
- In-app (−1 h e −10 min) mentre l'app è aperta
- Garantiti anche ad app chiusa: pulsante **📅 Avvisi nel Calendario iPhone** (evento con due allarmi)

## Struttura
- `index.html`: tutta l'app
- `sw.js`: funzionamento offline
- `manifest.webmanifest`, `icons/`: installazione e icona
