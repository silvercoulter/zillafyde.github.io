// Album Data Configuration
const albumsData = [
    {
        id: 'album-burden',
        title: 'BURDEN',
        subtitle: 'Released December 15, 2025',
        image: 'pics/burden.png',
        spotifyUrl: 'https://open.spotify.com/artist/3sQXBRWZf6bXRj95DoBrPQ',
        appleUrl: 'https://music.apple.com/us/artist/zillafyde/1713588790',
        youtubeUrl: 'https://www.youtube.com/channel/UCMd6K2DBAiKF0CtdI2RxHtg',
        tracklist: [
            { title: 'Open Roads', lyrics: `Line 1 of lyrics
                Line 2 of lyrics
                Line 3 — chorus` },
            { title: 'On Your Side', lyrics: '[Lyrics coming soon]' },
            { title: "It's Hot Don", lyrics: '[Lyrics coming soon]' },
            { title: 'Back Pain', lyrics: '[Lyrics coming soon]' },
            { title: 'Fireworks', lyrics: '[Lyrics coming soon]' },
            { title: 'Regrets', lyrics: '[Lyrics coming soon]' },
            { title: 'Vibes', lyrics: '[Lyrics coming soon]' },
            { title: 'Let Me Down', lyrics: '[Lyrics coming soon]' },
            { title: 'Burden', lyrics: '[Lyrics coming soon]' }
        ],
        credits: [
            { name: 'Scott D. See', role: 'Writer, vocalist, guitar' },
            { name: 'Silver Coulter', role: 'Production, Lead Guitar, Writer, Backing Vocals, Cover Art' },
            { name: 'Joey Carpenter', role: 'Drumming' },
            { name: 'Brayden Mikels', role: 'Electric Bass Guitar' },
            { name: 'Kurt Bear', role: 'Saxophone solo on "Back Pain"' },
            { name: 'Bob Gonya', role: 'Piano on "Regrets"' },
            { name: 'Logan Richards', role: 'Burden Logo for album cover' },
            { name: 'Dustie Meadows', role: 'Photography for album cover' }
        ]
    },
    {
        id: 'album-lies',
        title: 'LIES',
        subtitle: 'Debut Album - October 14, 2023',
        image: 'pics/lies.webp',
        spotifyUrl: 'https://open.spotify.com/album/3TT0RoI0hMULrd8yaPqp9G',
        appleUrl: 'https://music.apple.com/us/album/lies/1713727398',
        youtubeUrl: 'https://www.youtube.com/watch?v=xMTIrEa150E&list=PL4l2wwD3V9dGCtsbwo8ccbJbxYvKqNTQz&pp=iAQB',
        tracklist: [
            { title: 'Loose', lyrics: '[Lyrics coming soon]' },
            { title: 'Bad Company', lyrics: '[Lyrics coming soon]' },
            { title: 'Whirlwind', lyrics: '[Lyrics coming soon]' },
            { title: 'The Devil', lyrics: '[Lyrics coming soon]' },
            { title: 'With Me', lyrics: '[Lyrics coming soon]' },
            { title: 'Molly', lyrics: '[Lyrics coming soon]' },
            { title: 'Set Me Free', lyrics: '[Lyrics coming soon]' },
            { title: 'The Ride', lyrics: '[Lyrics coming soon]' },
            { title: 'Nerve', lyrics: '[Lyrics coming soon]' },
            { title: 'Feels Right', lyrics: '[Lyrics coming soon]' },
            { title: 'not ok', lyrics: '[instrumental]' },
            { title: 'Okay', lyrics: '[Lyrics coming soon]' },
            { title: 'Jaded Eyes', lyrics: '[Lyrics coming soon]' },
            { title: 'Off the Kuff', lyrics: '[Lyrics coming soon]' },
            { title: 'Get it Right', lyrics: '[Lyrics coming soon]' }
        ],
        credits: [
            { name: 'Scott D. See', role: 'Writer, vocalist, guitar, additional percussion' },
            { name: 'Silver Coulter', role: 'Production, Lead Guitar, Drums, Bass, Backing Vocals' },
            { name: 'Ben Levato', role: 'Guest Backing vocals and drumming on "Feels Right" and "not ok"' },
            { name: 'Amy Dunn', role: 'Cover Artwork' },
            { name: 'Danny Starcevich II', role: 'Guest lead guitar and arrangement for "The Devil"' },
            { name: "'The' Sean Brooks", role: 'Lead guitar for "Off the Kuff"' },
            { name: 'Lisa Papesh-Evans', role: 'Guest Backing vocals on "With Me" and management' },
            { name: 'Kelso', role: 'Guest harmonica on "Off the Kuff"' },
            { name: 'David See', role: 'Songwriter for "With Me"' },
            { name: 'James "Duck" Duckworth', role: 'Conga for "not ok" and "Okay"' },
            { name: 'Kenan Rainwater', role: 'Mastering Engineer at Rainwater Studios' }
        ],
        dedication: 'Dedicated to Dave Dulin'
    },
    {
        id: 'album-acoustic',
        title: 'Acoustic Sessions',
        subtitle: '<a href="https://wfhb.org/wfhb-welcomes-zillafyde-to-saturdays-child/" target="_blank" rel="noopener noreferrer" style="color: #ff6b35; text-decoration: underline;">WFHB Welcomes Zillafyde to Saturday\'s Child</a>',
        image: 'pics/chillafyde.jpg',
        spotifyUrl: '#',
        appleUrl: 'https://podcasts.apple.com/us/podcast/wfhb-welcomes-chillafyde-to-saturdays-child/id1737236882?i=1000761132115',
        youtubeUrl: '#',
        tracklist: [
            { title: 'WFHB Saturday\'s Child', lyrics: `1. Okay
                2. Regrets
                3. Jaded Eyes
                4. Set Me Free
                5. Get it Right
                (Set Break and interview)
                6. With Me
                7. Don't Know
                8. Burden
                9. Molly
                10. It's Hot Don
                11. Capo 4` },
        ],
        credits: [
            { name: 'Show', role: 'WFHB Saturday\'s Child' },
            { name: 'Scott D. See', role: 'Writer, vocalist, guitar,' },
            { name: 'Silver Coulter', role: 'Backup vocals, lead guitar' },
            { name: 'Duck', role: 'Conga' },
            { name: 'Spencer Sherman', role: 'Bass' },
            { name: 'Monroe County History Center', role: 'Venue and supporter of Saturday\'s Child' },
            { name: 'Loren Wood Builders', role: 'Supporter of Saturday\'s Child' },
            { name: 'Jeffery (Sundog) Morris', role: 'Creator, Chief Engineer, Executive Producer' },
            { name: 'Jim Lang', role: 'Symbols and Sounds' },
            { name: 'Marian Conaty', role: 'Cables and Connections' },
            { name: 'Ilze Akerbergs', role: 'Digital Doohickies and Archival Production' },
            { name: 'Kaiya G.', role: 'Booking assistance' },
            { name: 'Ella copa', role: 'Archives' },
            { name: 'Terry Mason', role: 'Time in tune' },
            { name: 'Joe Loop', role: 'Everything Else' },
            { name: 'Jack Laskey', role: 'Studio Engineer' },
            { name: 'D. James', role: 'Host' },
            { name: 'Sundog Productions', role: 'Production Company' },
        ]
    },
    {
        id: 'album-cover',
        title: 'Cover Collection',
        subtitle: 'Reimagined classics',
        image: 'asshats/photo_2023-05-01_10-12-04.webp',
        spotifyUrl: '#',
        appleUrl: '#',
        youtubeUrl: '#',
        tracklist: [
            { title: 'Coming Soon', lyrics: '[Track information coming soon]' }
        ],
        credits: [
            { name: 'TBA', role: 'Information coming soon' }
        ]
    }
];

// Template function to generate album modal HTML
function generateAlbumModal(album) {
    const tracklistAccordion = album.tracklist.map((track, idx) => `
        <div class="accordion-item">
            <button class="accordion-toggle">${idx + 1}. ${track.title}</button>
            <div class="accordion-content"><p>${track.lyrics}</p></div>
        </div>
    `).join('');

    const creditsHtml = album.credits.map(credit => `
        <p><strong style="color: #ff6b35;">${credit.name}</strong><br>${credit.role}</p>
    `).join('');

    const dedicationHtml = album.dedication ? `<p style="margin-top: 1.5rem; font-style: italic; padding-top: 1.5rem; border-top: 1px solid #333;">${album.dedication}</p>` : '';

    return `
        <div id="${album.id}" class="album-modal">
            <div class="modal-content modal-large">
                <a href="#" class="close-modal">&times;</a>
                <div class="modal-header">
                    <img src="${album.image}" alt="${album.title}" class="modal-artwork-large">
                    <div class="modal-header-info">
                        <h2>${album.title}</h2>
                        <p style="color: #ff6b35; font-style: italic; margin-bottom: 1rem;">${album.subtitle}</p>
                        <h3>Stream</h3>
                        <div class="streaming-links">
                            <a href="${album.spotifyUrl}" class="stream-icon spotify" title="Spotify"><i class="fab fa-spotify"></i></a>
                            <a href="${album.appleUrl}" class="stream-icon apple" title="Apple Music"><i class="fab fa-apple"></i></a>
                            <a href="${album.youtubeUrl}" class="stream-icon youtube" title="YouTube"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="modal-tabs">
                    <button class="tab-button active" data-tab="tracklist-${album.id}">Tracklist</button>
                    <button class="tab-button" data-tab="credits-${album.id}">Credits</button>
                </div>
                
                <div id="tracklist-${album.id}" class="tab-content active">
                    <h3>Tracklist</h3>
                    <div class="tracklist-accordion">
                        ${tracklistAccordion}
                    </div>
                </div>
                
                <div id="credits-${album.id}" class="tab-content">
                    <h3>Credits & Liner Notes</h3>
                    <div style="color: #d0d0d0; line-height: 1.8; font-size: 0.95rem;">
                        ${creditsHtml}
                        ${dedicationHtml}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate all modals and insert into page
function initializeAlbumModals() {
    const container = document.getElementById('album-modals-container');
    if (container) {
        container.innerHTML = albumsData.map(album => generateAlbumModal(album)).join('');
        
        // Re-attach event listeners for tab and accordion functionality
        initializeInteractivity();
    }
}

// Tab and accordion functionality
function initializeInteractivity() {
    // Tab functionality
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Hide all tabs in this modal
            const modal = this.closest('.modal-content');
            modal.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Remove active class from all buttons in this modal
            modal.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Show selected tab and mark button as active
            modal.querySelector('#' + tabName).classList.add('active');
            this.classList.add('active');
        });
    });

    // Accordion functionality
    document.querySelectorAll('.accordion-toggle').forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all accordions in this tracklist
            const tracklist = this.closest('.tracklist-accordion');
            tracklist.querySelectorAll('.accordion-toggle').forEach(btn => {
                btn.classList.remove('active');
            });
            tracklist.querySelectorAll('.accordion-content').forEach(acc => {
                acc.classList.remove('active');
            });
            
            // Toggle current accordion if it wasn't active
            if (!isActive) {
                this.classList.add('active');
                content.classList.add('active');
            }
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAlbumModals);
} else {
    initializeAlbumModals();
}
