import PlaceholderImage from '../assets/images/Placeholder.jpg';
import jumiGithub from '../assets/images/project-jumi/github.jpeg';

const projects = [
  {
    id: 'projekt-1',
    title: 'Fotomanager',
    image: PlaceholderImage,
    description: 'Ein Fotomanager als Java-Anwendung unter Verwendung von JavaFX.',
    roles: ['Entwickler', 'Konfliktmanager', 'Designer von UML-Diagrammen', 'Tester'],
    stack: ['Java', 'JavaFX', 'PlantUML'],
    content: 'Im Rahmen des Moduls „Programmierung in Java“, das sich mit fortgeschrittener Java-Programmierung beschäftigt, haben wir eine Java-Anwendung entwickelt, die als Fotomanager fungiert. Das Projekt umfasste wöchentliche Abgaben von Diagrammen und Protokollen, und es wurde JavaFX für die Benutzeroberfläche verwendet. Eine Datenbank zu persistenten Speicherung durfte nicht verwendet werden.',
    details: '',
    bonusImages: [],
    bonusVideos: [],
  },
  {
    id: 'projekt-2',
    title: 'JuMi-Webseite',
    image: PlaceholderImage,
    description: 'Website zur Verwaltung von privaten Statistikdaten für das Justizministerium des Landes Schleswig-Holstein.',
    roles: ['Entwickler', 'Anforderungsermittler', 'Systemarchitektur Designer', 'Datenbank Designer'],
    stack: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'SQL'],
    content: 'Im Rahmen des Moduls "Projekt Informatik" wurde für das Justizministerium des Landes Schleswig-Holstein eine Website erstellt, welche zum Parsen, Darstellen und Bewerten von Analysedaten bezüglich verwendeter Websites im Justizministerium verwendet werden sollte. Die Herausforderung hier war es, dass keine modernen Frameworks wie React oder Vue.js verwendet werden durften. Außerdem durften auch keine Technologien wie Docker verwendet werden.',
    details: `Auf der Website war ich verantwortlich für:
                • Die Vergleich-Seite
                • Die Verwalten-Seite
                • Filter-Funktionen
                • Jegliche Tabellen
                • Light/Dark-Mode
                • Datenbank-Design
                • Datenbankverwaltung
                • Website-Server Kommunikation
                • Unterstützen aller Teammitglieder bei Merge-Konflikten

                Beteiligt war ich an fast allem, abgesehen von der Admin-Authentifizierung und der API zum Prüfen, ob Websites sicher oder unsicher sind.`,
    bonusImages: [jumiGithub],
    bonusVideos: [],
  },
  {
    id: 'projekt-3',
    title: 'Alte Portfolio-Webseite',
    image: PlaceholderImage,
    description: 'Meine erste Portfolio-Website, die für meine Praktikumsstelle erstellt werden sollte, um einen Einblick in meinen damaligen Wissensstand zu bekommen.',
    roles: [],
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Git', 'GitHub', 'Firebase Hosting'],
    content: 'Diese Website wurde für mein Praktikum vollständig von mir selbst erstellt. Sie sollte einen Einblick in meine damaligen Erfahrungen und Kenntnisse bringen.',
    details: '',
    bonusImages: [],
    bonusVideos: [],
  },
  {
    id: 'projekt-4',
    title: '"Curve Fever" - Spiel',
    image: PlaceholderImage,
    description: 'Das Spiel ist eine eigene Interpretation des Spiels "Curve Fever" und durfte nicht mit dem Canvas-Element von HTML realisiert werden.',
    roles: ['Entwickler', 'Designer der Systemarchitektur', 'Tester'],
    stack: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitLab'],
    content: 'Im Rahmen des Moduls „Webentwicklung“ entstand in einem Team von zwei Personen dieses Spiel. Das Canvas-Element von HTML durfte dabei nicht verwendet werden, wodurch ein Aspekt wie Performance besonders berücksichtigt werden musste.',
    details: `Dies war mein erstes Projekt mit HTML und JavaScript. Mein Teampartner trug mit maximal 50-100 Zeilen Code recht wenig in dieser Hinsicht dazu bei, war jedoch während der gesamten Entwicklungszeit stets präsent, um das Projekt zu unterstützen.
              Um dieses Projekt auf GitHub bereitzustellen, musste eine beschädigte .rar-Datei wiederhergestellt werden. Dadurch gingen leider die selbst komponierten Soundeffekte verloren.`,
    bonusImages: [],
    bonusVideos: [],
  },
  {
    id: 'projekt-5',
    title: 'Rezepte-App',
    image: PlaceholderImage,
    description: 'Eine Android-App für Rezepte mit Dart in dem Framework Flutter.',
    roles: ['Entwickler', 'UI/UX-Designer', 'Tester'],
    stack: ['Dart', 'Flutter', 'Firebase', 'Figma', 'Git', 'GitHub'],
    content: 'Im Rahmen des Moduls „Mobile Systeme“ haben wir in einem Team von drei Personen eine Rezept-App in Flutter und Dart entwickelt. Die App ermöglicht das Erstellen, Bearbeiten, Löschen, Suchen und Anzeigen von Rezepten. Diese werden in Firebase gespeichert. Benutzer können sich authentifizieren und ihre Profile sowie Einstellungen verwalten. Die „Top-Chefs“ werden anhand der Anzahl ihrer Rezepte angezeigt.',
    details: `In diesem Projekt war ich unter anderem für die Erstellung und das Design der Login- und Sign-Up-Seiten verantwortlich. Ich habe die Detailansicht für Rezepte gestaltet und implementiert, sowie diese mit Firebase verknüpft. Zudem habe ich die Funktion zum Aufnehmen von Fotos für Rezepte erstellt, eine Seite zur Anzeige der Top-Chefs entwickelt und die Ansicht für gelikte Rezepte im Profil erstellt. Weitere Aufgaben umfassten unter anderem die Implementierung von Profileinstellungen, die Löschfunktion für Kommentare und das Laden sowie Speichern von Profilbildern.
              Abgesehen davon haben alle Teammitglieder gemeinsam an der Lösung von Merge-Konflikten gearbeitet und Designentscheidungen in wöchentlichen Treffen besprochen.`,
    bonusImages: [],
    bonusVideos: [],
  },
  {
    id: 'projekt-6',
    title: 'TVListBeautify-App',
    image: PlaceholderImage,
    description: 'Eine Android-App für Serien und Filme mit Dart in dem Framework Flutter.',
    roles: ['Entwickler', 'UI/UX-Designer', 'Tester'],
    stack: ['Dart', 'Flutter', 'Git', 'GitHub', 'Miro'],
    content: 'Privat habe ich eine einfache Flutter-App entwickelt, die eine Liste von Serien und Filmen in eine ansprechende, visuell filterbare Liste umwandelt. Ursprünglich war auch geplant, dass Benutzer die Serien bewerten können, jedoch wurde diese Funktion nicht vollständig umgesetzt. Ich hatte nie wirklich vor, diese App zu veröffentlichen, weshalb der API-Key direkt in der App hinterlegt war. Diese ist natürlich nicht mehr gültig.',
    details: 'Dieses Projekt entstand aus persönlichem Interesse. Ich hatte bereits eine „Watchlist“ in meiner Notizen-App, die ich visuell besser gestalten wollte.',
    bonusImages: [],
    bonusVideos: [],
  },
  {
    id: 'projekt-7',
    title: '"Flappy Bird" AI',
    image: PlaceholderImage,
    description: 'Ein Flappy Bird Spiel, welches von einer AI gespielt wird.',
    roles: ['Entwickler', 'Designer der Systemarchitektur', 'Tester'],
    stack: ['JavaScript', 'HTML', 'CSS', 'Python', 'Pygame', 'TensorFlow', 'Git', 'GitHub'],
    content: 'Als Mini-Projekt habe ich privat das Spiel "Flappy Bird" sowohl webbasiert als auch in Pygame entwickelt. Zudem habe ich eine KI erstellt, die das Spiel in pygame lernen und spielen sollte. Derzeit funktioniert das Langzeitlernen jedoch nicht optimal, wodurch die KI nach einigen Versuchen keine Aktionen mehr durchführt.',
    details: 'Dieses Projekt entstand aus persönlichem Interesse. Ich wollte schon länger mal eine KI entwickeln, die ein Spiel spielt. Flappy Bird erschien mir als geeignetes Spiel, da es relativ einfach ist. Um beim nächsten Mal bessere Ergebnisse zu erzielen, werde ich entweder ein anderes Spiel wählen oder eventuell einfachere Algorithmen verwenden.',
    bonusImages: [],
    bonusVideos: [],
  },
];

export default projects;
