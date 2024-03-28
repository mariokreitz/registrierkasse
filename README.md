# Registrierkasse [![Netlify Status](https://api.netlify.com/api/v1/badges/b565616d-048d-4be0-9e47-8a0f74a81a8a/deploy-status)](https://app.netlify.com/sites/registrierkasse/deploys)

Dieses Projekt ist Teil des JavaScript-Algorithmen- und Datenstrukturkurses auf freeCodeCamp.org. Es handelt sich um die Registrierkasse, die eine Funktion hat, die den Status des Kassenbestands und des Wechselgeldes basierend auf dem Einkaufsbetrag und dem gezahlten Geld berechnet.

## Vorschau

Fühlen Sie sich frei, das [Demo hier](https://codepen.io/mariokreitz/pen/bGJrXVQ)) auszuprobieren.

## Status

- **UNZUREICHENDES GUTHABEN:** Wenn das Kassenfach weniger Bargeld enthält als das Wechselgeld oder wenn Sie das genaue Wechselgeld nicht zurückgeben können.
- **GESCHLOSSEN:** Wenn das Kassenfach dem Wechselgeld entspricht.
- **OFFEN:** Wenn das Kassenfach mehr Bargeld enthält als das Wechselgeld und Sie das Wechselgeld zurückgeben können, wobei das Wechselgeld in Münzen und Scheinen in absteigender Reihenfolge sortiert ist.

## Währungseinheit und Betrag

- Penny: $0,01 (PENNY)
- Nickel: $0,05 (NICKEL)
- Dime: $0,10 (DIME)
- Quarter: $0,25 (QUARTER)
- Dollar: $1 (ONE)
- Fünf Dollar: $5 (FIVE)
- Zehn Dollar: $10 (TEN)
- Zwanzig Dollar: $20 (TWENTY)
- Ein Hundert Dollar: $100 (ONE HUNDRED)
   
## Installation

1. Klone das Repository:

```bash
git clone https://github.com/mariokreitz/registrierkasse.git
```

2. Navigiere zum Projektverzeichnis:

```bash
cd registrierkasse
```

3. Öffne die `index.html`-Datei in einem Webbrowser deiner Wahl.

## Verwendung

1. Geben Sie eine Zahl in das Eingabefeld ein.
2. Klicke auf die Schaltfläche "Purchase" oder betätigen Sie die "Enter" Taste.
3. Das Ergebnis wird oberhalb der Eingabe angezeigt.

## Beispiel

Wenn du "2" eingibst bei einem "Total $ 1.87" , wird das Ergebnis wie folgt sein:

- Status: OPEN
- DIME: $0.1
- PENNY: $0.03

## Anpassung

Du kannst das Design oder die Funktionalität der Registrierkasse an deine eigenen Bedürfnisse anpassen, indem du die HTML-, CSS- und JavaScript-Dateien bearbeitest.

## Beitrag

Fühlen Sie sich frei, Pull-Requests mit Verbesserungsvorschlägen oder Fehlerkorrekturen zu erstellen. Jede Art von Beitrag ist willkommen!

## Projekt von

Dieses Projekt ist eine Implementierung des freeCodeCamp-Projekts "Build a Cash Register" im JavaScript-Algorithmen- und Datenstrukturkurs.

## Mitwirkende

- [freeCodeCamp](https://github.com/freeCodeCamp)

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Weitere Informationen finden Sie in der [LICENSE](LICENSE) Datei.
