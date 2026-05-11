import "./App.css";
import bandImage from "./assets/strengelauget_comp.webp";

const SPOTIFY_URL = "https://www.google.com/";

const bio = [
    `Skuespiller Espen Rognlien har, på tross av utdannelse som rørleggermester,
   og lokal suksess som festivalarrangør, spilt teater store deler av livet, i
   roller over et spekter fra Lars Norén og Finn Carling til standup-komikk på
   Bjerke Travbane. I 2007 spilte han sjømannen Lauritz Moe i Nordbys helaftens
   nittitallsmonolog Come Back Liza, i 2016 hovedrollen i Nordbys
   «Judasevangeliet», spesialskrevet for ham, av en fremstående teaterkritiker
   fremholdt som en av årets tre viktigste norske teaterforestillinger. I tillegg
   flere biroller i suksessfylte tv-serier som «Kongsvik VGS»,
   «Førstegangstjenesten», «Jul i Blodfjell» og «Arkitekten».`,

    `Terje Nordby (tekst og musikk, akustisk gitar og munnspill) var på
   1980-tallet Tramteatrets forfatter og fikk i 1995 Ibsenprisen. Etter 10 år
   som aktivt redaksjonsmedlem av «Hallo i Uken» fortsatte han som dramatiker på
   2000-tallet med det historiske spelet «Kongeblod» for Akershus Festning,
   gjendiktning av Sokrates Forsvarstale for Toralv Maurstad / Nationaltheatret
   og suksessen Himmelske Lyster (Hedmark Teater). Nordby har skrevet en haug
   med bøker, produsert 400 radioprogrammer om mytologi (Mytekalenderen) og
   skrevet tekster til et album av Anita Skorgan (2013).`,

    `Øyvind Volan (akustiske gitarer / elgitar) er rørlegger og bredspektret
   gitarist som også trakterer trommer, en kjent skikkelse i Askers
   musikkmiljø, og har spilt på festivaler og konserter til alle døgnets tider
   siden 80-tallet.`,

    `Aage Schou (banjo, bouzouki og diverse perkusjonsinstrumenter) er utdannet
   kunstner og keramiker med flere separate utstillinger. Som musiker har han
   spilt flere instrumenter i mange sammenhenger, og trommer med Complaints,
   White Willow og Nippon Art.`,
];

function App() {
    return (
        <div className="site">
            <aside className="photo-panel" aria-hidden="true">
                <img
                    src={bandImage}
                    alt="Strengelauget – fire musikere på en stor stein i skogen"
                    className="photo-panel__img"
                />
                <div className="photo-panel__vignette" />
            </aside>

            <main className="content-panel">
                <div className="content-inner">
                    <div className="gold-rule" />

                    <p className="eyebrow">
                        Norsk americana &amp; country-folk
                    </p>

                    <h1 className="band-name">
                        Espen Rognlien & Strengelauget
                    </h1>

                    <div className="divider" />

                    <div className="bio">
                        {bio.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="cta-row">
                        <a
                            href={SPOTIFY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="spotify-btn"
                        >
                            <SpotifyIcon />
                            Hør oss på Spotify
                        </a>
                    </div>

                    <footer className="site-footer">
                        <span>© {new Date().getFullYear()} Strengelauget</span>
                    </footer>
                </div>
            </main>
        </div>
    );
}

function SpotifyIcon() {
    return (
        <svg
            className="spotify-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.307a.748.748 0 0 1-1.03.25c-2.819-1.722-6.365-2.112-10.542-1.157a.748.748 0 0 1-.333-1.459c4.571-1.045 8.492-.595 11.655 1.337a.75.75 0 0 1 .25 1.029zm1.47-3.268a.937.937 0 0 1-1.288.308c-3.225-1.982-8.142-2.557-11.958-1.399a.937.937 0 0 1-.578-1.786c4.358-1.322 9.776-.682 13.516 1.59a.935.935 0 0 1 .308 1.287zm.126-3.402c-3.868-2.297-10.246-2.509-13.94-1.388a1.124 1.124 0 1 1-.652-2.151c4.239-1.287 11.285-1.038 15.738 1.605a1.124 1.124 0 0 1-1.146 1.934z" />
        </svg>
    );
}

export default App;
