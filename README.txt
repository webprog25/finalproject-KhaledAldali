[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19688502&assignment_repo_type=AssignmentRepo) 

Final Project
====================

Project Title: Ernährungstagebuch  
Your Name: Khaled Aldali

Overview
--------
Meine Webanwendung erlaubt es, Mahlzeiten einzutragen – mit Beschreibung, Kalorien und Kategorie (z. B. Frühstück).  
Alle Einträge werden als Liste angezeigt, und die Gesamtkalorienzahl wird automatisch berechnet.  
Man kann neue Einträge hinzufügen und bestehende löschen.  
Die Daten werden in einer MongoDB-Datenbank gespeichert.

Running
-------
Einfach `npm install` und danach `npm start` im Projektverzeichnis ausführen.  
Die App läuft lokal auf Port 1930 → `http://localhost:1930`  
Die API ist erreichbar unter `/api/meals` (GET, POST, DELETE).

Do I need to load data from init_db.mongodb?  
Nein – das Projekt funktioniert ohne diese Datei.  
Sie enthält nur Beispieldaten, falls man die Datenbank einmal befüllen möchte.

Features
--------
- Mahlzeiten hinzufügen (inkl. Kalorien und Kategorie)
- Automatische Gesamtkalorien-Anzeige
- Einzelne Einträge lassen sich löschen
- Klare Benutzeroberfläche
- Mobile-optimiertes Layout (Media Query)
- Live-Reload bei Änderungen im Dev-Modus (über socket.io)

Collaboration and libraries
---------------------------
Ich habe keine Zusammenarbeit mit anderen.  
Ich habe mir Beispiele aus dem Unterricht angesehen und mich an den Vorlagen aus den Aufgaben orientiert.

Manche Probleme beim Code (z. B. mit dem Formular oder API) habe ich mit Hilfe eines Buches gelöst:  
"IT-Handbuch für Fachinformatiker*innen von Sascha Kersken".  
Für die Verbindung zur MongoDB-Datenbank und beim Konfigurieren der Meise-Umgebung habe ich mir einmal Hilfe von einer KI geholt, weil es lokal nicht funktioniert hat.

Verwendete Libraries:
- express  
- mongodb  
- body-parser  
- cors  
- socket.io  
- nodemon

